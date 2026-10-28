import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { getRun, markLost } from "@/server/services/runs";

export const POST = userRoute(async (_req, user, p) => {
  await markLost(p.id, user.email);
  return json({ run: await getRun(p.id) });
});
