import { motion, useInView } from "framer-motion";
import { quinticEase } from "@/lib/animations";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12, prefix: "", label: "قطاعاً" },
  { value: 30, prefix: "+", label: "عاماً من الخبرة" },
  { value: 1, prefix: "", label: "إرث" },
];

const CountUp = ({ target, prefix, duration = 2 }: { target: number; prefix: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{prefix}{count}</span>;
};

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
                <CountUp target={stat.value} prefix={stat.prefix} duration={i === 1 ? 2.5 : 1.5} />
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
