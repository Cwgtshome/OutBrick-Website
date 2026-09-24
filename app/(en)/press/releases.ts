/**
 * Press releases. One so far; /press lists them newest first and each has its own page.
 * Every fact in a release must already be on the site (the press kit's fact sheet, the home
 * page) or in the App Store record — nothing is announced here first.
 */
export type PressRelease = {
  slug: string;
  headline: string;
  /** The short title for the page <title> and cards. */
  short: string;
  dek: string;
  /** ISO date the release was issued. */
  published: string;
  /** How the dateline prints it. */
  dateline: string;
};

export const pressReleases: PressRelease[] = [
  {
    slug: 'outbrick-4-2',
    headline: 'OutBrick 4.2 is on the App Store: 2,000 solver-verified boards, 167 brick villages and nine brick friends',
    short: 'OutBrick 4.2 arrives on the App Store',
    dek: 'The sliding-brick colour-sort puzzle for iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple Watch, where a board looks impossible and never is.',
    published: '2026-09-24',
    dateline: '24 September 2026',
  },
];
