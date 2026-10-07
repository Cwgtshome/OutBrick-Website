// The release bot: when Apple publishes a new version of OutBrick, announce it in the forum.
//
// Each run asks Apple's public iTunes Lookup API for the app in five storefronts. The United
// States storefront is the authority on which version is current (a phased release can reach
// one storefront an hour before another; the other languages simply join in if their notes
// are already the same version). When that version is not yet in `app_releases`:
//
//   1. one Announcements thread, "OutBrick 5.1 is out", authored by the OutBrick account
//      (releases@outbrick.site, seeded by the core migration), whose opening post carries the
//      English notes and links to the App Store and /whats-new;
//   2. one reply per other language whose storefront already has that version, each opening
//      with a heading naming the language and carrying that storefront's own notes;
//   3. a 'release' notification for every member who has not muted Announcements.
//
// All of it is one transaction that starts by claiming the version in `app_releases` (its
// primary key), and `threads.release_version` is unique as well, so two overlapping runs
// cannot both post. On the very first run, with `app_releases` empty, the current version is
// recorded without posting, so switching the forum on does not announce an old release.
//
// The pure parts (reading the lookup, deciding, writing the posts) are exported for tests;
// `runReleaseBot` takes the fetch to use, so tests never touch the network.

import type { CommunityLocale } from '../../lib/community/contract.ts';
import { slugify, transaction } from './db.ts';
import { modLog, num, refreshThreadCounters, renderBody, run } from './forum.ts';
import { notifyRelease } from './notifications.ts';

export const APP_ID = '6807997465';
export const RELEASES_EMAIL = 'releases@outbrick.site';

export const storefronts: readonly { country: string; lang: string; locale: CommunityLocale; language: string }[] = [
  { country: 'us', lang: 'en', locale: 'en', language: 'English' },
  { country: 'fr', lang: 'fr', locale: 'fr', language: 'Français' },
  { country: 'de', lang: 'de', locale: 'de', language: 'Deutsch' },
  { country: 'es', lang: 'es', locale: 'es', language: 'Español' },
  { country: 'jp', lang: 'ja', locale: 'ja', language: '日本語' },
];

export type StorefrontRelease = {
  locale: CommunityLocale;
  version: string;
  releaseNotes: string;
  releasedAt: string | null;
  storeUrl: string | null;
};

type FetchLike = (url: string, init?: RequestInit) => Promise<Response>;

const versionRe = /^\d{1,4}(?:\.\d{1,4}){0,3}$/;

export function lookupUrl(country: string, lang: string): string {
  return `https://itunes.apple.com/lookup?id=${APP_ID}&country=${country}&lang=${lang}`;
}

/** The app's entry in one Lookup response, or null if the response is not what we expect. */
export function parseLookup(locale: CommunityLocale, data: unknown): StorefrontRelease | null {
  const results = (data as { results?: unknown[] } | null)?.results;
  const app = Array.isArray(results)
    ? (results.find((r) => {
        const id = (r as Record<string, unknown> | null)?.trackId;
        return id == null || String(id as string | number) === APP_ID;
      }) as Record<string, unknown> | undefined)
    : undefined;
  if (!app) return null;
  const version = typeof app.version === 'string' ? app.version.trim() : '';
  if (!versionRe.test(version)) return null;
  const storeUrl = typeof app.trackViewUrl === 'string' && app.trackViewUrl.startsWith('https://apps.apple.com/') ? app.trackViewUrl.split('?')[0] : null;
  return {
    locale,
    version,
    releaseNotes: typeof app.releaseNotes === 'string' ? app.releaseNotes.replace(/\r\n?/g, '\n').trim().slice(0, 4000) : '',
    releasedAt: typeof app.currentVersionReleaseDate === 'string' ? app.currentVersionReleaseDate : null,
    storeUrl,
  };
}

/** Ask every storefront; a storefront that fails is left out (and the US one failing stops the run). */
export async function fetchStorefronts(fetchFn: FetchLike): Promise<StorefrontRelease[]> {
  const results = await Promise.all(
    storefronts.map(async (s) => {
      try {
        const res = await fetchFn(lookupUrl(s.country, s.lang), { headers: { accept: 'application/json' }, signal: AbortSignal.timeout(8000) });
        if (!res.ok) return null;
        return parseLookup(s.locale, await res.json());
      } catch {
        return null;
      }
    }),
  );
  return results.filter((r): r is StorefrontRelease => r !== null);
}

/** Compare dotted versions numerically: "5.10" is newer than "5.9". */
export function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d) return d;
  }
  return 0;
}

export type ReleasePlan =
  | { action: 'none'; reason: string }
  | { action: 'record'; version: string; reason: string }
  | { action: 'post'; version: string };

/** What to do, given the versions already known and what the storefronts say now. */
export function planRelease(known: string[], found: StorefrontRelease[]): ReleasePlan {
  const us = found.find((f) => f.locale === 'en');
  if (!us) return { action: 'none', reason: 'The US storefront did not answer.' };
  if (known.includes(us.version)) return { action: 'none', reason: `${us.version} is already known.` };
  if (!known.length) return { action: 'record', version: us.version, reason: 'First run: recording the current version without announcing it.' };
  const newest = [...known].sort(compareVersions).at(-1)!;
  if (compareVersions(us.version, newest) < 0) return { action: 'record', version: us.version, reason: `${us.version} is older than ${newest}; recorded, not announced.` };
  return { action: 'post', version: us.version };
}

