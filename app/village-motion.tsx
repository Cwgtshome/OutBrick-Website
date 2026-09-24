'use client';

import { useEffect } from 'react';

/**
 * The home page's motion, in the app's own manners: a brick slides, stops
 * against something and settles. Small vanilla handlers, no library.
 *
 * - Reveals: `[data-reveal]` elements get `.in` as they enter the viewport.
 *   The stylesheet decides what that means per kind — slabs drop, images
 *   unmask, ledger rows slide and stop. Content is only hidden while
 *   `html.js` is set (see app/layout.tsx), so no-JS readers see everything.
 * - Count-up on the number plaques (`[data-count]`).
 * - Hero: the phone tilts toward the pointer, clouds drift at their own rate.
 * - The Journey pins on wide, tall screens and the road runs sideways as you
 *   scroll down. Anywhere else it is a sideways-scrolling strip you can drag.
 * - The closing gate: bricks slide out as it scrolls in (CSS scroll-driven
 *   animation where supported, a one-shot class otherwise).
 * - The nav marks the section you are reading.
 *
 * Under Reduce Motion none of it runs: everything is revealed at once, nothing
 * tilts, drifts or counts, and the Journey is a plain scrolling strip. It
 * re-runs when the setting changes, so flipping it with the page open works.
 *
 * Villages and friends are rendered on the server, not here.
 */
