import type { HelpContent } from '../model.ts';
import { playArticles } from './pt-BR/play.ts';
import { progressArticles } from './pt-BR/progress.ts';
import { accessibilityArticles } from './pt-BR/accessibility.ts';
import { accountArticles } from './pt-BR/account.ts';
import { communityArticles } from './pt-BR/community.ts';
import { familyArticles } from './pt-BR/family.ts';
import { startMoreArticles } from './pt-BR/start-more.ts';
import { learnArticles } from './pt-BR/learn.ts';

/** A Central de Ajuda em português do Brasil: uma tradução nativa do original em inglês. */
export const ptBR: HelpContent = {
  locale: 'pt-BR',
  articles: [...playArticles, ...progressArticles, ...accessibilityArticles, ...accountArticles, ...communityArticles, ...familyArticles, ...startMoreArticles, ...learnArticles],
};
