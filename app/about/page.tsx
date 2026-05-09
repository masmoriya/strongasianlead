import type { Metadata } from 'next';
import { PageIntro } from '../components/PageIntro';
import { VideoEmbed } from '../components/VideoEmbed';
import { createPageMetadata } from '../lib/metadata';
import { videos } from '../lib/media';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  path: '/about',
  description: 'The story and legacy of Strong Asian Lead.',
});

const sections = [
  {
    title: 'The mission',
    body: 'Strong Asian Lead was an educational platform for Asian American, Native Hawaiian, and Pacific Islander storytellers. It offered tools, resources, events, and community for emerging creatives working to break barriers in Hollywood.',
  },
  {
    title: 'The journey',
    body: 'The organization began with a clear vision: create a practical, welcoming space where emerging writers, filmmakers, and storytellers could learn together and find each other. The work ran from 2020 to 2024.',
  },
  {
    title: 'The lesson',
    body: 'Sustaining that mission as a small, resource-constrained organization was difficult. The team eventually paused Strong Asian Lead, carrying the lessons forward into new tools, projects, and communities.',
  },
  {
    title: 'The thanks',
    body: 'To every attendee, collaborator, speaker, volunteer, and supporter: thank you for believing in the mission and helping build something meaningful.',
  },
];

export default function AboutPage() {
  const demo = videos.find((video) => video.title === 'Early demo') ?? videos[0];

  return (
    <>
      <PageIntro
        eyebrow="2020 to 2024"
        title="A space for the film school we wished existed."
        body="Strong Asian Lead is paused, but the archive remains for the people who were there and the storytellers who find it later."
      />
      <section className="pb-20">
        <div className="page-shell stagger-children grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="soft-card p-8">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-ink text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Early demo</h2>
            <p className="mt-4 text-white/70">
              The first platform concept behind Strong Asian Lead: education, community, and access for storytellers.
            </p>
          </div>
          <VideoEmbed video={demo} />
        </div>
      </section>
    </>
  );
}
