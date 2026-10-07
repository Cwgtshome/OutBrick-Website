// The feature board: statuses, voter notices, trending and hot, the roadmap, similar titles,
// shipped versions, combineVotes and the release bot's shipped links.

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import { api, member, newThread, notificationsFor, resetRates } from './test/forum-helpers.ts';
import { combineVotes, noteMentionsVersion } from './ideas.ts';
import { runReleaseBot } from './releases.ts';
import { transaction } from './db.ts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

const idea = (cookie: string, title: string) => newThread(cookie, { categorySlug: 'ideas', title, body: 'Please.' });
const vote = (cookie: string, id: number, on = true) => api('POST', `/threads/${id}/vote`, { cookie, body: { on } });
const setStatus = (cookie: string, id: number, body: Record<string, unknown>) => api('PATCH', `/threads/${id}`, { cookie, body });

void test('ideas take in_progress; voters, the author and never the actor hear about a status change', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const fan = await member(pg);
  const muted = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const t = await idea(author.cookie, 'A no-graphics mode');
  await vote(fan.cookie, t.id);
  await vote(muted.cookie, t.id);
  await vote(mod.cookie, t.id);
  await api('POST', `/threads/${t.id}/follow`, { cookie: muted.cookie, body: { level: 'mute' } });

  const res = await setStatus(mod.cookie, t.id, { status: 'in_progress', statusNote: 'Being built' });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.equal(res.body.thread.status, 'in_progress');
  const fanNotes = (await notificationsFor(pg, fan.id)).filter((n) => n.kind === 'status');
  assert.deepEqual(fanNotes.map((n) => n.data), [{ status: 'in_progress', statusNote: 'Being built', previous: 'open', as: 'voter' }]);
  const authorNotes = (await notificationsFor(pg, author.id)).filter((n) => n.kind === 'status');
  assert.deepEqual(authorNotes.map((n) => n.data), [{ status: 'in_progress', statusNote: 'Being built', previous: 'open' }]);
  assert.equal((await notificationsFor(pg, mod.id)).filter((n) => n.kind === 'status').length, 0, 'never the actor');
  assert.equal((await notificationsFor(pg, muted.id)).filter((n) => n.kind === 'status').length, 0, 'a muted thread stays quiet');

  const list = await api('GET', '/threads?category=ideas&status=in_progress');
  assert.deepEqual(list.body.threads.map((x: { id: number }) => x.id), [t.id]);
  const { rows } = await pg.query<{ at: Date | null }>(`SELECT status_changed_at AS at FROM threads WHERE id = $1`, [t.id]);
  assert.ok(rows[0].at, 'status_changed_at is recorded');
  assert.equal((await setStatus(mod.cookie, t.id, { status: 'fixed' })).status, 400, 'a bug status on an idea');
});

void test('shippedVersion: moderators only, ideas only, a real version', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const t = await idea(author.cookie, 'Shipped version idea');
  assert.equal((await setStatus(author.cookie, t.id, { shippedVersion: '5.1' })).status, 403);
  assert.equal((await setStatus(mod.cookie, t.id, { shippedVersion: '5.1; DROP' })).status, 400);
  const ok = await setStatus(mod.cookie, t.id, { shippedVersion: 'v5.1' });
  assert.equal(ok.body.thread.shippedVersion, '5.1');
  const cleared = await setStatus(mod.cookie, t.id, { shippedVersion: null });
  assert.equal(cleared.body.thread.shippedVersion, null);
  const general = await newThread(author.cookie, { categorySlug: 'general', title: 'Not an idea at all' });
  assert.equal((await setStatus(mod.cookie, general.id, { shippedVersion: '5.1' })).status, 400);
});

void test('trending weighs this week’s votes by recency; top counts all of them', async () => {
  await resetRates(pg);
  await pg.query(`DELETE FROM votes`);
  const author = await member(pg);
  const old = await idea(author.cookie, 'Old favourite idea');
  const fresh = await idea(author.cookie, 'Fresh idea this week');
  const voters = await Promise.all([1, 2, 3, 4].map(() => member(pg)));
  for (const v of voters) await vote(v.cookie, old.id);
  for (const v of voters.slice(0, 2)) await vote(v.cookie, fresh.id);
  await pg.query(`UPDATE votes SET created_at = now() - interval '10 days' WHERE thread_id = $1`, [old.id]);
  const top = await api('GET', '/threads?category=ideas&sort=top');
  assert.ok(top.body.threads.findIndex((x: { id: number }) => x.id === old.id) < top.body.threads.findIndex((x: { id: number }) => x.id === fresh.id));
  const trending = await api('GET', '/threads?category=ideas&sort=trending');
  assert.equal(trending.body.threads[0].id, fresh.id);
  // Recency: one vote today beats two from six days ago.
  await resetRates(pg);
  const a = await idea(author.cookie, 'Six days ago idea');
  const b = await idea(author.cookie, 'Today idea here');
  await vote(voters[0].cookie, a.id);
  await vote(voters[1].cookie, a.id);
  await vote(voters[2].cookie, b.id);
  await pg.query(`UPDATE votes SET created_at = now() - interval '6 days' WHERE thread_id = $1`, [a.id]);
  await pg.query(`UPDATE votes SET created_at = now() - interval '10 days' WHERE thread_id = $1`, [fresh.id]);
  const again = await api('GET', '/threads?category=ideas&sort=trending');
  assert.equal(again.body.threads[0].id, b.id);
});

