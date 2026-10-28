import "server-only";
import { db, type Sql } from "./db";

export async function audit(
  actor: string,
  action: string,
  entityType: string,
  entityId: string | null,
  details: Record<string, unknown> = {},
  tx?: Sql,
): Promise<void> {
  const sql = tx ?? db();
  await sql`insert into audit_events (actor, action, entity_type, entity_id, details)
    values (${actor}, ${action}, ${entityType}, ${entityId}, ${sql.json(details as never)})`;
}

export async function runEvent(
  e: {
    runId: string;
    campaignId: string;
    type: string;
    message?: string;
    candidateId?: string | null;
    attemptId?: string | null;
    data?: Record<string, unknown>;
  },
  tx?: Sql,
): Promise<void> {
  const sql = tx ?? db();
  await sql`insert into run_events (run_id, campaign_id, candidate_id, attempt_id, type, message, data)
    values (${e.runId}, ${e.campaignId}, ${e.candidateId ?? null}, ${e.attemptId ?? null}, ${e.type},
            ${(e.message ?? "").slice(0, 1000)}, ${sql.json((e.data ?? {}) as never)})`;
}
