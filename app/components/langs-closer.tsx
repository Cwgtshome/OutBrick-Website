'use client';

import { useEffect } from 'react';

/**
 * The footer language picker is a <details>, which works without script but stays open until
 * its own summary is pressed again. With script, a tap anywhere else or Escape closes it too,
 * the way a menu should behave; Escape returns focus to the picker.
 */
export function LangsCloser() {
  useEffect(() => {
    const open = () => document.querySelector<HTMLDetailsElement>('footer.site details.langs[open]');
    const onPointer = (event: PointerEvent) => {
      const details = open();
      if (details && !details.contains(event.target as Node)) details.open = false;
    };
    const onKey = (event: KeyboardEvent) => {
      const details = open();
      if (event.key === 'Escape' && details) {
        details.open = false;
        details.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, []);
  return null;
}
