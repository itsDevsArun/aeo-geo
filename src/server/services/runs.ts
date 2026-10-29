import "server-only";
import { audit, runEvent } from "../audit";
import { db, isUniqueViolation, type Sql } from "../db";
import { env } from "../env";
import { cancelWorkflowRun, dispatchRunWorkflow } from "../github";
import { HttpError } from "../http";
import { newRunToken, sha256, type RunRow } from "../runner-auth";
import { assertLiveReady, getCampaign } from "./campaigns";
import { getTemplateVersion } from "./templates";
import { buildDiscoveryQueries, hasTargetMarket } from "@/shared/discovery";
import type { ClaimResponse, HeartbeatResponse } from "@/shared/runner-api";
import type { RunMode } from "@/shared/constants";

export interface Run extends RunRow {
  requested_by: string;
  created_at: Date;
  started_at: Date | null;
  heartbeat_at: Date | null;
  finished_at: Date | null;
  finish_reason: string | null;
  error: string | null;
  github_run_id: number | null;
  github_run_url: string | null;
  needs_reconciliation: boolean;
  reconciled_at: Date | null;
  reconciled_by: string | null;
}

const ACTIVE = ["queued", "running", "stopping"];

export async function getRun(id: string, tx?: Sql): Promise<Run> {
  const sql = tx ?? db();
  const [r] = await sql<Run[]>`select * from runs where id = ${id}`;
  if (!r) throw new HttpError(404, "Run not found");
  return r;
}

/** SQL fragment-free helper: eligible live targets for a campaign. */
export async function countEligibleLive(campaignId: string, sql: Sql): Promise<number> {
  const [r] = await sql<{ n: number }[]>`
    select count(*)::int as n from candidates c
    join form_adapters a on a.candidate_id = c.id
    where c.campaign_id = ${campaignId} and c.review_status = 'approved'
      and a.status = 'approved' and a.test_status = 'passed'
      and not exists (select 1 from suppressions s join business_domains bd on bd.domain = s.domain where bd.business_id = c.business_id)
      and not exists (select 1 from attempts t where t.business_id = c.business_id and t.mode = 'live'
                      and t.status not in ('failed_before_submit', 'reconciled_not_sent'))`;
  return r.n;
}

export async function pendingReconciliation(campaignId: string, sql: Sql): Promise<{ uncertain: number; runs: number }> {
  const [r] = await sql<{ uncertain: number; runs: number }[]>`
    select (select count(*)::int from attempts where campaign_id = ${campaignId} and status in ('uncertain', 'submitting')
              and run_id not in (select id from runs where status in ('running', 'stopping'))) as uncertain,
           (select count(*)::int from runs where campaign_id = ${campaignId} and needs_reconciliation and reconciled_at is null) as runs`;
  return r;
}

