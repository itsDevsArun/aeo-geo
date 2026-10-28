import Link from "next/link";
import { attemptDetail } from "@/server/queries";
import { Time } from "../../../ui/client";
import { StatusBadge } from "../../../ui/badge";

const KIND_LABEL: Record<string, string> = {
  inspection: "Inspected-page screenshot (before any typing)",
  filled: "Filled-form screenshot (before submit)",
  post_attempt: "Post-attempt screenshot (after submit)",
};

export default async function RecordPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { attempt: a, evidence, events, approvals } = await attemptDetail(id);
  const fv = (a.field_values ?? {}) as Record<string, string>;
  return (
    <div>
      <p><Link href="/records">← Records</Link></p>
      <h1>Attempt {id.slice(0, 8)} <StatusBadge status={a.status as string} /></h1>
      {a.mode === "dry_run" && <div className="alert ok">Dry run — nothing was submitted.</div>}
      {a.status === "confirmed" && <div className="alert ok">The website displayed a new success message after the attempt. This does not prove the message reached an inbox or was read.</div>}
      {a.status === "unclear" && <div className="alert warn">Submit was attempted but no new success marker was observed. It will not be retried.</div>}
      {a.status === "uncertain" && <div className="alert bad">Outcome uncertain (run interrupted after the submit gate). Reconcile it from the run page.</div>}
      <div className="panel">
        <dl className="kv">
          <dt>Website</dt><dd>{a.website as string}</dd>
          <dt>Verified business label</dt><dd>{a.label_verified ? (a.label as string) : <span className="muted">none</span>}</dd>
          <dt>Exact form URL</dt><dd className="mono small">{a.form_url as string}</dd>
          <dt>Final page URL</dt><dd className="mono small">{(a.final_url as string) ?? "—"}</dd>
          <dt>Discovery query</dt><dd>{a.discovery_query as string}</dd>
          <dt>Discovery source URL</dt><dd className="mono small">{a.source_url as string}</dd>
          <dt>Run</dt><dd><Link href={`/runs/${a.run_id}`}>{a.run_id as string}</Link> ({a.run_mode as string}, {a.run_status as string})</dd>
          <dt>Mode</dt><dd>{a.mode === "live" ? "live" : "dry run"}</dd>
          <dt>Reserved</dt><dd><Time iso={a.reserved_at as Date} /></dd>
          <dt>Submit attempted</dt><dd><Time iso={a.submit_started_at as Date} /></dd>
          <dt>Finished</dt><dd><Time iso={a.finished_at as Date} /></dd>
          <dt>Template version</dt><dd>{a.template_kind as string} v{a.template_version as number}</dd>
          <dt>Confirmation text</dt><dd>{(a.confirmation_text as string) ?? <span className="muted">none observed</span>}</dd>
          <dt>Result / error</dt><dd>{(a.error as string) ?? "—"}</dd>
        </dl>
      </div>
      <div className="grid2">
        <div className="panel">
          <h2>Exact message</h2>
          <pre data-testid="exact-message"><strong>{a.subject as string}</strong>{"\n\n"}{a.message as string}</pre>
        </div>
        <div className="panel">
          <h2>Submitted field values</h2>
          {Object.keys(fv).length === 0 ? <p className="muted small">No fields were typed.</p> : (
            <dl className="kv">{Object.entries(fv).map(([k, v]) => <div key={k} style={{ display: "contents" }}><dt className="small">{k}</dt><dd className="small">{v.length > 200 ? `${v.slice(0, 200)}…` : v}</dd></div>)}</dl>
          )}
        </div>
      </div>
      <div className="panel">
        <h2>Evidence</h2>
        <div className="shots">
          {evidence.length === 0 && <p className="muted">No screenshots recorded.</p>}
          {evidence.map((e) => (
            <figure key={e.id}>
              {e.stored ? (
                <a href={`/api/evidence/${e.id}`} target="_blank" rel="noreferrer"><img src={`/api/evidence/${e.id}`} alt={KIND_LABEL[e.kind] ?? e.kind} /></a>
              ) : <div className="alert warn">Capture failed: {e.capture_error}</div>}
              <figcaption>
                <strong>{KIND_LABEL[e.kind] ?? e.kind}</strong><br /><Time iso={e.created_at} /><br />
                <span className="mono small">{e.filename}</span>
                {e.stored && <> · <a href={`/api/evidence/${e.id}?download=1`}>download</a></>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="grid2">
        <div className="panel">
          <h2>Events</h2>
          <ul className="small">{events.map((e) => <li key={e.id}><Time iso={e.created_at} /> <StatusBadge status={e.type} /> {e.message}</li>)}</ul>
        </div>
        <div className="panel">
          <h2>Review history</h2>
          <ul className="small">{approvals.map((p) => <li key={p.id}><Time iso={p.created_at} /> {p.subject}: <strong>{p.decision}</strong> by {p.actor}{p.notes ? ` — ${p.notes}` : ""}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
