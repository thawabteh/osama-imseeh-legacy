import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";

const books = [
  { number: "٠١", title: "علمتني الحياة" },
  { number: "٠٢", title: "شواخص على دروب الحياة" },
  { number: "٠٣", title: "اسرار السعادة" },
  { number: "٠٤", title: "السعادة الزوجية" },
];

const LibrarySection = () => {
  return (
    <section id="library" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.p {...fadeInUp} className="label-caps text-primary mb-4">
          المؤلفات
        </motion.p>
        <motion.h2 {...fadeInUp} transition={withDelay(0.1)} className="section-heading text-foreground max-w-2xl mb-20">
          من <span className="text-primary">المكتبة</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10">
          {books.map((book, i) => (
            <motion.div
              key={book.number}
              {...fadeInUp}
              transition={withDelay(0.12 * i)}
              className="bg-background p-10 md:p-12 group cursor-pointer hover:bg-card transition-colors duration-300"
            >
              <span className="font-serif text-6xl md:text-7xl text-primary/20 block mb-6">
                {book.number}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{book.title}</h3>
              <div className="w-10 h-px gold-gradient" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
