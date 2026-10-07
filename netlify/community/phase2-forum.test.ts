// Phase 2 on the forum function: the time-to-fill check, the bug level, image uploads and their
// Markdown, thread merges, trust levels and translation.
/* oxlint-disable typescript/no-explicit-any */

import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import handler from '../functions/community-api.mts';
import { freshDatabase } from './test/harness.ts';
import { api, member, newThread, notificationsFor, resetRates } from './test/forum-helpers.ts';
import { contains, heic, jpeg, png } from './test/image-fixtures.ts';
import { setUploadStoreForTests, type UploadStore } from './uploads.ts';
import { runTrustPromotion } from './trust.ts';
import { TRANSLATE_MODEL } from './translate.ts';
import { renderMarkdown } from './markdown.ts';

let pg: PGlite;
const blobs = new Map<string, ArrayBuffer>();
const memoryStore: UploadStore = {
  set: async (key, value) => void blobs.set(key, value),
  get: async (key) => blobs.get(key) ?? null,
  delete: async (key) => void blobs.delete(key),
};

before(async () => {
  pg = await freshDatabase();
  setUploadStoreForTests(memoryStore);
});
after(async () => {
  setUploadStoreForTests(null);
  await pg.close();
});
beforeEach(async () => {
  await resetRates(pg);
});

async function upload(cookie: string, data: Uint8Array, opts: { contentType?: string; multipart?: boolean } = {}): Promise<{ status: number; body: any }> {
  let body: BodyInit;
  const headers: Record<string, string> = { origin: 'https://www.outbrick.site', cookie };
  if (opts.multipart) {
    const form = new FormData();
    form.append('file', new Blob([Buffer.from(data)], { type: opts.contentType ?? 'image/jpeg' }), 'photo.jpg');
    body = form;
  } else {
    body = Buffer.from(data);
    headers['content-type'] = opts.contentType ?? 'image/jpeg';
  }
  const res = await handler(new Request('https://www.outbrick.site/api/community/uploads', { method: 'POST', headers, body }));
  const text = await res.text();
  return { status: res.status, body: text ? JSON.parse(text) : null };
}

// Time-to-fill ------------------------------------------------------------------------------------

void test('a form sent under three seconds after it was shown is a decoy; older clients and fast clocks still post', async () => {
  const ada = await member(pg);
  const before = Number((await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM threads`)).rows[0].n);
  const fast = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'general', title: 'Too quick', body: 'Bot text', language: 'en', startedAt: Date.now() - 500 } });
  assert.equal(fast.status, 201);
  assert.equal(fast.body.thread.id, 0);
  assert.equal(Number((await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM threads`)).rows[0].n), before, 'nothing stored');

  const slow = await newThread(ada.cookie, { title: 'Took my time', startedAt: Date.now() - 20_000 });
  assert.ok(slow.id > 0);
  const legacy = await newThread(ada.cookie, { title: 'No startedAt at all' });
  assert.ok(legacy.id > 0);
  const future = await newThread(ada.cookie, { title: 'Phone clock runs ahead', startedAt: Date.now() + 60_000 });
  assert.ok(future.id > 0);

  const reply = await api('POST', `/threads/${slow.id}/posts`, { cookie: ada.cookie, body: { body: 'Instant reply', startedAt: String(Date.now()) } });
  assert.equal(reply.status, 201);
  assert.equal(reply.body.post.id, 0);
  const real = await api('POST', `/threads/${slow.id}/posts`, { cookie: ada.cookie, body: { body: 'Considered reply', startedAt: Date.now() - 5000 } });
  assert.ok(real.body.post.id > 0);
});

// Bug level ---------------------------------------------------------------------------------------

