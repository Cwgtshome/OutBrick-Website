// Search across thread titles, posts and the FAQ.
//
// Latin-script queries use Postgres full-text search in the 'simple' configuration (no
// stemming, so it treats all six languages alike), with every word matched as a prefix:
// "undo" finds "undos". Titles also match by trigram word similarity, which forgives a typo.
// Japanese has no spaces between words, so full-text search cannot split it; a query with
// Japanese (or other CJK) characters matches by substring instead (ILIKE, which the trigram
// indexes serve for three characters or more).
//
// Ranking, highest first: a thread whose title matches (solved ones above unsolved), then FAQ
// answers, then threads that match in their opening post, then replies (a reply marked as the
// solution above others); newest first within each.
//
// Excerpts are built here, not by ts_headline: the snippet is cut from plain text, every
// piece is HTML-escaped, and only then are the matched pieces wrapped in <mark>. Nothing from a
// post is ever passed through as markup.

import type { CategoryKind, CommunityLocale, SearchHit, SearchResponse } from '../../lib/community/contract.ts';
import { communityLocales, pageSize } from '../../lib/community/contract.ts';
import { ipHash } from './db.ts';
import { int, json } from './http.ts';
import { escapeHtml, plainText } from './markdown.ts';
import { Params, iso, num, run, txt } from './forum.ts';
import { rateLimitOrThrow } from './threads.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

const cjk = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;

/** The words of a query, trimmed of surrounding punctuation; at most eight. */
export function queryTerms(q: string): string[] {
  return q
    .split(/[\s　]+/)
    .map((t) => t.replace(/^[\p{P}\p{S}]+|[\p{P}\p{S}]+$/gu, '').slice(0, 50))
    .filter(Boolean)
    .slice(0, 8);
}

