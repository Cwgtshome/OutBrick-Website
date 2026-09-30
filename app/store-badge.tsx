import { appStoreUrl } from '../lib/app-store-url';
export { APP_STORE_ID, APP_STORE_URL, APP_STORE_PROVIDER_TOKEN, appStoreUrl, appStoreStorefrontUrl } from '../lib/app-store-url';

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
