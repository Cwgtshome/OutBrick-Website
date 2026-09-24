import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '../lib/site';
import { Course, docNav, VillageFooter, VillageHeader } from './village-shell';

/**
 * Where a form lands when it is posted without script: Netlify stores the submission, then
 * serves the form's `action` page. With script the form never leaves its page, so these are
 * seen rarely — but they are the no-script half of every form, so they must exist.
 * Not indexed: a thank-you page is not something to find in search.
 */
export function thanksMetadata(path: string, title: string, description: string): Metadata {
  return { ...pageMetadata({ path, title, description }), robots: { index: false, follow: true } };
}

export function ThanksPage({
  eyebrow,
  title,
  children,
  back,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  back: { href: string; label: string };
}) {
  return (
    <div className="ob-site">
      <a className="skip" href="#main">Skip to content</a>
      <VillageHeader links={docNav} label="Help and legal" />
      <main id="main">
        <div className="doc-head thanks-head">
          <div className="wrap">
            <Course />
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <div className="thanks-body">{children}</div>
            <p className="thanks-actions">
              <a className="btn" href={back.href}>{back.label}</a>
              <a className="thanks-home" href="/">Back to OutBrick</a>
            </p>
          </div>
          <div className="road" aria-hidden="true" />
        </div>
      </main>
      <VillageFooter />
    </div>
  );
}
