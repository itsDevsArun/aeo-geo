/**
 * GitHub-only mode: the owner edits plain files under `outreach/` on the main
 * branch (GitHub web editor). Each run applies them to the restored database
 * through the same validated service functions the dashboard used.
 */
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";
import { db } from "../../src/server/db";
import { HttpError } from "../../src/server/http";
import * as campaigns from "../../src/server/services/campaigns";
import * as candidates from "../../src/server/services/candidates";
import * as runs from "../../src/server/services/runs";
import * as templates from "../../src/server/services/templates";
import { normalizeDomainInput } from "../../src/shared/urls";

export const ConfigSchema = z.object({
  name: z.string().trim().min(1).max(200).default("Devs Arun AEO/GEO outreach"),
  industry: z.string().trim().max(200).default(""),
  country: z.string().trim().max(3).default(""),
  countries: z.array(z.string()).default([]),
  osm_categories: z.array(z.string()).default([]),
  osm_other_countries: z.array(z.string()).default(["GB", "NZ", "IE", "SG", "ZA", "AE"]),
  city_region: z.string().trim().max(200).default(""),
  search_language: z.string().trim().default("en"),
  search_queries: z.array(z.string()).default([]),
  max_candidates: z.number().int().default(50),
  max_live_attempts_per_run: z.number().int().default(10),
  min_delay_seconds: z.number().int().default(60),
  excluded_domains: z.array(z.string()).default([]),
  dry_run_fill_domains: z.array(z.string()).default([]),
  suppressed_domains: z.array(z.string()).default([]),
  related_domains: z.array(z.tuple([z.string(), z.string()])).default([]),
  allow_live: z.boolean().default(false),
  sender: z.object({ name: z.string(), business: z.string(), email: z.string(), phone: z.string(), website: z.string() }),
  sender_verified: z.boolean().default(false),
  active_template: z.enum(["short", "standard"]).default("short"),
  evidence_retention_days: z.number().int().default(180),
});
export type OutreachConfig = z.infer<typeof ConfigSchema>;

export interface ApplyResult {
  campaignId: string;
  notes: string[];
  problems: string[];
}

/** Tiny RFC 4180 parser for owner-edited CSV files. */
export function parseCsv(text: string): Record<string, string>[] {
  const s = text.replace(/^\uFEFF/, "");
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let q = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (q) {
      if (ch === '"' && s[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') q = false;
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === ",") { row.push(cell); cell = ""; }
    else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && s[i + 1] === "\n") i++;
      row.push(cell); rows.push(row); row = []; cell = "";
    } else cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const nonEmpty = rows.filter((r) => r.some((c) => c.trim()) && !r[0].trim().startsWith("#"));
  if (!nonEmpty.length) return [];
  const header = nonEmpty[0].map((h) => h.trim().toLowerCase());
  return nonEmpty.slice(1).map((r) => Object.fromEntries(header.map((h, i) => [h, (r[i] ?? "").trim()])));
}

/** Template file format: "Subject: ..." / "Offer-Facts: a; b" (semicolon-separated) header lines, a "---" line, then the body. */
export function parseTemplateFile(text: string): { subject: string; offerFacts: string[]; body: string } {
  const norm = text.replace(/\r\n/g, "\n");
  const idx = norm.indexOf("\n---\n");
  if (idx < 0) throw new Error('Template file must have header lines, then a line containing only "---", then the body');
  const header = norm.slice(0, idx);
  const body = norm.slice(idx + 5).trim();
  const subject = /^subject:\s*(.*)$/im.exec(header)?.[1]?.trim() ?? "";
  const facts = /^offer-facts:\s*(.*)$/im.exec(header)?.[1] ?? "";
  return { subject, body, offerFacts: facts.split(";").map((f) => f.trim()).filter(Boolean) };
}

export function formatTemplateFile(t: { subject: string; offerFacts: string[]; body: string }): string {
  return `Subject: ${t.subject}\nOffer-Facts: ${t.offerFacts.join("; ")}\n---\n${t.body}\n`;
}

const yes = (v: string | undefined) => /^(y|yes|true|1|haan|ha)$/i.test((v ?? "").trim());

function describe(e: unknown): string {
  if (e instanceof HttpError) return `${e.message}${Array.isArray(e.details) ? `: ${(e.details as string[]).join("; ")}` : ""}`;
  if (e instanceof z.ZodError) return e.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
  return e instanceof Error ? e.message : String(e);
}

