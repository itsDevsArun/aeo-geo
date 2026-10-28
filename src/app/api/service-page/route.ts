import { env } from "@/server/env";
import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { getActiveCampaign } from "@/server/services/campaigns";
import { listTemplateVersions } from "@/server/services/templates";
import { checkOfferFacts } from "@/shared/message";

export const dynamic = "force-dynamic";

/** Fetch the live service page and check every offer fact used by current templates still appears. */
export const GET = userRoute(async () => {
  const res = await fetch(env.servicePageUrl, { signal: AbortSignal.timeout(15000), redirect: "follow", cache: "no-store" });
  const html = await res.text();
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&");
  const campaign = await getActiveCampaign();
  const versions = campaign ? await listTemplateVersions(campaign.id) : [];
  const latest = new Map<string, (typeof versions)[number]>();
  for (const v of versions) if (!latest.has(v.kind)) latest.set(v.kind, v);
  const checks = [...latest.values()].map((v) => ({ kind: v.kind, version: v.version, facts: v.offer_facts, ...checkOfferFacts(text, v.offer_facts) }));
  const observed = {
    price_usd: /\$\s?199\b/.test(text),
    price_inr: /16,999/.test(text),
    negotiable: /negotiable/i.test(text),
    ten_questions: /10 customer questions/i.test(text),
    two_pages: /two (existing |priority )?pages|2 pages/i.test(text),
    one_revision: /1 revision|one revision/i.test(text),
  };
  return json({ url: env.servicePageUrl, httpStatus: res.status, fetchedAt: new Date().toISOString(), observed, checks });
});
