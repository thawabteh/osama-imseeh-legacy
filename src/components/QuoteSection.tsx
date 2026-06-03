import { motion } from "framer-motion";
import { quinticEase } from "@/lib/animations";
import { useLang } from "@/lib/i18n";
import quoteBg from "@/assets/photo-quote-bg.jpg";

const COPY = {
  ar: {
    lineA: "القيادة الحقيقية لا تُقاس بالسلطة التي تجمعها،",
    lineB: "بل بالمستقبل الذي تصنعه",
  },
  en: {
    lineA: "True leadership is not measured by the power you gather,",
    lineB: "but by the future you create.",
  },
} as const;

const QuoteSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <section className="relative py-32 teal-gradient-bg overflow-hidden">
      {/* Background portrait */}
      <div className="absolute inset-0">
        <img
          src={quoteBg}
          alt="أسامة إمسيح"
          className="w-full h-full object-cover object-[center_20%] opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
              {t.lineA}
              <br />
              {t.lineB}
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
