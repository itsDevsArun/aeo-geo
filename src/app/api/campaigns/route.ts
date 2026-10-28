import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { createCampaign, listCampaigns } from "@/server/services/campaigns";

export const GET = userRoute(async () => json({ campaigns: await listCampaigns() }));

export const POST = userRoute(async (req, user) => {
  const body = (await readJson(req)) as { name?: string };
  return json({ campaign: await createCampaign({ name: body.name ?? "" }, user.email) }, 201);
});
