import type { Metadata } from 'next';
import { CookiePolicyClient } from './CookiePolicyClient';
import { createPageMetadata } from '../lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Cookie Policy',
  path: '/cookie-policy',
  description: 'Cookie policy and privacy preferences for Strong Asian Lead.',
});

export default function CookiePolicyPage() {
  return <CookiePolicyClient />;
}
