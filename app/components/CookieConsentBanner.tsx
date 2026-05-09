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
      {expanded ? <button type="button" aria-label="Collapse cookie preferences" className="fixed inset-0 bg-black/35" onClick={() => setExpanded(false)} /> : null}
      <section
        role="dialog"
        aria-modal={expanded}
        aria-label="Privacy preferences"
        className="relative mx-auto max-w-5xl rounded-lg bg-paper p-4 shadow-[0_12px_60px_rgba(0,0,0,0.22)] dark:bg-[#1c120e] dark:text-white"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="flex min-w-0 items-start gap-3 rounded-md p-1 text-left transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-red dark:hover:bg-white/10"
          >
            <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-red text-sm font-semibold text-white">✓</span>
            <span className="min-w-0">
              <span className="block font-semibold">Privacy protected</span>
              <span className="mt-1 block text-sm text-muted dark:text-white/65">
                Essential cookies are on. Optional analytics and marketing are off unless you choose them.
              </span>
            </span>
            <span className="ml-auto hidden rounded-full bg-soft px-3 py-1 text-xs font-medium text-muted dark:bg-white/10 dark:text-white/70 sm:block">
              {expanded ? 'Hide' : 'Details'}
            </span>
          </button>
          <div className="flex flex-wrap gap-2 text-sm font-medium">
            <button type="button" onClick={rejectNonEssential} className="rounded-md bg-soft px-4 py-2 text-ink transition hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-red dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
              Reject optional
            </button>
            <button type="button" onClick={acceptAll} className="rounded-md bg-red px-4 py-2 text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 focus:ring-offset-paper dark:hover:bg-gold dark:hover:text-ink">
              Accept all
            </button>
            <button type="button" onClick={closeBanner} className="rounded-md px-3 py-2 text-muted transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-red dark:text-white/65 dark:hover:bg-white/10">
              Close
            </button>
          </div>
        </div>
        {expanded ? (
          <div className="mt-4">
            <CookieConsentDetails consent={preferences} updatePreferences={updatePreferences} />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-3 text-sm font-medium text-muted underline underline-offset-4 hover:text-ink focus:outline-none focus:ring-2 focus:ring-red dark:text-white/65 dark:hover:text-white"
          >
            Manage choices
          </button>
        )}
      </section>
    </div>
  );
}
