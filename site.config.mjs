import "dotenv/config";

/** Single source of truth for the production origin. Leave empty until a real domain is configured. */
export const site = process.env.PUBLIC_SITE_URL?.replace(/\/$/, "") || "";
