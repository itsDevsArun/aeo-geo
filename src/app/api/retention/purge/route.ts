import { z } from "zod";
import { audit } from "@/server/audit";
import { json, readJson } from "@/server/http";
import { userRoute } from "@/server/route";
import { evidenceToPurge, markEvidenceDeleted } from "@/server/services/reporting";
import { removeObjects } from "@/server/storage";

/** Delete screenshots older than the campaign's retention window (records keep a deleted marker). */
export const POST = userRoute(async (req, user) => {
  const { campaignId } = z.object({ campaignId: z.string().uuid() }).parse(await readJson(req));
  const rows = await evidenceToPurge(campaignId);
  await removeObjects(rows.map((r) => r.object_path).filter((p): p is string => !!p));
  await markEvidenceDeleted(rows.map((r) => r.id));
  await audit(user.email, "retention.purge", "campaign", campaignId, { deleted: rows.length });
  return json({ deleted: rows.length });
}, { limitPerMinute: 5 });
