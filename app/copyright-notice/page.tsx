import type { Metadata } from 'next';
import { LegalPage } from '../components/LegalPage';
import { createPageMetadata } from '../lib/metadata';
import { legalPages } from '../lib/legal';

export const metadata: Metadata = createPageMetadata({
  title: 'Copyright Notice',
  path: '/copyright-notice',
  description: 'Copyright notice for Strong Asian Lead.',
});

export default function CopyrightNoticePage() {
  return <LegalPage page={legalPages.copyright} />;
}
