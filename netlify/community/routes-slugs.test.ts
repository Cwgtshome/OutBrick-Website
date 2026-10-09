// Addresses: thread slugs in any script, the edge's list of community addresses that exist,
// dates that say their time zone, and the structured data of a solved question.

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import { api, member, newThread, resetRates } from './test/forum-helpers.ts';
import { slugify } from './db.ts';
import { threadPath } from '../../lib/community/contract.ts';
import { communityAddress } from '../../lib/community/routes.ts';
import { fullDate } from '../../lib/community/format.ts';
import { STATIC_END, STATIC_START, threadStaticHtml } from '../../lib/community/static-html.ts';
import { parseThreadPath, renderThreadPage } from '../edge-functions/community-thread.ts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

void test('slugs keep letters and numbers of every script, drop Latin accents, and stay short', () => {
  assert.equal(slugify('No-graphics mode, please!'), 'no-graphics-mode-please');
  assert.equal(slugify('Ça déraille à la fase 214'), 'ca-deraille-a-la-fase-214');
  assert.equal(slugify('ボイスオーバーで遊ぶ'), 'ボイスオーバーで遊ぶ', 'Japanese keeps its dakuten');
  assert.equal(slugify('Привет, мир'), 'привет-мир');
  assert.equal(slugify('ＡＢＣ　１２３'), 'abc-123', 'full-width forms fold (NFKC)');
  assert.equal(slugify('!!! ???'), 'thread');
  assert.ok(Array.from(slugify('a'.repeat(200))).length <= 60);
  assert.ok(new TextEncoder().encode(slugify('漢'.repeat(200))).length <= 120);
});

void test('a thread with a Japanese title gets a Japanese slug, and its address round-trips through the edge parser', async () => {
  await resetRates(pg);
  const ada = await member(pg);
  const thread = await newThread(ada.cookie, { title: 'ボイスオーバーで遊ぶには？', language: 'ja' });
  assert.equal(thread.slug, 'ボイスオーバーで遊ぶには');
  const path = threadPath('ja', thread);
  assert.equal(path, `/ja/community/t/${thread.id}/${encodeURIComponent('ボイスオーバーで遊ぶには')}`);
  // What a browser sends is the percent-encoded form; it must equal the canonical exactly, or
  // the edge function would answer 301 to itself.
  assert.equal(new URL(path, 'https://www.outbrick.site').pathname, path);
  assert.equal(new URL(`https://www.outbrick.site/ja/community/t/${thread.id}/ボイスオーバーで遊ぶには`).pathname, path);
  assert.deepEqual(parseThreadPath(path), { locale: 'ja', id: thread.id, slug: 'ボイスオーバーで遊ぶには' });
  // Old ASCII slugs are unchanged by the encoding, and a malformed escape does not throw.
  assert.equal(threadPath('en', { id: 7, slug: 'no-graphics-mode' }), '/community/t/7/no-graphics-mode');
  assert.equal(parseThreadPath('/community/t/7/%E3%81')?.slug, '');
  const detail = await api('GET', `/threads/${thread.id}`);
  assert.equal(detail.status, 200);
  assert.equal(detail.body.thread.slug, 'ボイスオーバーで遊ぶには');
});

void test('the edge knows which community addresses exist, in every language; the Help Centre always passes', () => {
  const known = (p: string) => communityAddress(p)?.known;
  for (const prefix of ['', '/fr', '/de', '/es', '/ja', '/pt-BR']) {
    for (const ok of ['/community', '/community/', '/community/search', '/community/c/help', '/community/c/show-and-tell', '/community/t/12', '/community/t/12/some-slug', '/community/u/5', '/community/latest', '/community/new', '/community/settings', '/community/help', '/community/help/voiceover', '/community/help/a/b', '/community/faq', '/community/faq.rsc', '/community/content/blog/release-notes', '/community/library'])
      assert.equal(known(prefix + ok), true, prefix + ok);
    for (const bad of ['/community/nope', '/community/nope/nope', '/community/c/nonexistent', '/community/c', '/community/c/help/extra', '/community/feed.xml', '/community/u/abc', '/community/t/abc', '/community/search/more', '/community/%E3%81'])
      assert.equal(known(prefix + bad), false, prefix + bad);
  }
  assert.equal(communityAddress('/fr/community/nope')?.locale, 'fr');
  assert.equal(communityAddress('/pt-BR/community/nope')?.locale, 'pt-BR');
  assert.equal(communityAddress('/support'), null);
  assert.equal(communityAddress('/communityx'), null);
});

void test('full dates always say their time zone', () => {
  const iso = '2026-10-07T20:30:00Z';
  assert.equal(fullDate('en', iso, 'UTC'), '7 October 2026 at 20:30 UTC');
  assert.match(fullDate('en', iso, 'America/New_York'), /16:30 GMT-4$/);
  assert.match(fullDate('ja', iso, 'UTC'), /20:30 UTC$/);
});

void test('a solved Help question is a QAPage whose accepted answer is the solution; other threads stay discussions', async () => {
  await resetRates(pg);
  const asker = await member(pg, { name: 'Asker' });
  const helper = await member(pg, { name: 'Helper' });
  const thread = await newThread(asker.cookie, { categorySlug: 'help', title: 'How do I undo a move?', body: 'I slid the wrong brick.' });
  const reply = await api('POST', `/threads/${thread.id}/posts`, { cookie: helper.cookie, body: { body: 'Tap Undo under the board. The first one is free.' } });
  assert.equal(reply.status, 201);
  const solved = await api('POST', `/threads/${thread.id}/solve`, { cookie: asker.cookie, body: { postId: reply.body.post.id } });
  assert.ok(solved.status < 300, JSON.stringify(solved.body));

  const shellId = 'https://www.outbrick.site/community#webpage';
  const shell = `<html><head><title>x</title><link rel="canonical" href="https://www.outbrick.site/community"/><script type="application/ld+json">{"@id":"${shellId}"}</script></head><body><div data-cm-static="">${STATIC_START}home${STATIC_END}</div></body></html>`;
  const detail = (await api('GET', `/threads/${thread.id}`)).body;
  const html = renderThreadPage(shell, 'en', detail);
  assert.ok(html);
  const ld = JSON.parse(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(html)![1]);
  assert.equal(ld['@type'], 'QAPage');
  assert.equal(ld.mainEntity['@type'], 'Question');
  assert.equal(ld.mainEntity.acceptedAnswer['@type'], 'Answer');
  assert.match(ld.mainEntity.acceptedAnswer.text, /Tap Undo/);
  assert.match(ld.mainEntity.acceptedAnswer.url, /#post-2$/);
  assert.equal(ld.mainEntity.answerCount, 1);

  const general = await newThread(asker.cookie, { title: 'Show me your clears' });
  const generalHtml = renderThreadPage(shell, 'en', (await api('GET', `/threads/${general.id}`)).body)!;
  assert.equal(JSON.parse(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(generalHtml)![1])['@type'], 'DiscussionForumPosting');

  // The static thread: the byline's separators are real text, and the date says UTC.
  const statics = threadStaticHtml('en', detail);
  assert.match(statics, /<span class="cm-author">Helper<\/span><span class="cm-sep" aria-hidden="true">,<\/span><span class="sr-only">, <\/span><time/);
  assert.match(statics, /UTC<\/time>/);
});
