import "server-only";
import { z } from "zod";
import { audit, runEvent } from "../audit";
import { db, isUniqueViolation, type Sql } from "../db";
import { HttpError } from "../http";
import type { RunRow } from "../runner-auth";
import { getCampaign } from "./campaigns";
import { classifySearchResult } from "@/shared/discovery";
import { analyzeForm, validateMapping, type FormInfo, type MappingEntry, type PageFlags } from "@/shared/forms";
import { InspectionRequest, MappingEntrySchema, SearchResultsRequest } from "@/shared/runner-api";
import { normalizeDomainInput } from "@/shared/urls";

/** Maximum Brave result page offset (API allows 0..9). */
export const MAX_SEARCH_OFFSET = 9;

export async function suppressedDomains(sql: Sql): Promise<Set<string>> {
  const rows = await sql<{ domain: string }[]>`select domain from suppressions`;
  return new Set(rows.map((r) => r.domain));
}

/** Is any domain of this business suppressed? */
export async function isBusinessSuppressed(businessId: string, sql: Sql): Promise<boolean> {
  const [r] = await sql<{ s: boolean }[]>`
    select exists (
      select 1 from suppressions s join business_domains bd on bd.domain = s.domain
      where bd.business_id = ${businessId}) as s`;
  return r.s;
}

async function businessForDomain(domain: string, label: string | null, sql: Sql): Promise<string> {
  const [existing] = await sql<{ business_id: string }[]>`select business_id from business_domains where domain = ${domain}`;
  if (existing) return existing.business_id;
  const [b] = await sql<{ id: string }[]>`insert into businesses (label) values (${label}) returning id`;
  const [row] = await sql<{ business_id: string }[]>`
    insert into business_domains (domain, business_id) values (${domain}, ${b.id})
    on conflict (domain) do update set domain = excluded.domain returning business_id`;
  if (row.business_id !== b.id) await sql`delete from businesses where id = ${b.id}`;
  return row.business_id;
}

