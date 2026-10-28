import { db } from "@/server/db";
import { getActiveCampaign, listCampaigns } from "@/server/services/campaigns";
import { listTemplateVersions } from "@/server/services/templates";
import { CreateCampaign } from "../widgets";
import { ActionButton, Time } from "../../ui/client";
import { CampaignSettingsForm, LinkDomainsForm, ServicePageCheck, SuppressionForm, TemplateEditor } from "./forms";

export default async function CampaignPage() {
  const campaign = await getActiveCampaign();
  if (!campaign) {
    return (
      <div>
        <h1>Campaign</h1>
        <div className="panel"><CreateCampaign /></div>
      </div>
    );
  }
  const [campaigns, versions, suppressions] = await Promise.all([
    listCampaigns(),
    listTemplateVersions(campaign.id),
    db()`select id, domain, reason, created_by, created_at from suppressions order by created_at desc limit 500`,
  ]);
  const plain = JSON.parse(JSON.stringify(campaign));
  return (
    <div>
      <h1>Campaign settings</h1>
      {campaigns.length > 1 && (
        <div className="panel">
          <h3>Campaigns</h3>
          {campaigns.map((c) => (
            <div key={c.id} className="row">
              {c.name} {c.is_active ? <span className="badge ok">active</span> : <ActionButton path={`/api/campaigns/${c.id}/activate`} label="Make active" />}
            </div>
          ))}
        </div>
      )}
      <CampaignSettingsForm campaign={plain} />

      <div className="panel">
        <h2>Sender identity verification</h2>
        <p className="small muted">Live outreach is blocked until you confirm these details are correct. Changing any sender field resets verification and switches live mode off.</p>
        <dl className="kv">
          <dt>Name</dt><dd>{campaign.sender_name}</dd>
          <dt>Business</dt><dd>{campaign.sender_business}</dd>
          <dt>Email</dt><dd>{campaign.sender_email}</dd>
          <dt>Phone / WhatsApp</dt><dd>{campaign.sender_phone}</dd>
          <dt>Website field value</dt><dd>{campaign.sender_website}</dd>
          <dt>Status</dt>
          <dd>{campaign.sender_verified_at ? <>Verified by {campaign.sender_verified_by} at <Time iso={campaign.sender_verified_at} /></> : <span className="badge warn">not verified</span>}</dd>
        </dl>
        <div style={{ marginTop: 10 }}>
          <ActionButton path={`/api/campaigns/${campaign.id}/verify-sender`} label="I confirm these sender details are correct" className="primary" confirm="Confirm the sender details above are accurate and yours to use?" testId="verify-sender" />
        </div>
      </div>

      <TemplateEditor campaignId={campaign.id} activeVersionId={campaign.active_template_version_id} versions={JSON.parse(JSON.stringify(versions))} />
      <ServicePageCheck />

      <div className="panel">
        <h2>Suppressed / opted-out domains</h2>
        <p className="small muted">Suppressions apply to every campaign and to every domain linked to the same business.</p>
        <SuppressionForm />
        <div className="table-wrap" style={{ marginTop: 10 }}>
          <table>
            <thead><tr><th>Domain</th><th>Reason</th><th>By</th><th>When</th><th /></tr></thead>
            <tbody>
              {suppressions.map((s) => (
                <tr key={s.id}>
                  <td className="mono">{s.domain}</td><td className="wrap">{s.reason}</td><td>{s.created_by}</td><td><Time iso={s.created_at} /></td>
                  <td><ActionButton path={`/api/suppressions/${s.id}`} method="DELETE" label="Remove" confirm={`Remove suppression for ${s.domain}?`} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <h2>Related domains</h2>
        <p className="small muted">Link domains that belong to the same business so it is only ever contacted once.</p>
        <LinkDomainsForm />
      </div>

      <div className="panel">
        <h2>Evidence retention</h2>
        <p className="small muted">Screenshots older than {campaign.evidence_retention_days} days can be purged from private storage. Attempt records are kept so the business is never re-contacted.</p>
        <ActionButton path="/api/retention/purge" body={{ campaignId: campaign.id }} label="Purge expired screenshots now" className="warn" confirm="Delete screenshots older than the retention window?" />
      </div>
    </div>
  );
}
