// A real Postgres in-process (PGlite, WASM) with every migration applied, wired into
// netlify/community/db.ts, so handlers can be tested end to end without Netlify.
//
//   import { freshDatabase, request } from '../test/harness.ts';
//   const db = await freshDatabase();          // new empty database per test file (or per test)
//   const res = await handler(request('POST', '/api/community/threads', { body, cookie }));

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PGlite } from '@electric-sql/pglite';
import { pg_trgm } from '@electric-sql/pglite/contrib/pg_trgm';
import { setDatabaseForTests, type Db } from '../db.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const migrations = path.join(root, 'netlify/database/migrations');

function toQuery(strings: TemplateStringsArray, values: unknown[]): [string, unknown[]] {
  let text = strings[0];
  for (let i = 0; i < values.length; i++) text += `$${i + 1}${strings[i + 1]}`;
  return [text, values.map((v) => (v !== null && typeof v === 'object' && !(v instanceof Date) ? JSON.stringify(v) : v))];
}

export async function freshDatabase(): Promise<PGlite> {
  const pg = new PGlite({ extensions: { pg_trgm } });
  for (const dir of fs.readdirSync(migrations).sort()) {
    await pg.exec(fs.readFileSync(path.join(migrations, dir, 'migration.sql'), 'utf8'));
  }
  const db: Db = {
    sql: async (strings, ...values) => (await pg.query(...toQuery(strings, values))).rows as Record<string, unknown>[],
    transaction: (work) => pg.transaction((tx) => work(async (text, params = []) => (await tx.query(text, params)).rows as Record<string, unknown>[])),
  };
  setDatabaseForTests(db);
  testDb = db;
  process.env.CONTEXT ??= 'dev';
  return pg;
}

/** The adapter freshDatabase() installed, for tests that wrap it (e.g. to count queries). */
export let testDb: Db | null = null;

/** Wrap the installed database so every query and transaction is counted. */
export function countQueries(): { count: () => number; reset: () => void } {
  const inner = testDb;
  if (!inner) throw new Error('call freshDatabase() first');
  let n = 0;
  setDatabaseForTests({
    sql: (strings, ...values) => {
      n++;
      return inner.sql(strings, ...values);
    },
    transaction: (work) => {
      n++;
      return inner.transaction(work);
    },
  });
  return { count: () => n, reset: () => (n = 0) };
}

/** A Request as the site would send it: same origin, optional JSON body and cookie. */
export function request(method: string, pathAndQuery: string, opts: { body?: unknown; cookie?: string; origin?: string | null; headers?: Record<string, string> } = {}): Request {
  const headers: Record<string, string> = { ...opts.headers };
  if (opts.origin !== null) headers.origin = opts.origin ?? 'https://www.outbrick.site';
  if (opts.cookie) headers.cookie = opts.cookie;
  if (opts.body !== undefined) headers['content-type'] = 'application/json';
  return new Request(`https://www.outbrick.site${pathAndQuery}`, { method, headers, body: opts.body === undefined ? undefined : JSON.stringify(opts.body) });
}

/** Sign a member straight in (no provider round trip) and return the cookie header to send. */
export async function signedInCookie(pg: PGlite, member: { displayName: string; email: string; role?: string }): Promise<{ id: number; cookie: string }> {
  const { rows } = await pg.query<{ id: number }>(
    `INSERT INTO members (display_name, name_chosen, email, email_verified, role) VALUES ($1, true, $2, true, $3) RETURNING id::int`,
    [member.displayName, member.email, member.role ?? 'member'],
  );
  const id = rows[0].id;
  const { startSession } = await import('../session.ts');
  const setCookie = await startSession(request('POST', '/'), id);
  return { id, cookie: setCookie.split(';')[0] };
}
