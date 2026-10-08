// Builds an OutBrick News campaign from an issue file and sends it with Resend Broadcasts.
//
//   node --experimental-strip-types scripts/send-newsletter.mjs emails/issues/<issue>.json --dry-run
//   node --experimental-strip-types scripts/send-newsletter.mjs emails/issues/<issue>.json --test you@example.com [--locale fr]
//   node --experimental-strip-types scripts/send-newsletter.mjs emails/issues/<issue>.json [--locale fr] [--send] [--schedule "in 1 hour"]
//
// --dry-run   Writes every language's HTML and plain text to outputs/newsletter/<issue id>/ and
//             sends nothing. Needs no key.
// --test ADDR Sends one copy per language (or just --locale) to ADDR through POST /emails, with a
//             real signed unsubscribe link for ADDR and the List-Unsubscribe headers.
// (neither)   Creates one broadcast per language in Resend, addressed to that language's
//             segment. Without --send they are left as drafts to review in the Resend dashboard;
//             with --send --locale LANG --broadcast-id ID the reviewed draft goes out (optionally --schedule).
//
// Segments: RESEND_SEGMENT_ID is "OutBrick News", everyone who confirmed. If per-language
// segments exist (RESEND_SEGMENT_ID_EN, _FR, _DE, _ES, _JA; newsletter-confirm adds each
// subscriber to theirs), each language goes to its own segment. Without them, pass --locale to
// send one language to the whole RESEND_SEGMENT_ID segment.
//
// Broadcasts use Resend's {{{RESEND_UNSUBSCRIBE_URL}}}, which Resend fills in per recipient and
// honours by setting the contact to unsubscribed — the same state newsletter-unsubscribe sets.
//
// Environment: RESEND_API_KEY (not for --dry-run), RESEND_SEGMENT_ID[_<LANG>], and
// NEWSLETTER_POSTAL_ADDRESS unless the issue file has "address". A real send refuses to go out
// with the placeholder address: commercial email must carry the sender's postal address.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { newsletterCampaign, emailLocales, isEmailLocale, PLACEHOLDER_ADDRESS } = await import('../emails/index.ts');
const { SENDERS, resend, sendEmail } = await import('../emails/resend.ts');
const { toText } = await import('../emails/core.ts');
const { unsubscribeUrl, normalizeEmail } = await import('../emails/links.ts');
const { listUnsubscribeHeaders } = await import('../emails/newsletter.ts');

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
const file = args.find((a, i) => !a.startsWith('--') && !['--test', '--locale', '--schedule', '--broadcast-id', '--topic'].includes(args[i - 1]));
const die = (message) => {
  console.error(`send-newsletter: ${message}`);
  process.exit(1);
};

if (!file) die('give an issue file, e.g. emails/issues/2026-10-sample.json');
const issuePath = path.resolve(root, file);
if (!fs.existsSync(issuePath)) die(`no such file: ${file}`);
const issue = JSON.parse(fs.readFileSync(issuePath, 'utf8'));
if (!issue.id || !issue.locales || typeof issue.locales !== 'object') die('the issue needs "id" and "locales"');

const onlyLocale = value('--locale');
if (onlyLocale && !isEmailLocale(onlyLocale)) die(`--locale must be one of ${emailLocales.join(', ')}`);
const locales = (onlyLocale ? [onlyLocale] : emailLocales).filter((l) => issue.locales[l]);
if (!locales.length) die(`the issue has no content for ${onlyLocale ?? 'any language'}`);
for (const l of locales) {
  const c = issue.locales[l];
  for (const key of ['subject', 'preheader', 'hero', 'stories']) if (!c[key]) die(`${l}: missing "${key}"`);
  if (c.stories.length < 2 || c.stories.length > 3) die(`${l}: an issue has 2 or 3 stories (has ${c.stories.length})`);
}

// The postal address is printed by every email's brand footer, in the reader's language
// (emails/brand.ts); an issue's "address" or NEWSLETTER_POSTAL_ADDRESS is still accepted.
const address = toText(issue.address ?? process.env.NEWSLETTER_POSTAL_ADDRESS ?? PLACEHOLDER_ADDRESS).trim();
// Broadcasts can't sign a link per reader, so the footer's Preferences link opens the page that
// emails each reader their own (netlify/lifecycle/newsletter.ts).
const prefsAsk = (locale) => `https://www.outbrick.site/.netlify/functions/newsletter-preferences?l=${locale}`;
const render = (locale, unsubscribe) => newsletterCampaign({ locale, issue: issue.locales[locale], unsubscribeUrl: unsubscribe, preferencesUrl: prefsAsk(locale), address });
// --topic releases|tips|events: only readers who kept that topic on get it (needs RESEND_TOPIC_<TOPIC>).
const topicName = value('--topic');
if (topicName && !['releases', 'tips', 'events'].includes(topicName)) die('--topic must be releases, tips or events');
const topicId = topicName ? process.env[`RESEND_TOPIC_${topicName.toUpperCase()}`] : undefined;
if (topicName && !topicId) die(`--topic ${topicName} needs RESEND_TOPIC_${topicName.toUpperCase()}`);

