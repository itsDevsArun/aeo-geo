import "server-only";
import { createHash } from "node:crypto";
import { z } from "zod";
import { runEvent } from "../audit";
import { db, type Sql } from "../db";
import { env } from "../env";
import { HttpError } from "../http";
import type { RunRow } from "../runner-auth";
import { uploadObject } from "../storage";
import { getCampaign, senderOf, type Campaign } from "./campaigns";
import { renderForRecipient, getTemplateVersion } from "./templates";
import { valuesForMapping, type MappingEntry } from "@/shared/forms";
import { AttemptUpdateRequest, EvidenceFailureRequest, type WorkItem } from "@/shared/runner-api";
import { MAX_EVIDENCE_BYTES, type EvidenceKind } from "@/shared/constants";
import { validateOutgoingMessage } from "@/shared/message";

interface Target {
  candidate_id: string;
  business_id: string;
  domain: string;
  label: string | null;
  label_verified: boolean;
  adapter_id: string;
  form_url: string;
  form_selector: string;
  submit_selector: string;
  mapping: MappingEntry[];
}

function deadlinePassed(run: RunRow): boolean {
  if (!run.deadline_at) return false;
  return Date.now() >= new Date(run.deadline_at).getTime() - env.newWorkCutoffSeconds * 1000;
}

/** Hand the runner exactly one next unit of work, based only on persisted state. */
export async function nextWork(run: RunRow, opts: { skipSearch?: boolean; providers?: ("brave" | "osm")[] } = {}): Promise<WorkItem> {
  const sql = db();
  const [cur] = await sql<RunRow[]>`select id, campaign_id, mode, status, deadline_at, stop_requested_at, cancel_requested_at, budget_minutes from runs where id = ${run.id}`;
  if (cur.cancel_requested_at || ["cancelled", "lost"].includes(cur.status)) return { type: "stop", reason: "cancel_requested" };
  if (cur.stop_requested_at || cur.status !== "running") return { type: "stop", reason: "stop_requested" };
  if (deadlinePassed(cur)) return { type: "stop", reason: "deadline" };
  const campaign = await getCampaign(cur.campaign_id);
  if (cur.mode === "discovery") return discoveryWork(cur, campaign, sql, !!opts.skipSearch, opts.providers ?? ["brave", "osm"]);
  if (cur.mode === "dry_run") return dryRunWork(cur, campaign, sql);
  return liveWork(cur, campaign, sql);
}

async function discoveryWork(run: RunRow, campaign: Campaign, sql: Sql, skipSearch: boolean, providers: ("brave" | "osm")[]): Promise<WorkItem> {
  const osmOk = providers.includes("osm");
  const braveOk = providers.includes("brave");
  const [{ count }] = await sql<{ count: number }[]>`
    select count(*)::int as count from candidates where campaign_id = ${campaign.id} and discovered_run_id = ${run.id}`;
  const [{ searches }] = await sql<{ searches: number }[]>`
    select count(*)::int as searches from run_events where run_id = ${run.id} and type = 'search_page_processed'`;
  const maxSearches = Number(process.env.MAX_SEARCH_REQUESTS_PER_RUN || 60);
  if (!skipSearch && count < campaign.max_candidates && searches < maxSearches) {
    // Country priority first (e.g. US, then AU, then CA, then worldwide).
    const [q] = await sql<{ id: string; query: string; next_offset: number; country: string }[]>`
      select id, query, next_offset, country from discovery_queries
      where campaign_id = ${campaign.id} and not exhausted
        and ((${osmOk} and query like 'osm:%') or (${braveOk} and query not like 'osm:%'))
        and not (last_run_id = ${run.id} and last_error is not null)
      order by priority, created_at, query limit 1`;
    if (q) {
      return { type: "search", queryId: q.id, query: q.query, offset: q.next_offset, country: q.country || campaign.country, language: campaign.search_language };
    }
  }
  const [c] = await sql<{ id: string; url: string; domain: string }[]>`
    select c.id, c.url, c.domain from candidates c
    where c.campaign_id = ${campaign.id} and c.review_status in ('pending', 'approved') and c.inspection_status = 'not_inspected'
      and not exists (select 1 from suppressions s join business_domains bd on bd.domain = s.domain where bd.business_id = c.business_id)
      and not exists (select 1 from run_events e where e.run_id = ${run.id} and e.candidate_id = c.id and e.type = 'website_selected')
    order by coalesce((select min(dq.priority) from discovery_queries dq where dq.campaign_id = c.campaign_id and dq.query = c.discovery_query), 999999), c.created_at
    limit 1`;
  if (!c) return { type: "none", reason: "queue_exhausted" };
  await runEvent({ runId: run.id, campaignId: campaign.id, candidateId: c.id, type: "website_selected", message: `Inspecting ${c.domain}` });
  return { type: "inspect", candidateId: c.id, url: c.url, domain: c.domain };
}

