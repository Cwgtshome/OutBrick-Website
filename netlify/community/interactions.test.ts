// Reactions, bookmarks, polls, live updates and the pulse, through the real functions.

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request } from './test/harness.ts';
import { api, member, newThread, resetRates } from './test/forum-helpers.ts';
import authHandler from '../functions/community-auth.mts';
import { reactionKinds } from '../../lib/community/contract.ts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

type R = { kind: string; count: number; mine: boolean };
const react = (cookie: string, postId: number, reaction: string, on = true) => api('POST', `/posts/${postId}/reactions`, { cookie, body: { reaction, on } });

async function threadWithReply(authorCookie: string, replierCookie: string, overrides: Record<string, unknown> = {}) {
  const thread = await newThread(authorCookie, overrides);
  const reply = await api('POST', `/threads/${thread.id}/posts`, { cookie: replierCookie, body: { body: 'A reply worth reacting to.' } });
  const detail = await api('GET', `/threads/${thread.id}`);
  return { thread, opening: detail.body.posts[0], reply: reply.body.post };
}

void test('reactions: one of each kind per member, counts and mine on every post, none on your own', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const cy = await member(pg);
  const { thread, opening } = await threadWithReply(ada.cookie, bob.cookie);

  const r1 = await react(bob.cookie, opening.id, 'love');
  assert.equal(r1.status, 200, JSON.stringify(r1.body));
  assert.deepEqual(r1.body.reactions.map((r: R) => r.kind), [...reactionKinds]);
  assert.deepEqual(r1.body.reactions.find((r: R) => r.kind === 'love'), { kind: 'love', count: 1, mine: true });
  const again = await react(bob.cookie, opening.id, 'love');
  assert.equal(again.body.reactions.find((r: R) => r.kind === 'love').count, 1, 'twice counts once');
  await react(bob.cookie, opening.id, 'thanks');
  await react(cy.cookie, opening.id, 'love');

  const own = await react(ada.cookie, opening.id, 'like');
  assert.equal(own.status, 403, 'no reacting to your own post');
  assert.equal((await react(bob.cookie, opening.id, 'angry')).status, 400);
  assert.equal((await react(bob.cookie, opening.id, 'like', 'yes' as unknown as boolean)).status, 400);
  assert.equal((await api('POST', `/posts/${opening.id}/reactions`, { body: { reaction: 'like', on: true } })).status, 401);

  const detail = await api('GET', `/threads/${thread.id}`, { cookie: cy.cookie });
  const first = detail.body.posts[0];
  assert.deepEqual(first.reactions.filter((r: R) => r.count), [
    { kind: 'love', count: 2, mine: true },
    { kind: 'thanks', count: 1, mine: false },
  ]);
  assert.equal(detail.body.posts[1].reactions.length, reactionKinds.length, 'every post carries every kind');
  assert.equal(first.bookmarked, false);
  assert.equal((await api('GET', `/threads/${thread.id}`)).body.posts[0].bookmarked, undefined, 'no bookmark flag signed out');

  const off = await react(bob.cookie, opening.id, 'love', false);
  assert.equal(off.body.reactions.find((r: R) => r.kind === 'love').count, 1);
  // A banned reactor's reaction stops counting.
  await pg.query(`UPDATE members SET banned_until = now() + interval '1 day' WHERE id = $1`, [cy.id]);
  const after = await api('GET', `/threads/${thread.id}`);
  assert.equal(after.body.posts[0].reactions.find((r: R) => r.kind === 'love').count, 0);
  assert.equal((await react(cy.cookie, opening.id, 'like')).status, 403, 'banned members cannot react');
});

