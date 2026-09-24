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
 */
export function appStoreUrl(campaign: string): string {
  const params = new URLSearchParams({ mt: '8', ct: `web-${campaign}`.slice(0, 40) });
  if (APP_STORE_PROVIDER_TOKEN) params.set('pt', APP_STORE_PROVIDER_TOKEN);
  return `${APP_STORE_URL}?${params.toString()}`;
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
