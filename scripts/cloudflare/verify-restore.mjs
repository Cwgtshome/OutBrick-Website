// Compare a restored local database against the private snapshot, without printing rows.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { getDatabase } from '@netlify/database';
const directory = process.argv[2];
if (!directory || !path.isAbsolute(directory) || !process.env.RESTORE_DATABASE_URL || !process.env.PG_RESTORE) throw new Error('Supply a private snapshot directory and local restore connection/tool.');
const destination = new URL(process.env.RESTORE_DATABASE_URL).hostname.endsWith('.neon.tech') ? 'neon' : 'local';
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
const manifest = JSON.parse(await fs.readFile(path.join(directory, 'manifest.json')));
const db = getDatabase({ connectionString: process.env.RESTORE_DATABASE_URL });
const quote = s => '"' + s.replaceAll('"', '""') + '"';
let rows = 0;
try {
  await db.pool.query("SET timezone = 'UTC'");
  for (const table of manifest.tables) {
    const qualified = `${quote(table.schema)}.${quote(table.table)}`;
    const result = await db.pool.query(`SELECT row_to_json(t)::text AS data FROM ${qualified} t ORDER BY row_to_json(t)::text`);
    const bytes = Buffer.from(result.rows.map(row => row.data).join('\n') + (result.rows.length ? '\n' : ''));
    if (result.rows.length !== table.rows || hash(bytes) !== table.sha256) throw new Error(`Restore mismatch in ${qualified}`);
    rows += result.rows.length;
  }
  for (const file of [...manifest.files, ...manifest.stores.flatMap(store => store.manifest)]) {
    const bytes = await fs.readFile(path.join(directory, file.file));
    if (bytes.length !== file.bytes || hash(bytes) !== file.sha256) throw new Error('Backup file integrity mismatch.');
  }
  const dump = spawnSync(process.env.PG_RESTORE, ['--data-only', '--file=-', path.join(directory, 'database.dump')], { maxBuffer: 64 * 1024 * 1024 });
  if (dump.status !== 0) throw new Error('Cannot inspect dump sequences.');
  let sequences = 0;
  for (const match of dump.stdout.toString().matchAll(/SELECT pg_catalog\.setval\('([^']+)', (\d+), (true|false)\);/g)) {
    const qualified = match[1].split('.').map(quote).join('.');
    const { rows: state } = await db.pool.query(`SELECT last_value::text, is_called FROM ${qualified}`);
    if (state[0].last_value !== match[2] || state[0].is_called !== (match[3] === 'true')) throw new Error('Restored sequence differs from snapshot.');
    sequences++;
  }
  const result = { checkedAt: new Date().toISOString(), status: `${destination}-restore-verified`, tables: manifest.tables.length, rows, sequences, objects: manifest.stores.reduce((n,s) => n+s.objects,0), formSubmissions: manifest.formSubmissions, limitation: 'Snapshot verification; final write freeze and fresh export required before cutover.' };
  await fs.writeFile(path.join(directory, `${destination}-restore-verification.json`), JSON.stringify(result,null,2), { mode:0o600 });
  console.log(JSON.stringify(result));
} finally { await db.pool.end(); }