/** Server-side checks + single-active-run enforcement + GitHub dispatch. */
export async function startRun(campaignId: string, mode: RunMode, actor: string): Promise<Run> {
  const sql = db();
  await refreshRunHealth(campaignId);
  const campaign = await getCampaign(campaignId);
  const [active] = await sql`select id from runs where campaign_id = ${campaignId} and status in ('queued', 'running', 'stopping') limit 1`;
  if (active) throw new HttpError(409, "Another run is already active for this campaign.");
  const problems: string[] = [];
  if (mode === "discovery") {
    if (!hasTargetMarket(campaign)) {
      problems.push('Target market not set: in outreach/campaign.json set "countries" (e.g. ["US","AU","CA","ALL"]) and "osm_categories" (free, e.g. "craft=plumber") or "search_queries" (needs Brave key) or a specific "industry" (or Campaign settings in the optional dashboard).');
    } else if (buildDiscoveryQueries(campaign).length === 0) problems.push("No search queries could be generated.");
  } else {
    if (!campaign.active_template_version_id) problems.push("Select an active message template.");
    const [{ n }] = await sql<{ n: number }[]>`
      select count(*)::int as n from candidates c join form_adapters a on a.candidate_id = c.id
      where c.campaign_id = ${campaignId} and c.review_status = 'approved' and a.status in ('proposed', 'approved')`;
    if (mode === "dry_run" && n === 0) problems.push("No approved candidates with a usable form mapping to dry-run.");
  }
  if (mode === "live") {
    if (!campaign.live_enabled) problems.push("Live mode is disabled for this campaign (enable it in settings).");
    try {
      await assertLiveReady(campaign);
    } catch (e) {
      if (e instanceof HttpError) problems.push(...((e.details as string[]) ?? [e.message]));
      else throw e;
    }
    if (campaign.max_live_attempts_per_run < 1) problems.push("Max live attempts per run is 0.");
    const rec = await pendingReconciliation(campaignId, sql);
    if (rec.uncertain || rec.runs) problems.push(`Reconcile ${rec.uncertain} uncertain attempt(s) / ${rec.runs} run(s) before another live run.`);
    if ((await countEligibleLive(campaignId, sql)) === 0) {
      problems.push("No eligible live targets (need approved website + approved adapter with a passed dry-run, not yet contacted, not suppressed).");
    }
  }
  if (problems.length) throw new HttpError(422, "Run cannot start", problems);

  let run: Run;
  try {
    run = await sql.begin(async (tx) => {
      const [r] = await tx<Run[]>`
        insert into runs (campaign_id, mode, requested_by, budget_minutes)
        values (${campaignId}, ${mode}, ${actor}, ${env.processingBudgetMinutes}) returning *`;
      if (mode === "discovery") {
        for (const q of buildDiscoveryQueries(campaign)) {
          await tx`insert into discovery_queries (campaign_id, query, country, priority) values (${campaignId}, ${q.query}, ${q.country}, ${q.priority})
            on conflict (campaign_id, query, country) do update set priority = excluded.priority`;
        }
      }
      await runEvent({ runId: r.id, campaignId, type: "run_queued", message: `${mode} run requested by ${actor}` }, tx);
      await audit(actor, "run.start", "run", r.id, { mode, campaign_id: campaignId }, tx);
      return r;
    });
  } catch (e) {
    if (isUniqueViolation(e)) throw new HttpError(409, "Another run is already active for this campaign.");
    throw e;
  }
  try {
    const d = await dispatchRunWorkflow(run.id, campaignId);
    await runEvent({ runId: run.id, campaignId, type: "run_dispatched", message: d.dispatched ? "GitHub Actions workflow dispatched" : d.note ?? "" });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    await sql`update runs set status = 'failed', finished_at = now(), finish_reason = 'dispatch_failed', error = ${msg} where id = ${run.id}`;
    await runEvent({ runId: run.id, campaignId, type: "error", message: msg });
    throw new HttpError(502, "Could not dispatch the GitHub Actions workflow", [msg]);
  }
  return getRun(run.id);
}

/** Graceful stop: the runner finishes or checkpoints its current item, then takes no new work. */
export async function requestStop(runId: string, actor: string): Promise<Run> {
  const sql = db();
  const run = await sql.begin(async (tx) => {
    const [r] = await tx<Run[]>`select * from runs where id = ${runId} for update`;
    if (!r) throw new HttpError(404, "Run not found");
    if (!ACTIVE.includes(r.status)) throw new HttpError(409, `Run is already ${r.status}`);
    if (r.status === "queued") {
      await tx`update runs set status = 'stopped', stop_requested_at = now(), finished_at = now(), finish_reason = 'stopped_before_start' where id = ${runId}`;
    } else {
      await tx`update runs set status = 'stopping', stop_requested_at = coalesce(stop_requested_at, now()) where id = ${runId}`;
    }
    await runEvent({ runId, campaignId: r.campaign_id, type: "stop_requested", message: `Graceful stop requested by ${actor}` }, tx);
    await audit(actor, "run.stop", "run", runId, {}, tx);
    return r;
  });
  return getRun(run.id);
}

/**
 * Emergency cancel: marks the run cancelled immediately, closes the submit gate,
 * asks GitHub to cancel the job, and requires reconciliation before another live run.
 */
