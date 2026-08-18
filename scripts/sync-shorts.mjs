/**
 * Regenerates src/lib/videos-data.ts from the YouTube channel's Shorts tab.
 *
 *   npm run sync:shorts
 *
 * Requires yt-dlp on PATH, or installed for the local Python
 * (`python -m pip install yt-dlp`).
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const CHANNEL_ID = "UCrzDEFD2i_yEOvCME7VfJNA";
const SHORTS_URL = `https://www.youtube.com/channel/${CHANNEL_ID}/shorts`;

const here = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(here, "../src/lib/videos-data.ts");

/** yt-dlp may be a standalone binary or a Python module; try both. */
const runners = [
  (args) => execFileSync("yt-dlp", args, { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 }),
  (args) => execFileSync("python", ["-m", "yt_dlp", ...args], { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 }),
];

function fetchEntries(lang) {
  const args = [
    "--flat-playlist",
    "--dump-single-json",
    "--no-warnings",
    "--extractor-args",
    `youtube:lang=${lang}`,
    SHORTS_URL,
  ];
  let lastError;
  for (const run of runners) {
    try {
      return JSON.parse(run(args)).entries ?? [];
    } catch (err) {
      lastError = err;
    }
  }
  throw new Error(`yt-dlp is not available: ${lastError?.message ?? lastError}`);
}

// Trailing hashtags are noise on the page; drop them, but never to nothing.
const TRAILING_TAGS = /(?:\s*#[^\s#]+)+\s*$/u;
const stripTags = (title) => {
  const trimmed = (title ?? "").trim();
  return trimmed.replace(TRAILING_TAGS, "").trim() || trimmed;
};

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const arEntries = fetchEntries("ar");
// The English pass is the reliable source for view counts: the Arabic locale
// renders them as "1.4 ألف", which yt-dlp misparses into 14.
const enById = new Map(fetchEntries("en").map((e) => [e.id, e]));

/**
 * "oardefault" is the vertical (9:16) still, but a few Shorts never get one.
 * Probe so the page never falls back to YouTube's grey 120x90 filler.
 */
const THUMB_CANDIDATES = ["oardefault", "oar2", "hqdefault"];
const DEFAULT_THUMB = THUMB_CANDIDATES[0];

async function resolveThumb(id) {
  for (const name of THUMB_CANDIDATES) {
    try {
      const res = await fetch(`https://i.ytimg.com/vi/${id}/${name}.jpg`, { method: "HEAD" });
      if (res.ok) return name;
    } catch {
      // Network hiccup — try the next candidate.
    }
  }
  return DEFAULT_THUMB;
}

/** Resolve in small batches so we don't open 267 sockets at once. */
const thumbs = new Map();
for (let i = 0; i < arEntries.length; i += 16) {
  const batch = arEntries.slice(i, i + 16);
  const names = await Promise.all(batch.map((e) => resolveThumb(e.id)));
  batch.forEach((e, n) => thumbs.set(e.id, names[n]));
}

const lines = [
  'import type { Loc } from "@/lib/books-data";',
  "",
  "export interface Short {",
  "  /** YouTube video id. */",
  "  id: string;",
  "  title: Loc;",
  "  /** View count at the time the list was last synced. */",
  "  views?: number;",
  "  /** i.ytimg.com still to use, when the default vertical one is missing. */",
  "  thumb?: string;",
  "}",
  "",
  "/**",
  " * Every Short published on the youtube.com/@osamaimseeh6557 channel,",
  " * newest first. Regenerate with `npm run sync:shorts`.",
  " */",
  "export const shorts: Short[] = [",
];

for (const entry of arEntries) {
  const en = enById.get(entry.id) ?? {};
  const ar = stripTags(entry.title);
  const enTitle = stripTags(en.title) || ar;
  lines.push("  {");
  lines.push(`    id: "${entry.id}",`);
  lines.push(`    title: { ar: "${esc(ar)}", en: "${esc(enTitle)}" },`);
  if (typeof en.view_count === "number") lines.push(`    views: ${en.view_count},`);
  const thumb = thumbs.get(entry.id);
  if (thumb && thumb !== DEFAULT_THUMB) lines.push(`    thumb: "${thumb}",`);
  lines.push("  },");
}

lines.push("];", "");

writeFileSync(OUT, lines.join("\n"), "utf8");
console.log(`Wrote ${arEntries.length} shorts to ${OUT}`);
