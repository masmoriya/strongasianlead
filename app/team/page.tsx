import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageIntro } from '../components/PageIntro';
import { createPageMetadata } from '../lib/metadata';
import { teamMembers } from '../lib/team';

export const metadata: Metadata = createPageMetadata({
  title: 'Team',
  path: '/team',
  description: 'The founders behind Strong Asian Lead.',
});

export default function TeamPage() {
  return (
    <>
      <PageIntro title="Team" body="Strong Asian Lead was built by a small founding team and carried by a much larger community." />
      <section className="pb-20">
        <div className="page-shell grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Link key={member.slug} href={`/team/${member.slug}`} className="group grid gap-5 bg-soft p-5 dark:bg-white/5 sm:grid-cols-[150px_1fr]">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper dark:bg-[#120d0a]">
                <Image src={member.image} alt={member.imageAlt} fill sizes="150px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm text-muted dark:text-white/62">{member.role} · {member.location}</p>
                <h2 className="mt-2 text-2xl font-semibold">{member.name}</h2>
                <p className="mt-4 text-sm text-muted dark:text-white/68">{member.summary}</p>
                <p className="mt-5 text-sm font-semibold underline underline-offset-4">Read profile</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
