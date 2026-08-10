import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import gp1 from "@/assets/photo-gallery-01.jpg";
import gp2 from "@/assets/photo-gallery-02.jpg";
import gp3 from "@/assets/photo-gallery-03.jpg";
import gp4 from "@/assets/photo-gallery-04.jpg";
import gp5 from "@/assets/photo-gallery-05.jpg";
import gp6 from "@/assets/photo-gallery-06.jpg";
import gp7 from "@/assets/photo-gallery-07.jpg";
import gp8 from "@/assets/photo-gallery-08.jpg";
import gp9 from "@/assets/photo-gallery-09.jpg";
import gp10 from "@/assets/photo-gallery-10.jpg";
import gp11 from "@/assets/photo-gallery-11.jpg";
import gp12 from "@/assets/photo-gallery-12.jpg";
import gp13 from "@/assets/photo-gallery-13.jpg";
import gp14 from "@/assets/photo-gallery-14.jpg";
import gp15 from "@/assets/photo-gallery-15.jpg";
import gp16 from "@/assets/photo-gallery-16.jpg";
import gp17 from "@/assets/photo-gallery-17.jpg";
import gp18 from "@/assets/photo-gallery-18.jpg";
import gp19 from "@/assets/photo-gallery-19.jpg";
import gp20 from "@/assets/photo-gallery-20.jpg";
import hlHonor from "@/assets/highlight-royal-honor.jpg";
import hlLecture from "@/assets/highlight-lecture.jpg";
import hlStudentsTalk from "@/assets/highlight-students-talk.jpg";
import hlUniversitySession from "@/assets/highlight-university-session.jpg";

// The milestone photos shown large in the Featured Highlights row.
const featuredImages = [hlHonor, hlLecture];

// Studio portraits ordered so neighbouring photos look distinct, followed
// by the remaining event photos.
const images = [
  gp1, gp2, gp3, gp6, gp4, gp8, gp5, gp12, gp11, gp7,
  gp10, gp17, gp9, gp14, gp15, gp16, gp18, gp13, gp19, gp20,
  hlStudentsTalk, hlUniversitySession,
];

// Every image, in display order, for the click-to-expand lightbox.
const allImages = [...featuredImages, ...images];

// Custom crop focal point for wide shots that would otherwise be cropped
// off-subject in the portrait grid cells.
const imagePosition: Record<string, string> = {
  [hlUniversitySession]: "object-left",
};

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const COPY = {
  ar: {
    tag: "محطات بارزة",
    headA: "حياة في ",
    headB: "خدمة الوطن",
    alt: "أسامة إمسيح",
    featured: ["وسام اليوبيل الفضي من جلالة الملك عبد الله الثاني", "محاضرة لطلبة الجامعة"],
    close: "إغلاق",
    prev: "السابق",
    next: "التالي",
  },
  en: {
    tag: "Highlights",
    headA: "A Life in ",
    headB: "Service of the Nation",
    alt: "Osama Imseeh",
    featured: ["The Silver Jubilee Medal — from H.M. King Abdullah II", "A University Lecture"],
    close: "Close",
    prev: "Previous",
    next: "Next",
  },
} as const;

const GallerySection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  const [lightbox, setLightbox] = useState<number | null>(null);

  const go = (dir: number) =>
    setLightbox((v) => (v === null ? v : (v + dir + allImages.length) % allImages.length));

  // Keyboard control + scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  const openKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setLightbox(idx);
    }
  };

  return (
    <section id="gallery" className="py-32 teal-gradient-bg overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-20 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-start">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-4 justify-start">
            <Camera className="w-5 h-5 text-primary" />
            <p
              className="text-primary text-xl md:text-2xl"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
            >
              {t.tag}
            </p>
          </motion.div>
          <motion.h2
            {...fadeInUp}
            transition={withDelay(0.1)}
            style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
          >
            <span className="text-foreground text-5xl md:text-6xl lg:text-7xl">{t.headA}</span>
            <span className="text-primary text-5xl md:text-6xl lg:text-7xl">{t.headB}</span>
          </motion.h2>
        </div>

        {/* Featured highlights - important moments shown large and uncropped */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {featuredImages.map((src, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.1 * i }}
              onClick={() => setLightbox(i)}
              onKeyDown={(e) => openKey(e, i)}
              role="button"
              tabIndex={0}
              aria-label={t.featured[i]}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 aspect-[3/2] cursor-pointer"
            >
              <img
                src={src}
                alt={t.featured[i]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />
              <figcaption
                className="absolute bottom-0 inset-x-0 p-5 text-foreground text-lg md:text-xl text-start"
                style={{ ...arFont, fontWeight: 700 }}
              >
                {t.featured[i]}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Gallery grid - uniform, aligned */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: quinticEase, delay: 0.08 * (i % 4) }}
              onClick={() => setLightbox(featuredImages.length + i)}
              onKeyDown={(e) => openKey(e, featuredImages.length + i)}
              role="button"
              tabIndex={0}
              aria-label={t.alt}
              className="group relative overflow-hidden rounded-xl border border-foreground/10 aspect-[3/4] cursor-pointer"
            >
              <img
                src={src}
                alt={t.alt}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imagePosition[src] ?? ""}`}
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label={t.close}
              className="absolute top-5 right-5 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-foreground/10 text-foreground transition-all hover:bg-primary hover:text-background"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label={t.prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-foreground/10 text-foreground transition-all hover:bg-primary hover:text-background"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label={t.next}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-foreground/10 text-foreground transition-all hover:bg-primary hover:text-background"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            <motion.img
              key={lightbox}
              src={allImages[lightbox]}
              alt={t.alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: quinticEase }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
            />

            <div
              dir="ltr"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 rounded-full bg-foreground/10 px-4 py-1.5 text-foreground/80 text-sm tabular-nums"
              style={arFont}
            >
              {lightbox + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
