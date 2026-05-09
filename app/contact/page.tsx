import type { Metadata } from 'next';
import Image from 'next/image';
import { PageIntro } from '../components/PageIntro';
import { createPageMetadata } from '../lib/metadata';
import { logo, site } from '../lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  path: '/contact',
  description: 'Contact and platform links for Strong Asian Lead.',
});

const links = [
  { label: 'Email', href: `mailto:${site.email}`, description: site.email },
  { label: 'Filmclusive', href: site.filmclusive, description: 'The network that grew from this work.' },
  { label: 'Instagram', href: site.instagram, description: 'The public Strong Asian Lead social archive.' },
  { label: 'Spotify', href: site.spotify, description: 'Podcast episodes and conversations.' },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact" body="Strong Asian Lead is paused. The work continues through the people, archive, and Filmclusive." />
      <section className="pb-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="surface relative aspect-square max-w-xs bg-soft p-8 dark:bg-white/5">
            <Image src={logo.square} alt="Strong Asian Lead logo" fill sizes="320px" className="object-contain p-8" />
          </div>
          <div className="stagger-children grid gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="soft-card group p-5 transition hover:-translate-y-0.5"
              >
                <h2 className="text-2xl font-semibold group-hover:underline">{link.label}</h2>
                <p className="mt-2 text-muted dark:text-white/68">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
