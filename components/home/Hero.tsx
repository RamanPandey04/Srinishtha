"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { SystemYantra } from "./SystemYantra";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] as const },
});

export function Hero() {
  return (
    <section className="sheet relative overflow-hidden border-b border-line">
      {/* margin coordinates */}
      <div className="pointer-events-none absolute left-4 top-24 hidden md:block">
        <span className="mono-xs text-faint">0,0</span>
      </div>
      <div className="pointer-events-none absolute right-4 bottom-4 hidden md:block">
        <span className="mono-xs text-faint">SHEET 01 / 07</span>
      </div>

      <div className="container-x relative grid min-h-[100svh] grid-cols-1 items-center gap-10 pb-16 pt-28 md:grid-cols-12 md:gap-6 md:pt-20">
        {/* text column */}
        <div className="relative z-10 md:col-span-6 md:pr-6">
          <motion.div {...fade(0.1)} className="mono-label text-muted">
            Software Studio — Est. 2024 — Hyderabad, IN
          </motion.div>

          <h1 className="d-1 font-display mt-6 font-semibold text-balance">
            <motion.span className="block" {...fade(0.2)}>
              Systems,
            </motion.span>
            <motion.span className="block" {...fade(0.3)}>
              drawn to the
            </motion.span>
            <motion.span className="block" {...fade(0.4)}>
              last degree
              <span className="text-vermillion">.</span>
            </motion.span>
          </h1>

          <motion.p {...fade(0.55)} className="mt-8 max-w-md text-base leading-relaxed text-chalk-2 text-pretty md:text-lg">
            A Hyderabad software studio that engineers with the exactness of a{" "}
            <span className="font-deva text-chalk" lang="sa">
              यन्त्र
            </span>{" "}
            — and the devotion behind our name,{" "}
            <span className="font-deva text-chalk" lang="sa">
              निष्ठा
            </span>
            . Built on 100+ years across telecom, finance and logistics.
          </motion.p>

          <motion.div {...fade(0.7)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-chalk px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-vermillion hover:text-white"
            >
              <span className="h-1.5 w-1.5 bg-vermillion transition-colors group-hover:bg-white" />
              Commission a system
            </Link>
            <Link href="/work" className="link-mark mono-label text-chalk-2 hover:text-chalk">
              View the index
            </Link>
          </motion.div>
        </div>

        {/* yantra column */}
        <div className="relative md:col-span-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mx-auto w-full max-w-[34rem] md:max-w-none md:translate-x-6"
          >
            <SystemYantra className="h-auto w-full" />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        {...fade(1)}
        className="container-x relative flex items-center gap-2 pb-6 text-faint"
      >
        <ArrowDown size={14} />
        <span className="mono-xs">SCROLL — THE PRACTICE</span>
      </motion.div>
    </section>
  );
}
