import type { Metadata } from 'next';
import { LegalPage } from '../components/LegalPage';
import { createPageMetadata } from '../lib/metadata';
import { legalPages } from '../lib/legal';

export const metadata: Metadata = createPageMetadata({
  title: 'Accessibility Statement',
  path: '/accessibility',
  description: 'Accessibility statement for Strong Asian Lead.',
});

export default function AccessibilityPage() {
  return <LegalPage page={legalPages.accessibility} />;
}
