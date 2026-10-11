/**
 * Canonical site URL used for metadata, Open Graph, sitemap and robots.
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL   — set this if you attach a custom domain
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's production domain (build-time)
 *   3. the current Vercel production URL as a safe fallback
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://srinishtha-rose.vercel.app")
).replace(/\/$/, "");
