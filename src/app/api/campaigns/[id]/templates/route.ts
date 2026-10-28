import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { createTemplateVersion, listTemplateVersions } from "@/server/services/templates";

export const GET = userRoute(async (_req, _user, p) => json({ versions: await listTemplateVersions(p.id) }));

export const POST = userRoute(async (req, user, p) => json({ version: await createTemplateVersion(p.id, await readJson(req), user.email) }, 201), {
  limitPerMinute: 20,
});
