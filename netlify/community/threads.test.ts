// Threads and posts through the real function (netlify/functions/community-api.mts).

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import { api, member, newThread, notificationsFor, resetRates } from './test/forum-helpers.ts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

void test('categories list in order with counts', async () => {
  const res = await api('GET', '/categories');
  assert.equal(res.status, 200);
  assert.deepEqual(
    res.body.categories.map((c: { slug: string }) => c.slug),
    ['announcements', 'help', 'bugs', 'ideas', 'accessibility', 'show-and-tell', 'general'],
  );
  assert.equal(res.body.categories[0].teamOnlyThreads, true);
  assert.equal(res.body.categories[0].following, undefined);
});

void test('a write from another origin is refused, and so is one with no origin', async () => {
  const ada = await member(pg);
  const body = { categorySlug: 'general', title: 'Cross origin', body: 'x', language: 'en' };
  const res = await api('POST', '/threads', { cookie: ada.cookie, body, origin: 'https://evil.example' });
  assert.equal(res.status, 403);
  assert.equal(res.body.error.code, 'forbidden');
  assert.equal((await api('POST', '/threads', { cookie: ada.cookie, body, origin: null })).status, 403);
  assert.equal((await api('GET', '/threads', { origin: 'https://evil.example' })).status, 200);
});

void test('start a thread, list it, open it, page through replies', async () => {
  await resetRates(pg);
  const ada = await member(pg, { name: 'Ada Starter' });
  const bob = await member(pg, { name: 'Bob Replier' });
  const thread = await newThread(ada.cookie, { title: 'How do stars work?', body: '**Hi** all <script>x</script>', categorySlug: 'help' });
  assert.ok(thread.id > 0);
  assert.equal(thread.slug, 'how-do-stars-work');
  assert.equal(thread.category.kind, 'support');
  assert.equal(thread.author.displayName, 'Ada Starter');
  assert.equal(thread.replyCount, 0);
  assert.ok(!JSON.stringify(thread).includes('@example.com'), 'no email in a summary');

  const list = await api('GET', '/threads?category=help');
  assert.equal(list.status, 200);
  assert.equal(list.body.threads[0].id, thread.id);
  assert.equal(list.body.threads[0].unread, undefined);

  for (let i = 0; i < 27; i++) {
    if (i % 25 === 0) await resetRates(pg);
    const r = await api('POST', `/threads/${thread.id}/posts`, { cookie: bob.cookie, body: { body: `Reply ${i + 2}` } });
    assert.equal(r.status, 201, JSON.stringify(r.body));
    assert.equal(r.body.post.number, i + 2);
  }
  const detail = await api('GET', `/threads/${thread.id}`, { cookie: ada.cookie });
  assert.equal(detail.status, 200);
  assert.equal(detail.body.posts.length, 25);
  assert.equal(detail.body.pages, 2);
  assert.equal(detail.body.posts[0].html, '<p><strong>Hi</strong> all &lt;script&gt;x&lt;/script&gt;</p>');
  assert.equal(detail.body.posts[0].markdown, '**Hi** all <script>x</script>');
  assert.equal(detail.body.posts[1].markdown, undefined, 'only the author and moderators get the source');
  assert.equal(detail.body.thread.replyCount, 27);
  assert.equal(detail.body.thread.lastPoster.displayName, 'Bob Replier');
  assert.equal(detail.body.canReply, true);
  assert.equal(detail.body.canSolve, true);
  assert.equal(detail.body.following, 'watch', 'authors follow their own thread');
  assert.equal(detail.body.firstUnread, 2);
  const page2 = await api('GET', `/threads/${thread.id}?page=2`);
  assert.deepEqual(page2.body.posts.map((p: { number: number }) => p.number), [26, 27, 28]);
  assert.equal(page2.body.canReply, false);
  assert.equal(page2.body.replyBlocked, 'signin');
  const byPost = await api('GET', `/threads/${thread.id}?post=27`);
  assert.equal(byPost.body.page, 2);

  // Reading position and unread counts.
  assert.equal((await api('POST', `/threads/${thread.id}/read`, { cookie: ada.cookie, body: { number: 20 } })).status, 200);
  const listed = await api('GET', `/threads?category=help`, { cookie: ada.cookie });
  assert.equal(listed.body.threads[0].unread, 8);
  const again = await api('GET', `/threads/${thread.id}`, { cookie: ada.cookie });
  assert.equal(again.body.firstUnread, 21);

  // The reply's page is returned for focus after posting.
  await resetRates(pg);
  const last = await api('POST', `/threads/${thread.id}/posts`, { cookie: bob.cookie, body: { body: 'Last one', replyTo: 1 } });
  assert.equal(last.body.page, 2);
  assert.equal(last.body.post.replyTo, 1);
});

