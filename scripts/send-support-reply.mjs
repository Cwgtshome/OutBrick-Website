// Sends a reply the team wrote to someone who contacted OutBrick Support, in the email design
// (emails/templates.ts supportReply), from support@ (8 October 2026).
//
//   node --experimental-strip-types scripts/send-support-reply.mjs replies/<file>.json --dry-run
//   node --experimental-strip-types scripts/send-support-reply.mjs replies/<file>.json --test you@example.com
//   node --experimental-strip-types scripts/send-support-reply.mjs replies/<file>.json --send
//
// A reply file is JSON: { "to", "locale", "subject", "preheader", "heading", "paragraphs": [],
// "done": [{ "title", "body" }], "cta": { "label", "url" }, "after": [], "inReplyTo" }. Text takes
// **bold**, *italic* and [text](url). "inReplyTo" is the customer's Message-ID (Mail › View ›
// Message › All Headers), so the reply sits in their thread; leave it out for a new thread.
//
// --dry-run   Writes the HTML and plain text to outputs/support-replies/ and sends nothing.
// --test ADDR Sends one copy to ADDR, marked [Test].
// --send      Sends it to "to". One send per file: the idempotency key is the file's content.
//
// Reply files hold a customer's address and words: keep them out of Git (outputs/ and
// replies/ are ignored). A support reply never subscribes anyone; its invitation only links to
// the newsletter page, where the double opt-in happens.

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { supportReply, isEmailLocale } = await import('../emails/index.ts');
const { SENDERS, sendEmail } = await import('../emails/resend.ts');
const { toText } = await import('../emails/core.ts');
const { normalizeEmail } = await import('../emails/links.ts');

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
const die = (message) => {
  console.error(`send-support-reply: ${message}`);
  process.exit(1);
};

const file = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--test');
if (!file) die('give a reply file, e.g. replies/2026-10-08-level-8.json');
const replyPath = path.resolve(root, file);
if (!fs.existsSync(replyPath)) die(`no such file: ${file}`);
const raw = fs.readFileSync(replyPath, 'utf8');
const reply = JSON.parse(raw);

const locale = reply.locale ?? 'en';
if (!isEmailLocale(locale)) die('"locale" must be one of en, fr, de, es, ja, pt-BR');
for (const key of ['subject', 'preheader', 'heading']) if (!toText(reply[key]).trim()) die(`missing "${key}"`);
if (!Array.isArray(reply.paragraphs) || !reply.paragraphs.length) die('"paragraphs" needs at least one paragraph');

const email = supportReply({
  locale,
  subject: toText(reply.subject),
  preheader: toText(reply.preheader),
  heading: toText(reply.heading),
  paragraphs: reply.paragraphs.map(toText),
  done: Array.isArray(reply.done) ? reply.done.map((d) => ({ title: toText(d.title), body: toText(d.body) })) : undefined,
  cta: reply.cta ? { label: toText(reply.cta.label), url: toText(reply.cta.url) } : undefined,
  after: Array.isArray(reply.after) ? reply.after.map(toText) : undefined,
});

if (flag('--dry-run')) {
  const out = path.join(root, 'outputs/support-replies');
  fs.mkdirSync(out, { recursive: true });
  const base = path.basename(file, '.json');
  fs.writeFileSync(path.join(out, `${base}.html`), email.html);
  fs.writeFileSync(path.join(out, `${base}.txt`), `Subject: ${email.subject}\n\n${email.text}`);
  console.log(`"${email.subject}" — ${Buffer.byteLength(email.html)} bytes -> ${path.relative(root, out)}/${base}.html`);
  process.exit(0);
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) die('RESEND_API_KEY is not set (use --dry-run to render without it)');

const testTo = value('--test');
const to = testTo !== undefined ? normalizeEmail(testTo) : normalizeEmail(reply.to);
if (!to) die(testTo !== undefined ? '--test needs an email address' : 'the reply needs "to"');
if (testTo === undefined && !flag('--send')) die('pass --dry-run, --test ADDR or --send');

const messageId = toText(reply.inReplyTo).trim();
if (messageId && !/^<[^<>\s]+@[^<>\s]+>$/.test(messageId)) die('"inReplyTo" must look like <id@host>');
const headers = messageId ? { 'In-Reply-To': messageId, References: messageId } : undefined;

const result = await sendEmail(
  apiKey,
  {
    ...SENDERS.support,
    to,
    subject: testTo !== undefined ? `[Test] ${email.subject}` : email.subject,
    html: email.html,
    text: email.text,
    headers,
    tags: [{ name: 'form', value: testTo !== undefined ? 'support-reply-test' : 'support-reply' }, { name: 'locale', value: locale }],
  },
  testTo !== undefined ? undefined : `support-reply-${crypto.createHash('sha256').update(raw).digest('hex').slice(0, 32)}`,
);
console.log(result.ok ? `sent (${toText(result.data?.id)})` : result.error);
process.exit(result.ok ? 0 : 1);
