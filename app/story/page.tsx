import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '../components/PageIntro';
import { createPageMetadata } from '../lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Story',
  path: '/story',
  description: 'The story and legacy of Strong Asian Lead.',
});

const moments = [
  ['2020', 'Strong Asian Lead began as an educational platform for AANHPI storytellers.'],
  ['2022', 'The community expanded through APIHM events, panels, and in-person gatherings.'],
  ['2023', 'The Legacy Screening Series and strike solidarity work became part of the archive.'],
  ['2024', 'The organization paused, while its directory and network lessons moved toward Filmclusive.'],
];

export default function StoryPage() {
  return (
    <>
      <PageIntro title="Story" body="A short record of what Strong Asian Lead was, what it tried, and where the work moved next." />
      <section className="pb-20">
        <div className="page-shell max-w-4xl">
          <div className="grid gap-8">
            {moments.map(([year, body]) => (
              <div key={year} className="grid gap-3 border-t border-black/10 pt-6 dark:border-white/10 sm:grid-cols-[120px_1fr]">
                <p className="text-2xl font-semibold text-red dark:text-gold">{year}</p>
                <p className="text-muted dark:text-white/70">{body}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="minimal-link mt-10">Read more</Link>
        </div>
      </section>
    </>
  );
}
