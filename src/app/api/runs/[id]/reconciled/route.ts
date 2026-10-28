import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { markRunReconciled } from "@/server/services/runs";

export const POST = userRoute(async (_req, user, p) => {
  await markRunReconciled(p.id, user.email);
  return json({ ok: true });
});
