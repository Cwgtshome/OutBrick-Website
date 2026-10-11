import { siteUrl } from '../site.ts';
import published from './catalog/published.json' with { type: 'json' };

/**
 * The languages the home page and the play guide are published in. English
 * lives at the bare paths (`/`, `/play`); every other language gets a prefix
 * (`/fr`, `/fr/play`). Translated locale codes are prerendered under
 * `app/[locale]`, and that route sets `dynamicParams = false`, so any other
 * first segment is still a 404.
 */
/** The first five translations, written by hand into each module's own locale maps. */
export const legacyLocales = ['fr', 'de', 'es', 'ja', 'pt-BR'] as const;
export type LegacyLocale = (typeof legacyLocales)[number];
/**
 * The languages added on 10 and 11 October 2026 to match the game. Their words live in string
 * catalogs (`lib/i18n/catalog/<locale>/<area>.json`, English source text → translation) and
 * are applied by `lib/i18n/catalog.ts`; nothing in a module's own locale map names them.
 */
export const catalogLocales = [
  'it', 'ko', 'nl', 'ru', 'tr', 'zh-Hans', 'ar', 'ca', 'cs', 'da', 'fi', 'hr', 'hu', 'id', 'ms', 'nb',
  'pl', 'ro', 'sk', 'sv', 'th', 'vi', 'zh-Hant', 'es-419', 'he', 'pt-PT', 'el', 'uk', 'fr-CA', 'hi', 'sl', 'ur', 'bn',
] as const;
export type CatalogLocale = (typeof catalogLocales)[number];
export const allTranslatedLocales = [...legacyLocales, ...catalogLocales] as const;
export type TranslatedLocale = (typeof allTranslatedLocales)[number];
export type Locale = 'en' | TranslatedLocale;
/**
 * The catalog languages whose site and email catalogs are complete, written by
 * `scripts/i18n/publish.mts`. Only these are published: prerendered, offered in the switcher,
 * in hreflang and the sitemap, chosen from Accept-Language and used for email.
 */
export const publishedCatalogLocales: readonly CatalogLocale[] = catalogLocales.filter((l) => (published as string[]).includes(l));
/** Every published translation (the five first ones and the published catalog languages). */
export const translatedLocales: readonly TranslatedLocale[] = [...legacyLocales, ...publishedCatalogLocales];
export const locales: readonly Locale[] = ['en', ...translatedLocales];

/** A published translated language (an unpublished catalog language is not one). */
export function isTranslatedLocale(value: string): value is TranslatedLocale {
  return (translatedLocales as readonly string[]).includes(value);
}
export function isLegacyLocale(value: string): value is LegacyLocale {
  return (legacyLocales as readonly string[]).includes(value);
}
export function isCatalogLocale(value: string): value is CatalogLocale {
  return (catalogLocales as readonly string[]).includes(value);
}
/** Right-to-left languages (Arabic, Hebrew, Urdu): their pages are `dir="rtl"` and the layout mirrors. */
export const rtlLocales: readonly Locale[] = ['ar', 'he', 'ur'];
export function localeDir(locale: Locale): 'rtl' | 'ltr' {
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}
/** Matches a path that already starts with a language prefix: `/fr`, `/zh-Hant/play` … */
export const localePrefixPattern = new RegExp(`^/(${allTranslatedLocales.map((l) => l.replace('-', '\\-')).join('|')})(?=[/?#]|$)`);
/**
 * Pages that exist only in English (and the five first translations) for the catalog languages:
 * the journal and its author pages. Links there from a catalog-language page keep the English
 * address and say so with `hreflang="en"`.
 */
