import { after, afterEach, before, beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request, signedInCookie } from '../../test/harness.ts';
import { communityAuth } from '../routes.ts';
import { cleanName, displayNameProblem, suggestedName } from '../members.ts';
import { all, linkToken, one, sessionCookieOf, stubFetch, withEnv, TEST_RESEND_KEY } from './kit.ts';

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
  restoreEnv = withEnv({ RESEND_API_KEY: TEST_RESEND_KEY, GOOGLE_CLIENT_ID: undefined, GOOGLE_CLIENT_SECRET: undefined, APPLE_CLIENT_ID: undefined, FACEBOOK_APP_ID: undefined });
  fetchStub = stubFetch();
});
afterEach(() => {
  fetchStub.restore();
  restoreEnv();
});

async function member(name = `Member ${++n}`) {
  const m = await signedInCookie(pg, { displayName: name, email: `m${n}-${Date.now()}@example.com` });
  return m;
}

const patch = (cookie: string, body: unknown) => communityAuth(request('PATCH', '/api/community/me', { cookie, body }));

describe('session', () => {
  test('signed out: no member, only the configured providers', async () => {
    const res = await communityAuth(request('GET', '/api/community/session'));
    assert.equal(res.status, 200);
    assert.equal(res.headers.get('cache-control'), 'no-store');
    assert.deepEqual(await res.json<any>(), { member: null, providers: ['email'], unreadNotifications: 0 });
    delete process.env.RESEND_API_KEY;
    assert.deepEqual((await (await communityAuth(request('GET', '/api/community/session'))).json<any>()).providers, []);
  });

  test('signed in: self view with unread count (the welcome row is not counted)', async () => {
    const { id, cookie } = await member('Unread Una');
    await pg.query(`INSERT INTO notifications (member_id, kind) VALUES ($1, 'welcome'), ($1, 'reply'), ($1, 'mention')`, [id]);
    const body = await (await communityAuth(request('GET', '/api/community/session', { cookie }))).json<any>();
    assert.equal(body.member.id, id);
    assert.equal(body.member.displayName, 'Unread Una');
    assert.equal(body.member.needsName, false);
    assert.equal(body.unreadNotifications, 2);
    assert.match(body.member.joinedAt, /^\d{4}-\d\d-\d\dT/);
  });

  test('sign out ends the session', async () => {
    const { cookie } = await member();
    const res = await communityAuth(request('POST', '/api/community/auth/signout', { cookie }));
    assert.deepEqual(await res.json<any>(), { ok: true });
    assert.match(res.headers.get('set-cookie')!, /Max-Age=0/);
    assert.equal((await (await communityAuth(request('GET', '/api/community/session', { cookie }))).json<any>()).member, null);
  });
});

