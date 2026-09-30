import type { ExtraGuides } from '../../i18n/blog';
import type { TranslatedLocale } from '../../i18n/locales';
import { de1 } from './de-1';
import { de2 } from './de-2';
import { de3 } from './de-3';
import { de4 } from './de-4';
import { de5 } from './de-5';
import { de6 } from './de-6';
import { de7 } from './de-7';
import { de8 } from './de-8';
import { de9 } from './de-9';
import { de10 } from './de-10';
import { es1 } from './es-1';
import { es2 } from './es-2';
import { es3 } from './es-3';
import { es4 } from './es-4';
import { es5 } from './es-5';
import { es6 } from './es-6';
import { es7 } from './es-7';
import { es8 } from './es-8';
import { es9 } from './es-9';
import { es10 } from './es-10';
import { fr1 } from './fr-1';
import { fr2 } from './fr-2';
import { fr3 } from './fr-3';
import { fr4 } from './fr-4';
import { fr5 } from './fr-5';
import { fr6 } from './fr-6';
import { fr7 } from './fr-7';
import { fr8 } from './fr-8';
import { fr9 } from './fr-9';
import { fr10 } from './fr-10';
import { ja1 } from './ja-1';
import { ja2 } from './ja-2';
import { ja3 } from './ja-3';
import { ja4 } from './ja-4';
import { ja5 } from './ja-5';
import { ja6 } from './ja-6';
import { ja7 } from './ja-7';
import { ja8 } from './ja-8';
import { ja9 } from './ja-9';
import { ja10 } from './ja-10';

/** The journal batches' translations, one file per language and batch. */
export const extraGuides: Record<TranslatedLocale, ExtraGuides> = {
  fr: { ...fr1, ...fr2, ...fr3, ...fr4, ...fr5, ...fr6, ...fr7, ...fr8, ...fr9, ...fr10 },
  de: { ...de1, ...de2, ...de3, ...de4, ...de5, ...de6, ...de7, ...de8, ...de9, ...de10 },
  es: { ...es1, ...es2, ...es3, ...es4, ...es5, ...es6, ...es7, ...es8, ...es9, ...es10 },
  ja: { ...ja1, ...ja2, ...ja3, ...ja4, ...ja5, ...ja6, ...ja7, ...ja8, ...ja9, ...ja10 },
};