// --- dry run -----------------------------------------------------------------------------
if (flag('--dry-run')) {
  const out = path.join(root, 'outputs/newsletter', issue.id);
  fs.mkdirSync(out, { recursive: true });
  for (const locale of locales) {
    const email = render(locale, '{{{RESEND_UNSUBSCRIBE_URL}}}');
    fs.writeFileSync(path.join(out, `${locale}.html`), email.html);
    fs.writeFileSync(path.join(out, `${locale}.txt`), `Subject: ${email.subject}\n\n${email.text}`);
    console.log(`${locale}: "${email.subject}" — ${Buffer.byteLength(email.html)} bytes -> ${path.relative(root, out)}/${locale}.html`);
  }
  process.exit(0);
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) die('RESEND_API_KEY is not set (use --dry-run to render without it)');

// --- test send ---------------------------------------------------------------------------
const testTo = value('--test');
if (testTo !== undefined) {
  const to = normalizeEmail(testTo);
  if (!to) die('--test needs an email address');
  for (const locale of locales) {
    const unsub = unsubscribeUrl('https://www.outbrick.site', apiKey, to, locale);
    const email = render(locale, unsub);
    const result = await sendEmail(apiKey, {
      ...SENDERS.news,
      to,
      subject: `[Test] ${email.subject}`,
      html: email.html,
      text: email.text,
      headers: listUnsubscribeHeaders(unsub),
      tags: [{ name: 'form', value: 'newsletter-test' }, { name: 'locale', value: locale }],
    });
    console.log(result.ok ? `${locale}: test sent (${toText(result.data?.id)})` : `${locale}: ${result.error}`);
    if (!result.ok) process.exitCode = 1;
  }
  process.exit();
}

// --- broadcast ---------------------------------------------------------------------------
const send = flag('--send');
const schedule = value('--schedule');
if (schedule && !send) die('--schedule needs --send');
if (send && !address) die('set NEWSLETTER_POSTAL_ADDRESS (or "address" in the issue) before a real send');

const reviewedId = value('--broadcast-id');
if (send && (!onlyLocale || !reviewedId || !/^[a-zA-Z0-9-]+$/.test(reviewedId))) die('--send needs --locale and --broadcast-id for the draft reviewed in Resend');

if (send) {
  const sent = await resend(apiKey, `/broadcasts/${reviewedId}/send`, { body: schedule ? { scheduled_at: schedule } : {} });
  console.log(sent.ok ? `${onlyLocale}: reviewed broadcast ${reviewedId} ${schedule ? `scheduled (${schedule})` : 'sent'}` : sent.error);
  process.exit(sent.ok ? 0 : 1);
}

const main = process.env.RESEND_SEGMENT_ID;
const segmentFor = (locale) => process.env[`RESEND_SEGMENT_ID_${locale.toUpperCase()}`] ?? (onlyLocale ? main : undefined);
for (const locale of locales) {
  if (!segmentFor(locale)) die(`no segment for ${locale}: set RESEND_SEGMENT_ID_${locale.toUpperCase()}, or pass --locale ${locale} to send it to RESEND_SEGMENT_ID`);
}

for (const locale of locales) {
  const email = render(locale, '{{{RESEND_UNSUBSCRIBE_URL}}}');
  const created = await resend(apiKey, '/broadcasts', {
    body: {
      segment_id: segmentFor(locale),
      ...(topicId ? { topic_id: topicId } : {}),
      from: SENDERS.news.from,
      reply_to: SENDERS.news.replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
      name: `${issue.name ?? issue.id} [${locale}]`,
    },
  });
  if (!created.ok) {
    console.error(`${locale}: ${created.error}`);
    process.exitCode = 1;
    continue;
  }
  const id = toText(created.data?.id);
  console.log(`${locale}: draft broadcast ${id} created — review it in Resend, then rerun with --send --locale ${locale} --broadcast-id ${id}`);
}
