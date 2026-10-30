/**
 * Live dashboard as a GitHub Issue in the PRIVATE repository.
 * The orchestrator rewrites the issue body every ~20 s while a run is active and once
 * more at the end, so it always shows the latest persisted numbers. Website-derived text
 * is escaped (mdCell). Uses only the job's GITHUB_TOKEN (issues: write).
 */
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { db } from "../../src/server/db";
import { getOverview } from "../../src/server/services/reporting";
import { parseCsv } from "./config";
import { mdCell } from "./report";

const LABEL = "outreach-dashboard";
const TITLE = "📊 Outreach Dashboard (live)";

export const RESPONSE_TYPES = ["replied", "interested", "meeting", "client", "not_interested", "opt_out"] as const;

/** Owner-recorded replies from businesses (outreach/responses.csv). The tool cannot read your inbox. */
export async function readResponses(configDir: string): Promise<{ counts: Record<string, number>; rows: Record<string, string>[]; problems: string[] }> {
  const counts: Record<string, number> = Object.fromEntries(RESPONSE_TYPES.map((t) => [t, 0]));
  const file = join(configDir, "responses.csv");
  if (!existsSync(file)) return { counts, rows: [], problems: [] };
  const rows = parseCsv(await readFile(file, "utf8")).filter((r) => r.domain);
  const problems: string[] = [];
  for (const [i, r] of rows.entries()) {
    const t = (r.response ?? "").toLowerCase();
    if ((RESPONSE_TYPES as readonly string[]).includes(t)) counts[t]++;
    else problems.push(`responses.csv row ${i + 2}: response must be one of ${RESPONSE_TYPES.join(", ")}`);
  }
  return { counts, rows, problems };
}

const utc = (d: unknown) => (d ? new Date(d as string).toISOString().replace("T", " ").slice(0, 19) + " UTC" : "—");
const dur = (s: number) => `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`;

