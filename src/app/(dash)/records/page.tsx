import Link from "next/link";
import { getActiveCampaign } from "@/server/services/campaigns";
import { listAttempts } from "@/server/services/reporting";
import { Time } from "../../ui/client";
import { StatusBadge } from "../../ui/badge";

const STATUSES = ["reserved", "filled", "submitting", "confirmed", "unclear", "error_after_submit", "failed_before_submit", "uncertain", "reconciled_sent", "reconciled_not_sent", "dry_run_ok", "dry_run_failed"];

export default async function RecordsPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const sp = await searchParams;
  const campaign = await getActiveCampaign();
  if (!campaign) return <p>Create a campaign first.</p>;
  const f = {
    campaignId: campaign.id,
    status: STATUSES.includes(sp.status ?? "") ? sp.status : undefined,
    mode: sp.mode === "live" || sp.mode === "dry_run" ? sp.mode : undefined,
    runId: /^[0-9a-f-]{36}$/i.test(sp.runId ?? "") ? sp.runId : undefined,
    q: sp.q?.slice(0, 100) || undefined,
  };
  const rows = await listAttempts(f, 300);
  const filtered = new URLSearchParams(Object.entries(f).filter(([, v]) => v) as [string, string][]);
  return (
    <div>
      <h1>Records</h1>
      <form className="panel row" method="get">
        <select name="mode" defaultValue={f.mode ?? ""} style={{ maxWidth: 140 }}><option value="">All modes</option><option value="live">live</option><option value="dry_run">dry run</option></select>
        <select name="status" defaultValue={f.status ?? ""} style={{ maxWidth: 200 }}><option value="">All outcomes</option>{STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}</select>
        <input name="runId" defaultValue={f.runId ?? ""} placeholder="Run ID" style={{ maxWidth: 300 }} />
        <input name="q" defaultValue={f.q ?? ""} placeholder="Domain" style={{ maxWidth: 200 }} />
        <button type="submit">Filter</button>
        <a className="btn" href={`/api/exports/attempts?${filtered}`} data-testid="csv-filtered">Download filtered CSV</a>
        <a className="btn" href={`/api/exports/attempts?campaignId=${campaign.id}`} data-testid="csv-full">Download full campaign CSV</a>
      </form>
      <div className="panel table-wrap">
        <table data-testid="records-table">
          <thead><tr><th>When</th><th>Website</th><th>Form URL</th><th>Mode</th><th>Outcome</th><th>Template</th><th>Run</th></tr></thead>
          <tbody>
            {rows.length === 0 && <tr><td colSpan={7} className="muted">No records.</td></tr>}
            {rows.map((r) => (
              <tr key={r.attempt_id as string}>
                <td><Link href={`/records/${r.attempt_id}`}><Time iso={(r.submit_started_at ?? r.reserved_at) as Date} /></Link></td>
                <td className="wrap">{r.domain as string}</td>
                <td className="wrap mono small">{(r.form_url as string).slice(0, 70)}</td>
                <td>{r.mode === "live" ? <span className="badge bad">live</span> : <span className="badge info">dry run</span>}</td>
                <td><StatusBadge status={r.status as string} /></td>
                <td>{r.template_kind as string} v{r.template_version as number}</td>
                <td><Link href={`/runs/${r.run_id}`}>{String(r.run_id).slice(0, 8)}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
