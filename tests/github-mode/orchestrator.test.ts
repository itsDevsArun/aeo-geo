/**
 * GitHub-only mode end-to-end: the real orchestrator (`npm run outreach`) + real
 * Postgres + real Playwright runner + a real git remote for the state branch,
 * against LOCAL FIXTURE WEBSITES only. Each `job()` mimics one GitHub Actions job
 * (fresh database, state restored from the branch).
 */
import { execFileSync, spawn } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createTestDatabase } from "../helpers/db";
import { startFakeBrave, startFixtureSites } from "../e2e/fixtures/sites";

const ROOT = resolve(__dirname, "..", "..");
const SITES = 4300;
const BRAVE = 4400;
const LINK = "https://devsarun.io/aeo-geo/";

let tmp = "";
let stateDir = "";
let remote = "";
let configDir = "";
let dbUrl = "";
let dropDb: () => Promise<void>;
let sites: Awaited<ReturnType<typeof startFixtureSites>>;
let brave: Awaited<ReturnType<typeof startFakeBrave>>;

const git = (dir: string, ...args: string[]) => execFileSync("git", ["-C", dir, ...args], { encoding: "utf8" }).trim();

function job(mode: string, extra: Record<string, string> = {}, cmd = "run", onStart?: (pid: number) => void): Promise<{ code: number; out: string }> {
  return new Promise((done) => {
    const env = {
      ...process.env,
      DATABASE_URL: dbUrl, OUTREACH_EPHEMERAL_DB: "1", STATE_DIR: stateDir, OUTREACH_CONFIG_DIR: configDir, OUTREACH_MODE: mode,
      BRAVE_SEARCH_API_KEY: "k", BRAVE_API_BASE: `http://127.0.0.1:${BRAVE}/res/v1/web/search`,
      RUNNER_TEST_MODE: "1", RUNNER_TEST_HOST_SUFFIX: ".test", RUNNER_TEST_HOST_RESOLVER_RULES: `MAP *.test 127.0.0.1:${SITES}`,
      RUNNER_HEARTBEAT_MS: "2000", SERVICE_PAGE_URL: "http://devsarun-fixture.test/aeo-geo/",
      GITHUB_STEP_SUMMARY: join(tmp, "summary.md"), GITHUB_TOKEN: "", GITHUB_ACTOR: "owner",
      ...extra,
    };
    const child = spawn(process.execPath, ["--conditions=react-server", "--import", "tsx", "scripts/gh/outreach.ts", cmd], { cwd: ROOT, env, stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    onStart?.(child.pid!);
    child.on("exit", (code) => done({ code: code ?? 1, out }));
  });
}

const table = (name: string) => JSON.parse(readFileSync(join(stateDir, "state", "db", `${name}.json`), "utf8")) as Record<string, any>[];
const config = () => JSON.parse(readFileSync(join(configDir, "campaign.json"), "utf8"));
const setConfig = (patch: Record<string, unknown>) => writeFileSync(join(configDir, "campaign.json"), JSON.stringify({ ...config(), ...patch }, null, 2));
const remoteLog = () => git(remote, "log", "--format=%s", "outreach-state");

beforeAll(async () => {
  tmp = mkdtempSync(join(tmpdir(), "ghmode-"));
  remote = join(tmp, "origin.git");
  execFileSync("git", ["init", "-q", "--bare", remote]);
  stateDir = join(tmp, "state");
  execFileSync("git", ["init", "-q", "-b", "outreach-state", stateDir]);
  git(stateDir, "remote", "add", "origin", remote);
  configDir = join(tmp, "outreach");
  cpSync(join(ROOT, "outreach"), configDir, { recursive: true });
  setConfig({ industry: "plumbers", country: "IN", city_region: "Testville", min_delay_seconds: 5, max_candidates: 20, dry_run_fill_domains: ["acme-plumbing.test", "silent-forms.test"] });
  const d = await createTestDatabase();
  dbUrl = d.url;
  dropDb = d.drop;
  sites = await startFixtureSites(SITES);
  brave = await startFakeBrave(BRAVE, "k");
}, 120_000);

afterAll(async () => {
  await sites?.close();
  await brave?.close();
  await dropDb?.();
});

describe("GitHub-only mode", () => {
  it("refuses discovery until the target market is configured", async () => {
    const saved = config();
    setConfig({ industry: "" });
    const r = await job("discovery");
    expect(r.code, r.out).toBe(1);
    expect(r.out).toMatch(/Run cannot start.*industry/);
    expect(remoteLog()).toContain("checkpoint");
    writeFileSync(join(configDir, "campaign.json"), JSON.stringify(saved, null, 2));
  }, 120_000);

  it("discovery: finds, dedupes, filters and inspects websites; state + screenshots + reports pushed", async () => {
    const r = await job("discovery");
    expect(r.code, r.out).toBe(0);
    expect(r.out).toContain("form_detected [acme-plumbing.test]");
    const cands = table("candidates");
    expect(cands.map((c) => c.domain).sort()).toEqual(["acme-plumbing.test", "bright-dental.test", "careers-only.test", "nosolicit-co.test", "quiet-cafe.test", "robots-blocked.test", "silent-forms.test"]);
    expect(cands.every((c) => c.review_status === "pending")).toBe(true);
    const ev = table("evidence").filter((e) => e.object_path);
    expect(ev.length).toBeGreaterThanOrEqual(5);
    for (const e of ev) expect(existsSync(join(stateDir, "evidence", e.object_path))).toBe(true);
    const queue = readFileSync(join(stateDir, "reports", "review-queue.md"), "utf8");
    expect(queue).toContain("acme-plumbing.test");
    expect(queue).toContain("BLOCKED: CAPTCHA");
    expect(queue).toMatch(/!\[Inspected page\]\(\.\.\/evidence\/campaigns\//);
    expect(readFileSync(join(stateDir, "reports", "README.md"), "utf8")).toMatch(/Websites discovered \| 7/);
    expect(readFileSync(join(tmp, "summary.md"), "utf8")).toContain("Full report with screenshots");
    expect(git(remote, "ls-tree", "-r", "--name-only", "outreach-state")).toContain("state/db/candidates.json");
    expect(existsSync(join(tmp, "outreach-artifact", "manifest.json"))).toBe(true);
    expect(sites.submissions.length).toBe(0);
  }, 300_000);

  it("review.csv: approval needs the attestation; CAPTCHA adapter can never be approved", async () => {
    writeFileSync(join(configDir, "review.csv"), [
      "domain,decision,i_checked_it_is_permitted,adapter,business_name,business_name_verified,notes",
      "acme-plumbing.test,approve,yes,approve,Acme Plumbing,yes,ok",
      "silent-forms.test,approve,yes,approve,,,",
      "bright-dental.test,approve,yes,approve,,,captcha site",
      "nosolicit-co.test,approve,,,,,forgot attestation",
      "quiet-cafe.test,suppress,,,,,no form",
      "unknown.test,approve,yes,,,,",
    ].join("\n"));
    const r = await job("dry_run");
    expect(r.code, r.out).toBe(0);
    expect(r.out).toMatch(/nosolicit-co.test.*needs i_checked_it_is_permitted=yes/);
    expect(r.out).toMatch(/bright-dental.test.*Adapter cannot be approved.*CAPTCHA/);
    expect(r.out).toMatch(/unknown.test.*not a discovered candidate/);
    const byDomain = Object.fromEntries(table("candidates").map((c) => [c.domain, c]));
    expect(byDomain["acme-plumbing.test"].review_status).toBe("approved");
    expect(byDomain["nosolicit-co.test"].review_status).toBe("pending");
    expect(byDomain["quiet-cafe.test"].review_status).toBe("suppressed");
    const attempts = table("attempts");
    expect(attempts.filter((a) => a.mode === "dry_run" && a.status === "dry_run_ok").length).toBe(2);
    // The CAPTCHA site's adapter is blocked, so it is never even dry-run.
    expect(attempts.find((a) => a.candidate_id === byDomain["bright-dental.test"].id)).toBeUndefined();
    expect(attempts.every((a) => a.message.includes(LINK))).toBe(true);
    expect(attempts.find((a) => a.message.startsWith("Hi Acme Plumbing team,"))).toBeTruthy();
    const adapters = table("form_adapters");
    expect(adapters.filter((a) => a.status === "approved" && a.test_status === "passed").length).toBe(2);
    expect(sites.submissions.length).toBe(0);
  }, 300_000);

  it("live is refused without START LIVE, without allow_live, and without verified sender", async () => {
    let r = await job("live");
    expect(r.code).toBe(1);
    expect(r.out).toContain("type START LIVE");
    r = await job("live", { OUTREACH_CONFIRM: "START LIVE" });
    expect(r.code).toBe(1);
    expect(r.out).toMatch(/Live mode is disabled/);
    setConfig({ allow_live: true });
    r = await job("live", { OUTREACH_CONFIRM: "START LIVE" });
    expect(r.code).toBe(1);
    expect(r.out).toMatch(/allow_live=true rejected.*Sender details must be verified/);
    expect(sites.submissions.length).toBe(0);
  }, 300_000);

  it("live: if the reservation cannot be pushed, nothing is submitted", async () => {
    setConfig({ allow_live: true, sender_verified: true, active_template: "standard" });
    const r = await job("live", { OUTREACH_CONFIRM: "START LIVE", OUTREACH_TEST_FAIL_PRESUBMIT: "1" });
    expect(r.code, r.out).toBe(0);
    expect(sites.submissions.length).toBe(0);
    const live = table("attempts").filter((a) => a.mode === "live");
    expect(live.length).toBe(2);
    expect(live.every((a) => a.status === "failed_before_submit" && /NOT submitted/.test(a.error))).toBe(true);
  }, 300_000);

  it("live: pushes the reservation before every click; submits each approved business once", async () => {
    const r = await job("live", { OUTREACH_CONFIRM: "START LIVE" });
    expect(r.code, r.out).toBe(0);
    expect(r.out).toContain("offer_verified");
    expect(sites.submissions.map((s) => s.host).sort()).toEqual(["acme-plumbing.test", "silent-forms.test"]);
    for (const s of sites.submissions) {
      expect(s.body["your-message"]).toContain(LINK);
      expect(s.body["your-message"]).toContain("$199");
      expect(s.body["website_hp"]).toBe("");
    }
    const log = remoteLog();
    expect(log.match(/checkpoint: pre-submit/g)?.length).toBe(2);
    const live = table("attempts").filter((a) => a.mode === "live" && a.submit_started_at && a.status !== "failed_before_submit");
    expect(live.map((a) => a.status).sort()).toEqual(["confirmed", "unclear"]);
    const runMd = execFileSync("ls", [join(stateDir, "reports", "runs")], { encoding: "utf8" }).split("\n").filter((f) => f.includes("_live_") && f.endsWith(".md"));
    const latest = runMd.map((f) => readFileSync(join(stateDir, "reports", "runs", f), "utf8")).find((t) => t.includes("— confirmed"))!;
    expect(latest).toContain("Filled form (before submit)");
    expect(latest).toContain("After submit");
    expect(latest).toContain(LINK);
    const csv = readFileSync(join(stateDir, "reports", "attempts.csv"), "utf8");
    expect(csv.split("\r\n")[0]).toContain('"attempt_id"');
    expect(readdirScreens()).toBeGreaterThanOrEqual(4);
    // Gate-aborted attempts from the previous test are not counted as submissions.
    expect(readFileSync(join(stateDir, "reports", "README.md"), "utf8")).toMatch(/Live submission attempts \| 2/);

    // Next run: same businesses are never contacted again.
    const again = await job("live", { OUTREACH_CONFIRM: "START LIVE" });
    expect(again.code).toBe(1);
    expect(again.out).toMatch(/No eligible live targets/);
    expect(sites.submissions.length).toBe(2);
  }, 300_000);

  it("crash recovery: a run left active becomes lost, in-flight submit becomes uncertain, live blocked until reconcile.csv", async () => {
    // Simulate a job killed right after the pre-submit checkpoint: run 'running', attempt 'submitting'.
    const runs = table("runs");
    const attempts = table("attempts");
    const victim = attempts.find((a) => a.mode === "live" && a.status === "confirmed")!;
    runs.find((r) => r.id === victim.run_id)!.status = "running";
    victim.status = "submitting";
    writeFileSync(join(stateDir, "state", "db", "runs.json"), JSON.stringify(runs));
    writeFileSync(join(stateDir, "state", "db", "attempts.json"), JSON.stringify(attempts));
    git(stateDir, "-c", "user.name=t", "-c", "user.email=t@t", "commit", "-qam", "simulate crash");

    let r = await job("live", { OUTREACH_CONFIRM: "START LIVE" });
    expect(r.code).toBe(1);
    expect(r.out).toMatch(/closed stale run .* as lost/);
    expect(r.out).toMatch(/Reconcile 1 uncertain attempt/);
    expect(table("attempts").find((a) => a.id === victim.id)!.status).toBe("uncertain");
    expect(readFileSync(join(stateDir, "reports", "README.md"), "utf8")).toContain(victim.id);

    writeFileSync(join(configDir, "reconcile.csv"), `attempt_id,outcome,notes\n${victim.id},sent,checked the site\n`);
    r = await job("live", { OUTREACH_CONFIRM: "START LIVE" });
    expect(r.out).not.toMatch(/Reconcile \d+ uncertain/);
    expect(r.out).toMatch(/No eligible live targets/);
    expect(table("attempts").find((a) => a.id === victim.id)!.status).toBe("reconciled_sent");
    expect(sites.submissions.length).toBe(2);
  }, 300_000);

  it("emergency cancel (GitHub 'Cancel workflow' = SIGINT): run closed, finalize saves state", async () => {
    // Give the run more work than it can finish quickly: long delay between websites.
    setConfig({ min_delay_seconds: 60 });
    let pid = 0;
    const p = job("dry_run", {}, "run", (x) => (pid = x));
    for (let i = 0; i < 60 && !/checkpoint: run created/.test(remoteLog()); i++) await new Promise((res) => setTimeout(res, 1000));
    await new Promise((res) => setTimeout(res, 8000));
    process.kill(pid, "SIGINT");
    const killed = await p;
    expect(killed.out).toMatch(/emergency cancel/);
    const f = await job("dry_run", {}, "finalize");
    expect(f.code, f.out).toBe(0);
    const last = table("runs").sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)))[0];
    expect(last.mode).toBe("dry_run");
    expect(last.status).toBe("cancelled");
    expect(last.finish_reason).toBe("emergency_cancel");
    expect(remoteLog()).toMatch(/checkpoint: (cancelled|final)/);
    expect(sites.submissions.length).toBe(2);
  }, 300_000);
});

function readdirScreens(): number {
  const dir = join(tmp, "outreach-artifact", "screenshots");
  return existsSync(dir) ? execFileSync("ls", [dir], { encoding: "utf8" }).split("\n").filter(Boolean).length : 0;
}
