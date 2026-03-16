import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const posts = [
  {
    date: "March 2026",
    category: "Economy",
    title: "The Future of Jordan's Digital Economy",
    excerpt: "Examining the pivotal role of technology adoption in transforming the Hashemite Kingdom's economic trajectory.",
  },
  {
    date: "February 2026",
    category: "Leadership",
    title: "On the Architecture of Sustainable Growth",
    excerpt: "Why long-term value creation demands a fundamentally different approach to strategic decision-making.",
  },
  {
    date: "January 2026",
    category: "Investment",
    title: "Emerging Markets and the Courage of Conviction",
    excerpt: "Lessons from three decades of identifying transformative opportunities in challenging environments.",
  },
  {
    date: "December 2025",
    category: "Vision",
    title: "Building Bridges: East Meets West in Commerce",
    excerpt: "How cross-cultural partnerships are reshaping the landscape of international trade and investment.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          Reflections
        </motion.p>
        <motion.h2
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="section-heading text-foreground max-w-2xl mb-16"
        >
          Insights & <span className="text-primary">Perspectives</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 * i }}
              className="bg-surface p-8 md:p-10 group cursor-pointer hover:bg-card transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="label-caps text-muted-foreground text-[10px]">{post.date}</span>
                <span className="w-1 h-1 bg-primary" />
                <span className="label-caps text-primary text-[10px]">{post.category}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
              <span className="label-caps text-primary text-[10px] link-underline">
                Explore the Insight
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
