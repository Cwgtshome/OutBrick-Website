// Badges, profiles, leaderboards, mention suggestions, and what the account export and
// deletion do with the new data.

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request } from './test/harness.ts';
import { api, member, newThread, notificationsFor, resetRates } from './test/forum-helpers.ts';
import authHandler from '../functions/community-auth.mts';
import { runBadgeJob } from './badges.ts';
import { runNotify } from './notify.ts';
import type { OutgoingEmail } from '../../emails/resend.ts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

const badgesOf = async (id: number) =>
  (await pg.query<{ badge: string; level: number; revoked: boolean }>(`SELECT badge, level, (revoked_at IS NOT NULL) AS revoked FROM member_badges WHERE member_id = $1 ORDER BY badge, level`, [id])).rows;
const reply = (cookie: string, threadId: number, body = 'An answer.') => api('POST', `/threads/${threadId}/posts`, { cookie, body: { body } });

void test('first_post on the spot, with a badge notification; held posts wait for the daily job', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  await newThread(ada.cookie, { title: 'My very first thread' });
  assert.deepEqual(await badgesOf(ada.id), [{ badge: 'first_post', level: 1, revoked: false }]);
  const notes = (await notificationsFor(pg, ada.id)).filter((n) => n.kind === 'badge');
  assert.deepEqual(notes.map((n) => [n.thread_id, n.data]), [[null, { badge: 'first_post', level: 1 }]]);
  await newThread(ada.cookie, { title: 'My second thread here' });
  assert.equal((await badgesOf(ada.id)).length, 1, 'once');

  // A post with a link from a new member waits in the queue: no badge until it is approved.
  const newbie = await member(pg);
  const held = await newThread(newbie.cookie, { title: 'A thread with a link', body: 'See https://example.com/page' });
  assert.equal((await badgesOf(newbie.id)).length, 0);
  const mod = await member(pg, { role: 'moderator' });
  const queue = await api('GET', '/mod/queue', { cookie: mod.cookie });
  const item = queue.body.posts.find((p: { thread: { id: number } }) => p.thread.id === held.id);
  await api('POST', `/posts/${item.post.id}/approve`, { cookie: mod.cookie });
  await runBadgeJob();
  assert.deepEqual((await badgesOf(newbie.id)).map((b) => b.badge), ['first_post']);
});

void test('helpful at 1 and 10 solved answers, never for answering yourself; bug_hunter and idea_maker on status', async () => {
  await resetRates(pg);
  const helper = await member(pg);
  const mod = await member(pg, { role: 'team' });
  for (let i = 0; i < 10; i++) {
    if (i % 4 === 0) await resetRates(pg);
    const asker = await member(pg);
    const t = await newThread(asker.cookie, { categorySlug: 'help', title: `Question number ${i}` });
    const r = await reply(helper.cookie, t.id);
    await api('POST', `/threads/${t.id}/solve`, { cookie: asker.cookie, body: { postId: r.body.post.id } });
    if (i === 0) assert.deepEqual((await badgesOf(helper.id)).map((b) => [b.badge, b.level]), [['first_post', 1], ['helpful', 1]]);
  }
  assert.deepEqual((await badgesOf(helper.id)).filter((b) => b.badge === 'helpful').map((b) => b.level), [1, 10]);

  const selfie = await member(pg);
  const own = await newThread(selfie.cookie, { categorySlug: 'help', title: 'Answering myself' });
  const mine = await reply(selfie.cookie, own.id);
  await api('POST', `/threads/${own.id}/solve`, { cookie: selfie.cookie, body: { postId: mine.body.post.id } });
  assert.ok(!(await badgesOf(selfie.id)).some((b) => b.badge === 'helpful'), 'self-answers do not count');

  await resetRates(pg);
  const reporter = await member(pg);
  const bug = { device: 'iPad', osVersion: '27', appVersion: '5.0', assistive: ['voiceover'], steps: 'Tap the level.', expected: 'Opens', actual: 'Crashes' };
  const b = await newThread(reporter.cookie, { categorySlug: 'bugs', title: 'Crash on level 41', bug });
  await api('PATCH', `/threads/${b.id}`, { cookie: mod.cookie, body: { status: 'not_a_bug' } });
  assert.ok(!(await badgesOf(reporter.id)).some((x) => x.badge === 'bug_hunter'));
  await api('PATCH', `/threads/${b.id}`, { cookie: mod.cookie, body: { status: 'confirmed' } });
  assert.ok((await badgesOf(reporter.id)).some((x) => x.badge === 'bug_hunter'));
  const thinker = await member(pg);
  const idea = await newThread(thinker.cookie, { categorySlug: 'ideas', title: 'An idea worth planning' });
  await api('PATCH', `/threads/${idea.id}`, { cookie: mod.cookie, body: { status: 'planned' } });
  assert.deepEqual((await badgesOf(thinker.id)).map((x) => x.badge), ['first_post', 'idea_maker']);
});