/** A to_tsquery string matching every term as a prefix, or '' when nothing searchable is left. */
export function tsQuery(terms: string[]): string {
  return terms
    .map((t) => t.replace(/[&|!():*<>'"\\\s]/g, '').toLowerCase())
    .filter(Boolean)
    .map((t) => `'${t}':*`)
    .join(' & ');
}

const likePattern = (term: string) => `%${term.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;

/**
 * About 200 characters of `text` around the first match, escaped, with <mark> around every
 * match of a term inside it.
 */
export function excerpt(text: string, terms: string[], length = 200): string {
  const plain = text.replace(/\s+/g, ' ').trim();
  const pattern = terms.length
    ? new RegExp(
        [...terms]
          .sort((a, b) => b.length - a.length)
          .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
          .join('|'),
        'giu',
      )
    : null;
  let start = 0;
  if (pattern) {
    const first = pattern.exec(plain);
    pattern.lastIndex = 0;
    if (first && first.index > 60) {
      start = first.index - 60;
      const space = plain.indexOf(' ', start);
      if (space >= 0 && space < first.index) start = space + 1;
    }
  }
  let end = Math.min(plain.length, start + length);
  if (end < plain.length) {
    const space = plain.lastIndexOf(' ', end);
    if (space > start + length / 2) end = space;
  }
  const window = plain.slice(start, end);
  let html = '';
  let last = 0;
  if (pattern) {
    for (const m of window.matchAll(pattern)) {
      if (!m[0]) continue;
      html += escapeHtml(window.slice(last, m.index)) + `<mark>${escapeHtml(m[0])}</mark>`;
      last = m.index + m[0].length;
    }
  }
  html += escapeHtml(window.slice(last));
  return `${start > 0 ? '…' : ''}${html}${end < plain.length ? '…' : ''}`;
}

export async function search(query: { q: string; category?: string | null; language?: string | null; page?: string | null }): Promise<SearchResponse> {
  const q = query.q.trim().slice(0, 200);
  const terms = queryTerms(q);
  const empty: SearchResponse = { query: q, hits: [], page: 1, pages: 1, total: 0 };
  if (!terms.length) return empty;

  const useLike = cjk.test(q);
  const ts = tsQuery(terms);
  if (!useLike && !ts) return empty;

  const p = new Params();
  const tsParam = ts ? p.add(ts) : '';
  const qParam = p.add(q);
  const likeParams = useLike ? terms.map((t) => p.add(likePattern(t))) : [];
  const likeAll = (column: string) => likeParams.map((lp) => `${column} ILIKE ${lp}`).join(' AND ');

  const titleMatch = [ts && `to_tsvector('simple', t.title) @@ to_tsquery('simple', ${tsParam})`, !useLike && `${qParam} <% t.title`, useLike && likeAll('t.title')]
    .filter(Boolean)
    .join(' OR ');
  const bodyMatch = [ts && `p.search @@ to_tsquery('simple', ${tsParam})`, useLike && likeAll('p.body_md')].filter(Boolean).join(' OR ');
  const faqMatch = [ts && `f.search @@ to_tsquery('simple', ${tsParam})`, useLike && likeAll(`(f.question || ' ' || f.answer_md)`)].filter(Boolean).join(' OR ');

  const threadFilters = ['t.deleted_at IS NULL', 'NOT t.hidden', 'NOT t.pending', 'NOT c.archived'];
  let faqFilter = 'TRUE';
  if (query.category) threadFilters.push(`c.slug = ${p.add(query.category)}`);
  const language = communityLocales.includes(query.language as CommunityLocale) ? (query.language as CommunityLocale) : null;
  if (language) {
    const lp = p.add(language);
    threadFilters.push(`t.language = ${lp}`);
    faqFilter = `f.locale = ${lp}`;
  }
  // A category filter narrows to forum threads; the FAQ has no category.
  if (query.category) faqFilter = 'FALSE';
  const visibleThread = threadFilters.join(' AND ');

  const union = `
    SELECT 'thread' AS type, t.id::int AS thread_id, t.slug, t.title, op.body_md AS body, NULL::int AS post_number,
           c.slug AS cat_slug, c.kind AS cat_kind, t.language, (t.solved_post_id IS NOT NULL) AS solved, t.created_at,
           CASE WHEN (${titleMatch}) THEN 4 ELSE 2 END + CASE WHEN t.solved_post_id IS NOT NULL THEN 1 ELSE 0 END AS score
      FROM threads t JOIN categories c ON c.id = t.category_id
      JOIN posts op ON op.thread_id = t.id AND op.number = 1
     WHERE ${visibleThread} AND NOT op.hidden AND NOT op.pending AND op.deleted_at IS NULL
       AND ((${titleMatch}) OR (${bodyMatch.replace(/\bp\./g, 'op.')}))
    UNION ALL
    SELECT 'post', t.id::int, t.slug, t.title, p.body_md, p.number, c.slug, c.kind, t.language,
           (t.solved_post_id = p.id), p.created_at,
           1 + CASE WHEN t.solved_post_id = p.id THEN 1.5 ELSE 0 END
      FROM posts p JOIN threads t ON t.id = p.thread_id JOIN categories c ON c.id = t.category_id
     WHERE ${visibleThread} AND p.number > 1 AND NOT p.hidden AND NOT p.pending AND p.deleted_at IS NULL AND (${bodyMatch})
    UNION ALL
    SELECT 'faq', ft.id::int, ft.slug, f.question, f.answer_md, NULL::int, NULL, NULL, f.locale, false, f.created_at, 3
      FROM faq_entries f LEFT JOIN threads ft ON ft.id = f.thread_id AND ft.deleted_at IS NULL AND NOT ft.hidden
     WHERE ${faqFilter} AND (${faqMatch})`;

  const [countRow] = await run(`SELECT count(*)::int AS n FROM (${union}) hits`, p.values);
  const total = num(countRow?.n);
  const pages = Math.max(1, Math.ceil(total / pageSize.search));
  const page = int(query.page, 1, 1, pages);
  const rows = await run(
    `SELECT * FROM (${union}) hits ORDER BY score DESC, created_at DESC, thread_id DESC NULLS LAST, post_number
      LIMIT ${pageSize.search} OFFSET ${(page - 1) * pageSize.search}`,
    p.values,
  );
  const hits: SearchHit[] = rows.map((r) => ({
    type: r.type as SearchHit['type'],
    threadId: r.thread_id == null ? null : num(r.thread_id),
    slug: (r.slug as string | null) ?? null,
    title: String(r.title),
    excerptHtml: excerpt(plainText(txt(r.body)), terms),
    postNumber: r.post_number == null ? null : num(r.post_number),
    category: r.cat_slug == null ? null : { slug: txt(r.cat_slug), kind: r.cat_kind as CategoryKind },
    language: r.language as CommunityLocale,
    solved: Boolean(r.solved),
    createdAt: iso(r.created_at),
  }));
  return { query: q, hits, page, pages, total };
}

export const getSearch: Handler = async (req, _params, url) => {
  const s = url.searchParams;
  const q = s.get('q') ?? '';
  if (q.trim()) await rateLimitOrThrow([[`search:ip:${ipHash(req)}`, 60, 60]]);
  return json(await search({ q, category: s.get('category'), language: s.get('language'), page: s.get('page') }));
};
