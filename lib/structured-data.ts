/**
 * The site's structured data (schema.org JSON-LD), in one place.
 *
 * Every page carries the same small entity graph — the organisation, its founder and the
 * website — rendered once by app/site-document.tsx. Pages then add their own nodes (the page
 * itself, its breadcrumb trail, an article, the game) and point back at the shared ones by
 * `@id` instead of repeating them, so a search engine reads one OutBrick, one Mourad Hamdi and
 * one game across the whole domain.
 *
 * Rules the builders keep (Google Search Central, "General structured data guidelines"):
 * mark up only what the page shows; never invent a rating, review, price or award. There is
 * no `aggregateRating` anywhere: the App Store record has too few ratings, and no page shows
 * one (see {@link appAggregateRating}). scripts/audit-seo.mjs checks every block after a build.
 */

import stats from './generated/app-store.json';
import { authors } from './blog';
import { siteUrl, socialProfiles } from './site';
import { APP_STORE_URL } from '../app/store-badge';

/** Stable identifiers for the entities every page shares. */
export const ids = {
  organization: `${siteUrl}/#organization`,
  logo: `${siteUrl}/#logo`,
  website: `${siteUrl}/#website`,
  founder: `${siteUrl}/#founder`,
  app: `${siteUrl}/#app`,
  blog: `${siteUrl}/blog#blog`,
} as const;

export const ref = (id: string) => ({ '@id': id });

type Node = Record<string, unknown>;

/** The App Store record written by scripts/prebuild.mjs; any field can be null if the lookup failed. */
type AppStoreRecord = {
  averageUserRating: number;
  userRatingCount: number;
  version: string | null;
  releaseDate?: string | null;
  currentVersionReleaseDate?: string | null;
  minimumOsVersion?: string | null;
  languages?: string[] | null;
  genres?: string[] | null;
  contentRating?: string | null;
};
const record = stats as unknown as AppStoreRecord;

/**
 * Last known values from Apple's record (iTunes Lookup, 24 September 2026), used only when the
 * build could not reach Apple. Nothing here is a guess: each one is what the record said.
 */
const appStoreFallback = {
  version: '4.2',
  releaseDate: '2026-09-06T07:00:00Z',
  currentVersionReleaseDate: '2026-09-22T23:48:59Z',
  minimumOsVersion: '15.0',
  languages: ['nl', 'en', 'fr', 'de', 'it', 'ja', 'ko', 'pt', 'ru', 'zh', 'es', 'tr'],
  genres: ['Casual', 'Puzzle'],
  contentRating: '4+',
};

/** Mourad Hamdi's App Store developer page: the one public profile of his that exists today. */
const FOUNDER_APP_STORE_PROFILE = 'https://apps.apple.com/us/developer/mourad-hamdi/id1831080974';

/** Languages the site itself is published in (home page and play guide; the rest is English). */
export const siteLanguages = ['en', 'fr', 'de', 'es', 'ja'];

const founderAuthor = authors.find((author) => author.id === 'mourad-hamdi')!;

// ---------------------------------------------------------------------------------------
// Shared entities

export function organizationNode(): Node {
  return {
    '@type': 'Organization',
    '@id': ids.organization,
    name: 'OutBrick',
    alternateName: 'OutBrick: Block Sort Puzzle',
    url: `${siteUrl}/`,
    logo: {
      '@type': 'ImageObject',
      '@id': ids.logo,
      url: `${siteUrl}/icon.png`,
      contentUrl: `${siteUrl}/icon.png`,
      width: 1024,
      height: 1024,
      caption: 'The OutBrick app icon',
    },
    image: ref(ids.logo),
    description: 'The studio behind OutBrick: Block Sort Puzzle, a relaxed sliding-brick colour-sort puzzle, and the OutBrick Journal on puzzle design and calmer play.',
    founder: ref(ids.founder),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: `${siteUrl}/contact`,
      availableLanguage: siteLanguages,
    },
    knowsAbout: ['puzzle game design', 'gaming habits', 'game accessibility', 'player experience'],
    ...(socialProfiles.length ? { sameAs: socialProfiles.map((profile) => profile.url) } : {}),
  };
}

