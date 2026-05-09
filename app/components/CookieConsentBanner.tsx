'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CookieConsentDetails } from './CookieConsentDetails';
import { useCookieConsent } from '../context/CookieConsentContext';

export function CookieConsentBanner() {
  const { preferences, showBanner, acceptAll, rejectNonEssential, updatePreferences } = useCookieConsent();
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const initialViewportCheck = window.setTimeout(checkViewport, 0);
    window.addEventListener('resize', checkViewport);
    window.addEventListener('orientationchange', checkViewport);

    return () => {
      window.clearTimeout(initialViewportCheck);
      window.removeEventListener('resize', checkViewport);
      window.removeEventListener('orientationchange', checkViewport);
    };
  }, []);

  const toggleExpanded = useCallback(() => {
    setExpanded((value) => !value);
  }, []);

  if (!showBanner || typeof document === 'undefined') return null;

  const banner = (
    <>
      <button
        type="button"
        aria-label="Collapse cookie preferences"
        className={`fixed inset-0 z-[2147483647] bg-black/40 transition ${
          expanded ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setExpanded(false)}
      />

      <div
        className="fixed inset-x-0 bottom-0 z-[2147483648] px-2 pb-2 sm:px-4"
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        <section
          role="dialog"
          aria-modal={expanded}
          aria-live="polite"
          aria-label="Privacy notice"
          className="mx-auto w-full overflow-hidden rounded-lg bg-paper shadow-[0_12px_60px_rgba(0,0,0,0.22)] dark:bg-[#1c120e] dark:text-white"
        >
          <div className="p-3 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={toggleExpanded}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleExpanded();
                  }
                }}
                aria-expanded={expanded}
                className="flex min-w-0 flex-1 items-start gap-3 rounded-md p-1 text-left transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-red dark:hover:bg-white/10"
              >
                <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-red text-sm font-semibold text-white">
                  ✓
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">Privacy protected</span>
                  <span className="mt-1 block text-xs text-muted dark:text-white/65 sm:text-sm">
                    Essential cookies. Optional anonymous analytics and marketing pixels.
                  </span>
                </span>
              </button>

              <div className={`flex shrink-0 gap-2 text-sm font-medium ${isMobile ? 'w-full' : ''}`}>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="rounded-md bg-soft px-4 py-2 text-ink transition hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-red dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  Reject all
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-md bg-red px-4 py-2 text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 focus:ring-offset-paper dark:hover:bg-gold dark:hover:text-ink"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={toggleExpanded}
                  className="rounded-md px-3 py-2 text-muted transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-red dark:text-white/65 dark:hover:bg-white/10"
                  aria-label={expanded ? 'Collapse details' : 'Expand details'}
                >
                  {expanded ? '-' : '+'}
                </button>
              </div>
            </div>

            {expanded ? (
              <div className="mt-3 border-t border-black/10 pt-3 dark:border-white/10">
                <div className="grid max-h-[60vh] gap-3 overflow-y-auto text-sm sm:max-h-none">
                  <div className="grid gap-2 sm:grid-cols-3">
                    <PrivacyPoint title="Page views" body="Site analytics only." />
                    <PrivacyPoint title="Approximate location" body="Region only, if analytics is enabled." />
                    <PrivacyPoint title="Personal data" body="Not collected by this banner." />
                  </div>
                  <CookieConsentDetails consent={preferences} updatePreferences={updatePreferences} />
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </>
  );

  return createPortal(banner, document.body);
}

function PrivacyPoint({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg bg-soft p-3 dark:bg-white/5">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-xs text-muted dark:text-white/65">{body}</p>
    </div>
  );
}
