import type { Metadata } from 'next';
import { GalleryCard } from '../components/GalleryCard';
import { PageIntro } from '../components/PageIntro';
import { createPageMetadata } from '../lib/metadata';
import { galleries } from '../lib/media';

export const metadata: Metadata = createPageMetadata({
  title: 'Galleries',
  path: '/galleries',
  description: 'Strong Asian Lead event galleries and community photos.',
});

export default function GalleriesPage() {
  return (
    <>
      <PageIntro title="Galleries" body="Screenings, panels, gatherings, and strike solidarity from the Strong Asian Lead archive." />
      <section className="pb-20">
        <div className="page-shell stagger-children grid gap-9 md:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery, index) => (
            <GalleryCard key={gallery.slug} gallery={gallery} priority={index < 2} />
          ))}
        </div>
      </section>
    </>
  );
}
