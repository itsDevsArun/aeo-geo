import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { updateAdapterMapping } from "@/server/services/candidates";

export const PATCH = userRoute(async (req, user, p) => json(await updateAdapterMapping(p.id, await readJson(req), user.email)));
