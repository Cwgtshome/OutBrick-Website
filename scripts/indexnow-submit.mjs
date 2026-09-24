// Tell IndexNow (Bing, Yandex, Seznam, Naver…) about every URL in the sitemap.
//
//   node scripts/indexnow-submit.mjs            # read the live sitemap, submit
//   node scripts/indexnow-submit.mjs --local    # read dist/client/sitemap.xml instead
//   node scripts/indexnow-submit.mjs --dry-run  # print what would be sent, send nothing
//
// Run it AFTER a deploy: the engines fetch the key file from keyLocation to verify the
// submission, so the key file has to be live before the POST goes out.

import fs from 'node:fs';
import path from 'node:path';
import { distDir, siteUrl } from './lib/pages.mjs';

const KEY = '907d2eae112ce8af8b9eff3298561501';
const host = new URL(siteUrl).host;
const keyLocation = `${siteUrl}/${KEY}.txt`;
const args = new Set(process.argv.slice(2));

async function sitemapXml() {
  if (args.has('--local')) return fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8');
  const res = await fetch(`${siteUrl}/sitemap.xml`);
  if (!res.ok) throw new Error(`GET ${siteUrl}/sitemap.xml -> ${res.status}`);
  return res.text();
}

const urlList = [...(await sitemapXml()).matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(/&amp;/g, '&'))
  .filter((u) => new URL(u).host === host);

if (!urlList.length) throw new Error('No URLs found in the sitemap.');

const body = { host, key: KEY, keyLocation, urlList };

if (args.has('--dry-run')) {
  console.log(JSON.stringify(body, null, 2));
  process.exit(0);
}

// Make sure the key file answers before asking anyone to verify it.
const keyRes = await fetch(keyLocation);
const keyText = keyRes.ok ? (await keyRes.text()).trim() : '';
if (keyText !== KEY) throw new Error(`${keyLocation} does not serve the key (status ${keyRes.status}); deploy first.`);

// The protocol accepts up to 10,000 URLs per POST.
for (let i = 0; i < urlList.length; i += 10000) {
  const batch = { ...body, urlList: urlList.slice(i, i + 10000) };
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(batch),
  });
  // 200 OK and 202 Accepted are both success; 202 means the key is still being validated.
  console.log(`IndexNow: ${batch.urlList.length} URLs -> ${res.status} ${res.statusText}`);
  if (res.status !== 200 && res.status !== 202) {
    console.error(await res.text());
    process.exitCode = 1;
  }
}
