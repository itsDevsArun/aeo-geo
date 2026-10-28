import Link from "next/link";
import { db } from "@/server/db";
import { listRuns } from "@/server/queries";
import { getActiveCampaign } from "@/server/services/campaigns";
import { countEligibleLive, pendingReconciliation, refreshRunHealth } from "@/server/services/runs";
import { Time } from "../../ui/client";
import { StatusBadge } from "../../ui/badge";
import { StartRunControls } from "./start";

export default async function RunsPage() {
  const campaign = await getActiveCampaign();
  if (!campaign) return <p>Create a campaign first.</p>;
  await refreshRunHealth(campaign.id);
  const [runs, eligible, rec] = await Promise.all([listRuns(campaign.id), countEligibleLive(campaign.id, db()), pendingReconciliation(campaign.id, db())]);
  const active = runs.find((r) => ["queued", "running", "stopping"].includes(r.status as string));
  return (
    <div>
      <h1>Runs</h1>
      <div className="panel">
        <h2>Start a run</h2>
        {active ? (
          <div className="alert warn">
            Run <Link href={`/runs/${active.id}`}>{String(active.id).slice(0, 8)}</Link> is {String(active.status)}. Only one run can be active per campaign; start the next one after it finishes.
          </div>
        ) : null}
        {(rec.uncertain > 0 || rec.runs > 0) && <div className="alert bad">{rec.uncertain} uncertain attempt(s) / {rec.runs} run(s) need reconciliation before another live run.</div>}
        <StartRunControls campaignId={campaign.id} disabled={!!active} liveEnabled={campaign.live_enabled} eligibleLive={eligible} />
      </div>
      <div className="panel table-wrap">
        <h2>History</h2>
        <table data-testid="runs-table">
          <thead><tr><th>Run</th><th>Mode</th><th>Status</th><th>Requested</th><th>Started</th><th>Finished</th><th>Attempts</th><th>GitHub</th></tr></thead>
          <tbody>
            {runs.map((r) => (
              <tr key={r.id as string}>
                <td><Link href={`/runs/${r.id}`}>{String(r.id).slice(0, 8)}</Link></td>
                <td>{String(r.mode).replace("_", " ")}</td>
                <td><StatusBadge status={r.status as string} /> <span className="small muted">{r.finish_reason as string}</span>{r.needs_reconciliation && !r.reconciled_at ? <span className="badge bad">reconcile</span> : null}</td>
                <td><Time iso={r.created_at as Date} /><div className="small muted">{r.requested_by as string}</div></td>
                <td><Time iso={r.started_at as Date} /></td>
                <td><Time iso={r.finished_at as Date} /></td>
                <td>{r.attempts as number}</td>
                <td>{r.github_run_url ? <a href={r.github_run_url as string} target="_blank" rel="noreferrer">logs</a> : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
