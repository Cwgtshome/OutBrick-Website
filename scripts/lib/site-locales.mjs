// The site's published languages for plain-JS scripts that cannot load lib/i18n/locales.ts:
// the first five translations, then the catalog languages in lib/i18n/catalog/published.json.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
export const legacyLocales = ['fr', 'de', 'es', 'ja', 'pt-BR'];
export const catalogLocales = JSON.parse(fs.readFileSync(path.join(root, 'lib/i18n/catalog/published.json'), 'utf8'));
export const translatedLocales = [...legacyLocales, ...catalogLocales];
export const siteLocales = ['en', ...translatedLocales];
