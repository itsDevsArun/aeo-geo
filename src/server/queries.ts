import "server-only";
import { db } from "./db";
import { HttpError } from "./http";
import type { FormInfo, MappingEntry, PageFlags } from "@/shared/forms";

/** Read models for dashboard pages. All callers must have authenticated the user. */

export async function listCandidates(campaignId: string, f: { status?: string; q?: string }) {
  return db()<Record<string, unknown>[]>`
    select c.id, c.domain, c.url, c.title, c.discovery_query, c.review_status, c.inspection_status, c.suitability_notes, c.created_at,
      b.label, b.label_verified, a.status as adapter_status, a.test_status,
      (select cp.final_url from contact_pages cp where cp.candidate_id = c.id order by cp.inspected_at desc limit 1) as contact_url,
      (select e.id from evidence e where e.candidate_id = c.id and e.kind = 'inspection' and e.object_path is not null and e.deleted_at is null order by e.created_at desc limit 1) as shot_id
    from candidates c join businesses b on b.id = c.business_id left join form_adapters a on a.candidate_id = c.id
    where c.campaign_id = ${campaignId}
      and (${f.status ?? null}::text is null or c.review_status = ${f.status ?? null}::text)
      and (${f.q ?? null}::text is null or c.domain ilike ${"%" + (f.q ?? "") + "%"} or c.title ilike ${"%" + (f.q ?? "") + "%"})
    order by c.created_at desc limit 300`;
}

export async function candidateDetail(id: string) {
  const sql = db();
  const [c] = await sql<Record<string, unknown>[]>`
    select c.*, b.label, b.label_verified, b.id as business_id from candidates c join businesses b on b.id = c.business_id where c.id = ${id}`;
  if (!c) throw new HttpError(404, "Candidate not found");
  const pages = await sql<{ id: string; url: string; final_url: string; form_found: boolean; flags: PageFlags; fields: FormInfo; page_title: string; inspected_at: Date; screenshot_evidence_id: string | null; notes: string }[]>`
    select * from contact_pages where candidate_id = ${id} order by inspected_at desc limit 5`;
  const [adapter] = await sql<{ id: string; status: string; status_reason: string; test_status: string; test_details: string; mapping: MappingEntry[]; submit_selector: string; form_selector: string; form_url: string; approved_by: string | null; approved_at: Date | null; tested_at: Date | null; version: number }[]>`
    select * from form_adapters where candidate_id = ${id}`;
  const evidence = await sql`select id, kind, filename, capture_error, created_at, run_id, attempt_id, object_path is not null as stored
    from evidence where candidate_id = ${id} and deleted_at is null order by created_at desc limit 30`;
  const approvals = await sql`select * from approvals where candidate_id = ${id} order by created_at desc`;
  const attempts = await sql`select id, run_id, mode, status, reserved_at, finished_at from attempts where candidate_id = ${id} order by reserved_at desc`;
  const domains = await sql<{ domain: string }[]>`select domain from business_domains where business_id = ${c.business_id as string} order by domain`;
  const [suppressed] = await sql<{ s: boolean }[]>`select exists (select 1 from suppressions s join business_domains bd on bd.domain = s.domain where bd.business_id = ${c.business_id as string}) as s`;
  return { candidate: c, pages, adapter: adapter ?? null, evidence, approvals, attempts, domains: domains.map((d) => d.domain), suppressed: suppressed.s };
}

export async function listRuns(campaignId: string) {
  return db()<Record<string, unknown>[]>`
    select r.id, r.mode, r.status, r.requested_by, r.created_at, r.started_at, r.finished_at, r.finish_reason, r.github_run_url,
      r.needs_reconciliation, r.reconciled_at,
      (select count(*)::int from attempts t where t.run_id = r.id) as attempts,
      (select count(*)::int from run_events e where e.run_id = r.id) as events
    from runs r where r.campaign_id = ${campaignId} order by r.created_at desc limit 100`;
}

export async function uncertainAttempts(runId: string) {
  return db()<Record<string, unknown>[]>`
    select t.id, t.status, t.form_url, t.submit_started_at, c.domain from attempts t join candidates c on c.id = t.candidate_id
    where t.run_id = ${runId} and t.status in ('uncertain', 'submitting') order by t.reserved_at`;
}

export async function attemptDetail(id: string) {
  const sql = db();
  const [a] = await sql<Record<string, unknown>[]>`
    select t.*, c.url as website, c.domain, c.discovery_query, c.source_url, b.label, b.label_verified,
      v.version as template_version, v.subject as template_subject, mt.kind as template_kind, r.mode as run_mode, r.status as run_status
    from attempts t join candidates c on c.id = t.candidate_id join businesses b on b.id = t.business_id
    join template_versions v on v.id = t.template_version_id join message_templates mt on mt.id = v.template_id
    join runs r on r.id = t.run_id where t.id = ${id}`;
  if (!a) throw new HttpError(404, "Attempt not found");
  const evidence = await sql`select id, kind, filename, capture_error, created_at, page_url, sha256, object_path is not null as stored
    from evidence where attempt_id = ${id} and deleted_at is null order by created_at`;
  const events = await sql`select id, type, message, created_at from run_events where attempt_id = ${id} order by id`;
  const approvals = await sql`select * from approvals where candidate_id = ${a.candidate_id as string} order by created_at desc`;
  return { attempt: a, evidence, events, approvals };
}

export async function recentAudit(limit = 200) {
  return db()`select * from audit_events order by id desc limit ${limit}`;
}
