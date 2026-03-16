import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: quinticEase }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div
              className="relative w-[320px] md:w-[400px] lg:w-full max-w-[500px] aspect-[4/5] overflow-hidden"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <img
                src={heroPortrait}
                alt="Osama Imseeh portrait"
                className="w-full h-full object-cover grayscale"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 w-full h-px gold-gradient" />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <motion.p {...fadeInUp} transition={withDelay(0.2)} className="label-caps text-primary mb-6">
              Leadership · Vision · Legacy
            </motion.p>
            <motion.h1 {...fadeInUp} transition={withDelay(0.4)} className="section-heading text-foreground">
              The Architecture<br /><span className="text-primary">of Vision</span>
            </motion.h1>
            <motion.p {...fadeInUp} transition={withDelay(0.6)} className="text-muted-foreground text-lg max-w-md mb-10 leading-relaxed">
              Three decades of transformative leadership across twelve key sectors,
              shaping the future of Jordan's economic landscape.
            </motion.p>
            <motion.div {...fadeInUp} transition={withDelay(0.8)} className="flex gap-12">
              {[
                { value: "30+", label: "Years" },
                { value: "12", label: "Sectors" },
                { value: "1", label: "Legacy" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-4xl md:text-5xl text-primary">{stat.value}</p>
                  <p className="label-caps text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="label-caps text-muted-foreground text-[9px]">Scroll</span>
        <div className="w-px h-8 gold-gradient" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
