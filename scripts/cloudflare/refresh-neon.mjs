// Final refresh: refuse an active source or any destination drift; replace atomically.
// Rehearsals use only the named local disposable database, never Neon.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';

const [baselineDir, finalDir, mode] = process.argv.slice(2);
const rehearsal = mode === '--rehearse';
const acceptedSnapshot = mode === '--accepted-paused-snapshot';
if (![baselineDir, finalDir].every(p => p && path.isAbsolute(p)) ||
    !process.env.PG_DUMP || !process.env.PG_RESTORE || !process.env.PSQL ||
    (mode && !rehearsal && !acceptedSnapshot)) throw new Error('Supply private baseline/final snapshots and PostgreSQL tools.');
const siteID = '8b73b763-21f4-405b-a284-a4605cc31d2f';
const read = async file => JSON.parse(await fs.readFile(file, 'utf8'));
const baseline = await read(path.join(baselineDir, 'manifest.json'));
const final = await read(path.join(finalDir, 'manifest.json'));
const proof = await read(path.join(finalDir, 'local-restore-verification.json'));
if (final.siteID !== siteID || baseline.siteID !== siteID ||
    proof.status !== 'local-restore-verified' || proof.tables !== final.tables.length ||
    proof.rows !== final.tables.reduce((n,t) => n+t.rows,0)) throw new Error('Verified final snapshot required.');
