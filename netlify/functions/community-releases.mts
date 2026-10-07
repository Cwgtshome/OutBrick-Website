// Hourly: announce each new App Store version of OutBrick in the community's Announcements.
//
// Apple's public iTunes Lookup API is asked for the app in the US, French, German, Spanish and
// Japanese storefronts. A version not seen before becomes one thread, "OutBrick 5.1 is out",
// with the English What's New text, a reply per other language, and a notification for every
// member who has not muted Announcements (community-notify.mts turns those into emails).
//
// It never posts twice for one version (the version is claimed in `app_releases` inside the
// same transaction that posts), and the very first run only records the current version, so
// switching the community on does not announce a release that is weeks old. All the logic is
// netlify/community/releases.ts; this file only gives it the real `fetch` and a schedule.
//
// Scheduled functions run on published deploys only, never on Deploy Previews.

import { runReleaseBot } from '../community/releases.ts';

const communityReleases = async (): Promise<Response> => {
  try {
    const result = await runReleaseBot(fetch);
    console.log(`[community-releases] ${result.action}${result.version ? ` ${result.version}` : ''}${result.reason ? `: ${result.reason}` : ''}${result.notified != null ? ` (${result.notified} notified)` : ''}`);
  } catch (error) {
    console.error('[community-releases] failed:', error instanceof Error ? error.message : String(error));
  }
  return new Response(null, { status: 204 });
};

export default communityReleases;

export const config = {
  schedule: '@hourly',
};
