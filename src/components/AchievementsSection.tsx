import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { useLang } from "@/lib/i18n";

const COPY = {
  ar: {
    tag: "مسيرة حافلة",
    headA: "أبرز ",
    headB: "الإنجازات",
    businessTitle: "الاقتصاد والأعمال",
    communityTitle: "العمل المجتمعي",
    honorsTitle: "الأوسمة والتكريمات",
    business: [
      { title: "رئيس مجلس إدارة مجموعة امسيح", desc: "مجموعة إقليمية رائدة في تصنيع وتجارة وتنقية الذهب والألماس." },
      { title: "رئيس نقابة أصحاب محلات تجارة وصياغة الحلي والمجوهرات في الأردن", desc: "شغل المنصب من شباط 2008 حتى أيلول 2021." },
      { title: "نائب رئيس جمعية رجال الأعمال الأردنيين", desc: "يشغل حالياً منصب نائب رئيس جمعية رجال الأعمال الأردنيين." },
      { title: "عضو مجلس أمناء مؤسسة ولي العهد", desc: "عضو في مجلس أمناء مؤسسة ولي العهد." },
      { title: "عضو مجلس أمناء كينغز أكاديمي", desc: "عضو حالي في مجلس أمناء كينغز أكاديمي." },
      { title: "باحث اقتصادي", desc: "يتمتع بخبرة معمّقة في الأسواق المحلية والإقليمية والعالمية، لا سيما في مجالَي الذهب والعملات." },
      { title: "اللجنة الملكية لتنمية المحافظات", desc: "عضو سابق في اللجنة الملكية لتنمية المحافظات." },
    ],
    community: [
      { title: "مبادرة وقفة وطن", desc: "أطلق المبادرة عام 2012، وهدفت إلى تدريب وتأهيل الشباب في مختلف محافظات المملكة، وتوفير فرص عمل لهم من خلال شراكات مع القطاع الخاص." },
      { title: "اثنا عشر كتاباً", desc: "مؤلف وناشر لاثنا عشر كتاباً في التربية الأخلاقية والروحانية؛ كتابان منها — «شواخص على دروب الحياة» و«علمتني الحياة» — بهدف أن تجد هذه المؤلفات طريقها إلى المدارس، لتكون مساحةً للتأمل وبناء القيم." },
      { title: "مؤسسة إنجاز الأردن", desc: "نائب رئيس سابق وعضو مجلس إدارة في مؤسسة إنجاز الأردن (INJAZ Jordan)." },
      { title: "اللجنة الوطنية لشؤون المرأة", desc: "عضو سابق في اللجنة الوطنية لشؤون المرأة." },
      { title: "ميثاق أخلاقي لعالم أفضل", desc: "عضو سابق في المبادرة العالمية التي أطلقها سعادة الدكتور طالل أبو غزالة لجمع القيم الإسلامية والمسيحية في ميثاق موحّد." },
    ],
    honors: [
      { title: "وسام اليوبيل الفضي", desc: "حاصل على وسام اليوبيل الفضي الذي منحه جلالة الملك عبدالله الثاني ابن الحسين." },
      { title: "جائزة رجل الأعمال 2019", desc: "الحاصل على المركز الثاني في جائزة رجل الأعمال للعام 2019 (الأردن)." },
    ],
  },
  en: {
    tag: "A Distinguished Journey",
    headA: "Key ",
    headB: "Achievements",
    businessTitle: "Economy & Business",
    communityTitle: "Community Work",
    honorsTitle: "Honors & Recognition",
    business: [
      { title: "Chairman of the Imseeh Group", desc: "A leading regional group in the manufacturing, trading, and refining of gold and diamonds." },
      { title: "President of the Jordan Gold & Jewelry Syndicate", desc: "Held the position from February 2008 to September 2021." },
      { title: "Vice President of the Jordanian Businessmen Association", desc: "Currently serves as Vice President of the Jordanian Businessmen Association." },
      { title: "Trustee, Crown Prince Foundation", desc: "Member of the Board of Trustees of the Crown Prince Foundation." },
      { title: "Trustee, King's Academy", desc: "Currently a member of the Board of Trustees of King's Academy." },
      { title: "Economic Researcher", desc: "Holds deep expertise in local, regional, and global markets, particularly in gold and currencies." },
      { title: "Royal Committee for Governorate Development", desc: "Former member of the Royal Committee for the Development of the Governorates." },
    ],
    community: [
      { title: "Waqfet Watan Initiative", desc: "Launched in 2012 to train and qualify young people across the kingdom's governorates and provide them with jobs through private-sector partnerships." },
      { title: "Twelve Books", desc: "Author and publisher of twelve books on moral and spiritual education; two of them — 'Milestones on Life's Paths' and 'Life Taught Me' — written so these works may find their way into schools, as a space for reflection and for building values." },
      { title: "INJAZ Jordan", desc: "Former Vice Chairman and board member of INJAZ Jordan." },
      { title: "National Commission for Women's Affairs", desc: "Former member of the National Commission for Women's Affairs." },
      { title: "An Ethical Charter for a Better World", desc: "Former member of the global initiative launched by Dr. Talal Abu-Ghazaleh to unite Islamic and Christian values in a single charter." },
    ],
    honors: [
      { title: "Silver Jubilee Medal", desc: "Awarded the Silver Jubilee Medal by His Majesty King Abdullah II bin Al-Hussein." },
      { title: "Businessman Award 2019", desc: "Runner-up in the Businessman of the Year Award 2019 (Jordan)." },
    ],
  },
} as const;

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const AchievementCard = ({ title, desc, index }: { title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: quinticEase, delay: 0.1 * index }}
    className="group flex items-start gap-5 text-start"
  >
    <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
    <div className="flex-1">
      <h4
        className="text-foreground text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors duration-300"
        style={{ ...arFont, fontWeight: 700 }}
      >
        {title}
      </h4>
      <p className="text-foreground/55 text-lg leading-[1.9]" style={arFont}>
        {desc}
      </p>
    </div>
  </motion.div>
);

