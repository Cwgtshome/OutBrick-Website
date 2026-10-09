// Initial restore only: refuses to overwrite any populated destination.
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { getDatabase } from '@netlify/database';
const directory = process.argv[2];
if (!directory || !path.isAbsolute(directory) || !process.env.PG_RESTORE) throw new Error('Supply a private snapshot and PostgreSQL restore tool.');
const config = JSON.parse(await fs.readFile('.env.neon-production.json','utf8'));
if (config.project !== 'summer-boat-89820889') throw new Error('Unexpected destination project.');
const url = new URL(config.connectionString);
if (!url.hostname.endsWith('.neon.tech') || url.pathname !== '/outbrick') throw new Error('Unexpected destination database.');
const db = getDatabase({ connectionString: url.href });
try {
  const { rows } = await db.pool.query("SELECT count(*)::int AS count FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname='public' AND c.relkind IN ('r','p','v','m','S')");
  if (rows[0].count !== 0) throw new Error('Destination is not empty; no restore attempted.');
  await db.pool.query('CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public');
} finally { await db.pool.end(); }
const env = { ...process.env, PGHOST:url.hostname, PGPORT:url.port||'5432', PGDATABASE:url.pathname.slice(1), PGUSER:decodeURIComponent(url.username), PGPASSWORD:decodeURIComponent(url.password), PGSSLMODE:'verify-full', PGSSLROOTCERT:'/etc/ssl/cert.pem' };
async function run(command,args,logName) {
  const output=[]; const errors=[];
  const status=await new Promise((resolve,reject)=>{
    const child=spawn(command,args,{env,stdio:['ignore','pipe','pipe']});
    child.stdout.on('data',chunk=>output.push(chunk));child.stderr.on('data',chunk=>errors.push(chunk));child.on('error',reject);child.on('close',resolve);
  });
  await fs.writeFile(path.join(directory,logName),Buffer.concat(errors),{mode:0o600});
  if(status!==0)throw new Error('Restore command failed; private diagnostic retained.');
  return Buffer.concat(output);
}
const dump=path.join(directory,'database.dump');
const list=await run(process.env.PG_RESTORE,['--list',dump],'neon-list-private.log');
// Neon already supplies public. Retain all tables, data, indexes, constraints and counters.
const filtered=list.toString().split('\n').filter(line=>!/^\d+; .* SCHEMA - public /.test(line)).join('\n');
const listFile=path.join(directory,'neon-restore-list.txt');await fs.writeFile(listFile,filtered,{mode:0o600});
await run(process.env.PG_RESTORE,['--exit-on-error','--no-owner','--no-acl','--use-list',listFile,'--dbname','outbrick',dump],'neon-restore-private.log');
await run(process.execPath,['scripts/cloudflare/verify-restore.mjs',directory],'neon-verification-private.log');
console.log('Initial Neon restore completed.');
