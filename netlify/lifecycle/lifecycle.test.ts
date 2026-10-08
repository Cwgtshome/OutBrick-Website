// The customer-lifecycle flows end to end on PGlite, with Resend replaced by a recorder:
// support cases (reply → feedback → reopen; fixed-in → release → notice), applications,
// the newsletter's welcome series, preferences and unsubscribe, account security, policy notices,
// and the outbox's gate.

import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request } from '../community/test/harness.ts';
import { api, member } from '../community/test/forum-helpers.ts';
import { memorySignalStore } from '../community/idle.ts';
import { signedUrl, unsubscribeUrl } from '../../emails/links.ts';
import type { OutgoingEmail } from '../../emails/resend.ts';
import { createCase, handleFeedback, notifyFixedCases, setCaseSenderForTests, versionAtLeast } from './cases.ts';
import { createApplication, setApplicationSenderForTests } from './applications.ts';
import { handlePreferences, onConfirmed, onUnsubscribed, preferencesUrl } from './newsletter.ts';
import { deviceLabel, onSessionStarted, setSecuritySenderForTests } from './security.ts';
import { outboxGate, setOutboxStoreForTests, signalOutbox } from './outbox.ts';
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
  assert.match(feedback.html, /feedback-bloo-cheer\.png/);
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
