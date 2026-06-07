import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";
import { useLang } from "@/lib/i18n";
import heroBg from "@/assets/photo-hero.jpg";

const COPY = {
  ar: {
    titleTop: "إرثٌ من التميز",
    titleBottom: "ورؤية للمستقبل",
    sub: "محطات في القيادة، موروث الأصالة، ورؤى تجمع بين عراقة الماضي وطموح الغد.",
    scroll: "تصفّح",
  },
  en: {
    titleTop: "A Legacy of Excellence",
    titleBottom: "A Vision for the Future",
    sub: "Milestones in leadership, a heritage of authenticity, and a vision that unites the richness of the past with the ambition of tomorrow.",
    scroll: "Scroll",
  },
} as const;

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const HeroSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="أسامة إمسيح"
          className="w-full h-full object-cover object-[center_25%] scale-[1.12] translate-x-[6%] rtl:-translate-x-[6%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/50 to-transparent ltr:bg-gradient-to-r" />
      </div>

      {/* Content overlay - reading-start side */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-start">
          <div className="max-w-xl text-start py-24">
            <motion.h1
              {...fadeInUp}
              transition={withDelay(0.2)}
              className="text-foreground mb-6"
              style={{ ...arFont, fontWeight: 400 }}
            >
              <span className="text-primary text-5xl md:text-7xl block leading-relaxed">{t.titleTop}</span>
              <span className="text-foreground text-4xl md:text-6xl block leading-relaxed mt-2">{t.titleBottom}</span>
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={withDelay(0.4)}
              className="text-muted-foreground text-lg md:text-2xl max-w-lg me-auto leading-[2]"
              style={arFont}
            >
              {t.sub}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="label-caps text-muted-foreground text-lg">{t.scroll}</span>
        <div className="w-px h-8 gold-gradient" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
