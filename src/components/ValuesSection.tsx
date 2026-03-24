import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";

const values = [
  { number: "1", title: "النزاهة", desc: "المبدأ الذي لا يتجزأ." },
  { number: "2", title: "الرؤية", desc: "صياغة المستقبل بأدوات اليوم." },
  { number: "3", title: "المسؤولية", desc: "التزامٌ تجاه المجتمع والوطن." },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-32 teal-gradient-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          {...fadeInUp}
          className="text-right mb-20"
          style={{ fontFamily: "'Lateef', serif", fontWeight: 700 }}
        >
          <span className="text-primary text-5xl md:text-6xl">ما </span>
          <span className="text-foreground text-5xl md:text-6xl">نؤمن به</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {values.map((item, i) => (
            <motion.div
              key={item.number}
              {...fadeInUp}
              transition={withDelay(0.15 * i)}
              className="text-center"
            >
              <span
                className="block text-foreground/20 text-[8rem] md:text-[10rem] leading-none mb-4"
                style={{ fontFamily: "'Lateef', serif", fontWeight: 700 }}
              >
                {item.number}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{item.title}</h3>
              <p className="text-foreground/60 text-xl md:text-2xl leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
