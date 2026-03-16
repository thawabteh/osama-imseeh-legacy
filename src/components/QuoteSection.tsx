import { motion } from "framer-motion";
import textureDark from "@/assets/texture-dark.jpg";

const QuoteSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Textured background */}
      <div className="absolute inset-0">
        <img src={textureDark} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold decorative line */}
            <div className="w-16 h-px gold-gradient mx-auto mb-12" />

            <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight italic mb-10">
              "True leadership is not measured by the power you accumulate, but by the 
              <span className="text-primary"> futures you enable.</span>"
            </blockquote>

            <p className="label-caps text-primary">Osama Imseeh</p>

            <div className="w-16 h-px gold-gradient mx-auto mt-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
