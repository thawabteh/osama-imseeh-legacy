import { motion } from "framer-motion";
import { fadeInUp, withDelay } from "@/lib/animations";

const books = [
  { title: "علمتني الحياة" },
  { title: "شواخص على دروب الحياة" },
  { title: "اسرار السعادة" },
  { title: "السعادة الزوجية" },
];

const LibrarySection = () => {
  return (
    <section id="library" className="py-32 bg-foreground/5">
      <div className="container mx-auto px-6">
        <div className="bg-card rounded-none py-20 px-8 md:px-16">
          <div className="flex items-center justify-between flex-wrap gap-8">
            {books.map((book, i) => (
              <motion.div
                key={book.title}
                {...fadeInUp}
                transition={withDelay(0.12 * i)}
                className="text-center flex-1 min-w-[150px]"
              >
                <h3
                  className="font-serif text-2xl md:text-3xl text-foreground"
                  style={{ fontFamily: "'Lateef', serif" }}
                >
                  {book.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
