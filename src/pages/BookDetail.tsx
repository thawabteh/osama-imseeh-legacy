import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { books } from "@/lib/books-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookDetail = () => {
  const { slug } = useParams();
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground text-2xl" style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}>
          الكتاب غير موجود
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
              style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-lg">العودة للمكتبة</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
            {/* Book cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: quinticEase }}
            >
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -inset-3 rounded-2xl border border-primary/20 -z-10" />
              </div>
            </motion.div>

            {/* Book info */}
            <div className="text-right">
              <motion.span
                {...fadeInUp}
                className="text-primary text-lg md:text-xl block mb-4"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
              >
                {book.category}
              </motion.span>

              <motion.h1
                {...fadeInUp}
                transition={withDelay(0.1)}
                className="text-foreground text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
              >
                {book.title}
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: quinticEase, delay: 0.3 }}
                className="w-20 h-px bg-primary/40 mb-8 origin-right mr-0 ml-auto"
              />

              <motion.p
                {...fadeInUp}
                transition={withDelay(0.2)}
                className="text-foreground/60 text-xl md:text-2xl leading-[2]"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
              >
                {book.excerpt}
              </motion.p>

              <motion.p
                {...fadeInUp}
                transition={withDelay(0.3)}
                className="text-foreground/40 text-lg mt-6"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
              >
                تأليف: {book.author}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 teal-gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mr-0 ml-auto text-right">
            <motion.h2
              {...fadeInUp}
              className="text-primary text-3xl md:text-4xl mb-10"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
            >
              المقدّمة
            </motion.h2>

            <motion.div
              {...fadeInUp}
              transition={withDelay(0.1)}
              className="space-y-6"
            >
              {book.introduction.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground/80 text-lg md:text-xl leading-[2.2]"
                  style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Author's introduction */}
      <section className="py-24 teal-gradient-bg relative">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mr-0 ml-auto text-right">
            <motion.h2
              {...fadeInUp}
              className="text-primary text-3xl md:text-4xl mb-10"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
            >
              مقدّمة الكاتب
            </motion.h2>

            <motion.div
              {...fadeInUp}
              transition={withDelay(0.1)}
              className="space-y-6"
            >
              {book.authorIntro.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground/80 text-lg md:text-xl leading-[2.2]"
                  style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDetail;
