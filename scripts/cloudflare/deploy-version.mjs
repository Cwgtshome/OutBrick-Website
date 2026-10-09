// Deploy an exact code/assets version without changing existing domains or cron triggers.
// This lets CI retain its account-scoped token instead of gaining DNS write access.
import fs from 'node:fs/promises';
import { spawn } from 'node:child_process';
const build=JSON.parse(await fs.readFile('dist/client/build-info.json','utf8'));
if(!/^[0-9a-f]{40}$/.test(build.commit) ||
  (process.env.GITHUB_SHA && build.commit!==process.env.GITHUB_SHA))
  throw new Error('Built assets do not match the requested deployment commit.');
async function wrangler(args){
  const output=[];
  const status=await new Promise((resolve,reject)=>{
    const child=spawn(process.execPath,['node_modules/wrangler/bin/wrangler.js',...args],{
      stdio:['ignore','pipe','pipe'],env:{...process.env,NO_COLOR:'1'},
    });
    child.stdout.on('data',chunk=>output.push(chunk));
    child.stderr.on('data',chunk=>output.push(chunk));
    child.on('error',reject);child.on('close',resolve);
  });
  if(status!==0) throw new Error('Worker version operation failed; no later deployment attempted.');
  return Buffer.concat(output).toString();
}
const uploaded=await wrangler(['versions','upload','--config','wrangler.production.jsonc','--message',build.commit]);
const version=uploaded.match(/Worker Version ID:\s*([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i)?.[1];
if(!version) throw new Error('Upload did not return an exact version; no deployment attempted.');
await wrangler(['versions','deploy',`${version}@100`,'--config','wrangler.production.jsonc','--yes','--message',build.commit]);
console.log(JSON.stringify({status:'worker-version-deployed',worker:'outbrick',version,commit:build.commit,
  domainsAndSchedules:'retained'}));
