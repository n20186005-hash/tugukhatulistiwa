import "dotenv/config";

/** Single source of truth for the production origin. Leave empty until a real domain is configured. */
export const site = process.env.PUBLIC_SITE_URL?.replace(/\/$/, "") || "";

// SEO site name following the "attraction + city + travel guide" convention.
export const SITE_NAME = "Tugu Khatulistiwa Pontianak — Panduan Wisata";
export const SITE_NAME_EN = "Equator Monument Pontianak — Travel Guide";

// Shared asset/links used by the layout (OG image) and homepage (hero + JSON-LD).
export const monumentPhoto = "https://commons.wikimedia.org/wiki/Special:FilePath/Pontianak%20Equator%20Monument.jpg?width=1920";
export const heroImage = "/images/hero.jpg";
export const mapUrl = "https://maps.app.goo.gl/D3JkJPVsLY13MFNv8";
export const GOVT_TOURISM_URL = "https://disporapar.pontianak.go.id/pariwisata/6";

/** Append the canonical site name to a sub-page title. */
export function withSiteName(title) {
  return `${title} | ${SITE_NAME}`;
}
