// Turns the OutBrick News campaign layout into Resend templates, one per language, so a
// newsletter can be written and sent from the Resend dashboard in the same design as the
// emails this site sends from code.
//
//   node --experimental-strip-types scripts/build-resend-templates.mjs            # write files only
//   node --experimental-strip-types scripts/build-resend-templates.mjs --push     # also create/update + publish in Resend
//   node --experimental-strip-types scripts/build-resend-templates.mjs --push-on-production
//
// The last form is what `pnpm build` runs: on Netlify's production deploy (CONTEXT=production,
// where RESEND_API_KEY is set) it pushes, so the templates in Resend always match the design
// that is live; anywhere else (Deploy Previews, CI, a laptop) it only writes the files. A
// failed push there is reported and never fails the deploy.
//
// Output: outputs/resend-templates/<locale>.html, <locale>.txt and <locale>.json (the
// template's name, alias, subject and variables, ready for POST /templates).
//
// The layout is newsletterCampaign() from emails/templates.ts, rendered with marker values
// that are then swapped for Resend variables ({{{HERO_TITLE}}} …). Every variable falls back
// to the sample issue (emails/issues/2026-10-sample.json) in that language, so a preview in
// Resend shows a real letter. The unsubscribe link is Resend's {{{RESEND_UNSUBSCRIBE_URL}}},
// which Resend fills in per recipient and honours by setting the contact to unsubscribed.
//
// Variables hold HTML (triple braces are not escaped): use <strong>, <em>, <a> or <br> in a
// body if you need them, and escape & < > in plain text. Images keep the sample's shape:
// HERO_IMAGE_URL at 1200×630, STORYn_IMAGE_URL square.
//
// --push needs RESEND_API_KEY (a key with access to templates). It looks each template up by
// alias (outbrick-news-<locale>), updates it or creates it, then publishes it.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { newsletterCampaign, emailLocales } = await import('../emails/index.ts');
const { SENDERS, resend } = await import('../emails/resend.ts');
const { SITE, toText } = await import('../emails/core.ts');

const sample = JSON.parse(fs.readFileSync(path.join(root, 'emails/issues/2026-10-sample.json'), 'utf8'));
const address = toText(process.env.NEWSLETTER_POSTAL_ADDRESS ?? sample.address ?? '').trim();
const STORIES = 3;

const mark = (key) => `OBVAR${key}OBEND`;
const urlMark = (key) => `/${mark(key)}`;
const abs = (src) => (src.startsWith('https://') ? src : `${SITE}${src.startsWith('/') ? '' : '/'}${src}`);