const TARGET_COLUMNS = (sql: Sql) => sql`
  c.id as candidate_id, c.business_id, c.domain, b.label, b.label_verified,
  a.id as adapter_id, a.form_url, a.form_selector, a.submit_selector, a.mapping`;

async function dryRunWork(run: RunRow, campaign: Campaign, sql: Sql): Promise<WorkItem> {
  const [t] = await sql<Target[]>`
    select ${TARGET_COLUMNS(sql)} from candidates c
    join businesses b on b.id = c.business_id
    join form_adapters a on a.candidate_id = c.id
    where c.campaign_id = ${campaign.id} and c.review_status = 'approved' and a.status in ('proposed', 'approved')
      and not exists (select 1 from attempts t where t.run_id = ${run.id} and t.candidate_id = c.id)
      and (${process.env.OUTREACH_DRY_RUN_NEW_ONLY !== "1"} or (
        not (a.status = 'approved' and a.test_status = 'passed')
        and not exists (select 1 from attempts t where t.business_id = c.business_id and t.mode = 'live' and t.status not in ('failed_before_submit', 'reconciled_not_sent'))))
      and not exists (select 1 from suppressions s join business_domains bd on bd.domain = s.domain where bd.business_id = c.business_id)
    order by coalesce((select min(dq.priority) from discovery_queries dq where dq.campaign_id = c.campaign_id and dq.query = c.discovery_query), 999999), c.reviewed_at nulls last limit 1`;
  if (!t) return { type: "none", reason: "queue_exhausted" };
  return createAttemptWork(run, campaign, t, "dry_run", sql);
}

async function liveWork(run: RunRow, campaign: Campaign, sql: Sql): Promise<WorkItem> {
  const [{ used }] = await sql<{ used: number }[]>`select count(*)::int as used from attempts where run_id = ${run.id} and mode = 'live'
    and status <> 'failed_before_submit'`;
  if (used >= campaign.max_live_attempts_per_run) return { type: "stop", reason: "limit_reached" };
  for (let i = 0; i < 25; i++) {
    const [t] = await sql<Target[]>`
      select ${TARGET_COLUMNS(sql)} from candidates c
      join businesses b on b.id = c.business_id
      join form_adapters a on a.candidate_id = c.id
      where c.campaign_id = ${campaign.id} and c.review_status = 'approved' and a.status = 'approved' and a.test_status = 'passed'
        and not exists (select 1 from attempts t where t.run_id = ${run.id} and t.candidate_id = c.id)
        and not exists (select 1 from attempts t where t.business_id = c.business_id and t.mode = 'live'
                        and t.status not in ('failed_before_submit', 'reconciled_not_sent'))
        and not exists (select 1 from suppressions s join business_domains bd on bd.domain = s.domain where bd.business_id = c.business_id)
      order by coalesce((select min(dq.priority) from discovery_queries dq where dq.campaign_id = c.campaign_id and dq.query = c.discovery_query), 999999), a.approved_at limit 1`;
    if (!t) return { type: "none", reason: "queue_exhausted" };
    const item = await reserveLiveAttempt(run, campaign, t);
    if (item) return item;
  }
  return { type: "none", reason: "queue_exhausted" };
}

/**
 * Atomic reservation of a live contact action:
 *  - re-check run state, approval, adapter, suppression inside one transaction with row locks;
 *  - insert the attempt (message + template version + attempt id) BEFORE any form is touched;
 *  - the partial unique index `attempts_live_once_per_business` makes concurrent/duplicate
 *    reservations for the same business impossible.
 */
