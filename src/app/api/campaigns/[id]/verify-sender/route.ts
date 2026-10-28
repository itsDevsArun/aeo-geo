import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { verifySender } from "@/server/services/campaigns";

export const POST = userRoute(async (_req, user, p) => json({ campaign: await verifySender(p.id, user.email) }), { limitPerMinute: 10 });
