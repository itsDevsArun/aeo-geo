/**
 * GitHub Actions runner entrypoint. Processes exactly one dashboard run:
 * claim → (offer check) → loop over server-issued work items → finish.
 * All state lives in the dashboard database; this process is disposable.
 *
 * Logs may be visible to anyone with access to the repository's Actions tab,
 * so they never include target URLs, messages or contact details.
 */
import { ApiError, RunnerApi } from "./api";
import { launchGuarded, visibleText, type GuardedContext } from "./browser";
import { braveSearch, SearchUnavailable } from "./search";
import { inspectCandidate, processAttempt } from "./tasks";
import { checkOfferFacts } from "../src/shared/message";
import type { HeartbeatResponse, WorkItem } from "../src/shared/runner-api";

function envReq(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

const log = (msg: string) => console.log(`[runner ${new Date().toISOString()}] ${msg}`);

async function main(): Promise<number> {
  const dashboardUrl = envReq("DASHBOARD_URL").replace(/\/$/, "");
  const runId = envReq("RUN_ID");
  const testMode = process.env.RUNNER_TEST_MODE === "1";
  if (testMode && !/^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(dashboardUrl)) {
    throw new Error("RUNNER_TEST_MODE is only allowed against a local dashboard");
  }
  if (!/^[0-9a-f-]{36}$/i.test(runId)) throw new Error("RUN_ID must be a UUID");
  const api = new RunnerApi(dashboardUrl, envReq("RUNNER_API_SECRET"), runId);
  const cutoffMs = Number(process.env.RUNNER_NEW_WORK_CUTOFF_SECONDS || 480) * 1000;

  const ghRunId = process.env.GITHUB_RUN_ID ? Number(process.env.GITHUB_RUN_ID) : undefined;
  const ghUrl = ghRunId && process.env.GITHUB_REPOSITORY ? `${process.env.GITHUB_SERVER_URL || "https://github.com"}/${process.env.GITHUB_REPOSITORY}/actions/runs/${ghRunId}` : undefined;
  const claim = await api.claim({ githubRunId: ghRunId, githubRunUrl: ghUrl });
  let deadline = new Date(claim.run.deadlineAt).getTime();
  log(`claimed ${claim.run.mode} run; processing deadline ${claim.run.deadlineAt}`);

  let flags: HeartbeatResponse = { stopRequested: false, cancelRequested: false, deadlineAt: claim.run.deadlineAt, status: "running" };
  let terminating = false;
  const hb = setInterval(async () => {
    try {
      flags = await api.heartbeat();
      // The server's deadline is authoritative (it can only be earlier, never extended past the job window).
      if (flags.deadlineAt) deadline = Math.min(deadline, new Date(flags.deadlineAt).getTime());
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) flags = { ...flags, cancelRequested: true };
    }
  }, Number(process.env.RUNNER_HEARTBEAT_MS || 20000));
  const onSignal = () => {
    terminating = true;
    flags = { ...flags, cancelRequested: true };
  };
  process.on("SIGINT", onSignal);
  process.on("SIGTERM", onSignal);

  let g: GuardedContext | null = null;
  let reason = "queue_exhausted";
  let error: string | undefined;
  try {
    g = await launchGuarded({
      testHostSuffix: testMode ? process.env.RUNNER_TEST_HOST_SUFFIX : undefined,
      hostResolverRules: testMode ? process.env.RUNNER_TEST_HOST_RESOLVER_RULES : undefined,
    });

    if (claim.offerCheck.required && claim.offerCheck.facts.length) {
      const page = await g.context.newPage();
      g.setAllowedSite(claim.offerCheck.url);
      await page.goto(claim.offerCheck.url, { waitUntil: "domcontentloaded", timeout: 30000 });
      const check = checkOfferFacts(await visibleText(page), claim.offerCheck.facts);
      await page.close();
      if (!check.ok) {
        await api.event("offer_changed", `Service page no longer shows: ${check.missing.join(", ")}. Live sending blocked; update the template.`);
        reason = "offer_changed";
        return 0;
      }
      await api.event("offer_verified", "Service page offer facts verified");
    }

    let searchDisabled = !process.env.BRAVE_SEARCH_API_KEY;
    if (claim.run.mode === "discovery" && searchDisabled) await api.event("error", "BRAVE_SEARCH_API_KEY is not configured; search skipped, inspecting existing candidates only");
    let consecutiveErrors = 0;
    let processed = 0;

    for (;;) {
      if (flags.cancelRequested) { reason = "cancel_requested"; break; }
      if (flags.stopRequested) { reason = "stop_requested"; break; }
      if (Date.now() >= deadline - cutoffMs) { reason = "deadline"; break; }
      let work: WorkItem;
      try {
        work = await (api.post<WorkItem>("work", { skipSearch: searchDisabled }));
      } catch (e) {
        if (e instanceof ApiError && (e.status === 401 || e.status === 409)) { reason = "server_stop"; break; }
        throw e;
      }
      if (work.type === "stop") { reason = work.reason; break; }
      if (work.type === "none") { reason = "queue_exhausted"; break; }
      processed++;
      try {
        if (work.type === "search") {
          try {
            const page = await braveSearch(work, { apiKey: process.env.BRAVE_SEARCH_API_KEY!, baseUrl: process.env.BRAVE_API_BASE });
            const r = await api.searchResults({ queryId: work.queryId, offset: work.offset, moreAvailable: page.moreAvailable, results: page.results });
            log(`item ${processed}: search page processed (${r.added} new)`);
          } catch (e) {
            if (e instanceof SearchUnavailable) {
              searchDisabled = true;
              await api.event("error", `Search paused for this run: ${e.message}`);
            } else {
              await api.searchResults({ queryId: work.queryId, offset: work.offset, moreAvailable: false, results: [], error: (e instanceof Error ? e.message : String(e)).slice(0, 400) });
            }
          }
        } else if (work.type === "inspect") {
          await inspectCandidate(g, api, work);
          log(`item ${processed}: inspection done`);
        } else {
          const outcome = await processAttempt(g, api, work);
          log(`item ${processed}: ${work.type} attempt -> ${outcome}`);
        }
        consecutiveErrors = 0;
      } catch (e) {
        consecutiveErrors++;
        await api.event("error", `Item failed: ${(e instanceof Error ? e.message : String(e)).slice(0, 300)}`);
        if (consecutiveErrors >= 8) throw new Error("Too many consecutive errors");
      }
      // Politeness delay between websites; checks stop/cancel/deadline every second.
      const delayMs = work.type === "search" ? 0 : claim.campaign.minDelaySeconds * 1000;
      const until = Math.min(Date.now() + delayMs, deadline - cutoffMs);
      while (Date.now() < until && !flags.cancelRequested && !flags.stopRequested) await new Promise((r) => setTimeout(r, 1000));
    }
  } catch (e) {
    reason = terminating ? "cancel_requested" : "error";
    error = e instanceof Error ? e.message.slice(0, 1000) : String(e);
    log(`run error: ${error}`);
  } finally {
    clearInterval(hb);
    await g?.close();
    try {
      const r = await api.finish(reason, error);
      log(`finished: ${r.status} (${reason})`);
    } catch (e) {
      log(`finish call failed: ${e instanceof Error ? e.message : e}`);
    }
  }
  return reason === "error" ? 1 : 0;
}

main().then(
  (code) => process.exit(code),
  (e) => {
    console.error(`[runner] fatal: ${e instanceof Error ? e.message : e}`);
    process.exit(1);
  },
);