export async function emergencyCancel(runId: string, actor: string): Promise<Run> {
  const sql = db();
  const r = await sql.begin(async (tx) => {
    const [r] = await tx<Run[]>`select * from runs where id = ${runId} for update`;
    if (!r) throw new HttpError(404, "Run not found");
    if (!ACTIVE.includes(r.status)) throw new HttpError(409, `Run is already ${r.status}`);
    await tx`update runs set status = 'cancelled', cancel_requested_at = now(), finished_at = now(),
      finish_reason = 'emergency_cancel', needs_reconciliation = ${r.mode === "live"} where id = ${runId}`;
    const res = await settleInFlightAttempts(runId, tx);
    await runEvent({ runId, campaignId: r.campaign_id, type: "run_cancelled", message: `Emergency cancel by ${actor}`, data: res }, tx);
    await audit(actor, "run.emergency_cancel", "run", runId, res, tx);
    return r;
  });
  if (r.github_run_id) {
    const note = await cancelWorkflowRun(Number(r.github_run_id)).catch((e) => `cancel failed: ${e instanceof Error ? e.message : e}`);
    await runEvent({ runId, campaignId: r.campaign_id, type: "github_cancel", message: note });
  }
  return getRun(runId);
}

/**
 * Once a run is no longer active: attempts that never passed the submit gate are
 * safely "failed_before_submit"; attempts that passed it become "uncertain"
 * (never retried automatically). Order matters for the submit-gate race.
 */
export async function settleInFlightAttempts(runId: string, tx: Sql) {
  const before = await tx`update attempts set status = 'failed_before_submit', error = coalesce(error, 'Run ended before submit'),
      finished_at = now(), updated_at = now()
    where run_id = ${runId} and status in ('reserved', 'filled') returning id`;
  const uncertain = await tx`update attempts set status = 'uncertain', error = coalesce(error, 'Runner ended after submit gate; outcome unknown'),
      updated_at = now()
    where run_id = ${runId} and status = 'submitting' returning id`;
  if (uncertain.length) await tx`update runs set needs_reconciliation = true where id = ${runId}`;
  return { releasedBeforeSubmit: before.length, uncertain: uncertain.length };
}

/** Detect stale/lost runners from persisted heartbeats. */
export async function refreshRunHealth(campaignId?: string): Promise<void> {
  const sql = db();
  const lost = await sql<{ id: string; campaign_id: string }[]>`
    select id, campaign_id from runs
    where (${campaignId ?? null}::uuid is null or campaign_id = ${campaignId ?? null}::uuid)
      and ((status in ('running', 'stopping') and heartbeat_at < now() - make_interval(mins => ${env.runnerLostMinutes}))
        or (status = 'queued' and created_at < now() - make_interval(mins => ${env.queuedLostMinutes})))`;
  for (const r of lost) await markLost(r.id, "system");
}

export async function markLost(runId: string, actor: string): Promise<void> {
  await db().begin(async (tx) => {
    const [r] = await tx<Run[]>`select * from runs where id = ${runId} for update`;
    if (!r || !ACTIVE.includes(r.status)) return;
    await tx`update runs set status = 'lost', finished_at = now(), finish_reason = 'runner_lost',
      needs_reconciliation = ${r.mode === "live"} where id = ${runId}`;
    const res = await settleInFlightAttempts(runId, tx);
    await runEvent({ runId, campaignId: r.campaign_id, type: "runner_lost", message: "Runner heartbeat lost; run closed", data: res }, tx);
    await audit(actor, "run.mark_lost", "run", runId, res, tx);
  });
}

// ---------------------------------------------------------------------------
// Runner-facing lifecycle
// ---------------------------------------------------------------------------

export async function claimRun(runId: string, gh: { githubRunId?: number; githubRunUrl?: string }): Promise<ClaimResponse> {
  const token = newRunToken();
  const sql = db();
  const [r] = await sql<Run[]>`
    update runs set status = 'running', started_at = now(), heartbeat_at = now(),
      deadline_at = now() + make_interval(mins => budget_minutes),
      runner_token_hash = ${sha256(token)}, github_run_id = ${gh.githubRunId ?? null}, github_run_url = ${gh.githubRunUrl ?? null}
    where id = ${runId} and status = 'queued' returning *`;
  if (!r) throw new HttpError(409, "Run is not claimable (already claimed, stopped or unknown).");
  const campaign = await getCampaign(r.campaign_id);
  let facts: string[] = [];
  if (r.mode === "live" && campaign.active_template_version_id) {
    facts = (await getTemplateVersion(campaign.active_template_version_id)).offer_facts;
  }
  await runEvent({ runId, campaignId: r.campaign_id, type: "run_started", message: `Runner claimed ${r.mode} run`,
    data: { githubRunId: gh.githubRunId, deadlineAt: r.deadline_at } });
  return {
    runToken: token,
    run: { id: r.id, mode: r.mode, deadlineAt: new Date(r.deadline_at!).toISOString(), campaignId: r.campaign_id },
    campaign: { minDelaySeconds: campaign.min_delay_seconds, maxLiveAttempts: campaign.max_live_attempts_per_run },
    offerCheck: { required: r.mode === "live", url: env.servicePageUrl, facts },
  };
}

