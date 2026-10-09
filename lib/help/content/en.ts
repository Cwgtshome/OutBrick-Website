import type { HelpContent } from '../model.ts';
import { playArticles } from './en/play.ts';
import { progressArticles } from './en/progress.ts';
import { accessibilityArticles } from './en/accessibility.ts';
import { accountArticles } from './en/account.ts';
import { communityArticles } from './en/community.ts';
import { familyArticles } from './en/family.ts';
import { startMoreArticles } from './en/start-more.ts';
import { learnArticles } from './en/learn.ts';

/** The Help Centre in English: the source every translation follows. */
export const en: HelpContent = {
  locale: 'en',
  articles: [...playArticles, ...progressArticles, ...accessibilityArticles, ...accountArticles, ...communityArticles, ...familyArticles, ...startMoreArticles, ...learnArticles],
};
