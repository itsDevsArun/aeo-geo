"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ErrorBox } from "../../../ui/client";

const ROLES = ["skip", "name", "first_name", "last_name", "company", "email", "phone", "website", "subject", "message", "fixed"] as const;

export function ReviewControls({ candidateId, status }: { candidateId: string; status: string }) {
  const router = useRouter();
  const [notes, setNotes] = useState("");
  const [attest, setAttest] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const decide = async (decision: string) => {
    setError(null);
    try {
      await api(`/api/candidates/${candidateId}/review`, "POST", { decision, notes, attestPermitted: attest });
      router.refresh();
    } catch (e) {
      setError(e as Error);
    }
  };
  return (
    <div>
      <label htmlFor="rnotes">Notes</label>
      <textarea id="rnotes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Why this decision?" style={{ minHeight: 60 }} />
      <label className="row" style={{ color: "var(--text)" }}>
        <input type="checkbox" checked={attest} onChange={(e) => setAttest(e.target.checked)} data-testid="attest" />
        I checked this is the official business site, the form is for general business enquiries, and the site does not prohibit solicitation.
      </label>
      <div className="row" style={{ marginTop: 8 }}>
        <button className="primary" onClick={() => decide("approve")} disabled={status === "approved"} data-testid="approve">Approve</button>
        <button onClick={() => decide("reject")} disabled={status === "rejected"}>Reject</button>
        <button className="danger" onClick={() => decide("suppress")} disabled={status === "suppressed"}>Suppress domain</button>
        {status !== "pending" && <button onClick={() => decide("reset")}>Back to pending</button>}
      </div>
      <ErrorBox error={error} />
    </div>
  );
}

export function LabelEditor({ candidateId, label, verified }: { candidateId: string; label: string; verified: boolean }) {
  const router = useRouter();
  const [l, setL] = useState(label);
  const [v, setV] = useState(verified);
  const [error, setError] = useState<Error | null>(null);
  return (
    <div style={{ marginTop: 12 }}>
      <label htmlFor="blabel">Business name (only used in greetings when marked verified)</label>
      <div className="row">
        <input id="blabel" value={l} onChange={(e) => setL(e.target.value)} style={{ maxWidth: 260 }} />
        <label className="row" style={{ margin: 0, color: "var(--text)" }}><input type="checkbox" checked={v} onChange={(e) => setV(e.target.checked)} /> verified</label>
        <button onClick={async () => {
          try {
            await api(`/api/candidates/${candidateId}/label`, "POST", { label: l, verified: v });
            router.refresh();
          } catch (e) {
            setError(e as Error);
          }
        }}>Save label</button>
      </div>
      <ErrorBox error={error} />
    </div>
  );
}

interface Mapping { selector: string; role: (typeof ROLES)[number]; required: boolean; label: string; value?: string }
interface Field { selector: string; tag: string; type: string; name: string; label: string; placeholder: string; required: boolean; visible: boolean; options?: string[] }

export function MappingEditor({ adapterId, mapping, fields, submitSelector }: { adapterId: string; mapping: Mapping[]; fields: Field[]; submitSelector: string }) {
  const router = useRouter();
  const [rows, setRows] = useState<Mapping[]>(mapping);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<string>("");
  const fieldBySel = new Map(fields.map((f) => [f.selector, f]));
  return (
    <div style={{ marginTop: 10 }}>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Role</th><th>Reviewed fixed value</th></tr></thead>
          <tbody>
            {rows.map((m, i) => {
              const f = fieldBySel.get(m.selector);
              return (
                <tr key={m.selector}>
                  <td className="wrap">{m.label || f?.name || "—"}<div className="mono small muted">{m.selector}</div></td>
                  <td>{f?.tag}/{f?.type}</td>
                  <td>{m.required ? "yes" : "no"}</td>
                  <td>
                    <select value={m.role} onChange={(e) => setRows(rows.map((r, j) => (j === i ? { ...r, role: e.target.value as Mapping["role"] } : r)))}>
                      {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </td>
                  <td>
                    {m.role === "fixed" ? (
                      f?.options?.length ? (
                        <select value={m.value ?? ""} onChange={(e) => setRows(rows.map((r, j) => (j === i ? { ...r, value: e.target.value } : r)))}>
                          <option value="">— choose —</option>
                          {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input value={m.value ?? ""} onChange={(e) => setRows(rows.map((r, j) => (j === i ? { ...r, value: e.target.value } : r)))} />
                      )
                    ) : <span className="muted small">—</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="small muted">Submit button: <span className="mono">{submitSelector || "not detected"}</span>. Hidden fields and honeypots are never filled; consent checkboxes are never ticked.</p>
      <button onClick={async () => {
        setError(null);
        try {
          const r = await api<{ status: string; errors: string[] }>(`/api/adapters/${adapterId}`, "PATCH", { mapping: rows });
          setResult(r.errors.length ? `Saved as ${r.status}: ${r.errors.join("; ")}` : `Saved (${r.status}). Run a dry run to test it.`);
          router.refresh();
        } catch (e) {
          setError(e as Error);
        }
      }}>Save mapping</button>
      {result && <p className="small">{result}</p>}
      <ErrorBox error={error} />
    </div>
  );
}

export function AdapterControls({ adapterId, status }: { adapterId: string; status: string }) {
  const router = useRouter();
  const [error, setError] = useState<Error | null>(null);
  const decide = async (decision: "approve" | "reject") => {
    setError(null);
    try {
      await api(`/api/adapters/${adapterId}/decision`, "POST", { decision });
      router.refresh();
    } catch (e) {
      setError(e as Error);
    }
  };
  return (
    <div style={{ marginTop: 12 }}>
      <div className="row">
        <button className="primary" onClick={() => decide("approve")} disabled={status === "approved"} data-testid="approve-adapter">Approve adapter for live use</button>
        <button onClick={() => decide("reject")} disabled={status === "rejected"}>Reject adapter</button>
      </div>
      <p className="small muted">Live runs only use adapters that are approved AND passed a dry run.</p>
      <ErrorBox error={error} />
    </div>
  );
}
