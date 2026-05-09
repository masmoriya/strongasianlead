export type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = 'salCookieConsent';

export function getDefaultConsent(): CookieConsent {
  return { analytics: false, marketing: false };
}

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(COOKIE_KEY);
  if (!stored) return null;

  try {
    return { ...getDefaultConsent(), ...(JSON.parse(stored) as Partial<CookieConsent>) };
  } catch {
    return null;
  }
}

function notify(detail: CookieConsent | null) {
  window.dispatchEvent(new CustomEvent('sal-cookie-consent-changed', { detail }));
}

export function setConsent(update: Partial<CookieConsent>) {
  const next = { ...getDefaultConsent(), ...getStoredConsent(), ...update };
  window.localStorage.setItem(COOKIE_KEY, JSON.stringify(next));
  notify(next);
  return next;
}

export function clearCookieConsent() {
  window.localStorage.removeItem(COOKIE_KEY);
  notify(null);
}
