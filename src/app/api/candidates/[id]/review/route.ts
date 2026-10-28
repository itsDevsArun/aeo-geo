import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { reviewCandidate } from "@/server/services/candidates";

export const POST = userRoute(async (req, user, p) => json(await reviewCandidate(p.id, await readJson(req), user.email)));
