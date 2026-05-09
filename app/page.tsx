import Image from 'next/image';
import Link from 'next/link';
import { GalleryCard } from './components/GalleryCard';
import { VideoEmbed } from './components/VideoEmbed';
import { galleries, videos } from './lib/media';
import { logo, site } from './lib/site';

export default function HomePage() {
  const featuredGalleries = galleries.slice(0, 3);
  const featuredVideos = videos.slice(1, 4);

  return (
    <>
      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-black text-white">
        <iframe
          src="https://www.youtube.com/embed/x0DYWqZwuRU?autoplay=1&mute=1&loop=1&playlist=x0DYWqZwuRU&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
          title="Strong Asian Lead community"
          className="absolute left-1/2 top-1/2 h-[120vh] w-[213vh] min-w-full -translate-x-1/2 -translate-y-1/2 opacity-50"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="page-shell relative grid min-h-[calc(100vh-64px)] grid-cols-1 items-end gap-10 pb-72 pt-24 sm:pb-24 lg:grid-cols-[minmax(0,760px)_1fr] lg:pb-20">
          <div className="fade-in">
            <div className="relative mb-7 h-16 w-80 max-w-full sm:mb-8">
              <Image src={logo.dark} alt="Strong Asian Lead" fill sizes="320px" className="object-contain object-left" priority />
            </div>
            <h1 className="text-5xl font-semibold leading-none sm:text-7xl">AANHPI storytellers, in community.</h1>
            <p className="mt-6 max-w-2xl text-base text-white/78 sm:text-lg">
              Strong Asian Lead created screenings, conversations, and creative infrastructure for Asian American, Native Hawaiian, and Pacific Islander voices in entertainment.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 pb-2 text-sm font-semibold sm:gap-4">
              <Link href="/galleries" className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 py-3.5 !text-[#17120f] transition hover:bg-[#f2bd00]">View galleries</Link>
              <a href={site.filmclusive} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 py-3.5 text-white transition hover:bg-white/10">Filmclusive</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="section-title">The work became a living archive.</h2>
          <div className="space-y-5 text-muted">
            <p>
              From 2020 to 2024, Strong Asian Lead made room for education, resources, live podcasts, mentorship, and community events across Los Angeles.
            </p>
            <p>
              Co-founded by Emi Lea Kamemoto and Mas Moriya, the initiative helped gather more than 600 creatives and became an early version of the network now carried forward through Filmclusive.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="page-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold">Galleries</h2>
            <Link href="/galleries" className="minimal-link text-sm">All galleries</Link>
          </div>
          <div className="stagger-children grid gap-8 md:grid-cols-3">
            {featuredGalleries.map((gallery, index) => (
              <GalleryCard key={gallery.slug} gallery={gallery} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold">Videos</h2>
            <Link href="/videos" className="minimal-link text-sm">All videos</Link>
          </div>
          <div className="stagger-children grid gap-8 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <VideoEmbed key={video.src} video={video} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
