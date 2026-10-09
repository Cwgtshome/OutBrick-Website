import type { HelpContent } from '../model.ts';
import { playArticles } from './es/play.ts';
import { progressArticles } from './es/progress.ts';
import { accessibilityArticles } from './es/accessibility.ts';
import { accountArticles } from './es/account.ts';
import { communityArticles } from './es/community.ts';

/** El Centro de ayuda en español: una traducción nativa del original en inglés. */
export const es: HelpContent = {
  locale: 'es',
  articles: [...playArticles, ...progressArticles, ...accessibilityArticles, ...accountArticles, ...communityArticles],
};
