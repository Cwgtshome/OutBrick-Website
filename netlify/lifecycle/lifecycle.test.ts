// The customer-lifecycle flows end to end on PGlite, with Resend replaced by a recorder:
// support cases (reply → feedback → reopen; fixed-in → release → notice), applications,
// the newsletter's welcome series, preferences and unsubscribe, account security, policy notices,
// and the outbox's gate.

import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request, testDb } from '../community/test/harness.ts';
import { setDatabaseForTests, transaction } from '../community/db.ts';
import { api, member } from '../community/test/forum-helpers.ts';
import { memorySignalStore } from '../community/idle.ts';
import { analyticsHash, confirmUrl, signedUrl, unsubscribeUrl } from '../../emails/links.ts';
import { cleanLink, emailReport, pruneEmailEvents, recordSiteEvent } from './analytics.ts';
import { handleConfirm } from '../../emails/newsletter.ts';
import { handleResendEvent } from '../functions/resend-events.mts';
import type { OutgoingEmail } from '../../emails/resend.ts';
import { createCase, handleFeedback, notifyFixedCases, setCaseSenderForTests, versionAtLeast } from './cases.ts';
import { createApplication, setApplicationSenderForTests } from './applications.ts';
import { applyRetention, handlePreferences, onConfirmed, onUnsubscribed, preferencesUrl, processReleaseBroadcasts, recordReleaseBroadcasts, releaseNextDue } from './newsletter.ts';
import { deviceLabel, onSessionStarted, setSecuritySenderForTests } from './security.ts';
import { drain, enqueue, outboxGate, setOutboxStoreForTests, signalOutbox } from './outbox.ts';
import { lifecycleTick } from './run.ts';

const KEY = 're_test_lifecycle_key';
let pg: PGlite;
let sent: { email: OutgoingEmail; key?: string }[] = [];
const recorder = async (_apiKey: string, email: OutgoingEmail, key?: string) => {
  sent.push({ email, key });
  return { ok: true, status: 200, data: { id: `e${sent.length}` } };
};
const env = { RESEND_API_KEY: KEY };
const tick = (at: Date) => lifecycleTick(at, { apiKey: KEY, send: recorder, env, skipSweep: true });

before(async () => {
  pg = await freshDatabase();
  process.env.RESEND_API_KEY = KEY;
  setOutboxStoreForTests(memorySignalStore());
  setCaseSenderForTests(recorder);
  setApplicationSenderForTests(recorder);
  setSecuritySenderForTests(recorder);
});
after(async () => {
  setOutboxStoreForTests(null);
  await pg.close();
});
beforeEach(() => {
  sent = [];
});

const days = (n: number) => new Date(Date.now() + n * 86400_000 + 60_000);

void test('versions compare numerically', () => {
  assert.ok(versionAtLeast('5.10', '5.9'));
  assert.ok(versionAtLeast('5.1', '5.1.0'));
  assert.ok(!versionAtLeast('5.1', '5.1.1'));
});

void test('a contact message becomes a case; a reply emails the player and queues one feedback request', async () => {
  const staff = await member(pg, { role: 'team', name: 'Mourad Hamdi' });
  const c = await createCase({ submissionId: 'sub-1', email: 'player@example.com', name: 'Ada Lovelace', locale: 'fr', topic: 'bug', message: 'Level 213 <b>breaks</b>', device: 'iPhone', appVersion: '5.0.1', iosVersion: '27.0' });
  assert.match(c.ref, /^OB-[0-9A-Z]{6}$/);
  assert.deepEqual(await createCase({ submissionId: 'sub-1', email: 'x@example.com', name: '', locale: 'en', topic: '', message: '', device: '', appVersion: '', iosVersion: '' }), c, 'a redelivered submission keeps its case');

  const member0 = await member(pg);
  assert.equal((await api('GET', '/admin/cases', { cookie: member0.cookie })).status, 403, 'members cannot read cases');
  const list = await api('GET', '/admin/cases', { cookie: staff.cookie });
  assert.equal(list.status, 200);
  assert.ok(list.body.cases.some((x: { ref: string }) => x.ref === c.ref));

  const reply = await api('POST', `/admin/cases/${c.id}/reply`, { cookie: staff.cookie, body: { message: 'Use the **colour bomb**. <script>x</script>' } });
  assert.equal(reply.status, 200, JSON.stringify(reply.body));
  assert.equal(reply.body.case.status, 'replied');
  assert.equal(sent.length, 1);
  assert.equal(sent[0].email.to, 'player@example.com');
  assert.match(sent[0].email.subject, new RegExp(c.ref));
  assert.match(sent[0].email.html, /<strong>colour bomb<\/strong>/);
  assert.doesNotMatch(sent[0].email.html, /<script>x/);
  assert.match(sent[0].email.html, /lang="fr"/);

  // A second reply pushes the feedback request back; still one request queued.
  await api('POST', `/admin/cases/${c.id}/reply`, { cookie: staff.cookie, body: { message: 'And update to 5.0.1.' } });
  const queued = await pg.query(`SELECT count(*)::int AS n FROM email_outbox WHERE kind = 'support-feedback' AND sent_at IS NULL`);
  assert.equal((queued.rows[0] as { n: number }).n, 1);

  sent = [];
  await tick(new Date());
  assert.equal(sent.length, 0, 'nothing is due yet');
  await tick(days(3));
  assert.equal(sent.length, 1);
  const feedback = sent[0].email;
  assert.match(feedback.subject, /./);
  const links = [...feedback.html.matchAll(/href="([^"]*functions\/support-feedback[^"]*)"/g)].map((m) => m[1].replace(/&amp;/g, '&'));
  assert.equal(links.length, 5, 'yes, not yet, and three Bloo ratings');
  assert.match(feedback.html, /email\/friends\/vio-cheer\.png/);
  assert.doesNotMatch(feedback.html, /😞|😍/, 'no emoji faces');

  // GET is scanner-safe: it records nothing.
  const notYet = links[1];
  const page = await handleFeedback(new Request(notYet), env, recorder);
  assert.equal(page.status, 200);
  const before = await pg.query(`SELECT feedback_at FROM support_cases WHERE id = $1`, [c.id]);
  assert.equal((before.rows[0] as { feedback_at: unknown }).feedback_at, null);

  sent = [];
  const form = new FormData();
  form.set('comment', 'Still broken on 214.');
  const posted = await handleFeedback(new Request(notYet, { method: 'POST', body: form, headers: { origin: 'https://www.outbrick.site' } }), env, recorder);
  assert.equal(posted.status, 200);
  const after = await pg.query(`SELECT status, reopened, feedback_solved, feedback_comment FROM support_cases WHERE id = $1`, [c.id]);
  assert.deepEqual(after.rows[0], { status: 'open', reopened: 1, feedback_solved: false, feedback_comment: 'Still broken on 214.' });
  assert.equal(sent.length, 1, 'the team hears about the reopen');
  assert.match(sent[0].email.subject, /Reopened/);

  // A tampered link is refused.
  const bad = await handleFeedback(new Request(notYet.replace(/t=[^&]+/, 't=AAAA')), env, recorder);
  assert.equal(bad.status, 410);
});