void test('a bug report takes an optional level from the app’s deep link, 1 to 100000', async () => {
  const ada = await member(pg);
  const bug = { device: 'iPhone 17 Pro', osVersion: '27.0', appVersion: '5.1 (70)', assistive: ['voiceover', 'switch_control'], steps: 'Open level 213 and slide.', expected: 'It slides.', actual: 'It does not.' };
  const t = await newThread(ada.cookie, { categorySlug: 'bugs', title: 'Level 213 gate', bug: { ...bug, level: 213 } });
  const detail = await api('GET', `/threads/${t.id}`);
  assert.equal(detail.body.bug.level, 213);
  assert.deepEqual(detail.body.bug.assistive, ['voiceover', 'switch_control']);
  const fromString = await newThread(ada.cookie, { categorySlug: 'bugs', title: 'Level as text', bug: { ...bug, level: '42' } });
  assert.equal((await api('GET', `/threads/${fromString.id}`)).body.bug.level, 42);
  const none = await newThread(ada.cookie, { categorySlug: 'bugs', title: 'No level given', bug });
  assert.equal((await api('GET', `/threads/${none.id}`)).body.bug.level, undefined);
  for (const level of [0, 100001, 2.5, 'two', -3]) {
    const res = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'bugs', title: 'Bad level', body: 'x', language: 'en', bug: { ...bug, level } } });
    assert.equal(res.status, 400, String(level));
    assert.equal(res.body.error.fields['bug.level'], 'invalid');
  }
});

// Uploads -----------------------------------------------------------------------------------------

