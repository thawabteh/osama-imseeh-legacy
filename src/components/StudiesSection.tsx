import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { Download, FileText, ScrollText } from "lucide-react";
import { studies } from "@/lib/studies-data";
import { useLang } from "@/lib/i18n";

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const COPY = {
  ar: {
    tag: "أوراق ودراسات",
    headA: "الدراسات ",
    headB: "والأوراق النقاشية",
    intro: "دراسات وأوراق نقاشية قدّمها أسامة كرم إمسيح للوزارات والجهات الحكومية، تتناول التشريع والسياسة الضريبية والتنمية الاقتصادية في الأردن.",
    docsLabel: "الوثائق",
    download: "تحميل",
  },
  en: {
    tag: "Papers & Studies",
    headA: "Studies ",
    headB: "& Discussion Papers",
    intro: "Studies and discussion papers presented by Osama Karam Imseeh to ministries and government bodies, covering legislation, tax policy, and economic development in Jordan.",
    docsLabel: "Documents",
    download: "Download",
  },
} as const;

const StudiesSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  if (studies.length === 0) return null;

  return (
    <section id="studies" className="py-32 teal-gradient-bg overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-start">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-4 justify-start">
            <ScrollText className="w-5 h-5 text-primary" />
            <p className="text-primary text-xl md:text-2xl" style={arFont}>
              {t.tag}
            </p>
          </motion.div>
          <motion.h2 {...fadeInUp} transition={withDelay(0.1)} style={{ ...arFont, fontWeight: 700 }}>
            <span className="text-foreground text-5xl md:text-6xl lg:text-7xl">{t.headA}</span>
            <span className="text-primary text-5xl md:text-6xl lg:text-7xl">{t.headB}</span>
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={withDelay(0.2)}
            className="text-foreground/55 text-lg md:text-xl mt-6 max-w-2xl me-auto leading-[2]"
            style={arFont}
          >
            {t.intro}
          </motion.p>
        </div>

        {/* Study cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {studies.map((study, i) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.12 * i }}
              className="group flex flex-col text-start rounded-2xl border border-foreground/10 bg-foreground/5 p-8 transition-all duration-500 hover:border-primary/30 hover:bg-foreground/8"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary text-base md:text-lg" style={arFont}>
                  {study.category[lang]}
                </span>
                {study.year && (
                  <span className="text-foreground/40 text-base md:text-lg ms-auto" style={arFont}>
                    {study.year}
                  </span>
                )}
              </div>

              <h3
                className="text-foreground text-2xl md:text-3xl leading-snug mb-4 transition-colors duration-300 group-hover:text-primary"
                style={{ ...arFont, fontWeight: 700 }}
              >
                {study.title[lang]}
              </h3>

              <div className="w-12 h-px bg-primary/30 mb-5 me-auto transition-all duration-500 group-hover:w-20 group-hover:bg-primary/60" />

              <p className="text-foreground/60 text-base md:text-lg leading-[1.9] flex-1" style={arFont}>
                {study.summary[lang]}
              </p>

              {study.docs && study.docs.length > 0 && (
                <div className="mt-7">
                  <p className="text-foreground/40 text-sm mb-3" style={arFont}>
                    {t.docsLabel}
                  </p>
                  <div className="space-y-2">
                    {study.docs.map((doc) => (
                      <div
                        key={doc.path}
                        className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 transition-colors duration-300 hover:border-primary/30 hover:bg-foreground/8"
                      >
                        <FileText className="w-4 h-4 text-primary shrink-0" />
                        <a
                          href={doc.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-foreground/75 text-sm md:text-base leading-snug transition-colors duration-300 hover:text-primary"
                          style={arFont}
                        >
                          {doc.label[lang]}
                        </a>
                        <a
                          href={doc.path}
                          download
                          className="shrink-0 text-foreground/45 transition-colors duration-300 hover:text-primary"
                          aria-label={`${t.download}: ${doc.label[lang]}`}
                          title={t.download}
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudiesSection;
