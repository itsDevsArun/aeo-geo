import { z } from "zod";
import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { linkDomains } from "@/server/services/candidates";

export const POST = userRoute(async (req, user) => {
  const body = z.object({ primaryDomain: z.string().max(253), relatedDomain: z.string().max(253) }).parse(await readJson(req));
  return json(await linkDomains(body, user.email));
});
