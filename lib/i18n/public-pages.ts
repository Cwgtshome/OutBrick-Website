import { currentPublicCopy } from './current-public.ts';
import type { TranslatedLocale } from './locales';
import { de } from './public-pages-de.ts';
import { fr } from './public-pages-fr.ts';
import { es } from './public-pages-es.ts';
import { ja } from './public-pages-ja.ts';
import { de as extraDe } from './carryovers-de.ts';
import { fr as extraFr } from './carryovers-fr.ts';
import { es as extraEs } from './carryovers-es.ts';
import { ja as extraJa } from './carryovers-ja.ts';
import { emailPages } from './email-pages.ts';
import { communitySupportPhrases as cm } from './community.ts';
/** Full, phrase-level page translations shared by existing English layouts. */
export const publicPages: Record<TranslatedLocale, Record<string, string>> = {
  fr: {...fr, ...extraFr, ...emailPages.fr, ...cm('fr'), ...currentPublicCopy.fr}, de: {...de, ...extraDe, ...emailPages.de, ...cm('de'), ...currentPublicCopy.de}, es: {...es, ...extraEs, ...emailPages.es, ...cm('es'), ...currentPublicCopy.es}, ja: {...ja, ...extraJa, ...emailPages.ja, ...cm('ja'), ...currentPublicCopy.ja},
};
