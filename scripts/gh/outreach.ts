/**
 * GitHub-only orchestrator. Runs inside ONE GitHub Actions job:
 *
 *   restore state (outreach-state branch) -> apply outreach/ config files
 *   -> create run -> serve the runner API on 127.0.0.1 -> run Playwright runner
 *   -> checkpoints (incl. mandatory one before every live submit) -> reports -> push
 *
 * Usage: npm run outreach -- run       (mode from OUTREACH_MODE)
 *        npm run outreach -- finalize  (always runs last; safe to repeat)
 */
import { spawn, type ChildProcess } from "node:child_process";
import { randomBytes } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { createServer, type Server } from "node:http";
import { join, resolve } from "node:path";

const ROOT = resolve(__dirname, "..", "..");
const STATE_DIR = resolve(process.env.STATE_DIR || join(ROOT, "state"));
const CONFIG_DIR = resolve(process.env.OUTREACH_CONFIG_DIR || join(ROOT, "outreach"));
const ARTIFACT_DIR = join(STATE_DIR, "..", "outreach-artifact");
const ACTOR = `github:${process.env.GITHUB_ACTOR || "local"}`;
const REPO = process.env.GITHUB_REPOSITORY;

// Server modules read configuration from env lazily; set GitHub-only defaults first.
process.env.EVIDENCE_STORAGE = "fs";
process.env.EVIDENCE_DIR = join(STATE_DIR, "evidence");
process.env.GITHUB_DISPATCH_MODE = "disabled";
process.env.RUNNER_API_SECRET ||= randomBytes(32).toString("base64url");
process.env.DATABASE_POOL_MAX ||= "10";

const log = (m: string) => console.log(`[outreach ${new Date().toISOString().slice(11, 19)}] ${m}`);

type Mods = Awaited<ReturnType<typeof load>>;
async function load() {
  const [{ db }, state, config, report, runs, migrateMod, live] = await Promise.all([
    import("../../src/server/db"),
    import("./state"),
    import("./config"),
    import("./report"),
    import("../../src/server/services/runs"),
    import("../migrate"),
    import("./live-dashboard"),
  ]);
  const auto = await import("./auto");
  const publish = live.dashboardPublisher(REPO, process.env.GITHUB_TOKEN, log);
  const dashboard = async (o: { campaignId: string | null; runId: string | null; jobRunIds?: string[]; problems?: string[]; phase: string }) =>
    publish(await live.renderDashboard({ ...o, configDir: CONFIG_DIR, repo: REPO }).catch((e) => `Dashboard render failed: ${e}`));
  return { db, state, config, report, runs, migrate: migrateMod.migrate, dashboard, auto };
}

/** Serialised checkpoints (export DB -> commit -> push). */
function checkpointer(m: Mods) {
  let chain: Promise<unknown> = Promise.resolve();
  return (reason: string): Promise<boolean> => {
    const p = chain.then(async () => {
      await m.state.exportDb(m.db(), STATE_DIR);
      const r = await m.state.commitAndPush(STATE_DIR, `checkpoint: ${reason}`);
      log(`checkpoint (${reason}): ${r}`);
      return true;
    }).catch((e) => {
      log(`CHECKPOINT FAILED (${reason}): ${e instanceof Error ? e.message.split("\n")[0] : e}`);
      return false;
    });
    chain = p;
    return p;
  };
}

/** Serve the existing runner route handlers (the same code the hosted dashboard uses) on localhost. */
async function startRunnerApi(checkpoint: (r: string) => Promise<boolean>): Promise<{ server: Server; url: string }> {
  const names = ["claim", "heartbeat", "events", "work", "search-results", "inspection", "attempt", "evidence", "evidence-failure", "finish"];
  const handlers: Record<string, (req: Request) => Promise<Response>> = {};
  for (const n of names) handlers[n] = (await import(`../../src/app/api/runner/${n}/route`)).POST;
  const secret = process.env.RUNNER_API_SECRET!;
  const server = createServer(async (req, res) => {
    try {
      const chunks: Buffer[] = [];
      for await (const c of req) chunks.push(c as Buffer);
      const name = (req.url ?? "").replace(/^\/api\/runner\//, "").split("?")[0];
      if (name === "checkpoint") {
        if (req.headers.authorization !== `Bearer ${secret}`) { res.writeHead(401).end("{}"); return; }
        const reason: string = JSON.parse(Buffer.concat(chunks).toString() || "{}").reason ?? "runner";
        // Test-only fault injection (cannot be enabled outside local runner test mode).
        const inject = process.env.RUNNER_TEST_MODE === "1" && process.env.OUTREACH_TEST_FAIL_PRESUBMIT === "1" && reason.startsWith("pre-submit");
        const ok = inject ? false : await checkpoint(reason);
        res.writeHead(ok ? 200 : 503, { "Content-Type": "application/json" }).end(JSON.stringify({ ok }));
        return;
      }
      const h = handlers[name];
      if (!h) { res.writeHead(404).end("{}"); return; }
      const headers = new Headers();
      for (const [k, v] of Object.entries(req.headers)) if (typeof v === "string") headers.set(k, v);
      const r = await h(new Request(`http://127.0.0.1${req.url}`, { method: req.method, headers, body: chunks.length ? Buffer.concat(chunks) : undefined }));
      res.writeHead(r.status, { "Content-Type": r.headers.get("content-type") ?? "application/json" });
      res.end(Buffer.from(await r.arrayBuffer()));
    } catch (e) {
      res.writeHead(500).end(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }));
    }
  });
  await new Promise<void>((r) => server.listen(0, "127.0.0.1", () => r()));
  const addr = server.address();
  return { server, url: `http://127.0.0.1:${typeof addr === "object" && addr ? addr.port : 0}` };
}

