import "server-only";
import { z } from "zod";
import { audit } from "../audit";
import { db, type Sql } from "../db";
import { HttpError } from "../http";
import { DEFAULT_TEMPLATES, validateTemplate, type SenderIdentity } from "@/shared/message";
import { normalizeDomainInput } from "@/shared/urls";
import { OSM_TAG } from "@/shared/discovery";

export interface Campaign {
  id: string;
  name: string;
  is_active: boolean;
  industry: string;
  country: string;
  countries: string[];
  osm_categories: string[];
  osm_other_countries: string[];
  city_region: string;
  search_language: string;
  search_queries: string[];
  max_candidates: number;
  max_live_attempts_per_run: number;
  min_delay_seconds: number;
  excluded_domains: string[];
  dry_run_fill_domains: string[];
  live_enabled: boolean;
  sender_name: string;
  sender_business: string;
  sender_email: string;
  sender_phone: string;
  sender_website: string;
  sender_verified_at: Date | null;
  sender_verified_by: string | null;
  active_template_version_id: string | null;
  evidence_retention_days: number;
  created_at: Date;
  updated_at: Date;
}

export function senderOf(c: Campaign): SenderIdentity {
  return { name: c.sender_name, business: c.sender_business, email: c.sender_email, phone: c.sender_phone, website: c.sender_website };
}

const domainList = z
  .array(z.string().max(253))
  .max(1000)
  .transform((list, ctx) => {
    const out: string[] = [];
    for (const d of list) {
      if (!d.trim()) continue;
      const n = normalizeDomainInput(d);
      if (!n) ctx.addIssue({ code: "custom", message: `Invalid domain: ${d}` });
      else out.push(n);
    }
    return [...new Set(out)];
  });

export const CampaignPatch = z
  .object({
    name: z.string().trim().min(1).max(200),
    industry: z.string().trim().max(200),
    country: z.string().trim().toUpperCase().regex(/^([A-Z]{2}|ALL)?$/, "Use a 2-letter country code, e.g. IN or US"),
    countries: z.array(z.string().trim().toUpperCase().regex(/^([A-Z]{2}|ALL)$/, 'Country codes are 2 letters (e.g. US, AU, CA) or "ALL" for worldwide')).max(20)
      .transform((a) => [...new Set(a)]),
    osm_categories: z.array(z.string().trim().regex(OSM_TAG, 'OSM categories look like "craft=plumber" or "office=lawyer"')).max(40).transform((a) => [...new Set(a)]),
    osm_other_countries: z.array(z.string().trim().toUpperCase().regex(/^[A-Z]{2}$/)).max(40).transform((a) => [...new Set(a)]),
    city_region: z.string().trim().max(200),
    search_language: z.string().trim().regex(/^[a-z]{2}(-[a-z]{2,4})?$/i).max(10),
    search_queries: z.array(z.string().trim().max(300)).max(50).transform((a) => a.filter(Boolean)),
    max_candidates: z.coerce.number().int().min(1).max(2000),
    max_live_attempts_per_run: z.coerce.number().int().min(0).max(500),
    min_delay_seconds: z.coerce.number().int().min(5).max(3600),
    excluded_domains: domainList,
    dry_run_fill_domains: domainList,
    live_enabled: z.boolean(),
    sender_name: z.string().trim().min(1).max(100),
    sender_business: z.string().trim().min(1).max(100),
    sender_email: z.string().trim().email().max(200),
    sender_phone: z.string().trim().max(40).regex(/^[+\d\s().-]*$/, "Phone may contain digits, spaces, + ( ) - ."),
    sender_website: z.string().trim().url().max(300),
    evidence_retention_days: z.coerce.number().int().min(7).max(3650),
  })
  .partial()
  .strict();

const SENSITIVE_KEYS = new Set([
  "live_enabled",
  "max_live_attempts_per_run",
  "sender_name",
  "sender_business",
  "sender_email",
  "sender_phone",
  "sender_website",
  "dry_run_fill_domains",
]);
const SENDER_KEYS = ["sender_name", "sender_business", "sender_email", "sender_phone", "sender_website"];

export async function listCampaigns(): Promise<Campaign[]> {
  return db()<Campaign[]>`select * from campaigns order by is_active desc, created_at desc`;
}

export async function getCampaign(id: string, tx?: Sql): Promise<Campaign> {
  const sql = tx ?? db();
  const [c] = await sql<Campaign[]>`select * from campaigns where id = ${id}`;
  if (!c) throw new HttpError(404, "Campaign not found");
  return c;
}

export async function getActiveCampaign(): Promise<Campaign | null> {
  const [c] = await db()<Campaign[]>`select * from campaigns order by is_active desc, created_at desc limit 1`;
  return c ?? null;
}