export async function reserveLiveAttempt(run: RunRow, campaign: Campaign, t: Target): Promise<WorkItem | null> {
  return db().begin(async (tx) => {
    const [r] = await tx<{ status: string; cancel_requested_at: Date | null; stop_requested_at: Date | null }[]>`
      select status, cancel_requested_at, stop_requested_at from runs where id = ${run.id} for share`;
    if (r.status !== "running" || r.cancel_requested_at || r.stop_requested_at) return { type: "stop", reason: "stop_requested" } as WorkItem;
    const [c] = await tx<{ review_status: string; adapter_status: string; test_status: string }[]>`
      select c.review_status, a.status as adapter_status, a.test_status from candidates c
      join form_adapters a on a.id = ${t.adapter_id} where c.id = ${t.candidate_id} for update of c, a`;
    if (!c || c.review_status !== "approved" || c.adapter_status !== "approved" || c.test_status !== "passed") return null;
    const [sup] = await tx`select 1 from suppressions s join business_domains bd on bd.domain = s.domain where bd.business_id = ${t.business_id}`;
    if (sup) return null;
    const item = await createAttemptWork(run, campaign, t, "live", tx);
    if (item.type === "none") {
      // Must use the same transaction: it holds row locks the FK checks would wait on.
      await runEvent({ runId: run.id, campaignId: campaign.id, candidateId: t.candidate_id, type: "duplicate_prevented",
        message: `Reservation for ${t.domain} rejected: business already has a live attempt`, data: { count: 1, stage: "reservation" } }, tx);
      return null;
    }
    return item;
  });
}

async function createAttemptWork(run: RunRow, campaign: Campaign, t: Target, mode: "dry_run" | "live", sql: Sql): Promise<WorkItem> {
  if (!campaign.active_template_version_id) throw new HttpError(422, "No active template");
  const version = await getTemplateVersion(campaign.active_template_version_id, sql);
  const message = renderForRecipient(version, campaign, t.label_verified ? t.label : null);
  const fieldValues = valuesForMapping(t.mapping, senderOf(campaign), message);
  const inserted = await sql<{ id: string }[]>`
    insert into attempts (run_id, campaign_id, candidate_id, business_id, adapter_id, template_version_id, mode, status,
      subject, message, field_values, form_url)
    values (${run.id}, ${campaign.id}, ${t.candidate_id}, ${t.business_id}, ${t.adapter_id}, ${version.id}, ${mode}, 'reserved',
      ${message.subject}, ${message.body}, ${sql.json(fieldValues)}, ${t.form_url})
    on conflict do nothing returning id`;
  if (!inserted.length) return { type: "none", reason: "duplicate" };
  const attemptId = inserted[0].id;
  await runEvent({ runId: run.id, campaignId: campaign.id, candidateId: t.candidate_id, attemptId, type: "website_selected",
    message: `${mode === "live" ? "Live" : "Dry-run"} target ${t.domain}` }, sql);
  await runEvent({ runId: run.id, campaignId: campaign.id, candidateId: t.candidate_id, attemptId,
    type: mode === "live" ? "attempt_reserved" : "draft_prepared",
    message: `${mode === "live" ? "Submission attempt reserved" : "Draft prepared"} with template ${version.kind} v${version.version}` }, sql);
  return {
    type: mode,
    attemptId,
    candidateId: t.candidate_id,
    domain: t.domain,
    formUrl: t.form_url,
    formSelector: t.form_selector,
    submitSelector: t.submit_selector,
    mapping: t.mapping,
    fieldValues,
    subject: message.subject,
    message: message.body,
    fillAllowed: mode === "live" || campaign.dry_run_fill_domains.includes(t.domain),
  };
}

const ALLOWED_TRANSITIONS: Record<string, { from: string[]; modes: ("dry_run" | "live")[] }> = {
  filled: { from: ["reserved"], modes: ["dry_run", "live"] },
  submitting: { from: ["filled"], modes: ["live"] },
  confirmed: { from: ["submitting", "uncertain"], modes: ["live"] },
  unclear: { from: ["submitting", "uncertain"], modes: ["live"] },
  error_after_submit: { from: ["submitting", "uncertain"], modes: ["live"] },
  failed_before_submit: { from: ["reserved", "filled"], modes: ["live", "dry_run"] },
  dry_run_ok: { from: ["reserved", "filled"], modes: ["dry_run"] },
  dry_run_failed: { from: ["reserved", "filled"], modes: ["dry_run"] },
};

