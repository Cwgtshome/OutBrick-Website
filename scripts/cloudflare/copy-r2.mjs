// Copy private exported bytes, then read back and compare every object hash.
import fs from 'node:fs/promises';import path from 'node:path';import{createHash}from'node:crypto';import{spawn}from'node:child_process';
const mode=process.argv[2],snapshot=process.argv[3];
if(!['preview','production'].includes(mode)||!snapshot||!path.isAbsolute(snapshot))throw new Error('Specify destination and private snapshot.');
const buckets=mode==='preview'?{'community-uploads':'outbrick-preview-uploads','community-signals':'outbrick-preview-signals'}:{'community-uploads':'outbrick-uploads','community-signals':'outbrick-signals'};
const m=JSON.parse(await fs.readFile(path.join(snapshot,'manifest.json'),'utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const directory=path.join(snapshot,`r2-${mode}-readback`);await fs.mkdir(directory,{recursive:true,mode:0o700});
async function wrangler(args){const log=[];const code=await new Promise((resolve,reject)=>{const child=spawn(process.execPath,['node_modules/wrangler/bin/wrangler.js','--config','wrangler.jsonc',...args],{stdio:['ignore','pipe','pipe']});child.stdout.on('data',b=>log.push(b));child.stderr.on('data',b=>log.push(b));child.on('error',reject);child.on('close',resolve);});if(code!==0){await fs.writeFile(path.join(directory,'private-error.log'),Buffer.concat(log),{mode:0o600});throw new Error('R2 transfer failed; private diagnostic retained.');}}
let objects=0;
for(const store of m.stores){const bucket=buckets[store.name];if(!bucket)throw new Error('Unmapped store; no data may be silently discarded.');for(const object of store.manifest){
 if(Object.keys(object.metadata||{}).length)throw new Error('Metadata requires an explicit R2 mapping before transfer.');
 const file=path.join(snapshot,object.file),bytes=await fs.readFile(file);if(hash(bytes)!==object.sha256)throw new Error('Source object hash differs.');
 const key=`${bucket}/${object.key}`;await wrangler(['r2','object','put',key,'--remote','--file',file,'--content-type','application/json']);
 const readback=path.join(directory,hash(Buffer.from(key))+'.bin');await wrangler(['r2','object','get',key,'--remote','--file',readback]);await fs.chmod(readback,0o600);
 if(hash(await fs.readFile(readback))!==object.sha256)throw new Error('Remote R2 object differs from source.');objects++;
}}
const receipt={destination:mode,checkedAt:new Date().toISOString(),objects,status:'r2-readback-hashes-match'};await fs.writeFile(path.join(snapshot,`r2-${mode}-verification.json`),JSON.stringify(receipt,null,2),{mode:0o600});console.log(JSON.stringify(receipt));