export async function createCampaign(input: { name: string }, actor: string): Promise<Campaign> {
  const name = z.string().trim().min(1).max(200).parse(input.name);
  return db().begin(async (sql) => {
    const [{ count }] = await sql<{ count: number }[]>`select count(*)::int as count from campaigns where is_active`;
    const [c] = await sql<Campaign[]>`insert into campaigns (name, is_active) values (${name}, ${count === 0}) returning *`;
    let activeVersion: string | null = null;
    for (const kind of ["short", "standard"] as const) {
      const t = DEFAULT_TEMPLATES[kind];
      const [tpl] = await sql<{ id: string }[]>`
        insert into message_templates (campaign_id, kind, name) values (${c.id}, ${kind}, ${t.name}) returning id`;
      const [v] = await sql<{ id: string }[]>`
        insert into template_versions (template_id, version, subject, body, offer_facts, created_by)
        values (${tpl.id}, 1, ${t.subject}, ${t.body}, ${t.offerFacts}, ${actor}) returning id`;
      if (kind === "short") activeVersion = v.id;
    }
    const [updated] = await sql<Campaign[]>`
      update campaigns set active_template_version_id = ${activeVersion} where id = ${c.id} returning *`;
    await audit(actor, "campaign.create", "campaign", c.id, { name }, sql);
    return updated;
  });
}

export async function activateCampaign(id: string, actor: string): Promise<void> {
  await db().begin(async (sql) => {
    await getCampaign(id, sql);
    await sql`update campaigns set is_active = false where is_active and id <> ${id}`;
    await sql`update campaigns set is_active = true, updated_at = now() where id = ${id}`;
    await audit(actor, "campaign.activate", "campaign", id, {}, sql);
  });
}

export async function updateCampaign(id: string, rawPatch: unknown, actor: string): Promise<Campaign> {
  const patch = CampaignPatch.parse(rawPatch);
  return db().begin(async (sql) => {
    const [before] = await sql<Campaign[]>`select * from campaigns where id = ${id} for update`;
    if (!before) throw new HttpError(404, "Campaign not found");
    const changes: Record<string, { from: unknown; to: unknown }> = {};
    for (const [k, v] of Object.entries(patch)) {
      const prev = (before as unknown as Record<string, unknown>)[k];
      if (JSON.stringify(prev) !== JSON.stringify(v)) changes[k] = { from: prev, to: v };
    }
    if (Object.keys(changes).length === 0) return before;
    const senderChanged = SENDER_KEYS.some((k) => k in changes);
    const next = { ...before, ...patch } as Campaign;
    if (senderChanged) {
      next.sender_verified_at = null;
      next.sender_verified_by = null;
      // Changing the sender identity always switches live mode off until re-verified.
      next.live_enabled = false;
    }
    if (next.live_enabled && !before.live_enabled) {
      await assertLiveReady(next, sql);
    }
    const cols = Object.keys(patch) as (keyof typeof patch)[];
    const values: Record<string, unknown> = {};
    for (const k of cols) values[k] = next[k as keyof Campaign];
    values.sender_verified_at = next.sender_verified_at;
    values.sender_verified_by = next.sender_verified_by;
    values.live_enabled = next.live_enabled;
    const [updated] = await sql<Campaign[]>`
      update campaigns set ${sql(values as never, Object.keys(values) as never)}, updated_at = now()
      where id = ${id} returning *`;
    const sensitive = Object.keys(changes).filter((k) => SENSITIVE_KEYS.has(k));
    await audit(actor, sensitive.length ? "campaign.update_sensitive" : "campaign.update", "campaign", id, {
      changes,
      sender_verification_reset: senderChanged,
    }, sql);
    return updated;
  });
}

/** Live outreach requires verified sender details and a valid active template. */
export async function assertLiveReady(c: Campaign, tx?: Sql): Promise<void> {
  const problems: string[] = [];
  if (!c.sender_verified_at) problems.push("Sender details must be verified first.");
  if (!c.active_template_version_id) problems.push("Select an active message template.");
  else {
    const sql = tx ?? db();
    const [v] = await sql<{ subject: string; body: string }[]>`select subject, body from template_versions where id = ${c.active_template_version_id}`;
    if (!v) problems.push("Active template version not found.");
    else {
      const r = validateTemplate(v, senderOf(c));
      if (!r.ok) problems.push(...r.errors);
    }
  }
  if (problems.length) throw new HttpError(422, "Live mode is not ready", problems);
}

export async function verifySender(id: string, actor: string): Promise<Campaign> {
  return db().begin(async (sql) => {
    const c = await getCampaign(id, sql);
    const sender = senderOf(c);
    const parsed = CampaignPatch.pick({ sender_email: true, sender_name: true, sender_business: true, sender_website: true }).safeParse({
      sender_email: sender.email,
      sender_name: sender.name,
      sender_business: sender.business,
      sender_website: sender.website,
    });
    if (!parsed.success) throw new HttpError(422, "Sender details are invalid");
    const [updated] = await sql<Campaign[]>`
      update campaigns set sender_verified_at = now(), sender_verified_by = ${actor}, updated_at = now()
      where id = ${id} returning *`;
    await audit(actor, "campaign.verify_sender", "campaign", id, { sender }, sql);
    return updated;
  });
}