export async function renderDashboard(opts: { campaignId: string | null; runId: string | null; jobRunIds?: string[]; configDir: string; repo?: string; problems?: string[]; phase: string }): Promise<string> {
  const repo = opts.repo ?? "";
  const gh = (p: string) => (repo ? `https://github.com/${repo}/${p}` : p);
  const out: string[] = [`# 📊 Outreach Dashboard`, "", `**${mdCell(opts.phase)}** · updated ${utc(new Date())}`, ""];
  if (opts.problems?.length) {
    out.push("## ⚠ Action needed", "");
    for (const p of opts.problems) out.push(`- ${mdCell(p, 600)}`);
    out.push("", `Fix: edit [outreach/campaign.json](${gh("blob/main/outreach/campaign.json")}) (or the file named above), then start the run again.`, "");
  }
  if (!opts.campaignId) return out.join("\n");
  const sql = db();
  const ov = await getOverview(opts.campaignId);
  const c = ov.campaign!;
  out.push(`Campaign: **${mdCell(c.name)}** · ${mdCell(c.industry || "industry not set")} · ${mdCell(c.city_region || "any city")} · countries (priority order): **${mdCell((c.countries?.length ? c.countries : [c.country]).filter(Boolean).join(" → ") || "not set")}** · live mode **${c.live_enabled ? "ON" : "off"}**`, "");

  const run = opts.runId ? (await sql<Record<string, any>[]>`select * from runs where id = ${opts.runId}`)[0] : ov.run;
  if (run) {
    const started = run.started_at ? new Date(run.started_at).getTime() : null;
    const end = run.finished_at ? new Date(run.finished_at).getTime() : Date.now();
    const active = ["queued", "running", "stopping"].includes(run.status);
    out.push("## Current / last run", "", "| | |", "|---|---|");
    out.push(`| Run | \`${String(run.id).slice(0, 8)}\` · ${mdCell(run.mode)} · **${mdCell(run.status)}**${active ? " 🟢" : ""} |`);
    out.push(`| Started | ${utc(run.started_at)} |`, `| Elapsed | ${started ? dur(Math.round((end - started) / 1000)) : "—"} |`);
    out.push(`| Processing deadline | ${utc(run.deadline_at)} |`, `| Last heartbeat | ${utc(run.heartbeat_at)} |`);
    if (run.finish_reason) out.push(`| Finish reason | ${mdCell(run.finish_reason)} |`);
    if (run.github_run_url) out.push(`| Live log | ${mdCell(run.github_run_url)} |`);
    out.push("");
  }

  // ---- This job: every phase + every live submission with screenshots -------------
  const jobIds = opts.jobRunIds?.length ? opts.jobRunIds : opts.runId ? [opts.runId] : [];
  if (jobIds.length) {
    const phases = await sql<Record<string, any>[]>`
      select r.id, r.mode, r.status, r.finish_reason, r.started_at, r.finished_at,
        (select count(*)::int from candidates c where c.discovered_run_id = r.id) as found,
        (select count(*)::int from run_events e where e.run_id = r.id and e.type in ('form_detected','mapping_required','review_required') and e.attempt_id is null) as inspected,
        (select count(*)::int from attempts t where t.run_id = r.id and t.status = 'dry_run_ok') as dry_ok,
        (select count(*)::int from attempts t where t.run_id = r.id and t.mode = 'live' and t.submit_started_at is not null and t.status <> 'failed_before_submit') as submitted,
        (select count(*)::int from attempts t where t.run_id = r.id and t.status = 'confirmed') as confirmed
      from runs r where r.id in ${sql(jobIds)} order by r.created_at`;
    out.push("## This job", "", "| Phase | Status | Found | Forms checked | Dry run OK | Submitted | Confirmed |", "|---|---|---|---|---|---|---|");
    for (const p of phases) out.push(`| ${mdCell(p.mode)} | ${mdCell(p.status)}${p.finish_reason ? ` (${mdCell(p.finish_reason)})` : ""} | ${p.found} | ${p.inspected} | ${p.dry_ok} | **${p.submitted}** | **${p.confirmed}** |`);
    out.push("");
    const subs = await sql<Record<string, any>[]>`
      select t.id, t.status, t.form_url, t.confirmation_text, t.submit_started_at, c.domain,
        (select e.object_path from evidence e where e.attempt_id = t.id and e.kind = 'post_attempt' and e.object_path is not null order by e.created_at desc limit 1) as after_shot,
        (select e.object_path from evidence e where e.attempt_id = t.id and e.kind = 'filled' and e.object_path is not null order by e.created_at desc limit 1) as filled_shot
      from attempts t join candidates c on c.id = t.candidate_id
      where t.run_id in ${sql(jobIds)} and t.mode = 'live' and t.submit_started_at is not null and t.status <> 'failed_before_submit'
      order by t.submit_started_at limit 40`;
    if (subs.length) {
      out.push(`## Submitted in this job (${subs.length})`, "");
      const raw = (p: string) => gh(`blob/outreach-state/evidence/${p.split("/").map(encodeURIComponent).join("/")}?raw=true`);
      for (const a of subs) {
        out.push(`### ${a.status === "confirmed" ? "🎉" : a.status === "unclear" ? "❓" : "⚠"} ${mdCell(a.domain)} — ${mdCell(a.status)}`, "");
        out.push(`${utc(a.submit_started_at)} · form: ${mdCell(a.form_url, 200)}`);
        if (a.confirmation_text) out.push("", `Website said: “${mdCell(a.confirmation_text, 220)}”`);
        out.push("");
        const imgs = [a.filled_shot ? `<img src="${raw(a.filled_shot)}" width="360" alt="filled form">` : "", a.after_shot ? `<img src="${raw(a.after_shot)}" width="360" alt="after submit">` : ""].filter(Boolean);
        if (imgs.length) out.push(`Filled form · after submit<br>${imgs.join(" ")}`, "");
      }
    }
  }

  const [r] = await sql<Record<string, number>[]>`
    select
      (select count(*)::int from candidates where campaign_id = ${opts.campaignId} and review_status = 'approved') as approved_sites,
      (select count(*)::int from candidates where campaign_id = ${opts.campaignId} and review_status = 'rejected') as rejected_sites,
      (select count(*)::int from candidates where campaign_id = ${opts.campaignId} and review_status = 'suppressed') as suppressed_sites,
      (select count(*)::int from form_adapters a join candidates c on c.id = a.candidate_id where c.campaign_id = ${opts.campaignId} and a.status = 'approved') as approved_forms,
      (select count(*)::int from form_adapters a join candidates c on c.id = a.candidate_id where c.campaign_id = ${opts.campaignId} and a.test_status = 'passed') as passed_forms,
      (select count(*)::int from attempts where campaign_id = ${opts.campaignId} and mode = 'live' and status = 'error_after_submit') as live_errors`;
  const s = ov.stats;
  const resp = await readResponses(opts.configDir);
  out.push("## Funnel", "", "| Stage | Count |", "|---|---|");
  out.push(`| 🔎 Websites discovered | **${s.discovered ?? 0}** |`, `| 📝 Forms inspected | ${s.forms_inspected ?? 0} |`);
  out.push(`| ⏳ Waiting for your review | ${s.pending_review ?? 0} |`, `| ✅ Websites approved by you | ${r.approved_sites} |`);
  out.push(`| ❌ Rejected · 🚫 suppressed | ${r.rejected_sites} · ${r.suppressed_sites} |`);
  out.push(`| 🧪 Forms passed dry run · ✅ forms approved | ${r.passed_forms} · ${r.approved_forms} |`, `| 📬 Ready for next live run | ${s.approved_queue ?? 0} |`);
  out.push(`| 📤 **Live submissions attempted** | **${s.submission_attempts ?? 0}** |`, `| 🎉 Confirmation observed on the website | **${s.confirmation_observed ?? 0}** |`);
  out.push(`| ❓ Unclear (submitted, no success message) | ${s.unclear_attempts ?? 0} |`, `| ⚠ Errors | ${s.errors ?? 0} |`);
  out.push(`| 🤖 CAPTCHA / needs manual handling | ${s.manual_review ?? 0} |`, `| 🔁 Duplicates prevented | ${s.duplicates_prevented ?? 0} |`, `| 🧾 Awaiting reconciliation | ${s.uncertain ?? 0} |`, "");
  out.push("## Replies from businesses (you record these)", "", "| Response | Count |", "|---|---|");
  out.push(...RESPONSE_TYPES.map((t) => `| ${t.replace("_", " ")} | ${resp.counts[t]} |`));
  out.push("", `Replies arrive in your own email/WhatsApp — the tool cannot read them. Log them in [outreach/responses.csv](${gh("blob/main/outreach/responses.csv")}); \`opt_out\` also suppresses the domain.`, "");
  out.push("> “Confirmation observed” = the website showed a new success message. It does not prove delivery, reading or a lead.", "");

  if (run) {
    const ev = await sql<Record<string, any>[]>`select e.created_at, e.type, e.message, c.domain from run_events e left join candidates c on c.id = e.candidate_id
      where e.run_id = ${run.id} order by e.id desc limit 25`;
    out.push("## Latest activity", "", "| Time (UTC) | Event | Website | Details |", "|---|---|---|---|");
    for (const e of ev) out.push(`| ${utc(e.created_at).slice(11, 19)} | ${mdCell(e.type)} | ${mdCell(e.domain)} | ${mdCell(e.message, 160)} |`);
    out.push("");
    const subs = await sql<Record<string, any>[]>`select t.status, t.submit_started_at, c.domain, t.form_url from attempts t join candidates c on c.id = t.candidate_id
      where t.campaign_id = ${opts.campaignId} and t.mode = 'live' and t.submit_started_at is not null and t.status <> 'failed_before_submit' order by t.submit_started_at desc limit 20`;
    if (subs.length) {
      out.push("## Latest live submissions", "", "| When (UTC) | Website | Result | Form |", "|---|---|---|---|");
      for (const a of subs) out.push(`| ${utc(a.submit_started_at)} | ${mdCell(a.domain)} | ${mdCell(a.status)} | ${mdCell(a.form_url, 120)} |`);
      out.push("");
    }
  }
  out.push("## Links", "");
  out.push(`- ▶ Start a run: ${gh("actions/workflows/outreach-run.yml")}`, `- ⏹ Graceful stop: ${gh("actions/workflows/outreach-stop.yml")}`);
  out.push(`- 📁 Full reports with screenshots: ${gh("tree/outreach-state/reports")}`, `- 📝 Review queue: ${gh("blob/outreach-state/reports/review-queue.md")}`);
  out.push(`- ✏ Decide: ${gh("blob/main/outreach/review.csv")}`, "", "_This issue is rewritten automatically by the outreach-run workflow. Don't edit it._");
  const body = out.join("\n");
  return body.length > 60000 ? body.slice(0, 60000) + "\n\n_(truncated)_" : body;
}

