import "server-only";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown,
  ) {
    super(message);
  }
}

export function json(data: unknown, status = 200, headers: Record<string, string> = {}) {
  return NextResponse.json(data, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

export function errorResponse(e: unknown) {
  if (e instanceof HttpError) return json({ error: e.message, details: e.details }, e.status);
  if (e instanceof ZodError) return json({ error: "Invalid request", details: e.issues.map((i) => `${i.path.join(".")}: ${i.message}`) }, 400);
  if (e instanceof SyntaxError) return json({ error: "Malformed JSON" }, 400);
  console.error("Unhandled API error", e instanceof Error ? e.message : e);
  return json({ error: "Internal server error" }, 500);
}

export async function readJson(req: Request, maxBytes = 256 * 1024): Promise<unknown> {
  const text = await req.text();
  if (text.length > maxBytes) throw new HttpError(413, "Request body too large");
  return text ? JSON.parse(text) : {};
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0] : req.headers.get("x-real-ip") ?? "unknown").trim().slice(0, 64);
}
