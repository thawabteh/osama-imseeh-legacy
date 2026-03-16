import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: quinticEase }}
            className="relative order-2 lg:order-2 flex justify-center"
          >
            <div
              className="relative w-[320px] md:w-[400px] lg:w-full max-w-[500px] aspect-[4/5] overflow-hidden"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <img
                src={heroPortrait}
                alt="صورة أسامة إمسيح"
                className="w-full h-full object-cover grayscale"
                loading="eager"
              />
              <div className="absolute bottom-0 right-0 w-full h-px gold-gradient" />
            </div>
          </motion.div>

          {/* النص */}
          <div className="order-1 lg:order-1 flex flex-col justify-center">
            <motion.p {...fadeInUp} transition={withDelay(0.2)} className="label-caps text-primary mb-6">
              قيادة · رؤية · إرث
            </motion.p>
            <motion.h1 {...fadeInUp} transition={withDelay(0.4)} className="section-heading text-foreground">
              أسامة إمسيح: إرثٌ من التميز
              <br /><span className="text-primary">ورؤية للمستقبل</span>
            </motion.h1>
            <motion.p {...fadeInUp} transition={withDelay(0.6)} className="text-muted-foreground text-2xl md:text-3xl max-w-lg mb-10 leading-relaxed">
              محطات في القيادة، موروث الأصالة، ورؤى تجمع بين عراقة الماضي وطموح الغد.
            </motion.p>
            <motion.div {...fadeInUp} transition={withDelay(0.8)} className="flex gap-12">
              {[
                { value: "+30", label: "عاماً" },
                { value: "12", label: "قطاعاً" },
                { value: "1", label: "إرث" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-5xl md:text-6xl text-primary">{stat.value}</p>
                  <p className="label-caps text-muted-foreground mt-1 text-xl">{stat.label}</p>
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
        <span className="label-caps text-muted-foreground text-lg">تصفّح</span>
        <div className="w-px h-8 gold-gradient" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