export function founderNode(): Node {
  return {
    '@type': 'Person',
    '@id': ids.founder,
    name: founderAuthor.name,
    jobTitle: 'Founder & CEO',
    description: founderAuthor.bio,
    url: `${siteUrl}/authors/${founderAuthor.id}`,
    worksFor: ref(ids.organization),
    sameAs: [FOUNDER_APP_STORE_PROFILE],
  };
}

export function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    name: 'OutBrick',
    alternateName: 'outbrick.site',
    url: `${siteUrl}/`,
    description: 'The official site of OutBrick: Block Sort Puzzle, a relaxed sliding-brick colour-sort puzzle, and the OutBrick Journal.',
    inLanguage: siteLanguages,
    publisher: ref(ids.organization),
    // The journal's search answers /blog?q=… (app/(en)/blog/journal-finder.tsx reads the query
    // after load and lists matching stories), so the site can declare it.
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** The graph every page carries, rendered by app/site-document.tsx. */
export function siteGraph(): Node {
  return { '@context': 'https://schema.org', '@graph': [organizationNode(), founderNode(), websiteNode()] };
}

/**
 * A journal author, as the node an article's `author` or a profile page's `mainEntity` uses.
 * Mourad Hamdi is the founder node itself; the editorial desk is an Organization under OutBrick.
 */
export function authorNode(authorId: string): Node {
  const author = authors.find((item) => item.id === authorId);
  if (!author) throw new Error(`structured-data: unknown author "${authorId}"`);
  const url = `${siteUrl}/authors/${author.id}`;
  if (author.id === founderAuthor.id) return founderNode();
  return {
    '@type': 'Organization',
    '@id': `${url}#organization`,
    name: author.name,
    description: author.bio,
    url,
    parentOrganization: ref(ids.organization),
  };
}

/** The compact form of {@link authorNode} for an article byline: type, id, name and url. */
export function authorByline(authorId: string): Node {
  const { '@type': type, '@id': id, name, url } = authorNode(authorId);
  return { '@type': type, '@id': id, name, url };
}

// ---------------------------------------------------------------------------------------
// The game

const platforms = ['iPhone', 'iPad', 'Mac', 'Apple TV', 'Apple Vision Pro', 'Apple Watch'];

const screenshots = [
  { file: 'iphone-home.png', w: 737, h: 1564, caption: 'OutBrick on iPhone: the Home screen with three brick friends' },
  { file: 'iphone-board.png', w: 737, h: 1564, caption: 'OutBrick on iPhone: a packed board with coloured gates around its frame' },
  { file: 'iphone-board-shaped.png', w: 737, h: 1564, caption: 'OutBrick on iPhone: a shaped board with keys, locks and crates' },
  { file: 'iphone-collection.png', w: 737, h: 1564, caption: 'OutBrick on iPhone: the Collection of brick cards' },
  { file: 'ipad-home.png', w: 990, h: 1296, caption: 'OutBrick on iPad: the Home screen in front of a brick village' },
  { file: 'ipad-board.png', w: 990, h: 1296, caption: 'OutBrick on iPad: a board in play' },
];

/**
 * An `aggregateRating` for the game — only when Apple's record has enough ratings for the
 * visible rating line (app/components/app-store-rating.tsx, MIN_RATINGS = 20) to show, and only
 * on a page that renders that line. Today neither is true, so every caller gets `{}`.
 */
