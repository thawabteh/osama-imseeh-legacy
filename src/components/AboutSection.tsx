import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { useLang } from "@/lib/i18n";
import aboutBg from "@/assets/photo-about-bg.jpg";
import aboutPortrait from "@/assets/photo-about-portrait.jpg";

const COPY = {
  ar: {
    alt: "أسامة إمسيح",
    kicker: "سيرة ومسيرة",
    headTop: "عــــــــن",
    headBottom: "أسامة",
    name: "أسامة كرم امسيح",
    education: [
      "خريج كلية دي لاسال",
      "بكالوريوس إدارة الأعمال — بدأ دراسته في جامعة جنوب كاليفورنيا (USC) بالولايات المتحدة الأمريكية، وأكملها في الجامعة الأردنية (UJ)",
    ],
    quote:
      "من تجارب الحياة وخبراتها، ومن محطاتها الصعبة والجميلة، بدأت رحلة صقلتها الأيام بالصبر والعمل والعطاء. فالحياة منجم، لا تُستخرج معادنه إلا بالصبر والعمل، وكل محطة فيها تحمل درساً، وكل إنجاز يترك أثراً. هنا أشارككم بعضاً من محطات رحلتي، وما حملته من لحظات قريبة إلى القلب، وتجارب صنعتني، وما تركته هذه الرحلة من أثر ومعانٍ أضعها بين أيديكم.",
  },
  en: {
    alt: "Osama Imseeh",
    kicker: "Biography & Journey",
    headTop: "About",
    headBottom: "Osama",
    name: "Osama Karam Imseeh",
    education: [
      "Graduate of De La Salle College",
      "Bachelor of Business Administration — began his studies at the University of Southern California (USC) in the USA and completed them at the University of Jordan (UJ)",
    ],
    quote:
      "From life's experiences — its hard stations and its beautiful ones — began a journey shaped by patience, work, and giving. Life is a mine whose metals are drawn out only through patience and labour: every station carries a lesson, and every achievement leaves a mark. Here I share some of the stations of my journey, the moments closest to my heart, the experiences that made me, and the meaning this road has left behind — which I now place in your hands.",
  },
} as const;

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const AboutSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <>
      {/* About hero - full width background with text overlay */}
      <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutBg}
            alt={t.alt}
            className="w-full h-full object-cover object-[center_30%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/40 to-background/20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-start ltr:justify-end">
            <div className="max-w-xl text-start ltr:text-end">
              <motion.p
                {...fadeInUp}
                className="text-foreground/70 mb-4 text-2xl md:text-3xl"
                style={arFont}
              >
                {t.kicker}
              </motion.p>
              <motion.h2
                {...fadeInUp}
                transition={withDelay(0.15)}
                className="leading-tight mb-8"
                style={{ ...arFont, fontWeight: 700 }}
              >
                <span className="text-primary text-7xl md:text-9xl inline-flex flex-col items-start leading-none mx-0 my-0 px-0">
                  <span>{t.headTop}</span>
                  <span className="mt-6 md:mt-8">{t.headBottom}</span>
                </span>
              </motion.h2>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 flex flex-col items-start gap-2"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-px h-10 gold-gradient"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / bio text */}
      <section className="relative py-32 teal-gradient-bg overflow-hidden">
        {/* Large decorative quotes - top */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: quinticEase }}
          className="absolute top-6 right-8 text-primary/40 text-[12rem] md:text-[16rem] leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Lateef', serif" }}
        >
          &#x201D;
        </motion.span>

        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: quinticEase, delay: 0.2 }}
          className="absolute bottom-16 left-[30%] text-primary/25 text-[10rem] md:text-[14rem] leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Lateef', serif" }}
        >
          &#x201C;
        </motion.span>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Quote text - reading-start side */}
            <div className="max-w-3xl text-start order-1">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: quinticEase }}
              >
                <p
                  className="text-foreground/90 text-2xl md:text-3xl lg:text-4xl"
                  style={{ ...arFont, lineHeight: "2.2" }}
                >
                  {t.quote}
                </p>
              </motion.div>
            </div>

            {/* Portrait image - reading-end side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: quinticEase }}
              className="order-2"
            >
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <img
                  src={aboutPortrait}
                  alt={t.alt}
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="absolute -inset-3 rounded-2xl border border-primary/20 -z-10" />
              </div>

              {/* Author info - below image */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: quinticEase, delay: 0.3 }}
                className="mt-8 text-center lg:text-start max-w-sm mx-auto lg:mx-0"
              >
                <p className="text-foreground text-3xl md:text-4xl" style={arFont}>{t.name}</p>

                {/* Education */}
                <div className="mt-8 space-y-3">
                  {t.education.map((edu) => (
                    <div key={edu} className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground/65 text-base md:text-lg" style={arFont}>
                        {edu}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