/** Apple's notes as Markdown: its "•" bullets become list items, and nothing else changes. */
export function notesToMarkdown(notes: string): string {
  return notes
    .split('\n')
    .map((line) => line.replace(/^\s*[•●▪◦‣・]\s*/, '- '))
    .join('\n')
    .trim();
}

export type ReleasePosts = { title: string; opening: string; translations: { locale: CommunityLocale; body: string }[] };

export function buildReleasePosts(version: string, found: StorefrontRelease[]): ReleasePosts {
  const us = found.find((f) => f.locale === 'en' && f.version === version);
  const storeUrl = us?.storeUrl ?? `https://apps.apple.com/app/id${APP_ID}`;
  const notes = us?.releaseNotes ? notesToMarkdown(us.releaseNotes) : 'Apple has published the update; its notes will be on the App Store.';
  const opening = [
    `OutBrick ${version} is on the App Store now.`,
    '',
    '## English',
    '',
    notes,
    '',
    `[Get OutBrick ${version} on the App Store](${storeUrl}) · [Every release, on What’s New](/whats-new)`,
  ].join('\n');
  const translations = storefronts
    .filter((s) => s.locale !== 'en')
    .map((s) => ({ s, f: found.find((f) => f.locale === s.locale && f.version === version) }))
    .filter(({ f }) => f && f.releaseNotes)
    .map(({ s, f }) => ({ locale: s.locale, body: `## ${s.language}\n\n${notesToMarkdown(f!.releaseNotes)}` }));
  return { title: `OutBrick ${version} is out`, opening, translations };
}

export type ReleaseRunResult = { action: 'none' | 'record' | 'post' | 'raced'; version?: string; threadId?: number; notified?: number; reason?: string };

export async function runReleaseBot(fetchFn: FetchLike): Promise<ReleaseRunResult> {
  const found = await fetchStorefronts(fetchFn);
  const known = (await run(`SELECT version FROM app_releases`)).map((r) => String(r.version));
  const plan = planRelease(known, found);
  if (plan.action === 'none') return { action: 'none', reason: plan.reason };
  const us = found.find((f) => f.locale === 'en')!;

  if (plan.action === 'record') {
    await run(`INSERT INTO app_releases (version, released_at) VALUES ($1, $2) ON CONFLICT (version) DO NOTHING`, [plan.version, us.releasedAt]);
    return { action: 'record', version: plan.version, reason: plan.reason };
  }

  const [bot] = await run(`SELECT id::int AS id FROM members WHERE lower(email) = $1 AND deleted_at IS NULL`, [RELEASES_EMAIL]);
  const [category] = await run(`SELECT id::int AS id FROM categories WHERE kind = 'announcements' ORDER BY position LIMIT 1`);
  if (!bot || !category) throw new Error('The release account or the Announcements category is missing.');
  const botId = num(bot.id);
  const categoryId = num(category.id);
  const posts = buildReleasePosts(plan.version, found);
  const opening = await renderBody(posts.opening);
  const translations = await Promise.all(posts.translations.map(async (t) => ({ ...t, rendered: await renderBody(t.body) })));

  return transaction(async (q) => {
    const claimed = await q(`INSERT INTO app_releases (version, released_at) VALUES ($1, $2) ON CONFLICT (version) DO NOTHING RETURNING version`, [
      plan.version,
      us.releasedAt,
    ]);
    if (!claimed.length) return { action: 'raced' as const, version: plan.version };
    const [thread] = await q(
      `INSERT INTO threads (category_id, author_id, title, slug, language, release_version, last_poster_id)
       VALUES ($1, $2, $3, $4, 'en', $5, $2) RETURNING id::int AS id`,
      [categoryId, botId, posts.title, slugify(posts.title), plan.version],
    );
    const threadId = num(thread.id);
    await q(`INSERT INTO posts (thread_id, author_id, number, body_md, body_html, has_link) VALUES ($1, $2, 1, $3, $4, $5)`, [
      threadId,
      botId,
      posts.opening,
      opening.html,
      opening.hasLink,
    ]);
    let number = 1;
    for (const t of translations) {
      number++;
      await q(`INSERT INTO posts (thread_id, author_id, number, body_md, body_html, has_link) VALUES ($1, $2, $3, $4, $5, $6)`, [
        threadId,
        botId,
        number,
        t.body,
        t.rendered.html,
        t.rendered.hasLink,
      ]);
    }
    await refreshThreadCounters(q, threadId);
    await q(`UPDATE app_releases SET thread_id = $1 WHERE version = $2`, [threadId, plan.version]);
    await modLog(q, null, 'release.announce', 'thread', threadId, '', { version: plan.version });
    const notified = await notifyRelease(q, { threadId, categoryId, actorId: botId, version: plan.version });
    return { action: 'post' as const, version: plan.version, threadId, notified };
  });
}
