import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { activateCampaign } from "@/server/services/campaigns";

export const POST = userRoute(async (_req, user, p) => {
  await activateCampaign(p.id, user.email);
  return json({ ok: true });
});
