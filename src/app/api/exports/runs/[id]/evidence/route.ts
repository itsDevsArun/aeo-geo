import JSZip from "jszip";
import { audit } from "@/server/audit";
import { db } from "@/server/db";
import { userRoute } from "@/server/route";
import { attemptsCsv } from "@/server/services/reporting";
import { getRun } from "@/server/services/runs";
import { downloadObject } from "@/server/storage";

export const maxDuration = 300;

/** Evidence bundle for one run: attempts CSV + manifest + every stored screenshot. */
export const GET = userRoute(async (_req, user, p) => {
  const run = await getRun(p.id);
  const evidence = await db()<{ id: string; kind: string; filename: string; object_path: string | null; sha256: string | null; page_url: string | null; capture_error: string | null; attempt_id: string | null; candidate_id: string | null; created_at: Date }[]>`
    select id, kind, filename, object_path, sha256, page_url, capture_error, attempt_id, candidate_id, created_at
    from evidence where run_id = ${run.id} and deleted_at is null order by created_at`;
  const zip = new JSZip();
  zip.file(`run-${run.id}_attempts.csv`, await attemptsCsv({ campaignId: run.campaign_id, runId: run.id }));
  const manifest = [];
  for (const e of evidence) {
    let included = false;
    let error = e.capture_error;
    if (e.object_path) {
      try {
        zip.file(`screenshots/${e.filename}`, await downloadObject(e.object_path));
        included = true;
      } catch (err) {
        error = err instanceof Error ? err.message : String(err);
      }
    }
    manifest.push({ ...e, object_path: undefined, included, error });
  }
  zip.file("manifest.json", JSON.stringify({ run: { id: run.id, mode: run.mode, status: run.status, started_at: run.started_at, finished_at: run.finished_at }, evidence: manifest }, null, 2));
  const body = await zip.generateAsync({ type: "uint8array", compression: "DEFLATE" });
  await audit(user.email, "export.evidence_bundle", "run", run.id, { files: manifest.length });
  return new Response(body as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="evidence_run-${run.id.slice(0, 8)}.zip"`,
      "Cache-Control": "no-store",
    },
  });
});
