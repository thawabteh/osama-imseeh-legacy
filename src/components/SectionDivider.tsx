import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "ornament" | "fade";
  className?: string;
}

const SectionDivider = ({ variant = "ornament", className = "" }: SectionDividerProps) => {
  if (variant === "fade") {
    return (
      <div
        className={`relative h-16 -my-8 z-10 ${className}`}
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(197, 50%, 15%) 50%, transparent 100%)",
        }}
      />
    );
  }

  return (
    <div className={`relative flex items-center justify-center py-8 ${className}`}>
      {/* Left line */}
      <motion.div
        className="h-[1px] flex-1 max-w-[200px] md:max-w-[300px]"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(25, 80%, 55%))",
        }}
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Diamond */}
      <motion.div
        className="mx-4 w-3 h-3 rotate-45 border border-primary"
        style={{ background: "linear-gradient(135deg, hsl(25, 80%, 50%), hsl(25, 85%, 55%))" }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Right line */}
      <motion.div
        className="h-[1px] flex-1 max-w-[200px] md:max-w-[300px]"
        style={{
          background: "linear-gradient(270deg, transparent, hsl(25, 80%, 55%))",
        }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

export default SectionDivider;