void test('a case marked fixed in a version is told when that version ships, then asked for feedback', async () => {
  const staff = await member(pg, { role: 'team' });
  const c = await createCase({ submissionId: 'sub-fix', email: 'fix@example.com', name: 'Lena', locale: 'de', topic: 'bug', message: 'Crash', device: '', appVersion: '', iosVersion: '' });
  const marked = await api('POST', `/admin/cases/${c.id}/fixed`, { cookie: staff.cookie, body: { version: '5.2', note: 'Fixed the crash on launch.' } });
  assert.equal(marked.status, 200);
  assert.equal(marked.body.case.status, 'fix_pending');
  assert.equal(await notifyFixedCases('5.1.3'), 0, 'an earlier version does not count');
  assert.equal(await notifyFixedCases('5.2'), 1);
  assert.equal(await notifyFixedCases('5.2'), 0, 'told once');
  await tick(new Date(Date.now() + 60_000));
  const fixed = sent.find((s) => s.email.to === 'fix@example.com');
  assert.ok(fixed);
  assert.match(fixed.email.html, /5\.2/);
  assert.match(fixed.email.html, /lang="de"/);
  assert.match(fixed.email.html, /Fixed the crash on launch\./);
});

void test('applications get their decision by email, and only allowed decisions', async () => {
  const staff = await member(pg, { role: 'team' });
  const aff = await createApplication({ kind: 'affiliate', submissionId: 'aff-1', email: 'creator@example.com', name: 'Ada', locale: 'en', code: 'ada27' });
  const job = await createApplication({ kind: 'careers', submissionId: 'job-1', email: 'dev@example.com', name: 'Lucía', locale: 'es', role: 'iOS Engineer' });
  assert.ok(aff && job);
  assert.equal((await api('POST', `/admin/applications/${aff}/decision`, { cookie: staff.cookie, body: { decision: 'next_step' } })).status, 400);
  const ok = await api('POST', `/admin/applications/${aff}/decision`, { cookie: staff.cookie, body: { decision: 'approved', code: 'ADA2026' } });
  assert.equal(ok.status, 200, JSON.stringify(ok.body));
  assert.equal(ok.body.application.status, 'approved');
  assert.match(sent[0].email.html, /ADA2026/);
  assert.match(sent[0].email.html, /outbrick\.site\/r\/ada2026/);
  const review = await api('POST', `/admin/applications/${job}/decision`, { cookie: staff.cookie, body: { decision: 'in_review' } });
  assert.equal(review.body.application.status, 'in_review');
  assert.match(sent[1].email.html, /lang="es"/);
  const list = await api('GET', '/admin/applications', { cookie: staff.cookie });
  assert.ok(list.body.applications.some((a: { id: number }) => a.id === job), 'in review stays on the pending list');
});

void test('the welcome series follows a confirmation and stops at unsubscribe', async () => {
  await onConfirmed('reader@example.com', 'ja');
  await onConfirmed('leaver@example.com', 'en');
  await onUnsubscribed('leaver@example.com');
  await tick(days(3));
  const toReader = sent.filter((s) => s.email.to === 'reader@example.com');
  assert.equal(toReader.length, 1);
  assert.match(toReader[0].email.html, /lang="ja"/);
  assert.match(toReader[0].email.html, /ob-menu-input/, 'letters carry the header menu');
  assert.match(toReader[0].email.html, /330279/);
  assert.ok(toReader[0].email.headers?.['List-Unsubscribe']);
  assert.ok(!sent.some((s) => s.email.to === 'leaver@example.com'), 'an unsubscribed reader gets nothing');
  sent = [];
  await tick(days(10));
  assert.equal(sent.filter((s) => s.email.to === 'reader@example.com').length, 1, 'letter 3 on day 10');
  const step = await pg.query(`SELECT welcome_step FROM newsletter_subscribers WHERE email = 'reader@example.com'`);
  assert.equal((step.rows[0] as { welcome_step: number }).welcome_step, 3);
});

void test('the preferences page saves topics and language behind a signed link', async () => {
  await onConfirmed('prefs@example.com', 'en');
  const url = preferencesUrl(KEY, 'prefs@example.com', 'en');
  const page = await handlePreferences(new Request(url), env, recorder);
  assert.equal(page.status, 200);
  assert.match(await page.text(), /type="checkbox"[^>]*name="releases"[^>]*checked/);
  const form = new FormData();
  form.set('releases', 'yes');
  form.set('locale', 'fr');
  const saved = await handlePreferences(new Request(url, { method: 'POST', body: form, headers: { origin: 'https://www.outbrick.site' } }), { ...env }, recorder);
  assert.equal(saved.status, 200);
  const row = await pg.query(`SELECT topics, locale FROM newsletter_subscribers WHERE email = 'prefs@example.com'`);
  assert.deepEqual(row.rows[0], { topics: { releases: true, tips: false, events: false }, locale: 'fr' });
  // Without a token: the ask page, and the same answer whether or not the address is known.
  const ask = new FormData();
  ask.set('email', 'nobody@example.com');
  const answered = await handlePreferences(new Request('https://www.outbrick.site/.netlify/functions/newsletter-preferences?l=en', { method: 'POST', body: ask, headers: { origin: 'https://www.outbrick.site' } }), env, recorder);
  assert.equal(answered.status, 200);
  assert.equal(sent.length, 0, 'no email to an address that is not on the list');
  // The keep-me link records engagement.
  await pg.query(`UPDATE newsletter_subscribers SET last_engaged_at = now() - interval '200 days', reengage_sent_at = now() WHERE email = 'prefs@example.com'`);
  const keep = signedUrl('https://www.outbrick.site/.netlify/functions/newsletter-preferences?l=en&keep=1', KEY, 'keep', { e: 'prefs@example.com' }, 3600);
  assert.equal((await handlePreferences(new Request(keep), env, recorder)).status, 200);
  const kept = await pg.query(`SELECT reengage_sent_at FROM newsletter_subscribers WHERE email = 'prefs@example.com'`);
  assert.equal((kept.rows[0] as { reengage_sent_at: unknown }).reengage_sent_at, null);
  void unsubscribeUrl;
});

