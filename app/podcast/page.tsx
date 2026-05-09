import type { Metadata } from 'next';
import { PageIntro } from '../components/PageIntro';
import { createPageMetadata } from '../lib/metadata';
import { site } from '../lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Podcast',
  path: '/podcast',
  description: 'The Strong Asian Lead podcast archive.',
});

export default function PodcastPage() {
  return (
    <>
      <PageIntro
        title="Podcast"
        body="Conversations with filmmakers, industry professionals, organizers, and community leaders."
      />
      <section className="pb-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-wrap gap-3 text-sm font-semibold lg:block lg:space-y-3">
            <a href={site.spotify} target="_blank" rel="noreferrer" className="minimal-link rounded-md bg-soft px-4 py-3 dark:bg-white/5">Spotify</a>
            <a href={site.anchor} target="_blank" rel="noreferrer" className="minimal-link rounded-md bg-soft px-4 py-3 dark:bg-white/5">Anchor</a>
          </div>
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/show/5vgqPKbNlqlamSddt8vhLB/video?utm_source=generator"
            width="100%"
            height="351"
            className="surface bg-soft"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Strong Asian Lead podcast"
          />
        </div>
      </section>
    </>
  );
}