describe('PATCH /me', () => {
  test('signed out is a 401', async () => {
    const res = await patch('', { bio: 'x' });
    assert.equal(res.status, 401);
  });

  test('display name rules', async () => {
    const { cookie } = await member();
    await member('Taken Name');
    const cases: [unknown, string][] = [
      ['A', 'too_short'],
      ['x'.repeat(41), 'too_long'],
      ['ada@example.com', 'no_email'],
      ['visit www.spam', 'no_links'],
      ['https://x', 'no_links'],
      ['cheap-pills.com', 'no_links'],
      ['OutBrick', 'reserved'],
      ['Moderator', 'reserved'],
      ['Former member 3', 'reserved'],
      ['taken name', 'taken'],
      ['​​A​', 'too_short'],
    ];
    for (const [displayName, code] of cases) {
      const res = await patch(cookie, { displayName });
      assert.equal(res.status, 400, String(displayName));
      assert.equal((await res.json<any>()).error.fields.displayName, code, String(displayName));
    }
  });

  test('choosing a name clears needsName and tidies spaces', async () => {
    const { id } = await member();
    await pg.query(`UPDATE members SET name_chosen = false WHERE id = $1`, [id]);
    const { cookie } = await (async () => {
      const { startSession } = await import('../../session.ts');
      const set = await startSession(request('POST', '/'), id);
      return { cookie: set.split(';')[0] };
    })();
    const before = await (await communityAuth(request('GET', '/api/community/session', { cookie }))).json<any>();
    assert.equal(before.member.needsName, true);
    const res = await patch(cookie, { displayName: '  Zoë   Brick  ', bio: ' Hello\r\nthere ', locale: 'ja', emailPrefs: { watched: false, release: true } });
    assert.equal(res.status, 200);
    const { member: me } = await res.json<any>();
    assert.equal(me.displayName, 'Zoë Brick');
    assert.equal(me.needsName, false);
    assert.equal(me.bio, 'Hello\nthere');
    assert.equal(me.locale, 'ja');
    assert.deepEqual(me.emailPrefs, { watched: false, release: true });
    // Prefs merge rather than replace.
    const again = await (await patch(cookie, { emailPrefs: { reply: false } })).json<any>();
    assert.deepEqual(again.member.emailPrefs, { watched: false, release: true, reply: false });
  });

  test('bio, locale and prefs validation', async () => {
    const { cookie } = await member();
    assert.equal((await (await patch(cookie, { bio: 'x'.repeat(501) })).json<any>()).error.fields.bio, 'too_long');
    assert.equal((await (await patch(cookie, { locale: 'it' })).json<any>()).error.fields.locale, 'invalid');
    assert.equal((await (await patch(cookie, { emailPrefs: { welcome: false } })).json<any>()).error.fields.emailPrefs, 'invalid');
    assert.equal((await (await patch(cookie, { emailPrefs: { reply: 'no' } })).json<any>()).error.fields.emailPrefs, 'invalid');
    assert.equal((await (await patch(cookie, { emailPrefs: ['reply'] })).json<any>()).error.fields.emailPrefs, 'invalid');
    assert.equal((await patch(cookie, { bio: 'x'.repeat(500) })).status, 200);
  });

  test('PATCH needs our Origin', async () => {
    const { cookie } = await member();
    const res = await communityAuth(request('PATCH', '/api/community/me', { cookie, body: { bio: 'x' }, origin: 'https://evil.example' }));
    assert.equal(res.status, 403);
  });

  test('a suspended member can change emails and language but not their public profile', async () => {
    const { id, cookie } = await member();
    await pg.query(`UPDATE members SET banned_until = now() + interval '1 day' WHERE id = $1`, [id]);
    assert.equal((await patch(cookie, { bio: 'hi' })).status, 403);
    assert.equal((await patch(cookie, { emailPrefs: { reply: false }, locale: 'fr' })).status, 200);
  });

  test('changing the email sends a confirmation; the address changes only when confirmed', async () => {
    const { id, cookie } = await member();
    const res = await patch(cookie, { email: 'New@Example.com' });
    assert.equal(res.status, 200);
    const body = await res.json<any>();
    assert.equal(body.emailConfirmationSent, true);
    assert.notEqual(body.member.email, 'new@example.com');
    const [mail] = fetchStub.emails();
    assert.equal(mail.to[0], 'new@example.com');
    assert.equal(mail.subject, 'Confirm your email address for OutBrick Community');
    assert.match(mail.text, /your emails keep going to the address you had before/);
    const token = linkToken(mail.text, '/api/community/auth/email/confirm');
    await communityAuth(request('POST', `/api/community/auth/email/confirm?token=${token}`));
    assert.equal((await one<{ email: string }>(pg, `SELECT email FROM members WHERE id = $1`, [id])).email, 'new@example.com');
  });

  test('an email that belongs to someone else is refused', async () => {
    const { cookie } = await member();
    await pg.query(`INSERT INTO members (display_name, email, email_verified) VALUES ('Holder', 'held@example.com', true)`);
    const res = await patch(cookie, { email: 'held@example.com' });
    assert.equal((await res.json<any>()).error.fields.email, 'taken');
  });
});