/** Graceful stop: someone ran the "outreach-stop" workflow after this job started. */
async function stopRequestedOnGitHub(since: Date): Promise<boolean> {
  const token = process.env.GITHUB_TOKEN;
  if (!token || !REPO) return false;
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/outreach-stop.yml/runs?per_page=5&created=${encodeURIComponent(">=" + since.toISOString())}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return false;
    return ((await res.json()) as { total_count?: number }).total_count! > 0;
  } catch {
    return false;
  }
}

async function restore(m: Mods): Promise<void> {
  if (!existsSync(join(STATE_DIR, ".git"))) throw new Error(`STATE_DIR ${STATE_DIR} is not a git worktree of the outreach-state branch`);
  const sql = m.db();
  await m.state.resetEphemeralDb(sql);
  await m.migrate(process.env.DATABASE_URL!, () => {});
  const { rows } = await m.state.importDb(sql, STATE_DIR);
  log(`state restored (${rows} rows)`);
  // A run left active means the previous job died without finalising: close it safely.
  const stale = await sql<{ id: string }[]>`select id from runs where status in ('queued','running','stopping')`;
  for (const r of stale) {
    await m.runs.markLost(r.id, `${ACTOR} (previous job ended abruptly)`);
    log(`closed stale run ${r.id.slice(0, 8)} as lost`);
  }
}

async function purgeRetention(m: Mods, campaignId: string) {
  const { evidenceToPurge, markEvidenceDeleted } = await import("../../src/server/services/reporting");
  const { removeObjects } = await import("../../src/server/storage");
  const rows = await evidenceToPurge(campaignId);
  if (!rows.length) return;
  await removeObjects(rows.map((r) => r.object_path).filter((p): p is string => !!p));
  await markEvidenceDeleted(rows.map((r) => r.id));
  log(`retention: removed ${rows.length} expired screenshot(s)`);
}

type Mode = "discovery" | "dry_run" | "live";

