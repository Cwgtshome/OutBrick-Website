import { catalogLocales } from '../lib/i18n/locales.ts';
import { neon, neonConfig, Pool } from '@neondatabase/serverless';
import type { Db, Query } from '../netlify/community/db.ts';
import type { PlatformStore } from '../netlify/platform.ts';

/** Each request owns its pool; no open sockets cross an invocation boundary. */
// The 31 languages added on 10 October 2026 need migration 20261010120000_all-site-languages,
// which widens the locale/language CHECK constraints. Until it is applied, a write that names one
// of them fails that check once; from then on this isolate stores the nearest of the first six
// languages instead (English for most), so no form, sign-in or post is ever lost to the order in
// which the code and the migration go live.
const nearestStored: Record<string, string> = { 'es-419': 'es', 'pt-PT': 'pt-BR', 'fr-CA': 'fr' };
const narrowValue = (value: unknown) => (typeof value === 'string' && (catalogLocales as readonly string[]).includes(value) ? nearestStored[value] ?? 'en' : value);
const isLocaleCheck = (error: unknown) => {
  const e = error as { code?: string; constraint?: string; message?: string } | null;
  return e?.code === '23514' && /_(?:locale|language)_check/.test(`${e.constraint ?? ''} ${e.message ?? ''}`);
};
let narrowLocales = false;

export function workerDatabase(connectionString: string): { db: Db; close: () => Promise<void> } {
  neonConfig.webSocketConstructor = WebSocket;
  const query = neon(connectionString);
  const pool = new Pool({ connectionString, max: 2, connectionTimeoutMillis: 10000 });
  const runTransaction = async <T>(work: (q: Query) => Promise<T>, narrow: boolean): Promise<T> => {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const value = await work(async (text, params = []) => (await client.query(text, narrow ? params.map(narrowValue) : params)).rows as Record<string, unknown>[]);
      await client.query('COMMIT');
      return value;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  };
  const db: Db = {
    sql: async (strings, ...values) => {
      try {
        return (await query(strings, ...(narrowLocales ? values.map(narrowValue) : values))) as Record<string, unknown>[];
      } catch (error) {
        if (narrowLocales || !isLocaleCheck(error)) throw error;
        narrowLocales = true;
        return (await query(strings, ...values.map(narrowValue))) as Record<string, unknown>[];
      }
    },
    transaction: async <T>(work: (q: Query) => Promise<T>) => {
      try {
        return await runTransaction(work, narrowLocales);
      } catch (error) {
        if (narrowLocales || !isLocaleCheck(error)) throw error;
        narrowLocales = true;
        return runTransaction(work, true);
      }
    },
  };
  return { db, close: () => pool.end() };
}

// R2 is strongly consistent. Scheduler tokens must not use eventually consistent KV.
export function r2Store(bucket: R2Bucket): PlatformStore {
  async function get(key: string, options: { type: 'arrayBuffer' }): Promise<ArrayBuffer | null>;
  async function get(key: string, options: { type: 'json' }): Promise<unknown>;
  async function get(key: string, options: { type: 'text' }): Promise<string | null>;
  async function get(key: string, options: { type: 'arrayBuffer' | 'json' | 'text' }): Promise<unknown> {
    const object = await bucket.get(key);
    if (!object) return null;
    if (options.type === 'arrayBuffer') return object.arrayBuffer();
    if (options.type === 'json') return object.json();
    return object.text();
  }
  return {
    get,
    set: (key, value) => bucket.put(key, value),
    setJSON: (key, value) => bucket.put(key, JSON.stringify(value)),
    delete: (key) => bucket.delete(key),
  };
}
