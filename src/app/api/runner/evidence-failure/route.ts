import { json, readJson } from "@/server/http";
import { runnerRoute } from "@/server/route";
import { recordEvidenceFailure } from "@/server/services/work";
import { EvidenceFailureRequest } from "@/shared/runner-api";

export const POST = runnerRoute(async (req, r) => json(await recordEvidenceFailure(r.run!, EvidenceFailureRequest.parse(await readJson(req)))));
