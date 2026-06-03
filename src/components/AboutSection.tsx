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
    role: "كاتب ورائد أعمال",
    education: [
      "خريج كلية دي لاسال",
      "بكالوريوس إدارة الأعمال — بدأ دراسته في جامعة جنوب كاليفورنيا (USC) بالولايات المتحدة الأمريكية، وأكملها في الجامعة الأردنية (UJ)",
    ],
    quote:
      "النجاح ليس محطة نصل إليها، بل هو الأثر الذي نتركه خلفنا. من قلب عمان، انطلقت رحلتي في عالم الأعمال والريادة، مؤمناً بأن القيم هي المحرك الحقيقي لأي إنجاز. هذا الموقع هو مساحتي الشخصية لأشارككم تجارب صقلتها الأيام، ورؤى استشرف بها المستقبل",
    cards: [
      { title: "الاستثمار الاستراتيجي", desc: "اكتشاف ورعاية الفرص التحويلية عبر قطاعات متنوعة." },
      { title: "الخدمة العامة", desc: "المساهمة في صياغة سياسات تعزز الأساس الاقتصادي للأردن." },
      { title: "التوجيه والإرشاد", desc: "تنمية الجيل القادم من القادة من خلال التوجيه المباشر والدعم." },
    ],
  },
  en: {
    alt: "Osama Imseeh",
    kicker: "Biography & Journey",
    headTop: "About",
    headBottom: "Osama",
    name: "Osama Karam Imseeh",
    role: "Author & Entrepreneur",
    education: [
      "Graduate of De La Salle College",
      "Bachelor of Business Administration — began his studies at the University of Southern California (USC) in the USA and completed them at the University of Jordan (UJ)",
    ],
    quote:
      "Success is not a destination we reach, but the mark we leave behind. From the heart of Amman, my journey in business and entrepreneurship began, in the belief that values are the true engine of any achievement. This website is my personal space to share with you experiences shaped by time and a vision for the future.",
    cards: [
      { title: "Strategic Investment", desc: "Discovering and nurturing transformative opportunities across diverse sectors." },
      { title: "Public Service", desc: "Contributing to policies that strengthen Jordan's economic foundation." },
      { title: "Mentorship", desc: "Developing the next generation of leaders through direct guidance and support." },
    ],
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
          <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/40 to-background/20 ltr:bg-gradient-to-r" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-start">
            <div className="max-w-xl text-start">
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
                <p className="text-primary text-xl md:text-2xl mt-2" style={arFont}>{t.role}</p>

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

      {/* Circular cards section */}
      <section className="py-28 teal-gradient-bg overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            {t.cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: quinticEase, delay: 0.15 * i }}
                className="flex items-center gap-4 md:gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] flex items-center justify-center cursor-pointer group/circle"
                >
                  <div className="absolute inset-0 rounded-full border border-foreground/10 transition-colors duration-500 group-hover/circle:border-primary/30" />
                  <div className="absolute inset-3 md:inset-4 rounded-full border border-foreground/8 transition-colors duration-500 group-hover/circle:border-primary/20" />
                  <div className="absolute inset-6 md:inset-8 rounded-full bg-gradient-to-br from-foreground/8 to-foreground/3 transition-all duration-500 group-hover/circle:from-primary/15 group-hover/circle:to-primary/5" />
                  <div className="relative z-10 text-center px-10">
                    <h3 className="text-2xl md:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover/circle:text-primary" style={{ ...arFont, fontWeight: 700 }}>{card.title}</h3>
                    <p className="text-foreground/60 text-lg md:text-xl leading-relaxed transition-colors duration-300 group-hover/circle:text-foreground/80" style={arFont}>{card.desc}</p>
                  </div>
                </motion.div>

                {i < t.cards.length - 1 && (
                  <div className="hidden md:flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                    <div className="w-5 h-5 rounded-full bg-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
