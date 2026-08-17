import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Youtube, X } from "lucide-react";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { useLang } from "@/lib/i18n";
import { videos, type VideoItem } from "@/lib/videos-data";

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const COPY = {
  ar: {
    tag: "فيديو",
    headA: "شاهد ",
    headB: "أحدث المقاطع",
    intro: "مجموعة من أحدث مقاطع أسامة إمسيح القصيرة على يوتيوب — اضغط على أي مقطع لمشاهدته.",
    play: "تشغيل الفيديو",
    close: "إغلاق",
  },
  en: {
    tag: "Videos",
    headA: "Watch ",
    headB: "Latest Shorts",
    intro: "A selection of Osama Imseeh's latest YouTube shorts — tap any clip to watch it.",
    play: "Play video",
    close: "Close",
  },
} as const;

// Original-aspect-ratio thumbnail (vertical for Shorts). Falls back to hqdefault on error.
const thumbUrl = (id: string) => `https://i.ytimg.com/vi/${id}/oardefault.jpg`;
const thumbFallback = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const VideosSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  const [active, setActive] = useState<VideoItem | null>(null);

  if (videos.length === 0) return null;

  return (
    <section id="videos" className="py-32 teal-gradient-bg overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-start">
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
          <motion.p
            {...fadeInUp}
            transition={withDelay(0.2)}
            className="text-foreground/55 text-lg md:text-xl mt-6 max-w-2xl me-auto leading-[2]"
            style={arFont}
          >
            {t.intro}
          </motion.p>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {videos.map((video, i) => (
            <motion.button
              key={video.id}
              type="button"
              onClick={() => setActive(video)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.08 * i }}
              className="group flex flex-col text-start rounded-2xl border border-foreground/10 bg-foreground/5 p-3 transition-all duration-500 hover:border-primary/30 hover:bg-foreground/8"
              aria-label={`${t.play}: ${video.title[lang]}`}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-xl aspect-[9/16] border border-foreground/10">
                <img
                  src={thumbUrl(video.id)}
                  alt={video.title[lang]}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = "1";
                      img.src = thumbFallback(video.id);
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-background shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 translate-x-0.5" fill="currentColor" />
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-foreground/80 text-base md:text-lg leading-snug mt-4 mb-1 transition-colors duration-300 group-hover:text-primary line-clamp-2"
                style={{ ...arFont, fontWeight: 700 }}
              >
                {video.title[lang]}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal with embedded YouTube video */}
      <VideoModal
        video={active}
        lang={lang}
        closeLabel={t.close}
        onClose={() => setActive(null)}
      />
    </section>
  );
};

/** Accessible modal that embeds the selected YouTube video in an iframe. */
const VideoModal = ({
  video,
  lang,
  closeLabel,
  onClose,
}: {
  video: VideoItem | null;
  lang: "ar" | "en";
  closeLabel: string;
  onClose: () => void;
}) => {
  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={video.title[lang]}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: quinticEase }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[min(420px,92vw)]"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute -top-12 end-0 flex items-center justify-center w-11 h-11 rounded-full bg-background/70 backdrop-blur-sm border border-foreground/20 text-primary transition-all hover:bg-primary hover:text-background hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative w-full aspect-[9/16] max-h-[82vh] overflow-hidden rounded-2xl border border-foreground/10 bg-black"
              style={{ boxShadow: "var(--shadow-teal)" }}
            >
              <iframe
                key={video.id}
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
                title={video.title[lang]}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideosSection;
