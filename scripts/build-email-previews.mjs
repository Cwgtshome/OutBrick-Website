// Renders every email template with sample data in all five languages, and checks each one.
// Runs as the last step of `pnpm build` (after postbuild, so nothing here reaches the sitemap).
//
// On every build it renders and checks: a template that throws, loses its lang attribute, a
// subject, a preheader or its plain-text part, or lets sample markup through unescaped, fails
// the build.
//
// Only on a Netlify Deploy Preview or branch deploy (CONTEXT=deploy-preview|branch-deploy) does
// it also write the pages to dist/client/email-previews/, so the owner can open them on a phone.
// Production never gets them, and neither does CI, whose audits therefore never see them. Every
// preview page carries noindex, and public/_headers adds X-Robots-Tag to the whole folder.
//
//   node --experimental-strip-types scripts/build-email-previews.mjs            # check only
//   node --experimental-strip-types scripts/build-email-previews.mjs --out DIR  # write to DIR

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { renderSample, templateNames, templateTitles, emailLocales } = await import('../emails/index.ts');

const args = process.argv.slice(2);
const outArg = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;
const context = process.env.CONTEXT ?? '';
const write = Boolean(outArg) || context === 'deploy-preview' || context === 'branch-deploy';
const outDir = outArg ? path.resolve(outArg) : path.join(root, 'dist/client/email-previews');

const issue = JSON.parse(fs.readFileSync(path.join(root, 'emails/issues/2026-10-sample.json'), 'utf8'));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const problems = [];
const rendered = [];
for (const name of templateNames) {
  for (const locale of emailLocales) {
    // On the preview host the site's CSP allows images and fonts from 'self' only, so the
    // previews load the same files from the deploy itself instead of www.outbrick.site.
    const email = renderSample(name, locale, issue, write ? '' : undefined);
    const where = `${name}/${locale}`;
    if (!email.subject?.trim()) problems.push(`${where}: empty subject`);
    if (!email.text?.trim() || email.text.length < 120) problems.push(`${where}: plain-text part is missing or too short`);
    if (!new RegExp(`<html lang="${locale}"`).test(email.html)) problems.push(`${where}: <html lang> is not ${locale}`);
    if (!/<meta name="color-scheme" content="light dark">/.test(email.html)) problems.push(`${where}: no color-scheme meta`);
    if (/<b>Not bold<\/b>|<b>Pas en gras|<b>Nicht fett|<b>No en negrita|<b>太字/.test(email.html)) problems.push(`${where}: sample markup was not escaped`);
    if (/<img(?![^>]*\balt=")[^>]*>/.test(email.html)) problems.push(`${where}: an <img> has no alt`);
    if (/<table(?![^>]*role="presentation")[^>]*>/.test(email.html)) problems.push(`${where}: a layout table lacks role="presentation"`);
    if (/undefined|\[object Object\]/.test(email.html + email.text)) problems.push(`${where}: "undefined" or "[object Object]" in the output`);
    if (Buffer.byteLength(email.html) > 100_000) problems.push(`${where}: HTML is ${Buffer.byteLength(email.html)} bytes; Gmail clips messages over 102 KB`);
    rendered.push({ name, locale, email });
  }
}
if (problems.length) {
  console.error(`[email-previews] ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log(`[email-previews] ${rendered.length} emails rendered and checked (${templateNames.length} templates × ${emailLocales.length} languages).`);

if (!write) {
  console.log(`[email-previews] not written (CONTEXT="${context}"): previews are only published on Deploy Previews and branch deploys.`);
  process.exit(0);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
const robots = '<meta name="robots" content="noindex, nofollow">\n';
for (const { name, locale, email } of rendered) {
  const html = email.html
    .replace('<head>\n', `<head>\n${robots}`)
    .replaceAll("url('https://www.outbrick.site/fonts/", "url('/fonts/");
  fs.writeFileSync(path.join(outDir, `${name}.${locale}.html`), html);
  fs.writeFileSync(path.join(outDir, `${name}.${locale}.txt`), `Subject: ${email.subject}\n\n${email.text}`);
}

const rows = templateNames
  .map((name) => {
    const cells = emailLocales
      .map((locale) => {
        const email = rendered.find((r) => r.name === name && r.locale === locale).email;
        return `<li><a href="./${name}.${locale}.html" lang="${locale}" title="${esc(email.subject)}">${locale.toUpperCase()}</a> <a class="txt" href="./${name}.${locale}.txt">text</a></li>`;
      })
      .join('');
    const subject = rendered.find((r) => r.name === name && r.locale === 'en').email.subject;
    return `<section><h2>${esc(templateTitles[name])}</h2><p class="subj">${esc(subject)}</p><ul>${cells}</ul></section>`;
  })
  .join('\n');

fs.writeFileSync(
  path.join(outDir, 'index.html'),
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${robots}<meta name="color-scheme" content="light dark">
<title>OutBrick email previews</title>
<style>
:root{color-scheme:light dark;--bg:#fff3dd;--card:#fffaf1;--ink:#1d1747;--muted:#4f4a6e;--link:#3b2fb0;--edge:#efe2c6}
@media (prefers-color-scheme:dark){:root{--bg:#120e33;--card:#221a62;--ink:#f3f1fc;--muted:#c9c2ff;--link:#ffd66e;--edge:#3a3190}}
body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.55 Figtree,system-ui,-apple-system,sans-serif}
main{max-width:860px;margin:0 auto;padding:24px 16px 48px}
.course{display:flex;height:10px;border-radius:6px;overflow:hidden;margin:0 0 20px}.course i{flex:1}
h1{font:600 30px/1.2 Fredoka,ui-rounded,system-ui,sans-serif;margin:0 0 8px}
section{background:var(--card);border:2px solid var(--edge);border-radius:16px;padding:16px 18px;margin:0 0 14px}
h2{font:600 20px/1.3 Fredoka,ui-rounded,system-ui,sans-serif;margin:0}
.subj{color:var(--muted);margin:4px 0 10px;font-size:16px}
ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
li a{display:inline-block;padding:6px 12px;border-radius:10px;background:#ffc53d;color:#1a1350;font-weight:800;text-decoration:none}
li a.txt{background:transparent;color:var(--link);text-decoration:underline;font-weight:600;padding:6px 4px}
p{color:var(--muted)}
</style>
</head>
<body>
<main>
<div class="course" aria-hidden="true"><i style="background:#e2352f"></i><i style="background:#ffc53d"></i><i style="background:#26b9b0"></i><i style="background:#7b5cf0"></i><i style="background:#3b8bf0"></i><i style="background:#3fc544"></i></div>
<h1>OutBrick email previews</h1>
<p>Every template with sample data, in English, French, German, Spanish and Japanese. Built only on Deploy Previews (${esc(context)}); not part of the production site. Images load from this deploy; real emails load them from www.outbrick.site. Links in samples are inert.</p>
${rows}
</main>
</body>
</html>
`,
);
console.log(`[email-previews] wrote ${rendered.length * 2 + 1} files to ${path.relative(root, outDir)}/`);
