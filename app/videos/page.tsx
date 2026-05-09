import type { Metadata } from 'next';
import { PageIntro } from '../components/PageIntro';
import { VideoEmbed } from '../components/VideoEmbed';
import { createPageMetadata } from '../lib/metadata';
import { videos } from '../lib/media';

export const metadata: Metadata = createPageMetadata({
  title: 'Videos',
  path: '/videos',
  description: 'Strong Asian Lead videos, interviews, event footage, and early demos.',
});

export default function VideosPage() {
  return (
    <>
      <PageIntro title="Videos" body="Interviews, community footage, legacy screening records, and the early platform demo." />
      <section className="pb-20">
        <div className="page-shell stagger-children grid gap-10 md:grid-cols-2">
          {videos.map((video) => (
            <VideoEmbed key={video.src} video={video} />
          ))}
        </div>
      </section>
    </>
  );
}
