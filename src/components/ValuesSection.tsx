import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";

const values = [
  {
    number: "٠١",
    title: "النزاهة",
    desc: "المبدأ الذي لا يتجزأ.",
  },
  {
    number: "٠٢",
    title: "الرؤية",
    desc: "صياغة المستقبل بأدوات اليوم.",
  },
  {
    number: "٠٣",
    title: "المسؤولية",
    desc: "التزامٌ تجاه المجتمع والوطن.",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          القيم
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-2xl mb-20">
          ما <span className="text-primary">نؤمن به</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10">
          {values.map((item, i) => (
            <motion.div
              key={item.number}
              {...fadeInUp}
              transition={withDelay(0.15 * i)}
              className="bg-surface p-10 md:p-12 group"
            >
              <span className="font-serif text-6xl md:text-7xl text-primary/20 block mb-6">
                {item.number}
              </span>
              <h3 className="font-serif text-4xl text-foreground mb-4">{item.title}</h3>
              <div className="w-10 h-px gold-gradient mb-6" />
              <p className="text-muted-foreground text-2xl leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
