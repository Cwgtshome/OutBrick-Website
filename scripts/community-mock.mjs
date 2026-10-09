// A local OutBrick Community for working on the pages: dist/client served the way Netlify serves
// it (the community rewrites included), the real /api/community/* functions running on an
// in-process Postgres (PGlite, every migration applied), the thread edge function applied to
// /community/t/* pages, and a set of realistic fixtures. Not part of the deployed site.
//
//   pnpm build
//   node --experimental-strip-types scripts/community-mock.mjs [port]      (default 4330)
//
// Then open http://127.0.0.1:4330/community. Who you are is a cookie, switched with:
//
//   /__mock/as/out      signed out (the default)
//   /__mock/as/member   Sam, an ordinary member
//   /__mock/as/mod      Ada, a moderator
//   /__mock/as/team     Mourad, the OutBrick team (admin)
//   /__mock/as/new      a member who has not chosen a display name yet
//   /__mock/as/ja       Kenji, a member whose language is Japanese
//   /__mock/as/lea      Léa, a member whose language is French
//   /__mock/reply?thread=<id>&as=<who>   someone else replies (try the live "new replies" bar)
//
// (each takes ?to=/some/path to land somewhere). The sign-in buttons sign you in as Sam, and the
// email form "sends" its link into the void: nothing in this file ever reaches the network —
// fetch() is replaced with one that answers Resend locally and refuses every other host.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const port = Number(process.argv[2] ?? process.env.PORT ?? 4330);
const origin = `http://127.0.0.1:${port}`;
const root = new URL('../dist/client/', import.meta.url).pathname;

// The functions read these: providers switch on when their variables exist. Fake values only.
Object.assign(process.env, {
  CONTEXT: 'dev',
  RESEND_API_KEY: 're_mock_never_sent',
  GOOGLE_CLIENT_ID: 'mock',
  GOOGLE_CLIENT_SECRET: 'mock',
  FACEBOOK_APP_ID: 'mock',
  FACEBOOK_APP_SECRET: 'mock',
  APPLE_CLIENT_ID: 'mock',
  APPLE_TEAM_ID: 'mock',
  APPLE_KEY_ID: 'mock',
  APPLE_PRIVATE_KEY: 'mock',
  COMMUNITY_ADMIN_EMAILS: '',
  // Translation goes to the fake model endpoint below, never to Anthropic.
  ANTHROPIC_API_KEY: 'mock',
  ANTHROPIC_BASE_URL: `${origin}/__anthropic`,
});

const realFetch = globalThis.fetch;
globalThis.fetch = async (input, init) => {
  const url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url);
  if (url.hostname === '127.0.0.1' || url.hostname === 'localhost') return realFetch(input, init);
  if (url.hostname === 'api.resend.com') return new Response(JSON.stringify({ id: 'mock' }), { status: 200, headers: { 'content-type': 'application/json' } });
  throw new Error(`community-mock: refused an outbound request to ${url.host}`);
};

const { freshDatabase } = await import('../netlify/community/test/harness.ts');
const pg = await freshDatabase();
// Image uploads land in memory instead of Netlify Blobs.
const blobs = new Map();
(await import('../netlify/community/uploads.ts')).setUploadStoreForTests({
  set: async (key, value) => blobs.set(key, value),
  get: async (key) => blobs.get(key) ?? null,
  delete: async (key) => blobs.delete(key),
});
const { startSession } = await import('../netlify/community/session.ts');
const forum = (await import('../netlify/functions/community-api.mts')).default;
const accounts = (await import('../netlify/functions/community-auth.mts')).default;
const { renderThreadPage, parseThreadPath } = await import('../netlify/edge-functions/community-thread.ts');
const { threadPath } = await import('../lib/community/contract.ts');
const { communityAddress } = await import('../lib/community/routes.ts');

const authPaths = /^\/api\/community\/(session|auth\/|me(\/|$)|notifications(\/|$)|email\/)/;
const apiFor = (pathname) => (authPaths.test(pathname) ? accounts : forum);

/** Call a function the way the site would. */
async function call(method, path, { body, cookie } = {}) {
  const headers = { origin };
  if (cookie) headers.cookie = cookie;
  if (body !== undefined) headers['content-type'] = 'application/json';
  const init = { method, headers };
  if (body !== undefined) init.body = JSON.stringify(body);
  const req = new Request(origin + path, init);
  const res = await apiFor(new URL(req.url).pathname)(req);
  const text = await res.text();
  return { status: res.status, body: text ? JSON.parse(text) : null };
}

