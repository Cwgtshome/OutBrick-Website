// Read-only backup. Credentials are read from ignored local files and CLI storage;
// they are never passed as command arguments or written into the backup manifest.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { getDatabase } from '@netlify/database';
import { getStore, listStores } from '@netlify/blobs';

const siteID = '8b73b763-21f4-405b-a284-a4605cc31d2f';
const output = process.argv[2];
if (!output || !path.isAbsolute(output)) throw new Error('Supply an absolute, private backup directory.');
await fs.mkdir(output, { recursive: true, mode: 0o700 });
const config = JSON.parse(await fs.readFile(`${process.env.HOME}/Library/Preferences/netlify/config.json`, 'utf8'));
const token = config.users[config.userId].auth.token ?? config.users[config.userId].auth;
if (typeof token !== 'string') throw new Error('Netlify CLI login is required.');
const database = JSON.parse(await fs.readFile('.env.netlify-database.json', 'utf8'));
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
async function save(relative, data) {
  const bytes = Buffer.isBuffer(data) ? data : Buffer.from(JSON.stringify(data, null, 2));
  const file = path.join(output, relative);
  await fs.mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  await fs.writeFile(file, bytes, { mode: 0o600, flag: 'wx' });
  return { file: relative, bytes: bytes.length, sha256: digest(bytes) };
}
async function api(route) {
  const response = await fetch(`https://api.netlify.com/api/v1${route}`, { headers: { authorization: `Bearer ${token}` } });
  if (!response.ok) throw new Error(`Netlify backup endpoint returned ${response.status}`);
  return response.json();
}
async function pages(route) {
  const rows = [];
  for (let page = 1; ; page++) {
    const next = await api(`${route}?page=${page}&per_page=100`);
    if (!Array.isArray(next)) throw new Error('Expected a paginated array.');
    rows.push(...next);
    if (next.length < 100) break;
  }
  return rows;
}
const receipt = { capturedAt: new Date().toISOString(), siteID, files: [], stores: [], tables: [], status: 'incomplete' };
const forms = await pages(`/sites/${siteID}/forms`);
receipt.files.push(await save('forms.json', forms));
const submissions = await pages(`/sites/${siteID}/submissions`);
receipt.formSubmissions = submissions.length;
receipt.files.push(await save('form-submissions.json', submissions));
// Include spam records as well; they remain private and are never processed as email.
const spam = await api(`/sites/${siteID}/submissions?state=spam&per_page=100&page=1`);
if (Array.isArray(spam) && spam.length) {
  const all = [...spam];
  for (let page = 2; all.length === (page - 1) * 100; page++) {
    const next = await api(`/sites/${siteID}/submissions?state=spam&per_page=100&page=${page}`);
    all.push(...next);
    if (next.length < 100) break;
  }
  receipt.files.push(await save('form-spam-submissions.json', all));
}
// Global inventories omit empty stores. Explicitly inspect both required stores so an
// empty upload store is evidence rather than an inference from its absence.
const storeNames = new Set(['community-uploads', 'community-signals']);
for await (const page of listStores({ siteID, token, paginate: true })) {
  for (const name of page.stores) storeNames.add(name);
}
for (const name of storeNames) {
    const store = getStore({ name, siteID, token, consistency: 'strong' });
    const manifest = [];
    for await (const batch of store.list({ paginate: true })) {
      for (const blob of batch.blobs) {
        const result = await store.getWithMetadata(blob.key, { type: 'arrayBuffer' });
        if (!result) throw new Error('Listed blob disappeared; repeat the backup after write freeze.');
        const file = `blobs/${digest(name)}/${digest(blob.key)}.bin`;
        const saved = await save(file, Buffer.from(result.data));
        manifest.push({ key: blob.key, metadata: result.metadata, etag: result.etag, ...saved });
      }
    }
    receipt.stores.push({ name, objects: manifest.length, manifest });
}
const db = getDatabase({ connectionString: database.database.connectionString });
const client = await db.pool.connect();
try {
  await client.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
  await client.query("SET LOCAL timezone = 'UTC'");
  const { rows: snapshots } = await client.query('SELECT pg_export_snapshot() AS snapshot');
  const { rows: extensions } = await client.query('SELECT extname, extversion, n.nspname AS schema FROM pg_extension e JOIN pg_namespace n ON n.oid=e.extnamespace ORDER BY extname');
  receipt.files.push(await save('extensions.json', extensions));
  const { rows: tables } = await client.query("SELECT schemaname, tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY schemaname, tablename");
  receipt.databaseScope = 'public application schema; Netlify-owned internal schema is not readable by the application role';
  for (const table of tables) {
    const quote = (s) => `"${s.replaceAll('"', '""')}"`;
    const qualified = `${quote(table.schemaname)}.${quote(table.tablename)}`;
    const { rows } = await client.query(`SELECT row_to_json(t)::text AS data FROM ${qualified} t ORDER BY row_to_json(t)::text`);
    const bytes = Buffer.from(rows.map((row) => row.data).join('\n') + (rows.length ? '\n' : ''));
    const saved = await save(`tables/${digest(qualified)}.jsonl`, bytes);
    receipt.tables.push({ schema: table.schemaname, table: table.tablename, rows: rows.length, ...saved });
  }
  if (!process.env.PG_DUMP) throw new Error('PG_DUMP must point to the official PostgreSQL backup tool.');
  const connection = new URL(database.database.connectionString);
  const env = { ...process.env, PGHOST: connection.hostname, PGPORT: connection.port || '5432', PGUSER: decodeURIComponent(connection.username), PGPASSWORD: decodeURIComponent(connection.password), PGDATABASE: connection.pathname.slice(1), PGSSLMODE: 'verify-full', PGSSLROOTCERT: '/etc/ssl/cert.pem' };
  const dumpPath = path.join(output, 'database.dump');
  const errors = [];
  const code = await new Promise((resolve, reject) => {
    const child = spawn(process.env.PG_DUMP, ['--format=custom', '--schema=public', '--no-owner', '--no-acl', '--snapshot', snapshots[0].snapshot, '--file', dumpPath], { env, stdio: ['ignore', 'ignore', 'pipe'] });
    child.stderr.on('data', (data) => errors.push(data));
    child.on('error', reject);
    child.on('close', resolve);
  });
  if (code !== 0) {
    // Do not print provider error text: it can contain the connection details.
    await fs.writeFile(path.join(output, 'dump-error-private.log'), Buffer.concat(errors), { mode: 0o600 });
    throw new Error(`pg_dump failed (${code}); private diagnostic retained.`);
  }
  await fs.chmod(dumpPath, 0o600);
  const dump = await fs.readFile(dumpPath);
  receipt.files.push({ file: 'database.dump', bytes: dump.length, sha256: digest(dump) });
  await client.query('COMMIT');
  receipt.status = 'exported-not-yet-restored';
} finally {
  await client.query('ROLLBACK').catch(() => {});
  client.release();
  await db.pool.end();
}
await save('manifest.json', receipt);
console.log(JSON.stringify({ status: receipt.status, tables: receipt.tables.length, rows: receipt.tables.reduce((n, t) => n + t.rows, 0), formSubmissions: receipt.formSubmissions, stores: receipt.stores.map(({name, objects}) => ({name, objects})) }));
