/**
 * String catalogs for the catalog languages (see `catalogLocales` in ./locales.ts).
 *
 * A catalog is a flat map from English source text to its translation, written per area in
 * `lib/i18n/catalog/<locale>/<area>.json`. The English source of each area is generated into
 * `lib/i18n/catalog/en/<area>.json` by `scripts/i18n/extract.mts`, which reads the English
 * entry of every locale map below and the site's rendered English copy.
 *
 * The words are held in one global store, because three different runtimes fill it:
 * - prerendering (React server + SSR in workerd) installs every catalog through
 *   `catalog/all.ts`, imported by the server document;
 * - the Worker installs the email and community areas it renders at request time;
 * - the browser loads `/i18n/<locale>.<hash>.js`, a classic script in the page head that
 *   installs the areas client components need before hydration.
 * This module itself imports no catalog, so client bundles never carry other languages.
 *
 * Functions in a locale map become templates: the English function is called with `{0}`,
 * `{1}` … and its result is the catalog key. A translation may use those placeholders, and a
 * numeric argument may choose a plural form with `{0, plural, one {# brick} other {# bricks}}`
 * (categories from `Intl.PluralRules`; `#` is the number in the page language).
 */
import type { CatalogLocale, LegacyLocale, Locale } from './locales.ts';
import { catalogLocales } from './locales.ts';

type Dict = Record<string, string>;
type Store = Partial<Record<string, Dict>>;
const store = (): Store => ((globalThis as { __OB_I18N?: Store }).__OB_I18N ??= {});

export function installCatalog(locale: string, dict: Dict) {
  const s = store();
  s[locale] = s[locale] ? Object.assign(s[locale]!, dict) : { ...dict };
}
export function installCatalogs(catalogs: Partial<Record<string, Dict>>) {
  for (const [locale, dict] of Object.entries(catalogs)) if (dict) installCatalog(locale, dict);
}

const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();

/** The translation of `text`, or undefined when the catalog has none. Edge whitespace is kept. */
export function catalogLookup(locale: string, text: string): string | undefined {
  const dict = store()[locale];
  if (!dict) return undefined;
  const direct = dict[text];
  if (direct !== undefined) return direct;
  const key = normalize(text);
  const found = dict[key];
  if (found === undefined) traceMiss(locale, key);
  if (found === undefined || key === text) return found;
  const start = text.match(/^\s*/)?.[0] ?? '';
  const end = text.match(/\s*$/)?.[0] ?? '';
  return start + found + end;
}

/** With a trace build (scripts/i18n/publish.mts --trace), log each English string a page fell back on. */
function traceMiss(locale: string, key: string) {
  const seen = (globalThis as { __OB_I18N_TRACE?: Set<string> }).__OB_I18N_TRACE;
  if (!seen || !key || !/\p{L}/u.test(key) || seen.has(key)) return;
  seen.add(key);
  console.log(`[i18n-miss] ${JSON.stringify(key)}`);
}

/** `catalogLookup`, falling back to the English text. */
export function catalogText(locale: string, text: string): string {
  return catalogLookup(locale, text) ?? text;
}

const pluralRules = new Map<string, Intl.PluralRules>();
function pluralCategory(locale: string, n: number) {
  let rules = pluralRules.get(locale);
  if (!rules) pluralRules.set(locale, (rules = new Intl.PluralRules(locale)));
  return rules.select(n);
}
function formatNumber(locale: string, value: unknown) {
  return typeof value === 'number' ? new Intl.NumberFormat(locale).format(value) : String(value);
}

/** Find the `}` that closes the brace opened just before `from`. */
function closing(text: string, from: number) {
  let depth = 1;
  for (let i = from; i < text.length; i++) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}' && --depth === 0) return i;
  }
  return -1;
}

