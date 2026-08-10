"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-hide");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest("a, button, [data-cursor='hover']")
      );
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-hide");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1"
      >
        <motion.div
          animate={{ scale: hovering ? 2.6 : 1, opacity: hovering ? 0.35 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-2 w-2 rounded-full bg-lucky-blue"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5"
      >
        <motion.div
          animate={{ scale: hovering ? 1.5 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="h-10 w-10 rounded-full border border-lucky-navy/25"
        />
      </motion.div>
    </>
  );
}