void test('uploading an image: cleaned, stored, served with locked-down headers', async () => {
  const ada = await member(pg);
  const res = await upload(ada.cookie, jpeg({ orientation: 6, trailing: true }));
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const u = res.body.upload;
  assert.match(u.id, /^[A-Za-z0-9_-]{22}$/);
  assert.equal(u.url, `/api/community/uploads/${u.id}`);
  assert.equal(u.markdown, `![](upload:${u.id})`);
  assert.deepEqual([u.contentType, u.width, u.height], ['image/jpeg', 480, 640]);

  const served = await handler(new Request(`https://www.outbrick.site${u.url}`));
  assert.equal(served.status, 200);
  assert.equal(served.headers.get('content-type'), 'image/jpeg');
  assert.equal(served.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(served.headers.get('content-security-policy'), "default-src 'none'");
  assert.match(served.headers.get('cache-control') ?? '', /immutable/);
  const bytes = new Uint8Array(await served.arrayBuffer());
  assert.equal(bytes.length, u.bytes);
  assert.ok(!contains(bytes, 'SECRET'));

  const row = (await pg.query<any>(`SELECT member_id::int AS member_id, attached_post_id FROM uploads WHERE id = $1`, [u.id])).rows[0];
  assert.equal(row.member_id, ada.id);
  assert.equal(row.attached_post_id, null);

  const multipart = await upload(ada.cookie, png(), { multipart: true, contentType: 'image/png' });
  assert.equal(multipart.status, 201);
  assert.equal(multipart.body.upload.contentType, 'image/png');
  // The declared type is not believed: the bytes decide.
  const mislabelled = await upload(ada.cookie, png(), { contentType: 'image/jpeg' });
  assert.equal(mislabelled.body.upload.contentType, 'image/png');

  assert.equal((await handler(new Request('https://www.outbrick.site/api/community/uploads/AAAAAAAAAAAAAAAAAAAAAA'))).status, 404);
  assert.equal((await handler(new Request('https://www.outbrick.site/api/community/uploads/..%2Fsecret'))).status, 404);
});

void test('uploads are refused for HEIC, other files, oversize images, guests, the unverified, and past the daily limit', async () => {
  const ada = await member(pg);
  const h = await upload(ada.cookie, heic(), { contentType: 'image/heic' });
  assert.equal(h.status, 415);
  assert.equal(h.body.error.fields.file, 'heic_unsupported');
  assert.match(h.body.error.message, /JPEG or PNG/);
  const svg = await upload(ada.cookie, new TextEncoder().encode('<svg onload="x"></svg>'), { contentType: 'image/svg+xml' });
  assert.equal(svg.body.error.fields.file, 'unsupported_type');
  const huge = await upload(ada.cookie, png({ width: 5000, height: 100 }));
  assert.equal(huge.body.error.fields.file, 'too_many_pixels');
  const big = await upload(ada.cookie, new Uint8Array(8 * 1024 * 1024 + 1));
  assert.equal(big.status, 413);
  assert.equal(big.body.error.fields.file, 'too_large');
  const empty = await upload(ada.cookie, new Uint8Array());
  assert.equal(empty.body.error.fields.file, 'missing');

  const guest = await handler(new Request('https://www.outbrick.site/api/community/uploads', { method: 'POST', headers: { origin: 'https://www.outbrick.site', 'content-type': 'image/png' }, body: Buffer.from(png()) }));
  assert.equal(guest.status, 401);
  const unverified = await member(pg, { verified: false });
  assert.equal((await upload(unverified.cookie, png())).status, 403);

  const bob = await member(pg);
  for (let i = 0; i < 20; i++) assert.equal((await upload(bob.cookie, png())).status, 201);
  assert.equal((await upload(bob.cookie, png())).status, 429);
  await pg.query(`UPDATE members SET role = 'trusted' WHERE id = $1`, [bob.id]);
  assert.equal((await upload(bob.cookie, png())).status, 201, 'trusted members get 60 a day');
});

void test('posts show an upload only with alt text, and only the author’s own', async () => {
  const ada = await member(pg);
  const eve = await member(pg);
  const mine = (await upload(ada.cookie, png({ width: 300, height: 200 }))).body.upload;
  const hers = (await upload(eve.cookie, png())).body.upload;

  const noAlt = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'show-and-tell', title: 'My clear', body: `Look ![](upload:${mine.id})`, language: 'en' } });
  assert.equal(noAlt.status, 400);
  assert.equal(noAlt.body.error.fields.body, 'image_needs_alt');
  const spaceAlt = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'show-and-tell', title: 'My clear', body: `Look ![   ](upload:${mine.id})`, language: 'en' } });
  assert.equal(spaceAlt.body.error.fields.body, 'image_needs_alt');
  const stolen = await api('POST', '/threads', { cookie: ada.cookie, body: { categorySlug: 'show-and-tell', title: 'Not mine', body: `![A board](upload:${hers.id})`, language: 'en' } });
  assert.equal(stolen.body.error.fields.body, 'upload_not_found');

  const t = await newThread(ada.cookie, { categorySlug: 'show-and-tell', title: 'Level 300 cleared', body: `Done!\n\n![The finished board, all gates "open" <yay>](upload:${mine.id})\n\n![external](https://example.com/x.png)` });
  // The external link puts a new member's post in the review queue; the author still sees it.
  const detail = await api('GET', `/threads/${t.id}`, { cookie: ada.cookie });
  const html = detail.body.posts[0].html as string;
  assert.ok(html.includes(`<img src="/api/community/uploads/${mine.id}" alt="The finished board, all gates &quot;open&quot; &lt;yay&gt;" loading="lazy" width="300" height="200">`), html);
  assert.ok(html.includes('<a href="https://example.com/x.png" rel="ugc nofollow noopener">external</a>'), 'external images stay links');
  const row = (await pg.query<any>(`SELECT attached_post_id::int AS p FROM uploads WHERE id = $1`, [mine.id])).rows[0];
  assert.equal(row.p, detail.body.posts[0].id);

  const pv = await api('POST', '/preview', { cookie: ada.cookie, body: { body: `![](upload:${mine.id})` } });
  assert.deepEqual(pv.body.problems, ['image_needs_alt']);
  const pvOk = await api('POST', '/preview', { cookie: ada.cookie, body: { body: `![Board](upload:${mine.id})` } });
  assert.equal(pvOk.body.problems, undefined);
  assert.ok(pvOk.body.html.includes('<img'));

  // Removing it re-renders the post with the alt text; the bytes are gone.
  assert.equal((await api('DELETE', `/uploads/${mine.id}`, { cookie: eve.cookie })).status, 403);
  const mod = await member(pg, { role: 'moderator' });
  assert.equal((await api('DELETE', `/uploads/${mine.id}`, { cookie: mod.cookie })).status, 200);
  const after = (await api('GET', `/threads/${t.id}`, { cookie: ada.cookie })).body.posts[0].html as string;
  assert.ok(!after.includes('<img'));
  assert.ok(after.includes('The finished board'));
  assert.equal((await handler(new Request(`https://www.outbrick.site/api/community/uploads/${mine.id}`))).status, 404);
  const log = (await pg.query<any>(`SELECT action, data FROM mod_log WHERE action = 'upload.delete'`)).rows;
  assert.equal(log.length, 1);
  assert.equal(log[0].data.uploadId, mine.id);
});

