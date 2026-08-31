"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > window.innerHeight * 0.72);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto flex max-w-container items-center justify-between px-6 transition-all duration-500 md:px-10",
            scrolled ? "py-3" : "py-6"
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 transition-all duration-500",
              scrolled
                ? "border-b border-lucky-navy/5 bg-white/75 backdrop-blur-xl"
                : "bg-transparent"
            )}
          />
          <a
            href="/"
            className={cn(
              "flex items-center gap-2.5 font-display text-xl font-semibold tracking-tightest transition-colors duration-500",
              scrolled ? "text-lucky-navy" : "text-white"
            )}
          >
            <img
              src="/media/logo-icon.png"
              alt="LuckyMove"
              className="h-8 w-8 object-contain md:h-9 md:w-9"
            />
            <span>
              Lucky<span className="text-lucky-yellow">Move</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "group relative text-sm font-medium transition-colors duration-300",
                  scrolled ? "text-lucky-navy/70 hover:text-lucky-navy" : "text-white/75 hover:text-white"
                )}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className={cn(
                "hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 md:inline-flex",
                scrolled
                  ? "bg-lucky-navy text-white hover:bg-lucky-blue"
                  : "bg-lucky-yellow text-lucky-navy hover:brightness-105"
              )}
            >
              Get Free Quote
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
                scrolled ? "text-lucky-navy" : "text-white"
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-lucky-navy px-6 py-6 text-white md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tightest">
                <img
                  src="/media/logo-icon.png"
                  alt="LuckyMove"
                  className="h-8 w-8 object-contain"
                />
                <span>
                  Lucky<span className="text-lucky-yellow">Move</span>
                </span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="border-b border-white/10 py-5 font-display text-4xl font-medium tracking-tightest"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-lucky-yellow py-4 font-semibold text-lucky-navy"
            >
              Get Free Quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
