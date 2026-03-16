import { motion } from "framer-motion";
import { quinticEase } from "@/lib/animations";
import { Dumbbell, Target, Mountain, Heart } from "lucide-react";

const books = [
  { title: "علمتني الحياة", icon: Dumbbell },
  { title: "شواخص على دروب الحياة", icon: Target },
  { title: "اسرار السعادة", icon: Mountain },
  { title: "السعادة الزوجية", icon: Heart },
];

const LibrarySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-heading text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: quinticEase }}
        >
          المكتبة
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: quinticEase }}
              className="group cursor-pointer"
            >
              <div className="border border-primary/30 rounded-[1.5rem] p-10 flex flex-col items-center gap-8 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-10px_hsl(40,48%,56%,0.2)] bg-card">
                <div className="w-24 h-24 rounded-full bg-primary/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <book.icon className="w-10 h-10 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl text-foreground text-center" style={{ fontFamily: "'Lateef', serif" }}>
                  {book.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
