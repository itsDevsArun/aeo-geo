"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ActionButton, api, Time } from "../../../ui/client";
import { StatusBadge } from "../../../ui/badge";

interface Ev { id: number; type: string; message: string; created_at: string; candidate_id: string | null; attempt_id: string | null; domain: string | null }
interface Status {
  run: { id: string; status: string; mode: string; created_at: string; started_at: string | null; deadline_at: string | null; heartbeat_at: string | null; finished_at: string | null; finish_reason: string | null; error: string | null; github_run_url: string | null; stop_requested_at: string | null };
  events: Ev[];
  attemptCounts: Record<string, number>;
  heartbeatAgeSeconds: number | null;
  heartbeatStale: boolean;
}

const ACTIVE = ["queued", "running", "stopping"];

/** Live monitoring: polls persisted run state + events every 4 s (cursor-based). */
export function RunMonitor({ runId, campaignId }: { runId: string; campaignId: string }) {
  const [s, setS] = useState<Status | null>(null);
  const [events, setEvents] = useState<Ev[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const cursor = useRef(0);
  useEffect(() => {
    let stop = false;
    const tick = async () => {
      try {
        const d = await api<Status>(`/api/runs/${runId}?after=${cursor.current}`);
        if (stop) return;
        if (d.events.length) {
          cursor.current = d.events[d.events.length - 1].id;
          setEvents((prev) => [...d.events.slice().reverse(), ...prev].slice(0, 1000));
        }
        setS(d);
        setErr(null);
      } catch (e) {
        setErr((e as Error).message);
      }
    };
    tick();
    const t = setInterval(tick, 4000);
    return () => {
      stop = true;
      clearInterval(t);
    };
  }, [runId]);
  if (!s) return <div className="panel">Loading…</div>;
  const r = s.run;
  const active = ACTIVE.includes(r.status);
  const elapsed = r.started_at ? Math.round(((r.finished_at ? new Date(r.finished_at).getTime() : Date.now()) - new Date(r.started_at).getTime()) / 1000) : null;
  return (
    <>
      <div className="panel" data-testid="run-status">
        {err && <div className="alert warn">Live update failed: {err}</div>}
        {s.heartbeatStale && <div className="alert bad">Runner heartbeat stale ({Math.round(s.heartbeatAgeSeconds ?? 0)}s). The runner may have crashed or lost connectivity.</div>}
        {r.status === "queued" && <div className="alert warn">Waiting for the GitHub Actions runner to start and claim this run…</div>}
        <dl className="kv">
          <dt>Status</dt><dd><span data-testid="run-status-value"><StatusBadge status={r.status} /></span> {r.finish_reason && <span className="small muted">{r.finish_reason}</span>}</dd>
          <dt>Requested</dt><dd><Time iso={r.created_at} /></dd>
          <dt>Started</dt><dd><Time iso={r.started_at} /></dd>
          <dt>Elapsed</dt><dd>{elapsed !== null ? `${Math.floor(elapsed / 60)}m ${elapsed % 60}s` : "—"}</dd>
          <dt>Processing deadline</dt><dd><Time iso={r.deadline_at} /></dd>
          <dt>Last heartbeat</dt><dd><Time iso={r.heartbeat_at} /> {s.heartbeatAgeSeconds !== null && active && <span className="small muted">({Math.round(s.heartbeatAgeSeconds)}s ago)</span>}</dd>
          <dt>Finished</dt><dd><Time iso={r.finished_at} /></dd>
          {r.error && <><dt>Error</dt><dd>{r.error}</dd></>}
          <dt>Attempts</dt><dd>{Object.entries(s.attemptCounts).map(([k, v]) => <span key={k} style={{ marginRight: 6 }}><StatusBadge status={k} /> {v}</span>)}{Object.keys(s.attemptCounts).length === 0 && "—"}</dd>
          {r.github_run_url && <><dt>GitHub Actions</dt><dd><a href={r.github_run_url} target="_blank" rel="noreferrer">workflow run</a></dd></>}
        </dl>
        <div className="row" style={{ marginTop: 12 }}>
          {active && <ActionButton path={`/api/runs/${runId}/stop`} label="Stop gracefully" className="warn" testId="stop-run" confirm="Finish the current website, then stop taking new work?" />}
          {active && <ActionButton path={`/api/runs/${runId}/cancel`} label="Emergency cancel" className="danger" testId="cancel-run" confirm="Emergency cancel interrupts the runner immediately. Any in-flight submission becomes 'uncertain' and must be reconciled before another live run. Continue?" />}
          {active && s.heartbeatStale && <ActionButton path={`/api/runs/${runId}/mark-lost`} label="Mark runner lost" />}
          <a className="btn" href={`/api/exports/attempts?campaignId=${campaignId}&runId=${runId}`}>Download run CSV</a>
          <a className="btn" href={`/api/exports/runs/${runId}/evidence`}>Download evidence bundle (.zip)</a>
        </div>
      </div>
      <div className="panel">
        <h2>Events <span className="muted small">(persisted, newest first)</span></h2>
        <div className="events" data-testid="events">
          {events.length === 0 && <p className="muted">No events yet.</p>}
          {events.map((e) => (
            <div className="event" key={e.id} data-type={e.type}>
              <span><Time iso={e.created_at} /></span>
              <span><StatusBadge status={e.type} /></span>
              <span className="wrap">
                {e.domain && <strong>{e.domain}: </strong>}
                {e.message}
                {e.attempt_id && <> · <Link href={`/records/${e.attempt_id}`}>record</Link></>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
