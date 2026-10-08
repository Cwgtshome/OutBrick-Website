/**
 * Responsive variants of the site's raster art, kept beside the originals in `public/`.
 *
 * Journal covers are 1600 × 900 WebP (scripts/make-cover.py); each also has a 960 px wide
 * `-960.webp` sibling, English and neutral alike (scripts/audit-localized-assets.mjs checks it),
 * so a phone or a small card does not download the full cover. Pass the already-localized
 * cover URL: the variant is its sibling.
 */
export function coverSrcSet(src: string): string | undefined {
  if (!/^\/blog\/(?:neutral\/)?[a-z0-9-]+\.webp$/.test(src)) return undefined;
  return `${src.replace(/\.webp$/, '-960.webp')} 960w, ${src} 1600w`;
}

/**
 * A friend's portrait (`/assets/friends/<slug>.webp`, 360 px) with its 240 px variant.
 */
export function friendSrcSet(slug: string): string {
  return `/assets/friends/${slug}-240.webp 240w, /assets/friends/${slug}.webp 360w`;
}
