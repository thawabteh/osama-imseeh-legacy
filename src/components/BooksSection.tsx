import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { BookOpen, Download, Library } from "lucide-react";
import { Link } from "react-router-dom";
import { books } from "@/lib/books-data";
import { useLang } from "@/lib/i18n";

const arFont = { fontFamily: "'Montserrat Arabic', sans-serif" } as const;

// Only books that have a readable PDF appear in the library.
const readableBooks = books.filter((b) => b.pdf);

const COPY = {
  ar: {
    tag: "المكتبة",
    headA: "اقرأ ",
    headB: "كتب أسامة",
    intro: "مجموعة من مؤلفات أسامة كرم إمسيح، متاحة للقراءة كاملةً أونلاين مباشرةً من المتصفح أو للتحميل.",
    read: "اقرأ الآن",
    download: "تحميل",
    arabicNote: "محتوى الكتاب باللغة العربية",
  },
  en: {
    tag: "Library",
    headA: "Read ",
    headB: "Osama's Books",
    intro: "A collection of Osama Karam Imseeh's books — available to read in full online, right in your browser, or to download.",
    read: "Read now",
    download: "Download",
    arabicNote: "Book content is in Arabic",
  },
} as const;

const BooksSection = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  if (readableBooks.length === 0) return null;

  return (
    <section id="books" className="py-32 teal-gradient-bg overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-start">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-4 justify-start">
            <Library className="w-5 h-5 text-primary" />
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

        {/* Book cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {readableBooks.map((book, i) => (
            <motion.article
              key={book.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.12 * i }}
              className="group flex flex-col sm:flex-row gap-6 md:gap-8 rounded-2xl border border-foreground/10 bg-foreground/5 p-6 md:p-8 transition-all duration-500 hover:border-primary/30 hover:bg-foreground/8"
            >
              {/* Cover */}
              <Link
                to={`/read/${book.slug}`}
                className="relative block shrink-0 mx-auto sm:mx-0 w-44 md:w-48"
                aria-label={`${t.read}: ${book.title[lang]}`}
              >
                <div className="overflow-hidden rounded-xl border border-foreground/10 shadow-xl">
                  <img
                    src={book.cover}
                    alt={book.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 text-foreground" style={{ ...arFont, fontWeight: 700 }}>
                    <BookOpen className="w-5 h-5 text-primary" />
                    {t.read}
                  </span>
                </div>
              </Link>

              {/* Info */}
              <div className="flex flex-col text-start flex-1">
                <span className="text-primary text-base md:text-lg mb-2" style={arFont}>
                  {book.category[lang]}
                </span>
                <h3
                  className="text-foreground text-2xl md:text-3xl leading-snug mb-4 transition-colors duration-300 group-hover:text-primary"
                  style={{ ...arFont, fontWeight: 700 }}
                >
                  {book.title[lang]}
                </h3>
                <div className="w-12 h-px bg-primary/30 mb-5 me-auto transition-all duration-500 group-hover:w-20 group-hover:bg-primary/60" />
                <p className="text-foreground/60 text-base md:text-lg leading-[1.9] mb-4 flex-1" style={arFont}>
                  {book.excerpt[lang]}
                </p>

                {lang === "en" && book.arabicContent && (
                  <p className="text-foreground/40 text-sm mb-4 italic">{t.arabicNote}</p>
                )}

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 justify-start">
                  <Link
                    to={`/read/${book.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-background transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-primary/30"
                    style={{ ...arFont, fontWeight: 700 }}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="text-base md:text-lg">{t.read}</span>
                  </Link>
                  <a
                    href={book.pdf}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-foreground/70 transition-all duration-300 hover:border-primary/40 hover:text-primary"
                    style={{ ...arFont, fontWeight: 700 }}
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-base md:text-lg">{t.download}</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
