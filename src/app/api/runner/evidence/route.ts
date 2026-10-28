import { z } from "zod";
import { HttpError, json } from "@/server/http";
import { runnerRoute } from "@/server/runner-route";
import { storeEvidence } from "@/server/services/work";
import { EVIDENCE_KINDS, MAX_EVIDENCE_BYTES } from "@/shared/constants";

/** Raw image upload; metadata travels in headers. */
export const POST = runnerRoute(async (req, r) => {
  const len = Number(req.headers.get("content-length") || 0);
  if (len > MAX_EVIDENCE_BYTES) throw new HttpError(413, "Screenshot too large");
  const meta = z
    .object({
      kind: z.enum(EVIDENCE_KINDS),
      candidateId: z.string().uuid().optional(),
      attemptId: z.string().uuid().optional(),
      pageUrl: z.string().max(2000).optional(),
      contentType: z.enum(["image/jpeg", "image/png"]),
    })
    .parse({
      kind: req.headers.get("x-evidence-kind"),
      candidateId: req.headers.get("x-candidate-id") || undefined,
      attemptId: req.headers.get("x-attempt-id") || undefined,
      pageUrl: req.headers.get("x-page-url") ? decodeURIComponent(req.headers.get("x-page-url")!) : undefined,
      contentType: req.headers.get("content-type"),
    });
  const bytes = new Uint8Array(await req.arrayBuffer());
  return json(await storeEvidence(r.run!, meta, bytes), 201);
});
