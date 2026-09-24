/**
 * Shared pieces of the journal: inline-link rendering for article copy, date
 * helpers for metadata, and the two ways a story is listed (a row on a shelf,
 * or a card). Used by /blog, /blog/[slug] and the author pages.
 */

import { Fragment, type ReactNode } from 'react';
import { getAuthor, type BlogArticle } from '../../lib/blog';

const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Render copy that may carry [label](/path) links. */
export function Rich({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(linkPattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    const href = match[2]!;
    const external = /^https?:/.test(href);
    parts.push(
      <a key={`${href}-${index}`} href={href} {...(external ? { rel: 'noreferrer' } : {})}>
        {match[1]}
      </a>,
    );
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((part, index) => <Fragment key={index}>{part}</Fragment>)}</>;
}

/** The same copy with its link markup removed — for meta tags and JSON-LD. */
export function plain(text: string): string {
  return text.replace(linkPattern, '$1');
}

/** "September 4, 2026" → "2026-09-04". */
export function isoDate(human: string): string {
  const parsed = new Date(`${human} 12:00:00 UTC`);
  if (Number.isNaN(parsed.getTime())) return human;
  return parsed.toISOString().slice(0, 10);
}

export function categorySlug(category: string): string {
  return `category-${category.toLowerCase().replaceAll(' ', '-')}`;
}

/** One story on a shelf: number, headline, dek, meta, and a small framed thumbnail. */
export function StoryRow({ article, n, eager = false }: { article: BlogArticle; n: number; eager?: boolean }) {
  const author = getAuthor(article.authorId);
  return (
    <li className="ed-row" data-tone={article.categoryColor}>
      <span className="ed-row-n" aria-hidden="true">{String(n).padStart(2, '0')}</span>
      <div>
        <h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3>
        <p>{article.dek}</p>
        <p className="ed-meta">{author.name} · {article.readingTime}</p>
      </div>
      <div className="ed-thumb" aria-hidden="true">
        <img src={article.image} alt="" width={1600} height={900} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </li>
  );
}

/** A story as a white card with a coloured foot. */
export function StoryCard({ article, headingLevel = 3 }: { article: BlogArticle; headingLevel?: 2 | 3 }) {
  const author = getAuthor(article.authorId);
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <article className="ed-card ed-lift" data-tone={article.categoryColor}>
      <div className="ed-card-top">
        <span className="ed-chip">{article.category}</span>
        <span className="ed-meta">{article.readingTime}</span>
      </div>
      <div className="ed-card-body">
        <div className="ed-thumb" aria-hidden="true">
          <img src={article.image} alt="" width={1600} height={900} loading="lazy" decoding="async" />
        </div>
        <Heading className="ed-h3"><a href={`/blog/${article.slug}`}>{article.title}</a></Heading>
        <p>{article.dek}</p>
        <p className="ed-meta">By {author.name}</p>
      </div>
    </article>
  );
}