void test('post numbers never collide under concurrent replies', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const thread = await newThread(ada.cookie);
  const others = await Promise.all([0, 1, 2, 3, 4, 5].map(() => member(pg)));
  const results = await Promise.all(others.map((m, i) => api('POST', `/threads/${thread.id}/posts`, { cookie: m.cookie, body: { body: `Concurrent ${i}` } })));
  const numbers = results.map((r) => r.body.post.number).sort((a, b) => a - b);
  assert.deepEqual(numbers, [2, 3, 4, 5, 6, 7]);
  const detail = await api('GET', `/threads/${thread.id}`);
  assert.equal(detail.body.thread.replyCount, 6);
});

void test('list sorting and filters', async () => {
  await resetRates(pg);
  const a = await member(pg);
  const b = await member(pg);
  const first = await newThread(a.cookie, { categorySlug: 'ideas', title: 'Idea one alpha', language: 'fr' });
  const second = await newThread(a.cookie, { categorySlug: 'ideas', title: 'Idea two beta', language: 'en' });
  const third = await newThread(b.cookie, { categorySlug: 'ideas', title: 'Idea three gamma', language: 'ja' });
  await api('POST', `/threads/${first.id}/vote`, { cookie: b.cookie, body: { on: true } });
  await api('POST', `/threads/${first.id}/posts`, { cookie: b.cookie, body: { body: 'reply' } });

  const latest = await api('GET', '/threads?category=ideas&sort=latest');
  assert.equal(latest.body.threads[0].id, first.id, 'latest activity first');
  const newest = await api('GET', '/threads?category=ideas&sort=new');
  assert.equal(newest.body.threads[0].id, third.id);
  const top = await api('GET', '/threads?category=ideas&sort=top');
  assert.equal(top.body.threads[0].id, first.id);
  const unanswered = await api('GET', '/threads?category=ideas&sort=unanswered');
  assert.ok(!unanswered.body.threads.some((t: { id: number }) => t.id === first.id));
  const fr = await api('GET', '/threads?category=ideas&language=fr');
  assert.deepEqual(fr.body.threads.map((t: { id: number }) => t.id), [first.id]);
  const frEn = await api('GET', '/threads?category=ideas&language=fr,en&sort=new');
  assert.deepEqual(frEn.body.threads.map((t: { id: number }) => t.id), [second.id, first.id]);
  const byAuthor = await api('GET', `/threads?author=${b.id}`);
  assert.deepEqual(byAuthor.body.threads.map((t: { id: number }) => t.id), [third.id]);
  const byStatus = await api('GET', '/threads?category=ideas&status=open');
  assert.equal(byStatus.body.total, 3);
  assert.equal(first.status, 'open');

  // Pinned threads lead within a category, not in the all-categories list.
  const mod = await member(pg, { role: 'moderator' });
  await api('PATCH', `/threads/${third.id}`, { cookie: mod.cookie, body: { pinned: true } });
  const pinned = await api('GET', '/threads?category=ideas');
  assert.equal(pinned.body.threads[0].id, third.id);
  assert.equal(pinned.body.threads[0].pinned, true);
  const voted = await api('GET', '/threads?category=ideas', { cookie: b.cookie });
  assert.equal(voted.body.threads.find((t: { id: number }) => t.id === first.id).voted, true);
});

