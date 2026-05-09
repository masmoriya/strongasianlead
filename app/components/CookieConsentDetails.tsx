'use client';

import Link from 'next/link';
import { clearCookieConsent, type CookieConsent } from '../utils/cookie-consent';

type CookieConsentDetailsProps = {
  consent: CookieConsent | null;
  updatePreferences: (update: Partial<CookieConsent>) => void;
};

export function CookieConsentDetails({ consent, updatePreferences }: CookieConsentDetailsProps) {
  const analyticsOn = Boolean(consent?.analytics);
  const marketingOn = Boolean(consent?.marketing);

  return (
    <div className="grid gap-5 bg-soft p-5 dark:bg-white/5">
      <ConsentToggle
        title="Optional analytics"
        body="Anonymous page-level usage signals help us improve this archive. They stay off unless you turn them on."
        checked={analyticsOn}
        onChange={() => updatePreferences({ analytics: !analyticsOn })}
      />
      <ConsentToggle
        title="Marketing pixels"
        body="Third-party marketing pixels are not needed for the archive and stay off unless explicitly enabled."
        checked={marketingOn}
        onChange={() => updatePreferences({ marketing: !marketingOn })}
      />
      <div className="flex flex-col gap-3 text-sm text-muted dark:text-white/65 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Essential preferences power theme and privacy choices. Read the{' '}
          <Link href="/privacy" className="font-semibold underline underline-offset-4">privacy policy</Link>.
        </p>
        <button
          type="button"
          onClick={() => {
            clearCookieConsent();
            window.location.reload();
          }}
          className="w-fit bg-ink px-4 py-2 font-medium text-white dark:bg-gold dark:text-ink"
        >
          Reset
        </button>
      </div>
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
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm text-muted dark:text-white/65">{body}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`h-7 w-12 shrink-0 p-1 transition ${checked ? 'bg-red' : 'bg-black/20 dark:bg-white/20'}`}
      >
        <span className={`block h-5 w-5 bg-white transition ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}
