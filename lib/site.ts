export const siteUrl = 'https://www.outbrick.site';

export type SocialNetwork = 'tiktok' | 'youtube' | 'instagram' | 'snapchat' | 'x';

/**
 * OutBrick's social profiles, all on the handle `outbrick`. Every row is shown in the footer;
 * only `live` rows are listed as `sameAs` in the Organization structured data (lib/structured-data.ts),
 * because `sameAs` tells search engines "this profile is us" and a reserved-but-empty profile
 * should not be vouched for yet. Flip `live` to true once a profile has posted.
 */
export const socialProfiles: { network: SocialNetwork; label: string; url: string; live: boolean }[] = [
  { network: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@outbrick', live: true },
  { network: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@outbrick', live: false },
  { network: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/outbrick', live: false },
  { network: 'snapchat', label: 'Snapchat', url: 'https://www.snapchat.com/add/outbrick', live: false },
  { network: 'x', label: 'X (Twitter)', url: 'https://x.com/outbrick', live: false },
];

/** The profiles the Organization structured data vouches for. */
export const liveSocialUrls = () => socialProfiles.filter((profile) => profile.live).map((profile) => profile.url);


/**
 * Metadata for a single page. A page that sets `openGraph` replaces the root layout's whole
 * `openGraph` object rather than merging into it, so the image and site name are repeated
 * here; and every page names its own canonical, because the layout's would be inherited.
 */
export function pageMetadata({
  path,
  title,
  description,
  imageAlt = 'OutBrick mascots and home screen',
}: {
  path: string;
  title: string;
  description: string;
  /** Alt text for the shared /og.png card, when a page wants to describe it in its own words. */
  imageAlt?: string;
}) {
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
      images: [{ url: '/og.png', width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: { card: 'summary_large_image' as const, title, description, images: [{ url: '/og.png', alt: imageAlt }] },
  };
}

/**
 * Gameplay footage for the home hero and the press kit. `null` until a real capture exists;
 * drop the files in public/video/ and fill this in (see docs/CAPTURES.md).
 */
export const GAMEPLAY_VIDEO: null | { mp4: string; webm?: string; poster: string; width: number; height: number } = null;
