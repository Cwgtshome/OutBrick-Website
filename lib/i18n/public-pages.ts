import type { TranslatedLocale } from './locales';
import { de } from './public-pages-de.ts';
import { fr } from './public-pages-fr.ts';
import { es } from './public-pages-es.ts';
import { ja } from './public-pages-ja.ts';
/** Full, phrase-level page translations shared by existing English layouts. */
export const publicPages: Record<TranslatedLocale, Record<string, string>> = { fr, de, es, ja };
