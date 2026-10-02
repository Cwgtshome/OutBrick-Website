import type { ExtraGuides } from '../../i18n/blog.ts';
import type { TranslatedLocale } from '../../i18n/locales.ts';
import { de1 } from './de-1.ts';
import { de2 } from './de-2.ts';
import { de3 } from './de-3.ts';
import { de4 } from './de-4.ts';
import { de5 } from './de-5.ts';
import { de6 } from './de-6.ts';
import { de7 } from './de-7.ts';
import { de8 } from './de-8.ts';
import { de9 } from './de-9.ts';
import { de10 } from './de-10.ts';
import { de11 } from './de-11.ts';
import { es1 } from './es-1.ts';
import { es2 } from './es-2.ts';
import { es3 } from './es-3.ts';
import { es4 } from './es-4.ts';
import { es5 } from './es-5.ts';
import { es6 } from './es-6.ts';
import { es7 } from './es-7.ts';
import { es8 } from './es-8.ts';
import { es9 } from './es-9.ts';
import { es10 } from './es-10.ts';
import { es11 } from './es-11.ts';
import { fr1 } from './fr-1.ts';
import { fr2 } from './fr-2.ts';
import { fr3 } from './fr-3.ts';
import { fr4 } from './fr-4.ts';
import { fr5 } from './fr-5.ts';
import { fr6 } from './fr-6.ts';
import { fr7 } from './fr-7.ts';
import { fr8 } from './fr-8.ts';
import { fr9 } from './fr-9.ts';
import { fr10 } from './fr-10.ts';
import { fr11 } from './fr-11.ts';
import { ja1 } from './ja-1.ts';
import { ja2 } from './ja-2.ts';
import { ja3 } from './ja-3.ts';
import { ja4 } from './ja-4.ts';
import { ja5 } from './ja-5.ts';
import { ja6 } from './ja-6.ts';
import { ja7 } from './ja-7.ts';
import { ja8 } from './ja-8.ts';
import { ja9 } from './ja-9.ts';
import { ja10 } from './ja-10.ts';
import { ja11 } from './ja-11.ts';

/** The journal batches' translations, one file per language and batch. */
export const extraGuides: Record<TranslatedLocale, ExtraGuides> = {
  fr: { ...fr1, ...fr2, ...fr3, ...fr4, ...fr5, ...fr6, ...fr7, ...fr8, ...fr9, ...fr10, ...fr11 },
  de: { ...de1, ...de2, ...de3, ...de4, ...de5, ...de6, ...de7, ...de8, ...de9, ...de10, ...de11 },
  es: { ...es1, ...es2, ...es3, ...es4, ...es5, ...es6, ...es7, ...es8, ...es9, ...es10, ...es11 },
  ja: { ...ja1, ...ja2, ...ja3, ...ja4, ...ja5, ...ja6, ...ja7, ...ja8, ...ja9, ...ja10, ...ja11 },
};
