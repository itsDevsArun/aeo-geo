import "server-only";
import { z } from "zod";
import { audit } from "../audit";
import { db, type Sql } from "../db";
import { HttpError } from "../http";
import { getCampaign, senderOf } from "./campaigns";
import { renderTemplate, validateOutgoingMessage, validateTemplate, type TemplateContent } from "@/shared/message";

export interface TemplateVersion {
  id: string;
  template_id: string;
  kind: "short" | "standard";
  template_name: string;
  version: number;
  subject: string;
  body: string;
  offer_facts: string[];
  created_by: string;
  created_at: Date;
}

export const TemplateInput = z.object({
  kind: z.enum(["short", "standard"]),
  subject: z.string().max(200),
  body: z.string().max(3000),
  offerFacts: z.array(z.string().trim().max(50)).max(10).default([]),
});

export async function listTemplateVersions(campaignId: string): Promise<TemplateVersion[]> {
  return db()<TemplateVersion[]>`
    select v.*, t.kind, t.name as template_name
    from template_versions v join message_templates t on t.id = v.template_id
    where t.campaign_id = ${campaignId}
    order by t.kind, v.version desc`;
}

export async function getTemplateVersion(id: string, tx?: Sql): Promise<TemplateVersion> {
  const sql = tx ?? db();
  const [v] = await sql<TemplateVersion[]>`
    select v.*, t.kind, t.name as template_name
    from template_versions v join message_templates t on t.id = v.template_id where v.id = ${id}`;
  if (!v) throw new HttpError(404, "Template version not found");
  return v;
}

/** Templates are versioned and immutable; editing creates a new version. */
export async function createTemplateVersion(campaignId: string, raw: unknown, actor: string): Promise<TemplateVersion> {
  const input = TemplateInput.parse(raw);
  const campaign = await getCampaign(campaignId);
  const content: TemplateContent = { subject: input.subject, body: input.body.replace(/\r\n/g, "\n") };
  const result = validateTemplate(content, senderOf(campaign));
  if (!result.ok) throw new HttpError(422, "Template failed validation", result.errors);
  return db().begin(async (sql) => {
    const [tpl] = await sql<{ id: string }[]>`
      select id from message_templates where campaign_id = ${campaignId} and kind = ${input.kind} for update`;
    if (!tpl) throw new HttpError(404, "Template not found");
    const [{ next }] = await sql<{ next: number }[]>`
      select coalesce(max(version), 0) + 1 as next from template_versions where template_id = ${tpl.id}`;
    const [v] = await sql<{ id: string }[]>`
      insert into template_versions (template_id, version, subject, body, offer_facts, created_by)
      values (${tpl.id}, ${next}, ${content.subject}, ${content.body}, ${input.offerFacts}, ${actor}) returning id`;
    await audit(actor, "template.version_create", "template_version", v.id, { kind: input.kind, version: next }, sql);
    return getTemplateVersion(v.id, sql);
  });
}

export async function setActiveTemplateVersion(campaignId: string, versionId: string, actor: string): Promise<void> {
  await db().begin(async (sql) => {
    const v = await getTemplateVersion(versionId, sql);
    const [t] = await sql<{ campaign_id: string }[]>`select campaign_id from message_templates where id = ${v.template_id}`;
    if (t.campaign_id !== campaignId) throw new HttpError(400, "Template version belongs to another campaign");
    const campaign = await getCampaign(campaignId, sql);
    const r = validateTemplate(v, senderOf(campaign));
    if (!r.ok) throw new HttpError(422, "Template failed validation", r.errors);
    await sql`update campaigns set active_template_version_id = ${versionId}, updated_at = now() where id = ${campaignId}`;
    await audit(actor, "template.activate", "campaign", campaignId, { version_id: versionId, kind: v.kind, version: v.version }, sql);
  });
}

/** Render the final message for a recipient and enforce validation (blocks on failure). */
export function renderForRecipient(
  v: Pick<TemplateVersion, "subject" | "body">,
  campaign: Parameters<typeof senderOf>[0],
  verifiedBusinessName: string | null,
): TemplateContent {
  const out = renderTemplate(v, senderOf(campaign), { verifiedBusinessName });
  const r = validateOutgoingMessage(out);
  if (!r.ok) throw new HttpError(422, "Rendered message failed validation", r.errors);
  return out;
}
