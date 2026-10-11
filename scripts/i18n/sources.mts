// Where the English copy of each catalog area comes from. Importing the modules registers their
// `catalogRecord` locale maps; the rest are listed here as copy objects or phrase lists.
import type { CatalogArea } from '../../lib/i18n/catalog-areas.ts';

type Copy = { area: CatalogArea; name: string; english: unknown };
type Phrases = { area: CatalogArea; name: string; phrases: Iterable<string> };

export async function catalogSources() {
  const copies: Copy[] = [];
  const phrases: Phrases[] = [];

  // Modules whose locale maps are `catalogRecord`s register themselves on import.
  for (const mod of [
    'lib/i18n/home.ts', 'lib/i18n/chrome.ts', 'lib/i18n/board.ts', 'lib/i18n/consent.ts', 'lib/i18n/current-game.ts',
    'lib/i18n/daily.ts', 'lib/i18n/forms.ts', 'lib/i18n/home-journal.ts', 'lib/i18n/interactive.ts', 'lib/i18n/newsletter.ts',
    'lib/i18n/play.ts', 'lib/i18n/release-extras.ts', 'lib/i18n/search.ts', 'lib/i18n/site.ts', 'lib/i18n/whats-new.ts',
    'lib/i18n/blog.ts', 'lib/help/ui.ts', 'lib/support/content.ts', 'lib/support/copy/index.ts', 'lib/releases.ts',
    'lib/i18n/catalog-phrases.ts', 'lib/i18n/catalog-maps.ts', 'lib/i18n/public-dynamic.ts', 'lib/i18n/results.ts',
    'lib/i18n/application.ts', 'lib/i18n/community.ts', 'lib/i18n/community-fx.ts', 'lib/community/player-guides.ts',
    'emails/i18n.ts', 'emails/brand.ts', 'emails/community-p2-i18n.ts', 'emails/community-fx-i18n.ts', 'emails/community-i18n.ts',
    'emails/friends.ts', 'emails/lifecycle-i18n.ts', 'emails/support-centre.ts', 'emails/templates.ts',
  ]) await import(`../../${mod}`);

  // The Help Centre's guides, one area per source file so each can be translated on its own.
  const help: [CatalogArea, string, string][] = [
    ['help-start', 'start-more', 'startMoreArticles'],
    ['help-play', 'play', 'playArticles'],
    ['help-learn', 'learn', 'learnArticles'],
    ['help-progress', 'progress', 'progressArticles'],
    ['help-family', 'family', 'familyArticles'],
    ['help-accessibility', 'accessibility', 'accessibilityArticles'],
    ['help-account', 'account', 'accountArticles'],
    ['help-community', 'community', 'communityArticles'],
  ];
  for (const [area, file, name] of help) {
    const mod = await import(`../../lib/help/content/en/${file}.ts`);
    for (const article of mod[name] as { slug: string }[]) copies.push({ area, name: `help:${article.slug}`, english: article });
  }

  // Phrase dictionaries: the French map is complete, so its keys are the English source.
  const { legalPages } = await import('../../lib/i18n/legal-pages.ts');
  phrases.push({ area: 'legal', name: 'legal', phrases: Object.keys(legalPages.fr) });
  const { publicPages } = await import('../../lib/i18n/public-pages.ts');
  phrases.push({ area: 'pages', name: 'page phrase', phrases: Object.keys(publicPages.fr) });

  return { copies, phrases, skipRecords: new Set(['byLocale']) };
}
