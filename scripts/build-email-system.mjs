// Builds the OutBrick Email System review page: docs/email-system/index.html plus every email
// rendered from source, the friend art and the fonts it needs, into one folder you can open or
// publish. Nothing here is part of the website build; the output folder is git-ignored.
//
//   node --experimental-strip-types scripts/build-email-system.mjs            # → outputs/email-system/
//   node --experimental-strip-types scripts/build-email-system.mjs --out DIR
//
// Then serve the folder (python3 -m http.server --directory outputs/email-system) and open it: the
// page loads emails/<template>.<locale>.html and manifest.json with fetch, so file:// will not do.
// Every template is rendered in English; KEY templates in all six languages.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const out = path.resolve(args.includes('--out') ? args[args.indexOf('--out') + 1] : path.join(root, 'outputs/email-system'));
const { renderSample, templateNames, templateTitles, emailLocales } = await import('../emails/index.ts');

const KEY = ['newsletter-welcome', 'newsletter-welcome-2', 'newsletter-welcome-3', 'newsletter-puzzle', 'newsletter-release', 'support-reply', 'community-signin', 'account-new-sign-in'];
const GROUPS = [
  ['newsletter', 'Newsletter & welcome'],
  ['support', 'Support'],
  ['contact', 'Support'],
  ['community', 'Community'],
  ['account', 'Account'],
  ['notice', 'Notices'],
  ['affiliate', 'Affiliates'],
  ['careers', 'Careers'],
  ['team', 'Team copies (internal)'],
];
const groupOf = (name) => GROUPS.find(([prefix]) => name.startsWith(prefix)) ?? ['zz', 'Other'];
const order = (name) => GROUPS.findIndex(([prefix]) => name.startsWith(prefix));

const issue = JSON.parse(fs.readFileSync(path.join(root, 'emails/issues/2026-10-sample.json'), 'utf8'));
// Rendered with root-relative assets, then pointed at the copies next to the page.
const localise = (html) =>
  html
    .replace(/src="\/assets\//g, 'src="assets/')
    .replace(/src="\/og\//g, 'src="assets/og/')
    .replace(/src="\/og\.png"/g, 'src="assets/og.png"')
    .replace(/url\('(?:https:\/\/www\.outbrick\.site)?\/fonts\//g, "url('fonts/");

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'emails'), { recursive: true });
const manifest = [];
for (const name of [...templateNames].sort((a, b) => order(a) - order(b) || a.localeCompare(b))) {
  const locales = name.startsWith('team-') || !KEY.includes(name) ? ['en'] : emailLocales;
  let subject = '';
  let host = null;
  let nav = false;
  for (const locale of locales) {
    const email = renderSample(name, locale, issue, '');
    fs.writeFileSync(path.join(out, 'emails', `${name}.${locale}.html`), localise(email.html));
    if (locale === 'en') {
      subject = email.subject;
      const m = email.html.match(/class="ob-f-main" src="[^"]*friends\/([a-z]+)-([a-z]+)\.png"/);
      host = m ? { id: m[1], pose: m[2] } : null;
      nav = email.html.includes('class="ob-burger"');
    }
  }
  manifest.push({ name, title: templateTitles[name], subject, group: groupOf(name)[1], locales, host: host?.id ?? null, pose: host?.pose ?? null, nav });
}
fs.writeFileSync(path.join(out, 'manifest.json'), JSON.stringify(manifest));

const copy = (from, to) => {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
};
copy(path.join(root, 'docs/email-system/index.html'), path.join(out, 'index.html'));
copy(path.join(root, 'public/assets/email'), path.join(out, 'assets/email'));
copy(path.join(root, 'public/assets/logo/outbrick-wordmark.png'), path.join(out, 'assets/logo/outbrick-wordmark.png'));
copy(path.join(root, 'public/og.png'), path.join(out, 'assets/og.png'));
for (const l of ['fr', 'de', 'es', 'ja', 'pt-BR']) {
  const og = path.join(root, `public/og/${l}.png`);
  if (fs.existsSync(og)) copy(og, path.join(out, `assets/og/${l}.png`));
}
for (const f of ['fredoka-latin-wght.woff2', 'figtree-latin-wght.woff2']) copy(path.join(root, 'public/fonts', f), path.join(out, 'fonts', f));

const files = fs.readdirSync(path.join(out, 'emails')).length;
console.log(`[email-system] ${manifest.length} templates, ${files} emails -> ${path.relative(root, out) || out}/`);
