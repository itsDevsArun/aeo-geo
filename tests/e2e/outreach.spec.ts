/**
 * End-to-end: real Next.js production server + real Postgres + the real Playwright
 * runner process, against LOCAL FIXTURE WEBSITES only.
 */
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import JSZip from "jszip";
import { expect, test, type Page } from "@playwright/test";
import { E2E, runnerEnv } from "./env";

test.describe.configure({ mode: "serial" });

const REQUIRED_LINK = "https://devsarun.io/aeo-geo/";
let page: Page;
let campaignId = "";

async function call(p: Page, path: string, method = "GET", body?: unknown) {
  return p.evaluate(
    async ({ path, method, body }) => {
      const r = await fetch(path, { method, headers: body !== undefined ? { "Content-Type": "application/json" } : {}, body: body !== undefined ? JSON.stringify(body) : undefined });
      const text = await r.text();
      let data: unknown = text;
      try { data = JSON.parse(text); } catch { /* csv etc */ }
      return { status: r.status, data: data as any, text, headers: Object.fromEntries(r.headers.entries()) };
    },
    { path, method, body },
  );
}

function runRunner(runId: string, extra: Record<string, string> = {}): Promise<{ code: number; out: string }> {
  return new Promise((resolve) => {
    const child = spawn("npx", ["tsx", "runner/index.ts"], { env: { ...process.env, ...runnerEnv(runId, extra) }, stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("exit", (code) => resolve({ code: code ?? 1, out }));
  });
}

async function startRunViaUi(button: string): Promise<string> {
  await page.goto("/runs");
  await page.getByTestId(button).click();
  await page.waitForURL(/\/runs\/[0-9a-f-]{36}$/);
  return page.url().split("/").pop()!;
}

async function submissions(): Promise<{ host: string; body: Record<string, string> }[]> {
  return (await fetch(`http://127.0.0.1:${E2E.sitesPort}/__fixture/submissions`)).json();
}

async function candidateId(domain: string): Promise<string> {
  await page.goto(`/candidates?q=${domain}`);
  const href = await page.locator(`a:text-is("${domain}")`).first().getAttribute("href");
  return href!.split("/").pop()!;
}

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
});

test("unauthenticated access is refused (pages, dashboard API, runner API)", async ({ request }) => {
  const r = await request.get("/", { maxRedirects: 0 });
  expect(r.status()).toBe(307);
  expect(r.headers()["location"]).toContain("/login");
  expect((await request.get("/api/overview")).status()).toBe(401);
  expect((await request.get(`/api/exports/attempts?campaignId=00000000-0000-0000-0000-000000000000`)).status()).toBe(401);
  expect((await request.post("/api/runs", { data: {}, headers: { Origin: E2E.baseUrl } })).status()).toBe(401);
  expect((await request.post("/api/runs", { data: {}, headers: { Origin: "https://evil.example" } })).status()).toBe(403);
  expect((await request.get("/api/evidence/00000000-0000-0000-0000-000000000000")).status()).toBe(401);
  expect((await request.post("/api/runner/work", { data: { runId: "00000000-0000-0000-0000-000000000000" } })).status()).toBe(401);
  expect((await request.post("/api/runner/work", { data: { runId: "00000000-0000-0000-0000-000000000000" }, headers: { Authorization: `Bearer ${E2E.runnerSecret}`, "X-Run-Id": "00000000-0000-0000-0000-000000000000", "X-Run-Token": "forged" } })).status()).toBe(401);
  const health = await (await request.get("/api/health")).json();
  expect(health.database).toBe(true);
  expect(JSON.stringify(health)).not.toContain(E2E.serviceKey);
});

test("login: wrong password and non-allowlisted users are rejected; owner logs in", async () => {
  await page.goto("/login");
  await page.fill("#email", E2E.owner.email);
  await page.fill("#password", "wrong");
  await page.click("button[type=submit]");
  await expect(page.locator(".alert.bad").first()).toContainText("Invalid email or password");
  await page.fill("#email", E2E.intruder.email);
  await page.fill("#password", E2E.intruder.password);
  await page.click("button[type=submit]");
  await expect(page.locator(".alert.bad").first()).toContainText("Invalid email or password");
  await page.fill("#email", E2E.owner.email);
  await page.fill("#password", E2E.owner.password);
  await page.click("button[type=submit]");
  await page.waitForURL(E2E.baseUrl + "/");
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
  const cookies = await page.context().cookies();
  const auth = cookies.find((c) => c.name.includes("auth-token"));
  expect(auth?.httpOnly).toBe(true);
  expect(await page.evaluate(() => JSON.stringify(localStorage))).not.toContain("access_token");
});

