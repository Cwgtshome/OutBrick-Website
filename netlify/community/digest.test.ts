// The weekly digest: who gets it, what is in it, once per ISO week, and its one-click unsubscribe.
// Also the email sign-in form's time-to-fill check.
/* oxlint-disable typescript/no-explicit-any */

import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request } from './test/harness.ts';
import { api, member, newThread, resetRates } from './test/forum-helpers.ts';
import { isoWeek, runDigest, type Sender } from './digest.ts';
import { readUnsubscribeToken } from './auth/inbox.ts';
import { communityAuth } from './auth/routes.ts';
import type { OutgoingEmail } from '../../emails/resend.ts';
import { stubFetch, TEST_RESEND_KEY, withEnv } from './auth/test/kit.ts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});
beforeEach(async () => {
  await resetRates(pg);
  await pg.exec(`DELETE FROM digest_sends`);
});

function recorder(fail = false) {
  const sent: { email: OutgoingEmail; key?: string }[] = [];
  const send: Sender = async (_k, email, key) => {
    sent.push({ email, key });
    return fail ? { ok: false, status: 500, data: null, error: 'stubbed' } : { ok: true, status: 200, data: { id: 'x' } };
  };
  return { sent, send };
}

const optIn = (id: number, locale = 'en') => pg.query(`UPDATE members SET email_prefs = email_prefs || '{"digest": true}'::jsonb, locale = $2 WHERE id = $1`, [id, locale]);

void test('ISO weeks', () => {
  assert.equal(isoWeek(new Date('2026-10-12T08:00:00Z')), '2026-W42');
  assert.equal(isoWeek(new Date('2027-01-01T08:00:00Z')), '2026-W53');
  assert.equal(isoWeek(new Date('2027-01-04T08:00:00Z')), '2027-W01');
  assert.equal(isoWeek(new Date('2025-12-29T08:00:00Z')), '2026-W01');
});

void test('opted-in members get the week’s top threads, releases and their unanswered questions, once a week', async () => {
  const reader = await member(pg, { name: 'Digest Reader' });
  const writer = await member(pg, { name: 'Digest Writer' });
  const quiet = await member(pg, { name: 'Digest Quiet' });
  const nobody = await member(pg, { name: 'Digest Not Opted In' });
  await optIn(reader.id);
  await optIn(quiet.id);
  await api('POST', '/categories/accessibility/follow', { cookie: reader.cookie, body: { level: 'watch' } });
  await api('POST', '/categories/accessibility/follow', { cookie: nobody.cookie, body: { level: 'watch' } });

  const busy = await newThread(writer.cookie, { categorySlug: 'accessibility', title: 'VoiceOver reads the counter <b>twice</b>' });
  const calm = await newThread(writer.cookie, { categorySlug: 'accessibility', title: 'Larger Text on the map' });
  for (let i = 0; i < 3; i++) await api('POST', `/threads/${busy.id}/posts`, { cookie: reader.cookie, body: { body: `Same here ${i}` } });
  await api('POST', `/threads/${calm.id}/posts`, { cookie: reader.cookie, body: { body: 'Me too' } });
  const old = await newThread(writer.cookie, { categorySlug: 'accessibility', title: 'Last month’s thread' });
  await pg.query(`UPDATE threads SET last_post_at = now() - interval '20 days' WHERE id = $1`, [old.id]);
  await pg.query(`UPDATE posts SET created_at = now() - interval '20 days' WHERE thread_id = $1`, [old.id]);
  await newThread(writer.cookie, { categorySlug: 'accessibility', title: '日本語のスレッド', language: 'ja' });
  const mine = await newThread(reader.cookie, { categorySlug: 'help', title: 'Nobody answered me yet' });
  const bot = (await pg.query<any>(`SELECT id::int AS id FROM members WHERE email = 'releases@outbrick.site'`)).rows[0].id;
  await pg.query(`INSERT INTO threads (category_id, author_id, title, slug, release_version) VALUES (1, $1, 'OutBrick 5.1 is out', 'outbrick-5-1-is-out', '5.1')`, [bot]);

  const { sent, send } = recorder();
  const now = new Date();
  const first = await runDigest({ apiKey: TEST_RESEND_KEY, send, now, pauseMs: 0 });
  assert.equal(first.week, isoWeek(now));
  const toReader = sent.filter((s) => s.email.to.includes('@example.com') && s.email.text.includes('Digest Reader'));
  assert.equal(toReader.length, 1);
  const { email, key } = toReader[0];
  assert.equal(email.subject, 'Your week in OutBrick Community');
  assert.equal(key, `community-weekly-${reader.id}-${first.week}`);
  const text = email.text;
  assert.ok(text.indexOf('VoiceOver reads the counter') < text.indexOf('Larger Text on the map'), 'busiest first');
  assert.match(text, /3 replies/);
  assert.match(text, /OutBrick 5\.1 is out/);
  assert.match(text, /Nobody answered me yet/);
  assert.ok(text.includes(`/community/t/${mine.id}/`));
  assert.doesNotMatch(text, /Last month’s thread/);
  assert.doesNotMatch(text, /日本語のスレッド/, 'threads in the member’s language or English only');
  assert.ok(email.html.includes('VoiceOver reads the counter &lt;b&gt;twice&lt;/b&gt;'));
  assert.equal(email.headers?.['List-Unsubscribe-Post'], 'List-Unsubscribe=One-Click');
  const token = /token=([^>&\s]+)/.exec(email.headers?.['List-Unsubscribe'] ?? '')![1];
  assert.deepEqual(readUnsubscribeToken(TEST_RESEND_KEY, token), { memberId: reader.id, kind: 'digest' });

  // Quiet follows nothing and asked nothing, so hears only about the release; nobody did not opt in.
  const toQuiet = sent.find((s) => s.email.text.includes('Digest Quiet'));
  assert.ok(toQuiet);
  assert.match(toQuiet.email.text, /OutBrick 5\.1 is out/);
  assert.doesNotMatch(toQuiet.email.text, /Popular in/);
  assert.ok(!sent.some((s) => s.email.text.includes('Digest Not Opted In')));

  // With no release that week, a member with nothing to read gets nothing, and the week is recorded.
  await pg.query(`UPDATE threads SET hidden = true WHERE release_version = '5.1'`);
  const empty = await member(pg, { name: 'Digest Empty' });
  await optIn(empty.id);
  sent.length = 0;
  const second = await runDigest({ apiKey: TEST_RESEND_KEY, send, now, pauseMs: 0 });
  assert.equal(sent.length, 0);
  assert.ok(second.empty >= 1);
  assert.equal((await pg.query<any>(`SELECT status FROM digest_sends WHERE member_id = $1`, [empty.id])).rows[0].status, 'empty');
  assert.equal((await pg.query<any>(`SELECT status FROM digest_sends WHERE member_id = $1`, [reader.id])).rows[0].status, 'sent');

  // The catch-up runs later the same morning send nothing again.
  sent.length = 0;
  await runDigest({ apiKey: TEST_RESEND_KEY, send, now: new Date(now.getTime() + 600_000), pauseMs: 0 });
  assert.equal(sent.length, 0);

});

