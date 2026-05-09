function envBool(value: string | undefined, fallback: boolean): boolean {
  if (value == null) return fallback;

  const normalized = value.trim().toLowerCase();
  if (normalized === 'true' || normalized === '1' || normalized === 'yes' || normalized === 'on') return true;
  if (normalized === 'false' || normalized === '0' || normalized === 'no' || normalized === 'off') return false;

  return fallback;
}

export const FEATURES = Object.freeze({
  googleAnalytics: envBool(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS ?? process.env.ENABLE_GOOGLE_ANALYTICS, false),
  metaPixel: envBool(process.env.NEXT_PUBLIC_ENABLE_META_PIXEL ?? process.env.ENABLE_META_PIXEL, false),
});

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? process.env.GA_MEASUREMENT_ID ?? '';

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? process.env.META_PIXEL_ID ?? '';