test("create campaign; discovery refused until target market is set; configure settings", async () => {
  await page.getByRole("button", { name: "Create campaign" }).click();
  await page.waitForURL(/\/campaign$/);
  const list = await call(page, "/api/campaigns");
  campaignId = list.data.campaigns[0].id;
  const refused = await call(page, "/api/runs", "POST", { campaignId, mode: "discovery" });
  expect(refused.status).toBe(422);
  expect(JSON.stringify(refused.data.details)).toMatch(/industry/);
  await page.fill("#f-industry", "plumbers");
  await page.fill("#f-country", "IN");
  await page.fill("#f-city_region", "Testville");
  await page.fill("#f-max_candidates", "20");
  await page.fill("#f-min_delay_seconds", "5");
  await page.fill("#f-dry_run_fill_domains", "acme-plumbing.test\nsilent-forms.test");
  await page.getByRole("button", { name: "Save settings" }).click();
  await expect(page.getByText("Saved", { exact: true })).toBeVisible();
  const c = (await call(page, `/api/campaigns/${campaignId}`)).data.campaign;
  expect(c.industry).toBe("plumbers");
  expect(c.live_enabled).toBe(false);
});

test("template editor: missing required link is blocked; a new version is saved", async () => {
  await page.goto("/campaign");
  const body = page.getByTestId("template-body");
  await body.fill("Hi {{greeting_name}},\n\nI'm Arun from Devs Arun. Would a free quick AI-search visibility check be useful for your business? Just reply.\n\nBest, Arun");
  await expect(page.getByTestId("preview-errors")).toContainText(REQUIRED_LINK);
  await page.getByTestId("save-template").click();
  await expect(page.locator(".alert.bad").first()).toContainText("Template failed validation");
  await body.fill("Hi {{greeting_name}},\n\nI'm {{sender_name}} from {{sender_business}}. I help businesses make their service pages clearer for customers and AI search. Would a free quick AI-search visibility check be useful? Share your website here:\n{{service_link}}\n\nBest,\n{{sender_name}}\n{{sender_email}}");
  await expect(page.getByText("valid", { exact: true })).toBeVisible();
  await page.getByTestId("save-template").click();
  await expect(page.locator("td", { hasText: "v2" })).toBeVisible();
  const versions = (await call(page, `/api/campaigns/${campaignId}/templates`)).data.versions;
  const v2 = versions.find((v: { kind: string; version: number }) => v.kind === "short" && v.version === 2);
  expect(v2.body).toContain("{{service_link}}");
  expect((await call(page, `/api/campaigns/${campaignId}/templates/activate`, "POST", { versionId: v2.id })).status).toBe(200);
});

test("discovery run via GitHub-style runner: search, dedupe, filter, inspect, screenshots", async () => {
  const runId = await startRunViaUi("start-discovery");
  await expect(page.getByTestId("run-status")).toContainText("Waiting for the GitHub Actions runner");
  // Single active run is enforced server-side.
  expect((await call(page, "/api/runs", "POST", { campaignId, mode: "discovery" })).status).toBe(409);
  const res = await runRunner(runId);
  expect(res.code, res.out).toBe(0);
  expect(res.out).not.toContain("acme-plumbing"); // logs never include target domains
  await expect(page.getByTestId("run-status-value")).toContainText("completed", { timeout: 20000 });
  const events = page.getByTestId("events");
  for (const t of ["run_started", "search_page_processed", "website_selected", "page_opened", "contact_page_found", "form_detected", "mapping_required", "screenshot_saved", "duplicate_prevented", "run_completed"]) {
    await expect(events.locator(`[data-type="${t}"]`).first(), t).toBeAttached();
  }
  await page.goto("/candidates");
  const table = page.getByTestId("candidates-table");
  for (const d of ["acme-plumbing.test", "silent-forms.test", "bright-dental.test", "nosolicit-co.test", "careers-only.test", "quiet-cafe.test", "robots-blocked.test"]) {
    await expect(table.getByRole("link", { name: d, exact: true })).toBeVisible();
  }
  await expect(table).not.toContainText("yelp.com");
  await expect(table).not.toContainText("example-guide");
  const ov = (await call(page, "/api/overview")).data;
  expect(ov.stats.discovered).toBe(7);
  expect(ov.stats.pending_review).toBe(7);
  expect(ov.stats.duplicates_prevented).toBeGreaterThanOrEqual(2);
  expect(ov.stats.forms_inspected).toBeGreaterThanOrEqual(5);
  expect((await submissions()).length).toBe(0);
});