export async function heartbeat(run: RunRow): Promise<HeartbeatResponse> {
  const [r] = await db()<Run[]>`
    update runs set heartbeat_at = now() where id = ${run.id} and status in ('running', 'stopping') returning *`;
  const cur = r ?? (await getRun(run.id));
  return {
    stopRequested: !!cur.stop_requested_at || !ACTIVE.includes(cur.status),
    cancelRequested: !!cur.cancel_requested_at || ["cancelled", "lost"].includes(cur.status),
    deadlineAt: cur.deadline_at ? new Date(cur.deadline_at).toISOString() : "",
    status: cur.status,
  };
}

export async function finishRun(run: RunRow, reason: string, error?: string): Promise<Run> {
  return db().begin(async (tx) => {
    const [r] = await tx<Run[]>`select * from runs where id = ${run.id} for update`;
    if (!ACTIVE.includes(r.status)) return r;
    const status =
      reason === "error" ? "failed" : reason === "stop_requested" || reason === "cancel_requested" || r.stop_requested_at ? "stopped" : "completed";
    const res = await settleInFlightAttempts(run.id, tx);
    const [u] = await tx<Run[]>`update runs set status = ${status}, finished_at = now(), finish_reason = ${reason},
      error = ${error ?? null}, heartbeat_at = now() where id = ${run.id} returning *`;
    await runEvent({ runId: run.id, campaignId: r.campaign_id, type: status === "completed" ? "run_completed" : status === "failed" ? "error" : "run_stopped",
      message: `Run ${status} (${reason})${error ? `: ${error}` : ""}`, data: res }, tx);
    return u;
  });
}

/** Reconcile an uncertain attempt after a crash/cancel. Never automatic. */
export async function reconcileAttempt(attemptId: string, outcome: "sent" | "not_sent", notes: string, actor: string) {
  return db().begin(async (tx) => {
    const [a] = await tx<{ id: string; status: string; candidate_id: string; run_id: string }[]>`
      select id, status, candidate_id, run_id from attempts where id = ${attemptId} for update`;
    if (!a) throw new HttpError(404, "Attempt not found");
    if (a.status !== "uncertain") throw new HttpError(409, `Only uncertain attempts can be reconciled (status: ${a.status})`);
    const status = outcome === "sent" ? "reconciled_sent" : "reconciled_not_sent";
    await tx`update attempts set status = ${status}, updated_at = now(), finished_at = coalesce(finished_at, now()),
      error = ${`Reconciled by ${actor}: ${notes}`.slice(0, 2000)} where id = ${a.id}`;
    await tx`insert into approvals (candidate_id, subject, decision, notes, actor) values (${a.candidate_id}, 'reconciliation', ${status}, ${notes}, ${actor})`;
    await audit(actor, "attempt.reconcile", "attempt", a.id, { outcome, notes }, tx);
    const [{ n }] = await tx<{ n: number }[]>`select count(*)::int as n from attempts where run_id = ${a.run_id} and status in ('uncertain', 'submitting')`;
    if (n === 0) {
      await tx`update runs set reconciled_at = now(), reconciled_by = ${actor} where id = ${a.run_id} and needs_reconciliation and status not in ('queued','running','stopping')`;
    }
    return { status };
  });
}

export async function markRunReconciled(runId: string, actor: string) {
  return db().begin(async (tx) => {
    const r = await getRun(runId, tx);
    if (ACTIVE.includes(r.status)) throw new HttpError(409, "Run is still active");
    const [{ n }] = await tx<{ n: number }[]>`select count(*)::int as n from attempts where run_id = ${runId} and status in ('uncertain', 'submitting')`;
    if (n > 0) throw new HttpError(409, `Resolve ${n} uncertain attempt(s) first`);
    await tx`update runs set reconciled_at = now(), reconciled_by = ${actor} where id = ${runId}`;
    await audit(actor, "run.reconciled", "run", runId, {}, tx);
  });
}
