'use client';

import { useState } from 'react';
import { CookieConsentDetails } from './CookieConsentDetails';
import { useCookieConsent } from '../context/CookieConsentContext';

export function CookieConsentBanner() {
  const { preferences, showBanner, acceptAll, rejectNonEssential, updatePreferences, closeBanner } = useCookieConsent();
  const [expanded, setExpanded] = useState(false);

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3">
      <section
        role="dialog"
        aria-label="Cookie preferences"
        className="mx-auto max-w-5xl bg-paper p-4 shadow-[0_12px_60px_rgba(0,0,0,0.22)] dark:bg-[#1c120e] dark:text-white"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button type="button" onClick={() => setExpanded((value) => !value)} className="text-left">
            <p className="font-semibold">Privacy preferences</p>
            <p className="mt-1 text-sm text-muted dark:text-white/65">
              Essential cookies are on. Analytics and marketing stay optional.
            </p>
          </button>
          <div className="flex flex-wrap gap-2 text-sm font-medium">
            <button type="button" onClick={rejectNonEssential} className="bg-soft px-4 py-2 text-ink dark:bg-white/10 dark:text-white">
              Reject
            </button>
            <button type="button" onClick={acceptAll} className="bg-red px-4 py-2 text-white">
              Accept all
            </button>
            <button type="button" onClick={closeBanner} className="px-3 py-2 text-muted dark:text-white/65">
              Close
            </button>
          </div>
        </div>
        {expanded ? (
          <div className="mt-4">
            <CookieConsentDetails consent={preferences} updatePreferences={updatePreferences} />
          </div>
        ) : null}
      </section>
    </div>
  );
}
