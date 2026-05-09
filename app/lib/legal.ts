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
    intro: 'Strong Asian Lead is committed to making this archive usable by as many people as possible.',
    updated: 'Last updated May 9, 2026.',
    sections: [
      {
        title: 'Conformance status',
        body: 'We aim to conform to WCAG 2.1 level AA. The site is reviewed for semantic structure, keyboard access, readable contrast, responsive layouts, and clear focus states.',
      },
      {
        title: 'Accessibility measures',
        items: [
          'Semantic headings, landmarks, and page titles.',
          'Keyboard-accessible navigation, links, and privacy controls.',
          'Visible focus styles and reduced-motion support.',
          'Alternative text for meaningful images and empty alt text for decorative imagery.',
          'Body copy that inherits the site font and avoids decorative treatments.',
          'Responsive layouts that support zoom and small screens.',
        ],
      },
      {
        title: 'Known limits',
        body: 'Some archived third-party embeds, external platforms, and older event media may have accessibility limits outside our direct control. We keep the surrounding page structure accessible and will provide reasonable alternatives when we can.',
      },
      {
        title: 'Feedback',
        body: 'If you encounter a barrier, email support@strongasianlead.com with the page URL, device, browser, assistive technology if applicable, and the issue you experienced.',
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
        items: [
          'Contact details you send directly by email or through linked platforms.',
          'Optional analytics only if you opt in through the cookie banner.',
          'Essential local preferences for theme and cookie choices.',
          'Technical information needed to deliver pages securely, such as standard server logs.',
        ],
      },
      {
        title: 'How we use it',
        body: 'We use contact information to respond, operate the archive, and handle rights, accessibility, or privacy requests. Optional analytics help us understand which archive pages are useful. We do not sell personal information.',
      },
      {
        title: 'Third parties',
        body: 'The site links to YouTube, Spotify, Instagram, Filmclusive, LinkedIn, and other platforms. Those services run under their own privacy policies.',
      },
      {
        title: 'Your control',
        body: 'You can update or reset local cookie preferences from the footer or cookie policy page. For direct privacy requests, email support@strongasianlead.com.',
      },
      {
        title: 'Retention',
        body: 'We keep direct messages only as long as needed to respond, maintain records, or comply with legal obligations. Local browser preferences stay on your device until you reset them.',
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
        body: 'You may browse the archive for personal, educational, journalistic, and community reference purposes. Do not interfere with the site, attempt unauthorized access, or misuse the archive.',
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
      {
        title: 'Changes',
        body: 'We may update these terms as the archive changes. Continued use of the site after an update means you accept the revised terms.',
      },
      {
        title: 'Contact',
        body: 'Questions about these terms can be sent to support@strongasianlead.com.',
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
        body: 'Theme and privacy settings are stored locally so the site remembers your choices. These are required for the site to function and cannot be disabled from the banner.',
      },
      {
        title: 'Optional analytics',
        body: 'Anonymous analytics stay off unless you opt in. They help us understand archive usage and should not be used to identify you.',
      },
      {
        title: 'Marketing pixels',
        body: 'Marketing pixels stay off unless you explicitly enable them.',
      },
      {
        title: 'Changing choices',
        body: 'Use the footer cookie preferences link or the controls on this page to update or reset your choices.',
      },
      {
        title: 'Contact',
        body: 'Questions about privacy controls can be sent to support@strongasianlead.com.',
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