export async function applyConfig(configDir: string, actor: string): Promise<ApplyResult> {
  const notes: string[] = [];
  const problems: string[] = [];
  const cfg = ConfigSchema.parse(JSON.parse(await readFile(join(configDir, "campaign.json"), "utf8")));
  const sql = db();

  // 1. Campaign (single campaign in GitHub-only mode).
  let campaign = await campaigns.getActiveCampaign();
  if (!campaign) {
    campaign = await campaigns.createCampaign({ name: cfg.name }, actor);
    notes.push("Created campaign");
  }
  const id = campaign.id;
  const patch = {
    name: cfg.name, industry: cfg.industry, country: cfg.country || (cfg.countries[0] ?? ""), countries: cfg.countries, osm_categories: cfg.osm_categories, osm_other_countries: cfg.osm_other_countries, city_region: cfg.city_region,
    search_language: cfg.search_language, search_queries: cfg.search_queries, max_candidates: cfg.max_candidates,
    max_live_attempts_per_run: cfg.max_live_attempts_per_run, min_delay_seconds: cfg.min_delay_seconds,
    excluded_domains: cfg.excluded_domains, dry_run_fill_domains: cfg.dry_run_fill_domains,
    sender_name: cfg.sender.name, sender_business: cfg.sender.business, sender_email: cfg.sender.email,
    sender_phone: cfg.sender.phone, sender_website: cfg.sender.website, evidence_retention_days: cfg.evidence_retention_days,
  };
  try {
    campaign = await campaigns.updateCampaign(id, patch, actor);
  } catch (e) {
    problems.push(`campaign.json settings rejected: ${describe(e)}`);
  }
  if (cfg.sender_verified && !campaign.sender_verified_at) {
    campaign = await campaigns.verifySender(id, actor);
    notes.push("Sender details marked verified (campaign.json sender_verified=true)");
  }

  // 2. Templates: a changed file becomes a new immutable version.
  const versions = await templates.listTemplateVersions(id);
  for (const kind of ["short", "standard"] as const) {
    const file = join(configDir, "templates", `${kind}.txt`);
    if (!existsSync(file)) continue;
    try {
      const t = parseTemplateFile(await readFile(file, "utf8"));
      const latest = versions.find((v) => v.kind === kind);
      const same = latest && latest.subject === t.subject && latest.body === t.body && JSON.stringify(latest.offer_facts) === JSON.stringify(t.offerFacts);
      if (!same) {
        const v = await templates.createTemplateVersion(id, { kind, subject: t.subject, body: t.body, offerFacts: t.offerFacts }, actor);
        notes.push(`Template ${kind}: saved as v${v.version}`);
      }
    } catch (e) {
      problems.push(`Template ${kind}.txt rejected (previous version kept): ${describe(e)}`);
    }
  }
  const active = (await templates.listTemplateVersions(id)).find((v) => v.kind === cfg.active_template);
  if (active && active.id !== (await campaigns.getCampaign(id)).active_template_version_id) {
    try {
      await templates.setActiveTemplateVersion(id, active.id, actor);
      notes.push(`Active template: ${active.kind} v${active.version}`);
    } catch (e) {
      problems.push(`Could not activate template: ${describe(e)}`);
    }
  }

  // 3. Live switch (after sender + template so readiness checks see the final state).
  const cur = await campaigns.getCampaign(id);
  if (cur.live_enabled !== cfg.allow_live) {
    try {
      await campaigns.updateCampaign(id, { live_enabled: cfg.allow_live }, actor);
      notes.push(`Live mode ${cfg.allow_live ? "ENABLED" : "disabled"}`);
    } catch (e) {
      problems.push(`allow_live=true rejected: ${describe(e)}`);
    }
  }

  // 4. Suppressions from config (removing a domain from the list un-suppresses it).
  const wanted = new Set(cfg.suppressed_domains.map(normalizeDomainInput).filter((d): d is string => !!d));
  for (const d of wanted) {
    const [exists] = await sql`select 1 from suppressions where domain = ${d}`;
    if (!exists) { await candidates.addSuppression({ domain: d, reason: "campaign.json suppressed_domains" }, `${actor} (config)`); notes.push(`Suppressed ${d}`); }
  }
  const fromConfig = await sql<{ id: string; domain: string }[]>`select id, domain from suppressions where created_by like '%(config)'`;
  for (const s of fromConfig) if (!wanted.has(s.domain)) { await candidates.removeSuppression(s.id, actor); notes.push(`Un-suppressed ${s.domain}`); }

  // 5. Related domains.
  for (const [a, b] of cfg.related_domains) {
    try {
      const da = normalizeDomainInput(a);
      const dbn = normalizeDomainInput(b);
      const rows = await sql<{ business_id: string }[]>`select business_id from business_domains where domain in (${da ?? ""}, ${dbn ?? ""})`;
      if (rows.length === 2 && rows[0].business_id === rows[1].business_id) continue;
      await candidates.linkDomains({ primaryDomain: a, relatedDomain: b }, actor);
      notes.push(`Linked ${b} to ${a}`);
    } catch (e) {
      problems.push(`related_domains [${a}, ${b}]: ${describe(e)}`);
    }
  }

  // 6. Review decisions.
  const reviewFile = join(configDir, "review.csv");
  if (existsSync(reviewFile)) {
    for (const [i, r] of parseCsv(await readFile(reviewFile, "utf8")).entries()) {
      const line = `review.csv row ${i + 2} (${r.domain || "no domain"})`;
      const domain = normalizeDomainInput(r.domain ?? "");
      if (!domain) { if (r.domain) problems.push(`${line}: invalid domain`); continue; }
      const [c] = await sql<{ id: string; review_status: string; label: string | null; label_verified: boolean }[]>`
        select c.id, c.review_status, b.label, b.label_verified from candidates c join businesses b on b.id = c.business_id
        where c.campaign_id = ${id} and c.domain = ${domain}`;
      if (!c) { problems.push(`${line}: not a discovered candidate (run discovery first)`); continue; }
      try {
        const decision = (r.decision ?? "").toLowerCase();
        const target = { approve: "approved", reject: "rejected", suppress: "suppressed", pending: "pending" }[decision];
        if (decision && !target) problems.push(`${line}: decision must be approve, reject, suppress or pending`);
        if (target && target !== c.review_status) {
          if (decision === "approve" && !yes(r.i_checked_it_is_permitted)) {
            problems.push(`${line}: approve needs i_checked_it_is_permitted=yes (official site, general enquiry form, no 'no solicitation' notice)`);
          } else {
            await candidates.reviewCandidate(c.id, { decision: decision === "pending" ? "reset" : decision, notes: r.notes ?? "", attestPermitted: yes(r.i_checked_it_is_permitted) }, actor);
            notes.push(`${domain}: ${decision}`);
          }
        }
        if (r.business_name !== undefined && (r.business_name !== (c.label ?? "") || yes(r.business_name_verified) !== c.label_verified)) {
          await candidates.setBusinessLabel(c.id, { label: r.business_name, verified: yes(r.business_name_verified) }, actor);
        }
        const adapterDecision = (r.adapter ?? "").toLowerCase();
        if (adapterDecision === "approve" || adapterDecision === "reject") {
          const [a] = await sql<{ id: string; status: string }[]>`select id, status from form_adapters where candidate_id = ${c.id}`;
          if (!a) problems.push(`${line}: no form adapter (form not inspected)`);
          else if (a.status !== (adapterDecision === "approve" ? "approved" : "rejected")) {
            await candidates.decideAdapter(a.id, { decision: adapterDecision, notes: r.notes ?? "" }, actor);
            notes.push(`${domain}: adapter ${adapterDecision}d`);
          }
        } else if (adapterDecision) problems.push(`${line}: adapter must be approve, reject or empty`);
      } catch (e) {
        problems.push(`${line}: ${describe(e)}`);
      }
    }
  }

  // 6b. Replies logged by the owner: an opt-out always suppresses the domain.
  const respFile = join(configDir, "responses.csv");
  if (existsSync(respFile)) {
    for (const r of parseCsv(await readFile(respFile, "utf8"))) {
      if ((r.response ?? "").toLowerCase() !== "opt_out") continue;
      const d = normalizeDomainInput(r.domain ?? "");
      if (!d) continue;
      const [exists] = await sql`select 1 from suppressions where domain = ${d}`;
      if (!exists) { await candidates.addSuppression({ domain: d, reason: `Opted out (responses.csv) ${r.notes ?? ""}`.trim() }, actor); notes.push(`Suppressed ${d} (opt-out reply)`); }
    }
  }

  // 7. Reconciliation of uncertain attempts.
  const recFile = join(configDir, "reconcile.csv");
  if (existsSync(recFile)) {
    for (const [i, r] of parseCsv(await readFile(recFile, "utf8")).entries()) {
      if (!r.attempt_id) continue;
      const line = `reconcile.csv row ${i + 2}`;
      const outcome = (r.outcome ?? "").toLowerCase();
      if (outcome !== "sent" && outcome !== "not_sent") { problems.push(`${line}: outcome must be sent or not_sent`); continue; }
      const [a] = await sql<{ status: string }[]>`select status from attempts where id::text = ${r.attempt_id}`;
      if (!a) { problems.push(`${line}: attempt ${r.attempt_id} not found`); continue; }
      if (a.status !== "uncertain") continue; // already reconciled
      try {
        await runs.reconcileAttempt(r.attempt_id, outcome, r.notes || "reconcile.csv", actor);
        notes.push(`Attempt ${r.attempt_id.slice(0, 8)} reconciled as ${outcome}`);
      } catch (e) {
        problems.push(`${line}: ${describe(e)}`);
      }
    }
  }
  // Runs that need reconciliation but have no uncertain attempts left are closed automatically.
  const pending = await sql<{ id: string }[]>`
    select r.id from runs r where r.campaign_id = ${id} and r.needs_reconciliation and r.reconciled_at is null
      and r.status not in ('queued','running','stopping')
      and not exists (select 1 from attempts t where t.run_id = r.id and t.status in ('uncertain','submitting'))`;
  for (const r of pending) {
    await runs.markRunReconciled(r.id, `${actor} (auto: no uncertain attempts)`);
    notes.push(`Run ${r.id.slice(0, 8)} reconciled (no uncertain attempts)`);
  }
  return { campaignId: id, notes, problems };
}
