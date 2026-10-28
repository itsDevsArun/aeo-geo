import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { getCampaign, updateCampaign } from "@/server/services/campaigns";

export const GET = userRoute(async (_req, _user, p) => json({ campaign: await getCampaign(p.id) }));

export const PATCH = userRoute(async (req, user, p) => json({ campaign: await updateCampaign(p.id, await readJson(req), user.email) }), {
  limitPerMinute: 30,
});