const EVENT_FOR_STATUS: Record<string, string> = {
  filled: "fields_filled",
  submitting: "submit_attempted",
  confirmed: "confirmation_observed",
  unclear: "review_required",
  error_after_submit: "error",
  failed_before_submit: "review_required",
  dry_run_ok: "dry_run_checked",
  dry_run_failed: "review_required",
};

/**
 * Runner progress for an attempt. The "submitting" transition is the submit gate:
 * it only succeeds while the run is active, and the runner must not click submit
 * unless it succeeds. Dry-run attempts can never enter "submitting".
 */
export async function updateAttempt(run: RunRow, raw: z.infer<typeof AttemptUpdateRequest>) {
  return db().begin(async (tx) => {
    const [r] = await tx<{ status: string; cancel_requested_at: Date | null }[]>`select status, cancel_requested_at from runs where id = ${run.id} for share`;
    const [a] = await tx<{ id: string; status: string; mode: "dry_run" | "live"; candidate_id: string; adapter_id: string | null; run_id: string; message: string; subject: string }[]>`
      select id, status, mode, candidate_id, adapter_id, run_id, message, subject from attempts where id = ${raw.attemptId} for update`;
    if (!a || a.run_id !== run.id) throw new HttpError(404, "Attempt not found for this run");
    const rule = ALLOWED_TRANSITIONS[raw.status];
    if (!rule.modes.includes(a.mode)) throw new HttpError(400, `${a.mode} attempts cannot move to ${raw.status}`);
    // Special case: the gate opened but the runner could not persist the checkpoint, so it never clicked.
    const gateAbort = raw.status === "failed_before_submit" && a.status === "submitting" && raw.gateAborted === true;
    if (!rule.from.includes(a.status) && !gateAbort) throw new HttpError(409, `Cannot move attempt from ${a.status} to ${raw.status}`);
    if (raw.status === "submitting") {
      if (r.status !== "running" && r.status !== "stopping") throw new HttpError(409, "Submit gate closed: run is not active");
      if (r.cancel_requested_at) throw new HttpError(409, "Submit gate closed: run cancelled");
      const v = validateOutgoingMessage({ subject: a.subject, body: a.message });
      if (!v.ok) throw new HttpError(422, "Submit gate closed: message failed validation", v.errors);
    } else if (!["running", "stopping"].includes(r.status) && !["confirmed", "unclear", "error_after_submit"].includes(raw.status)) {
      throw new HttpError(409, `Run is ${r.status}`);
    }
    const terminal = !["filled", "submitting"].includes(raw.status);
    await tx`update attempts set status = ${raw.status},
      final_url = coalesce(${raw.finalUrl ?? null}, final_url),
      confirmation_text = coalesce(${raw.confirmationText ?? null}, confirmation_text),
      error = coalesce(${raw.error ?? null}, error),
      field_values = case when ${raw.fieldValues ? 1 : 0} = 1 then ${tx.json((raw.fieldValues ?? {}) as never)} else field_values end,
      submit_started_at = case when ${raw.status} = 'submitting' then now() else submit_started_at end,
      finished_at = case when ${terminal} then now() else finished_at end,
      updated_at = now()
      where id = ${a.id}`;
    if (a.adapter_id) {
      if (raw.status === "dry_run_ok") {
        await tx`update form_adapters set test_status = 'passed', test_details = ${raw.error ?? "Selectors verified in dry run"},
          tested_run_id = ${run.id}, tested_at = now() where id = ${a.adapter_id}`;
      } else if (raw.status === "dry_run_failed" || raw.adapterIssue) {
        await tx`update form_adapters set test_status = 'failed', test_details = ${raw.adapterIssue ?? raw.error ?? "Dry run failed"},
          status = case when status = 'approved' then 'needs_manual' else status end,
          status_reason = ${raw.adapterIssue ?? raw.error ?? "Dry run failed"},
          tested_run_id = ${run.id}, tested_at = now() where id = ${a.adapter_id}`;
      }
    }
    await runEvent({ runId: run.id, campaignId: run.campaign_id, candidateId: a.candidate_id, attemptId: a.id,
      type: EVENT_FOR_STATUS[raw.status] ?? raw.status,
      message: `${raw.status.replace(/_/g, " ")}${raw.error ? `: ${raw.error}` : ""}${raw.confirmationText ? ` — "${raw.confirmationText.slice(0, 120)}"` : ""}`,
      data: { finalUrl: raw.finalUrl } }, tx);
    return { status: raw.status };
  });
}

