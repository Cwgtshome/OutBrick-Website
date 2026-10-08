/**
 * Copy for the journal's tag pages (/blog/tag/<slug> and its five translations): the heading,
 * the introduction, the search snippet and the page title, in every language.
 *
 * Everything here is assembled from the tag's own stories — their count, their shelves, their
 * titles and the dek of the story the tag belongs to most — so nothing is claimed that the
 * stories themselves do not say. Only tag pages with at least MIN_INDEXED_TAG stories are
 * indexable (lib/journal.ts); thinner ones keep the shorter, older lede and carry noindex.
 */

import type { BlogArticle } from '../blog';
import { getTagPages, isIndexedTag, type Tag } from '../journal';
import { journalUi, localizeArticle } from './blog';
import type { Locale, TranslatedLocale } from './locales';
import { journalTextTranslations } from './public-dynamic';

/**
 * Where two English tags translate to the same words in a language, the tag page keeps them
 * apart with these labels (so two tag pages never share a title or a heading).
 */
export const distinctTagLabels: Record<TranslatedLocale, Record<string, string>> = {
  fr: { 'gaming-habits': 'habitudes de jeu', 'player-habits': 'habitudes des joueurs' },
  de: { 'gaming-habits': 'Spielgewohnheiten', 'player-habits': 'Gewohnheiten der Spieler' },
  es: { 'gaming-habits': 'hábitos de juego', 'player-habits': 'hábitos de los jugadores', 'mobile-games': 'juegos móviles', 'mobile-gaming': 'jugar en el móvil' },
  ja: { 'mobile-games': 'モバイルゲーム', 'mobile-gaming': 'モバイルで遊ぶこと' },
  'pt-BR': {
    accessibility: 'acessibilidade em jogos', 'brain-training': 'psicologia dos quebra-cabeças',
    'colour-blindness': 'pistas de cor e daltonismo', 'difficulty-design': 'curvas de dificuldade',
    'game-design': 'design de jogos', 'game-craft': 'técnicas de criação de jogos', 'game-development': 'desenvolvimento de jogos',
    'games-for-seniors': 'jogos para pessoas mais velhas', gamification: 'mecânicas de gamificação',
    'inclusive-design': 'design inclusivo', 'mobile-design': 'jogos de quebra-cabeça no celular',
    'mobile-games': 'jogos para celular', 'puzzle-games-research': 'pesquisa sobre quebra-cabeças',
    'short-sessions': 'partidas curtas', 'well-being': 'bem-estar ao jogar',
    'gaming-habits': 'hábitos de jogo', 'player-habits': 'hábitos dos jogadores', 'mobile-gaming': 'jogos mobile',
  },
};

/** The tag's name in `locale`. */
export function tagLabel(tag: Tag, locale: Locale): string {
  if (locale === 'en') return tag.label;
  return distinctTagLabels[locale][tag.slug] ?? journalTextTranslations(locale)[tag.label] ?? tag.label;
}

/** Google cuts snippets by width; a CJK character is about two Latin ones (scripts/audit-seo.mjs). */
const CJK = /[ᄀ-ᇿ⺀-鿿가-힯豈-﫿︰-﹏＀-｠￠-￦]/u;
const width = (text: string) => Array.from(text).reduce((n, ch) => n + (CJK.test(ch) ? 2 : 1), 0);
const MAX_SNIPPET = 158;

type Words = {
  h1: (label: string) => string;
  /** "{n} stories … across the A and B shelves." */
  lede: (n: number, shelves: string[], list: (items: string[]) => string) => string;
  /** The introduction's second sentence leads into the story the tag belongs to most. */
  start: { before: string; quote: (title: string) => string; after: string };
  /** Snippet: the count and the name, then (when they fit) the first stories' titles. */
  snippet: (n: number, label: string, titles: string) => string;
  snippetBare: (n: number, label: string) => string;
  cited: string;
  quote: (title: string) => string;
  /** The <title> (unchanged from the earlier per-language titles). */
  title: (label: string, n: number) => string;
};

