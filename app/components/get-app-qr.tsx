/**
 * "Scan to get OutBrick on iPhone": a QR code of the App Store listing, a
 * caption and Apple's badge, on a cream brick.
 *
 * It only shows where a QR code is the shorter path — a mouse or trackpad on a
 * wide screen (`(hover: hover) and (pointer: fine) and (min-width: 1024px)`,
 * see app/styles/growth.css). On a phone it is `display: none`, and the badge
 * the page already carries does the job. The code is drawn at build time
 * (app/components/qr-code.tsx), so the card costs no script and no request
 * beyond the badge image.
 */

import { chromeCopy } from '../../lib/i18n/chrome';
import type { Locale } from '../../lib/i18n/locales';
import { getAppCopy } from '../../lib/i18n/whats-new';
import { localeStoreUrl } from '../village-shell';
import { QrCode } from './qr-code';
import '../styles/growth.css';

export function GetAppQr({ locale = 'en', centred = false }: { locale?: Locale; centred?: boolean }) {
  const copy = getAppCopy[locale];
  const chrome = chromeCopy[locale];
  // English: exactly appStoreUrl('qr-desktop'). Translated pages: that language's storefront.
  const qrUrl = localeStoreUrl('qr-desktop', locale);
  return (
    <aside className={`obx-getapp ${centred ? 'centred' : ''}`} aria-label={copy.title}>
      <QrCode className="obx-getapp-code" value={qrUrl} label={copy.qrLabel} size={148} />
      <div className="obx-getapp-copy">
        <p className="obx-getapp-eyebrow">{copy.eyebrow}</p>
        <p className="obx-getapp-title">{copy.title}</p>
        <p className="obx-getapp-caption">{copy.caption}</p>
        <a className="obx-getapp-badge" href={localeStoreUrl('qr-card', locale)} aria-label={chrome.badgeLabel}>
          <img src="/assets/badge/appstore-black.svg" alt={chrome.badgeAlt} width={120} height={40} loading="lazy" decoding="async" />
        </a>
      </div>
    </aside>
  );
}