test("review: suitability notes, blocked forms, private screenshots, approval requires attestation", async () => {
  const bright = await candidateId("bright-dental.test");
  await page.goto(`/candidates/${bright}`);
  await expect(page.getByTestId("suitability")).toContainText("BLOCKED: CAPTCHA");
  const nos = await candidateId("nosolicit-co.test");
  await page.goto(`/candidates/${nos}`);
  await expect(page.getByTestId("suitability")).toContainText("does not accept solicitation");
  const careers = await candidateId("careers-only.test");
  await page.goto(`/candidates/${careers}`);
  await expect(page.getByTestId("suitability")).toContainText("job application");
  const robots = await candidateId("robots-blocked.test");
  await page.goto(`/candidates/${robots}`);
  await expect(page.getByTestId("suitability")).toContainText("robots.txt");

  const acme = await candidateId("acme-plumbing.test");
  await page.goto(`/candidates/${acme}`);
  await expect(page.getByTestId("proposed-message")).toContainText(REQUIRED_LINK);
  const img = page.locator('img[alt="Inspected contact page screenshot"]');
  await expect(img).toBeVisible();
  expect(await img.evaluate((i: HTMLImageElement) => i.complete && i.naturalWidth > 100)).toBe(true);
  const src = await img.getAttribute("src");
  const cookieHeader = (await page.context().cookies()).map((c) => `${c.name}=${c.value}`).join("; ");
  const redirect = await fetch(`${E2E.baseUrl}${src}`, { headers: { Cookie: cookieHeader }, redirect: "manual" });
  expect(redirect.status).toBe(302);
  const signedUrl = redirect.headers.get("location")!;
  expect(signedUrl).toContain("/storage/v1/object/sign/evidence/");
  const imgRes = await fetch(signedUrl);
  expect(imgRes.status).toBe(200);
  expect(imgRes.headers.get("content-type")).toBe("image/jpeg");
  // Tampered token is refused; unauthenticated evidence access is refused.
  expect((await fetch(signedUrl.replace(/token=[^&]+/, "token=forged"))).status).toBe(400);
  expect((await fetch(`${E2E.baseUrl}${src}`, { redirect: "manual" })).status).toBe(401);
  // Evidence is not publicly readable without a signed link.
  const objectPublic = await fetch(`${E2E.supabaseUrl}/storage/v1/object/public/evidence/anything.jpg`);
  expect(objectPublic.status).toBe(400);
  // Approval without attestation is refused.
  await page.getByTestId("approve").click();
  await expect(page.locator(".alert.bad").first()).toContainText("Confirm you reviewed");
  await page.getByTestId("attest").check();
  await page.getByTestId("approve").click();
  await expect(page.getByText("approved", { exact: true }).first()).toBeVisible();
  // Approve silent-forms and bright-dental (the latter's adapter can never be approved).
  for (const d of ["silent-forms.test", "bright-dental.test"]) {
    const id = await candidateId(d);
    expect((await call(page, `/api/candidates/${id}/review`, "POST", { decision: "approve", attestPermitted: true })).status).toBe(200);
  }
  const brightDetail = await page.goto(`/candidates/${bright}`);
  expect(brightDetail?.status()).toBe(200);
  await page.getByTestId("approve-adapter").click();
  await expect(page.getByText("Adapter cannot be approved")).toBeVisible();
});

test("dry run never submits; fills only allowed test domains; adapters pass", async () => {
  const runId = await startRunViaUi("start-dry-run");
  const res = await runRunner(runId);
  expect(res.code, res.out).toBe(0);
  await expect(page.getByTestId("run-status-value")).toContainText("completed", { timeout: 20000 });
  expect((await submissions()).length).toBe(0);
  await page.goto(`/records?runId=${runId}`);
  await expect(page.getByTestId("records-table")).toContainText("dry run ok");
  const csv = await call(page, `/api/exports/attempts?campaignId=${campaignId}&runId=${runId}`);
  expect(csv.status).toBe(200);
  expect(csv.headers["content-type"]).toContain("text/csv");
  expect(csv.text).toContain('"dry run"');
  expect(csv.text).toContain(REQUIRED_LINK);
  expect(csv.text).toContain("_filled_");
});