/** Ingest search results: normalise, filter, deduplicate, cap and checkpoint pagination. */
export async function ingestSearchResults(run: RunRow, raw: z.infer<typeof SearchResultsRequest>) {
  return db().begin(async (sql) => {
    const campaign = await getCampaign(run.campaign_id, sql);
    const [q] = await sql<{ id: string; query: string; next_offset: number; country: string }[]>`
      select id, query, next_offset, country from discovery_queries where id = ${raw.queryId} and campaign_id = ${campaign.id} for update`;
    if (!q) throw new HttpError(404, "Discovery query not found");
    const suppressed = await suppressedDomains(sql);
    // max_candidates = new websites per discovery run (so every run finds fresh ones).
    const [{ count: existing }] = await sql<{ count: number }[]>`
      select count(*)::int as count from candidates where campaign_id = ${campaign.id} and discovered_run_id = ${run.id}`;
    let remaining = Math.max(0, campaign.max_candidates - existing);
    const stats = { received: raw.results.length, added: 0, duplicates: 0, filtered: 0, filteredReasons: {} as Record<string, number>, capped: 0 };
    const seenThisPage = new Set<string>();
    for (const [i, r] of raw.results.entries()) {
      const c = classifySearchResult(r, { excludedDomains: campaign.excluded_domains, suppressedDomains: suppressed });
      if (!c.accept || !c.normalized) {
        stats.filtered++;
        stats.filteredReasons[c.reason ?? "unknown"] = (stats.filteredReasons[c.reason ?? "unknown"] ?? 0) + 1;
        continue;
      }
      const n = c.normalized;
      if (seenThisPage.has(n.domain)) {
        stats.duplicates++;
        continue;
      }
      seenThisPage.add(n.domain);
      const [dup] = await sql`select 1 from candidates where campaign_id = ${campaign.id} and domain = ${n.domain}`;
      if (dup) {
        stats.duplicates++;
        continue;
      }
      if (remaining <= 0) {
        stats.capped++;
        continue;
      }
      const businessId = await businessForDomain(n.domain, null, sql);
      const [contacted] = await sql<{ id: string }[]>`
        select id from attempts where business_id = ${businessId} and mode = 'live'
        and status not in ('failed_before_submit', 'reconciled_not_sent') limit 1`;
      const notes = [`Search country: ${q.country || campaign.country || "ALL"}`, ...c.notes];
      if (contacted) notes.push(`Business already contacted (attempt ${contacted.id}); it will not be contacted again.`);
      const inserted = await sql`
        insert into candidates (campaign_id, business_id, domain, url, title, snippet, discovery_query, source_url,
          search_rank, discovered_run_id, suitability_notes)
        values (${campaign.id}, ${businessId}, ${n.domain}, ${n.homepage}, ${r.title.slice(0, 500)}, ${r.description.slice(0, 1000)},
          ${q.query}, ${n.url}, ${r.rank ?? raw.offset * 20 + i + 1}, ${run.id}, ${notes.join("\n")})
        on conflict (campaign_id, domain) do nothing returning id`;
      if (inserted.length) {
        stats.added++;
        remaining--;
      } else stats.duplicates++;
    }
    let exhausted: boolean;
    if (raw.error) {
      // Keep the query and offset; give up only after 3 failed runs.
      const [u] = await sql<{ error_count: number }[]>`update discovery_queries set error_count = error_count + 1, last_error = ${raw.error},
        exhausted = (error_count + 1 >= 3), last_run_id = ${run.id}, last_searched_at = now() where id = ${q.id} returning error_count`;
      exhausted = u.error_count >= 3;
    } else {
      const nextOffset = raw.offset + 1;
      exhausted = !raw.moreAvailable || raw.results.length === 0 || nextOffset > MAX_SEARCH_OFFSET;
      await sql`update discovery_queries set next_offset = ${nextOffset}, exhausted = ${exhausted}, error_count = 0, last_error = null,
        results_seen = results_seen + ${raw.results.length}, last_run_id = ${run.id}, last_searched_at = now()
        where id = ${q.id}`;
    }
    await runEvent({ runId: run.id, campaignId: campaign.id, type: raw.error ? "error" : "search_page_processed",
      message: raw.error
        ? `Search failed for "${q.query}" (${q.country || "ALL"}): ${raw.error} — will retry next run`
        : `Query "${q.query}" (${q.country || "ALL"}) page ${raw.offset + 1}: ${stats.received} results, ${stats.added} new, ${stats.duplicates} duplicate, ${stats.filtered} filtered`,
      data: { ...stats, query: q.query, offset: raw.offset, exhausted, error: raw.error } }, sql);
    if (stats.duplicates) {
      await runEvent({ runId: run.id, campaignId: campaign.id, type: "duplicate_prevented",
        message: `${stats.duplicates} duplicate candidate(s) skipped`, data: { count: stats.duplicates, stage: "discovery" } }, sql);
    }
    return { ...stats, exhausted };
  });
}

export function suitabilityNotes(analysis: ReturnType<typeof analyzeForm>, flags: PageFlags | undefined): string[] {
  const notes: string[] = [];
  if (flags?.no_solicitation_excerpt) notes.push(`No-solicitation text: "${flags.no_solicitation_excerpt.slice(0, 200)}"`);
  for (const b of analysis.blocking) notes.push(`BLOCKED: ${b}`);
  for (const r of analysis.reasons) notes.push(`Review: ${r}`);
  if (flags) notes.push(`Form purpose: ${flags.purpose.replace(/_/g, " ")}`);
  return notes;
}

