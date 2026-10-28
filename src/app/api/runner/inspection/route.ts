import { json, readJson } from "@/server/http";
import { runnerRoute } from "@/server/runner-route";
import { recordInspection } from "@/server/services/candidates";
import { InspectionRequest } from "@/shared/runner-api";

export const POST = runnerRoute(async (req, r) => json(await recordInspection(r.run!, InspectionRequest.parse(await readJson(req, 512 * 1024)))));
