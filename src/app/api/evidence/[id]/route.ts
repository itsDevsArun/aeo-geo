import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { HttpError } from "@/server/http";
import { userRoute } from "@/server/route";
import { signedUrl } from "@/server/storage";

/** Authenticated evidence access: redirects to a 60-second signed URL of the private object. */
export const GET = userRoute(async (req, _user, p) => {
  if (!/^[0-9a-f-]{36}$/i.test(p.id)) throw new HttpError(400, "Invalid id");
  const [e] = await db()<{ object_path: string | null; filename: string; capture_error: string | null }[]>`
    select object_path, filename, capture_error from evidence where id = ${p.id} and deleted_at is null`;
  if (!e) throw new HttpError(404, "Evidence not found");
  if (!e.object_path) throw new HttpError(404, `No image stored${e.capture_error ? `: capture failed (${e.capture_error})` : ""}`);
  const download = new URL(req.url).searchParams.get("download") === "1" ? e.filename : undefined;
  const url = await signedUrl(e.object_path, 60, download);
  return NextResponse.redirect(url, { status: 302, headers: { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" } });
});