void test('the daily job: welcomer, anniversary, nothing for the banned, deleted or the release account', async () => {
  await resetRates(pg);
  const welcomer = await member(pg);
  for (let i = 0; i < 10; i++) {
    if (i % 4 === 0) await resetRates(pg);
    const newcomer = await member(pg);
    const t = await newThread(newcomer.cookie, { title: `Hello from newcomer ${i}` });
    await reply(welcomer.cookie, t.id, 'Welcome!');
  }
  const old = await member(pg);
  await pg.query(`UPDATE members SET created_at = now() - interval '2 years 1 day' WHERE id = $1`, [old.id]);
  const banned = await member(pg);
  await pg.query(`UPDATE members SET created_at = now() - interval '400 days', banned_until = now() + interval '3 days' WHERE id = $1`, [banned.id]);
  await pg.query(`UPDATE members SET created_at = now() - interval '400 days' WHERE email = 'releases@outbrick.site'`);

  const first = await runBadgeJob();
  assert.ok(first.awarded >= 2);
  assert.ok((await badgesOf(welcomer.id)).some((b) => b.badge === 'welcomer'));
  assert.deepEqual((await badgesOf(old.id)).map((b) => [b.badge, b.level]), [['anniversary', 2]]);
  assert.deepEqual(await badgesOf(banned.id), []);
  const bot = await pg.query(`SELECT count(*)::int AS n FROM member_badges b JOIN members m ON m.id = b.member_id WHERE m.email = 'releases@outbrick.site'`);
  assert.equal((bot.rows[0] as { n: number }).n, 0);
  assert.equal((await runBadgeJob()).awarded, 0, 'a second run awards nothing new');
});

