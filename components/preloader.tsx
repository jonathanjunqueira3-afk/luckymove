"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DURATION = 1500;

export function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const finished = useRef(false);

  useEffect(() => {
    // Lock scroll while the intro plays.
    document.body.style.overflow = "hidden";
    const start = performance.now();

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      setCount(100);
      setDone(true);
    };

    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(finish, 220);
    };
    raf = requestAnimationFrame(tick);

    // Hard fallback: dismiss even if rAF is throttled (e.g. tab opened in the
    // background). setTimeout still fires when rAF is paused, so the loader can
    // never trap the user behind a locked scroll.
    const safety = setTimeout(finish, DURATION + 900);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
    return () => {
      // never leave the page unscrollable if this unmounts
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-lucky-navy text-white"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="text-2xl font-display font-semibold tracking-tightest">
              Lucky<span className="text-lucky-yellow">Move</span>
            </span>
          </motion.div>

          <div className="mt-8 h-px w-56 overflow-hidden bg-white/15">
            <motion.div
              className="h-full bg-lucky-yellow"
              animate={{ width: `${count}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
          <div className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            {count}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