void test('pagination of thread lists', async () => {
  await resetRates(pg);
  for (let i = 0; i < 7; i++) {
    const m = await member(pg);
    for (let j = 0; j < 5; j++) await newThread(m.cookie, { categorySlug: 'show-and-tell', title: `Showcase ${i}-${j}` });
  }
  const p1 = await api('GET', '/threads?category=show-and-tell');
  assert.equal(p1.body.total, 35);
  assert.equal(p1.body.pages, 2);
  assert.equal(p1.body.threads.length, 30);
  const p2 = await api('GET', '/threads?category=show-and-tell&page=2');
  assert.equal(p2.body.threads.length, 5);
  const beyond = await api('GET', '/threads?category=show-and-tell&page=99');
  assert.equal(beyond.body.page, 2);
});

void test('validation errors name their fields', async () => {
  const ada = await member(pg);
  const res = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'general', title: 'x', body: '', language: 'en' } });
  assert.equal(res.status, 400);
  assert.equal(res.body.error.code, 'invalid');
  assert.deepEqual(res.body.error.fields, { title: 'too_short', body: 'too_short' });
  const unknown = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'nope', title: 'Long enough', body: 'x', language: 'en' } });
  assert.equal(unknown.body.error.fields.categorySlug, 'unknown');
  const lang = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'general', title: 'Long enough', body: 'x', language: 'xx' } });
  assert.equal(lang.body.error.fields.language, 'invalid');
  const big = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'general', title: 'Long enough', body: 'x'.repeat(20001), language: 'en' } });
  assert.equal(big.body.error.fields.body, 'too_long');
});

void test('bug reports require and return structured details', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const missing = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'bugs', title: 'Status bar silences VoiceOver', body: 'It does.', language: 'en' } });
  assert.equal(missing.status, 400);
  assert.equal(missing.body.error.fields['bug.device'], 'too_short');
  const badAssistive = await api('POST', '/threads', {
    cookie: ada.cookie,
    body: {
      categorySlug: 'bugs',
      title: 'Status bar silences VoiceOver',
      body: 'It does.',
      language: 'en',
      bug: { device: 'iPhone 17', osVersion: '27.0', appVersion: '5.0.1', assistive: ['telepathy'], steps: 'Open a board.', expected: 'Speech', actual: 'Silence' },
    },
  });
  assert.equal(badAssistive.body.error.fields['bug.assistive'], 'invalid');
  const bug = { device: 'iPhone 17', osVersion: '27.0', appVersion: '5.0.1', assistive: ['voiceover', 'voiceover'], steps: 'Open a board.', expected: 'Speech', actual: 'Silence' };
  const thread = await newThread(ada.cookie, { categorySlug: 'bugs', title: 'Status bar silences VoiceOver', bug });
  assert.equal(thread.status, 'new');
  const detail = await api('GET', `/threads/${thread.id}`);
  assert.deepEqual(detail.body.bug, { ...bug, assistive: ['voiceover'] });
  assert.ok(!detail.body.posts[0].html.includes('iPhone 17'), 'the bug summary is data, not post HTML');
});

