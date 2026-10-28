"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api, Time } from "../ui/client";
import { StatusBadge } from "../ui/badge";
import type { Overview } from "@/server/services/reporting";

const STAT_LABELS: [string, string][] = [
  ["discovered", "Websites discovered"],
  ["pending_review", "Pending review"],
  ["approved_queue", "Approved live queue"],
  ["forms_inspected", "Forms inspected"],
  ["dry_run_attempts", "Dry-run checks"],
  ["submission_attempts", "Live submission attempts"],
  ["confirmation_observed", "Confirmation observed"],
  ["unclear_attempts", "Unclear attempts"],
  ["errors", "Errors"],
  ["manual_review", "CAPTCHA / manual review"],
  ["duplicates_prevented", "Duplicates prevented"],
  ["uncertain", "Awaiting reconciliation"],
];

function fmtDuration(s: number | null) {
  if (s === null) return "—";
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return `${h}h ${m}m ${s % 60}s`;
}

const statusBadge = (s: string) => <StatusBadge status={s} />;

/** Polls persisted state every 5 seconds. */
export function OverviewLive({ initial }: { initial: Overview }) {
  const [data, setData] = useState<Overview>(initial);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    const t = setInterval(async () => {
      try {
        setData(await api<Overview>(`/api/overview?campaignId=${initial.campaign?.id ?? ""}`));
        setErr(null);
      } catch (e) {
        setErr((e as Error).message);
      }
    }, 5000);
    return () => clearInterval(t);
  }, [initial.campaign?.id]);
  const run = data.run;
  return (
    <>
      <div className="panel">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <h2 style={{ marginBottom: 4 }}>{data.campaign?.name}</h2>
            <div className="muted small">
              {data.campaign?.industry || "industry not set"} · {data.campaign?.city_region || "city not set"} · {data.campaign?.country || "country not set"} ·{" "}
              live mode {data.campaign?.live_enabled ? <span className="badge bad">ENABLED</span> : <span className="badge ok">off (dry-run default)</span>}
            </div>
          </div>
          <Link className="btn" href="/runs">Run controls →</Link>
        </div>
      </div>
      <div className="panel" data-testid="run-panel">
        <h2>Current / last run</h2>
        {err && <div className="alert warn">Live update failed: {err}</div>}
        {!run ? (
          <p className="muted">No runs yet.</p>
        ) : (
          <>
            {run.heartbeat_stale && <div className="alert bad">Runner heartbeat is stale ({run.heartbeat_age_seconds}s). The runner may be lost; it will be closed automatically after the lost-runner timeout.</div>}
            {run.needs_reconciliation && <div className="alert bad">This run needs reconciliation before another live run. <Link href={`/runs/${run.id}`}>Reconcile</Link></div>}
            <dl className="kv">
              <dt>Run</dt>
              <dd>
                <Link href={`/runs/${run.id}`}>{run.id.slice(0, 8)}</Link> · {run.mode.replace("_", " ")} · {statusBadge(run.status)}
                {run.finish_reason ? <span className="muted small"> ({run.finish_reason})</span> : null}
              </dd>
              <dt>Elapsed</dt>
              <dd>{fmtDuration(run.elapsed_seconds)}</dd>
              <dt>Processing deadline</dt>
              <dd><Time iso={run.deadline_at as unknown as string} /></dd>
              <dt>Runner heartbeat</dt>
              <dd>
                <Time iso={run.heartbeat_at as unknown as string} /> {run.heartbeat_age_seconds !== null && <span className="muted small">({run.heartbeat_age_seconds}s ago)</span>}
              </dd>
              {run.github_run_url && (
                <>
                  <dt>GitHub Actions</dt>
                  <dd><a href={run.github_run_url} target="_blank" rel="noreferrer">workflow run</a></dd>
                </>
              )}
            </dl>
          </>
        )}
      </div>
      <div className="grid" data-testid="stats">
        {STAT_LABELS.map(([k, l]) => (
          <div className="stat" key={k} data-stat={k}>
            <div className="v">{data.stats[k] ?? 0}</div>
            <div className="l">{l}</div>
          </div>
        ))}
      </div>
      <p className="muted small" style={{ marginTop: 12 }}>
        “Confirmation observed” means the website showed a new success message after the attempt. It does not prove delivery, reading or a lead. Updated <Time iso={data.serverTime} />
      </p>
    </>
  );
}
