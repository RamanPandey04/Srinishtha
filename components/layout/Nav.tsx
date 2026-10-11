"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled ? "border-line bg-ink/85 backdrop-blur-md" : "border-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mono-label transition-colors ${
                    active ? "text-chalk" : "text-muted hover:text-chalk"
                  }`}
                >
                  <span className="text-vermillion">{String(i + 1).padStart(2, "0")}</span>{" "}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group hidden items-center gap-2 bg-chalk px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:bg-vermillion hover:text-white md:inline-flex"
          >
            Commission
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-line-2 text-chalk md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="sheet fixed inset-0 z-40 flex flex-col bg-ink px-5 pt-24 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mono-label mb-4 text-faint">Index</div>
            <nav className="flex flex-col border-t border-line">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.05 }}
                  className="border-b border-line"
                >
                  <Link href={item.href} className="flex items-baseline justify-between py-5">
                    <span className="font-display text-3xl font-semibold text-chalk">{item.label}</span>
                    <span className="mono-label text-vermillion">{String(i + 1).padStart(2, "0")}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-chalk px-6 py-4 text-base font-medium text-ink"
            >
              Commission a system
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
