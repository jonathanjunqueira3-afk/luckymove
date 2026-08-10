"use client";

import { motion, useSpring } from "framer-motion";
import { usePageProgress } from "@/lib/use-scroll-progress";

export function ScrollProgress() {
  const scrollYProgress = usePageProgress();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left
                 bg-gradient-to-r from-lucky-blue via-lucky-blue to-lucky-yellow"
    />
  );
}
