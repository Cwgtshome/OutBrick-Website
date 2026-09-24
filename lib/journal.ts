/**
 * Derived views of the journal (lib/blog.ts): the shelves and their notes,
 * category and tag addresses, reading order and neighbours. Nothing here
 * changes an article; it only groups, sorts and names them.
 *
 * scripts/postbuild.mjs repeats `slugify` when it writes the per-category
 * feeds and the search index, so the two must stay the same function.
 */

import { articles, type BlogArticle } from './blog';

/** Lower-case, ASCII, hyphenated: "Well-being" → "well-being", "Game craft" → "game-craft". */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Shelf order and a one-line description of each category. */
export const shelves: { category: string; note: string }[] = [
  { category: 'Player habits', note: 'How play fits a real day: sleep, attention, rituals and the decision to stop.' },
  { category: 'Success stories', note: 'Games that made the medium feel larger, read from their own records.' },
  { category: 'Game craft', note: 'Rules, friction and difficulty, from the bench.' },
  { category: 'Inclusive design', note: 'Widening the route into a challenge without shrinking the challenge.' },
  { category: 'Learning through play', note: 'Curiosity before explanation.' },
  { category: 'Social play', note: 'Shared time, even when players are apart.' },
  { category: 'OutBrick practice', note: 'Notes on how the game itself is made.' },
];

export type Shelf = { category: string; slug: string; note: string; tone: string; articles: BlogArticle[] };

/** "7 min read" → 7. */
export function minutesOf(article: BlogArticle): number {
  return Number.parseInt(article.readingTime, 10) || 0;
}

const position = new Map(articles.map((article, index) => [article.slug, index]));
const time = (human: string) => new Date(`${human} 12:00:00 UTC`).getTime() || 0;

/** Newest first. Stories published the same day keep the order they were added in, latest first. */
export function byNewest(a: BlogArticle, b: BlogArticle): number {
  return time(b.publishedAt) - time(a.publishedAt) || position.get(b.slug)! - position.get(a.slug)!;
}

export function categoryPath(category: string): string {
  return `/blog/category/${slugify(category)}`;
}

export function getShelves(): Shelf[] {
  return shelves.map(({ category, note }) => {
    const onShelf = articles.filter((article) => article.category === category).sort(byNewest);
    return { category, note, slug: slugify(category), tone: onShelf[0]?.categoryColor ?? 'purple', articles: onShelf };
  });
}

export function getShelf(slug: string): Shelf | undefined {
  return getShelves().find((shelf) => shelf.slug === slug);
}

export type Tag = { slug: string; label: string; articles: BlogArticle[] };

/**
 * Every tag, grouped without regard to case ("Tetris" and "tetris" are one tag),
 * labelled with the spelling used most often.
 */
export function getTags(): Tag[] {
  type Group = { spellings: Map<string, number>; articles: BlogArticle[] };
  const groups = new Map<string, Group>();
  for (const article of articles) {
    for (const tag of new Set(article.tags)) {
      const slug = slugify(tag);
      const group: Group = groups.get(slug) ?? { spellings: new Map(), articles: [] };
      group.spellings.set(tag, (group.spellings.get(tag) ?? 0) + 1);
      if (!group.articles.includes(article)) group.articles.push(article);
      groups.set(slug, group);
    }
  }
  return [...groups].map(([slug, group]) => ({
    slug,
    label: [...group.spellings].sort((a, b) => b[1] - a[1] || (b[0] < a[0] ? -1 : 1))[0]![0],
    articles: group.articles.sort(byNewest),
  }));
}

/** Tags carried by at least two stories get a page of their own; the rest point at search. */
export const MIN_TAG_PAGE = 2;

export function getTagPages(): Tag[] {
  return getTags().filter((tag) => tag.articles.length >= MIN_TAG_PAGE);
}

/** Where a tag leads: its own page, or a search for it when one story is all it has. */
export function tagHref(tag: string): string {
  const slug = slugify(tag);
  const page = getTagPages().find((entry) => entry.slug === slug);
  return page ? `/blog/tag/${slug}` : `/blog?q=${encodeURIComponent(tag)}`;
}

/** Reading order for "previous / next": the order the stories sit in lib/blog.ts. */
export function getNeighbours(slug: string): { previous?: BlogArticle; next?: BlogArticle } {
  const index = position.get(slug);
  if (index === undefined) return {};
  return { previous: articles[index - 1], next: articles[index + 1] };
}

/** Four guides a new reader should start with. */
export const startHere = [
  'how-to-solve-sliding-block-puzzles',
  'colour-sort-puzzle-tips',
  'relaxing-puzzle-games-what-makes-one-calm',
  'why-two-minute-puzzles-feel-good',
]
  .map((slug) => articles.find((article) => article.slug === slug))
  .filter((article): article is BlogArticle => Boolean(article));
