/**
 * Shared pieces of the journal: inline-link rendering for article copy, date
 * helpers for metadata, and the two ways a story is listed (a row on a shelf,
 * or a card). Used by /blog, /blog/[slug] and the author pages.
 */

import { Fragment, type ReactNode } from 'react';
import { getAuthor, type BlogArticle } from '../../../lib/blog';
import { getShelves, minutesOf } from '../../../lib/journal';
import { siteUrl } from '../../../lib/site';

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
export function StoryRow({
  article,
  n,
  eager = false,
  order,
  pinned = false,
}: {
  article: BlogArticle;
  n: number;
  eager?: boolean;
  /** Position in the default (newest-first) order, for the shelf sort on /blog. */
  order?: number;
  /** Already shown above as the lead or a runner-up: listed only when the shelves are filtered. */
  pinned?: boolean;
}) {
  const author = getAuthor(article.authorId);
  return (
    <li
      className="ed-row"
      data-tone={article.categoryColor}
      {...(order !== undefined ? { 'data-order': order, 'data-min': minutesOf(article) } : {})}
      {...(pinned ? { 'data-pinned': '' } : {})}
    >
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

/** RSS links: the whole journal, and one feed per shelf (written by scripts/postbuild.mjs). */
export function FollowJournal({ current }: { current?: string }) {
  const shelves = getShelves();
  return (
    <section className="ed-band-ink2 ed-band-tight" aria-labelledby="follow-title">
      <div className="ed-wrap ed-follow">
        <div className="ed-follow-slab">
          <span className="ed-follow-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26"><circle cx="6" cy="18" r="2.4" fill="currentColor" /><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" /></svg>
          </span>
          <div>
            <p className="ed-label">Follow the journal</p>
            <h2 id="follow-title" className="ed-h3" style={{ marginTop: 10 }}>New stories, in your feed reader.</h2>
            <p className="ed-follow-note">
              Rather not give an email? Paste the address into any RSS reader and each new story arrives as it is published.
            </p>
            <div className="ed-actions" style={{ marginTop: 20 }}>
              <a className="ed-btn" href="/feed.xml" type="application/rss+xml">Subscribe to every story</a>
            </div>
          </div>
        </div>
        <div>
          <p className="ed-label no-mark">Or follow one shelf</p>
          <ul className="ed-follow-list">
            {shelves.map((shelf) => (
              <li key={shelf.slug} data-tone={shelf.tone}>
                <a href={`/blog/category/${shelf.slug}/feed.xml`} type="application/rss+xml" aria-current={current === shelf.slug ? 'true' : undefined}>
                  <span className="ed-follow-dot" aria-hidden="true" />
                  {shelf.category}
                  <span className="ed-sr"> RSS feed</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** `CollectionPage` + `ItemList` for a category or tag page. */
export function collectionData({ path, name, description, stories }: { path: string; name: string; description: string; stories: BlogArticle[] }) {
  const url = `${siteUrl}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#page`,
    url,
    name,
    description,
    inLanguage: 'en',
    isPartOf: { '@type': 'Blog', '@id': `${siteUrl}/blog#blog`, name: 'The OutBrick Journal' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: stories.length,
      itemListElement: stories.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/blog/${article.slug}`,
        name: article.title,
      })),
    },
  };
}

export function breadcrumbData(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `${siteUrl}${item.path}` })),
  };
}
