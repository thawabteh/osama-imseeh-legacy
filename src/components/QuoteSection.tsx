import { motion } from "framer-motion";
import { quinticEase } from "@/lib/animations";
import textureDark from "@/assets/texture-dark.jpg";

const QuoteSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
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
            transition={{ duration: 0.6, ease: quinticEase }}
          >
            <div className="w-16 h-px gold-gradient mx-auto mb-12" />
            <blockquote className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-10">
              "القيادة الحقيقية لا تُقاس بالسلطة التي تجمعها،
              <span className="text-primary"> بل بالمستقبل الذي تصنعه.</span>"
            </blockquote>
            <p className="label-caps text-primary text-2xl">أسامة إمسيح</p>
            <div className="w-16 h-px gold-gradient mx-auto mt-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
