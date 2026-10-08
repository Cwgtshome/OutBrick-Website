import { localeAlternates } from './i18n/locales.ts';
export const siteUrl = 'https://www.outbrick.site';

export type SocialNetwork = 'tiktok' | 'youtube' | 'instagram' | 'snapchat' | 'x';

/**
 * OutBrick's social profiles, all on the handle `outbrick`. Rows with `shown` are linked from the
 * website footer and the email footer; only `live` and `shown` rows are listed as `sameAs` in the
 * Organization structured data (lib/structured-data.ts), because `sameAs` tells search engines
 * "this profile is us" and a reserved-but-empty profile should not be vouched for yet. Flip `live`
 * to true once a profile has posted.
 *
 * Snapchat is kept but not shown: on 8 October 2026 both snapchat.com/add/outbrick and
 * snapchat.com/@outbrick answered 404, so the profile does not exist yet. Set `shown: true` once
 * it does (the footer icon and the email tile, public/assets/email/social-snapchat.png, are ready).
 */
export const socialProfiles: { network: SocialNetwork; label: string; url: string; live: boolean; shown: boolean }[] = [
  { network: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@outbrick', live: true, shown: true },
  { network: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@outbrick', live: false, shown: true },
  { network: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/outbrick', live: false, shown: true },
  { network: 'snapchat', label: 'Snapchat', url: 'https://www.snapchat.com/add/outbrick', live: false, shown: false },
  { network: 'x', label: 'X (Twitter)', url: 'https://x.com/outbrick', live: false, shown: true },
];

/** The profiles the footers link to. */
export const shownSocialProfiles = () => socialProfiles.filter((profile) => profile.shown);

/** The profiles the Organization structured data vouches for. */
export const liveSocialUrls = () => shownSocialProfiles().filter((profile) => profile.live).map((profile) => profile.url);


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
    alternates: localeAlternates('en', path),
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
