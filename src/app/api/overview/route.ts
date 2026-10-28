import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { getActiveCampaign } from "@/server/services/campaigns";
import { getOverview } from "@/server/services/reporting";

export const dynamic = "force-dynamic";

export const GET = userRoute(async (req) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("campaignId") || (await getActiveCampaign())?.id || null;
  return json(await getOverview(id));
});