/** Persist an inspection and propose a form adapter (never auto-approved). */
export async function recordInspection(run: RunRow, input: z.infer<typeof InspectionRequest>) {
  return db().begin(async (sql) => {
    const [cand] = await sql<{ id: string; campaign_id: string; suitability_notes: string }[]>`
      select id, campaign_id, suitability_notes from candidates where id = ${input.candidateId} for update`;
    if (!cand || cand.campaign_id !== run.campaign_id) throw new HttpError(404, "Candidate not found");
    let contactPageId: string | null = null;
    let adapterStatus: string | null = null;
    const notes: string[] = [];
    if (input.contactUrl) {
      const form = input.form as FormInfo | undefined;
      const flags = input.flags as PageFlags | undefined;
      const [cp] = await sql<{ id: string }[]>`
        insert into contact_pages (candidate_id, run_id, url, final_url, form_found, flags, fields, page_title, screenshot_evidence_id, notes)
        values (${cand.id}, ${run.id}, ${input.contactUrl}, ${input.finalUrl ?? input.contactUrl}, ${!!form},
          ${sql.json((flags ?? {}) as never)}, ${sql.json((form ?? {}) as never)}, ${input.pageTitle},
          ${input.screenshotEvidenceId ?? null}, ${`${input.formsFound} form(s) found`}) returning id`;
      contactPageId = cp.id;
      if (form && flags) {
        const analysis = analyzeForm(form, flags);
        notes.push(...suitabilityNotes(analysis, flags));
        const [existing] = await sql<{ id: string; status: string }[]>`select id, status from form_adapters where candidate_id = ${cand.id}`;
        adapterStatus = analysis.status;
        const reason = [...analysis.blocking, ...analysis.reasons].join("; ");
        if (existing && existing.status === "approved" && analysis.blocking.length === 0) {
          notes.push("Re-inspected; existing approved adapter kept.");
          adapterStatus = "approved";
        } else if (existing) {
          await sql`update form_adapters set contact_page_id = ${cp.id}, form_url = ${input.finalUrl ?? input.contactUrl},
            form_selector = ${form.selector}, submit_selector = ${form.submitSelector}, mapping = ${sql.json(analysis.mapping as never)},
            status = ${analysis.status}, status_reason = ${reason}, test_status = 'untested', test_details = '',
            approved_by = null, approved_at = null, version = version + 1, updated_at = now()
            where id = ${existing.id}`;
        } else {
          await sql`insert into form_adapters (candidate_id, contact_page_id, form_url, form_selector, submit_selector, mapping, status, status_reason)
            values (${cand.id}, ${cp.id}, ${input.finalUrl ?? input.contactUrl}, ${form.selector}, ${form.submitSelector},
              ${sql.json(analysis.mapping as never)}, ${analysis.status}, ${reason})`;
        }
      }
    }
    if (input.error) notes.push(`Inspection error: ${input.error}`);
    const merged = [...cand.suitability_notes.split("\n").filter((l) => l && !/^(BLOCKED|Review|Form purpose|No-solicitation|Inspection error|Re-inspected)/.test(l)), ...notes].join("\n");
    await sql`update candidates set inspection_status = ${input.status}, inspection_error = ${input.error ?? null},
      suitability_notes = ${merged}, updated_at = now() where id = ${cand.id}`;
    await runEvent({ runId: run.id, campaignId: run.campaign_id, candidateId: cand.id,
      type: input.form ? (adapterStatus === "needs_manual" ? "mapping_required" : "form_detected") : input.status === "error" ? "error" : "review_required",
      message: input.form ? `Form detected on ${input.finalUrl}; adapter ${adapterStatus}` : `Inspection ${input.status}${input.error ? `: ${input.error}` : ""}`,
      data: { contactUrl: input.contactUrl, adapterStatus, formsFound: input.formsFound } }, sql);
    return { contactPageId, adapterStatus };
  });
}

export const ReviewInput = z.object({
  decision: z.enum(["approve", "reject", "suppress", "reset"]),
  notes: z.string().max(2000).default(""),
  attestPermitted: z.boolean().optional(),
});

/** Human review of a discovered candidate. Approval requires an explicit permission attestation. */
export async function reviewCandidate(candidateId: string, raw: unknown, actor: string) {
  const input = ReviewInput.parse(raw);
  return db().begin(async (sql) => {
    const [c] = await sql<{ id: string; domain: string; business_id: string; review_status: string }[]>`
      select id, domain, business_id, review_status from candidates where id = ${candidateId} for update`;
    if (!c) throw new HttpError(404, "Candidate not found");
    let status: string;
    if (input.decision === "approve") {
      if (!input.attestPermitted) throw new HttpError(422, "Confirm you reviewed the site and that a business enquiry via its form appears permitted.");
      if (await isBusinessSuppressed(c.business_id, sql)) throw new HttpError(409, "This business is suppressed / opted out.");
      status = "approved";
    } else if (input.decision === "reject") status = "rejected";
    else if (input.decision === "reset") status = "pending";
    else {
      await addSuppression({ domain: c.domain, reason: input.notes || "Suppressed during review" }, actor, sql);
      status = "suppressed";
    }
    await sql`update candidates set review_status = ${status}, reviewed_at = now(), reviewed_by = ${actor}, updated_at = now() where id = ${c.id}`;
    await sql`insert into approvals (candidate_id, subject, decision, notes, actor) values (${c.id}, 'candidate', ${input.decision}, ${input.notes}, ${actor})`;
    await audit(actor, `candidate.${input.decision}`, "candidate", c.id, { domain: c.domain, notes: input.notes }, sql);
    return { status };
  });
}