async function cmdRun(): Promise<number> {
  const requested = process.env.OUTREACH_MODE || "auto";
  if (!["auto", "discovery", "dry_run", "live"].includes(requested)) throw new Error(`Invalid OUTREACH_MODE ${requested}`);
  const m = await load();
  const sql = m.db();
  await mkdir(ARTIFACT_DIR, { recursive: true });
  await restore(m);
  const checkpoint = checkpointer(m);
  const applied = await m.config.applyConfig(CONFIG_DIR, ACTOR);
  for (const n of applied.notes) log(`config: ${n}`);
  for (const p of applied.problems) log(`CONFIG PROBLEM: ${p}`);
  await purgeRetention(m, applied.campaignId);
  const campaignId = applied.campaignId;
  const problems = [...applied.problems];
  const notes = [...applied.notes];
  const jobRunIds: string[] = [];
  const jobStart = Date.now();
  const JOB_BUDGET_MIN = Number(process.env.PROCESSING_BUDGET_MINUTES || 300);
  let current: string | null = null;
  let halted = false; // stop or cancel requested: no further phases
  let exitCode = 0;
  const phaseLabel = () => (requested === "auto" ? "auto run" : `${requested} run`);
  const dash = (phase: string) => m.dashboard({ campaignId, runId: current, jobRunIds, problems, phase });

  // GitHub "Cancel workflow" = emergency cancel: close the submit gate in the DB first, then stop the runner.
  let child: ChildProcess | null = null;
  let cancelling = false;
  const forward = (sig: NodeJS.Signals) => async () => {
    halted = true;
    if (!cancelling && current) {
      cancelling = true;
      log(`received ${sig}: emergency cancel`);
      await m.runs.emergencyCancel(current, `${ACTOR} (GitHub job cancelled)`).catch((e) => log(`cancel: ${e.message}`));
      await checkpoint("cancelled");
    }
    child?.kill(sig);
  };
  process.on("SIGINT", forward("SIGINT"));
  process.on("SIGTERM", forward("SIGTERM"));
  const api = await startRunnerApi(checkpoint);

  /** Run one phase (one dashboard run). Returns false if it could not start. */
  const runPhase = async (mode: Mode, maxMinutes: number, optional: boolean): Promise<boolean> => {
    const remaining = Math.floor(JOB_BUDGET_MIN - (Date.now() - jobStart) / 60000);
    const budget = Math.min(maxMinutes, remaining);
    if (budget < 10) { notes.push(`${mode}: skipped, job time budget used up`); return false; }
    process.env.PROCESSING_BUDGET_MINUTES = String(budget);
    let runId: string;
    try {
      runId = (await m.runs.startRun(campaignId, mode, ACTOR)).id;
    } catch (e) {
      const d = (e as { details?: unknown }).details;
      const msg = `Run cannot start (${mode}): ${Array.isArray(d) ? d.join("; ") : e instanceof Error ? e.message : e}`;
      (optional ? notes : problems).push(msg);
      log(optional ? `skip ${msg}` : `PROBLEM: ${msg}`);
      if (!optional) exitCode = 1;
      return false;
    }
    if (!(await checkpoint(`${mode} run created`))) {
      problems.push("Could not save state to the outreach-state branch (check workflow permissions: contents: write). Nothing was processed.");
      await sql`update runs set status = 'failed', finished_at = now(), finish_reason = 'state_save_failed' where id = ${runId}`;
      exitCode = 1;
      halted = true;
      return false;
    }
    current = runId;
    jobRunIds.push(runId);
    log(`${mode} run ${runId} started (budget ${budget} min)`);
    const started = new Date();
    child = spawn(process.execPath, ["--import", "tsx", join(ROOT, "runner", "index.ts")], {
      cwd: ROOT,
      env: { ...process.env, DASHBOARD_URL: api.url, RUN_ID: runId, RUNNER_REQUIRE_CHECKPOINT: mode === "live" ? "1" : "0" },
      stdio: ["ignore", "inherit", "inherit"],
    });
    let lastEvent = 0;
    const printEvents = async () => {
      const ev = await sql<{ id: number; type: string; message: string; domain: string | null }[]>`
        select e.id, e.type, e.message, c.domain from run_events e left join candidates c on c.id = e.candidate_id
        where e.run_id = ${runId} and e.id > ${lastEvent} order by e.id`.catch(() => []);
      for (const e of ev) { console.log(`  · ${e.type}${e.domain ? ` [${e.domain}]` : ""} ${e.message}`); lastEvent = e.id; }
    };
    const evTimer = setInterval(printEvents, 3000);
    await dash(`${phaseLabel()} in progress: ${mode}`);
    const dashTimer = setInterval(() => void dash(`${phaseLabel()} in progress: ${mode}`), 20_000);
    const cpTimer = setInterval(() => void checkpoint("periodic"), 180_000);
    let stopSent = false;
    const stopTimer = setInterval(async () => {
      if (!stopSent && (await stopRequestedOnGitHub(started))) {
        stopSent = true;
        halted = true;
        log("graceful stop requested via outreach-stop workflow");
        await m.runs.requestStop(runId, `${ACTOR} (outreach-stop workflow)`).catch((e) => log(`stop failed: ${e.message}`));
      }
    }, 30_000);
    const code: number = await new Promise((r) => child!.on("exit", (c) => r(c ?? 1)));
    clearInterval(evTimer); clearInterval(cpTimer); clearInterval(stopTimer); clearInterval(dashTimer);
    await printEvents();
    const run = await m.runs.getRun(runId);
    if (["queued", "running", "stopping"].includes(run.status)) {
      await m.runs.markLost(runId, `${ACTOR} (runner exited without finishing)`);
      log("runner did not finish the run; marked lost (in-flight live attempts -> uncertain)");
    }
    const final = await m.runs.getRun(runId);
    log(`${mode} run ${runId.slice(0, 8)} finished: ${final.status} (${final.finish_reason})`);
    if (code !== 0 || ["failed", "lost"].includes(final.status)) exitCode = 1;
    if (["stopped", "cancelled"].includes(final.status)) halted = true;
    await checkpoint(`${mode} run finished`);
    return true;
  };

  if (requested === "live" && process.env.OUTREACH_CONFIRM !== "START LIVE") {
    problems.push('Live run refused: type START LIVE in the "confirm_live" box when starting the workflow (or use mode "auto").');
    exitCode = 1;
  } else if (requested !== "auto") {
    await runPhase(requested as Mode, JOB_BUDGET_MIN, false);
  } else {
    // One click: discover -> auto-approve clean forms -> dry run -> auto-approve tested adapters -> live.
    const cfg = await m.config.readAutoSettings(CONFIG_DIR);
    await runPhase("discovery", 150, false);
    if (!halted) {
      if (cfg.auto_approve) {
        const n = await m.auto.approveCleanCandidates(campaignId, `${ACTOR} (auto_approve)`);
        notes.push(`Auto-approved ${n} website(s) whose forms passed every automatic check`);
        log(`auto-approved ${n} candidate(s)`);
      } else notes.push('auto_approve is off in campaign.json: approve websites in outreach/review.csv, the next run continues from there');
      process.env.OUTREACH_DRY_RUN_NEW_ONLY = "1";
      await runPhase("dry_run", 60, true);
      delete process.env.OUTREACH_DRY_RUN_NEW_ONLY;
    }
    if (!halted && cfg.auto_approve) {
      const n = await m.auto.approveTestedAdapters(campaignId, `${ACTOR} (auto_approve)`);
      notes.push(`Auto-approved ${n} form adapter(s) that passed the dry run`);
    }
    if (!halted) {
      if (cfg.allow_live) await runPhase("live", 120, true);
      else notes.push('Live sending is off: set "allow_live": true in outreach/campaign.json');
    }
  }
  api.server.close();
  for (const p of problems) log(`PROBLEM: ${p}`);
  const last = jobRunIds[jobRunIds.length - 1] ?? null;
  await finalizeReports(m, campaignId, last, notes, problems, jobRunIds);
  current = last;
  await dash(`${phaseLabel()} finished`);
  await sql.end();
  return exitCode;
}

