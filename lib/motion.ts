import type { Variants } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* Fade + rise, used for most scroll reveals */
export const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/* Stagger container */
export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
});

/* Clip-reveal for display headlines (per line) */
export const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

export const viewportOnce = { once: true, amount: 0.3 } as const;
