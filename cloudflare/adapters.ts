import { neon, neonConfig, Pool } from '@neondatabase/serverless';
import type { Db, Query } from '../netlify/community/db.ts';
import type { PlatformStore } from '../netlify/platform.ts';

/** Each request owns its pool; no open sockets cross an invocation boundary. */
export function workerDatabase(connectionString: string): { db: Db; close: () => Promise<void> } {
  neonConfig.webSocketConstructor = WebSocket;
  const query = neon(connectionString);
  const pool = new Pool({ connectionString, max: 2, connectionTimeoutMillis: 10000 });
  const db: Db = {
    sql: (strings, ...values) => query(strings, ...values) as Promise<Record<string, unknown>[]>,
    transaction: async <T>(work: (q: Query) => Promise<T>) => {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        const value = await work(async (text, params = []) => (await client.query(text, params)).rows as Record<string, unknown>[]);
        await client.query('COMMIT');
        return value;
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      } finally {
        client.release();
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
