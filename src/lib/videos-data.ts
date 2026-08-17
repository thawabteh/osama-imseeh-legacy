import type { Loc } from "@/lib/books-data";

/**
 * A YouTube video shown in the "Videos" (فيديو) section.
 * `id` is the YouTube video ID — the part after `/shorts/` or `watch?v=`.
 */
export interface VideoItem {
  id: string;
  /** Bilingual title shown under the thumbnail and used for the modal / aria-labels. */
  title: Loc;
}

/**
 * Latest videos from https://www.youtube.com/@osamaimseeh6557
 * (channel_id UCrzDEFD2i_yEOvCME7VfJNA).
 *
 * To add a new video later, just append an entry here — no component changes needed.
 * Titles are the real YouTube titles; the content is Arabic so the same title
 * is shown in both languages.
 */
export const videos: VideoItem[] = [
  {
    id: "gjYcW1GsU2Y",
    title: {
      ar: "«لا تخف من التخلّي عن الجيّد سعيًا وراء العظيم.» جون روكفلر",
      en: "«لا تخف من التخلّي عن الجيّد سعيًا وراء العظيم.» جون روكفلر",
    },
  },
  { id: "pQvXBLf3iyE", title: { ar: "Just in Case?", en: "Just in Case?" } },
  {
    id: "qpsHqYvUXek",
    title: { ar: "حب الأب والأم غير مشروط", en: "حب الأب والأم غير مشروط" },
  },
  {
    id: "PDKoV2OYAww",
    title: { ar: "مقولة محمد علي كلاي", en: "مقولة محمد علي كلاي" },
  },
  {
    id: "1lHx6uA8Du4",
    title: {
      ar: "الابتسامة أول سلعة يقدمها التاجر",
      en: "الابتسامة أول سلعة يقدمها التاجر",
    },
  },
  {
    id: "sySXBsbQkwI",
    title: { ar: "خلاوة انك ما تعمل اشي؟", en: "خلاوة انك ما تعمل اشي؟" },
  },
  { id: "f7y0Fr7DWaQ", title: { ar: "جد لأخيك عذراً", en: "جد لأخيك عذراً" } },
];
