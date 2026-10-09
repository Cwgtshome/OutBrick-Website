import type { Locale } from '../i18n/locales.ts';

/**
 * The OutBrick Help Centre (/community/help): illustrated, team-written guides to the released
 * iOS and iPadOS game, prerendered in all six languages.
 *
 * Every language file (lib/help/content/<locale>.ts) holds the same articles, with the same
 * slugs, section ids and screenshot ids, so a reader can switch language mid-article and land
 * on the same section. The English file is the source; the others are native translations.
 *
 * Inline text uses a deliberately tiny markup, rendered by app/help-centre.tsx without any HTML:
 *   **bold**                 strong emphasis (on-screen labels, the name of a control)
 *   [words](/path)           a link to another page of this site, prefixed with the reader's language
 *   [words](help:slug)       a link to another help article (optionally help:slug#section)
 *   [words](https://…)       an external link
 *   {{Key}}                  a keyboard key or a gesture name, drawn as a key cap
 *   `code`                   literal text to type (Markdown, a setting value), shown as code
 */

export const helpCategories = ['start', 'play', 'progress', 'accessibility', 'apple', 'account', 'community'] as const;
export type HelpCategory = (typeof helpCategories)[number];

/** The real captures from the released game that articles can show. See lib/help/shots.ts. */
export type ShotId = string;

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'steps'; items: string[] }
  | { t: 'list'; items: string[] }
  | { t: 'shot'; id: ShotId; alt: string; caption: string }
  | { t: 'shots'; items: { id: ShotId; alt: string; caption: string }[] }
  | { t: 'callout'; kind: 'tip' | 'note' | 'important' | 'a11y'; title?: string; text: string }
  | { t: 'table'; caption?: string; head: string[]; rows: string[][] }
  | { t: 'defs'; items: { term: string; text: string }[] };

export type HelpSection = { id: string; title: string; blocks: Block[] };

export type HelpArticle = {
  slug: string;
  category: HelpCategory;
  /** The capture shown on the article's card in the hub and in link previews. */
  cover?: ShotId;
  title: string;
  /** One or two sentences: the card text, the meta description and the lede. */
  summary: string;
  /** Extra words people search with that may not be in the text (synonyms, old names). */
  keywords?: string;
  sections: HelpSection[];
  related: string[];
};

export type HelpContent = {
  locale: Locale;
  articles: HelpArticle[];
};

/** The order articles appear in the hub and in the "next guide" link. */
export const helpOrder = [
  'welcome',
  'menus-tour',
  'playing-a-board',
  'bricks-specials-and-blockers',
  'boosters-and-pause',
  'lives-moves-and-undos',
  'journey-and-villages',
  'rewards-and-events',
  'shop-and-purchases',
  'friends-and-wardrobe',
  'settings',
  'accessibility',
  'voiceover',
  'voice-control-switch-control-keyboard',
  'vision-hearing-and-motion',
  'apple-features',
  'progress-privacy-and-account',
  'troubleshooting',
  'using-the-community',
  'reporting-bugs',
] as const;
export type HelpSlug = (typeof helpOrder)[number];

/** The version and date every guide was checked against. Change it when the guides are rechecked. */
export const helpCheckpoint = { version: '5.1.1', day: '2026-10-08' } as const;
