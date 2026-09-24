'use client';

import { useEffect } from 'react';

/**
 * The masthead's small behaviours. The header works without any of this: the
 * links are plain anchors and the narrow-screen menu is a <details> element.
 *
 * - `.is-condensed` once the page has scrolled, so the bar gets shorter.
 * - The menu closes after a link is picked, on Escape (focus returns to the
 *   toggle), and on a click anywhere outside it.
 */
export function HeaderMotion() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-site-header]');
    if (!header) return;
    const menu = header.querySelector<HTMLDetailsElement>('details.menu');

    let ticking = false;
    const update = () => {
      ticking = false;
      header.classList.toggle('is-condensed', window.scrollY > 24);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    const close = (refocus = false) => {
      if (!menu?.open) return;
      menu.open = false;
      if (refocus) menu.querySelector('summary')?.focus();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close(true);
    };
    const onPointer = (event: PointerEvent) => {
      if (menu && !menu.contains(event.target as Node)) close();
    };
    const onPick = (event: Event) => {
      if ((event.target as HTMLElement).closest('a')) close();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    menu?.addEventListener('click', onPick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      menu?.removeEventListener('click', onPick);
    };
  }, []);

  return null;
}
