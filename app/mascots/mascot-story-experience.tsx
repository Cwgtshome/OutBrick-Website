'use client';

import { useState, type CSSProperties } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { MascotStory } from '../../lib/mascots';

export function MascotStoryExperience({ story }: { story: MascotStory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChapter = story.chapters[activeIndex]!;
  const previousChapter = () => setActiveIndex((index) => (index + story.chapters.length - 1) % story.chapters.length);
  const nextChapter = () => setActiveIndex((index) => (index + 1) % story.chapters.length);

  return (
    <section
      className={`mascot-story-experience mascot-story-experience-${story.id}`}
      style={{ '--story-accent': story.accent, '--story-accent-soft': story.accentSoft } as CSSProperties}
      aria-labelledby={`${story.id}-chapters-title`}
    >
      <div className="mascot-story-section-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> The little chapters</div>
          <h2 id={`${story.id}-chapters-title`}>A story with <span>room to grow.</span></h2>
        </div>
        <p>Tap through the moments that make {story.name} feel like more than a face on the Home screen.</p>
      </div>

      <div className="story-chapter-rail" role="tablist" aria-label={`${story.name} story chapters`}>
        {story.chapters.map((chapter, index) => (
          <button
            className={`story-chapter-button ${index === activeIndex ? 'story-chapter-button-active' : ''}`}
            key={chapter.number}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`${story.id}-chapter-panel`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="story-chapter-number">{chapter.number}</span>
            <span className="story-chapter-title">{chapter.title}</span>
            <span className="story-chapter-line" aria-hidden="true" />
          </button>
        ))}
      </div>

      <div id={`${story.id}-chapter-panel`} className="story-beat" role="tabpanel" tabIndex={0} aria-label={`${story.name}: ${activeChapter.title}`}>
        <div className="story-beat-copy">
          <span className="story-beat-kicker">Chapter {activeChapter.number} / {story.chapters.length}</span>
          <h3>{activeChapter.title}</h3>
          <p>{activeChapter.body}</p>
          <div className="story-beat-note"><Sparkles size={16} /><span>{activeChapter.note}</span></div>
          <div className="story-beat-controls">
            <button type="button" onClick={previousChapter} aria-label="Previous story chapter"><ChevronLeft size={18} /></button>
            <span>{activeIndex + 1} of {story.chapters.length}</span>
            <button type="button" onClick={nextChapter} aria-label="Next story chapter"><ChevronRight size={18} /></button>
          </div>
        </div>
        <div className="story-beat-image">
          <img src={activeChapter.image} alt={activeChapter.imageAlt} title={`${story.name}: ${activeChapter.title}`} />
          <span className="story-beat-image-caption">{story.name} · {activeChapter.title}</span>
        </div>
      </div>

      <div className="story-voice-strip">
        <span className="story-voice-mark"><Sparkles size={17} /></span>
        <div><span className="story-voice-label">In their own words</span><p>{story.quote}</p></div>
        <a className="blog-text-link" href="/play">Play the moment <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
