// Search (Latin and Japanese) and the FAQ (seed, fallback, team edits, promotion).

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import { api, member, newThread, resetRates } from './test/forum-helpers.ts';
import { excerpt, queryTerms, tsQuery } from './search.ts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

void test('excerpts escape first, then mark', () => {
  assert.equal(excerpt('Use <b>undo</b> & more', ['undo']), 'Use &lt;b&gt;<mark>undo</mark>&lt;/b&gt; &amp; more');
  assert.equal(excerpt('a mark-up <mark>test</mark>', ['mark']), 'a <mark>mark</mark>-up &lt;<mark>mark</mark>&gt;test&lt;/<mark>mark</mark>&gt;');
  assert.equal(excerpt('amp &amp; amp', ['amp']), '<mark>amp</mark> &amp;<mark>amp</mark>; <mark>amp</mark>');
  const long = `${'word '.repeat(100)}needle ${'tail '.repeat(100)}`;
  const e = excerpt(long, ['needle']);
  assert.ok(e.startsWith('…') && e.endsWith('…'));
  assert.ok(e.includes('<mark>needle</mark>'));
  assert.ok(e.length < 260);
  assert.equal(excerpt('ライフは三十分ごとに戻ります', ['三十分']), 'ライフは<mark>三十分</mark>ごとに戻ります');
  assert.deepEqual(queryTerms('  "undo," free?  '), ['undo', 'free']);
  assert.equal(tsQuery(["it's", 'a|b', '(x)']), "'its':* & 'ab':* & 'x':*");
  assert.equal(tsQuery(['&|!']), '');
});

void test('search finds titles, replies and the FAQ, ranked, without hidden, pending or deleted content', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const bob = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const titled = await newThread(ada.cookie, { categorySlug: 'help', title: 'Restoring a purchase on a new iPhone', body: 'I changed phones.' });
  const other = await newThread(ada.cookie, { categorySlug: 'general', title: 'Favourite boards', body: 'Mine is the one where restoring order feels good.' });
  const reply = await api('POST', `/threads/${other.id}/posts`, { cookie: bob.cookie, body: { body: 'Restoring <b>calm</b> is the point.' } });
  const hiddenReply = await api('POST', `/threads/${other.id}/posts`, { cookie: bob.cookie, body: { body: 'restoring secret hidden text' } });
  await api('POST', `/posts/${hiddenReply.body.post.id}/hide`, { cookie: mod.cookie, body: { reason: 'Test' } });
  const deleted = await api('POST', `/threads/${other.id}/posts`, { cookie: bob.cookie, body: { body: 'restoring deleted words' } });
  await api('DELETE', `/posts/${deleted.body.post.id}`, { cookie: bob.cookie });
  const newbie = await member(pg);
  await api('POST', `/threads/${other.id}/posts`, { cookie: newbie.cookie, body: { body: 'restoring https://spam.example pending' } });

  const res = await api('GET', '/search?q=restoring');
  assert.equal(res.status, 200);
  const hits = res.body.hits as { type: string; threadId: number; postNumber: number | null; excerptHtml: string; title: string }[];
  assert.equal(hits[0].type, 'thread');
  assert.equal(hits[0].threadId, titled.id, 'a title match ranks first');
  assert.ok(hits.some((h) => h.type === 'thread' && h.threadId === other.id), 'an opening post match is a thread hit');
  const replyHit = hits.find((h) => h.type === 'post');
  assert.equal(replyHit?.postNumber, reply.body.post.number);
  assert.equal(replyHit?.excerptHtml, '<mark>Restoring</mark> &lt;b&gt;calm&lt;/b&gt; is the point.');
  for (const h of hits) assert.ok(!/secret|deleted words|spam\.example/.test(h.excerptHtml), `leaked: ${h.excerptHtml}`);
  assert.ok(hits.every((h) => !h.excerptHtml.includes('<b>')));

  // Prefix matching, typo-tolerant titles, filters, and the FAQ.
  assert.ok((await api('GET', '/search?q=restor')).body.total >= 3);
  assert.equal((await api('GET', '/search?q=purchse')).body.hits[0]?.threadId, titled.id, 'a typo still finds the title');
  const faq = await api('GET', '/search?q=undo');
  assert.ok(faq.body.hits.some((h: { type: string; title: string }) => h.type === 'faq' && h.title === 'Is the first undo on a board really free?'));
  const scoped = await api('GET', '/search?q=restoring&category=help');
  assert.deepEqual(scoped.body.hits.map((h: { threadId: number }) => h.threadId), [titled.id]);
  const french = await api('GET', '/search?q=annulation&language=fr');
  assert.ok(french.body.hits.length > 0 && french.body.hits.every((h: { language: string }) => h.language === 'fr'));
  assert.deepEqual((await api('GET', '/search?q=')).body, { query: '', hits: [], page: 1, pages: 1, total: 0 });
  assert.equal((await api('GET', '/search?q=%26%7C!')).body.total, 0);

  // Solved threads rank above unsolved ones with the same kind of match.
  const solvedThread = await newThread(bob.cookie, { categorySlug: 'help', title: 'Restoring progress after reinstalling' });
  const answer = await api('POST', `/threads/${solvedThread.id}/posts`, { cookie: ada.cookie, body: { body: 'Sign in to iCloud.' } });
  await api('POST', `/threads/${solvedThread.id}/solve`, { cookie: bob.cookie, body: { postId: answer.body.post.id } });
  const ranked = await api('GET', '/search?q=restoring');
  assert.equal(ranked.body.hits[0].threadId, solvedThread.id);
  assert.equal(ranked.body.hits[0].solved, true);
});

