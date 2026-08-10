"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { Reveal, SplitWords } from "@/components/ui/reveal";
import { useSectionProgress } from "@/lib/use-scroll-progress";

const EASE = [0.16, 1, 0.3, 1] as const;

function ParallaxImage({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useSectionProgress(ref, [1, 1], [0, 0]);
  const y = useTransform(progress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(progress, [0, 1], [1.12, 1.02]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
      className={`relative overflow-hidden rounded-[2rem] bg-lucky-navy ${className ?? ""}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lucky-navy/35 via-transparent to-transparent"
      />
    </motion.div>
  );
}

export function RealWork() {
  return (
    <section id="real-work" className="relative bg-white py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 max-w-3xl md:mb-20">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-8 bg-lucky-blue" /> Real Work
            </span>
          </Reveal>
          <h2 className="display text-4xl md:text-6xl">
            <SplitWords text="Real moves." />{" "}
            <SplitWords
              text="Real people."
              wordClassName="text-lucky-blue"
              delay={0.15}
            />
          </h2>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-xl text-lg text-lucky-navy/60">
              No stock photos, no staging — just our crew doing what they do
              every day across Sydney.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-5 md:gap-8">
          <ParallaxImage
            src="/media/real-1.jpg"
            alt="LuckyMove crew member on the back of a fully equipped moving truck"
            className="aspect-[4/5] md:col-span-3 md:aspect-[4/3]"
          />
          <ParallaxImage
            src="/media/real-2.jpg"
            alt="Two LuckyMove movers beside the truck after a completed move"
            className="aspect-[4/5] md:col-span-2 md:aspect-auto"
            delay={0.12}
          />
        </div>
      </div>
    </section>
  );
}
