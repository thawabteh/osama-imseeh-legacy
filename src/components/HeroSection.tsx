import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import heroBg from "@/assets/hero-bg.png";
import heroOverlay from "@/assets/hero-overlay.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Transparent overlay image of Osama */}
      <div className="absolute bottom-0 left-1/2 -translate-x-[60%] z-[5] pointer-events-none">
        <img
          src={heroOverlay}
          alt="أسامة إمسيح"
          className="h-[95vh] w-auto object-contain"
          loading="eager"
        />
      </div>

      {/* Content overlay - right side */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-end">
          <div className="max-w-xl text-right py-24">
            <motion.h1
              {...fadeInUp}
              transition={withDelay(0.2)}
              className="text-foreground mb-6"
              style={{ fontFamily: "'Lateef', serif", fontWeight: 700 }}
            >
              <span className="text-primary text-6xl md:text-8xl block leading-tight">إرثٌ من التميز</span>
              <span className="text-foreground text-5xl md:text-7xl block leading-tight">ورؤية للمستقبل</span>
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={withDelay(0.4)}
              className="text-muted-foreground text-2xl md:text-3xl max-w-lg mr-auto leading-relaxed"
            >
              محطات في القيادة، موروث الأصالة، ورؤى تجمع بين عراقة الماضي وطموح الغد.
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
        <span className="label-caps text-muted-foreground text-lg">تصفّح</span>
        <div className="w-px h-8 gold-gradient" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
