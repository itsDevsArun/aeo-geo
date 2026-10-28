import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { emergencyCancel } from "@/server/services/runs";

export const POST = userRoute(async (_req, user, p) => json({ run: await emergencyCancel(p.id, user.email) }));