void test('staff grant and revoke; moderators and members cannot; a revoked badge is not handed back', async () => {
  await resetRates(pg);
  const staff = await member(pg, { role: 'team' });
  const moderator = await member(pg, { role: 'moderator' });
  const ada = await member(pg);
  const grant = (cookie: string, body: Record<string, unknown>, id = ada.id) => api('POST', `/mod/members/${id}/badges`, { cookie, body });
  assert.equal((await grant(ada.cookie, { badge: 'beta_tester', on: true })).status, 403);
  assert.equal((await grant(moderator.cookie, { badge: 'beta_tester', on: true })).status, 403);
  assert.equal((await api('POST', `/mod/members/${ada.id}/badges`, { body: { badge: 'beta_tester', on: true } })).status, 401);
  assert.equal((await grant(staff.cookie, { badge: 'wizard', on: true })).status, 400);
  assert.equal((await grant(staff.cookie, { badge: 'beta_tester', on: true }, 999999)).status, 404);

  const res = await grant(staff.cookie, { badge: 'accessibility_champion', on: true });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.deepEqual(res.body.badges.map((b: { key: string; granted: boolean }) => [b.key, b.granted]), [['accessibility_champion', true]]);
  const note = (await notificationsFor(pg, ada.id)).find((n) => n.kind === 'badge');
  assert.deepEqual(note?.data, { badge: 'accessibility_champion', level: 1 });

  // The top badge shows next to the name.
  const t = await newThread(ada.cookie, { title: 'Champion thread' });
  assert.equal(t.author.topBadge, 'accessibility_champion');
  const detail = await api('GET', `/threads/${t.id}`);
  assert.equal(detail.body.posts[0].author.topBadge, 'accessibility_champion');

  const revoked = await grant(staff.cookie, { badge: 'first_post', on: false });
  assert.deepEqual(revoked.body.badges.map((b: { key: string }) => b.key), ['accessibility_champion']);
  await runBadgeJob();
  assert.deepEqual((await badgesOf(ada.id)).find((b) => b.badge === 'first_post'), { badge: 'first_post', level: 1, revoked: true }, 'stays revoked');
  await grant(staff.cookie, { badge: 'accessibility_champion', on: false });
  assert.equal((await api('GET', `/threads/${t.id}`)).body.posts[0].author.topBadge, undefined);
  const restored = await grant(staff.cookie, { badge: 'first_post', on: true });
  assert.deepEqual(restored.body.badges.map((b: { key: string }) => b.key), ['first_post']);
  const { rows } = await pg.query<{ action: string }>(`SELECT action FROM mod_log WHERE target_type = 'member' AND target_id = $1 ORDER BY id`, [ada.id]);
  assert.deepEqual(rows.map((r) => r.action), ['member.badge.grant', 'member.badge.revoke', 'member.badge.revoke', 'member.badge.grant']);
});

void test('a badge email goes out in the member’s language, linking their profile, and can be switched off', async () => {
  await resetRates(pg);
  await pg.query(`UPDATE notifications SET email_skipped = 'test'`);
  const staff = await member(pg, { role: 'team' });
  const fr = await member(pg);
  const off = await member(pg);
  await pg.query(`UPDATE members SET locale = 'fr' WHERE id = $1`, [fr.id]);
  await pg.query(`UPDATE members SET email_prefs = '{"badge": false}'::jsonb WHERE id = $1`, [off.id]);
  for (const m of [fr, off]) await api('POST', `/mod/members/${m.id}/badges`, { cookie: staff.cookie, body: { badge: 'beta_tester', on: true } });
  await pg.query(`UPDATE notifications SET created_at = now() - interval '10 minutes'`);
  const sent: OutgoingEmail[] = [];
  const summary = await runNotify({ apiKey: 're_test', send: async (_k, email) => (sent.push(email), { ok: true, status: 200, data: {} }) });
  assert.equal(summary.sent, 1);
  assert.equal(sent.length, 1);
  assert.match(sent[0].subject, /Bêta-testeur/);
  assert.match(sent[0].html, new RegExp(`/fr/community/u/${fr.id}`));
  const skipped = await pg.query<{ email_skipped: string }>(`SELECT email_skipped FROM notifications WHERE member_id = $1 AND kind = 'badge'`, [off.id]);
  assert.equal(skipped.rows[0].email_skipped, 'pref_off');
  // And the switch is accepted by PATCH /me.
  const patch = await authHandler(request('PATCH', '/api/community/me', { cookie: fr.cookie, body: { emailPrefs: { badge: false } } }));
  assert.equal(patch.status, 200);
});

