// Netlify runs a function named `deploy-succeeded` by itself after every successful deploy
// (an "event-triggered function" — nothing calls it, and it answers no public route).
//
// It does what `pnpm indexnow` does by hand: read the live sitemap and hand every URL to
// IndexNow, which shares it with Bing, Yandex, Seznam, Naver and Yep. Bing's index is also
// what ChatGPT search, Copilot and DuckDuckGo draw on, so this is the fastest way for a new
// or changed page to reach them.
//
// Google has no equivalent: it retired its sitemap "ping" endpoint in 2023 and its Indexing
// API is only for job postings and livestreams. Google finds changes through the sitemap
// submitted in Search Console, whose <lastmod> dates scripts/postbuild.mjs keeps honest.
//
// Only production deploys are submitted: a Deploy Preview lives on a netlify.app address
// that must not be announced to search engines.

const SITE = 'https://www.outbrick.site';
const KEY = '907d2eae112ce8af8b9eff3298561501'; // public/<KEY>.txt serves the same value
const HOST = new URL(SITE).host;

export const handler = async (event) => {
  let deploy = {};
  try {
    deploy = JSON.parse(event.body || '{}').payload ?? {};
  } catch {
    /* no payload: treat as unknown context and skip */
  }

  if (deploy.context !== 'production') {
    console.log(`[indexnow] skipped: deploy context is "${deploy.context ?? 'unknown'}"`);
    return { statusCode: 200, body: 'skipped' };
  }

  try {
    const res = await fetch(`${SITE}/sitemap.xml`, { headers: { 'cache-control': 'no-cache' } });
    if (!res.ok) throw new Error(`GET /sitemap.xml -> ${res.status}`);
    const xml = await res.text();
    const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => m[1].replace(/&amp;/g, '&'))
      .filter((u) => new URL(u).host === HOST);
    // The RSS feed changes whenever a post does; include it so feed readers used by
    // search and AI tools pick it up too.
    urlList.push(`${SITE}/feed.xml`);

    const submit = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urlList.slice(0, 10000) }),
    });
    // 200 = accepted, 202 = accepted while the key is being validated.
    console.log(`[indexnow] ${urlList.length} URLs -> ${submit.status} ${submit.statusText}`);
    if (submit.status !== 200 && submit.status !== 202) console.error(await submit.text());
  } catch (err) {
    // Never fail loudly: the deploy is already live, and a missed ping only delays a crawl.
    console.error('[indexnow] submission failed:', err);
  }
  return { statusCode: 200, body: 'ok' };
};
