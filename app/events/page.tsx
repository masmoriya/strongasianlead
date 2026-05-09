import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageIntro } from '../components/PageIntro';
import { createPageMetadata } from '../lib/metadata';
import { galleries, photoPath } from '../lib/media';

export const metadata: Metadata = createPageMetadata({
  title: 'Events',
  path: '/events',
  description: 'Strong Asian Lead events, screenings, panels, and community gatherings.',
});

export default function EventsPage() {
  return (
    <>
      <PageIntro
        title="Events"
        body="The archive is organized around the rooms where people met: screenings, panels, parties, and moments of solidarity."
      />
      <section className="pb-20">
        <div className="page-shell stagger-children grid gap-10">
          {galleries.map((event, index) => (
            <article key={event.slug} className="soft-card grid gap-6 p-4 md:grid-cols-[260px_1fr_auto] md:items-center md:p-5">
              <div className="surface relative aspect-[4/3] bg-soft">
                <Image
                  src={photoPath(event, event.cover)}
                  alt={event.summary}
                  fill
                  sizes="260px"
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <div>
                <p className="text-sm text-muted dark:text-white/60">{event.date}</p>
                <h2 className="mt-1 text-2xl font-semibold">{event.title}</h2>
                <p className="mt-3 max-w-2xl text-sm text-muted dark:text-white/68">{event.description}</p>
              </div>
              <Link href={`/galleries/${event.slug}`} className="minimal-link rounded-md px-1 py-2 text-sm">
                View photos
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
