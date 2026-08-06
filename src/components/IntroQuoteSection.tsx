import { motion } from "framer-motion";
import { quinticEase } from "@/lib/animations";
import { useLang } from "@/lib/i18n";

const COPY = {
  ar: {
    quote: "لكل منا دوره في هذه الحياة، وإذا عشنا لأنفسنا فقط، فإننا سنفقد هدفنا بالحياة",
    source: "شواخص على دروب الحياة",
  },
  en: {
    quote: "Each of us has a role in this life; and if we live for ourselves alone, we lose our purpose in it.",
    source: "Milestones on Life's Paths",
  },
} as const;

const IntroQuoteSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section className="py-32 md:py-40 teal-gradient-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: quinticEase }}
            className="block text-primary/70 text-[7rem] md:text-[9rem] leading-none select-none pointer-events-none"
            style={{ fontFamily: "'Lateef', serif" }}
            aria-hidden="true"
          >
            &#x201C;
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: quinticEase, delay: 0.15 }}
            className="text-foreground text-4xl md:text-6xl leading-[1.8] -mt-8"
            style={{ fontFamily: "'Lateef', serif" }}
          >
            {t.quote}
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: quinticEase, delay: 0.35 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <div className="w-12 h-px bg-primary" />
            <span
              className="text-primary text-xl md:text-2xl"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
            >
              {t.source}
            </span>
            <div className="w-12 h-px bg-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroQuoteSection;
