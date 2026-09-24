export const siteUrl = 'https://www.outbrick.site';

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
