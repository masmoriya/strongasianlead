import type { Metadata } from 'next';
import { PodcastPlayer } from '../components/PodcastPlayer';
import { createPageMetadata } from '../lib/metadata';
import { getPodcastFeed } from '../lib/podcast';

export const revalidate = 3600;

export const metadata: Metadata = createPageMetadata({
  title: 'Podcast',
  path: '/podcast',
  description: 'The Strong Asian Lead podcast archive.',
});

export default async function PodcastPage() {
  const feed = await getPodcastFeed();

  return (
    <section className="py-6 sm:py-10">
      <div className="page-shell">
        <h1 className="sr-only">{feed.title}</h1>
        <PodcastPlayer episodes={feed.episodes} />
      </div>
    </section>
  );
}
