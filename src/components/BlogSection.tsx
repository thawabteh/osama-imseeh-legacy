import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { ArrowLeft, Sparkles } from "lucide-react";
import bookCover1 from "@/assets/book-cover-1.png";
import bookCover2 from "@/assets/book-cover-2.png";

const posts = [
  {
    cover: bookCover1,
    category: "تأملات وخبرات روحية — الكتاب الثالث",
    title: "كيف تصل إلى الملكوت؟",
    excerpt:
      "الحياة الروحية ليست وقفاً على أحد من الناس، بل هي من نصيب جميع الناس. يحتوي هذا الكتيب على «ساندويشات روحية» تأخذها سريعاً وتغذي بها نفسك.",
    author: "أسامة كرم إمسيح",
  },
  {
    cover: bookCover2,
    category: "تأملات وخبرات روحية — الكتاب السابع",
    title: "«وأنتم من تقولون إني أنا؟»",
    excerpt:
      "سؤال سأله الرب يسوع لتلاميذه، وعلى إجابة هذا السؤال تقرر مصيرهم الأرضي ومصير حياتهم الأبدية. يحوي الكتاب 29 فصلاً و365 فقرة على عدد أيام السنة.",
    author: "أسامة كرم إمسيح",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-32 teal-gradient-bg overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-right">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-4 justify-end">
            <Sparkles className="w-5 h-5 text-primary" />
            <p
              className="text-primary text-xl md:text-2xl"
              style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
            >
              مكتبة روحية
            </p>
          </motion.div>
          <motion.h2
            {...fadeInUp}
            transition={withDelay(0.1)}
            style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
          >
            <span className="text-foreground text-5xl md:text-6xl lg:text-7xl">تأملات في </span>
            <span className="text-primary text-5xl md:text-6xl lg:text-7xl">الإيمان والحياة</span>
          </motion.h2>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.15 * i }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer relative"
            >
              <div className="relative rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:bg-foreground/8">
                {/* Top glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-transparent group-hover:from-primary/8 transition-all duration-500 rounded-2xl" />

                {/* Book cover image */}
                <div className="relative z-10 overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>

                <div className="relative z-10 text-right p-8 md:p-10">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-5 justify-end">
                    <span
                      className="text-primary text-base md:text-lg"
                      style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-foreground text-2xl md:text-3xl mb-4 leading-snug transition-colors duration-300 group-hover:text-primary"
                    style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
                  >
                    {post.title}
                  </h3>

                  {/* Decorative line */}
                  <div className="w-12 h-px bg-primary/30 mb-5 transition-all duration-500 group-hover:w-20 group-hover:bg-primary/60 mr-0 ml-auto" />

                  {/* Excerpt */}
                  <p
                    className="text-foreground/60 text-lg md:text-xl leading-[1.9] mb-6"
                    style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Author & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary transition-all duration-300 group-hover:gap-4">
                      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-2" />
                      <span
                        className="text-lg"
                        style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
                      >
                        اكتشف المزيد
                      </span>
                    </div>
                    <span
                      className="text-foreground/40 text-base"
                      style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
                    >
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;