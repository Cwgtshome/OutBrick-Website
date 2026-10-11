import { catalogStrings } from './catalog.ts';

/**
 * Phrases that code builds around a value (a number, a code, a level), for the catalog languages.
 * The first five translations write theirs beside the code that uses them.
 */
export const phrases = catalogStrings('ui', 'phrases', {
  under: 'Under {0}',
  over: 'Over {0}',
  proposedCode: 'Proposed code {0}.',
  headToLevel: 'Head to Level {0} and play it.',
  category: 'games',
  knowsAbout1: 'puzzle game design',
  knowsAbout2: 'gaming habits',
  knowsAbout3: 'game accessibility',
  knowsAbout4: 'player experience',
  notFoundTitle: 'Page not found',
  notFoundDescription: 'This page slid off the board. Head back to OutBrick or to support.',
});
