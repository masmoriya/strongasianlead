export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location: string;
  image: string;
  imageAlt: string;
  links: { label: string; href: string }[];
  summary: string;
  bio: string[];
  focus: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: 'emi-lea-kamemoto',
    name: 'Emi Lea Kamemoto',
    role: 'Co-founder',
    location: 'Los Angeles, CA',
    image: '/Logos and Assets/Public Graphics/Strong Asian Lead Logo-square-digital-full color small-01.png',
    imageAlt: 'Strong Asian Lead logo mark.',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/emileakamemoto/' }],
    summary: 'Emi co-founded Strong Asian Lead and helped shape its community-first mission.',
    bio: [
      'Emi Lea Kamemoto co-founded Strong Asian Lead to create more room for Asian American, Native Hawaiian, and Pacific Islander storytellers in entertainment.',
      'Her work on the platform centered the people behind the stories: emerging creatives, event attendees, collaborators, and community partners who needed a place to connect.',
    ],
    focus: ['Community building', 'Storytelling access', 'AANHPI creative advocacy'],
  },
  {
    slug: 'mas-moriya',
    name: 'Mas Moriya',
    role: 'Co-founder',
    location: 'Los Angeles, CA',
    image: '/Photos/SAL PICKET PARTY/9.6.23_StrongAsianLead_PicketParty_MasMoriya-49-127.jpg',
    imageAlt: 'Mas Moriya at a Strong Asian Lead event.',
    links: [{ label: 'Website', href: 'https://masmoriya.com' }],
    summary: 'Mas organized events, live podcasts, mentorship work, and the creative directory that led toward Filmclusive.',
    bio: [
      'Mas Moriya co-founded Strong Asian Lead with Emi Lea Kamemoto and helped organize large-scale events, live podcasts, mentorship programs, and the early creative directory.',
      'That directory grew to more than 600 creatives and became part of the foundation for Filmclusive, a market network for entertainment professionals.',
    ],
    focus: ['Events and programming', 'Creative directories', 'Filmclusive platform development'],
  },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
