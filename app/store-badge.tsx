export const APP_STORE_ID = '6807997465';
export const APP_STORE_URL = `https://apps.apple.com/us/app/outbrick/id${APP_STORE_ID}`;

/**
 * App Store Connect's provider token, from App Analytics → Campaigns → Generate Campaign Link.
 * Apple only attributes a campaign (`ct`) to App Analytics when the link also carries the
 * provider token (`pt`); until it is filled in, links keep `ct` and App Analytics ignores it.
 */
export const APP_STORE_PROVIDER_TOKEN = '';

/**
 * The App Store address for one placement on the site. `campaign` names where the link sits
 * (`home-hero`, `header`, `board-clear` …), so App Analytics can say which one sent a download.
 * Structured data keeps the plain {@link APP_STORE_URL}.
 *
 * `storefront` is the App Store country code (`us`, `fr`, `de`, `es`, `jp` …). The translated
 * pages link to their own country's storefront, where the app has the same id; the default is
 * the US storefront every English page has always used.
 */
export function appStoreUrl(campaign: string, storefront = 'us'): string {
  const params = new URLSearchParams({ mt: '8', ct: `web-${campaign}`.slice(0, 40) });
  if (APP_STORE_PROVIDER_TOKEN) params.set('pt', APP_STORE_PROVIDER_TOKEN);
  return `${appStoreStorefrontUrl(storefront)}?${params.toString()}`;
}

/** The plain storefront address, without campaign parameters, for structured data. */
export function appStoreStorefrontUrl(storefront = 'us'): string {
  return storefront === 'us' ? APP_STORE_URL : `https://apps.apple.com/${storefront}/app/outbrick/id${APP_STORE_ID}`;
}

export function StoreBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`app-store-badge ${compact ? 'app-store-badge-compact' : ''}`}
      href={appStoreUrl('badge')}
      target="_blank"
      rel="noreferrer"
      aria-label="Find OutBrick on the App Store"
      title="Find OutBrick on the App Store"
    >
      <span className="apple-glyph" aria-hidden="true"></span>
      <span className="app-store-badge-copy"><small>Download on the</small><strong>App Store</strong></span>
    </a>
  );
}
