"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));

type Anchor = [element: number, viewport: number];

/**
 * A dependable replacement for framer-motion's `useScroll({ target, offset })`.
 *
 * framer's scroll tracking silently reports 0 in some Lenis + Next setups, so we
 * compute progress ourselves from getBoundingClientRect on a rAF loop. Lenis
 * still owns the actual scrolling — we just read the resulting layout each frame.
 *
 * Offsets mirror framer semantics: [[elStart, vpStart], [elEnd, vpEnd]] as 0..1
 * fractions, where 0 = top/left edge, 1 = bottom/right edge.
 */
export function useSectionProgress(
  ref: React.RefObject<HTMLElement | null>,
  start: Anchor = [0, 0],
  end: Anchor = [1, 0]
): MotionValue<number> {
  const progress = useMotionValue(0);
  const raf = useRef(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const h = rect.height || 1;
        const startTop = start[1] * vh - start[0] * h;
        const endTop = end[1] * vh - end[0] * h;
        const denom = endTop - startTop || 1;
        progress.set(clamp((rect.top - startTop) / denom));
      }
      raf.current = requestAnimationFrame(update);
    };
    raf.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return progress;
}

/** Whole-document scroll progress (0..1), rAF-driven. */
export function usePageProgress(): MotionValue<number> {
  const progress = useMotionValue(0);
  const raf = useRef(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      progress.set(max > 0 ? clamp(window.scrollY / max) : 0);
      raf.current = requestAnimationFrame(update);
    };
    raf.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return progress;
}
