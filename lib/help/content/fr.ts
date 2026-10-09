import type { HelpContent } from '../model.ts';
import { playArticles } from './fr/play.ts';
import { progressArticles } from './fr/progress.ts';
import { accessibilityArticles } from './fr/accessibility.ts';
import { accountArticles } from './fr/account.ts';
import { communityArticles } from './fr/community.ts';
import { familyArticles } from './fr/family.ts';
import { startMoreArticles } from './fr/start-more.ts';
import { learnArticles } from './fr/learn.ts';

/** Le Centre d’aide en français, traduit de la source anglaise (lib/help/content/en). */
export const fr: HelpContent = {
  locale: 'fr',
  articles: [...playArticles, ...progressArticles, ...accessibilityArticles, ...accountArticles, ...communityArticles, ...familyArticles, ...startMoreArticles, ...learnArticles],
};
