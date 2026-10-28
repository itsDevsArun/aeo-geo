/**
 * GitHub-only "dashboard": Markdown reports committed to the private
 * `outreach-state` branch (GitHub renders them, including screenshots), CSVs,
 * and a Job Summary on the Actions run page.
 *
 * All website-derived text is untrusted: it is escaped for Markdown tables and
 * messages are placed in fenced code blocks.
 */
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { db } from "../../src/server/db";
import { attemptsCsv, candidatesCsv, getOverview } from "../../src/server/services/reporting";

const STAT_LABELS: [string, string][] = [
  ["discovered", "Websites discovered"], ["pending_review", "Pending review"], ["approved_queue", "Approved live queue"],
  ["forms_inspected", "Forms inspected"], ["dry_run_attempts", "Dry-run checks"], ["submission_attempts", "Live submission attempts"],
  ["confirmation_observed", "Confirmation observed"], ["unclear_attempts", "Unclear attempts"], ["errors", "Errors"],
  ["manual_review", "CAPTCHA / manual review"], ["duplicates_prevented", "Duplicates prevented"], ["uncertain", "Awaiting reconciliation"],
];

/** Escape untrusted text for a single Markdown table cell. */
export function mdCell(v: unknown, max = 200): string {
  const s = v === null || v === undefined ? "" : v instanceof Date ? v.toISOString() : String(v);
  const t = s.replace(/\s+/g, " ").trim().slice(0, max);
  return t.replace(/[\\`*_[\]<>|#!~]/g, (c) => `\\${c}`) || "—";
}

/** Untrusted multi-line text inside a fenced block that cannot be broken out of. */
export function mdBlock(v: unknown): string {
  const s = String(v ?? "").replace(/~{3,}/g, "~~").replace(/`{3,}/g, "``");
  return `~~~text\n${s}\n~~~`;
}

const utc = (d: unknown) => (d ? new Date(d as string).toISOString().replace("T", " ").slice(0, 19) + " UTC" : "—");
const KIND: Record<string, string> = { inspection: "Inspected page", filled: "Filled form (before submit)", post_attempt: "After submit" };

export interface ReportPaths {
  runReport: string | null;
}

export async function writeReports(opts: {
  stateDir: string;
  campaignId: string;
  runId: string | null;
  repo?: string;
  notes?: string[];
  problems?: string[];
  artifactDir?: string;
}): Promise<ReportPaths> {
  const sql = db();
  const dir = join(opts.stateDir, "reports");
  await mkdir(join(dir, "runs"), { recursive: true });
  const ov = await getOverview(opts.campaignId);
  const blob = (p: string) => (opts.repo ? `https://github.com/${opts.repo}/blob/outreach-state/${p}` : p);

  await writeFile(join(dir, "attempts.csv"), await attemptsCsv({ campaignId: opts.campaignId }));
  await writeFile(join(dir, "candidates.csv"), await candidatesCsv(opts.campaignId));

  // ---- Review queue ---------------------------------------------------------
  const queue = await sql<Record<string, unknown>[]>`
    select c.id, c.domain, c.url, c.title, c.discovery_query, c.review_status, c.inspection_status, c.suitability_notes,
      a.status as adapter_status, a.test_status, a.test_details,
      (select cp.final_url from contact_pages cp where cp.candidate_id = c.id order by cp.inspected_at desc limit 1) as contact_url,
      (select e.object_path from evidence e where e.candidate_id = c.id and e.kind = 'inspection' and e.object_path is not null and e.deleted_at is null order by e.created_at desc limit 1) as shot
    from candidates c left join form_adapters a on a.candidate_id = c.id
    where c.campaign_id = ${opts.campaignId} and c.review_status in ('pending', 'approved')
    order by (c.review_status = 'pending') desc, c.created_at`;
  const q: string[] = [
    "# Review queue",
    "",
    "Copy rows into `outreach/review.csv` on the **main** branch to decide. Columns: `domain,decision,i_checked_it_is_permitted,adapter,business_name,business_name_verified,notes`.",
    "",
    "- `decision`: approve / reject / suppress / pending. **approve** needs `i_checked_it_is_permitted=yes` (official site, general business-enquiry form, no 'no solicitation' notice).",
    "- `adapter`: approve once the form mapping looks right. Live runs only use adapters that are approved **and** passed a dry run.",
    "",
  ];
  for (const r of queue) {
    q.push(`## ${mdCell(r.domain)}`, "");
    q.push(`| | |`, `|---|---|`);
    q.push(`| Website | ${mdCell(r.url)} |`, `| Search title | ${mdCell(r.title)} |`, `| Found by query | ${mdCell(r.discovery_query)} |`);
    q.push(`| Contact page | ${mdCell(r.contact_url)} |`, `| Review | **${mdCell(r.review_status)}** |`, `| Inspection | ${mdCell(r.inspection_status)} |`);
    q.push(`| Form adapter | ${mdCell(r.adapter_status ?? "none")} · dry-run test: ${mdCell(r.test_status ?? "—")} |`, "");
    if (r.suitability_notes) q.push("Suitability notes:", "", mdBlock(r.suitability_notes), "");
    if (r.shot) q.push(`![Inspected page](../evidence/${String(r.shot).split("/").map(encodeURIComponent).join("/")})`, "");
    q.push(`Suggested CSV line: \`${String(r.domain).replace(/[`,]/g, "")},approve,yes,,,,\``, "");
  }
  if (!queue.length) q.push("_Nothing to review._");
  await writeFile(join(dir, "review-queue.md"), q.join("\n") + "\n");

  // ---- This run -------------------------------------------------------------
  let runReport: string | null = null;
  if (opts.runId) {
    const [run] = await sql<Record<string, unknown>[]>`select * from runs where id = ${opts.runId}`;
    const attempts = await sql<Record<string, unknown>[]>`
      select t.*, c.domain, c.url as website, v.version as tv, mt.kind as tk from attempts t
      join candidates c on c.id = t.candidate_id join template_versions v on v.id = t.template_version_id
      join message_templates mt on mt.id = v.template_id where t.run_id = ${opts.runId} order by t.reserved_at`;
    const evidence = await sql<{ attempt_id: string | null; candidate_id: string | null; kind: string; object_path: string | null; filename: string; capture_error: string | null }[]>`
      select attempt_id, candidate_id, kind, object_path, filename, capture_error from evidence where run_id = ${opts.runId} and deleted_at is null order by created_at`;
    const events = await sql<Record<string, unknown>[]>`
      select e.created_at, e.type, e.message, c.domain from run_events e left join candidates c on c.id = e.candidate_id
      where e.run_id = ${opts.runId} order by e.id`;
    const name = `${String(new Date(run.created_at as string).toISOString()).slice(0, 10)}_${String(run.mode)}_${opts.runId.slice(0, 8)}`;
    const md: string[] = [`# Run ${opts.runId.slice(0, 8)} — ${mdCell(run.mode)} — ${mdCell(run.status)}`, ""];
    md.push(`| | |`, `|---|---|`, `| Run ID | \`${opts.runId}\` |`, `| Requested by | ${mdCell(run.requested_by)} |`);
    md.push(`| Started | ${utc(run.started_at)} |`, `| Finished | ${utc(run.finished_at)} |`, `| Finish reason | ${mdCell(run.finish_reason)} |`);
    if (run.error) md.push(`| Error | ${mdCell(run.error, 500)} |`);
    if (run.github_run_url) md.push(`| GitHub Actions | ${mdCell(run.github_run_url)} |`);
    md.push("", `CSV for this run: [runs/${name}.csv](${name}.csv)`, "");
    if (run.needs_reconciliation && !run.reconciled_at) {
      md.push("> **Reconciliation needed.** Check each `uncertain` attempt below (website / inbox), then add a line to `outreach/reconcile.csv`: `attempt_id,outcome,notes` with outcome `sent` or `not_sent`. Live runs stay blocked until then.", "");
    }
    md.push(`## Attempts (${attempts.length})`, "");
    for (const a of attempts) {
      md.push(`### ${mdCell(a.domain)} — ${mdCell(a.status)} (${a.mode === "live" ? "LIVE" : "dry run"})`, "");
      md.push(`| | |`, `|---|---|`, `| Attempt ID | \`${a.id}\` |`, `| Form URL | ${mdCell(a.form_url, 500)} |`, `| Final URL | ${mdCell(a.final_url, 500)} |`);
      md.push(`| Reserved | ${utc(a.reserved_at)} |`, `| Submit attempted | ${utc(a.submit_started_at)} |`, `| Template | ${a.tk} v${a.tv} |`);
      md.push(`| Confirmation text | ${mdCell(a.confirmation_text ?? "none observed", 300)} |`, `| Result / error | ${mdCell(a.error, 500)} |`, "");
      md.push("Exact message:", "", mdBlock(`Subject: ${a.subject}\n\n${a.message}`), "");
      const fv = (a.field_values ?? {}) as Record<string, string>;
      if (Object.keys(fv).length) md.push("Submitted field values:", "", ...Object.entries(fv).map(([k, v]) => `- ${mdCell(k)}: ${mdCell(v, 120)}`), "");
      for (const e of evidence.filter((x) => x.attempt_id === a.id)) {
        md.push(e.object_path ? `**${KIND[e.kind] ?? e.kind}** — \`${e.filename}\`\n\n![${KIND[e.kind] ?? e.kind}](../../evidence/${e.object_path.split("/").map(encodeURIComponent).join("/")})` : `**${KIND[e.kind] ?? e.kind}** — capture failed: ${mdCell(e.capture_error)}`, "");
      }
    }
    const inspected = evidence.filter((e) => !e.attempt_id && e.kind === "inspection" && e.object_path);
    if (inspected.length) md.push(`## Inspected contact pages (${inspected.length})`, "", "See [review-queue.md](../review-queue.md) for decisions.", "");
    md.push(`## Events (${events.length})`, "", "| Time (UTC) | Event | Website | Details |", "|---|---|---|---|");
    for (const e of events) md.push(`| ${utc(e.created_at).slice(11, 19)} | ${mdCell(e.type)} | ${mdCell(e.domain)} | ${mdCell(e.message, 300)} |`);
    await writeFile(join(dir, "runs", `${name}.md`), md.join("\n") + "\n");
    await writeFile(join(dir, "runs", `${name}.csv`), await attemptsCsv({ campaignId: opts.campaignId, runId: opts.runId }));
    runReport = `reports/runs/${name}.md`;

    if (opts.artifactDir) {
      await mkdir(join(opts.artifactDir, "screenshots"), { recursive: true });
      await writeFile(join(opts.artifactDir, `run-${opts.runId.slice(0, 8)}_attempts.csv`), await attemptsCsv({ campaignId: opts.campaignId, runId: opts.runId }));
      for (const e of evidence) if (e.object_path) await copyFile(join(opts.stateDir, "evidence", e.object_path), join(opts.artifactDir, "screenshots", basename(e.object_path))).catch(() => undefined);
      await writeFile(join(opts.artifactDir, "manifest.json"), JSON.stringify({ run: { id: opts.runId, mode: run.mode, status: run.status }, evidence }, null, 2));
    }
  }

  // ---- Overview (README.md renders when you open the reports/ folder) ---------
  const recent = await sql<Record<string, unknown>[]>`select id, mode, status, finish_reason, created_at, needs_reconciliation, reconciled_at from runs where campaign_id = ${opts.campaignId} order by created_at desc limit 20`;
  const uncertain = await sql<Record<string, unknown>[]>`select t.id, c.domain, t.form_url from attempts t join candidates c on c.id = t.candidate_id where t.campaign_id = ${opts.campaignId} and t.status = 'uncertain'`;
  const o: string[] = ["# Outreach overview", "", `Updated ${utc(new Date())} · campaign **${mdCell(ov.campaign?.name)}** · ${mdCell(ov.campaign?.industry || "industry not set")} · ${mdCell(ov.campaign?.city_region || "city not set")} · ${mdCell(ov.campaign?.country || "country not set")} · live mode **${ov.campaign?.live_enabled ? "ENABLED" : "off"}**`, ""];
  o.push("| Metric | Value |", "|---|---|", ...STAT_LABELS.map(([k, l]) => `| ${l} | ${ov.stats[k] ?? 0} |`), "");
  o.push("> “Confirmation observed” = the website showed a new success message after submit. It does not prove delivery, reading or a lead.", "");
  if (uncertain.length) {
    o.push("## ⚠ Needs reconciliation", "", "Add to `outreach/reconcile.csv`: `attempt_id,outcome,notes` (outcome `sent` or `not_sent`).", "");
    for (const u of uncertain) o.push(`- \`${u.id}\` — ${mdCell(u.domain)} — ${mdCell(u.form_url)}`);
    o.push("");
  }
  o.push("## Links", "", "- [Review queue](review-queue.md)", "- [All attempts CSV](attempts.csv) · [All candidates CSV](candidates.csv)", "");
  o.push("## Recent runs", "", "| Run | Mode | Status | Reason | Requested (UTC) |", "|---|---|---|---|---|");
  for (const r of recent) {
    const n = `${new Date(r.created_at as string).toISOString().slice(0, 10)}_${r.mode}_${String(r.id).slice(0, 8)}`;
    o.push(`| [${String(r.id).slice(0, 8)}](runs/${n}.md) | ${mdCell(r.mode)} | ${mdCell(r.status)}${r.needs_reconciliation && !r.reconciled_at ? " ⚠" : ""} | ${mdCell(r.finish_reason)} | ${utc(r.created_at)} |`);
  }
  if (opts.notes?.length) o.push("", "## Last config applied", "", ...opts.notes.map((n) => `- ${mdCell(n, 300)}`));
  if (opts.problems?.length) o.push("", "## ⚠ Config problems", "", ...opts.problems.map((n) => `- ${mdCell(n, 500)}`));
  await writeFile(join(dir, "README.md"), o.join("\n") + "\n");

  // ---- Job summary on the Actions run page --------------------------------------
  if (process.env.GITHUB_STEP_SUMMARY) {
    const s: string[] = [`## Outreach — ${opts.runId ? `run ${opts.runId.slice(0, 8)}` : "no run started"}`, ""];
    if (opts.problems?.length) s.push("### ⚠ Problems", ...opts.problems.map((p) => `- ${mdCell(p, 500)}`), "");
    s.push("| Metric | Value |", "|---|---|", ...STAT_LABELS.map(([k, l]) => `| ${l} | ${ov.stats[k] ?? 0} |`), "");
    if (runReport) s.push(`**Full report with screenshots:** ${blob(runReport)}`, "");
    s.push(`Overview: ${blob("reports/README.md")} · Review queue: ${blob("reports/review-queue.md")}`, "", "Screenshots + CSV are also attached to this run as the **outreach-evidence** artifact.");
    await writeFile(process.env.GITHUB_STEP_SUMMARY, s.join("\n") + "\n", { flag: "a" });
  }
  return { runReport };
}
