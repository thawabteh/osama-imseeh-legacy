import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";

const posts = [
  {
    date: "مارس ٢٠٢٦",
    category: "اقتصاد",
    title: "مستقبل الاقتصاد الرقمي في الأردن",
    excerpt: "قراءة في الدور المحوري لتبنّي التكنولوجيا في تحويل المسار الاقتصادي للمملكة الأردنية الهاشمية.",
  },
  {
    date: "فبراير ٢٠٢٦",
    category: "قيادة",
    title: "في هندسة النمو المستدام",
    excerpt: "لماذا يتطلب بناء القيمة طويلة الأمد نهجاً مختلفاً جذرياً في صنع القرار الاستراتيجي.",
  },
  {
    date: "يناير ٢٠٢٦",
    category: "استثمار",
    title: "الأسواق الناشئة وشجاعة القناعة",
    excerpt: "دروس من ثلاثة عقود في اكتشاف الفرص التحويلية في بيئات مليئة بالتحديات.",
  },
  {
    date: "ديسمبر ٢٠٢٥",
    category: "رؤية",
    title: "بناء الجسور: الشرق يلتقي بالغرب في التجارة",
    excerpt: "كيف تُعيد الشراكات العابرة للثقافات تشكيل مشهد التجارة والاستثمار الدولي.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          تأملات
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-2xl mb-16">
          رؤى <span className="text-primary">ومنظورات</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              {...fadeInUp}
              transition={withDelay(0.1 * i)}
              className="bg-surface p-8 md:p-10 group cursor-pointer hover:bg-card transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="label-caps text-muted-foreground text-[12px]">{post.date}</span>
                <span className="w-1 h-1 bg-primary" />
                <span className="label-caps text-primary text-[12px]">{post.category}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <span className="label-caps text-primary text-[12px] link-underline">
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
