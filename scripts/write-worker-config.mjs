import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// Cloudflare Pages CI may redirect Wrangler to dist/client/wrangler.json. This generated file
// has paths relative to dist/client, preventing an accidental dist/client/dist/client lookup.
const clientDir = join(process.cwd(), "dist", "client");
await mkdir(clientDir, { recursive: true });
await writeFile(
  join(clientDir, "wrangler.json"),
  `${JSON.stringify(
    {
      name: "tugu-khatulistiwa-guide",
      compatibility_date: "2026-08-19",
      assets: { directory: "." },
    },
    null,
    2,
  )}\n`,
);
