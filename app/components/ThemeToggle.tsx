'use client';

import { useTheme } from '../hooks/useTheme';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { preference, resolvedTheme, setPreference } = useTheme();

  const nextPreference = preference === 'system' ? 'dark' : preference === 'dark' ? 'light' : 'system';
  const label = preference === 'system' ? 'Device' : preference === 'dark' ? 'Dark' : 'Light';
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setPreference(nextPreference)}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold dark:bg-white/10 dark:text-white dark:hover:bg-white/20 ${className}`}
      aria-label={`Theme: ${label}. Current resolved theme is ${resolvedTheme}.`}
      title={`Theme: ${label}`}
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M5 12H3" />
          <path d="M21 12h-2" />
          <path d="m18.4 5.6-1.4 1.4" />
          <path d="m7 17-1.4 1.4" />
          <path d="m5.6 5.6 1.4 1.4" />
          <path d="m17 17 1.4 1.4" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.9 13.4A8 8 0 1 1 10.6 3.1 6.5 6.5 0 1 0 20.9 13.4Z" />
        </svg>
      )}
    </button>
  );
}
