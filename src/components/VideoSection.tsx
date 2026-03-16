import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";

const VideoSection = () => {
  return (
    <section id="video" className="py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* النص */}
          <div>
            <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
              من الميدان
            </motion.p>
            <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-xl mb-8">
              رسائل <span className="text-primary">ملهمة</span>
            </motion.h2>
            <motion.p {...fadeInUp} transition={withDelay(0.2)} className="text-muted-foreground text-2xl md:text-3xl leading-relaxed max-w-lg mb-10">
              لحظات حقيقية من محاضرات ولقاءات أسامة إمسيح، حيث يشارك خبراته ورؤاه مع الأجيال القادمة.
            </motion.p>
            <motion.div {...fadeInUp} transition={withDelay(0.3)} className="flex gap-12">
              {[
                { value: "كن شغوفاً", label: "بالحياة" },
                { value: "إسمع", label: "لأستاذك" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-primary">{item.value}</p>
                  <p className="label-caps text-muted-foreground mt-1 text-xl">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* الفيديو ريل */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: quinticEase }}
            className="flex justify-center"
          >
            <div
              className="relative w-[300px] md:w-[360px] aspect-[9/16] overflow-hidden rounded-2xl"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src="/videos/imseeh-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 right-0 w-full h-px gold-gradient" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
