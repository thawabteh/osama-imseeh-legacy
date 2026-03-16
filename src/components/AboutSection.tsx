import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";
import heroPortrait from "@/assets/hero-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      {/* صورة خلفية */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-background/80" />
      </div>
      <div className="absolute left-1/2 top-0 bottom-0 gold-thread opacity-30 hidden lg:block" />

      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          سيرة ومسيرة
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-3xl">
          عن <span className="text-primary">أسامة</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <motion.div {...fadeInUp} transition={withDelay(0.2)}>
            <p className="text-muted-foreground text-2xl md:text-3xl leading-[2] mb-8">
              "النجاح ليس محطة نصل إليها، بل هو الأثر الذي نتركه خلفنا. من قلب عمان، 
              انطلقت رحلتي في عالم الأعمال والريادة، مؤمناً بأن القيم هي المحرك الحقيقي 
              لأي إنجاز. هذا الموقع هو مساحتي الشخصية لأشارككم تجارب صقلتها الأيام، 
              ورؤى استشرف بها المستقبل."
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={withDelay(0.3)} className="space-y-8">
            {[
              { title: "الاستثمار الاستراتيجي", desc: "اكتشاف ورعاية الفرص التحويلية عبر قطاعات متنوعة." },
              { title: "الخدمة العامة", desc: "المساهمة في صياغة سياسات تعزز الأساس الاقتصادي للأردن." },
              { title: "التوجيه والإرشاد", desc: "تنمية الجيل القادم من القادة من خلال التوجيه المباشر والدعم." },
            ].map((item) => (
              <div key={item.title} className="card-surface p-8">
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
