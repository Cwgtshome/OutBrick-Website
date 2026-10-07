'use client';

/**
 * OutBrick Community in the browser. One prerendered shell per language serves every
 * /community/... address (netlify.toml rewrites them to it); this island reads
 * `location.pathname`, draws the page that address names, and from then on moves between pages
 * with the History API. Every link stays a real `<a href>`, so middle-click, "open in new tab"
 * and the VoiceOver links rotor all work; a click on one is caught here and becomes a
 * `pushState`.
 *
 * On every move the document title changes and focus goes to the new page's h1 (or to the post
 * a #post-n link names), which is what makes a screen reader announce the new page. Messages
 * about what just happened ("Your reply is posted") go to one polite live region.
 *
 * Until the first page has its data, the server-rendered HTML in `[data-cm-static]` stays on
 * screen; once the app has drawn its own version it empties that slot, so nothing is shown twice
 * and no id is duplicated.
 */

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import type { CommunityLocale, SessionResponse } from '../../../lib/community/contract';
import { communityLocales, communityPath } from '../../../lib/community/contract';
import { communityCopy } from '../../../lib/i18n/community';
import { communityFx } from '../../../lib/i18n/community-fx';
import { number } from '../../../lib/community/format';
import { api, ApiFailure } from './api';
import { Ctx, parseRoute, privateRoutes, type AppContext, type Navigate, type Route } from './core';
import { CategoryView, FaqView, GuidelinesView, HomeView, MemberView, NotFoundView, SearchView } from './views-browse';
import { ThreadView } from './views-thread';
import { BookmarksView, IdeasRedirect, LeaderboardView, RoadmapView } from './views-fx';
import { ModView, NewThreadView, NotificationsView, SettingsView, SignInView, WelcomeView } from './views-forms';

function currentUrl(): URL {
  return new URL(window.location.href);
}

// The address as an external store: back/forward (popstate) and our own pushState both notify,
// so the app re-renders from `location` without setting state inside an effect.
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());
/** Whether the next page drawn should take focus: set by every navigation, before the re-render. */
const focus = { next: false };
const onPopState = () => {
  focus.next = true;
  notify();
};
function subscribeLocation(listener: () => void) {
  if (!listeners.size) window.addEventListener('popstate', onPopState);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (!listeners.size) window.removeEventListener('popstate', onPopState);
  };
}
const noFeatures = { passkeys: false, uploads: false, replyByEmail: false, translate: false, digest: false };
const locationSnapshot = () => window.location.pathname + window.location.search;

function ViewFor({ route }: { route: Route }) {
  switch (route.name) {
    case 'home':
      return <HomeView />;
    case 'category':
      return <CategoryView route={route} />;
    case 'thread':
      return <ThreadView route={route} />;
    case 'new':
      return <NewThreadView route={route} />;
    case 'search':
      return <SearchView route={route} />;
    case 'faq':
      return <FaqView />;
    case 'guidelines':
      return <GuidelinesView />;
    case 'signin':
      return <SignInView route={route} />;
    case 'welcome':
      return <WelcomeView route={route} />;
    case 'settings':
      return <SettingsView />;
    case 'notifications':
      return <NotificationsView route={route} />;
    case 'member':
      return <MemberView route={route} />;
    case 'mod':
      return <ModView />;
    case 'roadmap':
      return <RoadmapView />;
    case 'ideas':
      return <IdeasRedirect />;
    case 'leaderboard':
      return <LeaderboardView route={route} />;
    case 'bookmarks':
      return <BookmarksView route={route} />;
    default:
      return <NotFoundView />;
  }
}