const ColumnHeader = ({ title, delay = 0 }: { title: string; delay?: number }) => (
  <motion.div {...fadeInUp} transition={withDelay(delay)} className="flex items-center gap-4 mb-12 justify-start">
    <div className="w-10 h-px bg-primary" />
    <h3 className="text-foreground/80 text-2xl md:text-3xl" style={{ ...arFont, fontWeight: 700 }}>
      {title}
    </h3>
  </motion.div>
);

const AchievementsSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <section id="achievements" className="py-32 teal-gradient-bg overflow-hidden relative">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-start mb-24">
          <motion.p {...fadeInUp} className="text-primary text-xl md:text-2xl mb-3" style={arFont}>
            {t.tag}
          </motion.p>
          <motion.h2 {...fadeInUp} transition={withDelay(0.1)} style={{ ...arFont, fontWeight: 700 }}>
            <span className="text-foreground text-5xl md:text-6xl lg:text-7xl">{t.headA}</span>
            <span className="text-primary text-5xl md:text-6xl lg:text-7xl">{t.headB}</span>
          </motion.h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <ColumnHeader title={t.businessTitle} />
            <div className="space-y-10">
              {t.business.map((item, i) => (
                <AchievementCard key={item.title} {...item} index={i} />
              ))}
            </div>
          </div>

          <div>
            <ColumnHeader title={t.communityTitle} delay={0.15} />
            <div className="space-y-10">
              {t.community.map((item, i) => (
                <AchievementCard key={item.title} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Honors & Recognition */}
        <div className="mt-24">
          <ColumnHeader title={t.honorsTitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.honors.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: quinticEase, delay: 0.15 * i }}
                className="group text-start rounded-2xl border border-foreground/10 bg-foreground/5 px-8 py-7 transition-all duration-500 hover:border-primary/30 hover:bg-foreground/8"
              >
                <div className="w-8 h-px bg-primary/50 mb-5 me-auto transition-all duration-500 group-hover:w-14 group-hover:bg-primary" />
                <h4
                  className="text-foreground text-xl md:text-2xl mb-3 transition-colors duration-300 group-hover:text-primary"
                  style={{ ...arFont, fontWeight: 700 }}
                >
                  {item.title}
                </h4>
                <p className="text-foreground/55 text-lg leading-[1.9]" style={arFont}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
