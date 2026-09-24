'use client';

import { useEffect } from 'react';

/**
 * The reading aids an article carries, all progressive: the page reads fine
 * without them.
 *
 * - Reading progress: sets `--read` (0–1) on the brick bar. Browsers with
 *   scroll-driven animations draw the bar from CSS alone; this keeps the rest
 *   in step.
 * - Table of contents: marks the section being read with aria-current.
 * - Section links: the link icon beside each heading still jumps to the
 *   section, and also copies its address, announced as "Link copied".
 * - Share: the system share sheet where there is one, else the address is
 *   copied.
 * - Source cards: Escape hides the citation card shown on hover or focus.
 * - Print: answers are opened so the FAQ prints in full.
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

    // ---- the toast that announces a copy ----
    const toast = document.querySelector<HTMLElement>('[data-toast]');
    let toastTimer = 0;
    const say = (message: string) => {
      if (!toast) return;
      window.clearTimeout(toastTimer);
      toast.textContent = message;
      toast.dataset.show = '';
      toastTimer = window.setTimeout(() => {
        delete toast.dataset.show;
        toast.textContent = '';
      }, 2600);
    };

    const copy = async (text: string): Promise<boolean> => {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // No clipboard access (an insecure origin, or permission refused).
        return false;
      }
    };

    const pageUrl = () => `${window.location.origin}${window.location.pathname}`;

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[data-copy-link]');
      if (anchor && !event.metaKey && !event.ctrlKey && !event.shiftKey) {
        const url = `${pageUrl()}${anchor.hash}`;
        void copy(url).then((ok) => {
          say(ok ? 'Link copied' : 'Could not copy. The address bar now holds the link.');
          if (ok) {
            anchor.dataset.copied = '';
            window.setTimeout(() => delete anchor.dataset.copied, 1800);
          }
        });
        return;
      }
      const share = target?.closest<HTMLButtonElement>('[data-share]');
      if (share) {
        const url = pageUrl();
        const data = { title: share.dataset.shareTitle ?? document.title, text: share.dataset.shareText, url };
        if (typeof navigator.share === 'function' && (!navigator.canShare || navigator.canShare(data))) {
          navigator.share(data).catch((error: unknown) => {
            if ((error as DOMException)?.name !== 'AbortError') void copy(url).then((ok) => ok && say('Link copied'));
          });
        } else {
          void copy(url).then((ok) => say(ok ? 'Link copied' : 'Could not copy. Copy the address from the address bar.'));
        }
      }
    };

    // Escape hides an open citation card until the pointer or focus moves on.
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      for (const cite of document.querySelectorAll<HTMLElement>('.ed-cite')) {
        if (cite.matches(':hover, :focus-within')) cite.dataset.dismissed = '';
      }
    };
    const onLeave = (event: Event) => {
      const cite = (event.target as Element | null)?.closest<HTMLElement>('.ed-cite');
      if (cite && !cite.matches(':hover, :focus-within')) delete cite.dataset.dismissed;
    };
    const onFocusIn = (event: FocusEvent) => {
      for (const cite of document.querySelectorAll<HTMLElement>('.ed-cite[data-dismissed]')) {
        if (!cite.contains(event.target as Node)) delete cite.dataset.dismissed;
      }
    };

    const openAnswers = () => {
      for (const details of document.querySelectorAll<HTMLDetailsElement>('.ed-faq details:not([open])')) {
        details.open = true;
        details.dataset.printOpened = '';
      }
    };
    const closeAnswers = () => {
      for (const details of document.querySelectorAll<HTMLDetailsElement>('.ed-faq details[data-print-opened]')) {
        details.open = false;
        delete details.dataset.printOpened;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mouseout', onLeave);
    document.addEventListener('focusin', onFocusIn);
    window.addEventListener('beforeprint', openAnswers);
    window.addEventListener('afterprint', closeAnswers);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mouseout', onLeave);
      document.removeEventListener('focusin', onFocusIn);
      window.removeEventListener('beforeprint', openAnswers);
      window.removeEventListener('afterprint', closeAnswers);
      window.clearTimeout(toastTimer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