function build(locale) {
  const c = sample.locales[locale];
  if (!c) throw new Error(`the sample issue has no ${locale}`);
  const vars = [];
  const v = (key, fallback) => {
    vars.push({ key, type: 'string', fallbackValue: toText(fallback ?? '') });
    return mark(key);
  };
  const u = (key, fallback) => {
    vars.push({ key, type: 'string', fallbackValue: abs(toText(fallback ?? SITE)) });
    return urlMark(key);
  };
  const hero = c.hero;
  const issue = {
    subject: v('SUBJECT', c.subject),
    preheader: v('PREHEADER', c.preheader),
    hero: {
      eyebrow: v('EYEBROW', hero.eyebrow),
      title: v('HERO_TITLE', hero.title),
      body: v('HERO_BODY', hero.body.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n\s*\n/g, '<br><br>')),
      image: { src: u('HERO_IMAGE_URL', hero.image?.src ?? '/og.png'), alt: v('HERO_IMAGE_ALT', hero.image?.alt), width: 1200, height: 630 },
    },
    stories: Array.from({ length: STORIES }, (_, i) => {
      const s = c.stories[i] ?? c.stories[c.stories.length - 1];
      const n = i + 1;
      return {
        title: v(`STORY${n}_TITLE`, s.title),
        body: v(`STORY${n}_BODY`, s.body.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')),
        image: { src: u(`STORY${n}_IMAGE_URL`, s.image?.src ?? '/assets/friends/bloo.png'), alt: v(`STORY${n}_IMAGE_ALT`, s.image?.alt), width: 360, height: 360 },
        link: { label: v(`STORY${n}_LINK_LABEL`, s.link?.label), href: urlMark(`STORY${n}_LINK_URL`) },
      };
    }),
    cta: { label: v('CTA_LABEL', c.cta?.label), href: urlMark('CTA_URL') },
  };
  // Link fallbacks are registered here because their markers are made by urlMark() alone.
  issue.stories.forEach((_, i) => vars.push({ key: `STORY${i + 1}_LINK_URL`, type: 'string', fallbackValue: abs(c.stories[i]?.link?.href ?? '/whats-new') }));
  const rendered = newsletterCampaign({ locale, issue, unsubscribeUrl: '{{{RESEND_UNSUBSCRIBE_URL}}}', address: mark('POSTAL_ADDRESS') });
  vars.push({ key: 'POSTAL_ADDRESS', type: 'string', fallbackValue: address });
  // The CTA falls back to the language's App Store link, which the campaign draws when an issue has none.
  const ctaDefault = newsletterCampaign({ locale, issue: { ...issue, cta: undefined }, unsubscribeUrl: '', address: '' });
  const storeUrl = ctaDefault.text.match(/https:\/\/apps\.apple\.com\/\S+/)?.[0] ?? 'https://apps.apple.com/app/outbrick/id6807997465';
  vars.push({ key: 'CTA_URL', type: 'string', fallbackValue: c.cta?.href ? abs(c.cta.href) : storeUrl });
  if (!c.cta?.label) vars.find((x) => x.key === 'CTA_LABEL').fallbackValue = ctaDefault.text.match(/\n([^\n:]+): https:\/\/apps\.apple\.com/)?.[1] ?? 'OutBrick on the App Store';

  const swap = (s) =>
    s
      .replace(/https:\/\/[^"'\s<>()]*?\/OBVAR(\w+?)OBEND/g, '{{{$1}}}')
      .replace(/\/?OBVAR(\w+?)OBEND/g, '{{{$1}}}');
  const html = swap(rendered.html);
  const text = swap(rendered.text);
  const left = (html + text).match(/OBVAR|OBEND/);
  if (left) throw new Error(`${locale}: a marker survived the swap`);
  const used = new Set([...(html + text).matchAll(/\{\{\{(\w+)\}\}\}/g)].map((m) => m[1]));
  const variables = [...new Map(vars.map((x) => [x.key, x])).values()].filter((x) => used.has(x.key) || x.key === 'SUBJECT');
  return {
    name: `OutBrick News (${locale})`,
    alias: `outbrick-news-${locale}`,
    from: SENDERS.news.from,
    replyTo: SENDERS.news.replyTo,
    subject: '{{{SUBJECT}}}',
    html,
    text,
    variables,
  };
}

const out = path.join(root, 'outputs/resend-templates');
fs.mkdirSync(out, { recursive: true });
const templates = emailLocales.map((locale) => ({ locale, t: build(locale) }));
for (const { locale, t } of templates) {
  fs.writeFileSync(path.join(out, `${locale}.html`), t.html);
  fs.writeFileSync(path.join(out, `${locale}.txt`), t.text);
  fs.writeFileSync(path.join(out, `${locale}.json`), JSON.stringify(t, null, 2));
  console.log(`${locale}: ${t.alias} — ${t.variables.length} variables, ${Buffer.byteLength(t.html)} bytes`);
}
if (!address) console.warn('note: NEWSLETTER_POSTAL_ADDRESS is not set, so POSTAL_ADDRESS has no fallback; fill it in on every send.');

const onProduction = process.argv.includes('--push-on-production') && process.env.CONTEXT === 'production';
if (process.argv.includes('--push') || onProduction) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('build-resend-templates: pushing needs RESEND_API_KEY');
    process.exit(onProduction ? 0 : 1);
  }
  for (const { locale, t } of templates) {
    const body = { name: t.name, alias: t.alias, from: t.from, reply_to: t.replyTo, subject: t.subject, html: t.html, text: t.text, variables: t.variables.map((x) => ({ key: x.key, type: x.type, fallback_value: x.fallbackValue })) };
    const found = await resend(apiKey, `/templates/${t.alias}`, { method: 'GET' });
    const saved = found.ok
      ? await resend(apiKey, `/templates/${toText(found.data?.id)}`, { method: 'PATCH', body })
      : await resend(apiKey, '/templates', { body });
    if (!saved.ok) {
      console.error(`${locale}: ${saved.error}`);
      if (!onProduction) process.exitCode = 1;
      continue;
    }
    const id = toText(saved.data?.id ?? found.data?.id);
    const published = await resend(apiKey, `/templates/${id}/publish`, {});
    console.log(published.ok ? `${locale}: ${t.alias} ${found.ok ? 'updated' : 'created'} and published (${id})` : `${locale}: ${published.error}`);
    if (!published.ok && !onProduction) process.exitCode = 1;
  }
}
