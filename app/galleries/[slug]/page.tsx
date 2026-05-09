import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createPageMetadata } from '../../lib/metadata';
import { galleries, getGalleryPhotos, photoPath } from '../../lib/media';

type GalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return galleries.map((gallery) => ({ slug: gallery.slug }));
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = galleries.find((item) => item.slug === slug);

  if (!gallery) {
    return createPageMetadata({ title: 'Gallery' });
  }

  return createPageMetadata({
    title: gallery.title,
    description: gallery.description,
    path: `/galleries/${gallery.slug}`,
    image: photoPath(gallery, gallery.cover),
  });
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const gallery = galleries.find((item) => item.slug === slug);

  if (!gallery) {
    notFound();
  }

  const photos = await getGalleryPhotos(gallery);

  return (
    <>
      <section className="bg-ink text-white">
        <div className="page-shell grid min-h-[72vh] gap-10 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <Link href="/galleries" className="minimal-link text-sm text-white/70">Galleries</Link>
            <p className="mt-10 text-sm font-semibold text-gold">{gallery.date}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-none sm:text-7xl">{gallery.title}</h1>
            <p className="mt-6 text-white/72">{gallery.description}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src={photoPath(gallery, gallery.cover)}
              alt={gallery.summary}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-shell">
          <p className="mb-8 text-sm font-semibold text-muted">{photos.length} photos</p>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {photos.map((photo, index) => (
              <div key={photo.src} className="mb-4 break-inside-avoid bg-soft">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={700}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
