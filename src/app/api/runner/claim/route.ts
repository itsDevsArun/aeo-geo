import { json, readJson } from "@/server/http";
import { runnerRoute } from "@/server/route";
import { claimRun } from "@/server/services/runs";
import { ClaimRequest } from "@/shared/runner-api";

export const POST = runnerRoute(async (req) => {
  const body = ClaimRequest.parse(await readJson(req));
  return json(await claimRun(body.runId, { githubRunId: body.githubRunId, githubRunUrl: body.githubRunUrl }));
}, { claim: true });
