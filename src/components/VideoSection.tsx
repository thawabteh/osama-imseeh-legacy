import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";

const VideoSection = () => {
  return (
    <section id="video" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          مشاهدة
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-2xl mb-16">
          لحظات <span className="text-primary">ملهمة</span>
        </motion.h2>

        <motion.div {...fadeInUp} transition={withDelay(0.2)} className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden aspect-video"
            style={{ boxShadow: "var(--shadow-gold)" }}
          >
            <video
              controls
              preload="metadata"
              className="w-full h-full object-cover"
              poster=""
            >
              <source src="/videos/imseeh-video.mp4" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