/** Find or create the dashboard issue and rewrite its body. Never throws (dashboard is best effort). */
export function dashboardPublisher(repo: string | undefined, token: string | undefined, log: (m: string) => void) {
  let issue: number | null = null;
  let last = "";
  const api = (path: string, init: RequestInit = {}) =>
    fetch(`https://api.github.com/repos/${repo}${path}`, {
      ...init,
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
      signal: AbortSignal.timeout(15000),
    });
  return async (body: string): Promise<void> => {
    if (process.env.OUTREACH_DASHBOARD_FILE) await writeFile(process.env.OUTREACH_DASHBOARD_FILE, body).catch(() => undefined);
    if (!repo || !token || body === last) return;
    try {
      if (!issue) {
        const found = (await (await api(`/issues?labels=${LABEL}&state=open&per_page=1`)).json()) as { number: number }[];
        if (Array.isArray(found) && found[0]) issue = found[0].number;
        else {
          await api("/labels", { method: "POST", body: JSON.stringify({ name: LABEL, color: "0e8a16", description: "Auto-updated outreach dashboard" }) });
          const res = await api("/issues", { method: "POST", body: JSON.stringify({ title: TITLE, body, labels: [LABEL] }) });
          if (!res.ok) throw new Error(`create issue HTTP ${res.status}`);
          issue = ((await res.json()) as { number: number }).number;
          log(`live dashboard: https://github.com/${repo}/issues/${issue}`);
          last = body;
          return;
        }
        log(`live dashboard: https://github.com/${repo}/issues/${issue}`);
      }
      const res = await api(`/issues/${issue}`, { method: "PATCH", body: JSON.stringify({ body }) });
      if (!res.ok) throw new Error(`update issue HTTP ${res.status}`);
      last = body;
    } catch (e) {
      log(`live dashboard update skipped: ${e instanceof Error ? e.message : e}`);
    }
  };
}
