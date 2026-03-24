import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { Camera } from "lucide-react";
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

const images = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-32 overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-20 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-4">
            <Camera className="w-5 h-5 text-primary" />
            <p
              className="text-primary text-xl md:text-2xl"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
            >
              محطات بارزة
            </p>
          </motion.div>
          <motion.h2
            {...fadeInUp}
            transition={withDelay(0.1)}
            style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
          >
            <span className="text-foreground text-5xl md:text-6xl lg:text-7xl">حياة في </span>
            <span className="text-primary text-5xl md:text-6xl lg:text-7xl">خدمة الوطن</span>
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
                alt="أسامة إمسيح"
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
