import { recentAudit } from "@/server/queries";
import { Time } from "../../ui/client";

export default async function AuditPage() {
  const rows = await recentAudit(300);
  return (
    <div>
      <h1>Audit log</h1>
      <div className="panel table-wrap">
        <table>
          <thead><tr><th>When</th><th>Actor</th><th>Action</th><th>Entity</th><th>Details</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td><Time iso={r.created_at} /></td>
                <td className="wrap">{r.actor}</td>
                <td>{r.action}</td>
                <td className="mono small">{r.entity_type}:{String(r.entity_id ?? "").slice(0, 12)}</td>
                <td><pre className="small" style={{ maxHeight: 120, overflow: "auto" }}>{JSON.stringify(r.details)}</pre></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
