// The release bot, with a fake fetch standing in for Apple's iTunes Lookup API.

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import { api, member, notificationsFor } from './test/forum-helpers.ts';
import { buildReleasePosts, compareVersions, notesToMarkdown, parseLookup, planRelease, runReleaseBot, type StorefrontRelease } from './releases.ts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

const notes: Record<string, string> = {
  us: 'Harder boards.\n• New sealed rooms\n• Calmer music',
  fr: 'Des plateaux plus difficiles.\n• Nouvelles salles scellées',
  de: 'Schwierigere Bretter.',
  es: 'Tableros más difíciles.',
  jp: 'より難しいボード。',
};

/** A fetch that answers like iTunes Lookup with `version` in every storefront (or per country), and records what was asked. */
function fakeFetch(versions: string | Record<string, string>, opts: { fail?: string[] } = {}) {
  const calls: string[] = [];
  const fn = async (url: string): Promise<Response> => {
    calls.push(url);
    const u = new URL(url);
    assert.equal(u.origin + u.pathname, 'https://itunes.apple.com/lookup');
    assert.equal(u.searchParams.get('id'), '6807997465');
    const country = u.searchParams.get('country')!;
    if (opts.fail?.includes(country)) return new Response('busy', { status: 503 });
    const version = typeof versions === 'string' ? versions : versions[country];
    return Response.json({
      resultCount: 1,
      results: [
        {
          trackId: 6807997465,
          version,
          releaseNotes: notes[country],
          currentVersionReleaseDate: '2026-10-07T07:00:00Z',
          trackViewUrl: `https://apps.apple.com/${country}/app/outbrick/id6807997465?uo=4`,
        },
      ],
    });
  };
  return { fn, calls };
}

