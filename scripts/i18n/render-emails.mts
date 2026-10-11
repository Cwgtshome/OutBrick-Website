// Renders every email template in the given languages into outputs/email-languages/, whether or
// not a catalog language is published yet, with an index page, for checking layouts by eye
// (right-to-left above all). Not part of the build.
//   node --experimental-strip-types --no-warnings scripts/i18n/render-emails.mts en ar he ja de
import fs from 'node:fs';
import path from 'node:path';
import { installCatalog } from '../../lib/i18n/catalog.ts';
import { catalogAreas } from '../../lib/i18n/catalog-areas.ts';

const root = path.resolve(import.meta.dirname, '../..');
const locales = process.argv.slice(2);
// Install unpublished catalog languages too (the generated installer only has published ones).
for (const locale of locales) {
  for (const area of catalogAreas) {
    const file = path.join(root, 'lib/i18n/catalog', locale, `${area}.json`);
    if (fs.existsSync(file)) installCatalog(locale, JSON.parse(fs.readFileSync(file, 'utf8')));
  }
}
const { renderSample, templateNames } = await import('../../emails/index.ts');
const out = path.join(root, 'outputs/email-languages');
fs.mkdirSync(out, { recursive: true });
const issue = JSON.parse(fs.readFileSync(path.join(root, 'emails/issues', fs.readdirSync(path.join(root, 'emails/issues')).find((f) => f.endsWith('.json'))!), 'utf8'));
const rows: string[] = [];
let english = 0;
for (const name of templateNames) {
  const cells: string[] = [];
  for (const locale of locales) {
    const email = renderSample(name, locale as never, issue, '');
    fs.writeFileSync(path.join(out, `${name}.${locale}.html`), email.html);
    fs.writeFileSync(path.join(out, `${name}.${locale}.txt`), `Subject: ${email.subject}\n\n${email.text}`);
    cells.push(`<td><a href="${name}.${locale}.html">${locale}</a> <small dir="auto">${email.subject.replace(/</g, '&lt;')}</small></td>`);
    if (locale !== 'en' && !name.startsWith('team-') && email.subject === renderSample(name, 'en', issue, '').subject) english++;
  }
  rows.push(`<tr><th>${name}</th>${cells.join('')}</tr>`);
}
fs.writeFileSync(path.join(out, 'index.html'), `<!doctype html><meta charset="utf-8"><title>Emails by language</title><table border="1" cellpadding="4">${rows.join('\n')}</table>`);
console.log(`${templateNames.length} templates × ${locales.length} languages → ${path.relative(root, out)}; ${english} subjects identical to English`);
