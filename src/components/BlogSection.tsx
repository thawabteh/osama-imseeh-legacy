import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";

const posts = [
  {
    date: "٢٠٢٦",
    category: "تأملات",
    title: "كيف تصل إلى الملكوت؟",
    excerpt: "تأمل روحي عميق في رحلة الإنسان نحو السمو والمعنى الحقيقي للوصول.",
  },
  {
    date: "٢٠٢٦",
    category: "تأملات",
    title: "«وأنتم من تقولون إني أنا؟»",
    excerpt: "سؤال جوهري يدعونا للتوقف والتأمل في هويتنا الحقيقية ومعنى وجودنا.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-32 teal-gradient-bg">
      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4 text-3xl">
          مدونة
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-2xl mb-16">
          تأملات في <span className="text-primary">القيادة والحياة</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              {...fadeInUp}
              transition={withDelay(0.1 * i)}
              className="bg-card p-8 md:p-10 group cursor-pointer hover:bg-muted transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="label-caps text-muted-foreground text-2xl">{post.date}</span>
                <span className="w-1 h-1 bg-primary rounded-full" />
                <span className="label-caps text-primary text-2xl">{post.category}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-3xl">{post.excerpt}</p>
              <span className="label-caps text-primary link-underline text-2xl">
                اكتشف المزيد
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