export function VillageMotion() {
  useEffect(() => {
    (window as unknown as { __obMotion?: boolean }).__obMotion = true;
    const root = document.querySelector<HTMLElement>('.ob-home');
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let cleanups: (() => void)[] = [];

    const setup = () => {
      cleanups.forEach((fn) => fn());
      cleanups = [];
      const still = reduce.matches;
      root.classList.toggle('is-still', still);

      /* ---------------- reveals + count-up ---------------- */
      const toReveal = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
      const counters = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
      const finalText = new Map(counters.map((el) => [el, el.textContent ?? '']));
      const format = new Intl.NumberFormat('en-GB');

      const countUp = (el: HTMLElement) => {
        const target = Number(el.dataset.count ?? '0');
        const done = finalText.get(el) ?? String(target);
        if (still || target === 0) {
          el.textContent = done;
          return;
        }
        const start = performance.now();
        const duration = Math.min(1400, 500 + target / 2);
        let frame = 0;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = t < 1 ? format.format(Math.round(target * eased)) : done;
          if (t < 1) frame = window.requestAnimationFrame(step);
        };
        frame = window.requestAnimationFrame(step);
        cleanups.push(() => {
          window.cancelAnimationFrame(frame);
          el.textContent = done;
        });
      };

      if (still || !('IntersectionObserver' in window)) {
        toReveal.forEach((el) => el.classList.add('in'));
        counters.forEach((el) => {
          el.textContent = finalText.get(el) ?? el.textContent;
        });
      } else {
        const io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const el = entry.target as HTMLElement;
              el.classList.add('in');
              el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
              io.unobserve(el);
            }
          },
          { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
        );
        toReveal.forEach((el) => {
          if (el.classList.contains('in')) return;
          el.querySelectorAll<HTMLElement>('[data-count]').forEach((c) => {
            c.textContent = '0';
          });
          io.observe(el);
        });
        cleanups.push(() => io.disconnect());
      }

      /* ---------------- hero: clouds + pointer tilt ---------------- */
      const hero = root.querySelector<HTMLElement>('[data-hero]');
      const drifters = Array.from(root.querySelectorAll<HTMLElement>('[data-drift]'));
      const stage = root.querySelector<HTMLElement>('[data-tilt]');

      if (!still && hero) {
        let ticking = false;
        const drift = () => {
          ticking = false;
          const y = window.scrollY;
          if (y > hero.offsetHeight + 200) return;
          for (const el of drifters) {
            const rate = Number.parseFloat(el.dataset.drift ?? '0') / 100;
            el.style.transform = `translate3d(${(y * rate).toFixed(1)}px,${(y * rate * 0.35).toFixed(1)}px,0)`;
          }
          hero.style.setProperty('--scroll', (y / Math.max(1, hero.offsetHeight)).toFixed(3));
        };
        const onScroll = () => {
          if (ticking) return;
          ticking = true;
          window.requestAnimationFrame(drift);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        drift();
        cleanups.push(() => {
          window.removeEventListener('scroll', onScroll);
          drifters.forEach((el) => {
            el.style.transform = '';
          });
          hero.style.removeProperty('--scroll');
        });

        if (stage && finePointer.matches) {
          let frame = 0;
          let px = 0;
          let py = 0;
          const apply = () => {
            frame = 0;
            stage.style.setProperty('--px', px.toFixed(3));
            stage.style.setProperty('--py', py.toFixed(3));
          };
          const onMove = (event: PointerEvent) => {
            const r = hero.getBoundingClientRect();
            px = Math.max(-1, Math.min(1, ((event.clientX - r.left) / r.width) * 2 - 1));
            py = Math.max(-1, Math.min(1, ((event.clientY - r.top) / r.height) * 2 - 1));
            if (!frame) frame = window.requestAnimationFrame(apply);
          };
          const onLeave = () => {
            px = 0;
            py = 0;
            if (!frame) frame = window.requestAnimationFrame(apply);
          };
          hero.addEventListener('pointermove', onMove);
          hero.addEventListener('pointerleave', onLeave);
          cleanups.push(() => {
            hero.removeEventListener('pointermove', onMove);
            hero.removeEventListener('pointerleave', onLeave);
            if (frame) window.cancelAnimationFrame(frame);
            stage.style.removeProperty('--px');
            stage.style.removeProperty('--py');
          });
        }
      }

      /* ---------------- the Journey ---------------- */
      const journey = root.querySelector<HTMLElement>('[data-journey]');
      const pin = journey?.querySelector<HTMLElement>('.journey-pin');
      const windowEl = journey?.querySelector<HTMLElement>('.journey-window');
      const track = journey?.querySelector<HTMLElement>('.journey-track');

      if (journey && pin && windowEl && track) {
        let pinned = false;
        let distance = 0;
        let ticking = false;

        const render = () => {
          ticking = false;
          if (!pinned) {
            const max = windowEl.scrollWidth - windowEl.clientWidth;
            journey.style.setProperty('--p', max > 0 ? (windowEl.scrollLeft / max).toFixed(4) : '0');
            return;
          }
          const top = pin.getBoundingClientRect().top;
          const run = pin.offsetHeight - window.innerHeight;
          const p = Math.max(0, Math.min(1, -top / Math.max(1, run)));
          track.style.transform = `translate3d(${(-p * distance).toFixed(1)}px,0,0)`;
          journey.style.setProperty('--p', p.toFixed(4));
        };
        const onScroll = () => {
          if (ticking) return;
          ticking = true;
          window.requestAnimationFrame(render);
        };

        const measure = () => {
          const wantPin = !still && window.innerWidth >= 960 && window.innerHeight >= 680;
          pinned = wantPin;
          journey.classList.toggle('is-pinned', pinned);
          if (pinned) {
            track.style.transform = '';
            distance = Math.max(0, track.scrollWidth - windowEl.clientWidth);
            // A little vertical scroll per pixel of road, plus a beat of rest at each end.
            pin.style.height = `${Math.round(window.innerHeight + distance * 0.9 + 160)}px`;
          } else {
            pin.style.height = '';
            track.style.transform = '';
          }
          render();
        };

        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        windowEl.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', measure);
        cleanups.push(() => {
          window.removeEventListener('scroll', onScroll);
          windowEl.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', measure);
          journey.classList.remove('is-pinned');
          pin.style.height = '';
          track.style.transform = '';
        });

        /* Drag to scrub, for a mouse on the unpinned strip. Touch already
           scrolls natively, and keyboard users have the arrow keys. */
        let dragging = false;
        let startX = 0;
        let startLeft = 0;
        let moved = 0;
        const down = (event: PointerEvent) => {
          if (pinned || event.pointerType !== 'mouse' || event.button !== 0) return;
          dragging = true;
          moved = 0;
          startX = event.clientX;
          startLeft = windowEl.scrollLeft;
          windowEl.classList.add('is-dragging');
        };
        const move = (event: PointerEvent) => {
          if (!dragging) return;
          const dx = event.clientX - startX;
          moved = Math.max(moved, Math.abs(dx));
          windowEl.scrollLeft = startLeft - dx;
        };
        const up = () => {
          if (!dragging) return;
          dragging = false;
          windowEl.classList.remove('is-dragging');
        };
        const stopClick = (event: MouseEvent) => {
          if (moved > 6) event.preventDefault();
        };
        const noDragImage = (event: DragEvent) => event.preventDefault();
        windowEl.addEventListener('pointerdown', down);
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
        windowEl.addEventListener('click', stopClick, true);
        windowEl.addEventListener('dragstart', noDragImage);
        cleanups.push(() => {
          windowEl.removeEventListener('pointerdown', down);
          window.removeEventListener('pointermove', move);
          window.removeEventListener('pointerup', up);
          windowEl.removeEventListener('click', stopClick, true);
          windowEl.removeEventListener('dragstart', noDragImage);
        });

        /* Keyboard: when pinned the strip does not scroll itself, so the
           arrow keys move the page through the pinned run instead. */
        const key = (event: KeyboardEvent) => {
          if (!pinned || (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft')) return;
          event.preventDefault();
          const stepPx = (pin.offsetHeight - window.innerHeight) / 14;
          window.scrollBy({ top: event.key === 'ArrowRight' ? stepPx : -stepPx, behavior: 'smooth' });
        };
        windowEl.addEventListener('keydown', key);
        cleanups.push(() => windowEl.removeEventListener('keydown', key));
      }

      /* ---------------- the closing gate ----------------
         Scroll-driven in CSS where the browser has view timelines; here we
         only need the fallback for everyone else. */
      const gate = root.querySelector<HTMLElement>('[data-gate]');
      const scrollDriven = typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()');
      if (gate && !still && !scrollDriven && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
              gate.classList.add('is-open');
              io.disconnect();
            }
          },
          { threshold: 0.45 },
        );
        io.observe(gate);
        cleanups.push(() => io.disconnect());
      }
    };

    setup();
    reduce.addEventListener('change', setup);

    /* ---------------- current section in the nav ---------------- */
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.ob-site header.site a[href^="#"]:not(.logo)'),
    );
    let navIO: IntersectionObserver | undefined;
    if (links.length && 'IntersectionObserver' in window) {
      const byId = new Map<string, HTMLAnchorElement[]>();
      for (const link of links) {
        const id = (link.getAttribute('href') ?? '').slice(1);
        if (!id || !document.getElementById(id)) continue;
        byId.set(id, [...(byId.get(id) ?? []), link]);
      }
      navIO = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            for (const link of byId.get(entry.target.id) ?? []) {
              if (entry.isIntersecting) link.setAttribute('aria-current', 'location');
              else link.removeAttribute('aria-current');
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const id of byId.keys()) {
        const el = document.getElementById(id);
        if (el) navIO.observe(el);
      }
    }

    return () => {
      reduce.removeEventListener('change', setup);
      cleanups.forEach((fn) => fn());
      navIO?.disconnect();
    };
  }, []);

  return null;
}
