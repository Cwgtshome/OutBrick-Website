import { after, before, beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from '../../test/harness.ts';
import { HOURLY_CAP, runNotify, wantsEmail, type Sender } from '../../notify.ts';
import type { OutgoingEmail } from '../../../../emails/resend.ts';
import { readUnsubscribeToken } from '../inbox.ts';
import { all, one, TEST_RESEND_KEY } from './kit.ts';

let pg: PGlite;
let n = 0;

before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});
beforeEach(async () => {
  // Each test sees only its own rows.
  await pg.exec(`DELETE FROM notifications; DELETE FROM rate_events;`);
});

type Sent = { email: OutgoingEmail; key?: string };
function recorder(fail = false) {
  const sent: Sent[] = [];
  const send: Sender = async (_key, email, idempotencyKey) => {
    sent.push({ email, key: idempotencyKey });
    return fail ? { ok: false, status: 500, data: null, error: 'stubbed failure' } : { ok: true, status: 200, data: { id: 'x' } };
  };
  return { sent, send };
}

async function memberRow(opts: { locale?: string; verified?: boolean; prefs?: Record<string, boolean>; banned?: boolean; deleted?: boolean } = {}) {
  n++;
  return one<{ id: number }>(
    pg,
    `INSERT INTO members (display_name, name_chosen, email, email_verified, locale, email_prefs, banned_until, deleted_at)
     VALUES ($1, true, $2, $3, $4, $5::jsonb, $6, $7) RETURNING id::int`,
    [`Notified ${n}`, `notified${n}@example.com`, opts.verified ?? true, opts.locale ?? 'en', JSON.stringify(opts.prefs ?? {}), opts.banned ? new Date(Date.now() + 86400_000) : null, opts.deleted ? new Date() : null],
  );
}

async function extraPost(thread: number, actor: number, number: number) {
  return one<{ id: number }>(pg, `INSERT INTO posts (thread_id, author_id, number, body_md, body_html) VALUES ($1, $2, $3, 'Another reply', '<p>x</p>') RETURNING id::int`, [thread, actor, number]);
}

async function threadWithPost(author: number, actor: number, body = 'A reply about <b>gates</b> & colours.') {
  const thread = await one<{ id: number }>(pg, `INSERT INTO threads (category_id, author_id, title, slug) VALUES (3, $1, 'Gate colours look alike', 'gate-colours-look-alike') RETURNING id::int`, [author]);
  await pg.query(`INSERT INTO posts (thread_id, author_id, number, body_md, body_html) VALUES ($1, $2, 1, 'Opening post', '<p>Opening</p>')`, [thread.id, author]);
  const post = await one<{ id: number }>(pg, `INSERT INTO posts (thread_id, author_id, number, body_md, body_html) VALUES ($1, $2, 2, $3, '<p>x</p>') RETURNING id::int`, [thread.id, actor, body]);
  return { thread, post };
}

async function notify(member: number, kind: string, opts: { thread?: number; post?: number | null; actor?: number | null; data?: Record<string, unknown>; age?: string } = {}) {
  return one<{ id: number }>(
    pg,
    `INSERT INTO notifications (member_id, kind, thread_id, post_id, actor_id, data, created_at) VALUES ($1, $2, $3, $4, $5, $6::jsonb, now() - $7::interval) RETURNING id::int`,
    [member, kind, opts.thread ?? null, opts.post ?? null, opts.actor ?? null, JSON.stringify(opts.data ?? {}), opts.age ?? '5 minutes'],
  );
}

const state = (id: number) => one<{ emailed: boolean; skipped: string | null }>(pg, `SELECT emailed_at IS NOT NULL AS emailed, email_skipped AS skipped FROM notifications WHERE id = $1`, [id]);