// ---------------------------------------------------------------------------------------
// Fixtures

async function member(name, email, { role = 'member', locale = 'en', chosen = true } = {}) {
  const { rows } = await pg.query(
    `INSERT INTO members (display_name, name_chosen, email, email_verified, role, locale, bio, created_at) VALUES ($1, $2, $3, true, $4, $5, $6, now() - interval '200 days') RETURNING id::int`,
    [name, chosen, email, role, locale, chosen ? `Plays OutBrick on the bus. (${name})` : ''],
  );
  const id = rows[0].id;
  await pg.query(`INSERT INTO identities (member_id, provider, subject, email) VALUES ($1, 'email', $2, $2)`, [id, email]).catch(() => undefined);
  const setCookie = await startSession(new Request(origin), id);
  return { id, name, cookie: setCookie.split(';')[0] };
}

const people = {
  team: await member('Mourad', 'team@outbrick.test', { role: 'admin' }),
  mod: await member('Ada', 'ada@outbrick.test', { role: 'moderator' }),
  member: await member('Sam', 'sam@outbrick.test'),
  lea: await member('Léa', 'lea@outbrick.test', { locale: 'fr' }),
  ja: await member('Kenji', 'kenji@outbrick.test', { locale: 'ja' }),
  new: await member('Player 4821', 'newcomer@outbrick.test', { chosen: false }),
};
const reset = () => pg.query('DELETE FROM rate_events');

async function thread(who, body) {
  await reset();
  const res = await call('POST', '/api/community/threads', { cookie: who.cookie, body: { language: 'en', ...body } });
  if (res.status !== 201) throw new Error(`fixture thread failed: ${res.status} ${JSON.stringify(res.body)}`);
  return res.body.thread;
}
async function reply(who, t, body, replyTo = null) {
  await reset();
  const res = await call('POST', `/api/community/threads/${t.id}/posts`, { cookie: who.cookie, body: { body, replyTo } });
  if (res.status !== 201) throw new Error(`fixture reply failed: ${res.status} ${JSON.stringify(res.body)}`);
  return res.body.post;
}

const release = await thread(people.team, {
  categorySlug: 'announcements',
  title: 'OutBrick 5.1 is out',
  body: 'OutBrick **5.1** is on the App Store now.\n\n- The move counter is read out again after you pause a board with VoiceOver on.\n- Resuming a level puts you back on the brick you last touched.\n- Twelve new boards in Clover Farm.\n\nThank you to everyone who reported these in the community.',
});
await reply(people.member, release, 'Confirmed on my iPhone 15: the counter talks again. Thank you!');

const help = await thread(people.member, {
  categorySlug: 'help',
  title: 'How do I undo more than once on a board?',
  body: 'The first undo was free, then the button greyed out. Is there a way to get more undos without watching a video?',
});
const answer = await reply(people.team, help, 'Yes: after the free one, undos come from a tank of five that refills one every twenty-five minutes. You can also buy five for 250 coins in the Shop. Waiting always works.');
await reply(people.member, help, 'That makes sense, thank you. I had not noticed the tank.', 2);
await call('POST', `/api/community/threads/${help.id}/solve`, { cookie: people.member.cookie, body: { postId: answer.id } });

const bug = await thread(people.member, {
  categorySlug: 'bugs',
  title: 'VoiceOver stops reading the move counter after a pause',
  body: 'After pausing and resuming a board, VoiceOver no longer announces the move counter when I make a move.',
  bug: {
    device: 'iPhone 15 Pro',
    osVersion: '27.0.1',
    appVersion: '5.0.1 (66)',
    assistive: ['voiceover', 'larger_text'],
    steps: '1. Turn VoiceOver on.\n2. Open level 214.\n3. Make one move, then pause and resume.\n4. Make another move.',
    expected: 'VoiceOver says "Moves: 2 of 18".',
    actual: 'Nothing is announced after the move.',
  },
});
await reply(people.mod, bug, 'I can reproduce this on an iPad Air with iPadOS 27 as well.');
await reply(people.team, bug, 'Thank you both. Found it: the pause card kept the counter out of the accessibility tree. Fixed in 5.1.');
await call('PATCH', `/api/community/threads/${bug.id}`, { cookie: people.team.cookie, body: { status: 'fixed', statusNote: 'Fixed in 5.1' } });

