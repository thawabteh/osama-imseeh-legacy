import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import aboutPortrait1 from "@/assets/about-portrait-1.jpg";
import aboutPortrait2 from "@/assets/about-portrait-2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 gold-thread opacity-30 hidden lg:block" />

      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          سيرة ومسيرة
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-3xl">
          عن <span className="text-primary">أسامة</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-start">
          <motion.div {...fadeInUp} transition={withDelay(0.2)} className="space-y-8">
            <div className="overflow-hidden rounded-[1.75rem]" style={{ boxShadow: "var(--shadow-gold)" }}>
              <img
                src={aboutPortrait1}
                alt="أسامة إمسيح خلال حديث ملهم"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-muted-foreground text-2xl md:text-3xl leading-[2]">
              "النجاح ليس محطة نصل إليها، بل هو الأثر الذي نتركه خلفنا. من قلب عمان،
              انطلقت رحلتي في عالم الأعمال والريادة، مؤمناً بأن القيم هي المحرك الحقيقي
              لأي إنجاز. هذا الموقع هو مساحتي الشخصية لأشارككم تجارب صقلتها الأيام،
              ورؤى استشرف بها المستقبل."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: quinticEase }}
            className="space-y-8"
          >
            <div className="overflow-hidden rounded-[1.75rem]" style={{ boxShadow: "var(--shadow-gold)" }}>
              <img
                src={aboutPortrait2}
                alt="أسامة إمسيح في جلسة نقاش"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>

            {[
              { title: "الاستثمار الاستراتيجي", desc: "اكتشاف ورعاية الفرص التحويلية عبر قطاعات متنوعة." },
              { title: "الخدمة العامة", desc: "المساهمة في صياغة سياسات تعزز الأساس الاقتصادي للأردن." },
              { title: "التوجيه والإرشاد", desc: "تنمية الجيل القادم من القادة من خلال التوجيه المباشر والدعم." },
            ].map((item) => (
              <div key={item.title} className="card-surface p-8 rounded-2xl">
                <h3 className="font-serif text-4xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-2xl leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