void describe('community notifier', () => {
  void test('one pending reply: one email, with the post, the link and one-click unsubscribe', async () => {
    const reader = await memberRow({ locale: 'fr' });
    const writer = await memberRow();
    const { thread, post } = await threadWithPost(reader.id, writer.id);
    const note = await notify(reader.id, 'reply', { thread: thread.id, post: post.id, actor: writer.id });
    const { sent, send } = recorder();
    const summary = await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(summary.sent, 1);
    assert.equal(sent.length, 1);
    const { email, key } = sent[0];
    assert.equal(email.from, 'OutBrick Community <support@outbrick.site>');
    assert.equal(email.replyTo, 'support@outbrick.site');
    assert.equal(email.to, `notified${n - 1}@example.com`);
    assert.equal(email.subject, `Notified ${n} a répondu dans « Gate colours look alike »`);
    assert.match(email.html, /<html lang="fr"/);
    assert.match(email.html, /A reply about &lt;b&gt;gates&lt;\/b&gt; &amp; colours\./);
    assert.match(email.html, new RegExp(`https://www\\.outbrick\\.site/fr/community/t/${thread.id}/gate-colours-look-alike#post-2`));
    assert.match(email.html, /https:\/\/www\.outbrick\.site\/fr\/community\/settings/);
    assert.equal(email.headers?.['List-Unsubscribe-Post'], 'List-Unsubscribe=One-Click');
    const unsub = /<(https:[^>]+)>/.exec(email.headers!['List-Unsubscribe'])![1];
    assert.deepEqual(readUnsubscribeToken(TEST_RESEND_KEY, new URL(unsub).searchParams.get('token')!), { memberId: reader.id, kind: 'reply' });
    assert.match(key!, new RegExp(`^community-notify-${reader.id}-[0-9a-f]{32}$`));
    assert.deepEqual(await state(note.id), { emailed: true, skipped: null });

    // A second run finds nothing to do.
    const again = recorder();
    assert.equal((await runNotify({ apiKey: TEST_RESEND_KEY, send: again.send })).sent, 0);
    assert.equal(again.sent.length, 0);
  });

  void test('several pending items become one grouped email', async () => {
    const reader = await memberRow();
    const writer = await memberRow();
    const { thread, post } = await threadWithPost(reader.id, writer.id);
    await notify(reader.id, 'reply', { thread: thread.id, post: post.id, actor: writer.id });
    await notify(reader.id, 'mention', { thread: thread.id, post: (await extraPost(thread.id, writer.id, 3)).id, actor: writer.id });
    await notify(reader.id, 'status', { thread: thread.id, data: { status: 'fixed', statusNote: 'Fixed in 5.1' } });
    const { sent, send } = recorder();
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(sent.length, 1);
    assert.equal(sent[0].email.subject, '3 new things in OutBrick Community');
    assert.match(sent[0].email.text, /is now Fixed/);
    assert.match(sent[0].email.text, /\/community\/notifications/);
    // Mixed kinds: the unsubscribe link is for all community email.
    assert.match(sent[0].email.headers!['List-Unsubscribe'], /token=\d+\.all\./);
  });

  void test('too new to send: waits two minutes so edits settle', async () => {
    const reader = await memberRow();
    const writer = await memberRow();
    const { thread, post } = await threadWithPost(reader.id, writer.id);
    const fresh = await notify(reader.id, 'reply', { thread: thread.id, post: post.id, actor: writer.id, age: '30 seconds' });
    const { sent, send } = recorder();
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(sent.length, 0);
    assert.deepEqual(await state(fresh.id), { emailed: false, skipped: null });
  });

  void test('skips, and records why', async () => {
    const writer = await memberRow();
    const off = await memberRow({ prefs: { reply: false } });
    const unverified = await memberRow({ verified: false });
    const banned = await memberRow({ banned: true });
    const deleted = await memberRow({ deleted: true });
    const self = await memberRow();
    const hidden = await memberRow();
    const t = await threadWithPost(writer.id, writer.id);
    const ids = {
      pref_off: (await notify(off.id, 'reply', { thread: t.thread.id, post: t.post.id, actor: writer.id })).id,
      unverified: (await notify(unverified.id, 'reply', { thread: t.thread.id, post: t.post.id, actor: writer.id })).id,
      banned: (await notify(banned.id, 'reply', { thread: t.thread.id, post: t.post.id, actor: writer.id })).id,
      deleted: (await notify(deleted.id, 'reply', { thread: t.thread.id, post: t.post.id, actor: writer.id })).id,
      self: (await notify(self.id, 'reply', { thread: t.thread.id, post: t.post.id, actor: self.id })).id,
      gone: (await notify(self.id, 'mention', {})).id,
    };
    const h = await threadWithPost(writer.id, writer.id);
    await pg.query(`UPDATE posts SET hidden = true WHERE id = $1`, [h.post.id]);
    const hiddenId = (await notify(hidden.id, 'watched', { thread: h.thread.id, post: h.post.id, actor: writer.id })).id;
    const { sent, send } = recorder();
    const summary = await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(sent.length, 0);
    assert.equal(summary.skipped, 7);
    for (const [reason, id] of Object.entries(ids)) assert.deepEqual(await state(id), { emailed: false, skipped: reason }, reason);
    assert.deepEqual(await state(hiddenId), { emailed: false, skipped: 'hidden' });
  });

  void test('a banned member still gets the moderation notice, with the reason', async () => {
    const banned = await memberRow({ banned: true, locale: 'de' });
    const t = await threadWithPost(banned.id, banned.id);
    await notify(banned.id, 'moderation', { thread: t.thread.id, post: t.post.id, data: { reason: 'Spam <script>' } });
    const { sent, send } = recorder();
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(sent.length, 1);
    assert.equal(sent[0].email.subject, 'Zu Ihrem Beitrag in „Gate colours look alike“');
    assert.match(sent[0].email.html, /Spam &lt;script&gt;/);
    assert.match(sent[0].email.text, /antworten Sie auf diese E-Mail/);
  });

  void test('release announcements come from news@, one email for one release', async () => {
    const reader = await memberRow();
    const bot = await one<{ id: number }>(pg, `SELECT id::int FROM members WHERE email = 'releases@outbrick.site'`);
    const t = await threadWithPost(bot.id, bot.id, 'What’s new: **calmer gates**.');
    await notify(reader.id, 'release', { thread: t.thread.id, data: { version: '5.1' } });
    const { sent, send } = recorder();
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(sent.length, 1);
    assert.equal(sent[0].email.from, 'OutBrick News <news@outbrick.site>');
    assert.equal(sent[0].email.replyTo, 'news@outbrick.site');
    assert.equal(sent[0].email.subject, 'OutBrick 5.1 is out');
    assert.match(sent[0].email.text, /Opening post/);
  });

  void test('switched-off kinds are skipped; defaults are all on', async () => {
    assert.equal(wantsEmail({}, 'watched'), true);
    assert.equal(wantsEmail({ watched: false }, 'watched'), false);
    assert.equal(wantsEmail({ reply: false }, 'welcome'), true);
  });

  void test('hourly cap: 6 emails, then the rest wait and go grouped later', async () => {
    const reader = await memberRow();
    const writer = await memberRow();
    const t = await threadWithPost(reader.id, writer.id);
    for (let i = 0; i < HOURLY_CAP; i++) await pg.query(`INSERT INTO rate_events (key) VALUES ($1)`, [`notify:member:${reader.id}`]);
    const a = await notify(reader.id, 'reply', { thread: t.thread.id, post: t.post.id, actor: writer.id });
    const b = await notify(reader.id, 'watched', { thread: t.thread.id, post: (await extraPost(t.thread.id, writer.id, 3)).id, actor: writer.id });
    const first = recorder();
    const summary = await runNotify({ apiKey: TEST_RESEND_KEY, send: first.send });
    assert.equal(first.sent.length, 0);
    assert.equal(summary.deferred, 2);
    assert.deepEqual(await state(a.id), { emailed: false, skipped: null });
    // An hour later the window has room again: both go as one grouped email.
    await pg.query(`UPDATE rate_events SET at = now() - interval '61 minutes'`);
    const later = recorder();
    await runNotify({ apiKey: TEST_RESEND_KEY, send: later.send });
    assert.equal(later.sent.length, 1);
    assert.equal(later.sent[0].email.subject, '2 new things in OutBrick Community');
    assert.deepEqual(await state(b.id), { emailed: true, skipped: null });
  });

  void test('the cap counts across runs and kinds', async () => {
    const reader = await memberRow();
    const writer = await memberRow();
    const t = await threadWithPost(reader.id, writer.id);
    const { sent, send } = recorder();
    for (let i = 0; i < HOURLY_CAP + 2; i++) {
      await notify(reader.id, 'moderation', { thread: t.thread.id, post: t.post.id, data: { reason: `r${i}` } });
    }
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(sent.length, HOURLY_CAP);
    const left = await all(pg, `SELECT 1 FROM notifications WHERE member_id = $1 AND emailed_at IS NULL`, [reader.id]);
    assert.equal(left.length, 2);
  });

  void test('a failed send is released and retried with the same idempotency key', async () => {
    const reader = await memberRow();
    const writer = await memberRow();
    const t = await threadWithPost(reader.id, writer.id);
    const note = await notify(reader.id, 'reply', { thread: t.thread.id, post: t.post.id, actor: writer.id });
    const broken = recorder(true);
    const summary = await runNotify({ apiKey: TEST_RESEND_KEY, send: broken.send });
    assert.equal(summary.failed, 1);
    assert.deepEqual(await state(note.id), { emailed: false, skipped: null });
    const fixed = recorder();
    await runNotify({ apiKey: TEST_RESEND_KEY, send: fixed.send });
    assert.equal(fixed.sent.length, 1);
    assert.equal(fixed.sent[0].key, broken.sent[0].key);
    assert.deepEqual(await state(note.id), { emailed: true, skipped: null });
  });

  void test('overlapping runs never send the same rows twice', async () => {
    const reader = await memberRow();
    const writer = await memberRow();
    const t = await threadWithPost(reader.id, writer.id);
    await notify(reader.id, 'reply', { thread: t.thread.id, post: t.post.id, actor: writer.id });
    const { sent, send } = recorder();
    await Promise.all([runNotify({ apiKey: TEST_RESEND_KEY, send }), runNotify({ apiKey: TEST_RESEND_KEY, send })]);
    assert.equal(sent.length, 1);
  });

  void test('the welcome goes exactly once, in the member’s language, and waits for a confirmed address', async () => {
    const member = await memberRow({ locale: 'ja' });
    const pending = await memberRow({ verified: false });
    await notify(member.id, 'welcome');
    const wait = await notify(pending.id, 'welcome');
    const { sent, send } = recorder();
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(sent.length, 1);
    assert.equal(sent[0].email.subject, 'OutBrickコミュニティへようこそ');
    assert.equal(sent[0].key, `community-welcome-${member.id}`);
    assert.equal(sent[0].email.headers, undefined);
    assert.deepEqual(await state(wait.id), { emailed: false, skipped: null });
    await pg.query(`UPDATE members SET email_verified = true WHERE id = $1`, [pending.id]);
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.equal(sent.length, 2);
    // A welcome that waited more than a week for confirmation is dropped.
    const stale = await memberRow({ verified: false });
    const old = await notify(stale.id, 'welcome', { age: '8 days' });
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    assert.deepEqual(await state(old.id), { emailed: false, skipped: 'unverified' });
  });

  void test('without RESEND_API_KEY it does nothing and says so once', async () => {
    const reader = await memberRow();
    await notify(reader.id, 'welcome');
    const saved = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;
    const logs: string[] = [];
    const log = console.log;
    console.log = (...args: unknown[]) => logs.push(args.join(' '));
    try {
      const { sent, send } = recorder();
      await runNotify({ send });
      await runNotify({ send });
      assert.equal(sent.length, 0);
    } finally {
      console.log = log;
      if (saved !== undefined) process.env.RESEND_API_KEY = saved;
    }
    assert.equal(logs.filter((l) => l.includes('RESEND_API_KEY')).length, 1);
  });
});
