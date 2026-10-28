/**
 * Integration tests: real Postgres (TEST_DATABASE_URL), real migrations, real service code.
 * Covers campaign settings, templates, discovery/dedup, suppression, review, adapters,
 * run lifecycle, single-active enforcement, atomic reservations, concurrency, submit gate,
 * crash/uncertain recovery, emergency cancel, graceful stop, deadline and CSV export.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createTestDatabase, setTestEnv } from "../helpers/db";
import { ACTOR, CLEAN_FLAGS, runRow, STANDARD_FORM } from "./helpers";
import { HttpError } from "@/server/http";
import { REQUIRED_LINK } from "@/shared/constants";

let drop: () => Promise<void>;
let s: {
  db: typeof import("@/server/db");
  campaigns: typeof import("@/server/services/campaigns");
  templates: typeof import("@/server/services/templates");
  candidates: typeof import("@/server/services/candidates");
  runs: typeof import("@/server/services/runs");
  work: typeof import("@/server/services/work");
  reporting: typeof import("@/server/services/reporting");
};

beforeAll(async () => {
  const t = await createTestDatabase();
  drop = t.drop;
  setTestEnv(t.url);
  s = {
    db: await import("@/server/db"),
    campaigns: await import("@/server/services/campaigns"),
    templates: await import("@/server/services/templates"),
    candidates: await import("@/server/services/candidates"),
    runs: await import("@/server/services/runs"),
    work: await import("@/server/services/work"),
    reporting: await import("@/server/services/reporting"),
  };
});

afterAll(async () => {
  await s?.db.db().end();
  await drop?.();
});

async function expectHttp(p: Promise<unknown>, status: number) {
  try {
    await p;
  } catch (e) {
    expect(e).toBeInstanceOf(HttpError);
    expect((e as HttpError).status).toBe(status);
    return e as HttpError;
  }
  throw new Error(`expected HTTP ${status}`);
}

const sql = () => s.db.db();
async function run(id: string) {
  return runRow(await s.runs.getRun(id));
}

/** Start + claim a run of the given mode and return its RunRow. */
async function startAndClaim(campaignId: string, mode: "discovery" | "dry_run" | "live") {
  const r = await s.runs.startRun(campaignId, mode, ACTOR);
  const claim = await s.runs.claimRun(r.id, { githubRunId: 123 });
  expect(claim.runToken.length).toBeGreaterThan(20);
  return run(r.id);
}

/** Discover + inspect + approve a target so it becomes live-eligible after a dry run. */
async function addInspectedCandidate(r: Awaited<ReturnType<typeof run>>, domain: string, flags = CLEAN_FLAGS) {
  const [q] = await sql()<{ id: string }[]>`select id from discovery_queries where campaign_id = ${r.campaign_id} limit 1`;
  await sql()`update discovery_queries set exhausted = false, next_offset = 0 where id = ${q.id}`;
  await s.candidates.ingestSearchResults(r, { runId: r.id, queryId: q.id, offset: 0, moreAvailable: false, results: [{ url: `https://www.${domain}/`, title: domain, description: "" }] });
  const [c] = await sql()<{ id: string }[]>`select id from candidates where campaign_id = ${r.campaign_id} and domain = ${domain}`;
  await s.candidates.recordInspection(r, { runId: r.id, candidateId: c.id, status: "inspected", contactUrl: `https://www.${domain}/contact`, finalUrl: `https://www.${domain}/contact`, pageTitle: "Contact", form: STANDARD_FORM, formsFound: 1, flags });
  return c.id;
}

let campaignId = "";

