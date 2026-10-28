import { z } from "zod";
import { userRoute } from "@/server/route";
import { attemptsCsv } from "@/server/services/reporting";
import { audit } from "@/server/audit";

const Q = z.object({
  campaignId: z.string().uuid(),
  runId: z.string().uuid().optional(),
  status: z.string().regex(/^[a-z_]+$/).optional(),
  mode: z.enum(["dry_run", "live"]).optional(),
  q: z.string().max(100).optional(),
});

/** Attempts CSV: filtered (any query params), one run (runId) or full campaign (no filters). */
export const GET = userRoute(async (req, user) => {
  const sp = Object.fromEntries([...new URL(req.url).searchParams.entries()].filter(([, v]) => v !== ""));
  const f = Q.parse(sp);
  const csv = await attemptsCsv(f);
  await audit(user.email, "export.attempts_csv", "campaign", f.campaignId, { filters: f });
  const name = f.runId ? `attempts_run-${f.runId.slice(0, 8)}.csv` : Object.keys(sp).length > 1 ? "attempts_filtered.csv" : "attempts_full-campaign.csv";
  return new Response(csv, {
    headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="${name}"`, "Cache-Control": "no-store" },
  });
});
