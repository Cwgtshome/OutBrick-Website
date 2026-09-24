'use client';

import { useEffect } from 'react';

/**
 * The two reading aids an article carries, both progressive: the page reads
 * fine without them.
 *
 * - Reading progress: sets `--read` (0–1) on the brick bar. Browsers with
 *   scroll-driven animations draw the bar from CSS alone; this keeps the rest
 *   in step.
 * - Table of contents: marks the section being read with aria-current.
 */
export function ReadingAids() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>('.ed-progress i');
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.ed-toc a[href^="#"]'));
    const targets = links
      .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
      .filter((node): node is HTMLElement => Boolean(node));

    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const read = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar?.style.setProperty('--read', read.toFixed(4));

      // The current section is the last one whose top has passed a line a
      // third of the way down the viewport.
      const line = window.innerHeight * 0.33;
      let active: HTMLElement | undefined;
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= line) active = target;
      }
      for (const link of links) {
        const on = active !== undefined && link.hash === `#${active.id}`;
        if (on) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
