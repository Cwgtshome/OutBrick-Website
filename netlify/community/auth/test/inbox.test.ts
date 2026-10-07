import { after, afterEach, before, beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request, signedInCookie } from '../../test/harness.ts';
import { communityAuth } from '../routes.ts';
import { readUnsubscribeToken, unsubscribeToken, unsubscribeUrl } from '../inbox.ts';
import { all, foreignRequest, one, stubFetch, withEnv, TEST_RESEND_KEY } from './kit.ts';

let pg: PGlite;
let restoreEnv: () => void;
let fetchStub: ReturnType<typeof stubFetch>;
let n = 0;

before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});
beforeEach(() => {
  restoreEnv = withEnv({ RESEND_API_KEY: TEST_RESEND_KEY });
  fetchStub = stubFetch();
});
afterEach(() => {
  fetchStub.restore();
  restoreEnv();
});

async function seed() {
  n++;
  const me = await signedInCookie(pg, { displayName: `Reader ${n}`, email: `reader${n}@example.com` });
  const actor = await signedInCookie(pg, { displayName: `Writer ${n}`, email: `writer${n}@example.com`, role: 'team' });
  const thread = await one<{ id: number }>(pg, `INSERT INTO threads (category_id, author_id, title, slug) VALUES (3, $1, 'Gate colours', 'gate-colours') RETURNING id::int`, [me.id]);
  const post = await one<{ id: number }>(pg, `INSERT INTO posts (thread_id, author_id, number, body_md, body_html) VALUES ($1, $2, 2, 'Reply', '<p>Reply</p>') RETURNING id::int`, [thread.id, actor.id]);
  return { me, actor, thread, post };
}

describe('notifications', () => {
  test('list, newest first, with actor, thread, post number and data; welcome rows hidden', async () => {
    const { me, actor, thread, post } = await seed();
    await pg.query(`INSERT INTO notifications (member_id, kind, created_at) VALUES ($1, 'welcome', now() - interval '1 hour')`, [me.id]);
    await pg.query(`INSERT INTO notifications (member_id, kind, thread_id, post_id, actor_id, created_at) VALUES ($1, 'reply', $2, $3, $4, now() - interval '5 minutes')`, [me.id, thread.id, post.id, actor.id]);
    await pg.query(`INSERT INTO notifications (member_id, kind, thread_id, data) VALUES ($1, 'status', $2, '{"status":"fixed","statusNote":"Fixed in 5.1"}')`, [me.id, thread.id]);
    const res = await communityAuth(request('GET', '/api/community/notifications', { cookie: me.cookie }));
    assert.equal(res.status, 200);
    const body = await res.json<any>();
    assert.equal(body.unread, 2);
    assert.equal(body.page, 1);
    assert.equal(body.pages, 1);
    assert.deepEqual(body.notifications.map((x: { kind: string }) => x.kind), ['status', 'reply']);
    const reply = body.notifications[1];
    assert.deepEqual(reply.actor, { id: actor.id, displayName: `Writer ${n}`, role: 'team' });
    assert.deepEqual(reply.thread, { id: thread.id, slug: 'gate-colours', title: 'Gate colours' });
    assert.equal(reply.postNumber, 2);
    assert.equal(reply.read, false);
    assert.match(reply.createdAt, /Z$/);
    assert.deepEqual(body.notifications[0].data, { status: 'fixed', statusNote: 'Fixed in 5.1' });
  });

  test('pagination at 30 a page', async () => {
    const { me, thread } = await seed();
    await pg.query(`INSERT INTO notifications (member_id, kind, thread_id) SELECT $1, 'watched', $2 FROM generate_series(1, 31)`, [me.id, thread.id]);
    const p1 = await (await communityAuth(request('GET', '/api/community/notifications', { cookie: me.cookie }))).json<any>();
    const p2 = await (await communityAuth(request('GET', '/api/community/notifications?page=2', { cookie: me.cookie }))).json<any>();
    assert.equal(p1.notifications.length, 30);
    assert.equal(p2.notifications.length, 1);
    assert.equal(p2.pages, 2);
    const clamped = await (await communityAuth(request('GET', '/api/community/notifications?page=99', { cookie: me.cookie }))).json<any>();
    assert.equal(clamped.page, 2);
  });

  test('mark read: some ids, only my own; then all', async () => {
    const a = await seed();
    const b = await seed();
    const mine = await all<{ id: number }>(pg, `INSERT INTO notifications (member_id, kind) VALUES ($1, 'reply'), ($1, 'mention') RETURNING id::int`, [a.me.id]);
    const theirs = await one<{ id: number }>(pg, `INSERT INTO notifications (member_id, kind) VALUES ($1, 'reply') RETURNING id::int`, [b.me.id]);
    const res = await communityAuth(request('POST', '/api/community/notifications/read', { cookie: a.me.cookie, body: { ids: [mine[0].id, theirs.id] } }));
    assert.deepEqual(await res.json<any>(), { ok: true });
    const read = await all<{ id: number; read: boolean }>(pg, `SELECT id::int, read_at IS NOT NULL AS read FROM notifications WHERE id = ANY($1::bigint[]) ORDER BY id`, [[mine[0].id, mine[1].id, theirs.id]]);
    assert.deepEqual(read.map((r) => r.read), [true, false, false]);
    await communityAuth(request('POST', '/api/community/notifications/read', { cookie: a.me.cookie, body: { all: true } }));
    const session = await (await communityAuth(request('GET', '/api/community/session', { cookie: a.me.cookie }))).json<any>();
    assert.equal(session.unreadNotifications, 0);
    for (const body of [{}, { ids: [] }, { ids: ['1'] }, { ids: [-1] }, { ids: Array.from({ length: 201 }, (_, i) => i + 1) }]) {
      assert.equal((await communityAuth(request('POST', '/api/community/notifications/read', { cookie: a.me.cookie, body }))).status, 400);
    }
    assert.equal((await communityAuth(request('GET', '/api/community/notifications'))).status, 401);
  });
});

