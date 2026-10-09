// Apply additive pending migrations and archive legacy forms without emailing them again.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { getDatabase } from '@netlify/database';
const mode = process.argv[2], snapshot = process.argv[3];
if (!['preview','production'].includes(mode) || !snapshot || !path.isAbsolute(snapshot)) throw new Error('Specify preview/production and private snapshot.');
const config=JSON.parse(await fs.readFile(`.env.neon-${mode}.json`,'utf8'));
if(config.project!=='summer-boat-89820889'||config.branch!==(mode==='preview'?'br-lucky-wind-b7v2jg1j':'br-polished-fire-b7sc0cpu'))throw new Error('Unexpected migration destination.');
const source=JSON.parse(await fs.readFile('.env.netlify-database.json','utf8'));
const applied=new Set(source.applied.map(m=>m.name));
const db=getDatabase({connectionString:config.connectionString});const client=await db.pool.connect();
try{
  await client.query('BEGIN');
  await client.query('CREATE TABLE IF NOT EXISTS cloudflare_schema_migrations (name text PRIMARY KEY, sha256 text NOT NULL, applied_at timestamptz NOT NULL DEFAULT now())');
  for(const name of (await fs.readdir('netlify/database/migrations')).sort()){
    const sql=await fs.readFile(path.join('netlify/database/migrations',name,'migration.sql'),'utf8');const sha=createHash('sha256').update(sql).digest('hex');
    const {rows}=await client.query('SELECT sha256 FROM cloudflare_schema_migrations WHERE name=$1',[name]);
    if(rows.length){if(rows[0].sha256!==sha)throw new Error('Previously applied migration changed.');continue;}
    if(!applied.has(name))await client.query(sql);
    await client.query('INSERT INTO cloudflare_schema_migrations (name,sha256) VALUES ($1,$2)',[name,sha]);
  }
  const records=JSON.parse(await fs.readFile(path.join(snapshot,'form-submissions.json'),'utf8'));
  let spam=[];try{spam=JSON.parse(await fs.readFile(path.join(snapshot,'form-spam-submissions.json'),'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
  const all=new Map([...records,...spam].map(record=>[String(record.id),record]));
  for(const [id,record]of all){
    if(!['contact','careers','affiliate','newsletter'].includes(record.form_name))throw new Error('Unmapped legacy form; do not discard.');
    await client.query("INSERT INTO web_form_submissions (id,form_name,payload,delivery_state,created_at) VALUES ($1,$2,$3::jsonb,'archived',$4) ON CONFLICT (id) DO NOTHING",['netlify:'+id,record.form_name,JSON.stringify(record),record.created_at]);
    const {rows}=await client.query('SELECT payload,delivery_state FROM web_form_submissions WHERE id=$1',['netlify:'+id]);
    if(rows[0].delivery_state!=='archived'||!isDeepStrictEqual(rows[0].payload,record))throw new Error('Archived form differs from original.');
  }
  const migrationCount=await client.query('SELECT count(*)::int AS count FROM cloudflare_schema_migrations');
  await client.query('COMMIT');console.log(JSON.stringify({destination:mode,migrations:migrationCount.rows[0].count,status:'additive-migrations-and-form-archive-verified',archivedForms:all.size,emailsSent:0}));
}catch(e){await client.query('ROLLBACK');throw e;}finally{client.release();await db.pool.end();}
