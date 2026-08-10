"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { WHY } from "@/lib/content";
import { Reveal, SplitWords } from "@/components/ui/reveal";

function Card({ item, index }: { item: (typeof WHY)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });

  const glow = useMotionTemplate`radial-gradient(340px circle at ${glowX}% ${glowY}%, rgba(0,87,255,0.10), transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    glowX.set(px * 100);
    glowY.set(py * 100);
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 10);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  const Icon = item.icon;

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
        className="group relative h-full overflow-hidden rounded-3xl border border-lucky-navy/10 bg-white p-8 transition-colors duration-500 hover:border-transparent hover:shadow-[0_30px_80px_-40px_rgba(7,27,54,0.35)]"
      >
        <motion.div
          aria-hidden
          style={{ background: glow }}
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="relative z-10">
          <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lucky-navy text-lucky-yellow transition-all duration-500 group-hover:bg-lucky-blue group-hover:text-white">
            <Icon className="h-6 w-6" strokeWidth={1.6} />
          </div>
          <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-lucky-navy/30">
            0{index + 1}
          </div>
          <h3 className="mb-3 font-display text-2xl font-medium tracking-tight">
            {item.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-lucky-navy/60">
            {item.desc}
          </p>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Why() {
  return (
    <section id="why" className="relative bg-white py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <span className="eyebrow mb-5">
                <span className="h-px w-8 bg-lucky-blue" /> Why LuckyMove
              </span>
            </Reveal>
            <h2 className="display text-4xl md:text-6xl">
              <SplitWords text="A move that finally" />
              <br />
              <SplitWords
                text="feels effortless."
                wordClassName="text-lucky-blue"
                delay={0.2}
              />
            </h2>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-lucky-navy/60">
                Four commitments behind every LuckyMove job — the reasons
                Australia&apos;s most discerning clients trust us with what
                matters most.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
