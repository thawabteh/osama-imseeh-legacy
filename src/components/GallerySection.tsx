import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { Camera } from "lucide-react";
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

const images = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10];

const COPY = {
  ar: { tag: "محطات بارزة", headA: "حياة في ", headB: "خدمة الوطن", alt: "أسامة إمسيح" },
  en: { tag: "Highlights", headA: "A Life in ", headB: "Service of the Nation", alt: "Osama Imseeh" },
} as const;

const GallerySection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
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

        {/* Gallery grid - uniform, aligned */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: quinticEase, delay: 0.08 * (i % 4) }}
              className="group relative overflow-hidden rounded-xl border border-foreground/10 aspect-[3/4]"
            >
              <img
                src={src}
                alt={t.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