void test('the renderer itself: only upload ids, only with alt, never markup from the alt', () => {
  const uploads = new Map([['abcdefghijklmnopqrstuv', { width: 10, height: 20 }]]);
  const r = renderMarkdown('![x" onerror="y](upload:abcdefghijklmnopqrstuv) ![](upload:abcdefghijklmnopqrstuv) ![gone](upload:zzzzzzzzzzzzzzzzzzzzzz) [link](upload:abcdefghijklmnopqrstuv)', { uploads });
  assert.ok(r.html.includes('alt="x&quot; onerror=&quot;y"'));
  assert.equal(r.imagesWithoutAlt, 1);
  assert.equal(r.unknownUploads, 1);
  assert.deepEqual(r.uploadIds, ['abcdefghijklmnopqrstuv']);
  assert.ok(r.html.includes('gone'));
  assert.ok(!r.html.includes('href="upload:'), 'upload: is not a link scheme');
});

// Merge -------------------------------------------------------------------------------------------

void test('merging moves and renumbers posts, keeps reads, solved and follows, and leaves a redirect', async () => {
  const ada = await member(pg, { name: 'Merge Ada' });
  const bob = await member(pg, { name: 'Merge Bob' });
  const cat = await member(pg, { name: 'Merge Cat' });
  const mod = await member(pg, { role: 'moderator', name: 'Merge Mod' });
  const target = await newThread(ada.cookie, { categorySlug: 'help', title: 'Stars do not count', body: 'Target opener' });
  const source = await newThread(bob.cookie, { categorySlug: 'help', title: 'Third star missing', body: 'Source opener' });
  // Interleave times: target #1, source #1, target #2, source #2 (replying to source #1), target #3.
  const reply = async (who: string, t: number, body: string, replyTo?: number) => (await api('POST', `/threads/${t}/posts`, { cookie: who, body: { body, replyTo } })).body.post;
  await pg.query(`UPDATE posts SET created_at = now() - interval '5 hours' WHERE thread_id = $1 AND number = 1`, [target.id]);
  await pg.query(`UPDATE posts SET created_at = now() - interval '4 hours' WHERE thread_id = $1 AND number = 1`, [source.id]);
  const t2 = await reply(cat.cookie, target.id, 'Target two');
  await pg.query(`UPDATE posts SET created_at = now() - interval '3 hours' WHERE id = $1`, [t2.id]);
  const s2 = await reply(cat.cookie, source.id, 'Source two', 1);
  await pg.query(`UPDATE posts SET created_at = now() - interval '2 hours' WHERE id = $1`, [s2.id]);
  const t3 = await reply(bob.cookie, target.id, 'Target three', 2);
  await pg.query(`UPDATE posts SET created_at = now() - interval '1 hour' WHERE id = $1`, [t3.id]);
  // Source is solved by Cat's reply; Ada follows the source muted, Cat follows it watched.
  assert.equal((await api('POST', `/threads/${source.id}/solve`, { cookie: bob.cookie, body: { postId: s2.id } })).status, 200);
  await api('POST', `/threads/${source.id}/follow`, { cookie: cat.cookie, body: { level: 'watch' } });
  await api('POST', `/threads/${source.id}/follow`, { cookie: ada.cookie, body: { level: 'mute' } });
  await api('POST', `/threads/${source.id}/read`, { cookie: cat.cookie, body: { number: 2 } });

  assert.equal((await api('POST', `/mod/threads/${source.id}/merge`, { cookie: ada.cookie, body: { intoThreadId: target.id } })).status, 403);
  assert.equal((await api('POST', `/mod/threads/${source.id}/merge`, { cookie: mod.cookie, body: { intoThreadId: source.id } })).body.error.fields.intoThreadId, 'same_thread');
  const res = await api('POST', `/mod/threads/${source.id}/merge`, { cookie: mod.cookie, body: { intoThreadId: target.id } });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.equal(res.body.moved, 2);
  assert.equal(res.body.thread.id, target.id);
  assert.equal(res.body.thread.replyCount, 4);
  assert.equal(res.body.thread.solved, true, 'the source’s solution carries over');

  const detail = await api('GET', `/threads/${target.id}`, { cookie: cat.cookie });
  const posts = detail.body.posts.map((p: any) => [p.number, p.html.replace(/<\/?p>/g, ''), p.replyTo]);
  assert.deepEqual(posts, [
    [1, 'Target opener', null],
    [2, 'Source opener', null],
    [3, 'Target two', null],
    [4, 'Source two', 2],
    [5, 'Target three', 3],
  ]);
  assert.equal(detail.body.solvedPostNumber, 4);
  assert.equal(detail.body.following, 'watch', 'Cat’s follow moved');
  assert.equal(detail.body.firstUnread, 5, 'Cat had read the source up to its #2, now #4');

  // Ada had watched her own thread; her mute of the source does not override it.
  assert.equal((await pg.query<any>(`SELECT level FROM follows WHERE member_id = $1 AND target_type = 'thread' AND target_id = $2`, [ada.id, target.id])).rows[0].level, 'watch');

  const stub = await api('GET', `/threads/${source.id}`);
  assert.deepEqual(stub.body, { redirect: { id: target.id, slug: target.slug } });
  const list = await api('GET', '/threads?category=help', { cookie: mod.cookie });
  assert.ok(!list.body.threads.some((t: any) => t.id === source.id), 'the stub is not listed, even to moderators');

  const log = (await pg.query<any>(`SELECT actor_id::int AS actor, data FROM mod_log WHERE action = 'thread.merge' AND target_id = $1`, [source.id])).rows;
  assert.equal(log.length, 1);
  assert.equal(log[0].actor, mod.id);
  assert.deepEqual(log[0].data, { into: target.id, moved: 2 });

  const bobNotes = (await notificationsFor(pg, bob.id)).filter((n) => n.kind === 'merged');
  const catNotes = (await notificationsFor(pg, cat.id)).filter((n) => n.kind === 'merged');
  assert.equal(bobNotes.length, 1);
  assert.equal(catNotes.length, 1);
  assert.equal(bobNotes[0].thread_id, target.id);
  assert.equal(bobNotes[0].data.fromTitle, 'Third star missing');
  assert.equal((await notificationsFor(pg, ada.id)).filter((n) => n.kind === 'merged').length, 0, 'no post of Ada’s moved');

  // A thread merged into one that is later merged elsewhere still redirects to the end.
  const third = await newThread(cat.cookie, { categorySlug: 'help', title: 'Final home thread' });
  assert.equal((await api('POST', `/mod/threads/${target.id}/merge`, { cookie: mod.cookie, body: { intoThreadId: third.id } })).status, 200);
  assert.deepEqual((await api('GET', `/threads/${source.id}`)).body, { redirect: { id: third.id, slug: third.slug } });
  assert.equal((await api('POST', `/mod/threads/${third.id}/merge`, { cookie: mod.cookie, body: { intoThreadId: source.id } })).body.error.fields.intoThreadId, 'merged');
});

