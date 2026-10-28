import { z } from "zod";
import { audit } from "@/server/audit";
import { userRoute } from "@/server/route";
import { candidatesCsv } from "@/server/services/reporting";

export const GET = userRoute(async (req, user) => {
  const sp = new URL(req.url).searchParams;
  const campaignId = z.string().uuid().parse(sp.get("campaignId"));
  const status = z.enum(["pending", "approved", "rejected", "suppressed", "filtered"]).optional().parse(sp.get("status") || undefined);
  const csv = await candidatesCsv(campaignId, status);
  await audit(user.email, "export.candidates_csv", "campaign", campaignId, { status });
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="candidates${status ? `_${status}` : ""}.csv"`,
      "Cache-Control": "no-store",
    },
  });
});
