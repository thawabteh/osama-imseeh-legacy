import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import galleryPortrait1 from "@/assets/gallery-portrait-1.jpg";
import galleryPortrait2 from "@/assets/gallery-portrait-2.jpg";
import galleryPortrait3 from "@/assets/gallery-portrait-3.jpg";
import galleryPortrait4 from "@/assets/gallery-portrait-4.jpg";
import galleryPortrait5 from "@/assets/gallery-portrait-5.jpg";
import galleryPortrait6 from "@/assets/gallery-portrait-6.jpg";
import galleryPortrait7 from "@/assets/gallery-portrait-7.jpg";
import galleryPortrait8 from "@/assets/gallery-portrait-8.jpg";
import galleryPortrait9 from "@/assets/gallery-portrait-9.jpg";
import galleryPortrait10 from "@/assets/gallery-portrait-10.jpg";

const images = [
  { src: galleryPortrait1, alt: "أسامة إمسيح في جلسة حوار", span: "md:col-span-2" },
  { src: galleryPortrait2, alt: "أسامة إمسيح بابتسامة أثناء حديث", span: "md:col-span-1" },
  { src: galleryPortrait3, alt: "أسامة إمسيح يشرح فكرة", span: "md:col-span-1" },
  { src: galleryPortrait4, alt: "أسامة إمسيح مع مسبحة سوداء", span: "md:col-span-2" },
  { src: galleryPortrait5, alt: "أسامة إمسيح يرتشف القهوة", span: "md:col-span-1" },
  { src: galleryPortrait6, alt: "لقطة جانبية لأسامة إمسيح", span: "md:col-span-1" },
  { src: galleryPortrait7, alt: "أسامة إمسيح في لحظة تفكير", span: "md:col-span-2" },
  { src: galleryPortrait8, alt: "أسامة إمسيح خلال اجتماع", span: "md:col-span-1" },
  { src: galleryPortrait9, alt: "أسامة إمسيح يتحدث بتركيز", span: "md:col-span-1" },
  { src: galleryPortrait10, alt: "أسامة إمسيح في لحظة عفوية", span: "md:col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          أرشيف بصري
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-2xl mb-16">
          تفاصيل من <span className="text-primary">رحلة مستمرة</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.figure
              key={img.alt}
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.08 * i }}
              className={`relative overflow-hidden rounded-[1.25rem] ${img.span}`}
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[300px] md:min-h-[360px] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent pointer-events-none" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
