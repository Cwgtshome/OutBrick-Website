export const APP_STORE_URL = 'https://apps.apple.com/us/app/outbrick/id6807997465';

export function StoreBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`app-store-badge ${compact ? 'app-store-badge-compact' : ''}`}
      href={APP_STORE_URL}
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
