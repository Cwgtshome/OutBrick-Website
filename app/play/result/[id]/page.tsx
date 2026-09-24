import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteUrl } from '../../../../lib/site';
import { PlayableBoard } from '../../../components/playable-board';
import { AppStoreBadge, Course, editorialNav, VillageFooter, VillageHeader } from '../../../village-shell';
import { boardResults, getBoardResult } from '../results';
import '../../../styles/play.css';

type ResultPageProps = { params: Promise<{ id: string }> };

/**
 * The page a "Share result" link lands on: /play/result/<board>-<stars>. Nine
 * static files, each with its own title and card image, so a link pasted into
 * a chat previews the actual result. They are thin by design, so they ask not
 * to be indexed (postbuild leaves noindex pages out of the sitemap) and point
 * the reader straight at the same board.
 */
export function generateStaticParams() {
  return boardResults.map((result) => ({ id: result.id }));
}

export async function generateMetadata({ params }: ResultPageProps): Promise<Metadata> {
  const { id } = await params;
  const result = getBoardResult(id);
  if (!result) return {};
  const path = `/play/result/${result.id}`;
  const image = `${siteUrl}${result.image}`;
  return {
    title: { absolute: result.title },
    description: result.description,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
    openGraph: {
      type: 'website',
      siteName: 'OutBrick',
      url: `${siteUrl}${path}`,
      title: result.title,
      description: result.description,
      images: [{ url: image, width: 1200, height: 630, alt: result.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: result.title,
      description: result.description,
      images: [{ url: image, alt: result.imageAlt }],
    },
  };
}

function ResultStar({ on }: { on: boolean }) {
  return (
    <svg className={`result-star${on ? ' is-on' : ''}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m12 2.4 2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.1l-5.9 3.2 1.3-6.5-4.9-4.6 6.6-.8z" />
    </svg>
  );
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { id } = await params;
  const result = getBoardResult(id);
  if (!result) notFound();

  return (
    <div className="ob-site">
      <a className="skip" href="#main">Skip to content</a>
      <VillageHeader links={editorialNav} label="Primary navigation" />

      <main id="main">
        <section className="band-ink play-hero result-hero">
          <div className="wrap play-hero-grid">
            <div>
              <Course />
              <p className="eyebrow">A result to beat</p>
              <div className="result-panel">
                <p className="result-kicker">
                  Board {result.board} · {result.name}
                </p>
                <p className="result-stars">
                  <span className="sr-only">{`${result.stars} of 3 stars`}</span>
                  {[1, 2, 3].map((s) => (
                    <ResultStar key={s} on={s <= result.stars} />
                  ))}
                </p>
                <h1>{result.line}</h1>
                <p className="result-note">
                  Target {result.target} moves. Slide every brick out through the gate of its own colour; a brick
                  glides until something stops it.
                </p>
              </div>
              <div className="cta-row result-cta">
                <AppStoreBadge />
                <a className="result-guide" href="/play">How the stars work</a>
              </div>
            </div>
            <div className="play-board-wrap">
              <PlayableBoard startLevel={result.levelIndex} label={`Play OutBrick board ${result.board}, ${result.name}`} />
            </div>
          </div>
        </section>
      </main>

      <VillageFooter />
    </div>
  );
}
