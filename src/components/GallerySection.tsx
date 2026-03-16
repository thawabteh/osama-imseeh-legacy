import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const fadeInUp = {
  initial: { opacity: 0, scale: 1.05 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const images = [
  { src: gallery1, alt: "Amman cityscape at golden hour", span: "md:col-span-2 md:row-span-1" },
  { src: gallery2, alt: "Executive boardroom", span: "md:col-span-1 md:row-span-2" },
  { src: gallery3, alt: "Formal business event", span: "md:col-span-2 md:row-span-1" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="label-caps text-primary mb-4"
        >
          Milestones
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="section-heading text-foreground max-w-2xl mb-16"
        >
          A Life in <span className="text-primary">Service</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.15 * i }}
              className={`overflow-hidden ${img.span}`}
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[250px] md:min-h-[300px] hover:scale-105 transition-transform duration-700"
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