export const BusinessLabelInput = z.object({ label: z.string().trim().max(200), verified: z.boolean() });

export async function setBusinessLabel(candidateId: string, raw: unknown, actor: string) {
  const input = BusinessLabelInput.parse(raw);
  await db().begin(async (sql) => {
    const [c] = await sql<{ business_id: string }[]>`select business_id from candidates where id = ${candidateId}`;
    if (!c) throw new HttpError(404, "Candidate not found");
    await sql`update businesses set label = ${input.label || null}, label_verified = ${input.verified && !!input.label} where id = ${c.business_id}`;
    await audit(actor, "business.label", "business", c.business_id, input, sql);
  });
}

export async function addSuppression(raw: { domain: string; reason?: string }, actor: string, tx?: Sql) {
  const domain = normalizeDomainInput(raw.domain);
  if (!domain) throw new HttpError(400, "Invalid domain");
  const reason = (raw.reason ?? "").slice(0, 500);
  const run = async (sql: Sql) => {
    await sql`insert into suppressions (domain, reason, created_by) values (${domain}, ${reason}, ${actor}) on conflict (domain) do nothing`;
    // Suppress every candidate whose business owns this domain.
    await sql`update candidates set review_status = 'suppressed', updated_at = now()
      where domain = ${domain} or business_id in (select business_id from business_domains where domain = ${domain})`;
    await audit(actor, "suppression.add", "suppression", domain, { reason }, sql);
    return { domain };
  };
  return tx ? run(tx) : db().begin(run);
}

export async function removeSuppression(id: string, actor: string) {
  await db().begin(async (sql) => {
    const [s] = await sql<{ domain: string }[]>`delete from suppressions where id = ${id} returning domain`;
    if (!s) throw new HttpError(404, "Suppression not found");
    await sql`update candidates set review_status = 'pending', updated_at = now() where domain = ${s.domain} and review_status = 'suppressed'`;
    await audit(actor, "suppression.remove", "suppression", s.domain, {}, sql);
  });
}

/** Link a related domain to the same business so both are treated as one recipient. */
export async function linkDomains(raw: { primaryDomain: string; relatedDomain: string }, actor: string) {
  const a = normalizeDomainInput(raw.primaryDomain);
  const b = normalizeDomainInput(raw.relatedDomain);
  if (!a || !b || a === b) throw new HttpError(400, "Provide two different valid domains");
  return db().begin(async (sql) => {
    const target = await businessForDomain(a, null, sql);
    const [existingB] = await sql<{ business_id: string }[]>`select business_id from business_domains where domain = ${b}`;
    if (!existingB) {
      await sql`insert into business_domains (domain, business_id) values (${b}, ${target})`;
    } else if (existingB.business_id !== target) {
      const old = existingB.business_id;
      try {
        await sql.savepoint(async (sp) => {
          await sp`update attempts set business_id = ${target} where business_id = ${old}`;
        });
      } catch (e) {
        if (isUniqueViolation(e)) throw new HttpError(409, "Both domains already have a live attempt; they were each contacted once.");
        throw e;
      }
      await sql`update business_domains set business_id = ${target} where business_id = ${old}`;
      await sql`update candidates set business_id = ${target} where business_id = ${old}`;
      await sql`delete from businesses where id = ${old}`;
    }
    if (await isBusinessSuppressed(target, sql)) {
      await sql`update candidates set review_status = 'suppressed' where business_id = ${target}`;
    }
    await audit(actor, "business.link_domains", "business", target, { primary: a, related: b }, sql);
    return { businessId: target };
  });
}

export const AdapterUpdate = z.object({
  mapping: z.array(MappingEntrySchema).max(60),
  submitSelector: z.string().max(500).optional(),
});