void test('permissions: signed out, unverified, banned, announcements, locked', async () => {
  await resetRates(pg);
  const body = { categorySlug: 'general', title: 'Permissions test', body: 'x', language: 'en' };
  const anon = await api('POST', '/threads', { body });
  assert.equal(anon.status, 401);
  assert.equal(anon.body.error.code, 'signin_required');

  const unverified = await member(pg, { verified: false });
  const u = await api('POST', '/threads', { cookie: unverified.cookie, body });
  assert.equal(u.status, 403);
  assert.equal(u.body.error.code, 'unverified');

  const banned = await member(pg);
  await pg.query(`UPDATE members SET banned_until = now() + interval '1 day', ban_reason = 'spam' WHERE id = $1`, [banned.id]);
  const b = await api('POST', '/threads', { cookie: banned.cookie, body });
  assert.equal(b.status, 403);

  const ada = await member(pg);
  const ann = await api('POST', '/threads', { cookie: ada.cookie, body: { ...body, categorySlug: 'announcements' } });
  assert.equal(ann.status, 403);
  const team = await member(pg, { role: 'team' });
  const announcement = await newThread(team.cookie, { categorySlug: 'announcements', title: 'Hello from the team' });
  const reply = await api('POST', `/threads/${announcement.id}/posts`, { cookie: ada.cookie, body: { body: 'Everyone can reply' } });
  assert.equal(reply.status, 201);

  const detailForUnverified = await api('GET', `/threads/${announcement.id}`, { cookie: unverified.cookie });
  assert.equal(detailForUnverified.body.replyBlocked, 'unverified');
  const detailForBanned = await api('GET', `/threads/${announcement.id}`, { cookie: banned.cookie });
  assert.equal(detailForBanned.body.replyBlocked, 'banned');

  const mod = await member(pg, { role: 'moderator' });
  const lock = await api('PATCH', `/threads/${announcement.id}`, { cookie: mod.cookie, body: { locked: true } });
  assert.equal(lock.body.thread.locked, true);
  const locked = await api('POST', `/threads/${announcement.id}/posts`, { cookie: ada.cookie, body: { body: 'Too late' } });
  assert.equal(locked.status, 403);
  assert.equal(locked.body.error.code, 'locked');
  assert.equal((await api('GET', `/threads/${announcement.id}`, { cookie: ada.cookie })).body.replyBlocked, 'locked');
  const modReply = await api('POST', `/threads/${announcement.id}/posts`, { cookie: mod.cookie, body: { body: 'Moderators still can' } });
  assert.equal(modReply.status, 201);
  const notMod = await api('PATCH', `/threads/${announcement.id}`, { cookie: ada.cookie, body: { locked: false } });
  assert.equal(notMod.status, 403);
});

void test('editing: own posts with revisions, titles within 24 hours, moderators anything', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const thread = await newThread(ada.cookie, { title: 'Original title' });
  const detail = await api('GET', `/threads/${thread.id}`, { cookie: ada.cookie });
  const postId = detail.body.posts[0].id;
  assert.equal(detail.body.posts[0].canEdit, true);

  const edited = await api('PATCH', `/posts/${postId}`, { cookie: ada.cookie, body: { body: 'Edited *text*' } });
  assert.equal(edited.status, 200);
  assert.equal(edited.body.post.html, '<p>Edited <em>text</em></p>');
  assert.ok(edited.body.post.editedAt);
  const { rows } = await pg.query<{ body_md: string }>(`SELECT body_md FROM post_revisions WHERE post_id = $1`, [postId]);
  assert.deepEqual(rows.map((r) => r.body_md), ['Hello there.']);

  assert.equal((await api('PATCH', `/posts/${postId}`, { cookie: bob.cookie, body: { body: 'Hijack' } })).status, 403);
  assert.equal((await api('PATCH', `/posts/${postId}`, { cookie: mod.cookie, body: { body: 'Moderated' } })).status, 200);
  const { rows: log } = await pg.query<{ action: string }>(`SELECT action FROM mod_log WHERE target_type = 'post' AND target_id = $1`, [postId]);
  assert.deepEqual(log.map((r) => r.action), ['post.edit']);

  const retitled = await api('PATCH', `/threads/${thread.id}`, { cookie: ada.cookie, body: { title: 'Better title' } });
  assert.equal(retitled.body.thread.title, 'Better title');
  assert.equal(retitled.body.thread.slug, 'better-title');
  assert.equal((await api('PATCH', `/threads/${thread.id}`, { cookie: bob.cookie, body: { title: 'Not yours' } })).status, 403);
  await pg.query(`UPDATE threads SET created_at = now() - interval '25 hours' WHERE id = $1`, [thread.id]);
  assert.equal((await api('PATCH', `/threads/${thread.id}`, { cookie: ada.cookie, body: { title: 'Too late now' } })).status, 403);
  assert.equal((await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { title: 'Moderator title' } })).status, 200);
});

