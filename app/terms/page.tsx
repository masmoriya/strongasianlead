import type { Metadata } from 'next';
import { LegalPage } from '../components/LegalPage';
import { createPageMetadata } from '../lib/metadata';
import { legalPages } from '../lib/legal';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service',
  path: '/terms',
  description: 'Terms of service for Strong Asian Lead.',
});

export default function TermsPage() {
  return <LegalPage page={legalPages.terms} />;
}