const idea = await thread(people.member, {
  categorySlug: 'ideas',
  title: 'A no-graphics mode for VoiceOver players',
  body: 'A mode that drops the animations and the scenery and just lets VoiceOver read the board row by row would make long sessions much easier.',
});
for (const who of [people.member, people.mod, people.lea, people.ja]) await call('POST', `/api/community/threads/${idea.id}/vote`, { cookie: who.cookie, body: { on: true } });
await call('PATCH', `/api/community/threads/${idea.id}`, { cookie: people.team.cookie, body: { status: 'planned' } });
await reply(people.lea, idea, 'Oui ! Same here, especially on the Apple Watch.');

await thread(people.mod, {
  categorySlug: 'accessibility',
  title: 'Switch Control: the quickest scanning settings for OutBrick',
  body: 'With **Auto Scanning** on, set the scanning style to *Point* and the speed to 1.2 seconds. Group items so the board is one group and the toolbar another.',
});

await thread(people.ja, {
  categorySlug: 'general',
  language: 'ja',
  title: 'お気に入りの村はどこですか？',
  body: '旅のなかで、いちばん好きな村を教えてください。わたしは「さくらの町」です。',
});
await thread(people.lea, {
  categorySlug: 'help',
  language: 'fr',
  title: 'Comment récupérer ma progression sur un nouvel iPhone ?',
  body: 'Je viens de changer de téléphone. Ma progression va-t-elle revenir toute seule avec iCloud ?',
});

const long = await thread(people.member, {
  categorySlug: 'show-and-tell',
  title: 'Post your best clear of the week',
  body: 'Share the board you are proudest of this week: the level, the moves, and how you found it.',
});
const villages = ['Garden City', 'Clover Farm', 'Coral Cove', 'Moonlit Meadow', 'Ember Volcano', 'Peppermint Plaza'];
for (let i = 2; i <= 60; i += 1) {
  const who = [people.member, people.mod, people.lea, people.team][i % 4];
  await reply(who, long, `Level ${100 + i} in ${villages[i % villages.length]}: ${12 + (i % 9)} moves, ${(i % 3) + 1} stars. ${i % 5 === 0 ? 'Took me three tries.' : 'Felt good.'}`);
}

// A first post with a link from a brand-new member waits for review; a report for the queue.
const newbie = await member('Newbie', 'newbie@outbrick.test');
await pg.query(`UPDATE members SET created_at = now() WHERE id = $1`, [newbie.id]);
await reply(newbie, help, 'There is a guide here: https://example.org/undo-guide');
await reset();
await call('POST', `/api/community/posts/${answer.id + 1}/report`, { cookie: people.mod.cookie, body: { reason: 'off_topic', note: 'Fixture report for the moderation page.' } });

// Spread the fixtures over the last few weeks, so lists read "3 days ago", not "now".
await pg.query(`UPDATE posts SET created_at = now() - make_interval(hours => ((SELECT max(id) FROM posts)::int - id::int) * 3)`);
await pg.query(`UPDATE threads t SET created_at = p.first, last_post_at = p.last FROM (SELECT thread_id, min(created_at) AS first, max(created_at) AS last FROM posts GROUP BY thread_id) p WHERE p.thread_id = t.id`);