describe('export and delete', () => {
  test('export: a JSON attachment of everything, no secrets', async () => {
    const { id, cookie } = await member('Exporter');
    await pg.query(`INSERT INTO identities (member_id, provider, subject, email) VALUES ($1, 'google', 'g-exp', 'x@example.com')`, [id]);
    const thread = await one<{ id: number }>(pg, `INSERT INTO threads (category_id, author_id, title, slug) VALUES (7, $1, 'My thread', 'my-thread') RETURNING id::int`, [id]);
    await pg.query(`INSERT INTO posts (thread_id, author_id, number, body_md, body_html) VALUES ($1, $2, 1, 'Hello', '<p>Hello</p>')`, [thread.id, id]);
    await pg.query(`INSERT INTO votes (thread_id, member_id) VALUES ($1, $2)`, [thread.id, id]);
    await pg.query(`INSERT INTO follows (member_id, target_type, target_id) VALUES ($1, 'thread', $2)`, [id, thread.id]);
    await pg.query(`INSERT INTO notifications (member_id, kind, thread_id) VALUES ($1, 'reply', $2)`, [id, thread.id]);
    const res = await communityAuth(request('GET', '/api/community/me/export', { cookie }));
    assert.equal(res.status, 200);
    assert.match(res.headers.get('content-disposition')!, new RegExp(`attachment; filename="outbrick-community-${id}.json"`));
    const text = await res.text();
    const data = JSON.parse(text);
    assert.equal(data.member.display_name, 'Exporter');
    assert.equal(data.identities[0].provider, 'google');
    assert.equal(data.threads[0].title, 'My thread');
    assert.equal(data.posts[0].body_md, 'Hello');
    assert.equal(data.votes.length, 1);
    assert.equal(data.follows.length, 1);
    assert.equal(data.notifications.length, 1);
    assert.equal(data.sessions.length, 1);
    assert.doesNotMatch(text, /token_hash/);
    assert.doesNotMatch(text, new RegExp(cookie.split('=')[1]));
    assert.equal((await communityAuth(request('GET', '/api/community/me/export'))).status, 401);
  });

  test('delete needs { confirm: "DELETE" }, blanks personal data and keeps posts', async () => {
    const { id, cookie } = await member('Leaving Lou');
    await pg.query(`UPDATE members SET bio = 'about me', email_prefs = '{"reply":false}' WHERE id = $1`, [id]);
    await pg.query(`INSERT INTO identities (member_id, provider, subject) VALUES ($1, 'apple', 'a-del')`, [id]);
    const thread = await one<{ id: number }>(pg, `INSERT INTO threads (category_id, author_id, title, slug) VALUES (7, $1, 'Bye thread', 'bye') RETURNING id::int`, [id]);
    await pg.query(`INSERT INTO posts (thread_id, author_id, number, body_md, body_html) VALUES ($1, $2, 1, 'Still here', '<p>Still here</p>')`, [thread.id, id]);

    assert.equal((await communityAuth(request('DELETE', '/api/community/me', { cookie, body: {} }))).status, 400);
    assert.equal((await communityAuth(request('DELETE', '/api/community/me', { cookie, body: { confirm: 'delete' } }))).status, 400);
    const res = await communityAuth(request('DELETE', '/api/community/me', { cookie, body: { confirm: 'DELETE' } }));
    assert.deepEqual(await res.json<any>(), { ok: true });
    assert.match(res.headers.get('set-cookie')!, /Max-Age=0/);

    const row = await one<Record<string, unknown>>(pg, `SELECT display_name, email, bio, email_prefs, deleted_at FROM members WHERE id = $1`, [id]);
    assert.equal(row.display_name, `Former member ${id}`);
    assert.equal(row.email, `deleted-${id}@invalid`);
    assert.equal(row.bio, '');
    assert.deepEqual(row.email_prefs, {});
    assert.ok(row.deleted_at);
    assert.equal((await all(pg, `SELECT 1 FROM identities WHERE member_id = $1`, [id])).length, 0);
    assert.equal((await all(pg, `SELECT 1 FROM sessions WHERE member_id = $1`, [id])).length, 0);
    assert.equal((await all(pg, `SELECT 1 FROM posts WHERE author_id = $1`, [id])).length, 1);
    assert.equal((await (await communityAuth(request('GET', '/api/community/session', { cookie }))).json<any>()).member, null);
    // The name is free again.
    const { cookie: other } = await member();
    assert.equal((await patch(other, { displayName: 'Leaving Lou' })).status, 200);
  });

  test('a deleted member signing in again by email starts afresh', async () => {
    const res1 = await communityAuth(request('POST', '/api/community/auth/email', { body: { email: 'again@example.com', locale: 'en' } }));
    assert.equal(res1.status, 200);
    let token = linkToken(fetchStub.emails().at(-1)!.text, '/api/community/auth/email/verify');
    const first = sessionCookieOf(await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`)))!;
    const firstId = (await (await communityAuth(request('GET', '/api/community/session', { cookie: first }))).json<any>()).member.id;
    await communityAuth(request('DELETE', '/api/community/me', { cookie: first, body: { confirm: 'DELETE' } }));
    await communityAuth(request('POST', '/api/community/auth/email', { body: { email: 'again@example.com', locale: 'en' } }));
    token = linkToken(fetchStub.emails().at(-1)!.text, '/api/community/auth/email/verify');
    const second = sessionCookieOf(await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`)))!;
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: second }))).json<any>()).member;
    assert.notEqual(me.id, firstId);
  });
});

describe('name helpers', () => {
  test('suggestions and cleaning', () => {
    assert.equal(suggestedName({ name: null, email: 'ada.lovelace@example.com' }), 'Ada lovelace');
    assert.equal(suggestedName({ name: null, email: 'player12345@example.com' }), 'Player');
    assert.equal(suggestedName({ name: null, email: 'abc@privaterelay.appleid.com' }), 'Player');
    assert.equal(suggestedName({ name: 'Ada (www.ada.com)', email: null }), 'Player');
    assert.equal(cleanName('a\u0000b‮c  d'), 'abc d');
    assert.equal(displayNameProblem('山田'), null);
  });
});