// Trust levels ------------------------------------------------------------------------------------

void test('members earn trusted on age, posts and solutions; staff, the reported and the demoted do not', async () => {
  const make = async (name: string) => {
    const m = await member(pg, { name });
    await pg.query(`UPDATE members SET created_at = now() - interval '10 days' WHERE id = $1`, [m.id]);
    return m;
  };
  const asker = await member(pg, { name: 'Trust Asker' });
  const good = await make('Trust Good');
  const young = await member(pg, { name: 'Trust Young' });
  const reported = await make('Trust Reported');
  const demoted = await make('Trust Demoted');
  const mod = await member(pg, { role: 'moderator', name: 'Trust Mod' });
  await pg.query(`UPDATE members SET created_at = now() - interval '30 days' WHERE id = $1`, [mod.id]);

  for (const m of [good, young, reported, demoted, mod]) {
    const t = await newThread(asker.cookie, { categorySlug: 'help', title: `Question for ${m.name}` });
    const t2 = await newThread(asker.cookie, { categorySlug: 'help', title: `Second question for ${m.name}` });
    for (let i = 0; i < 10; i++) {
      if (i % 5 === 0) await resetRates(pg);
      const p = (await api('POST', `/threads/${i % 2 ? t.id : t2.id}/posts`, { cookie: m.cookie, body: { body: `Answer ${i}` } })).body.post;
      if (i < 2) await api('POST', `/threads/${i % 2 ? t.id : t2.id}/solve`, { cookie: asker.cookie, body: { postId: p.id } });
    }
  }
  const hidden = (await pg.query<any>(`SELECT id::int AS id FROM posts WHERE author_id = $1 LIMIT 1`, [reported.id])).rows[0].id;
  await pg.query(`INSERT INTO reports (post_id, reporter_id, reason, resolved_at, resolution) VALUES ($1, $2, 'abuse', now() - interval '3 days', 'hidden')`, [hidden, asker.id]);
  const admin = await member(pg, { role: 'admin' });
  await pg.query(`UPDATE members SET role = 'trusted' WHERE id = $1`, [demoted.id]);
  assert.equal((await api('POST', `/mod/members/${demoted.id}/role`, { cookie: admin.cookie, body: { role: 'member' } })).status, 200);

  const promoted = await runTrustPromotion();
  assert.deepEqual(promoted, [good.id]);
  const roles = (await pg.query<any>(`SELECT id::int AS id, role FROM members WHERE id = ANY($1::bigint[])`, [[good.id, young.id, reported.id, demoted.id, mod.id]])).rows;
  const role = (id: number) => roles.find((r) => r.id === id).role;
  assert.equal(role(good.id), 'trusted');
  assert.equal(role(young.id), 'member');
  assert.equal(role(reported.id), 'member');
  assert.equal(role(demoted.id), 'member');
  assert.equal(role(mod.id), 'moderator', 'staff are never touched');
  const log = (await pg.query<any>(`SELECT actor_id, reason FROM mod_log WHERE action = 'member.trust' AND target_id = $1`, [good.id])).rows;
  assert.deepEqual(log, [{ actor_id: null, reason: 'automatic' }]);
  assert.deepEqual(await runTrustPromotion(), [], 'a second run changes nothing');

  // Trusted: links go straight through, and limits are higher.
  const linky = await api('POST', `/threads/${(await newThread(asker.cookie)).id}/posts`, { cookie: good.cookie, body: { body: 'See https://example.com/a' } });
  assert.equal(linky.body.post.pending, false);
});

