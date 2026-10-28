import { z } from "zod";
import { HttpError, json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { startRun } from "@/server/services/runs";

const Body = z.object({
  campaignId: z.string().uuid(),
  mode: z.enum(["discovery", "dry_run", "live"]),
  confirm: z.string().max(50).optional(),
});

export const POST = userRoute(async (req, user) => {
  const body = Body.parse(await readJson(req));
  if (body.mode === "live" && body.confirm !== "START LIVE") {
    throw new HttpError(422, 'Type "START LIVE" to confirm a live outreach run.');
  }
  return json({ run: await startRun(body.campaignId, body.mode, user.email) }, 201);
}, { limitPerMinute: 15 });
