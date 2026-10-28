import { HttpError, json, readJson } from "@/server/http";
import { runnerRoute } from "@/server/runner-route";
import { ingestSearchResults } from "@/server/services/candidates";
import { SearchResultsRequest } from "@/shared/runner-api";

export const POST = runnerRoute(async (req, r) => {
  if (r.run!.mode !== "discovery") throw new HttpError(400, "Not a discovery run");
  return json(await ingestSearchResults(r.run!, SearchResultsRequest.parse(await readJson(req, 512 * 1024))));
});
