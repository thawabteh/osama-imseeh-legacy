import { motion } from "framer-motion";
import { quinticEase } from "@/lib/animations";

const stats = [
  { value: "12", label: "قطاعاً" },
  { value: "+30", label: "عاماً من الخبرة" },
  { value: "1", label: "إرث" },
];

const StatsSection = () => {
  return (
    <section className="py-28 teal-gradient-bg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-16 md:gap-28 flex-wrap">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: quinticEase, delay: 0.15 * i }}
              className="text-center group cursor-default"
            >
              <p
                className={`font-serif text-foreground/40 group-hover:text-foreground/90 transition-all duration-500 ${
                  i === 1 ? "text-8xl md:text-[10rem] leading-none" : "text-6xl md:text-8xl leading-none"
                }`}
                style={{ fontFamily: "'Lateef', serif", fontWeight: 700 }}
              >
                {stat.value}
              </p>
              <p
                className="label-caps text-foreground/50 group-hover:text-foreground/80 transition-all duration-500 mt-2 text-xl md:text-2xl"
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
