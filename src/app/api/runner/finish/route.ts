import { json, readJson } from "@/server/http";
import { runnerRoute } from "@/server/runner-route";
import { finishRun } from "@/server/services/runs";
import { FinishRequest } from "@/shared/runner-api";

export const POST = runnerRoute(async (req, r) => {
  const body = FinishRequest.parse(await readJson(req));
  const run = await finishRun(r.run!, body.reason, body.error);
  return json({ status: run.status });
});
