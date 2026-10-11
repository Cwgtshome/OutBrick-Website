import { catalogLookup, catalogRecord, mapCopy } from '../i18n/catalog.ts';
import { isCatalogLocale, type Locale } from '../i18n/locales.ts';
import { helpOrder, type HelpArticle, type HelpContent } from './model.ts';
import { en } from './content/en.ts';
import { fr } from './content/fr.ts';
import { de } from './content/de.ts';
import { es } from './content/es.ts';
import { ja } from './content/ja.ts';
import { ptBR } from './content/pt-BR.ts';

const byLocale: Record<Locale, HelpContent> = catalogRecord<HelpContent>('help', 'byLocale', { en, fr, de, es, ja, 'pt-BR': ptBR });

/** Every article in `locale`, in hub order. A slug missing from a translation falls back to English. */
export function helpArticles(locale: Locale): HelpArticle[] {
  const own = new Map(byLocale[locale].articles.map((a) => [a.slug, a]));
  const english = new Map(en.articles.map((a) => [a.slug, a]));
  return helpOrder.map((slug) => own.get(slug) ?? english.get(slug)).filter((a): a is HelpArticle => Boolean(a));
}

export function helpArticle(locale: Locale, slug: string): HelpArticle | undefined {
  return helpArticles(locale).find((a) => a.slug === slug);
}

const complete = new Map<string, boolean>();
/** Whether every string of an English guide is in `locale`'s catalogs (a catalog language). */
function catalogComplete(locale: Locale, slug: string): boolean {
  const key = `${locale}:${slug}`;
  if (!complete.has(key)) {
    const article = en.articles.find((a) => a.slug === slug);
    let missing = !article;
    // Table cells were added to the catalogs after the first guides were translated; until a
    // language has them, they show in English inside an otherwise translated guide.
    const cells = new Set<string>();
    const collect = (value: unknown, key = ''): void => {
      if (Array.isArray(value)) {
        for (const item of value) {
          if (key === 'rows' && Array.isArray(item)) item.forEach((cell) => { if (typeof cell === 'string') cells.add(cell); });
          else collect(item, key);
        }
      } else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) collect(v, k);
    };
    collect(article);
    if (article) mapCopy(article, (text) => { if (!cells.has(text) && catalogLookup(locale, text) === undefined) missing = true; return text; }, (fn) => fn);
    complete.set(key, !missing);
  }
  return complete.get(key)!;
}

/**
 * Whether `locale` has its own translation of `slug` (rather than the English fallback). A
 * catalog language has a guide once its catalogs cover every string of it; until then the guide
 * shows partly in English and is not indexed in that language.
 */
export function isTranslated(locale: Locale, slug: string): boolean {
  if (isCatalogLocale(locale)) return catalogComplete(locale, slug);
  return byLocale[locale].articles.some((a) => a.slug === slug);
}

/** A rough reading time: 200 words a minute, or 500 characters a minute for Japanese. */
export function readingMinutes(article: HelpArticle, locale: Locale): number {
  const text = article.sections
    .flatMap((s) => [s.title, ...s.blocks.map((b) => JSON.stringify(b))])
    .join(' ');
  const plain = text.replace(/"(t|id|kind|alt)":"[^"]*"/g, '');
  const minutes = locale === 'ja' ? plain.length / 500 : plain.split(/\s+/).length / 200;
  return Math.max(2, Math.round(minutes));
}
