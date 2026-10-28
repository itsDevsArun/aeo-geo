import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { deleteCandidateData } from "@/server/services/candidates";
import { removeObjects } from "@/server/storage";

/** Data deletion: removes the candidate, its inspections and its screenshots. */
export const DELETE = userRoute(async (_req, user, p) => {
  const paths = await deleteCandidateData(p.id, user.email);
  await removeObjects(paths);
  return json({ ok: true, objectsDeleted: paths.length });
}, { limitPerMinute: 30 });
