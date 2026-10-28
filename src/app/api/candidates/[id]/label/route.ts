import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { setBusinessLabel } from "@/server/services/candidates";

export const POST = userRoute(async (req, user, p) => {
  await setBusinessLabel(p.id, await readJson(req), user.email);
  return json({ ok: true });
});
