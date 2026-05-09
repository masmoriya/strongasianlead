import type { Metadata } from 'next';
import { LegalPage } from '../components/LegalPage';
import { createPageMetadata } from '../lib/metadata';
import { legalPages } from '../lib/legal';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  path: '/privacy',
  description: 'Privacy policy for Strong Asian Lead.',
});

export default function PrivacyPage() {
  return <LegalPage page={legalPages.privacy} />;
}