export const legacyOnlyRoots: ReadonlySet<string> = new Set(['blog', 'authors']);
export function hasLocalePage(locale: Locale, page: string): boolean {
  if (!isCatalogLocale(locale)) return true;
  return !legacyOnlyRoots.has(page.split(/[?#]/)[0].split('/')[1] ?? '');
}

/** How each language names itself in the switcher. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  ja: '日本語',
  'pt-BR': 'Português (Brasil)',
  it: 'Italiano',
  ko: '한국어',
  nl: 'Nederlands',
  ru: 'Русский',
  tr: 'Türkçe',
  'zh-Hans': '简体中文',
  ar: 'العربية',
  ca: 'Català',
  cs: 'Čeština',
  da: 'Dansk',
  fi: 'Suomi',
  hr: 'Hrvatski',
  hu: 'Magyar',
  id: 'Bahasa Indonesia',
  ms: 'Bahasa Melayu',
  nb: 'Norsk bokmål',
  pl: 'Polski',
  ro: 'Română',
  sk: 'Slovenčina',
  sv: 'Svenska',
  th: 'ไทย',
  vi: 'Tiếng Việt',
  'zh-Hant': '繁體中文',
  'es-419': 'Español (Latinoamérica)',
  he: 'עברית',
  'pt-PT': 'Português (Portugal)',
  el: 'Ελληνικά',
  uk: 'Українська',
  'fr-CA': 'Français (Canada)',
  hi: 'हिन्दी',
  sl: 'Slovenščina',
  ur: 'اردو',
  bn: 'বাংলা',
};

/** Open Graph `og:locale`. */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
  ja: 'ja_JP',
  'pt-BR': 'pt_BR',
  it: 'it_IT', ko: 'ko_KR', nl: 'nl_NL', ru: 'ru_RU', tr: 'tr_TR', 'zh-Hans': 'zh_CN', ar: 'ar_AR', ca: 'ca_ES',
  cs: 'cs_CZ', da: 'da_DK', fi: 'fi_FI', hr: 'hr_HR', hu: 'hu_HU', id: 'id_ID', ms: 'ms_MY', nb: 'nb_NO',
  pl: 'pl_PL', ro: 'ro_RO', sk: 'sk_SK', sv: 'sv_SE', th: 'th_TH', vi: 'vi_VN', 'zh-Hant': 'zh_TW', 'es-419': 'es_LA',
  he: 'he_IL', 'pt-PT': 'pt_PT', el: 'el_GR', uk: 'uk_UA', 'fr-CA': 'fr_CA', hi: 'hi_IN', sl: 'sl_SI', ur: 'ur_PK', bn: 'bn_IN',
};

/** The App Store storefront each language links to (same app id everywhere). */
export const storefronts: Record<Locale, string> = {
  en: 'us',
  fr: 'fr',
  de: 'de',
  es: 'es',
  ja: 'jp',
  'pt-BR': 'br',
  // OutBrick is not on the mainland China storefront; Simplified Chinese links to Singapore's.
  it: 'it', ko: 'kr', nl: 'nl', ru: 'ru', tr: 'tr', 'zh-Hans': 'sg', ar: 'sa', ca: 'es', cs: 'cz', da: 'dk',
  fi: 'fi', hr: 'hr', hu: 'hu', id: 'id', ms: 'my', nb: 'no', pl: 'pl', ro: 'ro', sk: 'sk', sv: 'se', th: 'th',
  vi: 'vn', 'zh-Hant': 'tw', 'es-419': 'mx', he: 'il', 'pt-PT': 'pt', el: 'gr', uk: 'ua', 'fr-CA': 'ca', hi: 'in', sl: 'si', ur: 'pk', bn: 'in',
};

/**
 * The pages that exist in every language, as their English path. `/whats-new` is
 * translated for the current release only; its older entries stay on the English page.
 */
export type LocalizedPage = string;

/** The path of `page` in `locale`: `/`, `/play`, `/fr`, `/fr/play` … Never a trailing slash. */
export function localePath(locale: Locale, page: LocalizedPage): string {
  // The journal is not published in the catalog languages: its address stays English.
  if (locale === 'en' || !hasLocalePage(locale, page)) return page;
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
  for (const l of locales) if (hasLocalePage(l, page)) languages[l] = localeUrl(l, page);
  languages['x-default'] = localeUrl('en', page);
  return { canonical: localeUrl(locale, page), languages };
}