describe("campaign settings & templates", () => {
  it("creates a campaign with versioned short + standard templates (dry-run default)", async () => {
    const c = await s.campaigns.createCampaign({ name: "Test campaign" }, ACTOR);
    campaignId = c.id;
    expect(c.live_enabled).toBe(false);
    expect(c.is_active).toBe(true);
    const versions = await s.templates.listTemplateVersions(c.id);
    expect(versions.map((v) => `${v.kind}:${v.version}`).sort()).toEqual(["short:1", "standard:1"]);
    expect(versions.every((v) => v.body.includes("{{service_link}}"))).toBe(true);
  });

  it("validates settings, records sensitive changes in the audit log, and resets sender verification", async () => {
    await expectHttp(s.campaigns.updateCampaign(campaignId, { country: "India!" }, ACTOR).catch((e) => { throw new HttpError(400, e.message); }), 400);
    await expectHttp(s.campaigns.updateCampaign(campaignId, { live_enabled: true }, ACTOR), 422);
    await s.campaigns.verifySender(campaignId, ACTOR);
    let c = await s.campaigns.updateCampaign(campaignId, { live_enabled: true, excluded_domains: ["WWW.Competitor.com"] }, ACTOR);
    expect(c.live_enabled).toBe(true);
    expect(c.excluded_domains).toEqual(["competitor.com"]);
    c = await s.campaigns.updateCampaign(campaignId, { sender_email: "new@example.com" }, ACTOR);
    expect(c.sender_verified_at).toBeNull();
    expect(c.live_enabled).toBe(false);
    const audits = await sql()`select action from audit_events where entity_id = ${campaignId}`;
    expect(audits.map((a) => a.action)).toContain("campaign.update_sensitive");
    await s.campaigns.updateCampaign(campaignId, { sender_email: "itsdevsarun@gmail.com" }, ACTOR);
    await s.campaigns.verifySender(campaignId, ACTOR);
  });

  it("creates immutable template versions and blocks templates without the required link", async () => {
    await expectHttp(s.templates.createTemplateVersion(campaignId, { kind: "short", subject: "Hi", body: "Hi {{greeting_name}}, I'm Arun from Devs Arun. Would a free quick visibility check help your business? Reply to this message." }, ACTOR), 422);
    await expectHttp(s.templates.createTemplateVersion(campaignId, { kind: "short", subject: "Hi", body: `Hi {{greeting_name}}, I'm Arun. ${REQUIRED_LINK} AI mentions, rankings, leads and revenue are not guaranteed.` }, ACTOR), 422);
    const v2 = await s.templates.createTemplateVersion(campaignId, { kind: "short", subject: "Free AI-search visibility check", body: `Hi {{greeting_name}},\n\nI'm {{sender_name}} from {{sender_business}}. Would a free quick AI-search visibility check be useful? Share your website here:\n{{service_link}}\n\nBest,\n{{sender_name}}` }, ACTOR);
    expect(v2.version).toBe(2);
    await expect(sql()`update template_versions set body = 'x' where id = ${v2.id}`).rejects.toThrow(/immutable/);
    await s.templates.setActiveTemplateVersion(campaignId, v2.id, ACTOR);
    expect((await s.campaigns.getCampaign(campaignId)).active_template_version_id).toBe(v2.id);
  });
});

