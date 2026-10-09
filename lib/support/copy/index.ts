import type { Locale } from '../../i18n/locales.ts';
import type { SupportCopy } from '../model.ts';
import { en } from './en.ts';
import { fr } from './fr.ts';
import { de } from './de.ts';
import { es } from './es.ts';
import { ja } from './ja.ts';
import { ptBR } from './pt-BR.ts';

/**
 * The Support Centre's words in every language, without the known issues or the Help Centre's
 * content, so client components can read them by locale (some entries are functions, which
 * cannot be passed from a server component as props).
 */
export const supportCopies: Record<Locale, SupportCopy> = { en, fr, de, es, ja, 'pt-BR': ptBR };
