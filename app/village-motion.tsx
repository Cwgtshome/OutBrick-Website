'use client';

import { useEffect } from 'react';

/**
 * The site's motion, in the app's own manners.
 *
 * A port of `website/site/app.js`: the reveal-on-scroll pass, the parallax
 * drift of the clouds and leaves over the hero, the studs drawn onto the
 * exposed tops of the number plaques, and the nav link that lights up for the
 * section you are looking at.
 *
 * Everything here stops under Reduce Motion, exactly as every animated prop in
 * a village does (AGENTS.md, the VillageKit rule). The stylesheet kills the
 * CSS animations and transitions; this file is the other half — it never
 * attaches the scroll handler, clears any transform it already wrote, and
 * reveals everything at once so nothing is left invisible waiting for an
 * animation that will not run. It re-runs when the setting changes, so
 * flipping Reduce Motion on with the page open takes effect immediately.
 *
 * Villages and friends are rendered on the server, not here, so the boulevard
 * and the cast exist with JavaScript switched off.
 */
export function VillageMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cleanups: (() => void)[] = [];

    /* ---------------- studs on the exposed tops ----------------
       Drawn rather than authored so a card never has to count its own. */
    const studded = Array.from(document.querySelectorAll<HTMLElement>('.ob-site .plaque'));
    for (const el of studded) {
      if (el.querySelector('.studrow')) continue;
      el.classList.add('studs');
      const row = document.createElement('div');
      row.className = 'studrow';
      for (let i = 0; i < 3; i += 1) {
        const stud = document.createElement('i');
        stud.style.background = '#5348bd';
        row.appendChild(stud);
      }
      el.appendChild(row);
    }

    /* ---------------- reveal on scroll ---------------- */
    const toReveal = Array.from(document.querySelectorAll<HTMLElement>('.ob-site .reveal'));
    const revealAll = () => toReveal.forEach((el) => el.classList.add('in'));

    if (!reduce.matches && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '0px 0px -40px 0px', threshold: 0 },
      );
      toReveal.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealAll();
    }

    /* ---------------- the parallax boulevard ----------------
       The map scrolls a road past standing scenery; the hero does the same
       with clouds and leaves at different rates. One rAF-throttled handler. */
    const drifters = Array.from(document.querySelectorAll<HTMLElement>('.ob-site [data-drift]'));
    const hero = document.querySelector<HTMLElement>('.ob-site .hero');
    let ticking = false;

    const drift = () => {
      ticking = false;
      if (!hero) return;
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (y > hero.offsetHeight + 200) return;
      for (const el of drifters) {
        const rate = Number.parseFloat(el.dataset.drift ?? '0') / 100;
        el.style.transform = `translate3d(${(y * rate).toFixed(1)}px,${(y * rate * 0.35).toFixed(1)}px,0)`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(drift);
    };

    const applyMotion = () => {
      window.removeEventListener('scroll', onScroll);
      if (reduce.matches) {
        drifters.forEach((el) => {
          el.style.transform = '';
        });
        revealAll();
      } else {
        window.addEventListener('scroll', onScroll, { passive: true });
        drift();
      }
    };

    applyMotion();
    reduce.addEventListener('change', applyMotion);
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      reduce.removeEventListener('change', applyMotion);
    });

    /* ---------------- current section in the nav ---------------- */
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.ob-site nav.main a[href^="#"]'));
    if (links.length && 'IntersectionObserver' in window) {
      const map = new Map<string, HTMLAnchorElement>();
      for (const link of links) {
        const target = document.querySelector(link.getAttribute('href') ?? '');
        if (target?.id) map.set(target.id, link);
      }
      const nav = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const link = map.get(entry.target.id);
            if (!link) continue;
            link.setAttribute('aria-current', entry.isIntersecting ? 'page' : 'false');
          }
        },
        { rootMargin: '-45% 0px -45% 0px' },
      );
      for (const id of map.keys()) {
        const el = document.getElementById(id);
        if (el) nav.observe(el);
      }
      cleanups.push(() => nav.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
