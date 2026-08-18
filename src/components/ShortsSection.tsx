import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight, Youtube, ExternalLink } from "lucide-react";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { useLang } from "@/lib/i18n";
import { shorts } from "@/lib/videos-data";

const CHANNEL_URL = "https://www.youtube.com/@osamaimseeh6557/shorts";

/** Cards shown at first, and how many each "load more" press adds. */
const PAGE_SIZE = 20;

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const COPY = {
  ar: {
    tag: "يوتيوب شورتس",
    headA: "كلمات ",
    headB: "قصيرة",
    sub: `${shorts.length} مقطعاً من قناة أسامة إمسيح على يوتيوب — خلاصة تجربة في أقل من دقيقة.`,
    loadMore: "عرض المزيد",
    remaining: (n: number) => `بقي ${n}`,
    channel: "زيارة القناة على يوتيوب",
    watch: "مشاهدة على يوتيوب",
    close: "إغلاق",
    prev: "السابق",
    next: "التالي",
    play: "تشغيل",
    thousand: "ألف",
    million: "مليون",
    views: "مشاهدة",
  },
  en: {
    tag: "YouTube Shorts",
    headA: "Words in ",
    headB: "Short",
    sub: `${shorts.length} clips from Osama Imseeh's YouTube channel — a lifetime of experience in under a minute.`,
    loadMore: "Load more",
    remaining: (n: number) => `${n} left`,
    channel: "Visit the channel on YouTube",
    watch: "Watch on YouTube",
    close: "Close",
    prev: "Previous",
    next: "Next",
    play: "Play",
    thousand: "K",
    million: "M",
    views: "views",
  },
} as const;

type Copy = (typeof COPY)["ar"] | (typeof COPY)["en"];

/** "1.4 ألف" / "1.4K" — keeps the badge narrow on small cards. */
const formatViews = (n: number, t: Copy, lang: "ar" | "en") => {
  const trim = (v: number) => v.toFixed(1).replace(/\.0$/, "");
  const sep = lang === "ar" ? " " : "";
  if (n >= 1_000_000) return `${trim(n / 1_000_000)}${sep}${t.million}`;
  if (n >= 1_000) return `${trim(n / 1_000)}${sep}${t.thousand}`;
  return String(n);
};

const ShortsSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<number | null>(null);

  const remaining = shorts.length - visible;

  const go = useCallback((dir: number) => {
    setActive((v) => {
      if (v === null) return v;
      const next = (v + dir + shorts.length) % shorts.length;
      // Keep the grid in sync so the card is on screen once the player closes.
      setVisible((n) => (next < n ? n : Math.min(shorts.length, next + PAGE_SIZE)));
      return next;
    });
  }, []);

  // Keyboard control + scroll lock while the player is open.
  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, go]);

  const openKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(idx);
    }
  };

  const current = active === null ? null : shorts[active];

  return (
    <section id="videos" className="py-32 teal-gradient-bg overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-24 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-start">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-4 justify-start">
            <Youtube className="w-5 h-5 text-primary" />
            <p className="text-primary text-xl md:text-2xl" style={arFont}>
              {t.tag}
            </p>
          </motion.div>

          <motion.h2 {...fadeInUp} transition={withDelay(0.1)} style={{ ...arFont, fontWeight: 700 }}>
            <span className="text-foreground text-5xl md:text-6xl lg:text-7xl">{t.headA}</span>
            <span className="text-primary text-5xl md:text-6xl lg:text-7xl">{t.headB}</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: quinticEase, delay: 0.2 }}
            className="w-20 h-px bg-primary/40 mt-8 mb-8 origin-right ltr:origin-left"
          />

          <motion.p
            {...fadeInUp}
            transition={withDelay(0.25)}
            className="text-foreground/70 text-lg md:text-xl leading-[2] max-w-2xl"
            style={arFont}
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Grid of vertical Shorts thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {shorts.slice(0, visible).map((short, i) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: quinticEase, delay: 0.06 * (i % 5) }}
              onClick={() => setActive(i)}
              onKeyDown={(e) => openKey(e, i)}
              role="button"
              tabIndex={0}
              aria-label={`${t.play}: ${short.title[lang]}`}
              className="group relative overflow-hidden rounded-xl border border-foreground/10 aspect-[9/16] cursor-pointer bg-background/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={`https://i.ytimg.com/vi/${short.id}/${short.thumb ?? "oardefault"}.jpg`}
                alt={short.title[lang]}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Legibility scrim for the caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

              {/* Play affordance */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm border border-foreground/20 text-primary opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <Play className="w-5 h-5 ms-0.5" fill="currentColor" />
                </span>
              </div>

              {short.views !== undefined && (
                <div
                  dir="ltr"
                  className="absolute top-2.5 end-2.5 rounded-full bg-background/70 backdrop-blur-sm px-2 py-0.5 text-foreground/80 text-[11px] tabular-nums"
                  style={arFont}
                >
                  {formatViews(short.views, t, lang)}
                </div>
              )}

              {/* Padding lives on the wrapper: a clamped element clips at its
                  padding box, which would leak a sliver of the next line. */}
              <div className="absolute bottom-0 inset-x-0 p-3">
                <p
                  className="text-foreground text-sm md:text-base leading-snug text-start"
                  // Set inline so the clamp survives regardless of utility ordering.
                  style={{
                    ...arFont,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                  }}
                >
                  {short.title[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paging + channel link */}
        <div className="mt-14 flex flex-col items-center gap-6">
          {remaining > 0 && (
            <button
              onClick={() => setVisible((n) => n + PAGE_SIZE)}
              className="rounded-full border border-primary/40 px-8 py-3 text-primary transition-all hover:bg-primary hover:text-background"
              style={arFont}
            >
              {t.loadMore}
              <span className="opacity-60 text-sm ms-2 tabular-nums">({t.remaining(remaining)})</span>
            </button>
          )}

          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/60 transition-colors hover:text-primary"
            style={arFont}
          >
            <Youtube className="w-4 h-4" />
            {t.channel}
          </a>
        </div>
      </div>

      {/* Player */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-background/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={current.title[lang]}
          >
            <button
              onClick={() => setActive(null)}
              aria-label={t.close}
              className="absolute top-5 right-5 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-foreground/10 text-foreground transition-all hover:bg-primary hover:text-background"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Side arrows only where there is room beside a 9:16 player;
                narrow screens get the control row under the video instead. */}
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label={t.prev}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-14 h-14 rounded-full bg-foreground/10 text-foreground transition-all hover:bg-primary hover:text-background"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label={t.next}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-14 h-14 rounded-full bg-foreground/10 text-foreground transition-all hover:bg-primary hover:text-background"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            <motion.div
              key={current.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: quinticEase }}
              onClick={(e) => e.stopPropagation()}
              className="my-auto flex flex-col items-center gap-4"
            >
              <div
                className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-foreground/10 bg-black"
                style={{ width: "min(92vw, calc(68vh * 9 / 16))" }}
              >
                {/* Only the open Short is embedded, so the page never loads 267 players. */}
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0&playsinline=1`}
                  title={current.title[lang]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <p
                className="max-w-[92vw] text-center text-foreground/80 text-base md:text-lg leading-snug"
                style={{ ...arFont, width: "min(92vw, calc(68vh * 9 / 16))" }}
              >
                {current.title[lang]}
              </p>

              <a
                href={`https://www.youtube.com/shorts/${current.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-foreground/50 transition-colors hover:text-primary"
                style={arFont}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t.watch}
              </a>

              {/* Kept LTR in both languages so the chevrons keep pointing the
                  way they move — same convention as the desktop side arrows. */}
              <div dir="ltr" className="flex items-center gap-4">
                <button
                  onClick={() => go(-1)}
                  aria-label={t.prev}
                  className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-foreground/10 text-foreground transition-all hover:bg-primary hover:text-background"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div
                  dir="ltr"
                  className="rounded-full bg-foreground/10 px-4 py-1.5 text-foreground/80 text-sm tabular-nums"
                  style={arFont}
                >
                  {(active ?? 0) + 1} / {shorts.length}
                </div>

                <button
                  onClick={() => go(1)}
                  aria-label={t.next}
                  className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-foreground/10 text-foreground transition-all hover:bg-primary hover:text-background"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShortsSection;
