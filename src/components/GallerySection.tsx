import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import gp1 from "@/assets/gallery-portrait-1.jpg";
import gp2 from "@/assets/gallery-portrait-2.jpg";
import gp3 from "@/assets/gallery-portrait-3.jpg";
import gp4 from "@/assets/gallery-portrait-4.jpg";
import gp5 from "@/assets/gallery-portrait-5.jpg";
import gp6 from "@/assets/gallery-portrait-6.jpg";
import gp7 from "@/assets/gallery-portrait-7.jpg";
import gp8 from "@/assets/gallery-portrait-8.jpg";
import gp9 from "@/assets/gallery-portrait-9.jpg";
import gp10 from "@/assets/gallery-portrait-10.jpg";

const images = [
  { src: gp1, span: "md:col-span-1 md:row-span-2" },
  { src: gp2, span: "md:col-span-1 md:row-span-1" },
  { src: gp3, span: "md:col-span-1 md:row-span-1" },
  { src: gp4, span: "md:col-span-2 md:row-span-1" },
  { src: gp5, span: "md:col-span-1 md:row-span-2" },
  { src: gp6, span: "md:col-span-1 md:row-span-1" },
  { src: gp7, span: "md:col-span-1 md:row-span-1" },
  { src: gp8, span: "md:col-span-1 md:row-span-1" },
  { src: gp9, span: "md:col-span-1 md:row-span-2" },
  { src: gp10, span: "md:col-span-2 md:row-span-1" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-32 teal-gradient-bg">
      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4 text-3xl">
          محطات بارزة
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-2xl mb-16">
          حياة في <span className="text-primary">خدمة الوطن</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.08 * (i % 5) }}
              className={`overflow-hidden rounded-[1rem] ${img.span}`}
              style={{ boxShadow: "var(--shadow-teal)" }}
            >
              <img
                src={img.src}
                alt="أسامة إمسيح"
                className="w-full h-full object-cover min-h-[200px] md:min-h-[280px] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
