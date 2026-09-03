import type { MetadataRoute } from 'next';
import { articles } from '../lib/blog';
import { siteUrl } from '../lib/site';

const staticRoutes = ['/', '/blog', '/play', '/support', '/contact', '/accessibility', '/age-rating', '/privacy', '/privacy-choices', '/terms', '/eula', '/license-agreement', '/refunds'];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: '2026-09-04',
      changeFrequency: route === '/blog' ? 'weekly' as const : 'monthly' as const,
      priority: route === '/' ? 1 : route === '/blog' ? 0.95 : 0.5,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: '2026-09-04',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