void test('deleting: soft, and the opening post only while unanswered', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const thread = await newThread(ada.cookie);
  const reply = await api('POST', `/threads/${thread.id}/posts`, { cookie: bob.cookie, body: { body: 'Secret reply' } });
  const opening = (await api('GET', `/threads/${thread.id}`, { cookie: ada.cookie })).body.posts[0];
  assert.equal(opening.canDelete, false);
  const refused = await api('DELETE', `/posts/${opening.id}`, { cookie: ada.cookie });
  assert.equal(refused.status, 403);
  assert.equal((await api('DELETE', `/posts/${reply.body.post.id}`, { cookie: ada.cookie })).status, 403, 'not your post');
  assert.equal((await api('DELETE', `/posts/${reply.body.post.id}`, { cookie: bob.cookie })).status, 200);
  const after1 = await api('GET', `/threads/${thread.id}`);
  assert.equal(after1.body.posts[1].html, '<p>[deleted]</p>');
  assert.equal(after1.body.thread.replyCount, 0);
  const { rows } = await pg.query<{ body_md: string; deleted: boolean }>(`SELECT body_md, deleted_at IS NOT NULL AS deleted FROM posts WHERE id = $1`, [reply.body.post.id]);
  assert.deepEqual(rows[0], { body_md: '[deleted]', deleted: true });

  // With its only reply deleted, the opening post can go, and the thread with it.
  assert.equal((await api('DELETE', `/posts/${opening.id}`, { cookie: ada.cookie })).status, 200);
  assert.equal((await api('GET', `/threads/${thread.id}`)).status, 404);
});

void test('honeypot: pretend success, store nothing', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const before = await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM threads`);
  const res = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'general', title: 'Buy cheap things', body: 'spam', language: 'en', website: 'http://spam.example' } });
  assert.equal(res.status, 201);
  assert.equal(res.body.thread.title, 'Buy cheap things');
  const afterCount = await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM threads`);
  assert.equal(afterCount.rows[0].n, before.rows[0].n);

  const thread = await newThread(ada.cookie);
  const posts = await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM posts`);
  const reply = await api('POST', `/threads/${thread.id}/posts`, { cookie: ada.cookie, body: { body: 'spam', website: 'x' } });
  assert.equal(reply.status, 201);
  assert.equal((await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM posts`)).rows[0].n, posts.rows[0].n);
});

void test('rate limits: five threads an hour', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  for (let i = 0; i < 5; i++) await newThread(ada.cookie, { title: `Rate limited ${i}` });
  const sixth = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'general', title: 'One too many', body: 'x', language: 'en' } });
  assert.equal(sixth.status, 429);
  assert.equal(sixth.body.error.code, 'rate_limited');
});

void test('review queue: a new member’s first two posts with links wait; trusted members never do', async () => {
  await resetRates(pg);
  const newbie = await member(pg);
  const reader = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const trusted = await member(pg, { role: 'trusted' });
  const plain = await newThread(newbie.cookie, { title: 'No links here' });
  assert.equal((await api('GET', `/threads/${plain.id}`)).status, 200, 'posts without links go straight up');

  const linked = await api('POST', `/threads/${plain.id}/posts`, { cookie: newbie.cookie, body: { body: 'See https://example.com' } });
  assert.equal(linked.status, 201);
  assert.equal(linked.body.post.pending, true);
  assert.equal((await api('GET', `/threads/${plain.id}`, { cookie: reader.cookie })).body.posts.length, 1, 'others do not see it');
  assert.equal((await api('GET', `/threads/${plain.id}`, { cookie: newbie.cookie })).body.posts.length, 2, 'the author does');
  assert.equal((await api('GET', `/threads/${plain.id}`)).body.thread.replyCount, 0);

  const queue = await api('GET', '/mod/queue', { cookie: mod.cookie });
  assert.equal(queue.status, 200);
  assert.deepEqual(queue.body.posts.map((q: { post: { id: number } }) => q.post.id), [linked.body.post.id]);
  assert.equal((await api('GET', '/mod/queue', { cookie: reader.cookie })).status, 403);

  // A whole thread whose opening post links somewhere waits too.
  const pendingThread = await newThread(newbie.cookie, { title: 'Look at my link', body: '[site](https://example.com)' });
  assert.equal((await api('GET', `/threads/${pendingThread.id}`)).status, 404);
  assert.equal((await api('GET', `/threads/${pendingThread.id}`, { cookie: newbie.cookie })).status, 200);
  assert.ok(!(await api('GET', '/threads?category=general')).body.threads.some((t: { id: number }) => t.id === pendingThread.id));

  const approved = await api('POST', `/posts/${linked.body.post.id}/approve`, { cookie: mod.cookie });
  assert.equal(approved.body.post.pending, false);
  assert.equal((await api('GET', `/threads/${plain.id}`)).body.thread.replyCount, 1);
  const opening = (await api('GET', `/threads/${pendingThread.id}`, { cookie: mod.cookie })).body.posts[0];
  await api('POST', `/posts/${opening.id}/approve`, { cookie: mod.cookie });
  assert.equal((await api('GET', `/threads/${pendingThread.id}`)).status, 200);
  const { rows } = await pg.query<{ action: string }>(`SELECT action FROM mod_log WHERE action = 'post.approve'`);
  assert.equal(rows.length, 2);

  // Two approved posts with links: the third goes straight up.
  const third = await api('POST', `/threads/${plain.id}/posts`, { cookie: newbie.cookie, body: { body: 'Another https://example.org' } });
  assert.equal(third.body.post.pending, false);
  const trustedPost = await api('POST', `/threads/${plain.id}/posts`, { cookie: trusted.cookie, body: { body: 'https://example.net' } });
  assert.equal(trustedPost.body.post.pending, false);
});

