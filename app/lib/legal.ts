export type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

export type LegalPageData = {
  title: string;
  intro: string;
  updated?: string;
  sections: LegalSection[];
};

export const legalPages = {
  accessibility: {
    title: 'Accessibility Statement',
    intro: 'Strong Asian Lead is committed to making this archive usable for everyone.',
    updated: 'Last updated May 9, 2026.',
    sections: [
      {
        title: 'Conformance status',
        body: 'We aim to follow WCAG 2.1 AA guidance through semantic HTML, readable contrast, keyboard navigation, and clear page structure.',
      },
      {
        title: 'Technical approach',
        body: 'The site is built with Next.js, React, CSS, and WAI-ARIA where native HTML needs additional context.',
        items: ['Semantic headings and landmarks.', 'Keyboard-accessible links, menus, and controls.', 'Alternative text for meaningful images.', 'Reduced layout chrome around readable copy.'],
      },
      {
        title: 'Feedback',
        body: 'If you encounter a barrier, contact us and include the page URL, device, browser, and the issue you experienced.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    intro: 'Strong Asian Lead keeps this archive simple and collects only what is needed to operate the site and respond to direct contact.',
    updated: 'Last updated May 9, 2026.',
    sections: [
      {
        title: 'Information we collect',
        items: ['Contact details you send directly by email or through linked platforms.', 'Optional analytics only if you opt in.', 'Essential local preferences for theme and cookie choices.'],
      },
      {
        title: 'How we use it',
        body: 'We use contact information to respond. We use optional analytics to understand which archive pages are useful. We do not sell personal information.',
      },
      {
        title: 'Third parties',
        body: 'The site links to YouTube, Spotify, Instagram, Filmclusive, LinkedIn, and other platforms. Those services run under their own privacy policies.',
      },
      {
        title: 'Your control',
        body: 'You can reset local cookie preferences from the footer or cookie policy page. For direct data requests, contact the team.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro: 'These terms govern access to and use of the Strong Asian Lead website and archive.',
    updated: 'Last updated May 9, 2026.',
    sections: [
      {
        title: 'Use of the site',
        body: 'You may browse the archive for personal, educational, journalistic, and community reference purposes.',
      },
      {
        title: 'Content ownership',
        body: 'Strong Asian Lead and its contributors retain rights in original materials. Third-party marks, platforms, films, and partner materials remain property of their owners.',
      },
      {
        title: 'External links',
        body: 'Some pages link to third-party sites and embedded media. We are not responsible for external content, availability, policies, or changes.',
      },
      {
        title: 'No professional advice',
        body: 'Archive content is informational and does not constitute legal, financial, employment, or production advice.',
      },
    ],
  },
  cookiePolicy: {
    title: 'Cookie Policy',
    intro: 'This policy explains how Strong Asian Lead uses cookies and local browser storage.',
    updated: 'Last updated May 9, 2026.',
    sections: [
      {
        title: 'Essential preferences',
        body: 'Theme and privacy settings are stored locally so the site remembers your choices.',
      },
      {
        title: 'Optional analytics',
        body: 'Anonymous analytics stay off unless you opt in. They help us understand archive usage.',
      },
      {
        title: 'Marketing pixels',
        body: 'Marketing pixels stay off unless you explicitly enable them.',
      },
      {
        title: 'Changing choices',
        body: 'Use the footer cookie preferences link or the controls on this page to update or reset your choices.',
      },
    ],
  },
  copyright: {
    title: 'Copyright Notice',
    intro: 'This notice explains how original Strong Asian Lead materials and third-party assets are treated.',
    updated: 'Last updated May 9, 2026.',
    sections: [
      {
        title: 'Strong Asian Lead materials',
        items: ['Original website copy and archive descriptions.', 'Strong Asian Lead logos, graphics, and brand assets.', 'Event materials created for Strong Asian Lead.'],
      },
      {
        title: 'Photography and media',
        body: 'Event photography and embedded videos are preserved as part of the archive. Credits and ownership remain with their respective creators where applicable.',
      },
      {
        title: 'Third-party marks',
        body: 'Film titles, venue names, platform names, partner logos, and social platform marks belong to their respective owners.',
      },
    ],
  },
} satisfies Record<string, LegalPageData>;
