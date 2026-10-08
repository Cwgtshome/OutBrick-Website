/** Check the explicit neutral-asset manifest without requiring image services or OCR in CI. */
import { existsSync, readdirSync, statSync } from 'node:fs';
import { localizedAsset, localizedAssetManifest } from '../lib/i18n/assets.ts';

const locales = ['fr', 'de', 'es', 'ja', 'pt-BR'];
const failures = [];
for (const [source, target] of Object.entries(localizedAssetManifest)) {
  for (const file of [source, target]) {
    if (!existsSync(`public${file}`) || !statSync(`public${file}`).size) failures.push(`Missing or empty asset: ${file}`);
  }
  if (localizedAsset(source, 'en') !== source) failures.push(`English asset changed: ${source}`);
  for (const locale of locales) {
    if (localizedAsset(source, locale) !== target) failures.push(`Missing ${locale} asset mapping: ${source}`);
    const absolute = `https://www.outbrick.site${source}`;
    if (localizedAsset(absolute, locale) !== `https://www.outbrick.site${target}`) failures.push(`Incorrect absolute ${locale} asset URL: ${source}`);
    if (localizedAsset(`${source} 1x, ${source} 2x`, locale) !== `${target} 1x, ${target} 2x`) failures.push(`Incorrect ${locale} responsive asset mapping: ${source}`);
  }
}
// Journal covers ship a 960px sibling for srcset (lib/images.ts coverSrcSet, scripts/make-cover.py).
for (const dir of ['public/blog', 'public/blog/neutral']) {
  for (const name of readdirSync(dir)) {
    if (!name.endsWith('.webp') || name.endsWith('-960.webp')) continue;
    const variant = `${dir}/${name.replace(/\.webp$/, '-960.webp')}`;
    if (!existsSync(variant) || !statSync(variant).size) failures.push(`Missing 960px cover variant: ${variant.slice(6)}`);
  }
}
for (const locale of locales) {
  if (!existsSync(`public/og/${locale}.png`)) failures.push(`Missing ${locale} social card`);
}
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Localized assets: ${Object.keys(localizedAssetManifest).length} neutral variants × ${locales.length} locales; English originals preserved; absolute and responsive URLs valid.`);