test("live run: refused until enabled+verified; submits approved+tested targets once; confirmation vs unclear", async () => {
  const refused = await call(page, "/api/runs", "POST", { campaignId, mode: "live", confirm: "START LIVE" });
  expect(refused.status).toBe(422);
  await page.goto("/campaign");
  page.once("dialog", (d) => d.accept());
  await page.getByTestId("verify-sender").click();
  await expect(page.getByText("Verified by")).toBeVisible();
  await page.getByTestId("live-enabled").check();
  page.once("dialog", (d) => d.accept());
  await page.getByRole("button", { name: "Save settings" }).click();
  await expect(page.getByText("Saved", { exact: true })).toBeVisible();
  expect((await call(page, "/api/runs", "POST", { campaignId, mode: "live" })).status).toBe(422); // missing START LIVE
  let r = await call(page, "/api/runs", "POST", { campaignId, mode: "live", confirm: "START LIVE" });
  expect(r.status).toBe(422);
  expect(JSON.stringify(r.data.details)).toMatch(/No eligible live targets/);
  for (const d of ["acme-plumbing.test", "silent-forms.test"]) {
    const id = await candidateId(d);
    await page.goto(`/candidates/${id}`);
    await page.getByTestId("approve-adapter").click();
    await expect(page.getByText("approved", { exact: true }).nth(1)).toBeVisible();
  }
  // Use the standard template (it cites $199 / ₹16,999) so the live offer check runs against the fixture service page.
  const versions = (await call(page, `/api/campaigns/${campaignId}/templates`)).data.versions;
  const std = versions.find((v: { kind: string }) => v.kind === "standard");
  expect((await call(page, `/api/campaigns/${campaignId}/templates/activate`, "POST", { versionId: std.id })).status).toBe(200);
  await page.goto("/runs");
  page.once("dialog", (d) => d.accept("START LIVE"));
  await page.getByTestId("start-live").click();
  await page.waitForURL(/\/runs\/[0-9a-f-]{36}$/);
  const runId = page.url().split("/").pop()!;
  const res = await runRunner(runId);
  expect(res.code, res.out).toBe(0);
  await expect(page.getByTestId("run-status-value")).toContainText("completed", { timeout: 20000 });
  const subs = await submissions();
  expect(subs.map((s) => s.host).sort()).toEqual(["acme-plumbing.test", "silent-forms.test"]);
  for (const s of subs) {
    expect(s.body["your-message"]).toContain(REQUIRED_LINK);
    expect(s.body["your-message"]).toContain("$199");
    expect(s.body["your-message"]).not.toContain("not guaranteed");
    expect(s.body["your-email"]).toBe("itschool408@gmail.com");
    expect(s.body["website_hp"]).toBe(""); // honeypot untouched
  }
  const events = page.getByTestId("events");
  for (const t of ["offer_verified", "attempt_reserved", "fields_filled", "submit_attempted", "confirmation_observed", "review_required"]) {
    await expect(events.locator(`[data-type="${t}"]`).first(), t).toBeAttached();
  }
  await page.goto(`/records?runId=${runId}`);
  const table = page.getByTestId("records-table");
  await expect(table).toContainText("confirmed");
  await expect(table).toContainText("unclear");
  const ov = (await call(page, "/api/overview")).data;
  expect(ov.stats.submission_attempts).toBe(2);
  expect(ov.stats.confirmation_observed).toBe(1);
  expect(ov.stats.unclear_attempts).toBe(1);
  expect(ov.stats.approved_queue).toBe(0);
  // Next run: nothing eligible — the same businesses are never contacted twice.
  r = await call(page, "/api/runs", "POST", { campaignId, mode: "live", confirm: "START LIVE" });
  expect(r.status).toBe(422);
  expect((await submissions()).length).toBe(2);
});

test("record detail shows exact message, field values and three kinds of evidence", async () => {
  await page.goto("/records?mode=live&status=confirmed");
  await page.getByTestId("records-table").locator("a").first().click();
  await page.waitForURL(/\/records\/[0-9a-f-]{36}$/);
  await expect(page.getByTestId("exact-message")).toContainText(REQUIRED_LINK);
  await expect(page.getByText("Filled-form screenshot (before submit)")).toBeVisible();
  await expect(page.getByText("Post-attempt screenshot (after submit)")).toBeVisible();
  await expect(page.getByRole("definition").filter({ hasText: "Your message has been sent" })).toBeVisible();
  await expect(page.getByText("[email]", { exact: false }).first()).toBeVisible();
});

