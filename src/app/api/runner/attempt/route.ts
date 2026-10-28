import { json, readJson } from "@/server/http";
import { runnerRoute } from "@/server/route";
import { updateAttempt } from "@/server/services/work";
import { AttemptUpdateRequest } from "@/shared/runner-api";

export const POST = runnerRoute(async (req, r) => json(await updateAttempt(r.run!, AttemptUpdateRequest.parse(await readJson(req)))));
