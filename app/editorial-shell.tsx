/**
 * The journal side of the domain — about, authors, research, blog, mascots and
 * the press kit — wearing the same brick chrome as the game pages.
 *
 * Only the furniture changed. The body of those routes is still their own
 * markup and their own styles: a redesign of twenty blog posts is a separate
 * job, and they are indexed content, so nothing here deletes or moves them.
 * What this does is stop them reading as a different website — one masthead,
 * one footer, one palette across every page on the domain.
 *
 * `OutBrickLogo` is kept because the article layouts still set it in running
 * text; the masthead no longer uses it.
 */

import { editorialNav, VillageFooter, VillageHeader } from './village-shell';

export function OutBrickLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark-compact' : ''}`} aria-label="OutBrick">
      {'OUTBRICK'.split('').map((letter, index) => (
        <span className={`wordmark-letter letter-${index}`} aria-hidden="true" key={`${letter}-${index}`}>
          {letter}
        </span>
      ))}
    </span>
  );
}

const currentHref: Record<string, string> = {
  about: '/about',
  authors: '/authors',
  research: '/research',
  blog: '/blog',
  mascots: '/mascots',
  'press-kit': '/press-kit',
};

export function EditorialHeader({
  current,
}: {
  current?: 'about' | 'authors' | 'research' | 'blog' | 'mascots' | 'press-kit';
}) {
  return (
    <div className="ob-site">
      <VillageHeader links={editorialNav} current={current ? currentHref[current] : undefined} label="Primary navigation" />
    </div>
  );
}

export function EditorialFooter() {
  return (
    <div className="ob-site">
      <VillageFooter />
    </div>
  );
}