void test('hot lists threads with replies or reactions this week, most active first', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const other = await member(pg);
  const quiet = await newThread(author.cookie, { title: 'Quiet hot thread' });
  const busy = await newThread(author.cookie, { title: 'Busy hot thread' });
  const stale = await newThread(author.cookie, { title: 'Stale hot thread' });
  for (const t of [quiet, busy, busy, busy, stale]) await api('POST', `/threads/${t.id}/posts`, { cookie: other.cookie, body: { body: 'Reply!' } });
  await pg.query(`UPDATE posts SET created_at = now() - interval '9 days' WHERE thread_id = $1`, [stale.id]);
  const hot = await api('GET', '/threads?sort=hot');
  const ids = hot.body.threads.map((x: { id: number }) => x.id);
  assert.ok(ids.indexOf(busy.id) < ids.indexOf(quiet.id));
  assert.ok(!ids.includes(stale.id), 'nothing this week, not hot');
});

void test('the roadmap groups ideas by status, with votes, the viewer’s vote and recent shipping only', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const fan = await member(pg);
  const mod = await member(pg, { role: 'team' });
  const considering = await idea(author.cookie, 'Roadmap considering');
  const planned = await idea(author.cookie, 'Roadmap planned');
  const progress = await idea(author.cookie, 'Roadmap in progress');
  const shipped = await idea(author.cookie, 'Roadmap shipped');
  await resetRates(pg);
  const oldShipped = await idea(author.cookie, 'Roadmap shipped long ago');
  const hidden = await idea(author.cookie, 'Roadmap hidden idea');
  await setStatus(mod.cookie, considering.id, { status: 'considering' });
  await setStatus(mod.cookie, planned.id, { status: 'planned' });
  await setStatus(mod.cookie, progress.id, { status: 'in_progress' });
  await setStatus(mod.cookie, shipped.id, { status: 'shipped', shippedVersion: '5.2' });
  await setStatus(mod.cookie, oldShipped.id, { status: 'shipped' });
  await setStatus(mod.cookie, hidden.id, { status: 'planned', hidden: true });
  await pg.query(`UPDATE threads SET status_changed_at = now() - interval '120 days' WHERE id = $1`, [oldShipped.id]);
  await vote(fan.cookie, planned.id);

  const res = await api('GET', '/roadmap', { cookie: fan.cookie });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body.columns.map((c: { status: string }) => c.status), ['considering', 'planned', 'in_progress', 'shipped']);
  const col = (s: string) => res.body.columns.find((c: { status: string }) => c.status === s);
  assert.ok(col('considering').threads.some((x: { id: number }) => x.id === considering.id));
  const p = col('planned').threads.find((x: { id: number }) => x.id === planned.id);
  assert.equal(p.voteCount, 1);
  assert.equal(p.voted, true);
  assert.ok(!col('planned').threads.some((x: { id: number }) => x.id === hidden.id), 'hidden ideas stay off the roadmap');
  assert.ok(col('in_progress').threads.some((x: { id: number }) => x.id === progress.id));
  const s = col('shipped').threads;
  assert.equal(s.find((x: { id: number }) => x.id === shipped.id).shippedVersion, '5.2');
  assert.ok(!s.some((x: { id: number }) => x.id === oldShipped.id), 'only the last 90 days');
  const anon = await api('GET', '/roadmap?locale=fr');
  assert.equal(anon.body.columns.find((c: { status: string }) => c.status === 'planned').threads[0].voted, undefined);
});

void test('similar titles: trigram or full text, visible threads only, at most five', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const a = await idea(author.cookie, 'Add a dark mode for the board');
  await idea(author.cookie, 'Completely unrelated suggestion');
  const h = await idea(author.cookie, 'Dark mode for the board please');
  await setStatus(mod.cookie, h.id, { hidden: true });
  const res = await api('GET', `/threads/similar?title=${encodeURIComponent('dark mode on the board')}&category=ideas`);
  assert.equal(res.status, 200);
  const ids = res.body.threads.map((x: { id: number }) => x.id);
  assert.ok(ids.includes(a.id));
  assert.ok(!ids.includes(h.id), 'hidden threads are not suggested');
  assert.ok(ids.length <= 5);
  assert.deepEqual((await api('GET', '/threads/similar?title=ab')).body.threads, []);
  assert.deepEqual((await api('GET', `/threads/similar?title=${encodeURIComponent('dark mode on the board')}&category=bugs`)).body.threads, []);
});

