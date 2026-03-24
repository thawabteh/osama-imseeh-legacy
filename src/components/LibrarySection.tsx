import { motion } from "framer-motion";
import { fadeInUp, withDelay, quinticEase } from "@/lib/animations";
import { BookOpen, Heart, Compass, Users } from "lucide-react";

const books = [
  { title: "السعادة الزوجية", icon: Heart, accent: "from-primary/20 to-primary/5" },
  { title: "اسرار السعادة", icon: Compass, accent: "from-primary/15 to-primary/5" },
  { title: "شواخص على دروب الحياة", icon: Users, accent: "from-primary/20 to-primary/5" },
  { title: "علمتني الحياة", icon: BookOpen, accent: "from-primary/15 to-primary/5" },
];

const LibrarySection = () => {
  return (
    <section id="library" className="py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          {...fadeInUp}
          className="text-right mb-20"
          style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
        >
          <span className="text-primary text-5xl md:text-6xl">المكتبة</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {books.map((book, i) => {
            const Icon = book.icon;
            return (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: quinticEase, delay: 0.15 * i }}
                whileHover={{ y: -8 }}
                className="group relative text-center cursor-pointer"
              >
                {/* Card */}
                <div className="relative rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm p-8 md:p-10 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-foreground/8 overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mx-auto mb-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Decorative line */}
                    <div className="w-8 h-px bg-primary/30 mx-auto mb-5 transition-all duration-500 group-hover:w-12 group-hover:bg-primary/60" />

                    {/* Title */}
                    <h3
                      className="text-foreground text-xl md:text-2xl leading-relaxed transition-colors duration-300 group-hover:text-primary"
                      style={{ fontFamily: "'Montserrat Arabic', sans-serif", fontWeight: 700 }}
                    >
                      {book.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
