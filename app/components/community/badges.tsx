'use client';

/**
 * Badges: a small brick-coloured chip with an icon and the badge's name in words. The icon is
 * decoration (aria-hidden); the name is the content, so a badge is never colour or picture alone.
 */

import type { BadgeKey } from '../../../lib/community/contract';
import { badgeInfo } from '../../../lib/community/contract';

const paths: Record<string, string> = {
  brick: 'M3 8h18v10H3zM6 8V5.5a1.5 1.5 0 0 1 3 0V8m6 0V5.5a1.5 1.5 0 0 1 3 0V8',
  lifebuoy: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM5.6 5.6l3.6 3.6m5.6 5.6 3.6 3.6m0-12.8-3.6 3.6m-5.6 5.6-3.6 3.6',
  magnifier: 'M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm4.8 11.3L20 20',
  lightbulb: 'M9 18h6m-5 3h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.3 1 2.2h5.2c0-.9.4-1.7 1-2.2A6 6 0 0 0 12 3Z',
  rocket: 'M12 2c3 2 5 5.5 5 9.5L15 15H9l-2-3.5C7 7.5 9 4 12 2Zm0 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9 15l-2.5 3.5M15 15l2.5 3.5M12 15v6',
  wave: 'M7 11V6.5a1.5 1.5 0 0 1 3 0V11m0-1V4.5a1.5 1.5 0 0 1 3 0V10m0 0V5.5a1.5 1.5 0 0 1 3 0V12c0 4-2.5 8-6.5 8S5 17 4 14l-1-3a1.5 1.5 0 0 1 2.7-1.2L7 12',
  flask: 'M9 3h6m-5 0v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10',
  accessibility: 'M12 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM5 9l7 1.5L19 9m-7 1.5V14l-3 6.5M12 14l3 6.5',
  cake: 'M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7M5 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0M12 12V8m0-4.5c.8.8 1 1.6.5 2.3-.4.5-1.4.5-1.8 0-.5-.7-.3-1.5 1.3-2.3Z',
  star: 'm12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z',
};

export function BadgeIcon({ badge }: { badge: BadgeKey }) {
  return (
    <svg className="cm-badge-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path d={paths[badgeInfo[badge].icon] ?? paths.star} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The chip next to a member's name: their best badge, as an icon and its name. */
export function BadgeChip({ badge, name, title }: { badge: BadgeKey; name: string; title?: string }) {
  return (
    <span className={`cm-badgechip cm-badgechip-${badge}`} title={title}>
      <BadgeIcon badge={badge} />
      {name}
    </span>
  );
}
