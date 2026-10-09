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

export const helpCategories = ['start', 'play', 'learn', 'progress', 'family', 'accessibility', 'apple', 'account', 'community'] as const;
export type HelpCategory = (typeof helpCategories)[number];

/** The real captures from the released game that articles can show. See lib/help/shots.ts. */
export type ShotId = string;

/**
 * A drawn mini-board for a guide (rendered by app/help-board.tsx), so a rule can be shown as well
 * as told. `rows` are space-separated cell tokens, top row first:
 *
 *   .        empty floor              #        no floor (outside the board)
 *   R O Y G B P K T   a brick: red, orange, yellow, green, blue, purple, pink (K), teal (T),
 *                     drawn in the game's colour with its colour-blind symbol
 *   suffixes on a brick:  -  line blaster (across)   |  line blaster (up and down)
 *                         b  bomb                     d  homing dart
 *                         ~  iced (the number of layers may follow: R~2)
 *                         !  locked                   +  the brick to move (highlighted)
 *   *        colour bomb              ?        face-down brick (colour hidden)
 *   x        crate (x2, x3: layers)   s        statue
 *   m        moss on the floor        o        portal
 *
 * `gates` are coloured doors on the edges, `at` counting from 0 (left or top). `moves` draw an
 * arrow from a cell. `alt` is the full description a screen reader hears: it must say everything
 * the picture shows, including the result.
 */
export type BoardColour = 'R' | 'O' | 'Y' | 'G' | 'B' | 'P' | 'K' | 'T';
export type BoardSpec = {
  rows: string[];
  gates?: { side: 'top' | 'bottom' | 'left' | 'right'; at: number; colour: BoardColour; kind?: 'plain' | 'counted' | 'iced'; count?: number }[];
  moves?: { row: number; col: number; dir: 'up' | 'down' | 'left' | 'right'; kind?: 'slide' | 'swap' }[];
  /** An optional second board showing the result, drawn after an arrow. */
  after?: { rows: string[]; gates?: BoardSpec['gates'] };
  caption: string;
  alt: string;
};

/** One entry of an encyclopedia guide (a special brick, a blocker, a kind of board). */
export type EntryBlock = {
  t: 'entry';
  id: string;
  title: string;
  board?: Omit<BoardSpec, 'caption'> & { caption?: string };
  /** What it is and what it does. */
  what: string;
  /** How to make it, clear it, open it or use it. */
  how: string;
  /** Optional labelled facts: "First appears", "VoiceOver says", "Looks like, but isn't", "Combines with". */
  facts?: { label: string; text: string }[];
  tip?: string;
};

export type FriendId = 'bloo' | 'peach' | 'sprout' | 'bricko' | 'zippy' | 'vio' | 'moss' | 'flurry' | 'poppy';
export type FriendPose = 'idle' | 'think' | 'cheer';

export type Block =
  | { t: 'p'; text: string }
  | { t: 'board'; board: BoardSpec }
  | EntryBlock
  | { t: 'faq'; items: { q: string; a: string }[] }
  | { t: 'path'; items: { day: string; title: string; text: string }[] }
  | { t: 'friend'; friend: FriendId; pose: FriendPose; title: string; text: string }
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
  /** The brick friend who hosts this guide (shown through pose only, never speaking). Defaults to the category's host. */
  host?: FriendId;
  hostPose?: FriendPose;
};

export type HelpContent = {
  locale: Locale;
  articles: HelpArticle[];
};

/** The order articles appear in the hub and in the "next guide" link. */
export const helpOrder = [
  'welcome',
  'first-week',
  'common-questions',
  'menus-tour',
  'playing-a-board',
  'bricks-specials-and-blockers',
  'boosters-and-pause',
  'lives-moves-and-undos',
  'special-bricks-and-combos',
  'blockers-encyclopedia',
  'board-kinds',
  'hard-boards',
  'glossary',
  'journey-and-villages',
  'rewards-and-events',
  'shop-and-purchases',
  'friends-and-wardrobe',
  'meet-the-friends',
  'parents-guide',
  'playing-calmly',
  'rewards-and-ads',
  'settings',
  'accessibility',
  'voiceover',
  'voice-control-switch-control-keyboard',
  'vision-hearing-and-motion',
  'apple-features',
  'progress-privacy-and-account',
  'lost-progress-and-purchases',
  'troubleshooting',
  'using-the-community',
  'reporting-bugs',
] as const;
export type HelpSlug = (typeof helpOrder)[number];

/** The version and date every guide was checked against. Change it when the guides are rechecked. */
export const helpCheckpoint = { version: '5.1.1', day: '2026-10-08' } as const;
