import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { requestStop } from "@/server/services/runs";

export const POST = userRoute(async (_req, user, p) => json({ run: await requestStop(p.id, user.email) }));