describe('unsubscribe', () => {
  test('tokens are signed per member and kind', () => {
    const t = unsubscribeToken(TEST_RESEND_KEY, 42, 'reply');
    assert.deepEqual(readUnsubscribeToken(TEST_RESEND_KEY, t), { memberId: 42, kind: 'reply' });
    assert.equal(readUnsubscribeToken(TEST_RESEND_KEY, t.replace('42.', '43.')), null);
    assert.equal(readUnsubscribeToken(TEST_RESEND_KEY, t.replace('.reply.', '.mention.')), null);
    assert.equal(readUnsubscribeToken('another-key', t), null);
    assert.equal(readUnsubscribeToken(TEST_RESEND_KEY, '42.welcome.' + 'a'.repeat(43)), null);
    assert.match(unsubscribeUrl(TEST_RESEND_KEY, 42, 'all'), /^https:\/\/www\.outbrick\.site\/api\/community\/email\/unsubscribe\?token=42\.all\./);
  });

  test('GET shows a page in the member’s language and changes nothing', async () => {
    const { me } = await seed();
    await pg.query(`UPDATE members SET locale = 'fr' WHERE id = $1`, [me.id]);
    const token = unsubscribeToken(TEST_RESEND_KEY, me.id, 'watched');
    const res = await communityAuth(foreignRequest('GET', `/api/community/email/unsubscribe?token=${token}`));
    assert.equal(res.status, 200);
    const html = await res.text();
    assert.match(html, /<html lang="fr"/);
    assert.match(html, /Ne plus recevoir d’e-mails pour les discussions et catégories que vous suivez/);
    assert.match(html, /<form method="post"/);
    assert.deepEqual((await one<{ email_prefs: unknown }>(pg, `SELECT email_prefs FROM members WHERE id = $1`, [me.id])).email_prefs, {});
  });

  test('RFC 8058 one-click POST: no cookie, no Origin, turns that kind off', async () => {
    const { me } = await seed();
    const token = unsubscribeToken(TEST_RESEND_KEY, me.id, 'reply');
    const res = await communityAuth(foreignRequest('POST', `/api/community/email/unsubscribe?token=${token}`, { body: 'List-Unsubscribe=One-Click' }));
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json<any>(), { ok: true });
    assert.deepEqual((await one<{ email_prefs: unknown }>(pg, `SELECT email_prefs FROM members WHERE id = $1`, [me.id])).email_prefs, { reply: false });
  });

  test('the page’s button turns everything off for "all" and says so', async () => {
    const { me } = await seed();
    const token = unsubscribeToken(TEST_RESEND_KEY, me.id, 'all');
    const res = await communityAuth(foreignRequest('POST', `/api/community/email/unsubscribe?token=${token}`, { origin: 'https://www.outbrick.site', body: '' }));
    assert.equal(res.status, 200);
    assert.match(await res.text(), /OutBrick Community won’t email you any more/);
    const prefs = (await one<{ email_prefs: Record<string, boolean> }>(pg, `SELECT email_prefs FROM members WHERE id = $1`, [me.id])).email_prefs;
    assert.deepEqual(Object.keys(prefs).sort(), ['mention', 'moderation', 'release', 'reply', 'solved', 'status', 'watched']);
    assert.ok(Object.values(prefs).every((v) => v === false));
  });

  test('a bad token: a friendly page on GET, 400 on one-click', async () => {
    const page = await communityAuth(foreignRequest('GET', '/api/community/email/unsubscribe?token=1.reply.forged-signature-that-is-long'));
    assert.equal(page.status, 400);
    assert.match(await page.text(), /That link has expired/);
    const post = await communityAuth(foreignRequest('POST', '/api/community/email/unsubscribe?token=nope', { body: 'List-Unsubscribe=One-Click' }));
    assert.equal(post.status, 400);
  });
});
