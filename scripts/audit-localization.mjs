// Complete public-page counterpart and visible-copy coverage for all published languages.
// Invoke after build: node --experimental-strip-types scripts/audit-localization.mjs
import fs from 'node:fs';
import path from 'node:path';
import { decodeEntities, distDir, fileToRoute, listHtmlFiles, metaContent, readNetlifyRedirects, repoRoot, siteUrl } from './lib/pages.mjs';
const locales=['fr','de','es','ja','pt-BR'];
const { chromeCopy } = await import('../lib/i18n/chrome.ts');
const breadcrumbLabels = {fr:'Fil d’Ariane',de:'Brotkrumennavigation',es:'Ruta de navegación',ja:'パンくずリスト','pt-BR':'Navegação estrutural'};
const editorialRoutes=['/','/blog','/mascots','/press','/about','/authors','/research','/community','/support'];
const publicPages=(await import('../lib/i18n/public-pages.ts')).publicPages;
const inventory=JSON.parse(fs.readFileSync(path.join(repoRoot,'lib/i18n/public-source-inventory.json'),'utf8'));
const pages=new Map(listHtmlFiles().map(file=>[fileToRoute(file),fs.readFileSync(path.join(distDir,file),'utf8')]));
const redirects=readNetlifyRedirects();
for(const locale of locales) {
 const challenge=redirects.findIndex(rule=>rule.from===`/${locale}/c/*`&&rule.to===`/${locale}/c`&&rule.status===200);
 const fallback=redirects.findIndex(rule=>rule.from===`/${locale}/*`&&rule.status===404);
 if(challenge<0||fallback<0||challenge>=fallback)throw new Error(`${locale}: challenge rewrite must precede the localized 404 fallback`);
}
const aliasRoutes=new Set(redirects.filter(r=>r.status>=300&&r.status<400).map(r=>r.from.replace(/\.html$/,'')));
const normalize=text=>decodeEntities(text).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
const problems=[];
const manifests=[];
const publicRoots=new Set(['about','accessibility','accessibility-support','affiliates','age-rating','age-suitability','authors','blog','c','careers','contact','creators','daily','eula','eula-apple','license','license-agreement','mascots','newsletter','play','press','press-kit','privacy','privacy-choices','privacy-policy','refund','refunds','research','support','community','terms','whats-new']);
const noindexEvidence=[];
const schemaLanguages=[];
const englishRoutes=[...pages.keys()].filter(route=>!/^\/(fr|de|es|ja|pt-BR)(\/|$)/.test(route)&&route!='/404'&&!/^\/google[0-9a-f]+$/.test(route));
for(const locale of locales) {
 const missingCopy=inventory.filter(({text})=>!(text in publicPages[locale]));
 if(missingCopy.length) problems.push(`${locale}: ${missingCopy.length} missing public dictionary entries`);
 for(const route of englishRoutes) {
  const translated=route==='/'?`/${locale}`:`/${locale}${route}`;
  const html=pages.get(translated);
  const alias=aliasRoutes.has(route);
  const record={locale,english:`${siteUrl}${route==='/'?'/':route}`,url:`${siteUrl}${translated}`,alias,rendered:!!html};
  manifests.push(record);
  if(!html){problems.push(`Missing counterpart ${translated}`);continue;}
  const lang=html.match(/<html\b[^>]*\slang="([^"]+)"/i)?.[1];
  if(lang!==locale)problems.push(`${translated}: html lang=${lang}`);
  if(alias)continue;
  const head=html.split('</head>')[0];
  const canonical=head.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
  if(canonical!==`${siteUrl}${translated}`)problems.push(`${translated}: wrong canonical ${canonical}`);
  for(const code of ['en',...locales,'x-default']) {
   if(!new RegExp(`<link\\b[^>]*hreflang="${code}"`,'i').test(head))problems.push(`${translated}: missing hreflang ${code}`);
  }
  if(!metaContent(html,'description')[0])problems.push(`${translated}: missing description`);
  for(const code of ['en',...locales,'x-default']) {
   const expected=siteUrl+(code==='en'||code==='x-default'?route:(route==='/'?`/${code}`:`/${code}${route}`));
   const links=[...head.matchAll(/<link\b[^>]*>/gi)].filter(m=>new RegExp(`hreflang="${code}"`,'i').test(m[0]));
   if(!links.some(m=>{const url=m[0].match(/href="([^"]+)"/i)?.[1];return url&&new URL(url).href===new URL(expected).href;}))problems.push(`${translated}: incorrect concrete hreflang ${code}, expected ${expected}`);
  }
  const ogLocale={fr:'fr_FR',de:'de_DE',es:'es_ES',ja:'ja_JP','pt-BR':'pt_BR'}[locale];
  if(metaContent(html,'og:locale')[0]!==ogLocale)problems.push(`${translated}: incorrect OG locale`);
  for(const key of ['og:title','og:description','twitter:title','twitter:description']) {
   const value=metaContent(html,key)[0];
   if(!value)problems.push(`${translated}: missing ${key}`);
   const englishValue=metaContent(pages.get(route),key)[0];
   if(value&&englishValue&&value===englishValue&&value.length>30)problems.push(`${translated}: unchanged English ${key}`);
  }
  const visible=html.replace(/<script\b[\s\S]*?<\/script>/gi,'');
  // Check actual shared chrome on every rendered counterpart, including all
  // daily/result pages. This is independent of the source phrase inventory.
  const englishHeader=pages.get(route).match(/<header\b[^>]*data-site-header=""[^>]*>[\s\S]*?<\/header>/)?.[0]??'';
  const translatedHeader=visible.match(/<header\b[^>]*data-site-header=""[^>]*>[\s\S]*?<\/header>/)?.[0]??'';
  const englishMain=englishHeader.match(/<nav\b[^>]*class="main"[^>]*>([\s\S]*?)<\/nav>/)?.[1]??'';
  const englishLinks=[...englishMain.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
  if(englishLinks.length===editorialRoutes.length&&englishLinks.every((link,i)=>link[1]===editorialRoutes[i])) {
    for(const menu of translatedHeader.matchAll(/<nav\b[^>]*>([\s\S]*?)<\/nav>/g)) {
      const links=[...menu[1].matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
      if(links.length!==editorialRoutes.length)problems.push(`${translated}: incomplete shared editorial menu`);
      links.forEach((link,i)=>{if(link[1]!==`/${locale}${editorialRoutes[i]==='/'?'':editorialRoutes[i]}`||normalize(link[2])!==chromeCopy[locale].editorialNav[i])problems.push(`${translated}: untranslated or incorrect shared editorial menu item ${i}`);});
    }
  }
  for(const crumbs of visible.matchAll(/<nav\b[^>]*class="ed-crumbs"[^>]*>/g)) {
    if(crumbs[0].match(/aria-label="([^"]+)"/)?.[1]!==breadcrumbLabels[locale])problems.push(`${translated}: untranslated breadcrumb accessible label`);
  }
  for(const match of visible.matchAll(/<(?:a|form|button)\b[^>]*>/gi)) {
   const tag=match[0];if(/(?:lang|hreflang)="en"/i.test(tag))continue;
   for(const dest of tag.matchAll(/(?:href|action|formaction)="([^"]+)"/gi)) {
    const url=decodeEntities(dest[1]);const path=url.startsWith(siteUrl)?url.slice(siteUrl.length):url;
    if(!path.startsWith('/')||path.startsWith('//')||/^\/(?:fr|de|es|ja|pt-BR)(?:\/|$)/.test(path))continue;
    const base=path.split(/[?#]/)[0];const root=base.split('/')[1];
    const asset=/\.[a-z\d]+$/i.test(base)&&!base.endsWith('/feed.xml');
    if(!asset&&(base==='/'||publicRoots.has(root)))problems.push(`${translated}: English internal destination ${url}`);
   }
  }
  for(const block of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
   try {const data=JSON.parse(block[1]);const visit=(value,sourceIdentity=false)=>{if(!value||typeof value!=='object')return;if('inLanguage' in value){schemaLanguages.push({url:translated,type:value['@type'],language:value.inLanguage});if(!sourceIdentity&&!Array.isArray(value.inLanguage)&&value['@type']!=='CreativeWork'&&value.inLanguage!==locale)problems.push(`${translated}: schema inLanguage ${value.inLanguage}`);}for(const [key,child] of Object.entries(value))if(typeof child==='object'){const original=sourceIdentity||key==='translationOfWork'||key==='citation';if(Array.isArray(child))child.forEach(item=>visit(item,original));else visit(child,original);}};visit(data);}catch{problems.push(`${translated}: invalid JSON-LD`);}
  }
  if(/^\/(?:play\/result\/|c$)/.test(route)||route.endsWith('/thanks')) {
   const robots=metaContent(html,'robots').join(' ');noindexEvidence.push({url:translated,robots});
   if(!/noindex/i.test(robots))problems.push(`${translated}: expected noindex`);
  }

  // Long exact source phrases are useful indicators of unintentional English
  // fallback. A dictionary that deliberately preserves a title/name is explicit.
  if(!/^\/blog\/[^/]+$/.test(route)) {
   const body=normalize(html.replace(/<script\b[\s\S]*?<\/script>/gi,'').split('</head>')[1]??'');
   const carried=inventory.filter(({text})=>text.length>=45&&publicPages[locale][text]!==text&&body.includes(text));
   if(carried.length)problems.push(`${translated}: English carryover ${carried.map(x=>JSON.stringify(x.text)).join('; ')}`);
   const textNodes=(html.replace(/<script\b[\s\S]*?<\/script>/gi,'').split('</head>')[1]??'').split(/<[^>]*>/).map(value=>normalize(value));
   const shortCarryover=inventory.filter(({text})=>text.length>=8&&text.length<45&&publicPages[locale][text]!==text&&textNodes.includes(text));
   if(shortCarryover.length)problems.push(`${translated}: English label carryover ${shortCarryover.map(x=>JSON.stringify(x.text)).join('; ')}`);
  }
 }
}
const templates=fs.readdirSync(path.join(repoRoot,'app/(en)'),{recursive:true}).filter(p=>p==='page.tsx'||p.endsWith('/page.tsx'));
const templateMissing=templates.filter(file=>!fs.existsSync(path.join(repoRoot,'app/[locale]',file)));
if(templateMissing.length)problems.push(`Missing locale templates: ${templateMissing.join(', ')}`);
for(const locale of locales){const route=`/${locale}/404`;const html=pages.get(route);const robots=html?metaContent(html,'robots').join(' '):'';noindexEvidence.push({url:route,robots});if(!html||!/noindex/i.test(robots))problems.push(`${route}: missing noindex 404 artifact`);const fallback=redirects.some(r=>r.from===`/${locale}/*`&&r.to===route&&r.status===404);if(!fallback)problems.push(`${locale}: missing locale-preserving unknown-page fallback`);}
const report={englishUrls:englishRoutes.map(route=>siteUrl+route),noindexEvidence,schemaLanguages,unknownPageHandling:locales.map(locale=>({locale,artifact:`${siteUrl}/${locale}/404`,netlifyFallback:`/${locale}/*`,status:404})),generatedAt:new Date().toISOString(),englishPublicUrls:englishRoutes.length,englishTemplates:templates.length,localizedTemplateCoverage:templates.length-templateMissing.length,locales:Object.fromEntries(locales.map(locale=>[locale,{dictionaryKeys:Object.keys(publicPages[locale]).length,publicCounterparts:manifests.filter(x=>x.locale===locale&&x.rendered).length}])),urls:manifests,problems};
fs.mkdirSync(path.join(repoRoot,'outputs'),{recursive:true});
fs.writeFileSync(path.join(repoRoot,'outputs/localization-url-manifest.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,urls:undefined},null,2));
if(problems.length)process.exitCode=1;
// Inventory completeness cannot detect prose imported from data or text split
// around inline elements. Compare the actual rendered documents as well.
await import('./audit-rendered-copy.mjs');
