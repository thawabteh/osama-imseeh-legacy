import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video" className="py-32 teal-gradient-bg overflow-hidden relative">
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary/3 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content - right side */}
          <div className="order-2 lg:order-2 text-right">
            <motion.p
              {...fadeInUp}
              className="text-primary mb-3 text-xl md:text-2xl tracking-wide"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
            >
              أسامة إمسيح
            </motion.p>

            <motion.h2
              {...fadeInUp}
              transition={withDelay(0.1)}
              className="mb-8"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
            >
              <span className="text-foreground text-6xl md:text-7xl lg:text-8xl">من </span>
              <span className="text-primary text-6xl md:text-7xl lg:text-8xl">القلب</span>
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.2 }}
              className="w-20 h-px bg-primary/40 mb-8 origin-right"
            />

            <motion.p
              {...fadeInUp}
              transition={withDelay(0.2)}
              className="text-foreground/70 text-xl md:text-2xl leading-[2] max-w-lg mb-12"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
            >
              كلمات صادقة ولحظات عفوية تعكس شغف أسامة إمسيح بصناعة الأثر وإلهام من حوله.
            </motion.p>

            <motion.div {...fadeInUp} transition={withDelay(0.3)} className="flex gap-16">
              {[
                { value: "أثر", label: "يدوم" },
                { value: "شغف", label: "لا ينطفئ" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="text-center group cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p
                    className="text-primary text-3xl md:text-4xl mb-1 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
                    style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="text-foreground/50 text-lg"
                    style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Video - right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: quinticEase }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Glow behind video */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div
                className="relative w-[280px] md:w-[340px] aspect-[9/16] overflow-hidden rounded-2xl border border-foreground/10"
                style={{ boxShadow: "var(--shadow-teal)" }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/imseeh-video.mp4" type="video/mp4" />
                </video>
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 left-4 z-10 bg-background/70 backdrop-blur-sm border border-foreground/20 rounded-full p-2.5 text-primary transition-all hover:bg-background/90 hover:scale-110"
                  aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