void test('the pure parts: parsing, comparing, planning, writing the posts', () => {
  assert.equal(parseLookup('en', { results: [] }), null);
  assert.equal(parseLookup('en', { results: [{ version: '<script>' }] }), null);
  assert.equal(parseLookup('en', { results: [{ version: '5.1', trackViewUrl: 'javascript:alert(1)' }] })?.storeUrl, null);
  assert.ok(compareVersions('5.10', '5.9') > 0);
  assert.equal(compareVersions('5.1', '5.1.0'), 0);
  const us: StorefrontRelease = { locale: 'en', version: '5.1', releaseNotes: 'Notes', releasedAt: null, storeUrl: null };
  assert.equal(planRelease([], [us]).action, 'record');
  assert.equal(planRelease(['5.1'], [us]).action, 'none');
  assert.equal(planRelease(['5.0'], [us]).action, 'post');
  assert.equal(planRelease(['5.2'], [us]).action, 'record', 'an older version is never announced');
  assert.equal(planRelease(['5.0'], [{ ...us, locale: 'fr' }]).action, 'none', 'no US answer, no decision');
  assert.equal(notesToMarkdown('Intro\n• One\n•Two'), 'Intro\n- One\n- Two');
  const posts = buildReleasePosts('5.1', [us, { ...us, locale: 'ja', releaseNotes: '日本語のノート' }, { ...us, locale: 'fr', version: '5.0', releaseNotes: 'old' }]);
  assert.equal(posts.title, 'OutBrick 5.1 is out');
  assert.match(posts.opening, /## English\n\nNotes/);
  assert.match(posts.opening, /\(\/whats-new\)/);
  assert.deepEqual(posts.translations, [{ locale: 'ja', body: '## 日本語\n\n日本語のノート' }], 'a storefront still on the old version is left out');
});

void test('first run records the current version without posting', async () => {
  const existingThreads = (await pg.query('SELECT 1 FROM threads')).rows.length;
  const fake = fakeFetch('5.0.1');
  const result = await runReleaseBot(fake.fn);
  assert.equal(result.action, 'record');
  assert.equal(fake.calls.length, 5);
  assert.deepEqual(
    fake.calls.map((c) => new URL(c).searchParams.get('country') + '/' + new URL(c).searchParams.get('lang')),
    ['us/en', 'fr/fr', 'de/de', 'es/es', 'jp/ja'],
  );
  const { rows } = await pg.query<{ version: string; thread_id: number | null }>(`SELECT version, thread_id FROM app_releases`);
  assert.deepEqual(rows, [{ version: '5.0.1', thread_id: null }]);
  assert.equal((await pg.query(`SELECT 1 FROM threads`)).rows.length, existingThreads);
  assert.equal((await runReleaseBot(fakeFetch('5.0.1').fn)).action, 'none');
});

void test('a new version posts once, in every language, and notifies everyone who has not muted Announcements', async () => {
  const fan = await member(pg, { name: 'Release Fan' });
  const watcher = await member(pg, { name: 'Release Watcher' });
  const muter = await member(pg, { name: 'Release Muter' });
  const gone = await member(pg, { name: 'Release Gone' });
  await api('POST', '/categories/announcements/follow', { cookie: watcher.cookie, body: { level: 'watch' } });
  await api('POST', '/categories/announcements/follow', { cookie: muter.cookie, body: { level: 'mute' } });
  await pg.query(`UPDATE members SET deleted_at = now() WHERE id = $1`, [gone.id]);

  const result = await runReleaseBot(fakeFetch({ us: '5.1', fr: '5.1', de: '5.1', es: '5.0.1', jp: '5.1' }).fn);
  assert.equal(result.action, 'post');
  assert.equal(result.version, '5.1');
  const detail = await api('GET', `/threads/${result.threadId}`);
  assert.equal(detail.body.thread.title, 'OutBrick 5.1 is out');
  assert.equal(detail.body.thread.category.slug, 'announcements');
  assert.equal(detail.body.thread.releaseVersion, '5.1');
  assert.equal(detail.body.thread.author.displayName, 'OutBrick');
  assert.equal(detail.body.posts.length, 4, 'English, then French, German and Japanese; Spanish is still on 5.0.1');
  assert.match(detail.body.posts[0].html, /<h3>English<\/h3>/);
  assert.match(detail.body.posts[0].html, /<li>New sealed rooms<\/li>/);
  assert.match(detail.body.posts[0].html, /href="https:\/\/apps\.apple\.com\/us\/app\/outbrick\/id6807997465"/);
  assert.deepEqual(
    detail.body.posts.slice(1).map((p: { html: string }) => /<h3>([^<]+)<\/h3>/.exec(p.html)?.[1]),
    ['Français', 'Deutsch', '日本語'],
  );

  const releaseNotes = async (id: number) => (await notificationsFor(pg, id)).filter((n) => n.kind === 'release');
  assert.deepEqual((await releaseNotes(fan.id)).map((n) => [n.thread_id, n.data]), [[result.threadId, { version: '5.1' }]], 'on by default');
  assert.equal((await releaseNotes(watcher.id)).length, 1);
  assert.equal((await releaseNotes(muter.id)).length, 0);
  assert.equal((await releaseNotes(gone.id)).length, 0);
  const bot = await pg.query<{ id: number }>(`SELECT id::int FROM members WHERE email = 'releases@outbrick.site'`);
  assert.equal((await releaseNotes(bot.rows[0].id)).length, 0, 'the bot does not notify itself');

  // Running again changes nothing.
  assert.equal((await runReleaseBot(fakeFetch('5.1').fn)).action, 'none');
  assert.equal((await pg.query(`SELECT 1 FROM threads WHERE release_version = '5.1'`)).rows.length, 1);
  assert.equal((await releaseNotes(fan.id)).length, 1);
  const { rows } = await pg.query<{ thread_id: number }>(`SELECT thread_id::int FROM app_releases WHERE version = '5.1'`);
  assert.equal(rows[0].thread_id, result.threadId);

  // Two runs racing for the same new version: one posts, the other finds it claimed.
  const [a, b] = await Promise.all([runReleaseBot(fakeFetch('5.2').fn), runReleaseBot(fakeFetch('5.2').fn)]);
  const actions = [a.action, b.action].sort();
  assert.equal(actions.filter((x) => x === 'post').length, 1, actions.join());
  assert.ok(actions.every((x) => x === 'post' || x === 'raced' || x === 'none'), actions.join());
  assert.equal((await pg.query(`SELECT 1 FROM threads WHERE release_version = '5.2'`)).rows.length, 1);
});

void test('a run with the US storefront down does nothing', async () => {
  const result = await runReleaseBot(fakeFetch('9.9', { fail: ['us'] }).fn);
  assert.equal(result.action, 'none');
  const throwing = await runReleaseBot(async () => {
    throw new Error('network down');
  });
  assert.equal(throwing.action, 'none');
  assert.equal((await pg.query(`SELECT 1 FROM app_releases WHERE version = '9.9'`)).rows.length, 0);
});

void test('the scheduled function runs on the hour and swallows its own errors', async () => {
  const mod = await import('../functions/community-releases.mts');
  assert.equal(mod.config.schedule, '@hourly');
  const realFetch = globalThis.fetch;
  globalThis.fetch = (async (input: string | URL | Request) => fakeFetch('5.2').fn(input instanceof Request ? input.url : input.toString())) as typeof fetch;
  try {
    const res = await mod.default();
    assert.equal(res.status, 204);
  } finally {
    globalThis.fetch = realFetch;
  }
});
