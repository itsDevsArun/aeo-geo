import "server-only";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { db } from "./db";
import { env } from "./env";
import { HttpError } from "./http";

export interface RunnerContext {
  runId: string | null;
  run: RunRow | null;
}

export interface RunRow {
  id: string;
  campaign_id: string;
  mode: "discovery" | "dry_run" | "live";
  status: string;
  deadline_at: Date | null;
  stop_requested_at: Date | null;
  cancel_requested_at: Date | null;
  budget_minutes: number;
}

export function sha256(s: string): string {
  return createHash("sha256").update(s).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ha = Buffer.from(sha256(a), "hex");
  const hb = Buffer.from(sha256(b), "hex");
  return timingSafeEqual(ha, hb);
}

export function newRunToken(): string {
  return randomBytes(32).toString("base64url");
}

/**
 * Workflow-to-backend authentication:
 *  1. `Authorization: Bearer <RUNNER_API_SECRET>` (GitHub Actions secret, also set in the dashboard host).
 *  2. After claiming a run, every call must carry `X-Run-Token`, a random per-run token whose hash
 *     is stored on the run. Only the runner that claimed a run can act on it.
 */
export async function authenticateRunner(req: Request, opts: { requireRunToken: boolean }): Promise<RunnerContext> {
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token || !safeEqual(token, env.runnerApiSecret)) throw new HttpError(401, "Invalid runner credentials");
  if (!opts.requireRunToken) return { runId: null, run: null };
  const runId = req.headers.get("x-run-id") ?? "";
  const runToken = req.headers.get("x-run-token") ?? "";
  if (!/^[0-9a-f-]{36}$/i.test(runId) || !runToken) throw new HttpError(401, "Missing run credentials");
  const [run] = await db()<(RunRow & { runner_token_hash: string | null })[]>`
    select id, campaign_id, mode, status, deadline_at, stop_requested_at, cancel_requested_at, budget_minutes, runner_token_hash
    from runs where id = ${runId}`;
  if (!run || !run.runner_token_hash || !safeEqual(sha256(runToken), run.runner_token_hash)) {
    throw new HttpError(401, "Invalid run token");
  }
  const { runner_token_hash: _omit, ...rest } = run;
  return { runId, run: rest };
}
