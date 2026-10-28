import "server-only";
import { env } from "./env";

/**
 * Minimal GitHub REST client. Uses a fine-grained token restricted to this
 * repository with "Actions: Read and write" only. Never sent to the browser.
 */
async function gh(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`https://api.github.com/repos/${env.githubRepository}${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${env.githubDispatchToken}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
    signal: AbortSignal.timeout(15000),
  });
}

export async function dispatchRunWorkflow(runId: string, campaignId: string): Promise<{ dispatched: boolean; note?: string }> {
  if (env.githubDispatchMode === "disabled") return { dispatched: false, note: "dispatch disabled (local test mode)" };
  const res = await gh(`/actions/workflows/${encodeURIComponent(env.githubWorkflowFile)}/dispatches`, {
    method: "POST",
    body: JSON.stringify({ ref: env.githubRef, inputs: { run_id: runId, campaign_id: campaignId } }),
  });
  if (res.status !== 204 && res.status !== 200) {
    const text = (await res.text()).slice(0, 300);
    throw new Error(`GitHub workflow dispatch failed (${res.status}): ${text}`);
  }
  return { dispatched: true };
}

/** Emergency stop: ask GitHub to cancel (or force-cancel) the workflow run. */
export async function cancelWorkflowRun(githubRunId: number, force = false): Promise<string> {
  if (env.githubDispatchMode === "disabled") return "skipped (local test mode)";
  const res = await gh(`/actions/runs/${githubRunId}/${force ? "force-cancel" : "cancel"}`, { method: "POST" });
  return res.status === 202 ? "cancel accepted" : `cancel returned ${res.status}`;
}
