/** Create the private evidence bucket in Supabase Storage (idempotent). */
import { createClient } from "@supabase/supabase-js";

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = process.env.EVIDENCE_BUCKET || "evidence";
  if (!url || !key) throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required");
  const sb = createClient(url, key, { auth: { persistSession: false } });
  const { data } = await sb.storage.getBucket(bucket);
  if (data) {
    if (data.public) throw new Error(`Bucket "${bucket}" is PUBLIC. Make it private in the Supabase dashboard.`);
    console.log(`bucket "${bucket}" exists and is private`);
    return;
  }
  const { error } = await sb.storage.createBucket(bucket, { public: false, fileSizeLimit: 5 * 1024 * 1024, allowedMimeTypes: ["image/jpeg", "image/png"] });
  if (error) throw new Error(error.message);
  console.log(`created private bucket "${bucket}"`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