void test('a second device triggers a sign-in alert; the first does not', async () => {
  const m = await member(pg);
  sent = [];
  const safari = { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/27.0 Safari/605.1.15' };
  const chrome = { 'user-agent': 'Mozilla/5.0 (Linux; Android 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Mobile Safari/537.36' };
  assert.equal(deviceLabel(safari['user-agent']), 'Safari on macOS');
  assert.equal(deviceLabel(chrome['user-agent']), 'Chrome on Android');
  // The harness signed in with an empty user agent ("A browser"): the account's first device.
  await onSessionStarted(request('POST', '/', { headers: safari }), m.id);
  assert.equal(sent.length, 1, 'a new browser is reported');
  assert.match(sent[0].email.html, /Safari on macOS/);
  assert.match(sent[0].email.html, /account-signout/);
  await onSessionStarted(request('POST', '/', { headers: safari }), m.id);
  assert.equal(sent.length, 1, 'the same browser again is not');
});

void test('policy notices reach members and readers once each', async () => {
  const admin = await member(pg, { role: 'admin' });
  const team = await member(pg, { role: 'team' });
  const body = { policy: 'privacy', effective: '2026-11-08', changes: { en: ['We name **Resend** as our email service.'], fr: ['Nous nommons **Resend**.'] }, audiences: ['member', 'news'] };
  assert.equal((await api('POST', '/admin/notices/policy', { cookie: team.cookie, body })).status, 403, 'admins only');
  const res = await api('POST', '/admin/notices/policy', { cookie: admin.cookie, body });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.ok(res.body.queued > 0);
  const again = await api('POST', '/admin/notices/policy', { cookie: admin.cookie, body });
  const total = await pg.query(`SELECT count(*)::int AS n FROM email_outbox WHERE kind = 'policy'`);
  assert.equal((total.rows[0] as { n: number }).n, res.body.queued, 'sending twice queues nothing new');
  void again;
  sent = [];
  await tick(new Date(Date.now() + 60_000));
  assert.ok(sent.length >= res.body.queued - 1);
  assert.ok(sent.every((s) => /330279/.test(s.email.html)));
});

void test('the outbox gate keeps the database asleep until something is due', async () => {
  const store = memorySignalStore();
  setOutboxStoreForTests(store);
  const now = Date.now();
  assert.equal(await outboxGate(now), false, 'nothing signalled');
  await signalOutbox(now + 3600_000);
  assert.equal(await outboxGate(now), false);
  await signalOutbox(now - 1);
  assert.equal(await outboxGate(now), true, 'an earlier signal lowers the due time');
  await signalOutbox(now + 7200_000);
  assert.equal(await outboxGate(now), true, 'a later signal never raises it');
  setOutboxStoreForTests(memorySignalStore());
  // Restore an open gate for any later test by signalling now.
  await signalOutbox(0);
});

void test('retention deletes what the privacy policy says, and nothing younger', async () => {
  const old = await createCase({ submissionId: 'old-1', email: 'old@example.com', name: '', locale: 'en', topic: '', message: 'x', device: '', appVersion: '', iosVersion: '' });
  const open = await createCase({ submissionId: 'old-2', email: 'open@example.com', name: '', locale: 'en', topic: '', message: 'x', device: '', appVersion: '', iosVersion: '' });
  await pg.query(`UPDATE support_cases SET status = 'closed', updated_at = now() - interval '25 months' WHERE id = $1`, [old.id]);
  await pg.query(`UPDATE support_cases SET status = 'open', updated_at = now() - interval '25 months' WHERE id = $1`, [open.id]);
  await onConfirmed('gone@example.com', 'en');
  await onUnsubscribed('gone@example.com');
  await pg.query(`UPDATE newsletter_subscribers SET updated_at = now() - interval '31 days' WHERE email = 'gone@example.com'`);
  // A reader stopped after a bounce keeps status 'subscribed' but counts as removed: gone after 30 days.
  await onConfirmed('bounced@example.com', 'en');
  await onConfirmed('fresh-bounce@example.com', 'en');
  await pg.query(`UPDATE newsletter_subscribers SET suppressed_at = now() - interval '31 days' WHERE email = 'bounced@example.com'`);
  await pg.query(`UPDATE newsletter_subscribers SET suppressed_at = now() - interval '2 days' WHERE email = 'fresh-bounce@example.com'`);
  await applyRetention();
  const bounced = await pg.query(`SELECT email FROM newsletter_subscribers WHERE email IN ('bounced@example.com', 'fresh-bounce@example.com')`);
  assert.deepEqual(bounced.rows.map((r) => (r as { email: string }).email), ['fresh-bounce@example.com']);
  const cases = await pg.query(`SELECT id FROM support_cases WHERE id IN ($1, $2)`, [old.id, open.id]);
  assert.deepEqual(cases.rows.map((r) => (r as { id: number }).id), [open.id], 'an open case is kept however old');
  const subs = await pg.query(`SELECT 1 FROM newsletter_subscribers WHERE email = 'gone@example.com'`);
  assert.equal(subs.rows.length, 0);
});

// ---------------------------------------------------------------------------------------
// Delivery hardening (9 October 2026): the webhook, the durable confirmation, the outbox's
// failure handling and the release broadcasts. Resend is a fetch stub throughout.

const WEBHOOK_SECRET = `whsec_${Buffer.from('lifecycle-webhook-test-secret').toString('base64')}`;
let svix = 0;
function webhook(event: Record<string, unknown>, id = `msg_${++svix}`): Request {
  const body = JSON.stringify(event);
  const ts = String(Math.floor(Date.now() / 1000));
  const sig = createHmac('sha256', Buffer.from(WEBHOOK_SECRET.slice(6), 'base64')).update(`${id}.${ts}.${body}`).digest('base64');
  return new Request('https://www.outbrick.site/.netlify/functions/resend-events', { method: 'POST', body, headers: { 'svix-id': id, 'svix-timestamp': ts, 'svix-signature': `v1,${sig}` } });
}
const hookEnv = { RESEND_EVENTS_WEBHOOK_SECRET: WEBHOOK_SECRET, RESEND_API_KEY: KEY };
const unsent = async (email: string) =>
  ((await pg.query(`SELECT kind FROM email_outbox WHERE to_email = $1 AND sent_at IS NULL AND cancelled_at IS NULL ORDER BY kind`, [email])).rows as { kind: string }[]).map((r) => r.kind);
const subscriberRow = async (email: string) => (await pg.query(`SELECT * FROM newsletter_subscribers WHERE email = $1`, [email])).rows[0] as Record<string, unknown> | undefined;

/** Swap globalThis.fetch for a Resend stub for the length of `work`; returns the calls made. */
async function withResend(answer: (path: string, method: string) => Response, work: () => Promise<void>): Promise<{ path: string; method: string; body: unknown }[]> {
  const original = globalThis.fetch;
  const calls: { path: string; method: string; body: unknown }[] = [];
  globalThis.fetch = (async (url: string, init?: RequestInit) => {
    const path = new URL(url).pathname;
    const method = init?.method ?? 'GET';
    calls.push({ path, method, body: typeof init?.body === 'string' ? JSON.parse(init.body) : undefined });
    return answer(path, method);
  }) as typeof fetch;
  try {
    await work();
  } finally {
    globalThis.fetch = original;
  }
  return calls;
}

void test('Resend webhook: hard bounces, complaints and suppressions stop all queued mail; soft bounces do not', async () => {
  await onConfirmed('bounce@example.com', 'en');
  await enqueue([{ kind: 'security', to: 'bounce@example.com', locale: 'en', payload: { template: 'passkey-added' }, dedupeKey: 'sec-bounce' }]);
  assert.deepEqual(await unsent('bounce@example.com'), ['security', 'welcome-2', 'welcome-3']);

  const forged = new Request('https://www.outbrick.site/.netlify/functions/resend-events', {
    method: 'POST',
    body: JSON.stringify({ type: 'email.bounced', data: { to: ['bounce@example.com'] } }),
    headers: { 'svix-id': 'msg_forged', 'svix-timestamp': String(Math.floor(Date.now() / 1000)), 'svix-signature': 'v1,AAAA' },
  });
  assert.equal((await handleResendEvent(forged, hookEnv)).status, 401, 'an unsigned request is refused');

  const soft = await handleResendEvent(webhook({ type: 'email.bounced', data: { from: 'OutBrick Support <support@outbrick.site>', to: ['bounce@example.com'], bounce: { type: 'Transient' } } }), hookEnv);
  assert.equal(soft.status, 200);
  assert.equal((await subscriberRow('bounce@example.com'))?.suppressed_at, null, 'a transient bounce suppresses nothing');

  const hard = await handleResendEvent(webhook({ type: 'email.bounced', data: { from: 'OutBrick Support <support@outbrick.site>', to: ['Bounce <bounce@example.com>'], bounce: { type: 'Permanent' } } }), hookEnv);
  assert.equal(hard.status, 200);
  const row = await subscriberRow('bounce@example.com');
  assert.ok(row?.suppressed_at);
  assert.equal(row?.suppression_reason, 'bounced');
  assert.deepEqual(await unsent('bounce@example.com'), [], 'newsletter and other lifecycle mail are both cancelled');

  await onConfirmed('complain@example.com', 'fr');
  const unsubscribed: string[] = [];
  const complained = await handleResendEvent(webhook({ type: 'email.complained', data: { to: ['complain@example.com'] } }), hookEnv, {
    unsubscribe: async (_key, email) => {
      unsubscribed.push(email);
      return { ok: true };
    },
  });
  assert.equal(complained.status, 200);
  assert.equal((await subscriberRow('complain@example.com'))?.suppression_reason, 'complained');
  assert.deepEqual(unsubscribed, ['complain@example.com'], 'a complaint unsubscribes the Resend contact too');

  await onConfirmed('suppressed@example.com', 'en');
  await handleResendEvent(webhook({ type: 'email.suppressed', data: { to: ['suppressed@example.com'] } }), hookEnv);
  assert.equal((await subscriberRow('suppressed@example.com'))?.suppression_reason, 'suppressed');
  // Even a row queued later is dropped at render time.
  await pg.query(`UPDATE email_outbox SET cancelled_at = NULL, send_after = now() - interval '1 minute' WHERE to_email = 'suppressed@example.com' AND kind = 'welcome-2'`);
  sent = [];
  await tick(new Date(Date.now() + 60_000));
  assert.ok(!sent.some((s) => s.email.to === 'suppressed@example.com'), 'a suppressed reader is never rendered an email');

  // Confirming again from the same address is fresh consent and lifts the suppression.
  await onConfirmed('suppressed@example.com', 'en');
  assert.equal((await subscriberRow('suppressed@example.com'))?.suppressed_at, null);
});

void test('Resend webhook: an unsubscribe made in Resend leaves the list here; stale and repeated events do nothing', async () => {
  await onConfirmed('resend-leaver@example.com', 'de');
  const stale = await handleResendEvent(webhook({ type: 'contact.updated', created_at: '2020-01-01T00:00:00Z', data: { email: 'resend-leaver@example.com', unsubscribed: true } }), hookEnv);
  assert.equal(stale.status, 200);
  assert.equal((await subscriberRow('resend-leaver@example.com'))?.status, 'subscribed', 'an event older than the confirmation is ignored');
  await handleResendEvent(webhook({ type: 'contact.updated', data: { email: 'resend-leaver@example.com', unsubscribed: false } }), hookEnv);
  assert.equal((await subscriberRow('resend-leaver@example.com'))?.status, 'subscribed');
  await handleResendEvent(webhook({ type: 'contact.updated', created_at: new Date(Date.now() + 1000).toISOString(), data: { email: 'resend-leaver@example.com', unsubscribed: true } }), hookEnv);
  assert.equal((await subscriberRow('resend-leaver@example.com'))?.status, 'unsubscribed');
  assert.deepEqual(await unsent('resend-leaver@example.com'), []);

  // The same svix-id twice: the second delivery is acknowledged and does nothing.
  await onConfirmed('engaged@example.com', 'en');
  await pg.query(`UPDATE newsletter_subscribers SET last_engaged_at = now() - interval '200 days' WHERE email = 'engaged@example.com'`);
  const opened = { type: 'email.opened', data: { from: 'OutBrick News <news@outbrick.site>', to: ['engaged@example.com'] } };
  assert.equal((await handleResendEvent(webhook(opened, 'msg_once'), hookEnv)).status, 200);
  const first = await subscriberRow('engaged@example.com');
  assert.ok(Date.now() - (first!.last_engaged_at as Date).getTime() < 60_000);
  await pg.query(`UPDATE newsletter_subscribers SET last_engaged_at = now() - interval '200 days' WHERE email = 'engaged@example.com'`);
  assert.equal((await handleResendEvent(webhook(opened, 'msg_once'), hookEnv)).status, 200);
  const second = await subscriberRow('engaged@example.com');
  assert.ok(Date.now() - (second!.last_engaged_at as Date).getTime() > 100 * 86400_000, 'a redelivered event is a no-op');
});

void test('a confirmation records consent first, and a Resend outage is retried from the outbox', async () => {
  const id = '6f1c2d3e-0000-4000-8000-000000000001';
  await pg.query(`INSERT INTO web_form_submissions (id, form_name, payload, delivery_state) VALUES ($1, 'newsletter', $2::jsonb, 'sent')`, [
    id,
    JSON.stringify({ id, form_name: 'newsletter', data: { email: 'Consent@Example.com', language: 'fr', consent: 'yes', 'consent-version': '2026-10-09', referrer: 'https://www.outbrick.site/fr/newsletter?utm_source=x' } }),
  ]);
  const confirmEnv = { RESEND_API_KEY: KEY, RESEND_SEGMENT_ID: 'seg-main' };
  const url = confirmUrl('https://www.outbrick.site', KEY, 'consent@example.com', 'fr', Date.now(), id);
  assert.match(url, /[?&]s=6f1c2d3e/);
  const post = () => handleConfirm(new Request(url, { method: 'POST', headers: { Origin: 'https://www.outbrick.site' } }), confirmEnv);

  // Resend is down: the reader is still confirmed, and both the contact and the welcome are owed.
  let res: Response | undefined;
  const down = await withResend(() => Response.json({ message: 'Unavailable' }, { status: 500 }), async () => {
    res = await post();
  });
  assert.equal(res?.status, 303);
  assert.match(res?.headers.get('Location') ?? '', /\/fr\/newsletter\/confirmed/);
  assert.deepEqual(down.map((c) => c.path), ['/contacts'], 'no welcome is attempted while the contact failed');
  const row = await subscriberRow('consent@example.com');
  assert.equal(row?.status, 'subscribed');
  assert.equal(row?.resend_pending, true);
  assert.equal(row?.consent_source, '/fr/newsletter', 'the page, without its query');
  assert.equal(row?.consent_text_version, '2026-10-09');
  assert.equal(row?.submission_id, id);
  assert.ok(row?.consent_at);
  assert.deepEqual(await unsent('consent@example.com'), ['resend-sync', 'welcome-1', 'welcome-2', 'welcome-3']);

  // The next tick: the contact sync succeeds (an action) and the welcome goes out.
  sent = [];
  const up = await withResend(() => Response.json({ id: 'contact-1' }), async () => {
    await tick(new Date(Date.now() + 60_000));
  });
  assert.ok(up.some((c) => c.path === '/contacts' && (c.body as { segments: { id: string }[] }).segments[0].id === 'seg-main'));
  assert.equal((await subscriberRow('consent@example.com'))?.resend_pending, false);
  const welcome = sent.filter((s) => s.email.to === 'consent@example.com');
  assert.equal(welcome.length, 1);
  assert.match(welcome[0].email.html, /lang="fr"/);
  assert.deepEqual(await unsent('consent@example.com'), ['welcome-2', 'welcome-3']);

  // A tampered submission id breaks the signature.
  const tampered = url.replace(/s=[^&]+/, 's=6f1c2d3e-0000-4000-8000-000000000002');
  const refused = await withResend(() => Response.json({}), async () => {
    res = await handleConfirm(new Request(tampered, { method: 'POST' }), confirmEnv);
  });
  assert.match(res?.headers.get('Location') ?? '', /link-expired/);
  assert.equal(refused.length, 0);
});

void test('a confirmation the database cannot record is not reported as a success', async () => {
  const confirmEnv = { RESEND_API_KEY: KEY, RESEND_SEGMENT_ID: 'seg-main' };
  const url = confirmUrl('https://www.outbrick.site', KEY, 'nodb@example.com', 'en');
  const real = testDb!;
  setDatabaseForTests({
    sql: async () => {
      throw new Error('connection reset');
    },
    transaction: async () => {
      throw new Error('connection reset');
    },
  });
  let res: Response | undefined;
  let calls: unknown[] = [];
  try {
    calls = await withResend(() => Response.json({ id: 'x' }), async () => {
      res = await handleConfirm(new Request(url, { method: 'POST', headers: { Origin: 'https://www.outbrick.site' } }), confirmEnv);
    });
  } finally {
    setDatabaseForTests(real);
  }
  assert.equal(res?.status, 503);
  assert.match(await res!.text(), /<form method="post"/, 'the page offers the button again');
  assert.equal(calls.length, 0, 'Resend is not told about a reader we could not record');
  assert.equal(await subscriberRow('nodb@example.com'), undefined);
});

void test('outbox: a throwing preparer or action is a failed attempt with backoff, and the queue moves on', async () => {
  const now = new Date(Date.now() + 365 * 86400_000);
  await pg.query(`UPDATE email_outbox SET cancelled_at = now() WHERE sent_at IS NULL AND cancelled_at IS NULL`);
  await enqueue([
    { kind: 'policy', to: 'a@example.com', locale: 'en', dedupeKey: 'robust-a', sendAfter: new Date(now.getTime() - 3000) },
    { kind: 'sunset', to: 'b@example.com', locale: 'en', dedupeKey: 'robust-b', sendAfter: new Date(now.getTime() - 2000) },
    { kind: 'security', to: 'c@example.com', locale: 'en', dedupeKey: 'robust-c', sendAfter: new Date(now.getTime() - 1000) },
  ]);
  const summary = await drain({
    apiKey: KEY,
    now,
    send: recorder,
    prepare: async (row) => {
      if (row.dedupe_key === 'robust-a') throw new Error('database hiccup');
      if (row.dedupe_key === 'robust-b') return { action: async () => { throw new Error('Resend refused'); } };
      return { email: { from: 'x@outbrick.site', replyTo: 'x@outbrick.site', to: row.to_email, subject: 's', html: '<p>h</p>', text: 't' } };
    },
  });
  assert.deepEqual({ sent: summary.sent, failed: summary.failed, dropped: summary.dropped }, { sent: 1, failed: 2, dropped: 0 });
  const rows = (await pg.query(`SELECT dedupe_key, attempts, cancelled_at, sent_at, send_after, claimed_until, last_error FROM email_outbox WHERE dedupe_key LIKE 'robust-%' ORDER BY dedupe_key`)).rows as Record<string, unknown>[];
  for (const r of rows.slice(0, 2)) {
    assert.equal(r.attempts, 1, `${String(r.dedupe_key)} counts one attempt`);
    assert.equal(r.cancelled_at, null, `${String(r.dedupe_key)} is not dropped`);
    assert.equal(r.claimed_until, null);
    assert.ok((r.send_after as Date).getTime() >= now.getTime() + 15 * 60_000 - 1000, 'it backs off');
  }
  assert.match(String(rows[0].last_error), /database hiccup/);
  assert.ok(rows[2].sent_at, 'the row after the failures still went');
});

void test('outbox gate: an unreadable signal fails open; the daily sweep drains whatever the gate says', async () => {
  const store = memorySignalStore();
  setOutboxStoreForTests(store);
  store.data.set('outbox-due', { at: 'garbage' });
  assert.equal(await outboxGate(Date.now()), true, 'an unreadable value is unknown, not "nothing due"');
  store.data.set('outbox-due', { at: null });
  assert.equal(await outboxGate(Date.now()), false);

  // A row whose signal was lost: the gate says nothing is due, the 08:00 sweep sends it anyway.
  await pg.query(`UPDATE email_outbox SET cancelled_at = now() WHERE sent_at IS NULL AND cancelled_at IS NULL`);
  await onConfirmed('lost-signal@example.com', 'en');
  await pg.query(`UPDATE email_outbox SET cancelled_at = now() WHERE to_email = 'lost-signal@example.com'`);
  await enqueue([{ kind: 'policy', to: 'lost-signal@example.com', locale: 'en', payload: { policy: 'privacy', effective: '2026-11-01', changes: { en: ['x'] }, audience: 'news' }, dedupeKey: 'lost-signal' }]);
  store.data.set('outbox-due', { at: null });
  const later = new Date(Date.now() + 2 * 86400_000);
  const sweepAt = new Date(Date.UTC(later.getUTCFullYear(), later.getUTCMonth(), later.getUTCDate(), 8, 5));
  const off = await lifecycleTick(new Date(sweepAt.getTime() + 3600_000), { apiKey: KEY, send: recorder, env, skipSweep: true });
  assert.equal(off.drained, null, 'outside the sweep the closed gate keeps the database asleep');
  const swept = await lifecycleTick(sweepAt, { apiKey: KEY, send: recorder, env });
  assert.equal(swept.swept, true);
  assert.ok(swept.drained, 'the sweep drained');
  const [row] = (await pg.query(`SELECT sent_at FROM email_outbox WHERE dedupe_key = 'lost-signal'`)).rows as Record<string, unknown>[];
  assert.ok(row.sent_at, 'the row was sent, not left waiting for a signal');
  setOutboxStoreForTests(memorySignalStore());
  await signalOutbox(0);
});

void test('release broadcasts: recorded, retried, and sent only with autosend once the review window has passed', async () => {
  const relEnv = { RESEND_API_KEY: KEY, RESEND_SEGMENT_ID: 'seg-all', RELEASE_EMAIL_AUTOSEND: 'on', RELEASE_EMAIL_DELAY_HOURS: '24' };
  const t0 = new Date(Date.now() + 60_000);
  await recordReleaseBroadcasts(relEnv, '9.1', [
    { locale: 'en', version: '9.1', releaseNotes: 'New village.' },
    { locale: 'fr', version: '9.0', releaseNotes: 'Ancien.' },
  ]);
  assert.equal(await recordReleaseBroadcasts(relEnv, '9.1', [{ locale: 'en', version: '9.1', releaseNotes: 'Again' }]), 0, 'recorded once');

  // Resend fails: the row stays owed with a backoff, and nobody is told about drafts that do not exist.
  let summary: Awaited<ReturnType<typeof processReleaseBroadcasts>> | undefined;
  await withResend(() => Response.json({ message: 'down' }, { status: 500 }), async () => {
    summary = await processReleaseBroadcasts(KEY, relEnv, t0);
  });
  let [row] = (await pg.query(`SELECT * FROM release_broadcasts WHERE version = '9.1'`)).rows as Record<string, unknown>[];
  assert.equal(row.broadcast_id, null);
  assert.equal(Number(row.attempts), 1);
  assert.equal(summary?.created.length, 0);

  // Later: the draft is made, the team is told when it will go, and nothing is sent yet.
  const t1 = new Date(t0.getTime() + 3 * 3600_000);
  const making = await withResend((path) => Response.json({ id: path === '/broadcasts' ? 'bc-91' : 'mail-1' }), async () => {
    summary = await processReleaseBroadcasts(KEY, relEnv, t1);
  });
  assert.deepEqual(summary?.created, ['en:bc-91']);
  const draft = making.find((c) => c.path === '/broadcasts')!.body as Record<string, unknown>;
  assert.equal(draft.send, false);
  assert.equal(draft.segment_id, 'seg-all');
  assert.match(String(draft.html), /New village\./);
  const team = making.find((c) => c.path === '/emails')!.body as Record<string, unknown>;
  assert.match(String(team.text), /sent automatically at/);
  [row] = (await pg.query(`SELECT * FROM release_broadcasts WHERE version = '9.1'`)).rows as Record<string, unknown>[];
  assert.equal(row.broadcast_id, 'bc-91');
  assert.equal((row.send_after as Date).getTime(), t1.getTime() + 24 * 3600_000);
  assert.equal(await releaseNextDue(relEnv), t1.getTime() + 24 * 3600_000);
  assert.equal(await releaseNextDue({ ...relEnv, RELEASE_EMAIL_AUTOSEND: '' }), null, 'without autosend a draft is never due');

  const early = await withResend(() => Response.json({ status: 'draft' }), async () => {
    summary = await processReleaseBroadcasts(KEY, relEnv, new Date(t1.getTime() + 23 * 3600_000));
  });
  assert.equal(early.length, 0, 'inside the review window nothing is called');

  // After the window: still a draft in Resend, so it is sent, once.
  const t2 = new Date(t1.getTime() + 25 * 3600_000);
  const sending = await withResend((_path, method) => Response.json(method === 'GET' ? { id: 'bc-91', status: 'draft' } : { id: 'bc-91' }), async () => {
    summary = await processReleaseBroadcasts(KEY, relEnv, t2);
  });
  assert.deepEqual(sending.map((c) => `${c.method} ${c.path}`), ['GET /broadcasts/bc-91', 'POST /broadcasts/bc-91/send']);
  assert.equal(summary?.sent, 1);
  const again = await withResend(() => Response.json({}), async () => {
    summary = await processReleaseBroadcasts(KEY, relEnv, new Date(t2.getTime() + 3600_000));
  });
  assert.equal(again.length, 0, 'sent once');

  // Without the flag: a draft and a team email that says nothing goes automatically.
  const manualEnv = { ...relEnv, RELEASE_EMAIL_AUTOSEND: '' };
  await recordReleaseBroadcasts(manualEnv, '9.2', [{ locale: 'en', version: '9.2', releaseNotes: 'More.' }]);
  const manual = await withResend((path) => Response.json({ id: path === '/broadcasts' ? 'bc-92' : 'mail-2' }), async () => {
    await processReleaseBroadcasts(KEY, manualEnv, t2);
    await processReleaseBroadcasts(KEY, manualEnv, new Date(t2.getTime() + 30 * 86400_000));
  });
  assert.deepEqual(manual.map((c) => c.path), ['/broadcasts', '/emails']);
  assert.match(String((manual[1].body as Record<string, unknown>).text), /Nothing is sent automatically/);

  // With the flag, a draft the owner deleted in Resend is cancelled, not sent.
  await pg.query(`UPDATE release_broadcasts SET send_after = now() - interval '1 minute' WHERE version = '9.2'`);
  const deleted = await withResend((_path, method) => (method === 'GET' ? Response.json({ message: 'Not found' }, { status: 404 }) : Response.json({})), async () => {
    summary = await processReleaseBroadcasts(KEY, relEnv, new Date(Date.now() + 60_000));
  });
  assert.deepEqual(deleted.map((c) => c.method), ['GET']);
  assert.equal(summary?.cancelled, 1);
  [row] = (await pg.query(`SELECT cancelled_at, sent_at FROM release_broadcasts WHERE version = '9.2'`)).rows as Record<string, unknown>[];
  assert.ok(row.cancelled_at);
  assert.equal(row.sent_at, null);
});

void test('release broadcasts are recorded inside the release bot transaction, and roll back with it', async () => {
  const relEnv = { RESEND_SEGMENT_ID_EN: 'seg-en', RESEND_SEGMENT_ID_JA: 'seg-ja' };
  const notes = [
    { locale: 'en' as const, version: '9.3', releaseNotes: 'English notes' },
    { locale: 'ja' as const, version: '9.3', releaseNotes: '日本語のノート' },
  ];
  await assert.rejects(transaction(async (q) => {
    await recordReleaseBroadcasts(relEnv, '9.3', notes, q);
    throw new Error('the announcement failed');
  }));
  assert.equal((await pg.query(`SELECT 1 FROM release_broadcasts WHERE version = '9.3'`)).rows.length, 0);
  assert.equal(await transaction((q) => recordReleaseBroadcasts(relEnv, '9.3', notes, q)), 2);
  const rows = (await pg.query(`SELECT locale, segment_id, notes FROM release_broadcasts WHERE version = '9.3' ORDER BY locale`)).rows;
  assert.deepEqual(rows, [
    { locale: 'en', segment_id: 'seg-en', notes: 'English notes' },
    { locale: 'ja', segment_id: 'seg-ja', notes: '日本語のノート' },
  ], 'each language keeps its own storefront notes');
});

// ---------------------------------------------------------------------------------------
// Email analytics: every webhook event becomes a hashed row; the report is SQL aggregates.

const eventRows = async () => (await pg.query(`SELECT * FROM email_events ORDER BY id`)).rows as Record<string, unknown>[];

void test('analytics: links keep their path and utm tags only', () => {
  assert.equal(
    cleanLink('https://www.outbrick.site/whats-new?utm_source=email&utm_campaign=release-5.2&p=eyJlIjoiYUBiLmMifQ&t=SIG&e=YUBiLmM'),
    'https://www.outbrick.site/whats-new?utm_source=email&utm_campaign=release-5.2',
  );
  assert.equal(cleanLink('https://www.outbrick.site/.netlify/functions/newsletter-unsubscribe?e=YUBiLmM&l=en&t=SIG'), 'https://www.outbrick.site/.netlify/functions/newsletter-unsubscribe');
  assert.equal(cleanLink('mailto:news@outbrick.site'), null);
  assert.equal(cleanLink('not a url'), null);
});

void test('analytics: every email.* webhook event is recorded once, hashed, with its tags and a stripped link', async () => {
  await pg.query(`DELETE FROM email_events`);
  const tags = { form: 'newsletter-welcome-2', locale: 'fr' };
  const base = { from: 'OutBrick News <news@outbrick.site>', to: ['Reader <Reader1@Example.com>'], email_id: 'em-1', tags };
  for (const type of ['email.sent', 'email.delivered', 'email.delivery_delayed', 'email.opened', 'email.failed']) {
    assert.equal((await handleResendEvent(webhook({ type, created_at: new Date().toISOString(), data: base }), hookEnv)).status, 200);
  }
  const click = { type: 'email.clicked', data: { ...base, click: { link: 'https://www.outbrick.site/play?utm_source=email&utm_campaign=newsletter-welcome-2&p=SIGNED&t=SECRET', timestamp: new Date().toISOString() } } };
  await handleResendEvent(webhook(click, 'msg_click_once'), hookEnv);
  await handleResendEvent(webhook(click, 'msg_click_once'), hookEnv);
  // Tags as the API's array, a Broadcast, an inbound email and an unsubscribing contact.
  await handleResendEvent(webhook({ type: 'email.delivered', data: { to: ['b@example.com'], email_id: 'em-2', broadcast_id: 'bc-x', tags: [{ name: 'form', value: 'notice-policy' }, { name: 'locale', value: 'ja' }] } }), hookEnv);
  await handleResendEvent(webhook({ type: 'email.received', data: { to: ['support@outbrick.site'], email_id: 'in-1' } }), hookEnv);
  await handleResendEvent(webhook({ type: 'contact.updated', data: { email: 'gone-contact@example.com', unsubscribed: true } }), hookEnv);

  const rows = await eventRows();
  assert.deepEqual(rows.map((r) => r.type), ['sent', 'delivered', 'delivery_delayed', 'opened', 'failed', 'clicked', 'delivered', 'unsubscribed'], 'inbound mail is not ours to count; a redelivery is not counted twice');
  const hash = analyticsHash(KEY, 'reader1@example.com');
  assert.ok(rows.slice(0, 6).every((r) => r.address_hash === hash && r.form === 'newsletter-welcome-2' && r.locale === 'fr' && r.resend_email_id === 'em-1'));
  assert.equal(rows[5].link_url, 'https://www.outbrick.site/play?utm_source=email&utm_campaign=newsletter-welcome-2');
  assert.deepEqual([rows[6].form, rows[6].locale, rows[6].broadcast_id], ['notice-policy', 'ja', 'bc-x']);
  assert.equal(rows[7].form, 'newsletter');
  assert.notEqual(hash, analyticsHash(KEY, 'reader2@example.com'));
  assert.doesNotMatch(JSON.stringify(rows), /@|SIGNED|SECRET/, 'no address and no signed-link parameter is stored');

  // Site milestones from our own handlers.
  await recordSiteEvent('signup', { email: 'Reader1@example.com', locale: 'fr', source: '/fr/newsletter', apiKey: KEY });
  const [signup] = (await pg.query(`SELECT form, source, address_hash FROM email_events WHERE type = 'signup'`)).rows as Record<string, unknown>[];
  assert.deepEqual(signup, { form: 'newsletter', source: '/fr/newsletter', address_hash: hash }, 'the same reader hashes the same on both sides');
});

void test('analytics: the handlers record confirmations, unsubscribes and saved preferences', async () => {
  await pg.query(`DELETE FROM email_events`);
  const confirmEnv = { RESEND_API_KEY: KEY, RESEND_SEGMENT_ID: 'seg-main' };
  const url = confirmUrl('https://www.outbrick.site', KEY, 'milestones@example.com', 'es');
  await withResend(() => Response.json({ id: 'x' }), async () => {
    await handleConfirm(new Request(url, { method: 'POST', headers: { Origin: 'https://www.outbrick.site' } }), confirmEnv);
  });
  const prefs = preferencesUrl(KEY, 'milestones@example.com', 'es');
  const form = new FormData();
  form.set('tips', 'yes');
  await handlePreferences(new Request(prefs, { method: 'POST', body: form, headers: { origin: 'https://www.outbrick.site' } }), env, recorder);
  const { handleUnsubscribe } = await import('../../emails/newsletter.ts');
  await withResend(() => Response.json({}), async () => {
    await handleUnsubscribe(new Request(unsubscribeUrl('https://www.outbrick.site', KEY, 'milestones@example.com', 'es'), { method: 'POST', body: 'List-Unsubscribe=One-Click' }), confirmEnv);
  });
  const rows = await eventRows();
  assert.deepEqual(rows.map((r) => [r.type, r.locale, r.source]), [
    ['confirmed', 'es', null],
    ['prefs_saved', 'es', 'preferences'],
    ['unsubscribed_site', 'es', 'one-click'],
  ]);
  assert.ok(rows.every((r) => r.address_hash === analyticsHash(KEY, 'milestones@example.com')));
});

void test('analytics: the report aggregates the funnel, templates, languages, links and releases, and is admins only', async () => {
  await pg.query(`DELETE FROM email_events`);
  const before = (await emailReport(30)).list.size;
  const ev = async (type: string, data: Record<string, unknown>) => handleResendEvent(webhook({ type, created_at: new Date().toISOString(), data }), hookEnv);
  for (const who of ['f1', 'f2', 'f3']) await recordSiteEvent('signup', { email: `${who}@example.com`, locale: who === 'f3' ? 'de' : 'en', apiKey: KEY });
  await recordSiteEvent('signup', { email: 'f1@example.com', locale: 'en', apiKey: KEY }); // twice: one reader
  for (const who of ['f1', 'f2']) await recordSiteEvent('confirmed', { email: `${who}@example.com`, locale: 'en', apiKey: KEY });
  const w2 = { form: 'newsletter-welcome-2', locale: 'en' };
  for (const [i, who] of ['f1', 'f2'].entries()) {
    await ev('email.sent', { to: [`${who}@example.com`], email_id: `w2-${i}`, tags: w2 });
    await ev('email.delivered', { to: [`${who}@example.com`], email_id: `w2-${i}`, tags: w2 });
  }
  await ev('email.opened', { to: ['f1@example.com'], email_id: 'w2-0', tags: w2 });
  await ev('email.opened', { to: ['f1@example.com'], email_id: 'w2-0', tags: w2 }); // a second open: one unique
  await ev('email.clicked', { to: ['f1@example.com'], email_id: 'w2-0', tags: w2, click: { link: 'https://www.outbrick.site/play?utm_campaign=newsletter-welcome-2&t=x' } });
  await ev('email.clicked', { to: ['f1@example.com'], email_id: 'w2-0', tags: w2, click: { link: 'https://www.outbrick.site/play?utm_campaign=newsletter-welcome-2' } });
  await ev('email.clicked', { to: ['f2@example.com'], email_id: 'w2-1', tags: w2, click: { link: 'https://www.outbrick.site/.netlify/functions/newsletter-unsubscribe?e=x&t=y' } });
  await ev('email.sent', { to: ['bad@example.com'], email_id: 'sup-1', tags: { form: 'contact', locale: 'en' } });
  await ev('email.bounced', { to: ['bad@example.com'], email_id: 'sup-1', tags: { form: 'contact', locale: 'en' }, bounce: { type: 'Permanent' } });
  await ev('email.complained', { to: ['f2@example.com'], email_id: 'w2-1', tags: w2 });
  await pg.query(`INSERT INTO release_broadcasts (version, locale, segment_id, notes, broadcast_id, sent_at) VALUES ('9.9', 'en', 'seg', 'n', 'bc-99', now())`);
  for (const i of [1, 2]) await ev('email.delivered', { to: [`r${i}@example.com`], email_id: `bc99-${i}`, broadcast_id: 'bc-99' });
  await ev('email.clicked', { to: ['r1@example.com'], email_id: 'bc99-1', broadcast_id: 'bc-99', click: { link: 'https://apps.apple.com/app/id6807997465?utm_campaign=release-9.9' } });

  const r = await emailReport(7);
  assert.equal(r.days, 7);
  assert.deepEqual({ ...r.funnel, stillSubscribed: undefined }, { signups: 3, confirmed: 2, welcome2: 2, welcome3: 0, stillSubscribed: undefined });
  assert.equal(r.list.size, before, 'the list is read from newsletter_subscribers');
  assert.equal(r.list.joined, 2);
  assert.equal(r.list.left, 1, 'the complainant left; a bounce on a support email is not a list departure');
  assert.equal(r.list.net, 1);
  const welcome = r.templates.find((t) => t.template === 'newsletter-welcome-2');
  assert.deepEqual(welcome, { template: 'newsletter-welcome-2', sent: 2, delivered: 2, uniqueOpens: 1, uniqueClicks: 1, bounced: 0, complained: 1, unsubscribeClicks: 1 });
  assert.deepEqual(r.templates.find((t) => t.template === 'contact'), { template: 'contact', sent: 1, delivered: 0, uniqueOpens: 0, uniqueClicks: 0, bounced: 1, complained: 0, unsubscribeClicks: 0 });
  assert.ok(r.templates.some((t) => t.template === 'broadcast' && t.delivered === 2));
  const de = r.locales.find((l) => l.locale === 'de');
  assert.equal(de?.signups, 1);
  assert.deepEqual(r.links[0], { path: 'https://www.outbrick.site/play', campaign: 'newsletter-welcome-2', clicks: 2, uniqueClickers: 1 });
  assert.ok(r.links.some((l) => l.campaign === 'release-9.9'));
  const release = r.releases.find((b) => b.version === '9.9');
  assert.deepEqual({ ...release, createdAt: undefined, sentAt: undefined }, { version: '9.9', locale: 'en', state: 'sent', createdAt: undefined, sendAfter: null, sentAt: undefined, delivered: 2, uniqueOpens: 0, uniqueClicks: 1, bounced: 0, complained: 0 });
  assert.doesNotMatch(JSON.stringify(r), /@|em-1|w2-0/, 'nothing that identifies a reader or a message');

  const team = await member(pg, { role: 'team' });
  const admin = await member(pg, { role: 'admin' });
  assert.equal((await api('GET', '/admin/email?days=7', { cookie: team.cookie })).status, 403, 'admins only');
  const res = await api('GET', '/admin/email?days=90', { cookie: admin.cookie });
  assert.equal(res.status, 200);
  assert.equal(res.body.days, 90);
  assert.equal((await api('GET', '/admin/email?days=5000', { cookie: admin.cookie })).body.days, 30, 'an unknown window falls back to 30 days');
});

void test('analytics: rows older than 400 days are pruned', async () => {
  await pg.query(`DELETE FROM email_events`);
  await pg.query(`INSERT INTO email_events (type, form, occurred_at) VALUES ('sent', 'old', now() - interval '401 days'), ('sent', 'kept', now() - interval '399 days')`);
  await pruneEmailEvents();
  assert.deepEqual((await eventRows()).map((r) => r.form), ['kept']);
});

void test('French plain text gets a no-break space before each colon; links, times and other languages are untouched', async () => {
  const { localiseText } = await import('../../emails/core.ts');
  assert.equal(localiseText('Sujet: Assistance\nX (Twitter): https://x.com/o\nÀ 10:30\nDéjà : ok', 'fr'), 'Sujet : Assistance\nX (Twitter) : https://x.com/o\nÀ 10:30\nDéjà : ok');
  assert.equal(localiseText('Topic: Support', 'en'), 'Topic: Support');
});
