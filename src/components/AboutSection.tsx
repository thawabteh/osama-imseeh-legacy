import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      {/* Gold thread */}
      <div className="absolute left-1/2 top-0 bottom-0 gold-thread opacity-30 hidden lg:block" />

      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          The Vision
        </motion.p>
        <motion.h2
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="section-heading text-foreground max-w-3xl"
        >
          A Legacy Built on
          <br />
          <span className="text-primary">Conviction</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Osama Imseeh's journey began with a singular conviction: that strategic 
              vision, when coupled with unwavering integrity, can transform not just 
              businesses, but entire economies. Over three decades, this conviction has 
              materialized into a legacy that spans twelve sectors of Jordan's economy.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From pioneering investments in emerging technologies to championing 
              sustainable development initiatives, his approach has consistently 
              prioritized long-term value creation over short-term gains — a philosophy 
              that has earned him the trust of governments, international institutions, 
              and fellow visionaries.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="space-y-8"
          >
            {[
              { title: "Strategic Investment", desc: "Identifying and nurturing transformative opportunities across diverse sectors." },
              { title: "Public Service", desc: "Contributing to policy frameworks that strengthen Jordan's economic foundation." },
              { title: "Mentorship", desc: "Cultivating the next generation of leaders through hands-on guidance and support." },
            ].map((item) => (
              <div key={item.title} className="card-surface p-8">
                <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
