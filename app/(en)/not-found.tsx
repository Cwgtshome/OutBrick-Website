import type { Metadata } from 'next';
import Link from 'next/link';
import '../styles/not-found.css';

// Prerendered by vinext to dist/client/404.html, which Netlify serves (with a 404 status)
// for any path that has no file and no redirect. The framework adds `noindex` itself.
export const metadata: Metadata = {
  title: 'Page not found',
  description: 'This page slid off the board. Head back to OutBrick, the journal, or support.',
  alternates: { canonical: null },
};

const BRICK_COLOURS = ['#3fc544', '#3b8bf0', '#f26ab8', '#ffc53d', '#7b5cf0', '#f5851f'];

export default function NotFound() {
  return (
    <main className="nf-page">
      <div className="nf-board" aria-hidden="true">
        {BRICK_COLOURS.map((colour, i) => (
          <span className="nf-slot" key={colour}>
            {i === 3 ? null : <span className="nf-brick" style={{ background: colour }} />}
          </span>
        ))}
        <span className="nf-stray nf-brick" style={{ background: BRICK_COLOURS[3] }} />
      </div>

      <p className="nf-code">404</p>
      <h1 className="nf-title">This brick slid right off the board.</h1>
      <p className="nf-copy">
        We looked in every row, under the undo button and behind Peach. The page you wanted isn&rsquo;t
        here — it may have moved, or the link had a loose stud. No lives were lost.
      </p>

      <nav className="nf-links" aria-label="Where to next">
        <Link className="nf-link nf-link-primary" href="/">Back to OutBrick</Link>
        <Link className="nf-link" href="/blog">Read the journal</Link>
        <Link className="nf-link" href="/support">Get support</Link>
      </nav>
    </main>
  );
}