void test('profiles: stats, badges, recent posts; nothing private, nothing for a deleted member', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const mod = await member(pg, { role: 'team' });
  const q = await newThread(bob.cookie, { categorySlug: 'help', title: 'Profile question' });
  const a = await reply(ada.cookie, q.id, 'Profile **answer**');
  await api('POST', `/threads/${q.id}/solve`, { cookie: bob.cookie, body: { postId: a.body.post.id } });
  await api('POST', `/posts/${a.body.post.id}/reactions`, { cookie: bob.cookie, body: { reaction: 'thanks', on: true } });
  const idea = await newThread(ada.cookie, { categorySlug: 'ideas', title: 'Profile idea shipped' });
  await api('PATCH', `/threads/${idea.id}`, { cookie: mod.cookie, body: { status: 'shipped' } });
  const hiddenReply = await reply(ada.cookie, q.id, 'A hidden one');
  await api('POST', `/posts/${hiddenReply.body.post.id}/hide`, { cookie: mod.cookie, body: { reason: 'Off topic' } });

  const res = await api('GET', `/members/${ada.id}`);
  assert.equal(res.status, 200);
  assert.deepEqual(res.body.stats, { posts: 2, threads: 1, solved: 1, reactionsReceived: 1, ideasShipped: 1, bugsConfirmed: 0 });
  assert.deepEqual(res.body.badges.map((b: { key: string }) => b.key), ['shipped', 'helpful', 'idea_maker', 'first_post']);
  assert.equal(res.body.member.topBadge, 'shipped');
  assert.deepEqual(res.body.recentPosts.map((p: { thread: { id: number }; excerpt: string }) => [p.thread.id, p.excerpt]), [
    [idea.id, 'Hello there.'],
    [q.id, 'Profile answer'],
  ]);
  assert.ok(!JSON.stringify(res.body).includes('@example.com'));

  await authHandler(request('DELETE', '/api/community/me', { cookie: bob.cookie, body: { confirm: 'DELETE' } }));
  const gone = await api('GET', `/members/${bob.id}`);
  assert.equal(gone.body.member.displayName, 'Former member');
  assert.deepEqual([gone.body.badges, gone.body.recentPosts, gone.body.stats.posts], [[], [], 0]);
  // A deleted member's reaction no longer counts.
  assert.equal((await api('GET', `/members/${ada.id}`)).body.stats.reactionsReceived, 0);
});

void test('leaderboards: helpers, ideas, bugs by period; the team shown separately', async () => {
  await resetRates(pg);
  const helper = await member(pg, { name: 'Board Helper' });
  const teamer = await member(pg, { name: 'Board Team', role: 'team' });
  const asker = await member(pg);
  for (const who of [helper, teamer]) {
    const t = await newThread(asker.cookie, { categorySlug: 'help', title: `Board question for ${who.name}` });
    const r = await reply(who.cookie, t.id);
    await api('POST', `/threads/${t.id}/solve`, { cookie: asker.cookie, body: { postId: r.body.post.id } });
  }
  const res = await api('GET', '/leaderboard?period=week&kind=helpers');
  assert.equal(res.status, 200);
  assert.ok(res.body.entries.some((e: { member: { id: number } }) => e.member.id === helper.id));
  assert.ok(!res.body.entries.some((e: { member: { id: number } }) => e.member.id === teamer.id), 'staff are not on the members’ board');
  const mine = res.body.entries.find((e: { member: { id: number } }) => e.member.id === helper.id);
  assert.ok(mine.score >= 1 && mine.detail.solved >= 1 && 'reactions' in mine.detail);
  assert.ok(res.body.team.some((e: { member: { id: number } }) => e.member.id === teamer.id));
  assert.equal(res.body.entries[0].rank, 1);

  // An answer from last year counts for "all" but not for "week".
  await pg.query(`UPDATE posts SET created_at = now() - interval '400 days' WHERE author_id = $1`, [helper.id]);
  await pg.query(`DELETE FROM reactions WHERE post_id IN (SELECT id FROM posts WHERE author_id = $1)`, [helper.id]);
  const week = await api('GET', '/leaderboard?period=week&kind=helpers');
  assert.ok(!week.body.entries.some((e: { member: { id: number } }) => e.member.id === helper.id));
  const all = await api('GET', '/leaderboard?period=all&kind=helpers');
  assert.ok(all.body.entries.some((e: { member: { id: number } }) => e.member.id === helper.id));

  const ideas = await api('GET', '/leaderboard?period=month&kind=ideas');
  assert.equal(ideas.body.kind, 'ideas');
  const bugs = await api('GET', '/leaderboard?kind=bugs&period=nonsense');
  assert.equal(bugs.body.period, 'week');
  assert.ok(bugs.body.entries.every((e: { detail: Record<string, number> }) => 'confirmed' in e.detail));
});