void test('solutions: only the asker or a moderator, only in help, accessibility and bugs', async () => {
  await resetRates(pg);
  const asker = await member(pg);
  const helper = await member(pg);
  const stranger = await member(pg);
  const thread = await newThread(asker.cookie, { categorySlug: 'help', title: 'How do I restore?' });
  const answer = await api('POST', `/threads/${thread.id}/posts`, { cookie: helper.cookie, body: { body: 'Shop, then Restore purchases.' } });
  const postId = answer.body.post.id;
  assert.equal((await api('POST', `/threads/${thread.id}/solve`, { cookie: stranger.cookie, body: { postId } })).status, 403);
  const solved = await api('POST', `/threads/${thread.id}/solve`, { cookie: asker.cookie, body: { postId } });
  assert.equal(solved.status, 200);
  assert.equal(solved.body.thread.solved, true);
  const detail = await api('GET', `/threads/${thread.id}`);
  assert.equal(detail.body.solvedPostNumber, 2);
  assert.equal(detail.body.posts[1].isSolution, true);
  const notes = await notificationsFor(pg, helper.id);
  assert.ok(notes.some((n) => n.kind === 'solved' && n.post_id === postId));
  const opening = detail.body.posts[0].id;
  assert.equal((await api('POST', `/threads/${thread.id}/solve`, { cookie: asker.cookie, body: { postId: opening } })).status, 400, 'the question is not its own answer');
  const unsolved = await api('POST', `/threads/${thread.id}/solve`, { cookie: asker.cookie, body: { postId: null } });
  assert.equal(unsolved.body.thread.solved, false);

  const general = await newThread(asker.cookie, { categorySlug: 'general', title: 'Chat thread' });
  const r = await api('POST', `/threads/${general.id}/posts`, { cookie: helper.cookie, body: { body: 'reply' } });
  assert.equal((await api('POST', `/threads/${general.id}/solve`, { cookie: asker.cookie, body: { postId: r.body.post.id } })).status, 400);
  assert.equal((await api('GET', `/threads/${general.id}`, { cookie: asker.cookie })).body.canSolve, false);
});

void test('votes: ideas only, one per member, never your own', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const fan = await member(pg);
  const idea = await newThread(author.cookie, { categorySlug: 'ideas', title: 'No-graphics mode' });
  const v1 = await api('POST', `/threads/${idea.id}/vote`, { cookie: fan.cookie, body: { on: true } });
  assert.deepEqual(v1.body, { voteCount: 1, voted: true });
  const v2 = await api('POST', `/threads/${idea.id}/vote`, { cookie: fan.cookie, body: { on: true } });
  assert.deepEqual(v2.body, { voteCount: 1, voted: true }, 'voting twice counts once');
  assert.equal((await api('POST', `/threads/${idea.id}/vote`, { cookie: author.cookie, body: { on: true } })).status, 403);
  const off = await api('POST', `/threads/${idea.id}/vote`, { cookie: fan.cookie, body: { on: false } });
  assert.deepEqual(off.body, { voteCount: 0, voted: false });
  const general = await newThread(author.cookie, { categorySlug: 'general', title: 'Not an idea' });
  assert.equal((await api('POST', `/threads/${general.id}/vote`, { cookie: fan.cookie, body: { on: true } })).status, 400);
});

