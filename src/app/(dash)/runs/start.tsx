"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api, ErrorBox } from "../../ui/client";

export function StartRunControls({ campaignId, disabled, liveEnabled, eligibleLive }: { campaignId: string; disabled: boolean; liveEnabled: boolean; eligibleLive: number }) {
  const router = useRouter();
  const [error, setError] = useState<Error | null>(null);
  const [busy, setBusy] = useState(false);
  const start = async (mode: "discovery" | "dry_run" | "live") => {
    setError(null);
    let confirm: string | undefined;
    if (mode === "live") {
      const v = window.prompt(`Start a LIVE run? It will submit contact forms for up to the per-run limit of approved, tested targets (${eligibleLive} eligible now). Type START LIVE to confirm.`);
      if (v !== "START LIVE") return;
      confirm = v;
    }
    setBusy(true);
    try {
      const r = await api<{ run: { id: string } }>("/api/runs", "POST", { campaignId, mode, confirm });
      router.push(`/runs/${r.run.id}`);
    } catch (e) {
      setError(e as Error);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div>
      <div className="row">
        <button className="primary" disabled={disabled || busy} onClick={() => start("discovery")} data-testid="start-discovery">Start discovery</button>
        <button disabled={disabled || busy} onClick={() => start("dry_run")} data-testid="start-dry-run">Start dry run (no submissions)</button>
        <button className="danger" disabled={disabled || busy || !liveEnabled} onClick={() => start("live")} data-testid="start-live">Start approved live run</button>
      </div>
      <p className="small muted">
        Discovery searches and inspects contact pages (never submits). Dry run verifies approved form mappings and drafts messages (never submits; only types into your listed test domains).
        Live run {liveEnabled ? `submits to approved targets with tested adapters (${eligibleLive} eligible).` : "is disabled — enable it in Campaign settings."}
      </p>
      <ErrorBox error={error} />
    </div>
  );
}
