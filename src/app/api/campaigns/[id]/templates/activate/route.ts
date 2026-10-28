import { z } from "zod";
import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { setActiveTemplateVersion } from "@/server/services/templates";

export const POST = userRoute(async (req, user, p) => {
  const { versionId } = z.object({ versionId: z.string().uuid() }).parse(await readJson(req));
  await setActiveTemplateVersion(p.id, versionId, user.email);
  return json({ ok: true });
});
