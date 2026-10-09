import type { Locale } from '../i18n/locales.ts';
import { helpOrder, type HelpArticle, type HelpContent } from './model.ts';
import { en } from './content/en.ts';
import { fr } from './content/fr.ts';
import { de } from './content/de.ts';
import { es } from './content/es.ts';
import { ja } from './content/ja.ts';
import { ptBR } from './content/pt-BR.ts';

const byLocale: Record<Locale, HelpContent> = { en, fr, de, es, ja, 'pt-BR': ptBR };

/** Every article in `locale`, in hub order. A slug missing from a translation falls back to English. */
export function helpArticles(locale: Locale): HelpArticle[] {
  const own = new Map(byLocale[locale].articles.map((a) => [a.slug, a]));
  const english = new Map(en.articles.map((a) => [a.slug, a]));
  return helpOrder.map((slug) => own.get(slug) ?? english.get(slug)).filter((a): a is HelpArticle => Boolean(a));
}

export function helpArticle(locale: Locale, slug: string): HelpArticle | undefined {
  return helpArticles(locale).find((a) => a.slug === slug);
}

/** Whether `locale` has its own translation of `slug` (rather than the English fallback). */
export function isTranslated(locale: Locale, slug: string): boolean {
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
