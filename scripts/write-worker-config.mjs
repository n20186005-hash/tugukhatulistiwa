import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
await mkdir(distDir, { recursive: true });
await writeFile(
  join(distDir, "wrangler.json"),
  `${JSON.stringify(
    {
      name: "tugu-khatulistiwa-guide",
      compatibility_date: "2026-08-19",
      assets: { directory: ".", not_found_handling: "404-page" },
    },
    null,
    2,
  )}\n`,
);
