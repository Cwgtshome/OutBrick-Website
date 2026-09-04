import type { MetadataRoute } from 'next';
import { articles, authors } from '../lib/blog';
import { mascotStories } from '../lib/mascots';
import { siteUrl } from '../lib/site';

const staticRoutes = ['/', '/blog', '/about', '/authors', '/research', '/mascots', '/press-kit', '/play', '/support', '/contact', '/accessibility', '/age-rating', '/privacy', '/privacy-choices', '/terms', '/eula', '/license-agreement', '/refunds'];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: '2026-09-04',
      changeFrequency: route === '/blog' || route === '/research' ? 'weekly' as const : 'monthly' as const,
      priority: route === '/' ? 1 : route === '/blog' ? 0.95 : route === '/press-kit' || route === '/about' || route === '/authors' || route === '/research' ? 0.75 : 0.5,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: '2026-09-04',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...authors.map((author) => ({
      url: `${siteUrl}/authors/${author.id}`,
      lastModified: '2026-09-04',
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
    ...mascotStories.map((story) => ({
      url: `${siteUrl}/mascots/${story.id}`,
      lastModified: '2026-09-04',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