void test('combineVotes moves one vote per member and never to the target’s author', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const dupAuthor = await member(pg);
  const both = await member(pg);
  const onlyDup = await member(pg);
  const target = await idea(author.cookie, 'Merge target idea');
  const dup = await idea(dupAuthor.cookie, 'Merge duplicate idea');
  await vote(both.cookie, target.id);
  await vote(both.cookie, dup.id);
  await vote(onlyDup.cookie, dup.id);
  await vote(author.cookie, dup.id); // the target's author voted for the duplicate
  const result = await transaction((q) => combineVotes(dup.id, target.id, q));
  assert.deepEqual(result, { moved: 1, voteCount: 2 });
  const { rows } = await pg.query<{ thread_id: number; n: number }>(`SELECT thread_id::int, count(*)::int AS n FROM votes WHERE thread_id IN ($1, $2) GROUP BY 1`, [dup.id, target.id]);
  assert.deepEqual(rows, [{ thread_id: target.id, n: 2 }]);
  const counts = await pg.query<{ id: number; vote_count: number }>(`SELECT id::int, vote_count FROM threads WHERE id IN ($1, $2) ORDER BY id`, [target.id, dup.id]);
  assert.deepEqual(counts.rows.map((r) => r.vote_count), [2, 0]);
  assert.deepEqual(await transaction((q) => combineVotes(target.id, target.id, q)), { moved: 0, voteCount: 2 });
});

void test('a status note names a whole version', () => {
  assert.ok(noteMentionsVersion('Shipped in 5.1', '5.1'));
  assert.ok(noteMentionsVersion('Shipped in v5.1!', '5.1'));
  assert.ok(noteMentionsVersion('5.1', '5.1'));
  assert.ok(!noteMentionsVersion('Shipped in 5.10', '5.1'));
  assert.ok(!noteMentionsVersion('Shipped in 5.1.2', '5.1'));
  assert.ok(!noteMentionsVersion('Shipped in 15.1', '5.1'));
  assert.ok(!noteMentionsVersion(null, '5.1'));
});

function fakeLookup(version: string) {
  return async (): Promise<Response> =>
    Response.json({ resultCount: 1, results: [{ trackId: 6807997465, version, releaseNotes: 'Notes', trackViewUrl: 'https://apps.apple.com/us/app/outbrick/id6807997465' }] });
}

void test('the release bot links the announcement into ideas it shipped and tells their voters', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const fan = await member(pg);
  const mod = await member(pg, { role: 'team' });
  const byNote = await idea(author.cookie, 'Shipped by note idea');
  const byVersion = await idea(author.cookie, 'Shipped by version idea');
  const other = await idea(author.cookie, 'Shipped in another version');
  await vote(fan.cookie, byNote.id);
  await vote(fan.cookie, byVersion.id);
  await setStatus(mod.cookie, byNote.id, { status: 'shipped', statusNote: 'Shipped in 7.3' });
  await setStatus(mod.cookie, byVersion.id, { status: 'planned', shippedVersion: '7.3' });
  await setStatus(mod.cookie, other.id, { status: 'shipped', statusNote: 'Shipped in 7.30' });

  await pg.query(`DELETE FROM app_releases`);
  assert.equal((await runReleaseBot(fakeLookup('7.2'))).action, 'record');
  const result = await runReleaseBot(fakeLookup('7.3'));
  assert.equal(result.action, 'post');
  assert.deepEqual(result.shippedIdeas, [byNote.id, byVersion.id]);

  for (const t of [byNote, byVersion]) {
    const detail = await api('GET', `/threads/${t.id}`);
    const last = detail.body.posts.at(-1);
    assert.equal(last.author.displayName, 'OutBrick');
    assert.match(last.html, /Shipped in OutBrick 7\.3/);
    assert.match(last.html, new RegExp(`href="/community/t/${result.threadId}/outbrick-7-3-is-out"`));
    assert.equal(detail.body.thread.status, 'shipped');
    assert.equal(detail.body.thread.shippedVersion, '7.3');
  }
  assert.equal((await api('GET', `/threads/${other.id}`)).body.posts.length, 1, '7.30 is not 7.3');
  const fanReleases = (await notificationsFor(pg, fan.id)).filter((n) => n.kind === 'release' && n.data.ideaId);
  assert.deepEqual(fanReleases.map((n) => n.data).sort((x, y) => x.ideaId - y.ideaId), [
    { version: '7.3', ideaId: byNote.id },
    { version: '7.3', ideaId: byVersion.id },
  ]);
  assert.ok(fanReleases.every((n) => n.post_id != null), 'the notice points at the shipped reply');
  assert.equal((await notificationsFor(pg, author.id)).filter((n) => n.kind === 'release' && n.data.ideaId).length, 2, 'the author hears too');
  const badges = await pg.query<{ badge: string }>(`SELECT badge FROM member_badges WHERE member_id = $1 ORDER BY badge`, [author.id]);
  assert.ok(badges.rows.some((r) => r.badge === 'shipped'));
});