void test('the unsubscribe link switches the digest off, and a failed send is retried by the next run', async () => {
  const restore = withEnv({ RESEND_API_KEY: TEST_RESEND_KEY });
  try {
    const m = await member(pg, { name: 'Digest Retry' });
    await optIn(m.id, 'fr');
    await newThread(m.cookie, { categorySlug: 'help', title: 'Question sans réponse' });
    const failing = recorder(true);
    const r1 = await runDigest({ apiKey: TEST_RESEND_KEY, send: failing.send, pauseMs: 0 });
    assert.ok(r1.failed >= 1);
    assert.equal((await pg.query(`SELECT 1 FROM digest_sends WHERE member_id = $1`, [m.id])).rows.length, 0, 'the claim was released');
    const ok = recorder();
    await runDigest({ apiKey: TEST_RESEND_KEY, send: ok.send, pauseMs: 0 });
    const mail = ok.sent.find((s) => s.email.text.includes('Digest Retry'));
    assert.ok(mail);
    assert.equal(mail.email.subject, 'Votre semaine dans la Communauté OutBrick');
    const token = /token=([^>&\s]+)/.exec(mail.email.headers?.['List-Unsubscribe'] ?? '')![1];
    const res = await communityAuth(new Request(`https://www.outbrick.site/api/community/email/unsubscribe?token=${token}`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: 'List-Unsubscribe=One-Click' }));
    assert.equal(res.status, 200);
    const prefs = (await pg.query<any>(`SELECT email_prefs FROM members WHERE id = $1`, [m.id])).rows[0].email_prefs;
    assert.equal(prefs.digest, false);
    // And the settings switch: on, then off again, through PATCH /me.
    const patch = (on: boolean) => communityAuth(request('PATCH', '/api/community/me', { cookie: m.cookie, body: { emailPrefs: { digest: on } } }));
    assert.equal((await (await patch(true)).json<any>()).member.emailPrefs.digest, true);
    assert.equal((await (await patch(false)).json<any>()).member.emailPrefs.digest, false);
  } finally {
    restore();
  }
});

void test('the email sign-in form sent too fast is told it worked and sends nothing', async () => {
  const restore = withEnv({ RESEND_API_KEY: TEST_RESEND_KEY });
  const fetchStub = stubFetch();
  try {
    const fast = await communityAuth(request('POST', '/api/community/auth/email', { body: { email: 'fast@example.com', locale: 'en', startedAt: Date.now() - 1000 } }));
    assert.deepEqual(await fast.json(), { sent: true });
    assert.equal(fetchStub.emails().length, 0);
    const slow = await communityAuth(request('POST', '/api/community/auth/email', { body: { email: 'slow@example.com', locale: 'en', startedAt: Date.now() - 8000 } }));
    assert.deepEqual(await slow.json(), { sent: true });
    assert.equal(fetchStub.emails().length, 1);
  } finally {
    fetchStub.restore();
    restore();
  }
});