export function appAggregateRating(pageShowsRating: boolean, minRatings = 20): Node {
  const count = record.userRatingCount;
  if (!pageShowsRating || count < Math.max(5, minRatings) || !record.averageUserRating) return {};
  return {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Math.round(record.averageUserRating * 10) / 10,
      ratingCount: count,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/**
 * OutBrick: Block Sort Puzzle, as both a VideoGame and a MobileApplication (Google reads a
 * VideoGame only when it is co-typed with a SoftwareApplication type). Free with in-app
 * purchases, rated 4+, single player.
 */
export function appNode({ description, url = `${siteUrl}/`, showsRating = false }: { description?: string; url?: string; showsRating?: boolean } = {}): Node {
  url = absolute(url);
  const iso = (value: string | null | undefined, fallback: string) => (value ?? fallback).slice(0, 10);
  return {
    '@type': ['VideoGame', 'MobileApplication'],
    '@id': ids.app,
    name: 'OutBrick: Block Sort Puzzle',
    alternateName: 'OutBrick',
    url,
    description: description ?? 'A sliding-brick colour-sort puzzle: 2,000 solver-verified boards across 100 chapters, a Journey of 167 brick-built villages, and nine brick friends.',
    applicationCategory: 'GameApplication',
    applicationSubCategory: 'Puzzle game',
    operatingSystem: `iOS ${record.minimumOsVersion ?? appStoreFallback.minimumOsVersion} or later, iPadOS, macOS, tvOS, visionOS, watchOS`,
    gamePlatform: platforms,
    genre: record.genres?.length ? record.genres : appStoreFallback.genres,
    contentRating: record.contentRating ?? appStoreFallback.contentRating,
    playMode: 'SinglePlayer',
    numberOfPlayers: { '@type': 'QuantitativeValue', value: 1 },
    inLanguage: record.languages?.length ? record.languages : appStoreFallback.languages,
    softwareVersion: record.version ?? appStoreFallback.version,
    datePublished: iso(record.releaseDate, appStoreFallback.releaseDate),
    dateModified: iso(record.currentVersionReleaseDate, appStoreFallback.currentVersionReleaseDate),
    image: { '@type': 'ImageObject', url: `${siteUrl}/og.png`, width: 1200, height: 630, caption: 'OutBrick mascots and home screen' },
    screenshot: screenshots.map((shot) => ({
      '@type': 'ImageObject',
      url: `${siteUrl}/assets/screens/${shot.file}`,
      width: shot.w,
      height: shot.h,
      caption: shot.caption,
    })),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      category: 'free',
      url: APP_STORE_URL,
      // The App Store names Mourad Hamdi as the seller.
      seller: ref(ids.founder),
    },
    installUrl: APP_STORE_URL,
    downloadUrl: APP_STORE_URL,
    sameAs: [APP_STORE_URL],
    publisher: ref(ids.organization),
    author: ref(ids.founder),
    creator: ref(ids.founder),
    ...appAggregateRating(showsRating),
  };
}

// ---------------------------------------------------------------------------------------
// Page-level nodes

export type Crumb = { name: string; path: string };

/** An absolute URL for a path, with the home page always written with its slash, as its canonical is. */
const absolute = (path: string) => {
  const url = /^https?:/.test(path) ? path : `${siteUrl}${path}`;
  return url === siteUrl ? `${siteUrl}/` : url;
};

/** A BreadcrumbList from the home page down to this page. `path` may be absolute. */
export function breadcrumbNode(pageUrl: string, crumbs: Crumb[]): Node {
  pageUrl = absolute(pageUrl);
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };
}

/**
 * The WebPage (or AboutPage, ContactPage, CollectionPage, ProfilePage …) node for a page,
 * tied to the website and, when given, to its breadcrumb trail.
 */
export function webPageNode({
  type = 'WebPage',
  url,
  name,
  description,
  inLanguage = 'en',
  breadcrumb = true,
  ...rest
}: {
  type?: string | string[];
  url: string;
  name: string;
  description?: string;
  inLanguage?: string;
  breadcrumb?: boolean;
  [key: string]: unknown;
}): Node {
  url = absolute(url);
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    ...(description ? { description } : {}),
    inLanguage,
    isPartOf: ref(ids.website),
    publisher: ref(ids.organization),
    ...(breadcrumb ? { breadcrumb: ref(`${url}#breadcrumb`) } : {}),
    ...rest,
  };
}

/** Wrap nodes into one JSON-LD document. */
export function graph(...nodes: Node[]): Node {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

/**
 * An article date as ISO 8601 with a time zone, as Google asks for: the calendar day at noon
 * UTC, the same instant lib/blog.ts dates are parsed at everywhere else, so the day never
 * shifts in any time zone from UTC−12 to UTC+11.
 */
export function isoDateTime(human: string): string {
  return `${isoDay(human)}T12:00:00+00:00`;
}

/** "22 September 2026" / "September 4, 2026" → "2026-09-22" (calendar date, UTC). */
export function isoDay(human: string): string {
  const parsed = new Date(`${human} 12:00:00 UTC`);
  if (Number.isNaN(parsed.getTime())) throw new Error(`structured-data: cannot parse date "${human}"`);
  return parsed.toISOString().slice(0, 10);
}
