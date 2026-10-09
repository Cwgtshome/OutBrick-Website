// The database handle and the few helpers every community function shares.
//
// Netlify Database (Postgres) is provisioned by Netlify itself on deploy; production uses the
// main database and every Deploy Preview a branch of it. Migrations live in
// netlify/database/migrations/ and run before a deploy goes live. Queries go through the
// `sql` tagged template, so every value is a parameter.

import { getDatabase } from '@netlify/database';
import { createHash, randomBytes } from 'node:crypto';

/** What the community code needs from a database: a tagged-template query and a transaction. */
export type Db = {
  sql: (strings: TemplateStringsArray, ...values: unknown[]) => Promise<Record<string, unknown>[]>;
  transaction: <T>(work: (q: Query) => Promise<T>) => Promise<T>;
};
export type Query = (text: string, params?: unknown[]) => Promise<Record<string, unknown>[]>;

let override: Db | null = null;
let netlify: ReturnType<typeof getDatabase> | null = null;

/** Tests swap in an in-process Postgres (PGlite); see netlify/community/test/. */
export function setDatabaseForTests(db: Db | null): void {
  override = db;
}

function live(): ReturnType<typeof getDatabase> {
  netlify ??= getDatabase();
  return netlify;
}

/**
 * Whether a database is reachable from here: tests' PGlite, or Netlify's connection string. Code
 * that works without one (the forms, which only add cases and applications as a bonus) checks
 * this first rather than waiting on a connection that can't exist.
 */
export function databaseAvailable(env: Record<string, string | undefined> = process.env): boolean {
  return Boolean(override) || Boolean(env.NETLIFY_DB_URL);
}

export const sql = (strings: TemplateStringsArray, ...values: unknown[]): Promise<Record<string, unknown>[]> =>
  override ? override.sql(strings, ...values) : (live().sql(strings, ...values) as unknown as Promise<Record<string, unknown>[]>);

/** Run `work` in one transaction on a pooled client. */
export async function transaction<T>(work: (q: Query) => Promise<T>): Promise<T> {
  if (override) return override.transaction(work);
  const client = await live().pool.connect();
  try {
    await client.query('BEGIN');
    const result = await work(async (text, params = []) => (await client.query(text, params)).rows as Record<string, unknown>[]);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

export const sha256 = (value: string) => createHash('sha256').update(value).digest('hex');
export const randomToken = (bytes = 32) => randomBytes(bytes).toString('base64url');

/** A salted hash of the caller's IP, for rate limits only; the address itself is never stored. */
export function ipHash(req: Request): string {
  const ip = req.headers.get('x-nf-client-connection-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  return sha256(`outbrick-community-ip:${process.env.SITE_ID ?? ''}:${ip}`).slice(0, 32);
}

/**
 * Count events for `key` in the last `windowSeconds`; if fewer than `max`, record one and return
 * true. The check and the insert run in one transaction under a per-key advisory lock, so a burst
 * of parallel requests is admitted one at a time and cannot all read the same below-limit count.
 * Old rows are pruned opportunistically.
 */
export async function rateAllow(key: string, max: number, windowSeconds: number): Promise<boolean> {
  const allowed = await transaction(async (q) => {
    await q(`SELECT pg_advisory_xact_lock(hashtextextended($1, 0))`, [`rate:${key}`]);
    const [row] = await q(`SELECT count(*)::int AS n FROM rate_events WHERE key = $1 AND at > now() - make_interval(secs => $2)`, [key, windowSeconds]);
    if (Number(row?.n ?? 0) >= max) return false;
    await q(`INSERT INTO rate_events (key) VALUES ($1)`, [key]);
    return true;
  });
  if (allowed && Math.random() < 0.02) await sql`DELETE FROM rate_events WHERE at < now() - interval '2 days'`;
  return allowed;
}

/**
 * URL slug for a thread title: lower-case letters and numbers of any script joined by hyphens
 * ("No-graphics mode" → "no-graphics-mode", "ボイスオーバーで遊ぶ" → "ボイスオーバーで遊ぶ",
 * "Ça déraille" → "ca-deraille"), at most 60 characters and 120 bytes, or 'thread' when nothing
 * is left. Accents are dropped from Latin letters only; other scripts keep their marks
 * (dakuten, Devanagari vowel signs). Links percent-encode it (threadPath).
 */
export function slugify(title: string): string {
  const words = title
    .normalize('NFKC')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/(\p{Script=Latin})\p{M}+/gu, '$1')
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, '-')
    .replace(/^[-\p{M}]+|-+$/gu, '');
  let chars = Array.from(words).slice(0, 60);
  while (chars.length && new TextEncoder().encode(chars.join('')).length > 120) chars = chars.slice(0, -1);
  const s = chars.join('').replace(/-+$/, '');
  return s || 'thread';
}
