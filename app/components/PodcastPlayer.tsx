'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { PodcastEpisode } from '../lib/podcast';

type PodcastPlayerProps = {
  episodes: PodcastEpisode[];
};

export function PodcastPlayer({ episodes }: PodcastPlayerProps) {
  const [currentEpisode, setCurrentEpisode] = useState(() => episodes[0]);
  const [playOnLoadId, setPlayOnLoadId] = useState<string | null>(null);
  const playerRef = useRef<HTMLAudioElement | HTMLVideoElement>(null);

  useEffect(() => {
    const player = playerRef.current;

    if (!player || !currentEpisode) {
      return;
    }

    player.load();

    if (currentEpisode.id === playOnLoadId) {
      void player.play().catch(() => undefined);
    }
  }, [currentEpisode, playOnLoadId]);

  if (!currentEpisode) {
    return null;
  }

  function selectEpisode(episode: PodcastEpisode) {
    setCurrentEpisode(episode);
    setPlayOnLoadId(episode.id);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(320px,0.62fr)] lg:items-start" data-testid="podcast-player">
      <section className="rounded-xl bg-soft p-4 dark:bg-white/5">
        <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-3 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-4">
          {currentEpisode.imageUrl ? (
            <div className="relative h-12 w-12 overflow-hidden rounded-md bg-paper dark:bg-paper/10 sm:h-24 sm:w-24">
              <Image src={currentEpisode.imageUrl} alt="" fill sizes="(min-width: 640px) 96px, 48px" className="object-cover" unoptimized priority />
            </div>
          ) : null}
          <div className="min-w-0 self-center">
            <h2 className="text-base font-semibold leading-tight sm:text-2xl">{currentEpisode.title}</h2>
            <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">
              {[currentEpisode.publishedAt, currentEpisode.duration].filter(Boolean).join(' / ')}
            </p>
          </div>
        </div>
        <div className="mt-3">
          {currentEpisode.audioType.startsWith('video/') ? (
            <video
              ref={(node) => {
                playerRef.current = node;
              }}
              controls
              preload="metadata"
              poster={currentEpisode.imageUrl}
              className="aspect-video w-full rounded-lg bg-black"
            >
              <source src={currentEpisode.audioUrl} type={currentEpisode.audioType} />
            </video>
          ) : (
            <audio
              ref={(node) => {
                playerRef.current = node;
              }}
              controls
              preload="metadata"
              className="block w-full"
            >
              <source src={currentEpisode.audioUrl} type={currentEpisode.audioType} />
            </audio>
          )}
        </div>
        {currentEpisode.description ? <p className="mt-3 text-sm text-muted">{currentEpisode.description}</p> : null}
      </section>
      <section className="grid gap-2 lg:max-h-[740px] lg:overflow-y-auto lg:pr-1" data-testid="episode-list">
        {episodes.map((episode) => {
          const isCurrent = episode.id === currentEpisode.id;

          return (
            <button
              key={episode.id}
              type="button"
              data-testid="episode-button"
              onClick={() => selectEpisode(episode)}
              aria-current={isCurrent ? 'true' : undefined}
              className={`grid w-full grid-cols-[64px_minmax(0,1fr)] gap-3 rounded-lg p-2 text-left transition ${
                isCurrent ? 'bg-gold text-ink' : 'hover:bg-soft dark:hover:bg-white/5'
              }`}
            >
              {episode.imageUrl ? (
                <span className="relative aspect-square overflow-hidden rounded-md bg-soft dark:bg-white/5">
                  <Image src={episode.imageUrl} alt="" fill sizes="64px" className="object-cover" unoptimized />
                </span>
              ) : (
                <span />
              )}
              <span className="min-w-0 self-center">
                <span className="block truncate text-sm font-semibold">{episode.title}</span>
                <span className={`mt-1 block text-xs ${isCurrent ? 'text-ink/70' : 'text-muted'}`}>
                  {[episode.publishedAt, episode.duration].filter(Boolean).join(' / ')}
                </span>
              </span>
            </button>
          );
        })}
      </section>
    </div>
  );
}