// ---- The feature board, reactions, polls, badges, bookmarks, a merged thread (community-fx, phase 2)
await call('PATCH', `/api/community/threads/${idea.id}`, { cookie: people.team.cookie, body: { status: 'in_progress' } });
const ideaFixtures = [
  ['Replay a cleared level without spending a life', 'considering', 6],
  ['A colour-blind palette preview in Settings', 'planned', 9],
  ['Haptic feedback when a brick reaches its gate', 'shipped', 12, '5.1'],
  ['Spoken move count after every move', 'shipped', 7, '5.0'],
  ['Daily board streak calendar', 'considering', 3],
  ['Undo history you can step through', 'open', 2],
];
const voters = [people.member, people.mod, people.lea, people.ja, people.new, newbie];
for (const [title, status, votes, version] of ideaFixtures) {
  const t = await thread(people.lea, { categorySlug: 'ideas', title, body: `${title}. It would make long sessions kinder.` });
  for (const who of voters.slice(0, Math.min(votes, voters.length))) await call('POST', `/api/community/threads/${t.id}/vote`, { cookie: who.cookie, body: { on: true } });
  if (status !== 'open') await call('PATCH', `/api/community/threads/${t.id}`, { cookie: people.team.cookie, body: { status, ...(version ? { shippedVersion: version } : {}) } });
}
const pollThread = await thread(people.team, {
  categorySlug: 'general',
  title: 'Which village should get the next twelve boards?',
  body: 'We are planning the next set of boards. Which village would you like them in?',
  poll: { question: 'Where should the next boards go?', options: ['Coral Cove', 'Moonlit Meadow', 'Ember Volcano', 'Peppermint Plaza'], multiple: false, closesAt: new Date(Date.now() + 14 * 86400000).toISOString() },
});
const pollDetail = await call('GET', `/api/community/threads/${pollThread.id}`, { cookie: people.team.cookie });
const optionIds = pollDetail.body.poll.options.map((o) => o.id);
for (const [i, who] of [people.member, people.mod, people.lea, people.ja].entries()) await call('POST', `/api/community/threads/${pollThread.id}/poll/vote`, { cookie: who.cookie, body: { optionIds: [optionIds[i % 2]] } });
const helpDetail = await call('GET', `/api/community/threads/${help.id}`, { cookie: people.team.cookie });
for (const post of helpDetail.body.posts.slice(0, 2)) {
  for (const [who, reaction] of [[people.member, 'thanks'], [people.mod, 'like'], [people.lea, 'insightful'], [people.ja, 'like']]) await call('POST', `/api/community/posts/${post.id}/reactions`, { cookie: who.cookie, body: { reaction, on: true } });
}
await call('POST', `/api/community/posts/${answer.id}/bookmark`, { cookie: people.member.cookie, body: { on: true } });
for (const [who, badge] of [[people.member, 'beta_tester'], [people.mod, 'accessibility_champion']]) await call('POST', `/api/community/mod/members/${who.id}/badges`, { cookie: people.team.cookie, body: { badge, on: true } });
const duplicate = await thread(people.ja, { categorySlug: 'help', title: 'Undo more than once?', body: 'Is there a way to undo twice on a board?' });
const merged = await call('POST', `/api/community/mod/threads/${duplicate.id}/merge`, { cookie: people.mod.cookie, body: { intoThreadId: help.id } });
if (merged.status !== 200) console.warn('[mock] merge fixture:', merged.status, JSON.stringify(merged.body));

console.log(`[mock] fixtures: threads ${release.id}–${long.id}; the 60-post thread is ${threadPath('en', long)}`);

// ---------------------------------------------------------------------------------------
// Serving

const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.rsc': 'text/x-component', '.webmanifest': 'application/manifest+json' };

async function file(path) {
  try {
    return (await stat(path)).isFile() ? path : null;
  } catch {
    return null;
  }
}

async function resolve(pathname) {
  const clean = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  const base = join(root, clean).replace(/\/$/, '');
  const found = (await file(`${base}.html`)) ?? (await file(join(base, 'index.html'))) ?? (await file(base));
  if (found) return found;
  // netlify.toml: /community/* and /<locale>/community/* are served from the language's shell.
  // netlify/edge-functions/community-route.ts: an address the community cannot draw is a 404.
  const community = pathname.match(/^(?:\/(fr|de|es|ja|pt-BR))?\/community\//);
  if (community && !communityAddress(pathname)?.known) return null;
  if (community) return join(root, community[1] ? `${community[1]}/community.html` : 'community.html');
  const challenge = pathname.match(/^(?:\/(fr|de|es|ja|pt-BR))?\/c\//);
  if (challenge) return join(root, challenge[1] ? `${challenge[1]}/c.html` : 'c.html');
  return null;
}

const readBody = (req) =>
  new Promise((done) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => done(chunks.length ? Buffer.concat(chunks) : undefined));
  });

function send(res, response, bodyBuffer) {
  const headers = {};
  response.headers.forEach((value, key) => {
    if (key === 'set-cookie') return;
    headers[key] = value;
  });
  const cookies = response.headers.getSetCookie?.() ?? [];
  if (cookies.length) headers['set-cookie'] = cookies;
  res.writeHead(response.status, headers);
  res.end(bodyBuffer);
}