void test('reactions refuse hidden, unverified, locked, and are rate-limited', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const unverified = await member(pg, { verified: false });
  const mod = await member(pg, { role: 'moderator' });
  const { thread, opening, reply } = await threadWithReply(ada.cookie, bob.cookie);
  assert.equal((await react(unverified.cookie, opening.id, 'like')).body.error.code, 'unverified');
  await api('POST', `/posts/${reply.id}/hide`, { cookie: mod.cookie, body: { reason: 'Spam' } });
  assert.equal((await react(ada.cookie, reply.id, 'like')).status, 404, 'a hidden post is not there for members');
  assert.equal((await react(mod.cookie, reply.id, 'like')).status, 400, 'and takes no reactions even from moderators');
  await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { locked: true } });
  assert.equal((await react(bob.cookie, opening.id, 'like')).body.error.code, 'locked');
  await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { locked: false } });
  let limited = 0;
  for (let i = 0; i < 32; i++) {
    const r = await react(bob.cookie, opening.id, reactionKinds[i % reactionKinds.length], i % 2 === 0);
    if (r.status === 429) limited++;
  }
  assert.ok(limited >= 2, 'thirty a minute at most');
});

void test('popular_post at 25 reactions', async () => {
  await resetRates(pg);
  const star = await member(pg);
  const thread = await newThread(star.cookie, { title: 'A very popular post' });
  const opening = (await api('GET', `/threads/${thread.id}`)).body.posts[0];
  for (let i = 0; i < 25; i++) {
    const fan = await member(pg);
    await react(fan.cookie, opening.id, 'celebrate');
  }
  const { rows } = await pg.query<{ badge: string }>(`SELECT badge FROM member_badges WHERE member_id = $1 ORDER BY badge`, [star.id]);
  assert.deepEqual(rows.map((r) => r.badge), ['first_post', 'popular_post']);
});

void test('bookmarks: private, listed newest first, only posts you can still see', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const { thread, opening, reply } = await threadWithReply(ada.cookie, bob.cookie, { title: 'Bookmark me thread' });
  assert.equal((await api('POST', `/posts/${opening.id}/bookmark`, { body: { on: true } })).status, 401);
  assert.deepEqual((await api('POST', `/posts/${opening.id}/bookmark`, { cookie: bob.cookie, body: { on: true } })).body, { bookmarked: true });
  await api('POST', `/posts/${reply.id}/bookmark`, { cookie: bob.cookie, body: { on: true } });
  await api('POST', `/posts/${reply.id}/bookmark`, { cookie: bob.cookie, body: { on: true } });
  const detail = await api('GET', `/threads/${thread.id}`, { cookie: bob.cookie });
  assert.deepEqual(detail.body.posts.map((p: { bookmarked: boolean }) => p.bookmarked), [true, true]);
  assert.deepEqual((await api('GET', `/threads/${thread.id}`, { cookie: ada.cookie })).body.posts.map((p: { bookmarked: boolean }) => p.bookmarked), [false, false]);

  const list = async (cookie?: string) => {
    const res = await authHandler(request('GET', '/api/community/me/bookmarks', { cookie }));
    return { status: res.status, body: (await res.json()) as { bookmarks: { post: { id: number; excerpt: string }; thread: { title: string } }[]; total: number } };
  };
  assert.equal((await list()).status, 401);
  const mine = await list(bob.cookie);
  assert.equal(mine.body.total, 2);
  assert.equal(mine.body.bookmarks[0].thread.title, 'Bookmark me thread');
  assert.ok(!JSON.stringify(mine.body).includes('@example.com'));
  assert.equal((await list(ada.cookie)).body.total, 0, 'bookmarks are private');

  await api('POST', `/posts/${opening.id}/hide`, { cookie: mod.cookie, body: { reason: 'Off topic' } });
  assert.deepEqual((await list(bob.cookie)).body.bookmarks.map((b) => b.post.id), [reply.id], 'a hidden post drops out');
  await api('POST', `/posts/${reply.id}/bookmark`, { cookie: bob.cookie, body: { on: false } });
  assert.equal((await list(bob.cookie)).body.total, 0);
});

