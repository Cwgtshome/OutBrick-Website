// Public database content is created between builds. Use the anonymous forum visibility
// predicate, never an owner session, so moderation and draft content stay out of search.
import { communityLocales, communityPath, threadPath, type CommunityLocale } from '../lib/community/contract.ts';
import { Params, run, threadJoins, threadVisible } from '../netlify/community/forum.ts';

const origin = 'https://www.outbrick.site';
const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export async function communitySitemap(): Promise<Response> {
  const params = new Params();
  const [threads, content] = await Promise.all([
    run(`SELECT t.id::int, t.slug, t.language, t.updated_at ${threadJoins}
      WHERE ${threadVisible(params, null)} ORDER BY t.id LIMIT 50001`, params.values),
    run("SELECT locale, kind, slug, updated_at FROM editorial_content WHERE state='published' ORDER BY id LIMIT 50001"),
  ]);
  if (threads.length + content.length > 50000) throw new Error('Community sitemap needs partitioning before exceeding 50000 URLs.');
  const entries = [
    ...threads.map(row => ({ locale: String(row.language), path: threadPath(row.language as CommunityLocale, { id: Number(row.id), slug: String(row.slug) }), updatedAt: row.updated_at })),
    ...content.map(row => ({ locale: String(row.locale), path: communityPath(row.locale as CommunityLocale, `/content/${String(row.kind)}/${encodeURIComponent(String(row.slug))}`), updatedAt: row.updated_at })),
  ].filter(entry => communityLocales.includes(entry.locale as CommunityLocale));
  const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...entries.map(entry => {
    const date = new Date(String(entry.updatedAt));
    const lastmod = Number.isFinite(date.getTime()) ? `<lastmod>${date.toISOString()}</lastmod>` : '';
    return `  <url><loc>${escapeXml(origin + entry.path)}</loc>${lastmod}</url>`;
  }), '</urlset>', ''].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=300', 'X-Content-Type-Options': 'nosniff' } });
}
