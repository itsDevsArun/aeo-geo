import "server-only";
import { db } from "../db";
import { env } from "../env";
import { refreshRunHealth, type Run } from "./runs";
import { ATTEMPT_CSV_COLUMNS, CANDIDATE_CSV_COLUMNS, toCsv } from "@/shared/csv";

export interface Overview {
  campaign: { id: string; name: string; live_enabled: boolean; industry: string; city_region: string; country: string } | null;
  run: (Pick<Run, "id" | "mode" | "status" | "started_at" | "deadline_at" | "heartbeat_at" | "created_at" | "finished_at" | "finish_reason" | "github_run_url" | "needs_reconciliation"> & {
    elapsed_seconds: number | null;
    heartbeat_age_seconds: number | null;
    heartbeat_stale: boolean;
  }) | null;
  stats: Record<string, number>;
  serverTime: string;
}

export async function getOverview(campaignId: string | null): Promise<Overview> {
  const sql = db();
  if (campaignId) await refreshRunHealth(campaignId);
  const [campaign] = campaignId
    ? await sql<NonNullable<Overview["campaign"]>[]>`select id, name, live_enabled, industry, city_region, country from campaigns where id = ${campaignId}`
    : [];
  if (!campaign) return { campaign: null, run: null, stats: {}, serverTime: new Date().toISOString() };
  const [run] = await sql<Run[]>`select * from runs where campaign_id = ${campaignId} order by created_at desc limit 1`;
  const [s] = await sql<Record<string, number>[]>`
    select
      (select count(*)::int from candidates where campaign_id = ${campaignId} and review_status <> 'filtered') as discovered,
      (select count(*)::int from candidates where campaign_id = ${campaignId} and review_status = 'pending') as pending_review,
      (select count(*)::int from candidates c join form_adapters a on a.candidate_id = c.id
        where c.campaign_id = ${campaignId} and c.review_status = 'approved' and a.status = 'approved' and a.test_status = 'passed'
        and not exists (select 1 from attempts t where t.business_id = c.business_id and t.mode = 'live' and t.status not in ('failed_before_submit','reconciled_not_sent'))
        and not exists (select 1 from suppressions su join business_domains bd on bd.domain = su.domain where bd.business_id = c.business_id)) as approved_queue,
      (select count(distinct cp.candidate_id)::int from contact_pages cp join candidates c on c.id = cp.candidate_id where c.campaign_id = ${campaignId}) as forms_inspected,
      (select count(*)::int from attempts where campaign_id = ${campaignId} and mode = 'live' and submit_started_at is not null) as submission_attempts,
      (select count(*)::int from attempts where campaign_id = ${campaignId} and mode = 'live' and status = 'confirmed') as confirmation_observed,
      (select count(*)::int from attempts where campaign_id = ${campaignId} and mode = 'live' and status in ('unclear','uncertain')) as unclear_attempts,
      (select count(*)::int from attempts where campaign_id = ${campaignId} and status in ('error_after_submit','dry_run_failed'))
        + (select count(*)::int from candidates where campaign_id = ${campaignId} and inspection_status = 'error') as errors,
      (select count(*)::int from form_adapters a join candidates c on c.id = a.candidate_id where c.campaign_id = ${campaignId} and a.status = 'needs_manual') as manual_review,
      (select count(*)::int from candidates where campaign_id = ${campaignId} and inspection_status = 'blocked') as blocked,
      (select coalesce(sum((data->>'count')::int), 0)::int from run_events where campaign_id = ${campaignId} and type = 'duplicate_prevented') as duplicates_prevented,
      (select count(*)::int from attempts where campaign_id = ${campaignId} and mode = 'dry_run') as dry_run_attempts,
      (select count(*)::int from attempts where campaign_id = ${campaignId} and status = 'uncertain') as uncertain`;
  const now = Date.now();
  const runOut = run
    ? {
        id: run.id,
        mode: run.mode,
        status: run.status,
        created_at: run.created_at,
        started_at: run.started_at,
        deadline_at: run.deadline_at,
        heartbeat_at: run.heartbeat_at,
        finished_at: run.finished_at,
        finish_reason: run.finish_reason,
        github_run_url: run.github_run_url,
        needs_reconciliation: run.needs_reconciliation && !run.reconciled_at,
        elapsed_seconds: run.started_at ? Math.round(((run.finished_at ? new Date(run.finished_at).getTime() : now) - new Date(run.started_at).getTime()) / 1000) : null,
        heartbeat_age_seconds: run.heartbeat_at ? Math.round((now - new Date(run.heartbeat_at).getTime()) / 1000) : null,
        heartbeat_stale:
          ["running", "stopping"].includes(run.status) && !!run.heartbeat_at && now - new Date(run.heartbeat_at).getTime() > env.heartbeatStaleSeconds * 1000,
      }
    : null;
  return { campaign, run: runOut, stats: s, serverTime: new Date().toISOString() };
}

