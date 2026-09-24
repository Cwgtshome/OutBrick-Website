'use client';

import { useEffect, useRef, useState } from 'react';
import { GAMEPLAY_VIDEO } from '../../lib/site';

/**
 * Real gameplay footage, once there is some. Until `GAMEPLAY_VIDEO` in lib/site.ts names a file,
 * this renders nothing and the page is unchanged.
 *
 * Manners: muted and without controls clutter, it plays only while on screen, never autoplays
 * under Reduce Motion (the poster shows instead, with a play button), and has a text
 * alternative for screen readers. Encode as H.264 MP4 (and optionally HEVC/WebM), 1080×1920 or
 * 886×1920 portrait, 15–30 s, under 4 MB.
 */
export function GameplayVideo({ className = '', label = 'OutBrick gameplay: bricks sliding out through their gates.' }: { className?: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || !GAMEPLAY_VIDEO) return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener('change', sync);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !query.matches) void video.play().catch(() => undefined);
      else video.pause();
    }, { threshold: 0.35 });
    observer.observe(video);
    return () => {
      observer.disconnect();
      query.removeEventListener('change', sync);
    };
  }, []);

  if (!GAMEPLAY_VIDEO) return null;
  const { mp4, webm, poster, width, height } = GAMEPLAY_VIDEO;

  return (
    <figure className={`gameplay-video ${className}`}>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        width={width}
        height={height}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {webm ? <source src={webm} type="video/webm" /> : null}
        <source src={mp4} type="video/mp4" />
      </video>
      {reduced ? (
        <button
          type="button"
          className="gameplay-video-toggle"
          onClick={() => {
            const video = ref.current;
            if (!video) return;
            if (video.paused) void video.play();
            else video.pause();
          }}
        >
          {playing ? 'Pause' : 'Play'} gameplay
        </button>
      ) : null}
    </figure>
  );
}
