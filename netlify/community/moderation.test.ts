// Reports, hiding, bans, roles and the moderation log, through the real function.

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

const log = async (action: string) => (await pg.query<{ actor_id: number; target_id: number; reason: string }>(`SELECT actor_id::int, target_id::int, reason FROM mod_log WHERE action = $1 ORDER BY id`, [action])).rows;

void test('report, queue, hide with a reason, and the author is told', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const reporter = await member(pg);
  const second = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const thread = await newThread(author.cookie);
  const reply = await api('POST', `/threads/${thread.id}/posts`, { cookie: author.cookie, body: { body: 'Something rude' } });
  const postId = reply.body.post.id;

  assert.equal((await api('POST', `/posts/${postId}/report`, { body: { reason: 'abuse' } })).status, 401);
  assert.equal((await api('POST', `/posts/${postId}/report`, { cookie: reporter.cookie, body: { reason: 'rude' } })).status, 400);
  assert.equal((await api('POST', `/posts/${postId}/report`, { cookie: reporter.cookie, body: { reason: 'abuse', note: 'Name-calling' } })).status, 200);
  assert.equal((await api('POST', `/posts/${postId}/report`, { cookie: reporter.cookie, body: { reason: 'spam' } })).status, 200, 'reporting twice is not an error');
  await api('POST', `/posts/${postId}/report`, { cookie: second.cookie, body: { reason: 'abuse' } });
  const { rows } = await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM reports WHERE post_id = $1`, [postId]);
  assert.equal(rows[0].n, 2, 'one report per reporter per post');

  assert.equal((await api('GET', '/mod/reports', { cookie: reporter.cookie })).status, 403);
  const reports = await api('GET', '/mod/reports', { cookie: mod.cookie });
  assert.equal(reports.status, 200);
  assert.equal(reports.body.reports.length, 2);
  assert.equal(reports.body.reports[0].reason, 'abuse');
  assert.equal(reports.body.reports[0].note, 'Name-calling');
  assert.equal(reports.body.reports[0].openReports, 2);
  assert.equal(reports.body.reports[0].post.id, postId);
  assert.ok(!JSON.stringify(reports.body).includes('@example.com'));

  assert.equal((await api('POST', `/mod/reports/${reports.body.reports[0].id}/resolve`, { cookie: mod.cookie, body: { action: 'hide' } })).status, 400, 'hiding needs a reason');
  const resolved = await api('POST', `/mod/reports/${reports.body.reports[0].id}/resolve`, { cookie: mod.cookie, body: { action: 'hide', note: 'Be kind' } });
  assert.equal(resolved.status, 200);
  assert.equal((await api('GET', '/mod/reports', { cookie: mod.cookie })).body.reports.length, 0, 'every report on the post is resolved');

  const publicView = await api('GET', `/threads/${thread.id}`, { cookie: reporter.cookie });
  assert.equal(publicView.body.posts.length, 1, 'hidden posts are for moderators and their author');
  assert.equal(publicView.body.thread.replyCount, 0);
  const authorView = await api('GET', `/threads/${thread.id}`, { cookie: author.cookie });
  assert.equal(authorView.body.posts[1].hidden, true);
  assert.equal(authorView.body.posts[1].hiddenReason, 'Be kind');
  const modView = await api('GET', `/threads/${thread.id}`, { cookie: mod.cookie });
  assert.equal(modView.body.posts.length, 2);
  assert.equal(modView.body.canModerate, true);

  const notes = (await notificationsFor(pg, author.id)).filter((n) => n.kind === 'moderation');
  assert.deepEqual(notes.map((n) => [n.post_id, n.data]), [[postId, { action: 'hidden', reason: 'Be kind' }]]);
  assert.equal((await log('post.hide')).length, 1);
  assert.equal((await log('report.hide')).length, 1);

  const shown = await api('POST', `/posts/${postId}/hide`, { cookie: mod.cookie, body: { hidden: false } });
  assert.equal(shown.body.post.hidden, false);
  assert.equal((await log('post.unhide')).length, 1);
  assert.equal((await api('POST', `/posts/${postId}/hide`, { cookie: reporter.cookie, body: { reason: 'nope' } })).status, 403);
  const hidden = await api('POST', `/posts/${postId}/hide`, { cookie: mod.cookie, body: { reason: 'Second time' } });
  assert.equal(hidden.body.post.hiddenReason, 'Second time');
});

void test('dismissing a report', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const reporter = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const thread = await newThread(author.cookie);
  const opening = (await api('GET', `/threads/${thread.id}`)).body.posts[0];
  await api('POST', `/posts/${opening.id}/report`, { cookie: reporter.cookie, body: { reason: 'off_topic' } });
  const [report] = (await api('GET', '/mod/reports', { cookie: mod.cookie })).body.reports;
  await api('POST', `/mod/reports/${report.id}/resolve`, { cookie: mod.cookie, body: { action: 'dismiss' } });
  const { rows } = await pg.query<{ resolution: string }>(`SELECT resolution FROM reports WHERE id = $1`, [report.id]);
  assert.equal(rows[0].resolution, 'dismissed');
  assert.equal((await api('GET', `/threads/${thread.id}`)).body.posts.length, 1);
});

void test('bans: moderators ban members, nobody bans an admin, and a banned member cannot post', async () => {
  await resetRates(pg);
  const troll = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const otherMod = await member(pg, { role: 'moderator' });
  const admin = await member(pg, { role: 'admin' });
  const plain = await member(pg);

  assert.equal((await api('POST', `/mod/members/${troll.id}/ban`, { cookie: plain.cookie, body: { days: 7, reason: 'Spam' } })).status, 403);
  assert.equal((await api('POST', `/mod/members/${admin.id}/ban`, { cookie: mod.cookie, body: { days: 7, reason: 'Spam' } })).status, 403);
  assert.equal((await api('POST', `/mod/members/${admin.id}/ban`, { cookie: admin.cookie, body: { days: 7, reason: 'Self' } })).status, 403);
  assert.equal((await api('POST', `/mod/members/${otherMod.id}/ban`, { cookie: mod.cookie, body: { days: 7, reason: 'Peer' } })).status, 403, 'a moderator cannot ban a moderator');
  assert.equal((await api('POST', `/mod/members/${troll.id}/ban`, { cookie: mod.cookie, body: { days: 'seven', reason: 'Spam' } })).status, 400);

  const banned = await api('POST', `/mod/members/${troll.id}/ban`, { cookie: mod.cookie, body: { days: 7, reason: 'Spam links' } });
  assert.equal(banned.status, 200);
  assert.equal(banned.body.member.banReason, 'Spam links');
  assert.ok(new Date(banned.body.member.bannedUntil).getTime() > Date.now() + 6 * 86400_000);
  assert.deepEqual((await log('member.ban')).map((r) => [r.actor_id, r.target_id, r.reason]), [[mod.id, troll.id, 'Spam links']]);

  const attempt = await api('POST', '/threads', { cookie: troll.cookie, body: { categorySlug: 'general', title: 'I am back', body: 'x', language: 'en' } });
  assert.equal(attempt.status, 403);

  const lifted = await api('POST', `/mod/members/${troll.id}/ban`, { cookie: admin.cookie, body: { days: 0, reason: '' } });
  assert.equal(lifted.body.member.bannedUntil, null);
  assert.equal((await log('member.unban')).length, 1);
  assert.equal((await api('POST', `/mod/members/${otherMod.id}/ban`, { cookie: admin.cookie, body: { days: 1, reason: 'Admin may' } })).status, 200);
});

void test('roles: admin only, logged', async () => {
  const admin = await member(pg, { role: 'admin' });
  const mod = await member(pg, { role: 'moderator' });
  const ada = await member(pg);
  assert.equal((await api('POST', `/mod/members/${ada.id}/role`, { cookie: mod.cookie, body: { role: 'trusted' } })).status, 403);
  assert.equal((await api('POST', `/mod/members/${ada.id}/role`, { cookie: admin.cookie, body: { role: 'emperor' } })).status, 400);
  assert.equal((await api('POST', `/mod/members/${admin.id}/role`, { cookie: admin.cookie, body: { role: 'member' } })).status, 403);
  const res = await api('POST', `/mod/members/${ada.id}/role`, { cookie: admin.cookie, body: { role: 'trusted' } });
  assert.equal(res.body.member.role, 'trusted');
  const entries = await pg.query<{ data: { from: string; to: string } }>(`SELECT data FROM mod_log WHERE action = 'member.role'`);
  assert.deepEqual(entries.rows[0].data, { from: 'member', to: 'trusted' });
});

void test('moderators hide and unhide whole threads, which then 404 for everyone else', async () => {
  await resetRates(pg);
  const author = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const thread = await newThread(author.cookie, { title: 'Hide this thread' });
  await api('PATCH', `/threads/${thread.id}`, { cookie: mod.cookie, body: { hidden: true } });
  assert.equal((await api('GET', `/threads/${thread.id}`)).status, 404);
  assert.equal((await api('GET', `/threads/${thread.id}`, { cookie: author.cookie })).status, 404);
  assert.equal((await api('GET', `/threads/${thread.id}`, { cookie: mod.cookie })).body.thread.hidden, true);
  assert.ok(!(await api('GET', '/threads')).body.threads.some((t: { id: number }) => t.id === thread.id));
  assert.equal((await log('thread.hide')).length, 1);
});

void test('member profiles never show an email, and deleted members are former members', async () => {
  await resetRates(pg);
  const ada = await member(pg, { name: 'Profile Person' });
  await pg.query(`UPDATE members SET bio = 'I sort bricks.' WHERE id = $1`, [ada.id]);
  const thread = await newThread(ada.cookie, { categorySlug: 'help', title: 'Profile thread' });
  const helper = await member(pg);
  const reply = await api('POST', `/threads/${thread.id}/posts`, { cookie: helper.cookie, body: { body: 'Answer' } });
  await api('POST', `/threads/${thread.id}/solve`, { cookie: ada.cookie, body: { postId: reply.body.post.id } });

  const profile = await api('GET', `/members/${ada.id}`);
  assert.equal(profile.status, 200);
  assert.equal(profile.body.member.displayName, 'Profile Person');
  assert.equal(profile.body.member.bio, 'I sort bricks.');
  assert.equal(profile.body.member.postCount, 1);
  assert.equal(profile.body.recentThreads[0].id, thread.id);
  assert.ok(!JSON.stringify(profile.body).includes('@'), 'no email');
  assert.equal((await api('GET', `/members/${helper.id}`)).body.member.solvedCount, 1);

  await pg.query(`UPDATE members SET deleted_at = now() WHERE id = $1`, [ada.id]);
  const gone = await api('GET', `/members/${ada.id}`);
  assert.equal(gone.body.member.displayName, 'Former member');
  assert.equal(gone.body.member.bio, '');
  assert.deepEqual(gone.body.recentThreads, []);
  const detail = await api('GET', `/threads/${thread.id}`);
  assert.equal(detail.body.thread.author.displayName, 'Former member');
  assert.equal(detail.body.posts[0].author.displayName, 'Former member');
  assert.equal((await api('GET', '/members/999999')).status, 404);
});
