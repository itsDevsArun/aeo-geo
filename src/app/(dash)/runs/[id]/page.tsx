import Link from "next/link";
import { uncertainAttempts } from "@/server/queries";
import { getRun } from "@/server/services/runs";
import { ActionButton } from "../../../ui/client";
import { RunMonitor } from "./monitor";

export default async function RunPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const run = await getRun(id);
  const uncertain = await uncertainAttempts(id);
  const needsRec = run.needs_reconciliation && !run.reconciled_at && !["queued", "running", "stopping"].includes(run.status);
  return (
    <div>
      <p><Link href="/runs">← Runs</Link></p>
      <h1>Run {id.slice(0, 8)} <span className="muted small">({run.mode.replace("_", " ")})</span></h1>
      <RunMonitor runId={id} campaignId={run.campaign_id} />
      {needsRec && (
        <div className="panel">
          <h2>Reconciliation required</h2>
          <p className="small">This run ended abnormally (emergency cancel, lost runner or crash). Attempts that may have been submitted are marked uncertain and are never retried automatically. Check the website / your inbox, then record what happened.</p>
          {uncertain.length === 0 ? <p className="small muted">No uncertain attempts.</p> : (
            <div className="table-wrap">
              <table>
                <thead><tr><th>Website</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {uncertain.map((a) => (
                    <tr key={a.id as string}>
                      <td><Link href={`/records/${a.id}`}>{a.domain as string}</Link></td>
                      <td>{a.status as string}</td>
                      <td className="row">
                        <ActionButton path={`/api/attempts/${a.id}/reconcile`} body={{ outcome: "sent", notes: "Treated as sent" }} label="Treat as sent (never retry)" />
                        <ActionButton path={`/api/attempts/${a.id}/reconcile`} body={{ outcome: "not_sent", notes: "Verified not sent" }} label="Verified NOT sent (allow future attempt)" confirm="Only choose this if you verified the message was not delivered. Continue?" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div style={{ marginTop: 10 }}>
            <ActionButton path={`/api/runs/${id}/reconciled`} label="Mark run reconciled" className="primary" />
          </div>
        </div>
      )}
    </div>
  );
}
