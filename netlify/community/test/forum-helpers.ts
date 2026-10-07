// Shared by the forum tests: call the real function the way the site does and read the JSON.
// Response bodies are typed loosely on purpose: the tests assert on their shape.
/* oxlint-disable typescript/no-explicit-any */

import type { PGlite } from '@electric-sql/pglite';
import handler from '../../functions/community-api.mts';
import { request, signedInCookie } from './harness.ts';

export type Reply = { status: number; body: any };

export async function api(method: string, path: string, opts: { body?: unknown; cookie?: string; origin?: string | null; headers?: Record<string, string> } = {}): Promise<Reply> {
  const res = await handler(request(method, `/api/community${path}`, opts));
  const text = await res.text();
  return { status: res.status, body: text ? JSON.parse(text) : null };
}

let counter = 0;

/** A signed-in member with a unique name; `verified: false` leaves the address unconfirmed. */
export async function member(pg: PGlite, opts: { name?: string; role?: string; verified?: boolean } = {}): Promise<{ id: number; cookie: string; name: string }> {
  counter++;
  const name = opts.name ?? `Member ${counter}`;
  const m = await signedInCookie(pg, { displayName: name, email: `m${counter}-${Date.now()}@example.com`, role: opts.role });
  if (opts.verified === false) await pg.query(`UPDATE members SET email_verified = false WHERE id = $1`, [m.id]);
  return { ...m, name };
}

export async function resetRates(pg: PGlite): Promise<void> {
  await pg.query(`DELETE FROM rate_events`);
}

export async function notificationsFor(pg: PGlite, memberId: number): Promise<{ kind: string; thread_id: number | null; post_id: number | null; data: any }[]> {
  const { rows } = await pg.query<{ kind: string; thread_id: number | null; post_id: number | null; data: any }>(
    `SELECT kind, thread_id::int AS thread_id, post_id::int AS post_id, data FROM notifications WHERE member_id = $1 ORDER BY id`,
    [memberId],
  );
  return rows;
}

export async function newThread(cookie: string, overrides: Record<string, unknown> = {}): Promise<any> {
  const res = await api('POST', '/threads', {
    cookie,
    body: { categorySlug: 'general', title: 'A thread about bricks', body: 'Hello there.', language: 'en', ...overrides },
  });
  if (res.status !== 201) throw new Error(`newThread failed: ${res.status} ${JSON.stringify(res.body)}`);
  return res.body.thread;
}
