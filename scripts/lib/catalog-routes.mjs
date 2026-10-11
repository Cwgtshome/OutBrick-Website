// The route rules netlify.toml writes out by hand for the first five translations, for every
// published catalog language (lib/i18n/catalog/published.json). Used by
// scripts/cloudflare/prepare-routes.mjs (the Worker's table) and scripts/lib/pages.mjs (audits).
import fs from 'node:fs';
import path from 'node:path';

const aliases = [['privacy-policy', 'privacy'], ['license', 'license-agreement'], ['refund', 'refunds'], ['eula-apple', 'eula'], ['accessibility-support', 'accessibility'], ['age-suitability', 'age-rating']];

export function publishedCatalogLocales(root) {
  return JSON.parse(fs.readFileSync(path.join(root, 'lib/i18n/catalog/published.json'), 'utf8'));
}

/** Insert the catalog languages' rules into a netlify.toml rule list, in the same order. */
export function withCatalogRoutes(rules, published) {
  const out = [...rules];
  for (const locale of published) {
    out.push({ from: `/${locale}/play-*`, to: `/${locale}/play`, status: 301, force: true });
    for (const [from, to] of aliases) for (const suffix of ['', '.html']) out.push({ from: `/${locale}/${from}${suffix}`, to: `/${locale}/${to}`, status: 301, force: true });
  }
  // Rewrites go before the first language fallback, exactly as netlify.toml orders them.
  const fallbackAt = out.findIndex((rule) => /^\/[^/]+\/\*$/.test(rule.from) && rule.status === 404);
  const rewrites = published.flatMap((locale) => [
    { from: `/${locale}/c/*`, to: `/${locale}/c`, status: 200, force: false },
    { from: `/${locale}/community/*`, to: `/${locale}/community`, status: 200, force: false },
  ]);
  out.splice(fallbackAt < 0 ? out.length : fallbackAt, 0, ...rewrites);
  for (const locale of published) out.push({ from: `/${locale}/*`, to: `/${locale}/404`, status: 404, force: false });
  return out;
}
