import { z } from "zod";
import { db } from "@/server/db";
import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { addSuppression } from "@/server/services/candidates";

export const GET = userRoute(async () => json({ suppressions: await db()`select * from suppressions order by created_at desc` }));

export const POST = userRoute(async (req, user) => {
  const body = z.object({ domain: z.string().max(253), reason: z.string().max(500).default("") }).parse(await readJson(req));
  return json(await addSuppression(body, user.email), 201);
});