/** Fill `{0}`, `{1}` … and ICU-style `{n, plural, …}` / `{n, select, …}` in a translated template. */
export function formatTemplate(template: string, args: readonly unknown[], locale: string): string {
  let out = '';
  for (let i = 0; i < template.length; ) {
    const ch = template[i];
    if (ch !== '{') { out += ch; i++; continue; }
    const end = closing(template, i + 1);
    if (end < 0) { out += template.slice(i); break; }
    const body = template.slice(i + 1, end);
    const simple = body.match(/^\s*(\d+)\s*$/);
    const complex = body.match(/^\s*(\d+)\s*,\s*(plural|select)\s*,([\s\S]*)$/);
    if (simple) out += formatNumber(locale, args[Number(simple[1])]);
    else if (complex) {
      const value = args[Number(complex[1])];
      const options = new Map<string, string>();
      const spec = complex[3];
      for (let j = 0; j < spec.length; ) {
        const m = spec.slice(j).match(/^\s*(=?[\w-]+)\s*\{/);
        if (!m) break;
        const open = j + m[0].length;
        const close = closing(spec, open);
        if (close < 0) break;
        options.set(m[1], spec.slice(open, close));
        j = close + 1;
      }
      let chosen: string | undefined;
      if (complex[2] === 'plural') {
        const n = Number(value);
        chosen = options.get(`=${n}`) ?? options.get(Number.isFinite(n) ? pluralCategory(locale, n) : 'other') ?? options.get('other');
        if (chosen !== undefined) chosen = formatTemplate(chosen.replace(/#/g, `{${complex[1]}}`), args, locale);
      } else {
        chosen = options.get(String(value)) ?? options.get('other');
        if (chosen !== undefined) chosen = formatTemplate(chosen, args, locale);
      }
      out += chosen ?? '';
    } else out += `{${body}}`;
    i = end + 1;
  }
  return out;
}

const placeholder = (i: number) => `{${i}}`;
/**
 * The catalog key of a copy function called with `arity` arguments: its English result for `{0}`,
 * `{1}` …, or null when the function cannot be read that way (it does arithmetic or formatting).
 */
export function templateKey(fn: (...args: never[]) => unknown, arity: number, actual?: readonly unknown[]): string | null {
  try {
    // An empty value is passed as it is, because copy often drops it ("Thanks, {0}!" / "Thanks!").
    const args = Array.from({ length: arity }, (_, i) => (actual && (actual[i] === '' || actual[i] == null) ? actual[i] : placeholder(i)));
    const result = (fn as (...a: unknown[]) => unknown)(...args);
    if (typeof result === 'string' && /\p{L}/u.test(result) && !/NaN|undefined|\[object|Invalid Date/.test(result)) return result;
  } catch { /* not a plain template */ }
  return null;
}
/** Every key a function can produce when called with zero to three arguments, for the extractor. */
export function templateKeys(fn: (...args: never[]) => unknown): string[] {
  const keys = new Set<string>();
  for (let arity = 0; arity <= 3; arity++) {
    const key = templateKey(fn, arity);
    if (key === null) continue;
    keys.add(key);
    // The wording a function uses when one value is empty, if it differs from the template's.
    for (let i = 0; i < arity; i++) {
      const actual = Array.from({ length: arity }, (_, j) => (j === i ? '' : placeholder(j)));
      const empty = templateKey(fn, arity, actual);
      if (empty !== null && empty !== formatTemplate(key, actual, 'en')) keys.add(empty);
    }
  }
  return [...keys];
}

/** Keys whose string values are identifiers, addresses or styling, never reader-facing words. */
export const machineKeys = new Set([
  'href', 'url', 'src', 'srcSet', 'path', 'slug', 'id', 'kind', 'type', 'tone', 'icon', 'image', 'img', 'colour',
  'color', 'host', 'hostPose', 'pose', 'shot', 'className', 'class', 'anchor', 'hash', 'locale', 'lang', 'hreflang',
  'rel', 'target', 'method', 'emoji', 'accent', 't', 'side', 'dir', 'cover', 'related', 'category', 'friend', 'mood',
  'campaign', 'route', 'sectionId', 'section', 'width', 'height',
]);

/** True for a string that carries words a reader sees, as opposed to a path, id or number. */
export function isProse(text: string): boolean {
  const t = text.trim();
  if (!t || !/\p{L}/u.test(t)) return false;
  if (/^(?:https?:|mailto:|tel:|\/|#|\.\/|data:)/.test(t) && !/\s/.test(t)) return false;
  if (/^[a-z0-9]+(?:[-_.][a-z0-9]+)+$/.test(t)) return false; // slugs and ids: "first-week", "help.ui"
  return true;
}

/**
 * Walk a copy object and replace every reader-facing string with `text(english)` and every function
 * with `fn(englishFunction)`. The extractor and `translateDeep` share this walk, so the strings a
 * translator is given are exactly the strings a page asks for.
 */
export function mapCopy(value: unknown, text: (english: string) => string, fn: (english: (...args: unknown[]) => unknown) => unknown, key = ''): unknown {
  if (typeof value === 'string') return machineKeys.has(key) || !isProse(value) ? value : text(value);
  if (typeof value === 'function') return fn(value as (...args: unknown[]) => unknown);
  if (Array.isArray(value)) {
    // A drawn board's rows ("R . B+") are cell codes; a table's rows are arrays of prose.
    if (key === 'rows' && value.every((row) => typeof row === 'string')) return value;
    return value.map((item) => mapCopy(item, text, fn, key));
  }
  if (value && typeof value === 'object') {
    // Elements, dates, maps and the like are not copy.
    const proto = Object.getPrototypeOf(value);
    if (proto !== Object.prototype && proto !== null) return value;
    if ('$$typeof' in (value as object)) return value;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = mapCopy(v, text, fn, k);
    return out;
  }
  return value;
}

/**
 * Translate a copy object for a catalog language: every prose string through the catalog, every
 * function as a template. Objects keep their shape, so code written against the English copy works.
 */
export function translateDeep<T>(value: T, locale: CatalogLocale): T {
  return mapCopy(value, (english) => catalogText(locale, english), (english) => {
    const wrapped = (...args: unknown[]) => {
      const k = templateKey(english as (...args: never[]) => unknown, args.length, args);
      if (k !== null) {
        const t = catalogLookup(locale, k);
        if (t !== undefined) return formatTemplate(t, args, locale);
      }
      const result = english(...args);
      return typeof result === 'string' ? result : translateDeep(result, locale);
    };
    return wrapped;
  }) as T;
}

/** Every locale map registered with `catalogRecord`, for the extractor. */
export const registeredRecords: { area: string; name: string; english: unknown; written?: Partial<Record<LegacyLocale, unknown>> }[] = [];

/**
 * English strings a module looks up in the catalogs itself (with `catalogText` or
 * `catalogTemplate`), declared once so the extractor gives them to translators.
 */
export function catalogStrings<T extends Record<string, string>>(area: string, name: string, english: T): T {
  registeredRecords.push({ area, name, english });
  return english;
}

/**
 * A locale map written for English and the first five translations, completed for every
 * catalog language from the catalogs. Each catalog language's copy is built on first use and
 * kept, so it must only be read after the catalogs are installed (which all entry points do
 * at import time).
 */
export function catalogRecord<T>(area: string, name: string, base: { en: T } & Record<LegacyLocale, T>): Record<Locale, T> {
  registeredRecords.push({ area, name, english: base.en, written: base });
  const built = new Map<string, { size: number; value: T }>();
  const target = base as Record<string, T>;
  return new Proxy(target, {
    get(obj, prop, receiver) {
      if (typeof prop === 'string' && (catalogLocales as readonly string[]).includes(prop)) {
        // Rebuild if more words were installed since (the browser installs late on dev servers).
        const size = Object.keys(store()[prop] ?? {}).length;
        const hit = built.get(prop);
        if (hit && hit.size === size) return hit.value;
        const value = translateDeep(base.en, prop as CatalogLocale);
        built.set(prop, { size, value });
        return value;
      }
      return Reflect.get(obj, prop, receiver);
    },
    has(obj, prop) {
      return (typeof prop === 'string' && (catalogLocales as readonly string[]).includes(prop)) || Reflect.has(obj, prop);
    },
    ownKeys(obj) {
      return [...new Set([...Reflect.ownKeys(obj), ...catalogLocales])];
    },
    getOwnPropertyDescriptor(obj, prop) {
      if (typeof prop === 'string' && (catalogLocales as readonly string[]).includes(prop)) {
        return { configurable: true, enumerable: true, writable: false, value: (this as ProxyHandler<Record<string, T>>).get!(obj, prop, obj) };
      }
      return Reflect.getOwnPropertyDescriptor(obj, prop);
    },
  }) as Record<Locale, T>;
}

/**
 * A catalog language's phrases as a read-only dictionary keyed by English text, for code that
 * indexes a phrase map (`dict[english]`, `english in dict`).
 */
export function catalogDict(locale: string): Record<string, string> {
  return new Proxy({} as Record<string, string>, {
    get: (_, prop) => (typeof prop === 'string' ? catalogLookup(locale, prop) : undefined),
    has: (_, prop) => typeof prop === 'string' && catalogLookup(locale, prop) !== undefined,
    ownKeys: () => Object.keys(store()[locale] ?? {}),
    getOwnPropertyDescriptor: (_, prop) => {
      const value = typeof prop === 'string' ? catalogLookup(locale, prop) : undefined;
      return value === undefined ? undefined : { configurable: true, enumerable: true, writable: false, value };
    },
  });
}

/** A phrase map written for the first five translations, with every catalog language looked up. */
export function phraseRecord<T extends Record<string, string>>(legacy: Record<LegacyLocale, T>): Record<LegacyLocale | CatalogLocale, T> {
  const out = { ...legacy } as Record<string, T>;
  for (const locale of catalogLocales) out[locale] = catalogDict(locale) as T;
  return out as Record<LegacyLocale | CatalogLocale, T>;
}

/**
 * An inline locale map (often a list of words): written for English and the first five
 * translations, completed for the catalog languages from the catalogs.
 */
export function catalogMap<T>(area: string, name: string, map: { en: T } & Partial<Record<LegacyLocale, T>>): (locale: Locale) => T {
  registeredRecords.push({ area, name, english: map.en, written: map });
  return (locale) => (locale === 'en' ? map.en : (map as Partial<Record<string, T>>)[locale] ?? translateDeep(map.en, locale as CatalogLocale));
}

/**
 * One phrase in the page language, for inline locale maps: the five first translations are written
 * beside the English, and every catalog language looks the English up.
 */
export function pick(locale: Locale, english: string, legacy: Record<LegacyLocale, string>): string {
  if (locale === 'en') return english;
  if (locale in legacy) return legacy[locale as LegacyLocale];
  return catalogText(locale, english);
}

/** A catalog language's version of an English template using `{0}`, `{1}` …, filled with `args`. */
export function catalogTemplate(locale: Locale, english: string, args: readonly unknown[]): string {
  const t = locale === 'en' ? undefined : catalogLookup(locale, english);
  return formatTemplate(t ?? english, args, t === undefined ? 'en' : locale);
}