void test('polls: create with a thread, vote once (or replace), results for everyone, closed and edit rules', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const cy = await member(pg);
  const unverified = await member(pg, { verified: false });
  const mod = await member(pg, { role: 'moderator' });

  const bad = await api('POST', '/threads', {
    cookie: ada.cookie,
    body: { categorySlug: 'general', title: 'A bad poll', body: 'x', language: 'en', poll: { question: '', options: ['One', 'one'], multiple: false, closesAt: '2001-01-01' } },
  });
  assert.equal(bad.status, 400);
  assert.deepEqual(Object.keys(bad.body.error.fields).sort(), ['poll.closesAt', 'poll.options.1', 'poll.question']);
  const nine = await api('POST', '/threads', {
    cookie: ada.cookie,
    body: { categorySlug: 'general', title: 'Too many options', body: 'x', language: 'en', poll: { question: 'Q?', options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], multiple: false } },
  });
  assert.equal(nine.body.error.fields['poll.options'], 'too_many');

  const thread = await newThread(ada.cookie, { title: 'Which world next?', poll: { question: 'Which world next?', options: ['Ice', 'Desert', 'Jungle'], multiple: false } });
  assert.equal(thread.hasPoll, true);
  const detail = await api('GET', `/threads/${thread.id}`);
  const poll = detail.body.poll;
  assert.equal(poll.question, 'Which world next?');
  assert.deepEqual(poll.options.map((o: { label: string; votes: number }) => [o.label, o.votes]), [['Ice', 0], ['Desert', 0], ['Jungle', 0]]);
  assert.equal(poll.closed, false);
  assert.deepEqual(poll.myVotes, []);
  const [ice, desert, jungle] = poll.options.map((o: { id: number }) => o.id);

  const pv = (cookie: string | undefined, optionIds: unknown) => api('POST', `/threads/${thread.id}/poll/vote`, { cookie, body: { optionIds } });
  assert.equal((await pv(undefined, [ice])).status, 401);
  assert.equal((await pv(unverified.cookie, [ice])).body.error.code, 'unverified');
  assert.equal((await pv(bob.cookie, [ice, desert])).status, 400, 'one choice');
  assert.equal((await pv(bob.cookie, [ice, ice])).status, 400);
  assert.equal((await pv(bob.cookie, [999999])).status, 400, 'an option from nowhere');
  const v1 = await pv(bob.cookie, [ice]);
  assert.equal(v1.status, 200, JSON.stringify(v1.body));
  assert.deepEqual(v1.body.poll.myVotes, [ice]);
  const v2 = await pv(bob.cookie, [desert]);
  assert.deepEqual(v2.body.poll.options.map((o: { votes: number }) => o.votes), [0, 1, 0], 'voting again replaces');
  assert.equal(v2.body.poll.totalVoters, 1);
  await pv(cy.cookie, [desert]);
  const pub = (await api('GET', `/threads/${thread.id}`)).body.poll;
  assert.deepEqual(pub.options.map((o: { votes: number }) => o.votes), [0, 2, 0], 'results are public');
  assert.equal(pub.totalVoters, 2);

  // Editing after votes is refused, for the author and for moderators.
  const newPoll = { question: 'Changed?', options: ['A', 'B'], multiple: true };
  assert.equal((await api('PATCH', `/threads/${thread.id}`, { cookie: ada.cookie, body: { poll: newPoll } })).body.error.code, 'poll_has_votes');
  assert.equal((await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { poll: null } })).status, 409);
  assert.equal((await api('PATCH', `/threads/${thread.id}`, { cookie: bob.cookie, body: { poll: newPoll } })).status, 403, 'not your thread');

  await pv(cy.cookie, []);
  await pv(bob.cookie, []);
  const edited = await api('PATCH', `/threads/${thread.id}`, { cookie: ada.cookie, body: { poll: newPoll } });
  assert.equal(edited.status, 200, 'with every vote withdrawn the poll can change');
  const multi = (await api('GET', `/threads/${thread.id}`)).body.poll;
  assert.equal(multi.multiple, true);
  const ids = multi.options.map((o: { id: number }) => o.id);
  assert.deepEqual((await pv(bob.cookie, ids)).body.poll.myVotes.sort((x: number, y: number) => x - y), [...ids].sort((x: number, y: number) => x - y));
  void jungle;

  // Closed: past closesAt, or a locked thread.
  await pg.query(`UPDATE polls SET closes_at = now() - interval '1 minute' WHERE thread_id = $1`, [thread.id]);
  assert.equal((await pv(cy.cookie, [ids[0]])).body.error.code, 'poll_closed');
  assert.equal((await api('GET', `/threads/${thread.id}`)).body.poll.closed, true);
  await pg.query(`UPDATE polls SET closes_at = NULL WHERE thread_id = $1`, [thread.id]);
  await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { locked: true } });
  assert.equal((await pv(cy.cookie, [ids[0]])).body.error.code, 'poll_closed');

  const noPoll = await newThread(ada.cookie, { title: 'No poll here' });
  assert.equal((await api('POST', `/threads/${noPoll.id}/poll/vote`, { cookie: bob.cookie, body: { optionIds: [ids[0]] } })).status, 400);
  assert.equal((await api('GET', `/threads/${noPoll.id}`)).body.poll, null);
});

