"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

function Counter({ stat }: { stat: (typeof STATS)[number] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const DURATION = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  const display = stat.decimals ? val.toFixed(stat.decimals) : Math.round(val);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-lucky-yellow">{stat.suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-lucky-blue py-24 text-white md:py-32">
      {/* subtle animated blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-lucky-yellow/20 blur-3xl"
      />

      <div className="container-x relative">
        <Reveal>
          <p className="mb-16 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl">
            Trusted across Australia — the numbers behind a move done right.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="border-t border-white/20 pt-6">
                <div className="font-display text-5xl font-semibold tracking-tightest md:text-7xl">
                  <Counter stat={stat} />
                </div>
                <div className="mt-3 text-sm text-white/70">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
