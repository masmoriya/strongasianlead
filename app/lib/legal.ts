import { site } from './site';

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

const updated = 'Last updated May 9, 2026.';

export const legalPages = {
  accessibility: {
    title: 'Accessibility Statement',
    intro: `${site.name} is committed to ensuring digital accessibility for everyone who uses this archive.`,
    updated,
    sections: [
      {
        title: 'Conformance status',
        body: 'We aim to conform with WCAG 2.1 level AA across navigation, readable contrast, focus states, responsive layout, and keyboard access.',
      },
      {
        title: 'Technical specifications',
        body: 'This site is built with semantic HTML, CSS, and React. We use accessible landmarks, descriptive page titles, reduced-motion support, and meaningful alternative text where images carry content.',
      },
      {
        title: 'Assessment approach',
        items: ['Self-evaluation during page updates.', 'Automated checks where practical.', 'Manual keyboard and zoom review on shared page patterns.'],
      },
      {
        title: 'Known limits',
        body: 'Some archived third-party embeds, social platforms, and older event media may have accessibility limits outside our direct control. We keep the surrounding page structure accessible and provide reasonable alternatives when we can.',
      },
      {
        title: 'Feedback',
        body: `Email ${site.email} with the page URL, device, browser, assistive technology if applicable, and the issue you experienced. We aim to respond within 2-5 business days.`,
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    intro: `${site.name} keeps data collection limited, consent-based, and aligned with how the site actually works.`,
    updated,
    sections: [
      {
        title: 'Information we collect',
        body: 'We collect only what is necessary to operate the archive, respond to direct requests, and improve the site when you opt in.',
        items: [
          'Contact details you send directly by email or linked platforms.',
          'Opt-in usage metrics from Google Analytics if enabled through the cookie banner.',
          'Essential local preferences for theme, layout, and privacy consent choices.',
          'Standard server logs needed for security, reliability, and abuse prevention.',
        ],
      },
      {
        title: 'How we use this data',
        body: 'We use submitted information to respond, maintain the archive, process rights or accessibility requests, and understand page-level usage when analytics are enabled. We do not sell personal information or use this site for automated profiling.',
      },
      {
        title: 'Third-party processing',
        items: [
          'Google Analytics for traffic measurement only after explicit consent.',
          'Secure hosting and server logging for delivery, reliability, and abuse prevention.',
          'External platforms such as YouTube, Spotify, Instagram, Filmclusive, and LinkedIn under their own policies.',
        ],
      },
      {
        title: 'Your rights and control',
        body: `You can reset local consent from the cookie banner or cookie policy page. To access, correct, or delete information you submitted directly, email ${site.email}.`,
      },
      {
        title: 'Retention',
        body: 'Direct messages are retained only as long as needed to respond, maintain records, or meet legal obligations. Local browser preferences remain on your device until cleared.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro: `These terms govern access to and use of ${site.url} and the information, archive materials, and community references provided by ${site.name}.`,
    updated,
    sections: [
      {
        title: '1. Acceptance and eligibility',
        body: 'By accessing the site or submitting an inquiry, you represent that you have the legal capacity to use the site and agree to these terms.',
      },
      {
        title: '2. Scope of services',
        body: 'The site provides community archive materials, event references, media links, and information about the creative network connected to Strong Asian Lead. Any third-party platform, event, or service linked from the site is governed by its own terms.',
      },
      {
        title: '3. Intellectual property and permitted use',
        body: 'Original site copy, layout, graphics, and Strong Asian Lead brand assets belong to Strong Asian Lead or its contributors. You may browse and reference the archive for personal, educational, journalistic, and community purposes. Unauthorized scraping, mirroring, or commercial redistribution is prohibited.',
      },
      {
        title: '4. User-submitted information',
        body: 'When you contact us, you confirm the information is accurate and that you have the right to share it. We handle submitted information under the privacy policy.',
      },
      {
        title: '5. Archive content and no professional advice',
        body: 'Archive content is informational and may reference older events, platforms, and organizations. It does not constitute legal, financial, employment, production, or professional advice.',
      },
      {
        title: '6. Disclaimers and limitation of liability',
        body: 'The site is provided as is without warranties of any kind. To the fullest extent allowed by law, Strong Asian Lead is not liable for indirect, incidental, consequential, or reliance-based damages from use of the site.',
      },
      {
        title: '7. Third-party links',
        body: 'The site may link to external media, social platforms, partners, venues, and community resources. We do not control and are not responsible for external content, availability, or policies.',
      },
      {
        title: '8. Modifications and termination',
        body: 'We may update these terms or discontinue any part of the site at any time. Continued use after updates means you accept the revised terms.',
      },
      {
        title: '9. Governing law',
        body: 'These terms are governed by the laws of the State of California, without regard to conflict-of-law rules.',
      },
      {
        title: 'Cookies and privacy',
        body: 'Use of the site is also governed by the privacy policy and cookie policy, which are incorporated into these terms by reference.',
      },
    ],
  },
  cookiePolicy: {
    title: 'Cookie Policy',
    intro: `This policy explains how ${site.name} uses cookies and similar local browser technologies on ${site.url}.`,
    updated,
    sections: [
      {
        title: 'Cookie categories',
        items: [
          'Essential cookies: power layout, theme preference, and privacy consent choices so the experience loads consistently. Required for the site to function.',
          'Optimization cookies: approximate city or region signals used only for site performance and only after explicit opt-in.',
          'Analytics cookies: anonymized usage metrics, such as Google Analytics, used to improve the site only after explicit opt-in.',
          'Marketing cookies: marketing or tracking pixels stay disabled unless you explicitly enable them.',
        ],
      },
      {
        title: 'Consent and technical enforcement',
        body: 'Your choices are stored locally and enforced immediately. Optional analytics and marketing scripts do not run unless their category is enabled.',
      },
      {
        title: 'Retention and expiry',
        items: ['Google Analytics: up to 2 years if enabled.', 'Consent preference: persistent until cleared.', 'Theme preference: persistent until cleared.'],
      },
      {
        title: 'Third-party domains',
        items: ['googletagmanager.com: opt-in only.', 'google-analytics.com: opt-in only.', 'connect.facebook.net and facebook.com: opt-in only if a marketing pixel is configured.'],
      },
      {
        title: 'Contact',
        body: `Questions about technical enforcement or privacy controls can be sent to ${site.email}.`,
      },
    ],
  },
  copyright: {
    title: 'Copyright Notice',
    intro: `${site.name} owns and protects the original Strong Asian Lead logos, graphics, copy, and archive presentation we publish. Third-party marks remain the property of their owners.`,
    updated,
    sections: [
      {
        title: 'Strong Asian Lead assets',
        body: 'Strong Asian Lead keeps copyright in original materials produced for the brand and archive.',
        items: ['Strong Asian Lead logos, graphics, and brand assets.', 'Original website copy, archive descriptions, and interface content.', 'Event materials created for Strong Asian Lead.'],
      },
      {
        title: 'Third-party logos and partners',
        body: 'Film titles, venue names, partner names, platform names, social marks, and contributor materials belong to their respective owners.',
      },
      {
        title: 'Display of external marks',
        body: 'We display third-party marks to document collaborations, events, media, or historical context. Displaying a mark does not signal ownership or broader endorsement beyond the context provided.',
      },
      {
        title: 'Questions or corrections',
        body: `If you notice a missing credit, incorrect ownership detail, or rights concern, email ${site.email}.`,
      },
    ],
  },
} satisfies Record<string, LegalPageData>;