const cookieFor = (who) => (people[who] ? `${people[who].cookie}; Path=/; HttpOnly; SameSite=Lax` : 'ob_session=; Path=/; Max-Age=0');

createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? '/', origin);
    const { pathname } = url;

    const as = pathname.match(/^\/__mock\/as\/(\w+)$/);
    if (as) {
      res.writeHead(302, { 'set-cookie': cookieFor(as[1]), location: url.searchParams.get('to') ?? '/community' });
      return res.end();
    }

    // Someone else replies to a thread (for trying the live "new replies" bar):
    //   /__mock/reply?thread=15&as=mod
    if (pathname === '/__mock/reply') {
      const who = people[url.searchParams.get('as') ?? 'mod'] ?? people.mod;
      await reset();
      const result = await call('POST', `/api/community/threads/${url.searchParams.get('thread')}/posts`, { cookie: who.cookie, body: { body: `A live reply from ${who.name}, posted while you were reading.` } });
      res.writeHead(result.status, { 'content-type': 'application/json' });
      return res.end(JSON.stringify(result.body));
    }

    // The provider buttons: a real round trip would leave for Apple, Google or Facebook.
    const start = pathname.match(/^\/api\/community\/auth\/(apple|google|facebook)\/start$/);
    if (start) {
      const back = new URL(url.searchParams.get('returnTo') || '/community', origin);
      back.searchParams.set('from', 'signin');
      res.writeHead(302, { 'set-cookie': cookieFor('member'), location: back.pathname + back.search });
      return res.end();
    }

    // A stand-in for the Anthropic Messages API: the "translation" is the post with a marker.
    if (pathname === '/__anthropic/v1/messages') {
      const body = JSON.parse(String(await readBody(req)));
      const post = /<post>\n([\s\S]*)\n<\/post>/.exec(body.messages?.[0]?.content ?? '')?.[1] ?? '';
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify({ content: [{ type: 'text', text: `*(Mock translation)* ${post}` }], stop_reason: 'end_turn' }));
    }

    if (pathname.startsWith('/api/community/')) {
      const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : await readBody(req);
      const init = { method: req.method, headers: req.headers };
      if (body) init.body = body;
      const request = new Request(origin + req.url, init);
      const response = await apiFor(pathname)(request);
      return send(res, response, Buffer.from(await response.arrayBuffer()));
    }

    const found = await resolve(pathname);
    if (!found) {
      const locale = pathname.match(/^\/(fr|de|es|ja|pt-BR)(?:\/|$)/)?.[1];
      res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
      return res.end(await readFile(join(root, locale ? `${locale}/404.html` : '404.html')));
    }

    // The edge function, on thread pages.
    const thread = parseThreadPath(pathname);
    if (thread && extname(found) === '.html') {
      const page = url.searchParams.get('page');
      const detail = await call('GET', `/api/community/threads/${thread.id}${page ? `?page=${page}` : ''}`);
      const shell = await readFile(found, 'utf8');
      if (detail.status === 200 && detail.body.redirect) {
        res.writeHead(301, { location: threadPath(thread.locale, detail.body.redirect) });
        return res.end();
      }
      if (detail.status === 200) {
        const wanted = threadPath(thread.locale, detail.body.thread);
        if (wanted !== pathname) {
          res.writeHead(301, { location: wanted + url.search });
          return res.end();
        }
        const html = renderThreadPage(shell, thread.locale, detail.body) ?? shell;
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        return res.end(html);
      }
      res.writeHead(detail.status === 404 ? 404 : 200, { 'content-type': 'text/html; charset=utf-8' });
      return res.end(detail.status === 404 ? shell.replace('</head>', '<meta name="robots" content="noindex, follow"/></head>') : shell);
    }

    res.writeHead(200, { 'content-type': types[extname(found)] ?? 'application/octet-stream' });
    res.end(await readFile(found));
  } catch (error) {
    console.error('[mock]', error);
    res.writeHead(500, { 'content-type': 'text/plain' });
    res.end('mock error');
  }
}).listen(port, '127.0.0.1', () => console.log(`[mock] OutBrick Community on ${origin}/community`));