void test('Japanese search matches by substring', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const thread = await newThread(ada.cookie, { categorySlug: 'help', title: 'ライフの回復について', body: 'ライフは何分ごとに回復しますか？', language: 'ja' });
  const res = await api('GET', `/search?q=${encodeURIComponent('回復')}`);
  assert.ok(res.body.hits.some((h: { threadId: number; excerptHtml: string }) => h.threadId === thread.id && h.excerptHtml.includes('<mark>回復</mark>')));
  const faq = await api('GET', `/search?q=${encodeURIComponent('ライフ')}&language=ja`);
  assert.ok(faq.body.hits.some((h: { type: string }) => h.type === 'faq'), 'the Japanese FAQ is searchable');
  const none = await api('GET', `/search?q=${encodeURIComponent('存在しない言葉')}`);
  assert.equal(none.body.total, 0);
});

void test('search is rate limited per IP', async () => {
  await resetRates(pg);
  const headers = { 'x-nf-client-connection-ip': '198.51.100.7' };
  for (let i = 0; i < 60; i++) assert.equal((await api('GET', '/search?q=board', { headers })).status, 200);
  const limited = await api('GET', '/search?q=board', { headers });
  assert.equal(limited.status, 429);
  assert.equal((await api('GET', '/search?q=board', { headers: { 'x-nf-client-connection-ip': '198.51.100.8' } })).status, 200);
});

void test('the FAQ is seeded from the support page in six languages', async () => {
  const en = await api('GET', '/faq?locale=en');
  assert.equal(en.status, 200);
  assert.equal(en.body.entries.length, 11);
  assert.equal(en.body.entries[0].question, 'Is the first undo on a board really free?');
  assert.match(en.body.entries[0].answerHtml, /^<p>Yes\. The first undo/);
  assert.equal(en.body.entries[10].question, 'How do I contact OutBrick support?');
  const ja = await api('GET', '/faq?locale=ja');
  assert.equal(ja.body.entries.length, 11);
  assert.equal(ja.body.entries[0].locale, 'ja');
  assert.notEqual(ja.body.entries[0].question, en.body.entries[0].question);
  assert.equal((await api('GET', '/faq?locale=xx')).body.entries[0].locale, 'en');
});

void test('a locale with no entries falls back to English; the team edits and promotes', async () => {
  await resetRates(pg);
  const team = await member(pg, { role: 'team' });
  const ada = await member(pg);
  await pg.query(`DELETE FROM faq_entries WHERE locale = 'de'`);
  const de = await api('GET', '/faq?locale=de');
  assert.equal(de.body.entries.length, 11);
  assert.equal(de.body.entries[0].locale, 'en');

  assert.equal((await api('POST', '/faq', { cookie: ada.cookie, body: { question: 'Can I?', answer: 'No' } })).status, 403);
  const created = await api('POST', '/faq', { cookie: team.cookie, body: { locale: 'de', topic: 'lives', question: 'Wie viele Leben?', answer: 'Fünf, **acht** mit dem Pass.' } });
  assert.equal(created.status, 201);
  assert.equal(created.body.entry.answerHtml, '<p>Fünf, <strong>acht</strong> mit dem Pass.</p>');
  const deNow = await api('GET', '/faq?locale=de');
  assert.deepEqual(deNow.body.entries.map((e: { question: string }) => e.question), ['Wie viele Leben?'], 'German entries now stand on their own');

  const edited = await api('PATCH', `/faq/${created.body.entry.id}`, { cookie: team.cookie, body: { question: 'Wie viele Leben habe ich?' } });
  assert.equal(edited.body.entry.question, 'Wie viele Leben habe ich?');
  assert.equal((await api('DELETE', `/faq/${created.body.entry.id}`, { cookie: ada.cookie })).status, 403);
  assert.equal((await api('DELETE', `/faq/${created.body.entry.id}`, { cookie: team.cookie })).status, 200);
  assert.equal((await api('PATCH', `/faq/${created.body.entry.id}`, { cookie: team.cookie, body: { topic: 'x' } })).status, 404);

  // Promote a solved thread: its title becomes the question and the solution the answer.
  const thread = await newThread(ada.cookie, { categorySlug: 'help', title: 'Can I play offline?' });
  assert.equal((await api('POST', '/faq', { cookie: team.cookie, body: { threadId: thread.id } })).status, 400, 'unsolved threads cannot be promoted');
  const answer = await api('POST', `/threads/${thread.id}/posts`, { cookie: team.cookie, body: { body: 'Yes, every board works offline.' } });
  await api('POST', `/threads/${thread.id}/solve`, { cookie: ada.cookie, body: { postId: answer.body.post.id } });
  const promoted = await api('POST', '/faq', { cookie: team.cookie, body: { threadId: thread.id, topic: 'offline' } });
  assert.equal(promoted.status, 201);
  assert.equal(promoted.body.entry.question, 'Can I play offline?');
  assert.equal(promoted.body.entry.answerHtml, '<p>Yes, every board works offline.</p>');
  assert.equal(promoted.body.entry.threadId, thread.id);
  assert.equal(promoted.body.entry.threadSlug, 'can-i-play-offline');
  const { rows } = await pg.query<{ action: string }>(`SELECT action FROM mod_log WHERE target_type = 'faq' ORDER BY id`);
  assert.deepEqual(rows.map((r) => r.action), ['faq.create', 'faq.edit', 'faq.delete', 'faq.promote']);
});
