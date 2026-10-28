import type { ClaimResponse, HeartbeatResponse, WorkItem } from "../src/shared/runner-api";

export class ApiError extends Error {
  constructor(public status: number, message: string, public details?: unknown) {
    super(message);
  }
}

/** HTTP client for the dashboard runner API. */
export class RunnerApi {
  private runToken = "";
  constructor(private baseUrl: string, private secret: string, private runId: string) {}

  private headers(extra: Record<string, string> = {}): Record<string, string> {
    return {
      Authorization: `Bearer ${this.secret}`,
      "X-Run-Id": this.runId,
      ...(this.runToken ? { "X-Run-Token": this.runToken } : {}),
      ...extra,
    };
  }

  async post<T>(path: string, body: unknown, opts: { retries?: number } = {}): Promise<T> {
    const retries = opts.retries ?? 3;
    let lastErr: unknown;
    for (let i = 0; i <= retries; i++) {
      try {
        const res = await fetch(`${this.baseUrl}/api/runner/${path}`, {
          method: "POST",
          headers: this.headers({ "Content-Type": "application/json" }),
          body: JSON.stringify({ runId: this.runId, ...(body as object) }),
          signal: AbortSignal.timeout(30000),
        });
        const data = (await res.json().catch(() => ({}))) as { error?: string; details?: unknown };
        if (res.ok) return data as T;
        if (res.status >= 500 && i < retries) {
          lastErr = new ApiError(res.status, data.error ?? "server error");
        } else throw new ApiError(res.status, data.error ?? `HTTP ${res.status}`, data.details);
      } catch (e) {
        if (e instanceof ApiError && e.status < 500) throw e;
        lastErr = e;
        if (i === retries) break;
      }
      await new Promise((r) => setTimeout(r, 1000 * 2 ** i));
    }
    throw lastErr instanceof Error ? lastErr : new Error(String(lastErr));
  }

  async claim(gh: { githubRunId?: number; githubRunUrl?: string }): Promise<ClaimResponse> {
    const r = await this.post<ClaimResponse>("claim", gh, { retries: 2 });
    this.runToken = r.runToken;
    return r;
  }
  heartbeat(): Promise<HeartbeatResponse> {
    return this.post("heartbeat", {}, { retries: 1 });
  }
  work(): Promise<WorkItem> {
    return this.post("work", {});
  }
  event(type: string, message: string, extra: { candidateId?: string; attemptId?: string; data?: Record<string, unknown> } = {}) {
    return this.post("events", { events: [{ type, message: message.slice(0, 1000), ...extra }] }).catch(() => undefined);
  }
  searchResults(body: unknown) {
    return this.post<{ added: number; exhausted: boolean }>("search-results", body);
  }
  inspection(body: unknown) {
    return this.post<{ adapterStatus: string | null }>("inspection", body);
  }
  /** The "submitting" call is the submit gate; it is never retried. */
  attempt(body: { attemptId: string; status: string; [k: string]: unknown }) {
    return this.post<{ status: string }>("attempt", body, { retries: body.status === "submitting" ? 0 : 3 });
  }
  finish(reason: string, error?: string) {
    return this.post<{ status: string }>("finish", { reason, error: error?.slice(0, 2000) });
  }

  async uploadEvidence(meta: { kind: string; candidateId?: string; attemptId?: string; pageUrl?: string }, bytes: Buffer, contentType: string): Promise<string | null> {
    for (let i = 0; i < 3; i++) {
      try {
        const res = await fetch(`${this.baseUrl}/api/runner/evidence`, {
          method: "POST",
          headers: this.headers({
            "Content-Type": contentType,
            "X-Evidence-Kind": meta.kind,
            ...(meta.candidateId ? { "X-Candidate-Id": meta.candidateId } : {}),
            ...(meta.attemptId ? { "X-Attempt-Id": meta.attemptId } : {}),
            ...(meta.pageUrl ? { "X-Page-Url": encodeURIComponent(meta.pageUrl.slice(0, 1500)) } : {}),
          }),
          body: new Uint8Array(bytes),
          signal: AbortSignal.timeout(60000),
        });
        if (res.ok) return ((await res.json()) as { evidenceId: string }).evidenceId;
        if (res.status < 500) throw new ApiError(res.status, ((await res.json().catch(() => ({}))) as { error?: string }).error ?? "upload rejected");
      } catch (e) {
        if (e instanceof ApiError || i === 2) {
          await this.post("evidence-failure", { kind: meta.kind, candidateId: meta.candidateId, attemptId: meta.attemptId, pageUrl: meta.pageUrl, error: `Upload failed: ${e instanceof Error ? e.message : e}` }).catch(() => undefined);
          return null;
        }
      }
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
    return null;
  }

  evidenceFailure(body: { kind: string; candidateId?: string; attemptId?: string; pageUrl?: string; error: string }) {
    return this.post("evidence-failure", body).catch(() => undefined);
  }
}
