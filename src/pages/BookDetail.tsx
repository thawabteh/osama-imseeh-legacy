import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { books } from "@/lib/books-data";
import { useLang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/lib/use-document-title";

const COPY = {
  ar: {
    back: "العودة للمكتبة",
    by: "تأليف:",
    introTitle: "المقدّمة",
    authorIntroTitle: "مقدّمة الكاتب",
    readOnline: "اقرأ الكتاب أونلاين",
    downloadPdf: "تحميل PDF",
    notFound: "الكتاب غير موجود",
    arabicNote: "",
  },
  en: {
    back: "Back to library",
    by: "By:",
    introTitle: "Introduction",
    authorIntroTitle: "Author's Note",
    readOnline: "Read online",
    downloadPdf: "Download PDF",
    notFound: "Book not found",
    arabicNote: "This book is written in Arabic; the original Arabic text is shown below.",
  },
} as const;

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

const BookDetail = () => {
  const { slug } = useParams();
  const { lang } = useLang();
  const t = COPY[lang];
  const book = books.find((b) => b.slug === slug);
  useDocumentTitle(book ? book.title[lang] : t.notFound);

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground text-2xl" style={arFont}>
          {t.notFound}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with book cover */}
      <section className="relative pt-32 pb-20 teal-gradient-bg overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Back link */}
          <motion.div {...fadeInUp}>
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-primary mb-12 hover:gap-4 transition-all duration-300"
              style={{ ...arFont, fontWeight: 700 }}
            >
              <ArrowRight className="w-5 h-5 ltr:rotate-180" />
              <span className="text-lg">{t.back}</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Book info */}
            <div className="text-start order-2 lg:order-1">
              <motion.span {...fadeInUp} className="text-primary text-lg md:text-xl block mb-4" style={arFont}>
                {book.category[lang]}
              </motion.span>

              <motion.h1
                {...fadeInUp}
                transition={withDelay(0.1)}
                className="text-foreground text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ ...arFont, fontWeight: 700 }}
              >
                {book.title[lang]}
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: quinticEase, delay: 0.3 }}
                className="w-20 h-px bg-primary/40 mb-8 origin-right ltr:origin-left me-auto"
              />

              <motion.p
                {...fadeInUp}
                transition={withDelay(0.2)}
                className="text-foreground/60 text-xl md:text-2xl leading-[2]"
                style={arFont}
              >
                {book.excerpt[lang]}
              </motion.p>

              <motion.p {...fadeInUp} transition={withDelay(0.3)} className="text-foreground/40 text-lg mt-6" style={arFont}>
                {t.by} {book.author[lang]}
              </motion.p>

              {book.pdf && (
                <motion.div {...fadeInUp} transition={withDelay(0.4)} className="flex flex-wrap items-center gap-4 mt-10 justify-start">
                  <Link
                    to={`/read/${book.slug}`}
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-background transition-all duration-300 hover:gap-4 hover:shadow-lg hover:shadow-primary/30"
                    style={{ ...arFont, fontWeight: 700 }}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="text-lg">{t.readOnline}</span>
                  </Link>
                  <a
                    href={book.pdf}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-4 text-foreground/70 transition-all duration-300 hover:border-primary/40 hover:text-primary"
                    style={{ ...arFont, fontWeight: 700 }}
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-lg">{t.downloadPdf}</span>
                  </a>
                </motion.div>
              )}
            </div>

            {/* Book cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: quinticEase }}
              className="order-1 lg:order-2"
            >
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <img src={book.cover} alt={book.title[lang]} className="w-full rounded-2xl shadow-2xl object-cover" />
                <div className="absolute -inset-3 rounded-2xl border border-primary/20 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Arabic-content note (English only) */}
      {lang === "en" && book.arabicContent && (book.introduction || book.authorIntro) && (
        <div className="container mx-auto px-6">
          <p className="max-w-4xl me-auto text-start text-foreground/45 text-base italic border-s-2 border-primary/30 ps-4 py-2">
            {t.arabicNote}
          </p>
        </div>
      )}

      {/* Introduction */}
      {book.introduction && (
        <section className="py-24 teal-gradient-bg">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl me-auto text-start" dir="rtl">
              <motion.h2 {...fadeInUp} className="text-primary text-3xl md:text-4xl mb-10" style={{ ...arFont, fontWeight: 700 }}>
                {t.introTitle}
              </motion.h2>
              <motion.div {...fadeInUp} transition={withDelay(0.1)} className="space-y-6">
                {book.introduction.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-foreground/80 text-lg md:text-xl leading-[2.2]" style={arFont}>
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Author's introduction */}
      {book.authorIntro && (
        <section className="py-24 teal-gradient-bg relative">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl me-auto text-start" dir="rtl">
              <motion.h2 {...fadeInUp} className="text-primary text-3xl md:text-4xl mb-10" style={{ ...arFont, fontWeight: 700 }}>
                {t.authorIntroTitle}
              </motion.h2>
              <motion.div {...fadeInUp} transition={withDelay(0.1)} className="space-y-6">
                {book.authorIntro.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-foreground/80 text-lg md:text-xl leading-[2.2]" style={arFont}>
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BookDetail;