const words: Record<Locale, Words> = {
  en: {
    h1: (label) => `Stories about ${label}`,
    lede: (n, shelves, list) => `${n} stories from the journal share this topic, on the ${list(shelves)} ${shelves.length === 1 ? 'shelf' : 'shelves'}.`,
    start: { before: 'Start with ', quote: (t) => `“${t}”`, after: '.' },
    snippet: (n, label, titles) => `${n} OutBrick Journal stories about ${label}, including ${titles}.`,
    snippetBare: (n, label) => `${n} OutBrick Journal stories about ${label}.`,
    cited: 'Every research claim is cited.',
    quote: (t) => `“${t}”`,
    title: (label) => `Stories tagged “${label}” — The OutBrick Journal`,
  },
  fr: {
    h1: (label) => `Articles sur « ${label} »`,
    lede: (n, shelves, list) => `${n} articles du journal abordent ce sujet, dans ${shelves.length === 1 ? 'la rubrique' : 'les rubriques'} ${list(shelves)}.`,
    start: { before: 'Pour commencer : ', quote: (t) => `« ${t} »`, after: '.' },
    snippet: (n, label, titles) => `${n} articles du journal OutBrick sur le thème « ${label} », dont ${titles}.`,
    snippetBare: (n, label) => `${n} articles du journal OutBrick sur le thème « ${label} ».`,
    cited: 'Chaque affirmation issue de la recherche est sourcée.',
    quote: (t) => `« ${t} »`,
    title: (label) => `${label} : articles — Journal OutBrick`,
  },
  de: {
    h1: (label) => `Artikel zu „${label}“`,
    lede: (n, shelves, list) => `${n} Artikel im Journal behandeln dieses Thema, in ${shelves.length === 1 ? 'der Rubrik' : 'den Rubriken'} ${list(shelves)}.`,
    start: { before: 'Zum Einstieg: ', quote: (t) => `„${t}“`, after: '.' },
    snippet: (n, label, titles) => `${n} Artikel im OutBrick-Journal zum Thema „${label}“, darunter ${titles}.`,
    snippetBare: (n, label) => `${n} Artikel im OutBrick-Journal zum Thema „${label}“.`,
    cited: 'Jede Forschungsaussage ist belegt.',
    quote: (t) => `„${t}“`,
    title: (label) => `${label}: Artikel — OutBrick-Journal`,
  },
  es: {
    h1: (label) => `Artículos sobre «${label}»`,
    lede: (n, shelves, list) => `${n} artículos del diario tratan este tema, en ${shelves.length === 1 ? 'la sección' : 'las secciones'} ${list(shelves)}.`,
    start: { before: 'Para empezar: ', quote: (t) => `«${t}»`, after: '.' },
    snippet: (n, label, titles) => `${n} artículos del diario de OutBrick sobre ${label}, entre ellos ${titles}.`,
    snippetBare: (n, label) => `${n} artículos del diario de OutBrick sobre ${label}.`,
    cited: 'Cada afirmación basada en investigaciones cita su fuente.',
    quote: (t) => `«${t}»`,
    title: (label) => `${label}: artículos — Diario OutBrick`,
  },
  ja: {
    h1: (label) => `「${label}」の記事`,
    lede: (n, shelves, list) => `この話題を扱うジャーナルの記事は${n}本。${list(shelves)}のカテゴリに収められています。`,
    start: { before: 'まずは', quote: (t) => `「${t}」`, after: 'からどうぞ。' },
    snippet: (n, label, titles) => `${label}に関するOutBrickジャーナルの記事${n}本。${titles}などを掲載しています。`,
    snippetBare: (n, label) => `${label}に関するOutBrickジャーナルの記事${n}本。`,
    cited: '研究に関する主張はすべて出典を示しています。',
    quote: (t) => `「${t}」`,
    title: (label) => `「${label}」の記事 — OutBrickジャーナル`,
  },
  'pt-BR': {
    h1: (label) => `Artigos sobre ${label}`,
    lede: (n, shelves, list) => `${n} artigos do blog tratam deste tema, ${shelves.length === 1 ? 'na categoria' : 'nas categorias'} ${list(shelves)}.`,
    start: { before: 'Para começar: ', quote: (t) => `“${t}”`, after: '.' },
    snippet: (n, label, titles) => `${n} artigos do blog da OutBrick sobre ${label}, incluindo ${titles}.`,
    snippetBare: (n, label) => `${n} artigos do blog da OutBrick sobre ${label}.`,
    cited: 'Toda afirmação baseada em pesquisa tem sua fonte.',
    quote: (t) => `“${t}”`,
    title: (label) => `${label}: artigos — Blog da OutBrick`,
  },
};

const listIn = (locale: Locale) => (items: string[]) =>
  locale === 'ja' ? items.join('、') : new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' }).format(items);

/**
 * The story a tag belongs to most: the one that lists it earliest among its own tags (an
 * article's first tag is its main subject), newest first on a tie (the tag's own order).
 */
function leadStory(tag: Tag): BlogArticle {
  const rank = (article: BlogArticle) => article.tags.findIndex((t) => t.toLowerCase() === tag.label.toLowerCase() || t === tag.label);
  return [...tag.articles].sort((a, b) => {
    const ra = rank(a), rb = rank(b);
    return (ra < 0 ? 99 : ra) - (rb < 0 ? 99 : rb);
  })[0]!;
}

export type TagPageCopy = {
  tag: Tag;
  indexed: boolean;
  label: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  /** The introduction's lead-in to one story: before + link(quote) + after, then its dek. */
  start: { before: string; quote: string; after: string; dek: string; slug: string };
};

export function tagPageCopy(slug: string, locale: Locale): TagPageCopy | undefined {
  const tag = getTagPages().find((entry) => entry.slug === slug);
  if (!tag) return undefined;
  const w = words[locale];
  const label = tagLabel(tag, locale);
  const n = tag.articles.length;
  const local = (article: BlogArticle) => (locale === 'en' ? article : localizeArticle(article.slug, locale));
  const shelves = [...new Set(tag.articles.map((article) => article.category))].map((category) => {
    const name = locale === 'en' ? category : journalUi[locale].categories[category] ?? category;
    return locale === 'en' ? name : w.quote(name);
  });
  const lead = local(leadStory(tag));

  // The snippet: count and name, then as many titles as fit, then the citation line if it fits.
  const titles = tag.articles.slice(0, 3).map((article) => w.quote(local(article).title));
  const join = (items: string[]) => (locale === 'ja' ? items.join('') : listIn(locale)(items));
  let description = w.snippetBare(n, label);
  for (let k = Math.min(2, titles.length); k > 0; k--) {
    const candidate = w.snippet(n, label, join(titles.slice(0, k)));
    if (width(candidate) <= MAX_SNIPPET) { description = candidate; break; }
  }
  const withCited = `${description}${locale === 'ja' ? '' : ' '}${w.cited}`;
  if (width(withCited) <= MAX_SNIPPET) description = withCited;

  return {
    tag,
    indexed: isIndexedTag(tag),
    label,
    title: w.title(label, n),
    description,
    h1: w.h1(label),
    lede: w.lede(n, shelves, listIn(locale)),
    start: { before: w.start.before, quote: w.start.quote(lead.title), after: w.start.after, dek: lead.dek, slug: lead.slug },
  };
}
