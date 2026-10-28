import Link from "next/link";
import { listCandidates } from "@/server/queries";
import { getActiveCampaign } from "@/server/services/campaigns";
import { StatusBadge } from "../../ui/badge";

const STATUSES = ["pending", "approved", "rejected", "suppressed"];

export default async function CandidatesPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const sp = await searchParams;
  const campaign = await getActiveCampaign();
  if (!campaign) return <p>Create a campaign first.</p>;
  const status = STATUSES.includes(sp.status ?? "") ? sp.status : undefined;
  const q = sp.q?.slice(0, 100) || undefined;
  const rows = await listCandidates(campaign.id, { status, q });
  const exportQs = new URLSearchParams({ campaignId: campaign.id, ...(status ? { status } : {}) });
  return (
    <div>
      <h1>Discovery & review queue</h1>
      <p className="small muted">Every discovered website starts as <em>pending</em>. A website is only a candidate — approve it only after checking it is the official business site and that a business enquiry via its contact form is appropriate.</p>
      <form className="row panel" method="get">
        <select name="status" defaultValue={status ?? ""} style={{ maxWidth: 180 }}>
          <option value="">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <input name="q" defaultValue={q ?? ""} placeholder="Search domain or title" style={{ maxWidth: 260 }} />
        <button type="submit">Filter</button>
        <a className="btn" href={`/api/exports/candidates?${exportQs}`}>Download candidates CSV{status ? ` (${status})` : ""}</a>
      </form>
      <div className="panel table-wrap">
        <table data-testid="candidates-table">
          <thead>
            <tr><th>Website</th><th>Source query</th><th>Contact page</th><th>Review</th><th>Inspection</th><th>Form mapping</th></tr>
          </thead>
          <tbody>
            {rows.length === 0 && <tr><td colSpan={6} className="muted">No candidates. Configure the target market and start a discovery run.</td></tr>}
            {rows.map((r) => (
              <tr key={r.id as string}>
                <td className="wrap">
                  <Link href={`/candidates/${r.id}`}>{r.domain as string}</Link>
                  <div className="small muted">{r.label_verified ? `✓ ${r.label}` : (r.title as string)?.slice(0, 80)}</div>
                </td>
                <td className="wrap small">{r.discovery_query as string}</td>
                <td className="wrap small">{r.contact_url ? <span className="mono">{(r.contact_url as string).slice(0, 60)}</span> : <span className="muted">—</span>}</td>
                <td><StatusBadge status={r.review_status as string} /></td>
                <td><StatusBadge status={r.inspection_status as string} /></td>
                <td>{r.adapter_status ? <><StatusBadge status={r.adapter_status as string} /> <StatusBadge status={r.test_status as string} /></> : <span className="muted">—</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
