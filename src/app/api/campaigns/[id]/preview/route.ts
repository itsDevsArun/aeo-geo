import { z } from "zod";
import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { getCampaign, senderOf } from "@/server/services/campaigns";
import { renderTemplate, validateOutgoingMessage, validateTemplate } from "@/shared/message";

const Body = z.object({ subject: z.string().max(200), body: z.string().max(3000), businessName: z.string().max(200).optional() });

/** Render + validate a draft template without saving it. */
export const POST = userRoute(async (req, _user, p) => {
  const input = Body.parse(await readJson(req));
  const campaign = await getCampaign(p.id);
  const rendered = renderTemplate(input, senderOf(campaign), { verifiedBusinessName: input.businessName || null });
  const template = validateTemplate(input, senderOf(campaign));
  const message = validateOutgoingMessage(rendered);
  return json({ rendered, valid: template.ok && message.ok, errors: [...new Set([...template.errors, ...message.errors])], length: rendered.body.length });
});
