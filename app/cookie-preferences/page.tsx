import type { Metadata } from 'next';
import { CookiePolicyClient } from '../cookie-policy/CookiePolicyClient';
import { createPageMetadata } from '../lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Cookie Preferences',
  path: '/cookie-preferences',
  description: 'Manage Strong Asian Lead cookie preferences.',
});

export default function CookiePreferencesPage() {
  return <CookiePolicyClient />;
}
