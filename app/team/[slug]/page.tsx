import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createPageMetadata } from '../../lib/metadata';
import { getTeamMember, teamMembers } from '../../lib/team';

type TeamMemberPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) return createPageMetadata({ title: 'Team' });

  return createPageMetadata({
    title: member.name,
    path: `/team/${member.slug}`,
    description: member.summary,
    image: member.image,
  });
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) notFound();

  return (
    <section className="section">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Link href="/team" className="minimal-link text-sm">Team</Link>
          <div className="relative mt-8 aspect-[3/4] max-w-sm overflow-hidden bg-soft dark:bg-white/5">
            <Image src={member.image} alt={member.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" priority />
          </div>
        </div>
        <article>
          <p className="text-sm font-semibold text-red dark:text-gold">{member.role} · {member.location}</p>
          <h1 className="mt-4 text-5xl font-semibold leading-none sm:text-7xl">{member.name}</h1>
          <p className="body-copy mt-6">{member.summary}</p>
          <div className="mt-10 grid gap-5 text-muted dark:text-white/70">
            {member.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <section className="mt-10 border-t border-black/10 pt-6 dark:border-white/10">
            <h2 className="text-xl font-semibold">Focus</h2>
            <ul className="mt-4 grid gap-2 text-sm text-muted dark:text-white/68">
              {member.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
            {member.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="minimal-link">
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