async function finalizeReports(m: Mods, campaignId: string, runId: string | null, notes: string[] = [], problems: string[] = [], jobRunIds: string[] = runId ? [runId] : []) {
  await m.report.writeReports({ stateDir: STATE_DIR, campaignId, runId, jobRunIds, repo: REPO, notes, problems, artifactDir: ARTIFACT_DIR });
  for (let i = 0; i < 3; i++) if (await checkpointer(m)("final")) return;
  throw new Error("Final state push failed");
}

/** Always runs last (also after a GitHub "Cancel workflow"). Closes any active run safely and saves. */
async function cmdFinalize(): Promise<number> {
  if (!existsSync(join(STATE_DIR, ".git"))) { log("no state worktree; nothing to finalize"); return 0; }
  const m = await load();
  const sql = m.db();
  try {
    await sql`select 1 from runs limit 1`;
  } catch {
    log("database not initialised; nothing to finalize");
    return 0;
  }
  const active = await sql<{ id: string; campaign_id: string }[]>`select id, campaign_id from runs where status in ('queued','running','stopping')`;
  for (const r of active) {
    await m.runs.emergencyCancel(r.id, `${ACTOR} (GitHub job cancelled)`).catch((e) => log(`cancel: ${e.message}`));
    log(`run ${r.id.slice(0, 8)} closed as cancelled (live in-flight attempts -> uncertain, reconciliation required)`);
  }
  const [last] = await sql<{ id: string; campaign_id: string }[]>`select id, campaign_id from runs order by created_at desc limit 1`;
  if (last && (active.length || !existsSync(join(ARTIFACT_DIR, "manifest.json")))) {
    await finalizeReports(m, last.campaign_id, last.id);
  } else {
    await checkpointer(m)("finalize");
  }
  if (last) {
    const r = await m.runs.getRun(last.id);
    await m.dashboard({ campaignId: last.campaign_id, runId: last.id, phase: `job ended: last run ${r.status}` });
  }
  await sql.end();
  return 0;
}

const cmd = process.argv[2];
(cmd === "run" ? cmdRun() : cmd === "finalize" ? cmdFinalize() : Promise.reject(new Error("usage: outreach run|finalize")))
  .then((c) => process.exit(c))
  .catch((e) => {
    console.error(`[outreach] fatal: ${e instanceof Error ? e.stack ?? e.message : e}`);
    process.exit(1);
  });
