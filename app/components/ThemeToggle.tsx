'use client';

import { useTheme } from '../hooks/useTheme';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { preference, resolvedTheme, setPreference } = useTheme();

  const nextPreference = preference === 'system' ? 'dark' : preference === 'dark' ? 'light' : 'system';
  const label = preference === 'system' ? 'Device' : preference === 'dark' ? 'Dark' : 'Light';

  return (
    <button
      type="button"
      onClick={() => setPreference(nextPreference)}
      className={`inline-flex h-10 items-center justify-center bg-ink px-3 text-sm font-medium text-white transition hover:bg-red dark:bg-gold dark:text-ink dark:hover:bg-white ${className}`}
      aria-label={`Theme: ${label}. Current resolved theme is ${resolvedTheme}.`}
    >
      {label}
    </button>
  );
}
