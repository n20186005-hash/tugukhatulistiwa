import "dotenv/config";

/** Single source of truth for the production origin. Leave empty until a real domain is configured. */
export const site = process.env.PUBLIC_SITE_URL?.replace(/\/$/, "") || "";

// SEO site name following the "attraction + city + travel guide" convention.
export const SITE_NAME = "Tugu Khatulistiwa Pontianak — Panduan Wisata";

/** Append the canonical site name to a sub-page title. */
export function withSiteName(title) {
  return `${title} | ${SITE_NAME}`;
}