test("CSV exports: full, filtered; evidence bundle zip", async () => {
  const full = await call(page, `/api/exports/attempts?campaignId=${campaignId}`);
  expect(full.status).toBe(200);
  expect(full.headers["content-disposition"]).toContain("attempts_full-campaign.csv");
  const header = full.text.replace(/^\uFEFF/, "").split("\r\n")[0];
  expect(header).toBe('"campaign_id","run_id","attempt_id","website","verified_business_label","discovery_query","discovery_source_url","contact_form_url","final_page_url","timestamp_utc","subject","message","template_version","mode","outcome","error_or_skip_reason","confirmation_text","evidence_files"');
  const filtered = await call(page, `/api/exports/attempts?campaignId=${campaignId}&mode=live&status=confirmed`);
  const rows = filtered.text.replace(/^\uFEFF/, "").trim().split("\r\n").filter((l) => l.startsWith('"'));
  expect(filtered.text).toContain('"confirmed"');
  expect(filtered.text).not.toContain('"unclear"');
  expect(rows.length).toBeGreaterThanOrEqual(2);
  const cand = await call(page, `/api/exports/candidates?campaignId=${campaignId}`);
  expect(cand.text).toContain("acme-plumbing.test");
  await page.goto("/runs");
  await page.getByTestId("runs-table").locator("a").first().click();
  const dl = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download evidence bundle (.zip)" }).click();
  const file = await dl;
  const path = await file.path();
  const zip = await JSZip.loadAsync(await (await import("node:fs/promises")).readFile(path!));
  const names = Object.keys(zip.files);
  expect(names.some((n) => n.endsWith("_attempts.csv"))).toBe(true);
  expect(names.filter((n) => n.startsWith("screenshots/") && n.endsWith(".jpg")).length).toBeGreaterThanOrEqual(4);
  expect(names).toContain("manifest.json");
});

test("graceful stop, emergency cancel and runner-side deadline", async () => {
  // Graceful stop of a queued run.
  let runId = await startRunViaUi("start-discovery");
  page.once("dialog", (d) => d.accept());
  await page.getByTestId("stop-run").click();
  await expect(page.getByTestId("run-status-value")).toContainText("stopped");
  const late = await runRunner(runId);
  expect(late.out).toMatch(/not claimable/);

  // Graceful stop while running (dry run over 2 approved targets with a 5 s politeness delay).
  runId = await startRunViaUi("start-dry-run");
  const running = runRunner(runId);
  await expect(page.getByTestId("run-status-value")).toContainText("running", { timeout: 30000 });
  page.once("dialog", (d) => d.accept());
  await page.getByTestId("stop-run").click();
  expect((await running).code).toBe(0);
  await expect(page.getByTestId("run-status-value")).toContainText("stopped", { timeout: 20000 });
  const stopped = (await call(page, `/api/runs/${runId}`)).data;
  expect(stopped.run.finish_reason).toBe("stop_requested");
  expect(Object.values(stopped.attemptCounts as Record<string, number>).reduce((a, b) => a + b, 0)).toBeLessThanOrEqual(1);

  // Runner-side deadline: cutoff = whole budget minus 3 s -> stops for "deadline".
  runId = await startRunViaUi("start-dry-run"); // 2 queued targets, so work remains when the cutoff hits
  const d = await runRunner(runId, { RUNNER_NEW_WORK_CUTOFF_SECONDS: String(300 * 60 - 3) });
  expect(d.code).toBe(0);
  const fin = (await call(page, `/api/runs/${runId}`)).data.run;
  expect(fin.finish_reason).toBe("deadline");

  // Emergency cancel.
  runId = await startRunViaUi("start-dry-run");
  page.once("dialog", (dd) => dd.accept());
  await page.getByTestId("cancel-run").click();
  await expect(page.getByTestId("run-status-value")).toContainText("cancelled");
  const after = await runRunner(runId);
  expect(after.out).toMatch(/not claimable/);
  expect((await submissions()).length).toBe(2);
});

test("responsive layout: desktop and mobile have no horizontal overflow", async ({ browser }) => {
  mkdirSync("docs/screenshots", { recursive: true });
  const cookies = await page.context().cookies();
  for (const vp of [{ name: "desktop", width: 1280, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    await ctx.addCookies(cookies);
    const p = await ctx.newPage();
    for (const path of ["/", "/campaign", "/candidates", "/runs", "/records"]) {
      await p.goto(path);
      await p.waitForLoadState("networkidle");
      const overflow = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${vp.name} ${path}`).toBeLessThanOrEqual(1);
      await p.screenshot({ path: `docs/screenshots/${vp.name}${path === "/" ? "-overview" : path.replace("/", "-")}.png`, fullPage: false });
    }
    await ctx.close();
  }
});