function safeSegment(s: string): string {
  return s.replace(/[^a-zA-Z0-9_.-]/g, "_").slice(0, 80);
}

/** Store a screenshot in private object storage and record it. */
export async function storeEvidence(
  run: RunRow,
  meta: { kind: EvidenceKind; candidateId?: string; attemptId?: string; pageUrl?: string; contentType: string },
  bytes: Uint8Array,
) {
  if (bytes.byteLength === 0) throw new HttpError(400, "Empty screenshot");
  if (bytes.byteLength > MAX_EVIDENCE_BYTES) throw new HttpError(413, "Screenshot too large");
  if (!["image/jpeg", "image/png"].includes(meta.contentType)) throw new HttpError(415, "Unsupported image type");
  const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
  const isPng = bytes[0] === 0x89 && bytes[1] === 0x50;
  if (!(isJpeg || isPng)) throw new HttpError(415, "Body is not an image");
  const sql = db();
  if (meta.candidateId) {
    const [c] = await sql`select 1 from candidates where id = ${meta.candidateId} and campaign_id = ${run.campaign_id}`;
    if (!c) throw new HttpError(404, "Candidate not found");
  }
  if (meta.attemptId) {
    const [a] = await sql`select 1 from attempts where id = ${meta.attemptId} and run_id = ${run.id}`;
    if (!a) throw new HttpError(404, "Attempt not found for run");
  }
  const ext = isPng ? "png" : "jpg";
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const subject = meta.attemptId ? `attempt-${meta.attemptId.slice(0, 8)}` : `candidate-${(meta.candidateId ?? "none").slice(0, 8)}`;
  const filename = safeSegment(`run-${run.id.slice(0, 8)}_${subject}_${meta.kind}_${ts}.${ext}`);
  const path = `campaigns/${run.campaign_id}/runs/${run.id}/${filename}`;
  const sha = createHash("sha256").update(bytes).digest("hex");
  await uploadObject(path, bytes, isPng ? "image/png" : "image/jpeg");
  const [e] = await sql<{ id: string }[]>`
    insert into evidence (campaign_id, run_id, candidate_id, attempt_id, kind, object_path, filename, content_type, bytes, sha256, page_url)
    values (${run.campaign_id}, ${run.id}, ${meta.candidateId ?? null}, ${meta.attemptId ?? null}, ${meta.kind}, ${path}, ${filename},
      ${isPng ? "image/png" : "image/jpeg"}, ${bytes.byteLength}, ${sha}, ${meta.pageUrl?.slice(0, 2000) ?? null}) returning id`;
  await runEvent({ runId: run.id, campaignId: run.campaign_id, candidateId: meta.candidateId, attemptId: meta.attemptId,
    type: "screenshot_saved", message: `${meta.kind} screenshot saved (${Math.round(bytes.byteLength / 1024)} KB)`, data: { evidenceId: e.id, filename } });
  return { evidenceId: e.id, filename };
}

/** Record that a screenshot could not be captured (never invent evidence). */
export async function recordEvidenceFailure(run: RunRow, raw: z.infer<typeof EvidenceFailureRequest>) {
  const sql = db();
  const filename = `capture-failed_${raw.kind}`;
  const [e] = await sql<{ id: string }[]>`
    insert into evidence (campaign_id, run_id, candidate_id, attempt_id, kind, filename, page_url, capture_error)
    values (${run.campaign_id}, ${run.id}, ${raw.candidateId ?? null}, ${raw.attemptId ?? null}, ${raw.kind}, ${filename},
      ${raw.pageUrl ?? null}, ${raw.error}) returning id`;
  await runEvent({ runId: run.id, campaignId: run.campaign_id, candidateId: raw.candidateId, attemptId: raw.attemptId,
    type: "error", message: `Screenshot capture failed (${raw.kind}): ${raw.error}` });
  return { evidenceId: e.id };
}
