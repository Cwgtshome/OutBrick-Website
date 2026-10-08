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
// --by-language [--go]  (8 October 2026) Sends every language at once without per-language
//             segments, which the Resend plan (three segments) cannot hold: each confirmed
//             contact in RESEND_SEGMENT_ID gets the issue in their "language" property (set by
//             newsletter-confirm; English when absent), through POST /emails/batch, with their
//             own signed unsubscribe link and List-Unsubscribe headers. Contacts who turned the
//             issue's topic off are skipped. Without --go it only counts who would get what.
//
// Topics: an issue's "topic" ("releases" or "tips") files it under Resend's "New versions" or
// "Tips and events" topic (RESEND_TOPIC_RELEASES / RESEND_TOPIC_TIPS); a broadcast then skips
// anyone who opted out of that topic on Resend's preference page.
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
const { SENDERS, resend, sendEmail, localeEnvSuffix, topicId } = await import('../emails/resend.ts');
const { toText } = await import('../emails/core.ts');
const { unsubscribeUrl, normalizeEmail } = await import('../emails/links.ts');
const { listUnsubscribeHeaders } = await import('../emails/newsletter.ts');

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
const file = args.find((a, i) => !a.startsWith('--') && !['--test', '--locale', '--schedule', '--broadcast-id'].includes(args[i - 1]));
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

const address = toText(issue.address ?? process.env.NEWSLETTER_POSTAL_ADDRESS ?? PLACEHOLDER_ADDRESS).trim();
const render = (locale, unsubscribe) => newsletterCampaign({ locale, issue: issue.locales[locale], unsubscribeUrl: unsubscribe, address });

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
  if (address === PLACEHOLDER_ADDRESS) console.warn('note: the footer still shows the placeholder postal address.');
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
if (send && (!address || address === PLACEHOLDER_ADDRESS)) die('set NEWSLETTER_POSTAL_ADDRESS (or "address" in the issue) before a real send');

const reviewedId = value('--broadcast-id');
if (send && (!onlyLocale || !reviewedId || !/^[a-zA-Z0-9-]+$/.test(reviewedId))) die('--send needs --locale and --broadcast-id for the draft reviewed in Resend');

if (send) {
  const sent = await resend(apiKey, `/broadcasts/${reviewedId}/send`, { body: schedule ? { scheduled_at: schedule } : {} });
  console.log(sent.ok ? `${onlyLocale}: reviewed broadcast ${reviewedId} ${schedule ? `scheduled (${schedule})` : 'sent'}` : sent.error);
  process.exit(sent.ok ? 0 : 1);
}

const main = process.env.RESEND_SEGMENT_ID;
const topic = topicId(process.env, issue.topic);
if (issue.topic && !topic) die(`the issue's topic "${issue.topic}" needs ${issue.topic === 'tips' ? 'RESEND_TOPIC_TIPS' : 'RESEND_TOPIC_RELEASES'} (topics are "releases" or "tips")`);

// --- every language, one email per contact -------------------------------------------------
if (flag('--by-language')) {
  if (!main) die('--by-language needs RESEND_SEGMENT_ID');
  const go = flag('--go');
  if (go && (!address || address === PLACEHOLDER_ADDRESS)) die('set NEWSLETTER_POSTAL_ADDRESS (or "address" in the issue) before a real send');
  const contacts = [];
  for (let after; ; ) {
    const page = await resend(apiKey, `/segments/${encodeURIComponent(main)}/contacts?limit=100${after ? `&after=${encodeURIComponent(after)}` : ''}`, { method: 'GET' });
    if (!page.ok) die(page.error);
    const rows = Array.isArray(page.data?.data) ? page.data.data : [];
    contacts.push(...rows);
    if (!page.data?.has_more || !rows.length) break;
    after = toText(rows[rows.length - 1].id);
  }
  const byLocale = new Map();
  let skipped = 0;
  for (const c of contacts) {
    if (c.unsubscribed) { skipped++; continue; }
    const id = toText(c.id);
    const full = await resend(apiKey, `/contacts/${encodeURIComponent(id)}`, { method: 'GET' });
    if (!full.ok) die(full.error);
    if (topic) {
      const topics = await resend(apiKey, `/contacts/${encodeURIComponent(id)}/topics`, { method: 'GET' });
      if (!topics.ok) die(topics.error);
      const rows = Array.isArray(topics.data?.data) ? topics.data.data : [];
      if (rows.some((t) => t.id === topic && t.subscription === 'opt_out')) { skipped++; continue; }
    }
    const asked = toText(full.data?.properties?.language);
    const locale = isEmailLocale(asked) && issue.locales[asked] ? asked : 'en';
    if (onlyLocale && locale !== onlyLocale) continue;
    if (!byLocale.has(locale)) byLocale.set(locale, []);
    byLocale.get(locale).push(normalizeEmail(c.email));
  }
  for (const [locale, list] of byLocale) console.log(`${locale}: ${list.length} recipient(s)`);
  console.log(`skipped (unsubscribed or topic off): ${skipped}`);
  if (!go) {
    console.log('counted only; rerun with --go to send');
    process.exit(0);
  }
  for (const [locale, list] of byLocale) {
    for (let i = 0; i < list.length; i += 100) {
      const chunk = list.slice(i, i + 100).filter(Boolean);
      const batch = chunk.map((to) => {
        const unsub = unsubscribeUrl('https://www.outbrick.site', apiKey, to, locale);
        const email = render(locale, unsub);
        return {
          from: SENDERS.news.from,
          to: [to],
          reply_to: SENDERS.news.replyTo,
          subject: email.subject,
          html: email.html,
          text: email.text,
          headers: listUnsubscribeHeaders(unsub),
          tags: [{ name: 'form', value: 'newsletter' }, { name: 'issue', value: String(issue.id).replace(/[^A-Za-z0-9_-]/g, '_').slice(0, 256) }, { name: 'locale', value: locale.replace('-', '_') }],
        };
      });
      // One key per issue, language and chunk: a rerun after a failure never sends a chunk twice.
      const sent = await resend(apiKey, '/emails/batch', { body: batch, idempotencyKey: `newsletter-${issue.id}-${locale}-${i / 100}` });
      console.log(sent.ok ? `${locale}: sent ${batch.length} (chunk ${i / 100 + 1})` : `${locale}: ${sent.error}`);
      if (!sent.ok) process.exitCode = 1;
    }
  }
  process.exit();
}

const segmentFor = (locale) => process.env[`RESEND_SEGMENT_ID_${localeEnvSuffix(locale)}`] ?? (onlyLocale ? main : undefined);
for (const locale of locales) {
  if (!segmentFor(locale)) die(`no segment for ${locale}: set RESEND_SEGMENT_ID_${localeEnvSuffix(locale)}, pass --locale ${locale} to send it to RESEND_SEGMENT_ID, or use --by-language`);
}

for (const locale of locales) {
  const email = render(locale, '{{{RESEND_UNSUBSCRIBE_URL}}}');
  const created = await resend(apiKey, '/broadcasts', {
    body: {
      segment_id: segmentFor(locale),
      ...(topic ? { topic_id: topic } : {}),
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