void test('mention suggestions: prefix first, fuzzy after, eight at most, signed in, never the banned or deleted', async () => {
  await resetRates(pg);
  const asker = await member(pg, { name: 'Zed Asker' });
  for (const name of ['Penelope Sky', 'Penny Lane', 'Pen', 'Peter Pan', 'Banned Penny', 'Gone Penny']) await member(pg, { name });
  await pg.query(`UPDATE members SET banned_until = now() + interval '1 day' WHERE display_name = 'Banned Penny'`);
  await pg.query(`UPDATE members SET deleted_at = now() WHERE display_name = 'Gone Penny'`);
  assert.equal((await api('GET', '/members/suggest?q=pen')).status, 401);
  const res = await api('GET', '/members/suggest?q=@PEN', { cookie: asker.cookie });
  assert.equal(res.status, 200);
  const names = res.body.members.map((m: { displayName: string }) => m.displayName);
  assert.deepEqual(names.slice(0, 3), ['Pen', 'Penny Lane', 'Penelope Sky']);
  assert.ok(!names.includes('Banned Penny') && !names.includes('Gone Penny'));
  assert.ok(names.length <= 8);
  assert.ok(!JSON.stringify(res.body).includes('@example.com'));
  assert.deepEqual(Object.keys(res.body.members[0]).sort(), ['displayName', 'id', 'role']);
  const pct = await api('GET', `/members/suggest?q=${encodeURIComponent('%')}`, { cookie: asker.cookie });
  assert.deepEqual(pct.body.members, [], 'LIKE wildcards are literal');
  let limited = false;
  for (let i = 0; i < 125 && !limited; i++) limited = (await api('GET', '/members/suggest?q=p', { cookie: asker.cookie })).status === 429;
  assert.ok(limited, 'rate-limited');
});

void test('the export carries reactions, bookmarks, poll votes and badges', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const t = await newThread(ada.cookie, { title: 'Export poll thread', poll: { question: 'Yes?', options: ['Yes', 'No'], multiple: false } });
  const opening = (await api('GET', `/threads/${t.id}`)).body;
  await api('POST', `/posts/${opening.posts[0].id}/reactions`, { cookie: bob.cookie, body: { reaction: 'like', on: true } });
  await api('POST', `/posts/${opening.posts[0].id}/bookmark`, { cookie: bob.cookie, body: { on: true } });
  await api('POST', `/threads/${t.id}/poll/vote`, { cookie: bob.cookie, body: { optionIds: [opening.poll.options[0].id] } });
  await reply(bob.cookie, t.id);
  const res = await authHandler(request('GET', '/api/community/me/export', { cookie: bob.cookie }));
  const data = (await res.json()) as Record<string, { kind?: string; option?: string; badge?: string }[]>;
  assert.equal(data.reactions[0].kind, 'like');
  assert.equal(data.bookmarks.length, 1);
  assert.equal(data.pollVotes[0].option, 'Yes');
  assert.equal(data.badges[0].badge, 'first_post');

  await authHandler(request('DELETE', '/api/community/me', { cookie: bob.cookie, body: { confirm: 'DELETE' } }));
  for (const table of ['reactions', 'bookmarks', 'poll_votes', 'member_badges']) {
    const { rows } = await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM ${table} WHERE member_id = $1`, [bob.id]);
    assert.equal(rows[0].n, 0, table);
  }
});
