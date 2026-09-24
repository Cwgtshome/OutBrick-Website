import { siteUrl } from '../site';

/**
 * The languages the home page and the play guide are published in. English
 * lives at the bare paths (`/`, `/play`); every other language gets a prefix
 * (`/fr`, `/fr/play`). Only these four codes are prerendered under
 * `app/[locale]`, and that route sets `dynamicParams = false`, so any other
 * first segment is still a 404.
 */
export const translatedLocales = ['fr', 'de', 'es', 'ja'] as const;
export type TranslatedLocale = (typeof translatedLocales)[number];
export type Locale = 'en' | TranslatedLocale;
export const locales: readonly Locale[] = ['en', ...translatedLocales];

export function isTranslatedLocale(value: string): value is TranslatedLocale {
  return (translatedLocales as readonly string[]).includes(value);
}

/** How each language names itself in the switcher. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  ja: '日本語',
};

/** Open Graph `og:locale`. */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
  ja: 'ja_JP',
};

/** The App Store storefront each language links to (same app id everywhere). */
export const storefronts: Record<Locale, string> = {
  en: 'us',
  fr: 'fr',
  de: 'de',
  es: 'es',
  ja: 'jp',
};

/** The pages that exist in every language, as their English path. */
export type LocalizedPage = '/' | '/play';

/** The path of `page` in `locale`: `/`, `/play`, `/fr`, `/fr/play` … Never a trailing slash. */
export function localePath(locale: Locale, page: LocalizedPage): string {
  if (locale === 'en') return page;
  return page === '/' ? `/${locale}` : `/${locale}${page}`;
}

/** Absolute URL for `page` in `locale`, on the www host, as canonical and hreflang want it. */
export function localeUrl(locale: Locale, page: LocalizedPage): string {
  const p = localePath(locale, page);
  return p === '/' ? siteUrl : `${siteUrl}${p}`;
}

/**
 * `alternates` for one page in one language: canonical to itself, and an
 * hreflang for every language plus `x-default` (English). Absolute URLs.
 */
export function localeAlternates(locale: Locale, page: LocalizedPage) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localeUrl(l, page);
  languages['x-default'] = localeUrl('en', page);
  return { canonical: localeUrl(locale, page), languages };
}
