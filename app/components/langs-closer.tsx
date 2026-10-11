'use client';

import { hasLocalePage, locales, type Locale } from '../../lib/i18n/locales';
import { useEffect } from 'react';

/**
 * The footer language picker is a <details>, which works without script but stays open until
 * its own summary is pressed again. With script, a tap anywhere else or Escape closes it too,
 * the way a menu should behave; Escape returns focus to the picker.
 */
export function LangsCloser() {
  useEffect(() => {
    const syncLinks = () => {
      for (const link of document.querySelectorAll<HTMLAnchorElement>('footer.site details.langs a[hreflang]')) {
        const target = new URL(link.href, location.href);
        if (target.origin !== location.origin) continue;
        const language = link.hreflang;
        if (!(locales as readonly string[]).includes(language)) continue;
        const route = location.pathname.replace(/^\/(zh-Hans|zh-Hant|es-419|pt-BR|pt-PT|fr-CA|fr|de|es|ja|it|ko|nl|ru|tr|ar|ca|cs|da|fi|hr|hu|id|ms|nb|pl|ro|sk|sv|th|vi|he|el|uk|hi|sl|ur|bn)(?=\/|$)/, '') || '/';
        // The journal is not published in the catalog languages: keep the server's link there.
        if (!hasLocalePage(language as Locale, route)) continue;
        target.pathname = language === 'en' ? route : `/${language}${route === '/' ? '' : route}`;
        target.search = location.search;
        target.hash = location.hash;
        link.href = target.href;
      }
    };
    syncLinks();
    const open = () => document.querySelector<HTMLDetailsElement>('footer.site details.langs[open]');
    const onPointer = (event: PointerEvent) => {
      syncLinks();
      const details = open();
      if (details && !details.contains(event.target as Node)) details.open = false;
    };
    const onKey = (event: KeyboardEvent) => {
      syncLinks();
      const details = open();
      if (event.key === 'Escape' && details) {
        details.open = false;
        details.querySelector('summary')?.focus();
      }
    };
    // A language chosen here is remembered for a year, so the Worker never sends the reader back
    // to the language their browser asks for (cloudflare/language.ts).
    const onChoose = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[hreflang]') as HTMLAnchorElement | null;
      if (!link || !link.closest('details.langs, .lang-choice')) return;
      const language = link.hreflang;
      if ((locales as readonly string[]).includes(language)) document.cookie = `ob_lang=${language}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onChoose);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onChoose);
    };
  }, []);
  return null;
}
