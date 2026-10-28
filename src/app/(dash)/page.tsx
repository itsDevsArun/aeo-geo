import Link from "next/link";
import { getActiveCampaign } from "@/server/services/campaigns";
import { getOverview } from "@/server/services/reporting";
import { CreateCampaign } from "./widgets";
import { OverviewLive } from "./overview-live";

export default async function OverviewPage() {
  const campaign = await getActiveCampaign();
  if (!campaign) {
    return (
      <div>
        <h1>Overview</h1>
        <div className="panel">
          <p>No campaign yet. Create one, then set your target industry and location in Campaign settings.</p>
          <CreateCampaign />
        </div>
      </div>
    );
  }
  const overview = await getOverview(campaign.id);
  return (
    <div>
      <h1>Overview</h1>
      {(!campaign.industry || !campaign.city_region || !campaign.country) && (
        <div className="alert warn">
          Target market not configured. <Link href="/campaign">Set industry, country and city/region</Link> before running discovery.
        </div>
      )}
      {!campaign.sender_verified_at && <div className="alert warn">Sender details are not verified yet. <Link href="/campaign">Review and verify them</Link>.</div>}
      <OverviewLive initial={JSON.parse(JSON.stringify(overview))} />
    </div>
  );
}
