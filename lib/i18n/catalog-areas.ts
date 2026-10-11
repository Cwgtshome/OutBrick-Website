/**
 * The string catalog areas, in priority order: a string used by two areas is kept in the earlier
 * one. The Worker installs the first four (it renders emails and community pages at request time),
 * the browser loads `clientAreas`, and prerendering installs them all.
 */
export const catalogAreas = [
  'emails',
  'community',
  'ui',
  'support',
  'help-ui',
  'pages',
  'legal',
  'help-start',
  'help-play',
  'help-learn',
  'help-progress',
  'help-family',
  'help-accessibility',
  'help-account',
  'help-community',
] as const;
export type CatalogArea = (typeof catalogAreas)[number];

export const workerAreas: readonly CatalogArea[] = ['emails', 'community', 'ui', 'support'];
export const clientAreas: readonly CatalogArea[] = ['community', 'ui', 'support', 'help-ui', 'pages'];
