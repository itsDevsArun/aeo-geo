import { z } from "zod";
import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { reconcileAttempt } from "@/server/services/runs";

export const POST = userRoute(async (req, user, p) => {
  const body = z.object({ outcome: z.enum(["sent", "not_sent"]), notes: z.string().max(1000).default("") }).parse(await readJson(req));
  return json(await reconcileAttempt(p.id, body.outcome, body.notes, user.email));
});