export function CommunityApp({ locale, supportFaqs }: { locale: CommunityLocale; supportFaqs: { question: string; answer: string }[] }) {
  const address = useSyncExternalStore(subscribeLocation, locationSnapshot, () => '');
  const hydrated = address !== '';
  const url = useMemo(() => {
    if (!address) return null;
    const u = new URL(address, window.location.origin);
    u.hash = window.location.hash;
    return u;
  }, [address]);
  const copy = communityCopy[locale];
  const [session, setSession] = useState<SessionResponse | null>(null);
  const [sessionError, setSessionError] = useState<ApiFailure | null>(null);
  const [message, setMessage] = useState('');
  const [staticShowing, setStaticShowing] = useState(true);
  const firstPage = useRef(true);
  const robotsOriginal = useRef<string | null>(null);

  const refreshSession = useCallback(
    () =>
      api.session(true).then(
        (next) => {
          setSession(next);
          setSessionError(null);
          return next;
        },
        (error: unknown) => {
          setSessionError(error instanceof ApiFailure ? error : null);
          // Signed-out is the safe reading of a session the server could not give.
          const fallback: SessionResponse = { member: null, providers: [], unreadNotifications: 0, features: noFeatures };
          setSession(fallback);
          return fallback;
        },
      ),
    [],
  );

  useEffect(() => {
    if (!hydrated) return;
    api.session(true).then(
      (next) => setSession(next),
      (error: unknown) => {
        setSessionError(error instanceof ApiFailure ? error : null);
        setSession({ member: null, providers: [], unreadNotifications: 0, features: noFeatures });
      },
    );
  }, [hydrated]);

  // The bell: while the tab is visible and someone is signed in, ask every 20 seconds how many
  // notifications are unread. Nothing is announced; the count in the community bar changes.
  const signedIn = !!session?.member;
  useEffect(() => {
    if (!signedIn) return;
    const tick = () => {
      if (document.visibilityState !== 'visible') return;
      api.pulse().then(
        (p) => setSession((s) => (s && s.unreadNotifications !== p.unreadNotifications ? { ...s, unreadNotifications: p.unreadNotifications } : s)),
        () => undefined,
      );
    };
    const timer = window.setInterval(tick, 20_000);
    document.addEventListener('visibilitychange', tick);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', tick);
    };
  }, [signedIn]);

  const announce = useCallback((text: string) => {
    // Clear first, so the same sentence twice in a row is still read out.
    window.setTimeout(() => setMessage(''), 0);
    window.setTimeout(() => setMessage(text), 80);
  }, []);

  const navigate: Navigate = useCallback((href, options = {}) => {
    const target = new URL(href, window.location.href);
    if (options.replace) window.history.replaceState(null, '', target);
    else window.history.pushState(null, '', target);
    focus.next = options.focus !== false;
    notify();
  }, []);


  // A same-page #post-n link: the browser scrolls, we move focus there too.
  useEffect(() => {
    const onHash = () => {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus();
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Catch clicks on links inside this language's community, anywhere on the page.
  useEffect(() => {
    if (!hydrated) return;
    const base = communityPath(locale);
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href]');
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target || anchor.hasAttribute('download')) return;
      const target = new URL(anchor.href);
      if (target.origin !== window.location.origin) return;
      if (target.pathname !== base && !target.pathname.startsWith(`${base}/`)) return;
      const here = window.location;
      if (target.pathname === here.pathname && target.search === here.search && target.hash) return; // same page: let the browser jump
      event.preventDefault();
      navigate(target.pathname + target.search + target.hash);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [hydrated, locale, navigate]);

  const route = useMemo<Route>(() => (url ? parseRoute(locale, url) : { name: 'home' }), [url, locale]);

  // A member who has not picked a display name yet is sent to choose one first.
  useEffect(() => {
    if (!url || !session?.member?.needsName) return;
    if (route.name === 'welcome' || route.name === 'signin' || route.name === 'guidelines') return;
    navigate(communityPath(locale, `/welcome?returnTo=${encodeURIComponent(url.pathname + url.search)}`), { replace: true });
  }, [session, route, url, locale, navigate]);

  // ?from=signin: the provider or email link has just signed this member in.
  useEffect(() => {
    if (!url || !session?.member || url.searchParams.get('from') !== 'signin') return;
    announce(copy.signedIn);
    const clean = new URL(url);
    clean.searchParams.delete('from');
    window.history.replaceState(null, '', clean);
  }, [url, session, announce, copy]);

  const pageReady = useCallback(
    (title: string) => {
      document.title = /OutBrick/.test(title) ? title : copy.meta.pageTitle(title);
      // Search engines index the shells and threads, never a member's own pages.
      let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (robotsOriginal.current === null) robotsOriginal.current = robots?.content ?? '';
      const routeName = parseRoute(locale, currentUrl()).name;
      if (privateRoutes.has(routeName)) {
        if (!robots) {
          robots = document.createElement('meta');
          robots.name = 'robots';
          document.head.appendChild(robots);
        }
        robots.content = 'noindex, follow';
      } else if (robots) robots.content = robotsOriginal.current || 'index, follow';

      // The footer's language picker leads to this same page in each language.
      const rest = window.location.pathname.slice(communityPath(locale).length);
      for (const link of document.querySelectorAll<HTMLAnchorElement>('footer.site details.langs a[hreflang]')) {
        const l = link.hreflang as CommunityLocale;
        if ((communityLocales as readonly string[]).includes(l)) link.href = communityPath(l) + rest + window.location.search;
      }

      const slot = document.querySelector<HTMLElement>('[data-cm-static]');
      if (slot && slot.childNodes.length) {
        slot.replaceChildren();
        slot.hidden = true;
        setStaticShowing(false);
      }

      const hash = decodeURIComponent(window.location.hash.slice(1));
      const wasFirst = firstPage.current;
      firstPage.current = false;
      if (!focus.next && !(wasFirst && hash)) return;
      focus.next = false;
      window.requestAnimationFrame(() => {
        const target = (hash && document.getElementById(hash)) || document.querySelector<HTMLElement>('.cm-app h1');
        if (!target) {
          announce(document.title);
          return;
        }
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        if (!hash) window.scrollTo(0, 0);
        target.focus({ preventScroll: !hash });
        if (hash) target.scrollIntoView({ block: 'start' });
      });
    },
    [copy, locale, announce],
  );

  const ctx = useMemo<AppContext>(
    () => ({
      locale,
      copy,
      fx: communityFx[locale],
      features: session?.features ?? noFeatures,
      route,
      here: url ? url.pathname + url.search : communityPath(locale),
      navigate,
      session,
      sessionError,
      refreshSession,
      announce,
      pageReady,
      staticShowing,
      supportFaqs,
      path: (p = '') => communityPath(locale, p),
      n: (value: number) => number(locale, value),
    }),
    [locale, copy, route, url, navigate, session, sessionError, refreshSession, announce, pageReady, staticShowing, supportFaqs],
  );

  return (
    <Ctx.Provider value={ctx}>
      <div className="cm-app">{hydrated && url ? <ViewFor key={route.name === 'search' || route.name === 'category' ? url.pathname : url.pathname + url.search} route={route} /> : null}</div>
      <output className="sr-only" aria-live="polite" aria-atomic="true">
        {message}
      </output>
    </Ctx.Provider>
  );
}
