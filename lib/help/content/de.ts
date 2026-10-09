import type { HelpContent } from '../model.ts';
import { playArticles } from './de/play.ts';
import { progressArticles } from './de/progress.ts';
import { accessibilityArticles } from './de/accessibility.ts';
import { accountArticles } from './de/account.ts';
import { communityArticles } from './de/community.ts';
import { familyArticles } from './de/family.ts';
import { startMoreArticles } from './de/start-more.ts';
import { learnArticles } from './de/learn.ts';

/** Das Hilfe-Center auf Deutsch: eine eigene Übersetzung der englischen Quelle (en.ts). */
export const de: HelpContent = {
  locale: 'de',
  articles: [...playArticles, ...progressArticles, ...accessibilityArticles, ...accountArticles, ...communityArticles, ...familyArticles, ...startMoreArticles, ...learnArticles],
};
