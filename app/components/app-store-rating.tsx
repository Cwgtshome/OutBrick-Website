import stats from '../../lib/generated/app-store.json';
import { appStoreUrl } from '../store-badge';

/**
 * Below this many ratings the average says more about chance than about the game, so the line
 * stays hidden. The number comes from Apple's own record at build time (scripts/prebuild.mjs);
 * nothing here is typed in by hand.
 */
export const MIN_RATINGS = 20;

export function AppStoreRating({ campaign = 'rating', label }: { campaign?: string; label?: (count: string) => string }) {
  const { averageUserRating: average, userRatingCount: count } = stats;
  if (count < MIN_RATINGS || !average) return null;

  const rounded = Math.round(average * 10) / 10;
  const countText = new Intl.NumberFormat('en').format(count);
  const full = Math.round(average);
  return (
    <a className="app-rating" href={appStoreUrl(campaign)} aria-label={`Rated ${rounded} out of 5 from ${countText} ratings on the App Store`}>
      <span className="app-rating-stars" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < full ? 'on' : undefined}>★</span>
        ))}
      </span>
      <b aria-hidden="true">{rounded.toFixed(1)}</b>
      <span aria-hidden="true">{label ? label(countText) : `${countText} ratings on the App Store`}</span>
    </a>
  );
}
