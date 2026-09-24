export const siteUrl = 'https://www.outbrick.site';

/**
 * OutBrick's social profiles: shown in the footer and listed as `sameAs` in the Organization
 * structured data, so search engines tie the profiles to the site. Add a row per new network.
 */
export const socialProfiles: { network: 'tiktok'; label: string; url: string }[] = [
  { network: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@outbrick' },
];

/**
 * Metadata for a single page. A page that sets `openGraph` replaces the root layout's whole
 * `openGraph` object rather than merging into it, so the image and site name are repeated
 * here; and every page names its own canonical, because the layout's would be inherited.
 */
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website' as const,
      siteName: 'OutBrick',
      url: path,
      title,
      description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'OutBrick mascots and home screen' }],
    },
    twitter: { card: 'summary_large_image' as const, title, description, images: ['/og.png'] },
  };
}

/**
 * Gameplay footage for the home hero and the press kit. `null` until a real capture exists;
 * drop the files in public/video/ and fill this in (see docs/CAPTURES.md).
 */
export const GAMEPLAY_VIDEO: null | { mp4: string; webm?: string; poster: string; width: number; height: number } = null;
