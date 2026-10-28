const OK = ["running", "completed", "confirmed", "approved", "passed", "dry_run_ok", "inspected", "reconciled_sent"];
const WARN = ["queued", "stopping", "pending", "proposed", "unclear", "untested", "stopped", "reserved", "filled", "not_inspected", "no_form", "reconciled_not_sent"];
const BAD = ["failed", "cancelled", "lost", "rejected", "error", "uncertain", "needs_manual", "error_after_submit", "suppressed", "blocked", "dry_run_failed", "failed_before_submit", "submitting"];

export function StatusBadge({ status }: { status: string | null | undefined }) {
  const s = status ?? "—";
  const cls = OK.includes(s) ? "ok" : WARN.includes(s) ? "warn" : BAD.includes(s) ? "bad" : "info";
  return <span className={`badge ${cls}`}>{s.replace(/_/g, " ")}</span>;
}
