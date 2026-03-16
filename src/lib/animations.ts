import type { Transition, Variants } from "framer-motion";

export const quinticEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: quinticEase } as Transition,
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 1.05 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: quinticEase } as Transition,
};

export const withDelay = (delay: number): Transition => ({
  duration: 0.6,
  ease: quinticEase,
  delay,
});
