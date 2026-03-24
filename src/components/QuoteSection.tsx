import { motion } from "framer-motion";
import { quinticEase } from "@/lib/animations";

const QuoteSection = () => {
  return (
    <section className="py-32 teal-gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: quinticEase }}
          >
            {/* Top decorative line + quote mark */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-24 h-px bg-primary" />
              <span className="text-primary text-5xl" style={{ fontFamily: "'Lateef', serif" }}>&#x201C;</span>
              <div className="w-24 h-px bg-primary" />
            </div>

            <blockquote
              className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.8] mb-12"
              style={{ fontFamily: "'Lateef', serif" }}
            >
              القيادة الحقيقية لا تُقاس بالسلطة التي تجمعها،
              <br />
              بل بالمستقبل الذي تصنعه
            </blockquote>

            {/* Bottom decorative line + quote mark */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-24 h-px bg-primary" />
              <span className="text-primary text-5xl" style={{ fontFamily: "'Lateef', serif" }}>&#x201D;</span>
              <div className="w-24 h-px bg-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