void test('live updates: new posts after a number, at most ten, cached privately for five seconds', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const thread = await newThread(ada.cookie, { title: 'A live thread' });
  const none = await api('GET', `/threads/${thread.id}/updates?after=1`);
  assert.deepEqual(none.body, { newPosts: 0, lastNumber: 1, latest: [] });
  for (let i = 0; i < 12; i++) await api('POST', `/threads/${thread.id}/posts`, { cookie: bob.cookie, body: { body: `Live ${i}` } });
  const res = await api('GET', `/threads/${thread.id}/updates?after=1`, { cookie: ada.cookie });
  assert.equal(res.body.newPosts, 12);
  assert.equal(res.body.lastNumber, 13);
  assert.deepEqual(res.body.latest.map((p: { number: number }) => p.number), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.equal(res.body.latest[0].reactions.length, 6);
  const raw = await (await import('../functions/community-api.mts')).default(request('GET', `/api/community/threads/${thread.id}/updates?after=11`));
  assert.equal(raw.headers.get('cache-control'), 'private, max-age=5');
  const views = await pg.query<{ view_count: number }>(`SELECT view_count FROM threads WHERE id = $1`, [thread.id]);
  assert.equal(views.rows[0].view_count, 0, 'polling never counts a view');
  // Hidden posts are not news for members.
  const mod = await member(pg, { role: 'moderator' });
  const posts = (await api('GET', `/threads/${thread.id}?page=1`, { cookie: mod.cookie })).body.posts;
  await api('POST', `/posts/${posts.at(-1).id}/hide`, { cookie: mod.cookie, body: { reason: 'Spam link' } });
  assert.equal((await api('GET', `/threads/${thread.id}/updates?after=12`)).body.newPosts, 0);
  assert.equal((await api('GET', `/threads/999999/updates?after=1`)).status, 404);
});

void test('pulse: unread notifications and the newest visible thread', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const thread = await newThread(ada.cookie, { title: 'Pulse thread' });
  await api('POST', `/threads/${thread.id}/posts`, { cookie: bob.cookie, body: { body: 'Hello Ada' } });
  const anon = await api('GET', '/pulse');
  assert.equal(anon.body.unreadNotifications, 0);
  assert.ok(anon.body.latestThreadAt);
  const mine = await api('GET', '/pulse', { cookie: ada.cookie });
  const { rows } = await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM notifications WHERE member_id = $1 AND read_at IS NULL AND kind <> 'welcome'`, [ada.id]);
  assert.equal(mine.body.unreadNotifications, rows[0].n);
  assert.ok(mine.body.unreadNotifications >= 1);
});
