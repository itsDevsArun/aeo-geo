import "server-only";
import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import { dirname, join, normalize, sep } from "node:path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env } from "./env";

/**
 * Evidence storage. Two drivers:
 *  - "fs" (GitHub-only mode): files under EVIDENCE_DIR, which lives in the private
 *    `outreach-state` branch worktree of the private repository.
 *  - "supabase" (optional hosted dashboard mode): private Supabase Storage bucket.
 */
const driver = () => (process.env.EVIDENCE_STORAGE === "fs" ? "fs" : "supabase");

function fsPath(objectPath: string): string {
  const root = process.env.EVIDENCE_DIR;
  if (!root) throw new Error("EVIDENCE_DIR is required when EVIDENCE_STORAGE=fs");
  const p = normalize(join(root, objectPath));
  if (!p.startsWith(normalize(root) + sep)) throw new Error("Invalid evidence path");
  return p;
}

let client: SupabaseClient | null = null;

/** Service-role client used ONLY on the server for private evidence storage. */
function admin(): SupabaseClient {
  if (!client) {
    client = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

export async function uploadObject(path: string, bytes: Uint8Array, contentType: string): Promise<void> {
  if (driver() === "fs") {
    const p = fsPath(path);
    await mkdir(dirname(p), { recursive: true });
    await writeFile(p, bytes, { flag: "wx" });
    return;
  }
  const { error } = await admin().storage.from(env.evidenceBucket).upload(path, bytes, { contentType, upsert: false });
  if (error) throw new Error(`Storage upload failed: ${error.message}`);
}

/** Short-lived signed link for authenticated dashboard viewing (hosted mode only). */
export async function signedUrl(path: string, seconds = 60, download?: string): Promise<string> {
  if (driver() === "fs") throw new Error("Signed URLs are not available in GitHub-only mode");
  const { data, error } = await admin()
    .storage.from(env.evidenceBucket)
    .createSignedUrl(path, seconds, download ? { download } : undefined);
  if (error || !data?.signedUrl) throw new Error(`Could not sign evidence URL: ${error?.message ?? "unknown"}`);
  return data.signedUrl;
}

export async function downloadObject(path: string): Promise<Uint8Array> {
  if (driver() === "fs") return new Uint8Array(await readFile(fsPath(path)));
  const { data, error } = await admin().storage.from(env.evidenceBucket).download(path);
  if (error || !data) throw new Error(`Storage download failed: ${error?.message ?? "unknown"}`);
  return new Uint8Array(await data.arrayBuffer());
}

export async function removeObjects(paths: string[]): Promise<void> {
  if (driver() === "fs") {
    for (const p of paths) await unlink(fsPath(p)).catch((e) => { if (e.code !== "ENOENT") throw e; });
    return;
  }
  for (let i = 0; i < paths.length; i += 100) {
    const { error } = await admin().storage.from(env.evidenceBucket).remove(paths.slice(i, i + 100));
    if (error) throw new Error(`Storage delete failed: ${error.message}`);
  }
}

export async function ensureBucket(): Promise<"created" | "exists"> {
  const sb = admin();
  const { data } = await sb.storage.getBucket(env.evidenceBucket);
  if (data) {
    if (data.public) throw new Error(`Bucket ${env.evidenceBucket} is public; make it private.`);
    return "exists";
  }
  const { error } = await sb.storage.createBucket(env.evidenceBucket, {
    public: false,
    fileSizeLimit: 5 * 1024 * 1024,
    allowedMimeTypes: ["image/jpeg", "image/png"],
  });
  if (error) throw new Error(`Bucket creation failed: ${error.message}`);
  return "created";
}
