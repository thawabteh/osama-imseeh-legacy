import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12, prefix: "", label: "قطاعاً", size: "text-7xl md:text-9xl" },
  { value: 30, prefix: "+", label: "عاماً من الخبرة", size: "text-9xl md:text-[12rem]" },
  { value: 1, prefix: "", label: "إرث", size: "text-7xl md:text-9xl" },
];

const CountUp = ({ target, prefix, duration = 2 }: { target: number; prefix: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{prefix}{count}</span>;
};

const StatsSection = () => {
  return (
    <section className="py-32 md:py-40 teal-gradient-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-12 md:gap-24 lg:gap-32 flex-wrap">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 * i }}
              className="text-center cursor-default group"
            >
              <p
                className={`${stat.size} leading-none text-foreground/30 transition-all duration-700 ease-out group-hover:text-foreground/90 group-hover:scale-110 transform`}
                style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
              >
                <CountUp target={stat.value} prefix={stat.prefix} duration={i === 1 ? 2.5 : 1.5} />
              </p>
              <p
                className="text-foreground/40 text-xl md:text-2xl mt-3 transition-all duration-700 ease-out group-hover:text-foreground/80 group-hover:tracking-wider"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
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
