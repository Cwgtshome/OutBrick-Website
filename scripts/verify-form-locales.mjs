const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const outDir = fileURLToPath(new URL('../outputs/', import.meta.url));
fs.mkdirSync(outDir, { recursive: true });
const base = process.env.QA_BASE ?? process.argv[2] ?? 'http://127.0.0.1:4321';
const browser = await chromium.launch({headless:true});
const report={base,browser:'Isolated Playwright Chromium; all POSTs intercepted locally',flows:[],noJS:[],errors:[]};
for(const locale of ['fr','de','es','ja']) {
 const context=await browser.newContext(); const page=await context.newPage(); let status=500;let posts=[];const interceptedFailures=new Set();
 page.on('pageerror',e=>report.errors.push({locale,error:e.message}));
 page.on('console',m=>{if(m.type()==='error' && !(m.text()==='Failed to load resource: the server responded with a status of 500 (Internal Server Error)' && interceptedFailures.has(m.location().url)))report.errors.push({locale,error:m.text(),url:m.location().url});});
 await context.route('**/*',async route=>{if(route.request().method()==='POST'){posts.push({url:route.request().url(),body:route.request().postData(),status});if(status===500)interceptedFailures.add(route.request().url());await route.fulfill({status,body:'Local intercepted QA only'});}else await route.continue();});
 for(const kind of ['contact','affiliate','careers','newsletter']) {
  const route=kind==='affiliate'?'/affiliates':kind==='careers'?'/careers/content-marketing-lead':'/'+kind;
  const item={locale,kind,path:`/${locale}${route}`,posts:[]};report.flows.push(item);
  try {
   status=500; posts=[];
   const response=await page.goto(base+item.path,{waitUntil:'networkidle',timeout:120000});item.http=response.status();item.lang=await page.locator('html').getAttribute('lang');
   const form=page.locator(`form[name="${kind}"]`).first();await form.waitFor();await page.waitForTimeout(300);
   item.action=await form.getAttribute('action');item.initial=await form.innerText();
   const submit=form.locator('button[type=submit]'); await submit.click();await page.waitForTimeout(80);item.invalid=await form.innerText();item.invalidCount=await form.locator('[aria-invalid=true]').count();
   const values=kind==='contact'?{name:'Local QA',email:'qa@example.invalid',message:'Local verification only: this request is intercepted.'}:kind==='affiliate'?{name:'Local QA',email:'qa@example.invalid',channels:'https://example.invalid/channel',country:'France',plan:'Local verification only: this request is intercepted.'}:kind==='careers'?{name:'Local QA',email:'qa@example.invalid',portfolio:'https://example.invalid/work',location:'Local test — UTC','cover-note':'Local verification only: this request is intercepted and never sent externally.'}:{email:'qa@example.invalid'};
   for(const [name,value]of Object.entries(values)) await form.locator(`[name="${name}"]`).fill(value);
   if(kind==='affiliate')await form.locator('[name=audience]').selectOption('1k-10k');
   if(kind==='newsletter')item.selectedLanguage=await form.locator('[name=language]').inputValue();
   await form.locator('[name=email]').fill('invalid');await submit.click();await page.waitForTimeout(80);item.badEmail=await form.innerText();
   await form.locator('[name=email]').fill('qa@example.invalid');await submit.click();await page.waitForTimeout(80);item.consent=await form.innerText();item.consentError=await form.locator('[name=consent]').getAttribute('aria-invalid');
   await form.locator('[name=consent]').check();await submit.click();await page.waitForTimeout(200);item.failure=await form.innerText();item.retainedEmail=await form.locator('[name=email]').inputValue();
   status=200;await submit.click();await page.waitForTimeout(200);item.success=await page.locator(kind==='newsletter'?'[data-newsletter-state=done]':'.obf-success').innerText();item.posts=posts;
   item.successEnglish=/(If the code|Please don.t share|is already taken|Proposed code|Your application|A person reads|is with the team)/.test(item.success);
   item.passed=item.http===200 && item.lang===locale && item.action.startsWith('/'+locale+'/') && item.invalidCount>0 && item.consentError==='true' && item.retainedEmail==='qa@example.invalid' && item.posts.length===2 && item.posts[0].status===500 && item.posts[1].status===200 && !item.successEnglish && (kind!=='newsletter'||item.selectedLanguage===locale);
  }catch(e){item.error=String(e);}
  fs.writeFileSync(path.join(outDir, 'form-locale-qa.json'),JSON.stringify(report,null,2));
 }
 await context.close();
 const noJS=await browser.newContext({javaScriptEnabled:false});const raw=await noJS.newPage();
 for(const [kind,path]of [['contact','contact'],['affiliate','affiliates'],['careers','careers/content-marketing-lead'],['newsletter','newsletter']]){
  try { const response=await raw.goto(`${base}/${locale}/${path}`);const form=raw.locator(`form[name="${kind}"]`).first();const action=await form.getAttribute('action');const thanks=await raw.goto(base+action);report.noJS.push({locale,kind,action,sourceStatus:response.status(),thanksStatus:thanks.status(),lang:await raw.locator('html').getAttribute('lang'),h1:await raw.locator('h1').allTextContents(),englishLinks:await raw.locator('a[href="/privacy"],a[href="/"]').count()}); } catch(e) {report.noJS.push({locale,kind,error:String(e)});}
 }
 await noJS.close();
}
await browser.close();fs.writeFileSync(path.join(outDir, 'form-locale-qa.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({flows:report.flows.map(({initial:_initial,invalid:_invalid,badEmail:_badEmail,consent:_consent,failure:_failure,success,posts,...item})=>({...item,postCount:posts.length,success})),noJS:report.noJS,errors:report.errors},null,2));

const valid = report.flows.length === 16 && report.noJS.length === 16 && report.errors.length === 0 && report.flows.every(flow => flow.passed) && report.noJS.every(flow => !flow.error && flow.sourceStatus === 200 && flow.thanksStatus === 200 && flow.lang === flow.locale && flow.action.startsWith(`/${flow.locale}/`) && flow.englishLinks === 0 && flow.h1.some(text => text.trim()));
if (!valid) process.exitCode = 1;
console.log(`Localized forms: ${report.flows.filter(flow => flow.passed).length}/16 hydrated flows; ${report.noJS.filter(flow => !flow.error && flow.lang === flow.locale && flow.thanksStatus === 200).length}/16 no-JS destinations; ${report.errors.length} browser errors`);
