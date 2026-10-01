import type { TranslatedLocale } from './locales';
import { de } from './public-pages-de.ts';
import { fr } from './public-pages-fr.ts';
import { es } from './public-pages-es.ts';
import { ja } from './public-pages-ja.ts';
import { de as extraDe } from './carryovers-de.ts';
import { fr as extraFr } from './carryovers-fr.ts';
import { es as extraEs } from './carryovers-es.ts';
import { ja as extraJa } from './carryovers-ja.ts';
/** Full, phrase-level page translations shared by existing English layouts. */
export const publicPages: Record<TranslatedLocale, Record<string, string>> = {
  fr: {...fr, ...extraFr}, de: {...de, ...extraDe}, es: {...es, ...extraEs}, ja: {...ja, ...extraJa},
};
