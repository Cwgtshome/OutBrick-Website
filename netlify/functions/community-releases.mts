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

import { fetchStorefronts, releaseFingerprint, runReleaseBot, type FetchLike, type ReleaseRunResult } from '../community/releases.ts';
import { releasesChanged, rememberReleases, signalNotifyWork } from '../community/idle.ts';

/**
 * One hourly tick, exported for tests. Apple's lookup costs nothing; the database is opened only
 * when the versions seen differ from the fingerprint stored after the last successful run.
 */
export async function releaseTick(fetchFn: FetchLike): Promise<ReleaseRunResult | { action: 'unchanged' } | { action: 'no-lookup' }> {
  const found = await fetchStorefronts(fetchFn);
  if (!found.some((f) => f.locale === 'en')) return { action: 'no-lookup' };
  const fingerprint = releaseFingerprint(found);
  if (!(await releasesChanged(fingerprint))) return { action: 'unchanged' };
  const result = await runReleaseBot(fetchFn, found);
  if (result.action === 'post') await signalNotifyWork();
  // Remember only after the database has the outcome, so a failed run is retried next hour.
  await rememberReleases(fingerprint);
  return result;
}

const communityReleases = async (): Promise<Response> => {
  try {
    const result = await releaseTick(fetch);
    if (result.action === 'unchanged' || result.action === 'no-lookup') return new Response(null, { status: 204 });
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
