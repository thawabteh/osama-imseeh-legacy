import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import aboutBg from "@/assets/about-bg.png";

const cards = [
  { title: "الاستثمار الاستراتيجي", desc: "اكتشاف ورعاية الفرص التحويلية عبر قطاعات متنوعة." },
  { title: "الخدمة العامة", desc: "المساهمة في صياغة سياسات تعزز الأساس الاقتصادي للأردن." },
  { title: "التوجيه والإرشاد", desc: "تنمية الجيل القادم من القادة من خلال التوجيه المباشر والدعم." },
];

const AboutSection = () => {
  return (
    <>
      {/* About hero - full width background with text overlay */}
      <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutBg}
            alt="أسامة إمسيح"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-end">
            <div className="max-w-xl text-right">
              <motion.p
                {...fadeInUp}
                className="text-foreground/70 mb-4 text-2xl md:text-3xl"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
              >
                سيرة ومسيرة
              </motion.p>
              <motion.h2
                {...fadeInUp}
                transition={withDelay(0.15)}
                className="leading-tight mb-8"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
              >
                <span className="text-primary text-7xl md:text-9xl block leading-relaxed mx-0 my-0 px-0">عــــــــن أسامة</span>
              </motion.h2>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 flex flex-col items-end gap-2"
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
        {/* Large decorative quotes - top right */}
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

        {/* Large decorative quotes - bottom center-left */}
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
          <div className="max-w-3xl mr-0 ml-auto text-right">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase }}
            >
              <p className="text-foreground/90 text-2xl md:text-3xl lg:text-4xl leading-[2.2]" style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}>
                النجاح ليس محطة نصل إليها، بل هو الأثر الذي نتركه خلفنا. من قلب عمان،
                انطلقت رحلتي في عالم الأعمال والريادة، مؤمناً بأن القيم هي المحرك الحقيقي
                لأي إنجاز. هذا الموقع هو مساحتي الشخصية لأشارككم تجارب صقلتها الأيام،
                ورؤى استشرف بها المستقبل
              </p>
            </motion.div>
          </div>

          {/* Author info - bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: quinticEase, delay: 0.3 }}
            className="mt-24 text-right max-w-xs"
          >
            <p className="text-foreground text-3xl md:text-4xl" style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}>أسامة إمسيح</p>
            <p className="text-primary text-xl md:text-2xl mt-2" style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}>كاتب ورائد أعمال</p>
          </motion.div>
        </div>
      </section>

      {/* Circular cards section */}
      <section className="py-28 teal-gradient-bg overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: quinticEase, delay: 0.15 * i }}
                className="flex items-center gap-4 md:gap-6"
              >
                <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-foreground/10" />
                  <div className="absolute inset-3 md:inset-4 rounded-full border border-foreground/8" />
                  <div className="absolute inset-6 md:inset-8 rounded-full bg-gradient-to-br from-foreground/8 to-foreground/3" />
                  <div className="relative z-10 text-center px-10">
                    <h3 className="text-2xl md:text-3xl text-foreground mb-3" style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}>{card.title}</h3>
                    <p className="text-foreground/60 text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}>{card.desc}</p>
                  </div>
                </div>

                {i < cards.length - 1 && (
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