/** Human edit of a form mapping. Selectors must come from the inspected form. */
export async function updateAdapterMapping(adapterId: string, raw: unknown, actor: string) {
  const input = AdapterUpdate.parse(raw);
  return db().begin(async (sql) => {
    const [a] = await sql<{ id: string; candidate_id: string; fields: FormInfo }[]>`
      select a.id, a.candidate_id, cp.fields from form_adapters a left join contact_pages cp on cp.id = a.contact_page_id
      where a.id = ${adapterId} for update of a`;
    if (!a) throw new HttpError(404, "Adapter not found");
    const known = new Set((a.fields?.fields ?? []).map((f) => f.selector));
    for (const m of input.mapping) if (!known.has(m.selector)) throw new HttpError(400, `Unknown field selector ${m.selector}`);
    const errors = validateMapping(input.mapping as MappingEntry[]);
    const status = errors.length ? "needs_manual" : "proposed";
    await sql`update form_adapters set mapping = ${sql.json(input.mapping as never)},
      submit_selector = coalesce(${input.submitSelector ?? null}, submit_selector),
      status = ${status}, status_reason = ${errors.join("; ")}, test_status = 'untested', test_details = '',
      approved_by = null, approved_at = null, version = version + 1, updated_at = now() where id = ${a.id}`;
    await audit(actor, "adapter.update_mapping", "form_adapter", a.id, { errors }, sql);
    return { status, errors };
  });
}

/** Approve/reject a form adapter. Blocked forms (CAPTCHA, no-solicitation, wrong purpose…) can never be approved. */
export async function decideAdapter(adapterId: string, raw: unknown, actor: string) {
  const input = z.object({ decision: z.enum(["approve", "reject"]), notes: z.string().max(1000).default("") }).parse(raw);
  return db().begin(async (sql) => {
    const [a] = await sql<{ id: string; candidate_id: string; mapping: MappingEntry[]; submit_selector: string; fields: FormInfo; flags: PageFlags; review_status: string }[]>`
      select a.id, a.candidate_id, a.mapping, a.submit_selector, cp.fields, cp.flags, c.review_status
      from form_adapters a join candidates c on c.id = a.candidate_id
      left join contact_pages cp on cp.id = a.contact_page_id where a.id = ${adapterId} for update of a`;
    if (!a) throw new HttpError(404, "Adapter not found");
    if (input.decision === "approve") {
      const problems: string[] = [];
      if (a.review_status !== "approved") problems.push("Approve the candidate website first.");
      if (!a.fields?.fields || !a.flags) problems.push("No inspected form is stored for this adapter.");
      else problems.push(...analyzeForm(a.fields, a.flags).blocking);
      problems.push(...validateMapping(a.mapping));
      if (!a.submit_selector) problems.push("No submit button mapped.");
      if (problems.length) throw new HttpError(422, "Adapter cannot be approved", problems);
    }
    const status = input.decision === "approve" ? "approved" : "rejected";
    await sql`update form_adapters set status = ${status}, status_reason = ${input.notes},
      approved_by = ${input.decision === "approve" ? actor : null}, approved_at = ${input.decision === "approve" ? new Date() : null},
      updated_at = now() where id = ${a.id}`;
    await sql`insert into approvals (candidate_id, subject, decision, notes, actor) values (${a.candidate_id}, 'adapter', ${input.decision}, ${input.notes}, ${actor})`;
    await audit(actor, `adapter.${input.decision}`, "form_adapter", a.id, { notes: input.notes }, sql);
    return { status };
  });
}

/** Delete a candidate and all its evidence (data-deletion requests). Returns storage paths to remove. */
export async function deleteCandidateData(candidateId: string, actor: string): Promise<string[]> {
  return db().begin(async (sql) => {
    const [c] = await sql<{ domain: string }[]>`select domain from candidates where id = ${candidateId}`;
    if (!c) throw new HttpError(404, "Candidate not found");
    const live = await sql`select 1 from attempts where candidate_id = ${candidateId} and mode = 'live' limit 1`;
    if (live.length) {
      throw new HttpError(409, "This candidate has live attempt records. Suppress it instead, or purge evidence via retention; the attempt ledger prevents re-contact.");
    }
    const paths = await sql<{ object_path: string }[]>`
      select object_path from evidence where candidate_id = ${candidateId} and object_path is not null and deleted_at is null`;
    await sql`delete from candidates where id = ${candidateId}`;
    await audit(actor, "candidate.delete", "candidate", candidateId, { domain: c.domain }, sql);
    return paths.map((p) => p.object_path);
  });
}