void test('status changes: moderators only, the right set per category, and a notification', async () => {
  await resetRates(pg);
  const reporter = await member(pg);
  const mod = await member(pg, { role: 'team' });
  const bug = { device: 'iPad', osVersion: '27', appVersion: '5.0', assistive: [], steps: 'Tap the level.', expected: 'Opens', actual: 'Crashes' };
  const thread = await newThread(reporter.cookie, { categorySlug: 'bugs', title: 'Crash on level 40', bug });
  assert.equal((await api('PATCH', `/threads/${thread.id}`, { cookie: reporter.cookie, body: { status: 'fixed' } })).status, 403);
  assert.equal((await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { status: 'planned' } })).status, 400, 'an idea status on a bug');
  const fixed = await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { status: 'fixed', statusNote: 'Fixed in 5.1' } });
  assert.equal(fixed.body.thread.status, 'fixed');
  assert.equal(fixed.body.thread.statusNote, 'Fixed in 5.1');
  const notes = (await notificationsFor(pg, reporter.id)).filter((n) => n.kind === 'status');
  assert.equal(notes.length, 1);
  assert.deepEqual(notes[0].data, { status: 'fixed', statusNote: 'Fixed in 5.1', previous: 'new' });
  const { rows } = await pg.query<{ action: string }>(`SELECT action FROM mod_log WHERE target_type = 'thread' AND target_id = $1`, [thread.id]);
  assert.deepEqual(rows.map((r) => r.action), ['thread.status']);
  assert.equal((await api('GET', `/threads/${thread.id}`, { cookie: mod.cookie })).body.canSetStatus, true);

  const moved = await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { categorySlug: 'ideas' } });
  assert.equal(moved.body.thread.category.slug, 'ideas');
  assert.equal(moved.body.thread.status, 'open', 'moving resets the status to the new category’s first');
});