describe("discovery, dedup and suppression", () => {
  let disc: Awaited<ReturnType<typeof run>>;

  it("refuses discovery until the target market is configured (no invented market)", async () => {
    const e = await expectHttp(s.runs.startRun(campaignId, "discovery", ACTOR), 422);
    expect(JSON.stringify(e.details)).toMatch(/industry/);
    await s.campaigns.updateCampaign(campaignId, { industry: "plumbers", country: "IN", city_region: "Pune", max_candidates: 5, min_delay_seconds: 5 }, ACTOR);
  });

  it("enforces a single active run per campaign and single claim per run", async () => {
    const r = await s.runs.startRun(campaignId, "discovery", ACTOR);
    await expectHttp(s.runs.startRun(campaignId, "dry_run", ACTOR), 409);
    await s.runs.claimRun(r.id, {});
    await expectHttp(s.runs.claimRun(r.id, {}), 409);
    disc = await run(r.id);
    expect(disc.status).toBe("running");
    expect(new Date(disc.deadline_at!).getTime()).toBeGreaterThan(Date.now() + 60 * 60 * 1000);
  });

  it("hands out search work from generated queries and checkpoints pagination", async () => {
    const w = await s.work.nextWork(disc);
    expect(w.type).toBe("search");
    if (w.type !== "search") return;
    expect(w.query).toMatch(/plumbers/);
    const stats = await s.candidates.ingestSearchResults(disc, {
      runId: disc.id, queryId: w.queryId, offset: 0, moreAvailable: true,
      results: [
        { url: "https://www.acme-plumbing.in/", title: "Acme Plumbing", description: "" },
        { url: "https://acme-plumbing.in/contact?utm_source=x", title: "Acme contact", description: "" },
        { url: "https://shop.acme-plumbing.in/", title: "Acme shop", description: "" },
        { url: "https://www.yelp.com/biz/acme", title: "Acme on Yelp", description: "" },
        { url: "https://competitor.com/", title: "Competitor", description: "" },
        { url: "https://www.bright-pipes.in/", title: "Bright Pipes", description: "" },
        { url: "javascript:alert(1)", title: "bad", description: "" },
      ],
    });
    expect(stats.added).toBe(2);
    expect(stats.duplicates).toBe(2);
    expect(stats.filtered).toBe(3);
    const w2 = await s.work.nextWork(disc);
    expect(w2.type === "search" && w2.queryId === w.queryId && w2.offset === 1).toBe(true);
    const again = await s.candidates.ingestSearchResults(disc, { runId: disc.id, queryId: w.queryId, offset: 1, moreAvailable: false, results: [{ url: "https://bright-pipes.in/about", title: "x", description: "" }] });
    expect(again.added).toBe(0);
    expect(again.exhausted).toBe(true);
    const [dup] = await sql()`select coalesce(sum((data->>'count')::int),0)::int as n from run_events where run_id = ${disc.id} and type = 'duplicate_prevented'`;
    expect(dup.n).toBe(3);
  });

  it("caps candidates at max_candidates", async () => {
    const [q] = await sql()<{ id: string }[]>`select id from discovery_queries where campaign_id = ${campaignId} and not exhausted limit 1`;
    const res = await s.candidates.ingestSearchResults(disc, { runId: disc.id, queryId: q.id, offset: 0, moreAvailable: false, results: ["a", "b", "c", "d", "e"].map((x) => ({ url: `https://${x}-plumbing-example.in/`, title: x, description: "" })) });
    expect(res.added).toBe(3);
    expect(res.capped).toBe(2);
  });

  it("suppresses a domain and filters it from future discovery", async () => {
    await s.candidates.addSuppression({ domain: "e-plumbing-example.in", reason: "opted out" }, ACTOR);
    await s.candidates.addSuppression({ domain: "c-plumbing-example.in", reason: "opted out" }, ACTOR);
    const [c] = await sql()`select review_status from candidates where domain = 'c-plumbing-example.in'`;
    expect(c.review_status).toBe("suppressed");
  });

  it("records inspections, proposes adapters, and blocks CAPTCHA forms from approval", async () => {
    const w = await s.work.nextWork(disc);
    expect(w.type).toBe("inspect");
    const [acme] = await sql()<{ id: string }[]>`select id from candidates where domain = 'acme-plumbing.in'`;
    const [bright] = await sql()<{ id: string }[]>`select id from candidates where domain = 'bright-pipes.in'`;
    await s.candidates.recordInspection(disc, { runId: disc.id, candidateId: acme.id, status: "inspected", contactUrl: "https://www.acme-plumbing.in/contact", finalUrl: "https://www.acme-plumbing.in/contact", pageTitle: "Contact", form: STANDARD_FORM, formsFound: 1, flags: CLEAN_FLAGS });
    await s.candidates.recordInspection(disc, { runId: disc.id, candidateId: bright.id, status: "blocked", contactUrl: "https://www.bright-pipes.in/contact", finalUrl: "https://www.bright-pipes.in/contact", pageTitle: "Contact", form: STANDARD_FORM, formsFound: 1, flags: { ...CLEAN_FLAGS, captcha: true, captcha_kinds: ["recaptcha"] } });
    const [a1] = await sql()`select status from form_adapters where candidate_id = ${acme.id}`;
    const [a2] = await sql()<{ id: string; status: string }[]>`select id, status from form_adapters where candidate_id = ${bright.id}`;
    expect(a1.status).toBe("proposed");
    expect(a2.status).toBe("needs_manual");
    await expectHttp(s.candidates.reviewCandidate(bright.id, { decision: "approve" }, ACTOR), 422);
    await s.candidates.reviewCandidate(bright.id, { decision: "approve", attestPermitted: true }, ACTOR);
    const e = await expectHttp(s.candidates.decideAdapter(a2.id, { decision: "approve" }, ACTOR), 422);
    expect(JSON.stringify(e.details)).toMatch(/CAPTCHA/);
    const [cand] = await sql()`select suitability_notes from candidates where id = ${bright.id}`;
    expect(cand.suitability_notes).toMatch(/BLOCKED: CAPTCHA/);
  });

  it("finishes discovery and records completion", async () => {
    const r = await s.runs.finishRun(disc, "queue_exhausted");
    expect(r.status).toBe("completed");
  });
});

