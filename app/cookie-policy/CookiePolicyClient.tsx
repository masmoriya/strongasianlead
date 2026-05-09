'use client';

import { CookieConsentDetails } from '../components/CookieConsentDetails';
import { LegalPage } from '../components/LegalPage';
import { useCookieConsent } from '../context/CookieConsentContext';
import { legalPages } from '../lib/legal';

export function CookiePolicyClient() {
  const { preferences, updatePreferences } = useCookieConsent();

  return (
    <>
      <LegalPage page={legalPages.cookiePolicy} />
      <section className="pb-20">
        <div className="page-shell max-w-4xl">
          <h2 className="mb-4 text-2xl font-semibold">Cookie preferences</h2>
          <CookieConsentDetails consent={preferences} updatePreferences={updatePreferences} />
        </div>
      </section>
    </>
  );
}
