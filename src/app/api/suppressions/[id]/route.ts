import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { removeSuppression } from "@/server/services/candidates";

export const DELETE = userRoute(async (_req, user, p) => {
  await removeSuppression(p.id, user.email);
  return json({ ok: true });
});
