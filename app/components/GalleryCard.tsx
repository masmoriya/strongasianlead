import Image from 'next/image';
import Link from 'next/link';
import type { Gallery } from '../lib/media';
import { photoPath } from '../lib/media';

export function GalleryCard({ gallery, priority = false }: { gallery: Gallery; priority?: boolean }) {
  return (
    <Link href={`/galleries/${gallery.slug}`} className="group block">
      <div className="surface relative aspect-[4/3] bg-soft">
        <Image
          src={photoPath(gallery, gallery.cover)}
          alt={gallery.summary}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
      <div className="mt-4 px-1">
        <p className="text-sm text-muted">{gallery.date}</p>
        <h2 className="mt-1 text-xl font-semibold">{gallery.title}</h2>
        <p className="mt-2 text-sm text-muted">{gallery.summary}</p>
      </div>
    </Link>
  );
}