export interface AttemptFilter {
  campaignId: string;
  runId?: string;
  status?: string;
  mode?: string;
  q?: string;
}

export async function listAttempts(f: AttemptFilter, limit = 500) {
  const sql = db();
  return sql<Record<string, unknown>[]>`
    select t.id as attempt_id, t.campaign_id, t.run_id, t.mode, t.status, t.subject, t.message, t.form_url, t.final_url,
      t.confirmation_text, t.error, t.reserved_at, t.submit_started_at, t.finished_at, t.field_values,
      c.url as website, c.domain, c.discovery_query, c.source_url, b.label, b.label_verified,
      mt.kind as template_kind, v.version as template_version,
      coalesce((select string_agg(e.filename, '; ' order by e.created_at) from evidence e where e.attempt_id = t.id and e.deleted_at is null), '') as evidence_files
    from attempts t
    join candidates c on c.id = t.candidate_id
    join businesses b on b.id = t.business_id
    join template_versions v on v.id = t.template_version_id
    join message_templates mt on mt.id = v.template_id
    where t.campaign_id = ${f.campaignId}
      and (${f.runId ?? null}::uuid is null or t.run_id = ${f.runId ?? null}::uuid)
      and (${f.status ?? null}::text is null or t.status = ${f.status ?? null}::text)
      and (${f.mode ?? null}::text is null or t.mode = ${f.mode ?? null}::text)
      and (${f.q ?? null}::text is null or c.domain ilike ${"%" + (f.q ?? "") + "%"})
    order by t.reserved_at desc
    limit ${limit}`;
}

export async function attemptsCsv(f: AttemptFilter): Promise<string> {
  const rows = await listAttempts(f, 100000);
  return toCsv(
    ATTEMPT_CSV_COLUMNS,
    rows.map((r) => ({
      campaign_id: r.campaign_id,
      run_id: r.run_id,
      attempt_id: r.attempt_id,
      website: r.website,
      verified_business_label: r.label_verified ? r.label : "",
      discovery_query: r.discovery_query,
      discovery_source_url: r.source_url,
      contact_form_url: r.form_url,
      final_page_url: r.final_url,
      timestamp_utc: r.submit_started_at ?? r.reserved_at,
      subject: r.subject,
      message: r.message,
      template_version: `${r.template_kind} v${r.template_version}`,
      mode: r.mode === "live" ? "live" : "dry run",
      outcome: r.status,
      error_or_skip_reason: r.error,
      confirmation_text: r.confirmation_text,
      evidence_files: r.evidence_files,
    })),
  );
}

export async function candidatesCsv(campaignId: string, status?: string): Promise<string> {
  const sql = db();
  const rows = await sql<Record<string, unknown>[]>`
    select c.*, b.label, b.label_verified, a.status as adapter_status, a.test_status as adapter_test_status,
      (select cp.final_url from contact_pages cp where cp.candidate_id = c.id order by cp.inspected_at desc limit 1) as contact_page_url,
      (select cp.form_found from contact_pages cp where cp.candidate_id = c.id order by cp.inspected_at desc limit 1) as form_found
    from candidates c join businesses b on b.id = c.business_id left join form_adapters a on a.candidate_id = c.id
    where c.campaign_id = ${campaignId} and (${status ?? null}::text is null or c.review_status = ${status ?? null}::text)
    order by c.created_at`;
  return toCsv(
    CANDIDATE_CSV_COLUMNS,
    rows.map((r) => ({
      campaign_id: r.campaign_id,
      candidate_id: r.id,
      website: r.url,
      domain: r.domain,
      verified_business_label: r.label_verified ? r.label : "",
      search_title: r.title,
      discovery_query: r.discovery_query,
      discovery_source_url: r.source_url,
      discovered_run_id: r.discovered_run_id,
      review_status: r.review_status,
      filtered_reason: r.filtered_reason,
      suitability_notes: r.suitability_notes,
      inspection_status: r.inspection_status,
      contact_page_url: r.contact_page_url,
      form_found: r.form_found === null || r.form_found === undefined ? "" : r.form_found ? "yes" : "no",
      adapter_status: r.adapter_status,
      adapter_test_status: r.adapter_test_status,
      discovered_at_utc: r.created_at,
    })),
  );
}

/** Evidence older than the campaign's retention window. Returns storage paths to delete. */
export async function evidenceToPurge(campaignId: string): Promise<{ id: string; object_path: string | null }[]> {
  return db()<{ id: string; object_path: string | null }[]>`
    select e.id, e.object_path from evidence e join campaigns c on c.id = e.campaign_id
    where e.campaign_id = ${campaignId} and e.deleted_at is null
      and e.created_at < now() - make_interval(days => c.evidence_retention_days)`;
}

export async function markEvidenceDeleted(ids: string[]): Promise<void> {
  if (!ids.length) return;
  await db()`update evidence set deleted_at = now(), object_path = null where id in ${db()(ids)}`;
}
