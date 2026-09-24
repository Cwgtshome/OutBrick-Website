import type { ExtraGuides } from '../../i18n/blog';
import type { TranslatedLocale } from '../../i18n/locales';
import { de1 } from './de-1';
import { de2 } from './de-2';
import { de3 } from './de-3';
import { de4 } from './de-4';
import { de5 } from './de-5';
import { es1 } from './es-1';
import { es2 } from './es-2';
import { es3 } from './es-3';
import { es4 } from './es-4';
import { es5 } from './es-5';
import { fr1 } from './fr-1';
import { fr2 } from './fr-2';
import { fr3 } from './fr-3';
import { fr4 } from './fr-4';
import { fr5 } from './fr-5';
import { ja1 } from './ja-1';
import { ja2 } from './ja-2';
import { ja3 } from './ja-3';
import { ja4 } from './ja-4';
import { ja5 } from './ja-5';

/** The journal batches' translations, one file per language and batch. */
export const extraGuides: Record<TranslatedLocale, ExtraGuides> = {
  fr: { ...fr1, ...fr2, ...fr3, ...fr4, ...fr5 },
  de: { ...de1, ...de2, ...de3, ...de4, ...de5 },
  es: { ...es1, ...es2, ...es3, ...es4, ...es5 },
  ja: { ...ja1, ...ja2, ...ja3, ...ja4, ...ja5 },
};