void test('notifications: reply, mention, watched, de-duplicated, never to yourself or the banned', async () => {
  await resetRates(pg);
  const author = await member(pg, { name: 'Thread Author' });
  const quoted = await member(pg, { name: 'Quoted Person' });
  const named = await member(pg, { name: 'Named Person' });
  const watcher = await member(pg, { name: 'Category Watcher' });
  const muter = await member(pg, { name: 'Muter Person' });
  const banned = await member(pg, { name: 'Banned Person' });
  const replier = await member(pg, { name: 'Replier Person' });

  await api('POST', '/categories/accessibility/follow', { cookie: watcher.cookie, body: { level: 'watch' } });
  await api('POST', '/categories/accessibility/follow', { cookie: muter.cookie, body: { level: 'watch' } });
  const cats = await api('GET', '/categories', { cookie: watcher.cookie });
  assert.equal(cats.body.categories.find((c: { slug: string }) => c.slug === 'accessibility').following, 'watch');
  assert.equal(cats.body.categories.find((c: { slug: string }) => c.slug === 'general').following, 'none');

  const thread = await newThread(author.cookie, { categorySlug: 'accessibility', title: 'VoiceOver order on Home', body: 'Hello @Banned Person' });
  // Category watchers hear about the new thread; the author does not hear about their own post.
  assert.equal((await notificationsFor(pg, watcher.id)).filter((n) => n.kind === 'watched').length, 1);
  // (Their first post earns the first_post badge, which is a notification of its own.)
  assert.equal((await notificationsFor(pg, author.id)).filter((n) => n.kind !== 'badge').length, 0);

  await api('POST', `/threads/${thread.id}/follow`, { cookie: muter.cookie, body: { level: 'mute' } });
  await pg.query(`UPDATE members SET banned_until = now() + interval '1 day' WHERE id = $1`, [banned.id]);
  const q = await api('POST', `/threads/${thread.id}/posts`, { cookie: quoted.cookie, body: { body: 'First reply' } });
  await api('POST', `/threads/${thread.id}/follow`, { cookie: named.cookie, body: { level: 'watch' } });

  const r = await api('POST', `/threads/${thread.id}/posts`, {
    cookie: replier.cookie,
    body: { body: '@Thread Author and @Named Person and @Banned Person and @Replier Person', replyTo: q.body.post.number },
  });
  const postId = r.body.post.id;
  const forPost = async (id: number) => (await notificationsFor(pg, id)).filter((n) => n.post_id === postId);
  assert.deepEqual((await forPost(author.id)).map((n) => n.kind), ['reply'], 'replied to and mentioned: one notification');
  assert.deepEqual((await forPost(quoted.id)).map((n) => [n.kind, n.data]), [['reply', { replyTo: 2 }]]);
  assert.deepEqual((await forPost(named.id)).map((n) => n.kind), ['mention'], 'mentioned and watching: one notification');
  assert.deepEqual((await forPost(watcher.id)).map((n) => [n.kind, n.data]), [['watched', { via: 'category' }]]);
  assert.deepEqual(await forPost(muter.id), [], 'a muted thread overrides a watched category');
  assert.deepEqual(await forPost(banned.id), []);
  assert.deepEqual(await forPost(replier.id), []);

  // Muting a thread also silences replies to it for its author.
  await api('POST', `/threads/${thread.id}/follow`, { cookie: author.cookie, body: { level: 'mute' } });
  const r2 = await api('POST', `/threads/${thread.id}/posts`, { cookie: replier.cookie, body: { body: 'Another' } });
  assert.deepEqual((await notificationsFor(pg, author.id)).filter((n) => n.post_id === r2.body.post.id), []);
  const none = await api('POST', `/threads/${thread.id}/follow`, { cookie: author.cookie, body: { level: 'none' } });
  assert.equal(none.body.level, 'none');
  assert.equal((await api('GET', `/threads/${thread.id}`, { cookie: author.cookie })).body.following, 'none');
  assert.equal((await api('POST', `/threads/${thread.id}/follow`, { cookie: author.cookie, body: { level: 'loud' } })).status, 400);

  // An edit that adds a mention notifies only the newly named.
  const later = await member(pg, { name: 'Later Person' });
  await api('PATCH', `/posts/${postId}`, { cookie: replier.cookie, body: { body: '@Thread Author and @Named Person and @Later Person' } });
  assert.deepEqual((await forPost(later.id)).map((n) => n.kind), ['mention']);
  assert.equal((await forPost(named.id)).length, 1);
});

void test('views count once an hour per viewer', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const thread = await newThread(ada.cookie);
  await api('GET', `/threads/${thread.id}`, { cookie: ada.cookie });
  await api('GET', `/threads/${thread.id}`, { cookie: ada.cookie });
  await api('GET', `/threads/${thread.id}`, { headers: { 'x-nf-client-connection-ip': '192.0.2.1' } });
  await api('GET', `/threads/${thread.id}`, { headers: { 'x-nf-client-connection-ip': '192.0.2.1' } });
  const res = await api('GET', `/threads/${thread.id}`, { headers: { 'x-nf-client-connection-ip': '192.0.2.2' } });
  assert.equal(res.body.thread.viewCount, 3);
});

void test('preview renders without storing, and unknown routes are JSON 404s', async () => {
  const res = await api('POST', '/preview', { body: { body: '# Title\n\n<b>x</b>' } });
  assert.equal(res.status, 200);
  assert.equal(res.body.html, '<h3>Title</h3>\n<p>&lt;b&gt;x&lt;/b&gt;</p>');
  const missing = await api('GET', '/threads/999999');
  assert.equal(missing.status, 404);
  assert.equal(missing.body.error.code, 'not_found');
  assert.equal((await api('GET', '/threads/abc')).status, 404);
  assert.equal((await api('PUT', '/threads')).status, 405);
});
