import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";

const values = [
  { number: "1", title: "النزاهة", desc: ".المبدأ الذي لا يتجزأ" },
  { number: "2", title: "الرؤية", desc: ".صياغة المستقبل بأدوات اليوم" },
  { number: "3", title: "المسؤولية", desc: ".التزامٌ تجاه المجتمع والوطن" },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-32 teal-gradient-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          {...fadeInUp}
          className="text-right mb-24"
          style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
        >
          <span className="text-primary text-5xl md:text-6xl">ما </span>
          <span className="text-foreground text-5xl md:text-6xl">نؤمن به</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: quinticEase, delay: 0.2 * i }}
              className="group text-center relative"
            >
              {/* Glowing number */}
              <div className="relative inline-block mb-6">
                <motion.span
                  className="block text-primary text-[7rem] md:text-[9rem] leading-none transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                  style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 800 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.number}
                </motion.span>
                {/* Subtle glow behind number */}
                <div className="absolute inset-0 blur-3xl bg-primary/10 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: quinticEase, delay: 0.3 + 0.2 * i }}
                className="w-16 h-px bg-primary/40 mx-auto mb-6 origin-center"
              />

              <h3
                className="text-foreground text-2xl md:text-3xl mb-3"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
              >
                {item.title}
              </h3>
              <p
                className="text-foreground/50 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: "'Montserrat Arabic', sans-serif" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
