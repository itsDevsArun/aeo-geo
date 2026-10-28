import { json, readJson } from "@/server/http";
import { runnerRoute } from "@/server/runner-route";
import { nextWork } from "@/server/services/work";
import { WorkRequest } from "@/shared/runner-api";

export const POST = runnerRoute(async (req, r) => {
  const body = WorkRequest.parse(await readJson(req));
  return json(await nextWork(r.run!, { skipSearch: !!body.skipSearch }));
});