// Translation -------------------------------------------------------------------------------------

void test('translate a post on request: cached per revision, rendered safely, limited, off without a key', async () => {
  const ada = await member(pg);
  const bob = await member(pg);
  const t = await newThread(ada.cookie, { title: 'Les étoiles', body: 'Bonjour **à tous**', language: 'fr' });
  const postId = (await api('GET', `/threads/${t.id}`)).body.posts[0].id;

  const saved = { key: process.env.ANTHROPIC_API_KEY, base: process.env.ANTHROPIC_BASE_URL };
  delete process.env.ANTHROPIC_API_KEY;
  assert.equal((await api('POST', `/posts/${postId}/translate`, { cookie: bob.cookie, body: { to: 'en' } })).status, 503);
  process.env.ANTHROPIC_API_KEY = 'test-anthropic-key';
  process.env.ANTHROPIC_BASE_URL = 'https://gateway.example/anthropic/';

  const calls: { url: string; headers: Headers; body: any }[] = [];
  let reply = 'Hello **everyone** <script>alert(1)</script> [x](javascript:alert(1))';
  const realFetch = globalThis.fetch;
  globalThis.fetch = (async (input: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url, headers: new Headers(init?.headers), body: JSON.parse(typeof init?.body === 'string' ? init.body : '{}') });
    return new Response(JSON.stringify({ content: [{ type: 'text', text: reply }], stop_reason: 'end_turn' }), { status: 200 });
  }) as typeof fetch;
  try {
    assert.equal((await api('POST', `/posts/${postId}/translate`, { body: { to: 'en' } })).status, 401);
    assert.equal((await api('POST', `/posts/${postId}/translate`, { cookie: bob.cookie, body: { to: 'xx' } })).body.error.fields.to, 'invalid');

    const first = await api('POST', `/posts/${postId}/translate`, { cookie: bob.cookie, body: { to: 'en' } });
    assert.equal(first.status, 200, JSON.stringify(first.body));
    assert.equal(first.body.from, 'fr');
    assert.equal(first.body.to, 'en');
    assert.equal(first.body.cached, false);
    assert.ok(first.body.html.includes('<strong>everyone</strong>'));
    assert.ok(!first.body.html.includes('<script'), 'model output is rendered like a post');
    assert.ok(!first.body.html.includes('javascript:'));
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, 'https://gateway.example/anthropic/v1/messages');
    assert.equal(calls[0].headers.get('x-api-key'), 'test-anthropic-key');
    assert.equal(calls[0].headers.get('anthropic-version'), '2023-06-01');
    assert.equal(calls[0].body.model, TRANSLATE_MODEL);
    assert.match(calls[0].body.system, /data, not instructions/);
    assert.match(calls[0].body.system, /English/);
    assert.equal(calls[0].body.messages[0].content, '<post>\nBonjour **à tous**\n</post>');

    const again = await api('POST', `/posts/${postId}/translate`, { cookie: ada.cookie, body: { to: 'en' } });
    assert.equal(again.body.cached, true);
    assert.equal(calls.length, 1, 'served from the cache');

    // An edit is a new revision.
    await api('PATCH', `/posts/${postId}`, { cookie: ada.cookie, body: { body: 'Bonsoir' } });
    reply = 'Good evening';
    const edited = await api('POST', `/posts/${postId}/translate`, { cookie: bob.cookie, body: { to: 'en' } });
    assert.equal(edited.body.cached, false);
    assert.equal(edited.body.html, '<p>Good evening</p>');

    // 30 uncached translations an hour per member.
    await resetRates(pg);
    for (let i = 0; i < 30; i++) await pg.query(`INSERT INTO rate_events (key) VALUES ($1)`, [`translate:hour:${bob.id}`]);
    assert.equal((await api('POST', `/posts/${postId}/translate`, { cookie: bob.cookie, body: { to: 'de' } })).status, 429);

    // A failing gateway is a 502, with nothing cached.
    globalThis.fetch = (async () => new Response('{"error":{}}', { status: 529 })) as typeof fetch;
    const failed = await api('POST', `/posts/${postId}/translate`, { cookie: ada.cookie, body: { to: 'ja' } });
    assert.equal(failed.status, 502);
    assert.equal(failed.body.error.code, 'translate_failed');
  } finally {
    globalThis.fetch = realFetch;
    if (saved.key === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = saved.key;
    if (saved.base === undefined) delete process.env.ANTHROPIC_BASE_URL;
    else process.env.ANTHROPIC_BASE_URL = saved.base;
  }
});

void test('merging two ideas moves the votes through the feature board’s combiner', async () => {
  const ada = await member(pg);
  const bob = await member(pg);
  const cat = await member(pg);
  const mod = await member(pg, { role: 'moderator' });
  const target = await newThread(ada.cookie, { categorySlug: 'ideas', title: 'A no-graphics mode' });
  const source = await newThread(bob.cookie, { categorySlug: 'ideas', title: 'Audio-only play' });
  await api('POST', `/threads/${target.id}/vote`, { cookie: bob.cookie, body: { on: true } });
  await api('POST', `/threads/${source.id}/vote`, { cookie: cat.cookie, body: { on: true } });
  await api('POST', `/threads/${source.id}/vote`, { cookie: ada.cookie, body: { on: true } }); // the target's own author
  const res = await api('POST', `/mod/threads/${source.id}/merge`, { cookie: mod.cookie, body: { intoThreadId: target.id } });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.equal(res.body.thread.voteCount, 2, 'Bob’s and Cat’s; Ada cannot vote for her own idea');
  assert.equal((await pg.query<any>(`SELECT vote_count FROM threads WHERE id = $1`, [source.id])).rows[0].vote_count, 0);
});
