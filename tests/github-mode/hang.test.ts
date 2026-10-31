/** A website that freezes the browser must be skipped, not block the whole run (real incident, run 41195634794). */
import { execFileSync, spawn } from "node:child_process";
import { cpSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterAll, beforeAll, expect, it } from "vitest";
import { createTestDatabase } from "../helpers/db";
import { startFixtureSites } from "../e2e/fixtures/sites";

const ROOT = resolve(__dirname, "..", "..");
let tmp = "", dbUrl = "", drop: () => Promise<void>;
let sites: Awaited<ReturnType<typeof startFixtureSites>>;
let overpass: ReturnType<typeof createServer>;

beforeAll(async () => {
  tmp = mkdtempSync(join(tmpdir(), "hang-"));
  execFileSync("git", ["init", "-q", "--bare", join(tmp, "o.git")]);
  execFileSync("git", ["init", "-q", "-b", "outreach-state", join(tmp, "state")]);
  execFileSync("git", ["-C", join(tmp, "state"), "remote", "add", "origin", join(tmp, "o.git")]);
  cpSync(join(ROOT, "outreach"), join(tmp, "outreach"), { recursive: true });
  const cfg = JSON.parse(readFileSync(join(tmp, "outreach", "campaign.json"), "utf8"));
  Object.assign(cfg, { countries: ["US"], osm_categories: ["craft=plumber"], search_queries: [], min_delay_seconds: 5, allow_live: false, auto_approve: false });
  writeFileSync(join(tmp, "outreach", "campaign.json"), JSON.stringify(cfg));
  const d = await createTestDatabase(); dbUrl = d.url; drop = d.drop;
  sites = await startFixtureSites(4610);
  overpass = createServer((_q, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ elements: [
      { tags: { name: "Frozen", website: "http://frozen-site.test/" } },
      { tags: { name: "OSM Plumber Co", website: "http://osm-plumber.test/" } },
    ] }));
  });
  await new Promise<void>((r) => overpass.listen(4620, "127.0.0.1", () => r()));
}, 120_000);
afterAll(async () => { await sites?.close(); overpass?.close(); await drop?.(); });

it("skips a site that freezes the browser and keeps going", async () => {
  const out: string = await new Promise((done) => {
    const c = spawn(process.execPath, ["--conditions=react-server", "--import", "tsx", "scripts/gh/outreach.ts", "run"], {
      cwd: ROOT, stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, DATABASE_URL: dbUrl, OUTREACH_EPHEMERAL_DB: "1", STATE_DIR: join(tmp, "state"), OUTREACH_CONFIG_DIR: join(tmp, "outreach"),
        OUTREACH_MODE: "discovery", BRAVE_SEARCH_API_KEY: "", OVERPASS_API_URL: "http://127.0.0.1:4620/api", OVERPASS_MIN_INTERVAL_MS: "100",
        RUNNER_TEST_MODE: "1", RUNNER_TEST_HOST_SUFFIX: ".test", RUNNER_TEST_HOST_RESOLVER_RULES: "MAP *.test 127.0.0.1:4610",
        RUNNER_INSPECT_TIMEOUT_MS: "25000", GITHUB_TOKEN: "", GITHUB_STEP_SUMMARY: join(tmp, "s.md") },
    });
    let o = ""; c.stdout.on("data", (d) => (o += d)); c.stderr.on("data", (d) => (o += d)); c.on("exit", () => done(o));
  });
  expect(out).toMatch(/inspection timed out, restarting browser/);
  expect(out).toMatch(/discovery run .* finished: completed/);
  const cands = JSON.parse(readFileSync(join(tmp, "state", "state", "db", "candidates.json"), "utf8"));
  const frozen = cands.find((c: any) => c.domain === "frozen-site.test");
  const ok = cands.find((c: any) => c.domain === "osm-plumber.test");
  expect(frozen.inspection_status).toBe("error");
  expect(frozen.inspection_error).toMatch(/froze the browser/);
  expect(ok.inspection_status).toBe("inspected");
}, 240_000);
