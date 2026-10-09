import type { HelpContent } from '../model.ts';
import { playArticles } from './ja/play.ts';
import { progressArticles } from './ja/progress.ts';
import { accessibilityArticles } from './ja/accessibility.ts';
import { accountArticles } from './ja/account.ts';
import { communityArticles } from './ja/community.ts';
import { familyArticles } from './ja/family.ts';
import { startMoreArticles } from './ja/start-more.ts';
import { learnArticles } from './ja/learn.ts';

/** The Help Centre in Japanese: a native translation of the English guides. */
export const ja: HelpContent = {
  locale: 'ja',
  articles: [...playArticles, ...progressArticles, ...accessibilityArticles, ...accountArticles, ...communityArticles, ...familyArticles, ...startMoreArticles, ...learnArticles],
};
