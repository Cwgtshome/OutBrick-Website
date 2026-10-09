// Level help (/support/levels): the community threads about one Journey level.
//
//   GET /api/community/levels/:n/threads   public: { level, threads: LevelThread[] }
//
// A thread is about level n when its bug report names that level (the app's "Report a bug" fills
// it in) or its title says so in any of the site's languages ("Level 512", "niveau 512",
// "nivel 512", "nível 512", "fase 512", "レベル512", "ステージ512"). Only visible threads: not
// deleted, hidden, pending or merged away. Newest activity first, at most 30.

import { iso, num } from './forum.ts';
import { sql } from './db.ts';
import { json, notFound, type Route } from './http.ts';

export const LEVEL_MAX = 100000;

/** The title pattern for level n: a level word, then the number not followed by another digit. */
export function levelTitlePattern(n: number): string {
  return `(level|lvl|niveau|nivel|nível|fase|stufe|レベル|ステージ)\\s*#?\\s*${n}(?![0-9])`;
}

export type LevelThread = {
  id: number;
  slug: string;
  title: string;
  category: string;
  language: string;
  status: string | null;
  solved: boolean;
  replies: number;
  lastPostAt: string;
};

export const getLevelThreads: Route['run'] = async (_req, params) => {
  const n = Number(params.n);
  if (!Number.isInteger(n) || n < 1 || n > LEVEL_MAX) throw notFound('No such level.');
  const rows = await sql`
    SELECT t.id::int, t.slug, t.title, c.slug AS category, t.language, t.status, (t.solved_post_id IS NOT NULL) AS solved, t.reply_count, t.last_post_at
      FROM threads t JOIN categories c ON c.id = t.category_id
     WHERE t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending AND t.merged_into IS NULL
       AND ((t.bug->>'level') = ${String(n)} OR t.title ~* ${levelTitlePattern(n)})
     ORDER BY t.last_post_at DESC
     LIMIT 30`;
  const threads: LevelThread[] = rows.map((r) => ({
    id: num(r.id),
    slug: String(r.slug),
    title: String(r.title),
    category: String(r.category),
    language: String(r.language),
    status: (r.status as string | null) ?? null,
    solved: Boolean(r.solved),
    replies: num(r.reply_count),
    lastPostAt: iso(r.last_post_at),
  }));
  return json({ level: n, threads }, { headers: { 'Cache-Control': 'public, max-age=120' } });
};

export const levelRoutes = (base: string): Route[] => [{ method: 'GET', pattern: `${base}/levels/:n/threads`, run: getLevelThreads }];
