'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { clearAllCookies, type CookieConsent } from '../utils/cookie-consent';

type CookieConsentDetailsProps = {
  consent: CookieConsent | null;
  updatePreferences: (update: Partial<CookieConsent>) => void;
};

export function CookieConsentDetails({ consent, updatePreferences }: CookieConsentDetailsProps) {
  const [confirmReset, setConfirmReset] = useState(false);
  const analyticsOn = Boolean(consent?.analytics);
  const marketingOn = Boolean(consent?.marketing);

  const onToggleAnalytics = useCallback(() => {
    const next = !analyticsOn;
    updatePreferences({ analytics: next, location: next });
    if (!next) window.location.reload();
  }, [analyticsOn, updatePreferences]);

  const onToggleMarketing = useCallback(() => {
    const next = !marketingOn;
    updatePreferences({ marketing: next });
    if (!next) window.location.reload();
  }, [marketingOn, updatePreferences]);

  const resetConsent = useCallback(() => {
    clearAllCookies();
    window.location.reload();
  }, []);

  return (
    <div className="grid gap-4 rounded-lg bg-soft p-4 text-sm dark:bg-white/5">
      <PreferenceBlock
        title="Essential cookies"
        body="Power layout, theme preference, and consent choices. Required for the site to function."
      />
      <ConsentToggle
        title="Anonymous analytics"
        body="Opt-in page-level metrics and approximate region signals help improve the archive."
        checked={analyticsOn}
        onChange={onToggleAnalytics}
      />
      <ConsentToggle
        title="Marketing pixels"
        body="Third-party marketing analytics stay off unless explicitly enabled."
        checked={marketingOn}
        onChange={onToggleMarketing}
      />
      <div className="flex flex-col gap-3 text-sm text-muted dark:text-white/65 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Review the{' '}
          <Link href="/privacy" className="font-semibold underline underline-offset-4">
            privacy policy
          </Link>{' '}
          or{' '}
          <Link href="/terms" className="font-semibold underline underline-offset-4">
            terms
          </Link>
          .
        </p>
        {confirmReset ? (
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={resetConsent}
              className="rounded-md bg-red px-3 py-2 font-medium text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-red"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="rounded-md bg-paper px-3 py-2 font-medium text-ink transition hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-red dark:bg-black/20 dark:text-white"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="w-fit rounded-md bg-ink px-4 py-2 font-medium text-white transition hover:bg-red focus:outline-none focus:ring-2 focus:ring-red dark:bg-gold dark:text-ink dark:hover:bg-[#f2bd00]"
          >
            Reset cookies
          </button>
        )}
      </div>
    </div>
  );
}

function PreferenceBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-muted dark:text-white/65">{body}</p>
    </div>
  );
}

function ConsentToggle({
  title,
  body,
  checked,
  onChange,
}: {
  title: string;
  body: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-sm text-muted dark:text-white/65">{body}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`${title}: ${checked ? 'on' : 'off'}`}
        onClick={onChange}
        className={`h-7 w-12 shrink-0 rounded-full p-1 transition focus:outline-none focus:ring-2 focus:ring-red ${
          checked ? 'bg-red' : 'bg-black/20 dark:bg-white/20'
        }`}
      >
        <span className={`block h-5 w-5 rounded-full bg-white transition ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}