for (const file of [...final.files, ...final.stores.flatMap(s => s.manifest)]) {
  const bytes = await fs.readFile(path.join(finalDir, file.file));
  if (bytes.length !== file.bytes || createHash('sha256').update(bytes).digest('hex') !== file.sha256)
    throw new Error('Final snapshot integrity mismatch.');
}
let connection;
if (rehearsal) {
  connection = new URL(process.env.REHEARSAL_DATABASE_URL);
  if (connection.hostname !== 'localhost' || connection.pathname !== '/outbrick_cutover_rehearsal')
    throw new Error('Rehearsal requires the named local disposable database.');
} else {
  const freeze = await read(process.env.SOURCE_FREEZE_RECEIPT);
  if (freeze.siteID !== siteID || freeze.status !== 'source-disabled' ||
      !Number.isFinite(Date.parse(final.capturedAt)) ||
      (!acceptedSnapshot && Date.parse(final.capturedAt) < Date.parse(freeze.disabledAt) + 15*60*1000) ||
      !Number.isFinite(Date.parse(freeze.disabledAt))) throw new Error('Final export must follow verified freeze and 15-minute drain.');
  if (acceptedSnapshot) {
    const decision = await read(process.env.ACCEPTED_SNAPSHOT_RECEIPT);
    const manifestHash = createHash('sha256').update(await fs.readFile(path.join(finalDir,'manifest.json'))).digest('hex');
    if (decision.siteID !== siteID || decision.status !== 'owner-accepted-paused-source-snapshot' ||
        decision.manifestSha256 !== manifestHash || decision.capturedAt !== final.capturedAt ||
        decision.acceptsUnverifiedLaterWrites !== true)
      throw new Error('Explicit owner decision matching this backup is required.');
  }
  const config = await read(`${process.env.HOME}/Library/Preferences/netlify/config.json`);
  const auth = config.users[config.userId].auth;
  const token = auth.token ?? auth;
  const response = await fetch(`https://api.netlify.com/api/v1/sites/${siteID}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Cannot verify source freeze.');
  const source = await response.json();
  if (source.id !== siteID || source.disabled !== true) throw new Error('Source is active; no destination mutation attempted.');
  if (acceptedSnapshot && source.disabled_reason !== 'Account usage exceeded for credits')
    throw new Error('Accepted fallback applies only to the recorded source credit pause.');
  const configDestination = await read('.env.neon-production.json');
  connection = new URL(configDestination.connectionString);
  if (configDestination.project !== 'summer-boat-89820889' ||
      configDestination.branch !== 'br-polished-fire-b7sc0cpu' ||
      !connection.hostname.endsWith('.neon.tech') || connection.pathname !== '/outbrick')
    throw new Error('Unexpected production destination.');
}
const env = { ...process.env, PGHOST: rehearsal ? process.env.REHEARSAL_SOCKET : connection.hostname,
  PGPORT: connection.port || '5432', PGDATABASE: connection.pathname.slice(1),
  PGUSER: decodeURIComponent(connection.username), PGPASSWORD: decodeURIComponent(connection.password),
  PGSSLMODE: rehearsal ? 'disable' : 'verify-full', PGSSLROOTCERT: '/etc/ssl/cert.pem' };
if (rehearsal && (!env.PGHOST || !path.isAbsolute(env.PGHOST))) throw new Error('Private rehearsal socket required.');
const logPrefix = rehearsal ? 'rehearsal' : 'final-neon';
async function run(command, args, name) {
  const output=[], errors=[];
  const status = await new Promise((resolve,reject) => {
    const child=spawn(command,args,{env,stdio:['ignore','pipe','pipe']});
    child.stdout.on('data',b=>output.push(b)); child.stderr.on('data',b=>errors.push(b));
    child.on('error',reject); child.on('close',resolve);
  });
  await fs.writeFile(path.join(finalDir,`${logPrefix}-${name}-private.log`),Buffer.concat(errors),{mode:0o600});
  if(status!==0) throw new Error(`${name} refused or failed; private diagnostic retained.`);
  return Buffer.concat(output).toString();
}
const quote=s=>'"'+s.replaceAll('"','""')+'"';
const literal=s=>"'"+s.replaceAll("'","''")+"'";
const qualified=t=>`${quote(t.schema)}.${quote(t.table)}`;
const oldDump=await run(process.env.PG_RESTORE,['--data-only','--file=-',path.join(baselineDir,'database.dump')],'baseline-sequences');
const sequences=[...oldDump.matchAll(/SELECT pg_catalog\.setval\('([^']+)', (\d+), (true|false)\);/g)];
if(sequences.length!==18) throw new Error('Unexpected baseline sequence inventory.');
const names=[...baseline.tables.map(t=>`${t.schema}.${t.table}`),...sequences.map(m=>m[1])].sort((a,b)=>a<b?-1:a>b?1:0);
const guard=`SET LOCAL timezone = 'UTC';
LOCK TABLE ${baseline.tables.map(qualified).join(', ')} IN ACCESS EXCLUSIVE MODE;
DO $guard$
BEGIN
IF (SELECT array_agg(n.nspname||'.'||c.relname ORDER BY n.nspname||'.'||c.relname)
  FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace
  WHERE n.nspname='public' AND c.relkind IN ('r','p','v','m','S'))
  IS DISTINCT FROM ARRAY[${names.map(literal).join(',')}]::text[] THEN
  RAISE EXCEPTION 'Destination relation inventory changed'; END IF;
${baseline.tables.map(t=>`IF (SELECT count(*) FROM ${qualified(t)}) <> ${t.rows} OR
  (SELECT encode(sha256(convert_to(COALESCE(string_agg(row_to_json(t)::text,E'\\n' ORDER BY row_to_json(t)::text)||E'\\n',''),'UTF8')),'hex') FROM ${qualified(t)} t)
  <> ${literal(t.sha256)} THEN RAISE EXCEPTION 'Destination data changed in ${t.table.replaceAll("'", "''")}'; END IF;`).join('\n')}
${sequences.map(m=>`IF (SELECT last_value FROM ${m[1].split('.').map(quote).join('.')}) <> ${m[2]} OR
  (SELECT is_called FROM ${m[1].split('.').map(quote).join('.')}) <> ${m[3]}
  THEN RAISE EXCEPTION 'Destination counter changed'; END IF;`).join('\n')}
END $guard$;
`;
const list=await run(process.env.PG_RESTORE,['--list',path.join(finalDir,'database.dump')],'list');
const listFile=path.join(finalDir,`${logPrefix}-restore-list.txt`);
await fs.writeFile(listFile,list.split('\n').filter(line=>!/^\d+; .* SCHEMA - public /.test(line)).join('\n'),{mode:0o600});
const sql=await run(process.env.PG_RESTORE,['--clean','--if-exists','--no-owner','--no-acl','--use-list',listFile,'--file=-',path.join(finalDir,'database.dump')],'render');
const sqlFile=path.join(finalDir,`${logPrefix}-restore-private.sql`);
await fs.writeFile(sqlFile,guard+sql,{mode:0o600});
const guardFile=path.join(finalDir,`${logPrefix}-guard-private.sql`);
await fs.writeFile(guardFile,guard,{mode:0o600});
// Readback check first, then a second check under the locks in the restore transaction.
await run(process.env.PSQL,['-X','--single-transaction','--set=ON_ERROR_STOP=1','--file',guardFile],'guard');
const backup=path.join(finalDir,`${logPrefix}-destination-before-refresh.dump`);
await run(process.env.PG_DUMP,['--format=custom','--schema=public','--no-owner','--no-acl','--file',backup],'backup');
await fs.chmod(backup,0o600);
await run(process.env.PSQL,['-X','--single-transaction','--set=ON_ERROR_STOP=1','--file',sqlFile],'restore');
console.log(JSON.stringify({status:rehearsal?'local-refresh-rehearsal-restored':'final-neon-restored',
  sourceFrozen:!rehearsal,acceptedOlderSnapshot:acceptedSnapshot,
  requiresPostRestoreVerification:true,backupRetained:true}));