describe("dry run, live reservations and recovery", () => {
  let acmeId = "";
  let adapterId = "";

  it("dry run drafts the exact message and can never submit", async () => {
    [{ id: acmeId }] = await sql()<{ id: string }[]>`select id from candidates where domain = 'acme-plumbing.in'`;
    await s.candidates.reviewCandidate(acmeId, { decision: "approve", attestPermitted: true }, ACTOR);
    const r = await startAndClaim(campaignId, "dry_run");
    const w = await s.work.nextWork(r);
    expect(w.type).toBe("dry_run");
    if (w.type !== "dry_run") return;
    expect(w.message).toContain(REQUIRED_LINK);
    expect(w.fillAllowed).toBe(false);
    expect(Object.values(w.fieldValues)).toContain(w.message);
    await expectHttp(s.work.updateAttempt(r, { runId: r.id, attemptId: w.attemptId, status: "submitting" }), 400);
    await s.work.updateAttempt(r, { runId: r.id, attemptId: w.attemptId, status: "dry_run_ok" });
    const [a] = await sql()<{ id: string; test_status: string }[]>`select id, test_status from form_adapters where candidate_id = ${acmeId}`;
    adapterId = a.id;
    expect(a.test_status).toBe("passed");
    expect((await s.work.nextWork(r)).type).toBe("none");
    await s.runs.finishRun(r, "queue_exhausted");
  });

  it("live mode cannot run unapproved targets or without live enabled", async () => {
    await s.campaigns.updateCampaign(campaignId, { live_enabled: false }, ACTOR);
    let e = await expectHttp(s.runs.startRun(campaignId, "live", ACTOR), 422);
    expect(JSON.stringify(e.details)).toMatch(/disabled/);
    await s.campaigns.updateCampaign(campaignId, { live_enabled: true }, ACTOR);
    e = await expectHttp(s.runs.startRun(campaignId, "live", ACTOR), 422);
    expect(JSON.stringify(e.details)).toMatch(/No eligible live targets/);
    await s.candidates.decideAdapter(adapterId, { decision: "approve" }, ACTOR);
    expect(await s.runs.countEligibleLive(campaignId, sql())).toBe(1);
  });

  it("reserves atomically before submit; submit gate persists 'submitting'; crash -> uncertain, never retried", async () => {
    const r = await startAndClaim(campaignId, "live");
    const w = await s.work.nextWork(r);
    expect(w.type).toBe("live");
    if (w.type !== "live") return;
    const [att] = await sql()`select status, message, template_version_id from attempts where id = ${w.attemptId}`;
    expect(att.status).toBe("reserved");
    expect(att.message).toContain(REQUIRED_LINK);
    await s.work.updateAttempt(r, { runId: r.id, attemptId: w.attemptId, status: "filled", fieldValues: { "Email [email]": "x" } });
    await s.work.updateAttempt(r, { runId: r.id, attemptId: w.attemptId, status: "submitting" });
    // Same business is never offered again in this run or later.
    expect((await s.work.nextWork(r)).type).toBe("none");
    // Simulate a crashed runner: heartbeat goes stale.
    await sql()`update runs set heartbeat_at = now() - interval '1 hour' where id = ${r.id}`;
    await s.runs.refreshRunHealth(campaignId);
    const lost = await s.runs.getRun(r.id);
    expect(lost.status).toBe("lost");
    expect(lost.needs_reconciliation).toBe(true);
    const [u] = await sql()`select status from attempts where id = ${w.attemptId}`;
    expect(u.status).toBe("uncertain");
    expect((await s.work.nextWork(runRow(lost))).type).toBe("stop");
    const e = await expectHttp(s.runs.startRun(campaignId, "live", ACTOR), 422);
    expect(JSON.stringify(e.details)).toMatch(/Reconcile/);
    // A late report from the lost runner may still record the observed outcome.
    await s.work.updateAttempt(runRow(lost), { runId: r.id, attemptId: w.attemptId, status: "unclear" });
    await sql()`update attempts set status = 'uncertain' where id = ${w.attemptId}`;
    await s.runs.reconcileAttempt(w.attemptId, "sent", "checked inbox", ACTOR);
    const rec = await s.runs.getRun(r.id);
    expect(rec.reconciled_at).not.toBeNull();
    expect(await s.runs.countEligibleLive(campaignId, sql())).toBe(0);
    await expectHttp(s.runs.startRun(campaignId, "live", ACTOR), 422);
  });

  it("prevents concurrent duplicate reservations for the same business across campaigns/workers", async () => {
    const c2 = await s.campaigns.createCampaign({ name: "Second" }, ACTOR);
    await s.campaigns.updateCampaign(c2.id, { industry: "x", country: "IN", city_region: "y" }, ACTOR);
    await s.campaigns.verifySender(c2.id, ACTOR);
    await s.campaigns.updateCampaign(c2.id, { live_enabled: true, max_live_attempts_per_run: 5 }, ACTOR);
    const discRun = await startAndClaim(c2.id, "discovery");
    const cand = await addInspectedCandidate(discRun, "racey-business.in");
    await s.runs.finishRun(discRun, "queue_exhausted");
    await s.candidates.reviewCandidate(cand, { decision: "approve", attestPermitted: true }, ACTOR);
    const [ad] = await sql()<{ id: string }[]>`select id from form_adapters where candidate_id = ${cand}`;
    await sql()`update form_adapters set test_status = 'passed' where id = ${ad.id}`;
    await s.candidates.decideAdapter(ad.id, { decision: "approve" }, ACTOR);
    const liveRun = await startAndClaim(c2.id, "live");
    const campaign = await s.campaigns.getCampaign(c2.id);
    const [t] = await sql()<Record<string, unknown>[]>`
      select c.id as candidate_id, c.business_id, c.domain, b.label, b.label_verified, a.id as adapter_id, a.form_url, a.form_selector, a.submit_selector, a.mapping
      from candidates c join businesses b on b.id = c.business_id join form_adapters a on a.candidate_id = c.id where c.id = ${cand}`;
    // Ten workers race to reserve the same business; also a fake second run for the same business.
    const results = await Promise.all(Array.from({ length: 10 }, () => s.work.reserveLiveAttempt(liveRun, campaign, t as never).catch((e) => e)));
    const reserved = results.filter((x) => x && typeof x === "object" && "type" in x && x.type === "live");
    expect(reserved.length).toBe(1);
    const [n] = await sql()`select count(*)::int as n from attempts where business_id = ${t.business_id as string} and mode = 'live'`;
    expect(n.n).toBe(1);
    // Direct insert of a second live attempt for the same business violates the unique index.
    await expect(sql()`insert into attempts (run_id, campaign_id, candidate_id, business_id, template_version_id, mode, status, subject, message, form_url)
      select ${liveRun.id}, ${c2.id}, ${cand}, business_id, ${campaign.active_template_version_id}, 'live', 'reserved', 's', ${"x " + REQUIRED_LINK}, 'u'
      from candidates where id = ${cand}`).rejects.toThrow(/duplicate key/);

    // Emergency cancel closes the submit gate and requires reconciliation.
    const attemptId = (reserved[0] as { attemptId: string }).attemptId;
    await s.work.updateAttempt(liveRun, { runId: liveRun.id, attemptId, status: "filled" });
    await s.runs.emergencyCancel(liveRun.id, ACTOR);
    const cancelled = runRow(await s.runs.getRun(liveRun.id));
    await expectHttp(s.work.updateAttempt(cancelled, { runId: liveRun.id, attemptId, status: "submitting" }), 409);
    const [after] = await sql()`select status from attempts where id = ${attemptId}`;
    expect(after.status).toBe("failed_before_submit");
    const rec = await s.runs.pendingReconciliation(c2.id, sql());
    expect(rec.runs).toBe(1);
    await s.runs.markRunReconciled(liveRun.id, ACTOR);
    expect((await s.runs.pendingReconciliation(c2.id, sql())).runs).toBe(0);
    // failed_before_submit frees the business for a future, deliberate run.
    expect(await s.runs.countEligibleLive(c2.id, sql())).toBe(1);

    // A suppressed business is never reserved even if approved.
    await s.candidates.addSuppression({ domain: "racey-business.in", reason: "opt-out" }, ACTOR);
    expect(await s.runs.countEligibleLive(c2.id, sql())).toBe(0);
  });

  it("graceful stop: current item finishes, no new work, run ends 'stopped'", async () => {
    const r = await startAndClaim(campaignId, "discovery");
    await s.runs.requestStop(r.id, ACTOR);
    const stopping = runRow(await s.runs.getRun(r.id));
    expect(stopping.status).toBe("stopping");
    expect(await s.work.nextWork(stopping)).toEqual({ type: "stop", reason: "stop_requested" });
    expect((await s.runs.heartbeat(stopping)).stopRequested).toBe(true);
    const done = await s.runs.finishRun(stopping, "stop_requested");
    expect(done.status).toBe("stopped");
  });

  it("stops handing out work before the processing deadline", async () => {
    const r = await startAndClaim(campaignId, "discovery");
    await sql()`update runs set deadline_at = now() + interval '5 minutes' where id = ${r.id}`;
    const w = await s.work.nextWork(await run(r.id));
    expect(w).toEqual({ type: "stop", reason: "deadline" });
    const fin = await s.runs.finishRun(await run(r.id), "deadline");
    expect(fin.status).toBe("completed");
    expect(fin.finish_reason).toBe("deadline");
  });
});

describe("exports", () => {
  it("exports attempts and candidates CSV with formula protection", async () => {
    await sql()`update candidates set title = '=HYPERLINK("http://evil")' where domain = 'acme-plumbing.in'`;
    const csv = await s.reporting.candidatesCsv(campaignId);
    expect(csv).toContain(`"'=HYPERLINK(""http://evil"")"`);
    const a = await s.reporting.attemptsCsv({ campaignId });
    const lines = a.replace(/^\uFEFF/, "").split("\r\n");
    expect(lines[0]).toContain('"attempt_id"');
    expect(a).toContain(REQUIRED_LINK);
    expect(a).toContain('"dry run"');
    expect(a).toContain('"live"');
    const live = await s.reporting.attemptsCsv({ campaignId, mode: "live" });
    expect(live).not.toContain('"dry run"');
  });

  it("overview reports real persisted counts", async () => {
    const o = await s.reporting.getOverview(campaignId);
    expect(o.stats.discovered).toBeGreaterThan(0);
    expect(o.stats.submission_attempts).toBe(1);
    expect(o.stats.confirmation_observed).toBe(0);
    expect(o.stats.duplicates_prevented).toBeGreaterThanOrEqual(3);
  });
});
