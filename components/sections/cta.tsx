"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SplitWords } from "@/components/ui/reveal";
import { useSectionProgress } from "@/lib/use-scroll-progress";

export function Cta() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useSectionProgress(ref, [1, 1], [0, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-lucky-navy py-32 text-white md:py-48">
      {/* parallax accent shapes */}
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[32rem] w-[32rem] rounded-full bg-lucky-blue/25 blur-[120px]"
      />
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-lucky-yellow/15 blur-[120px]"
      />

      <div className="container-x relative text-center">
        <span className="eyebrow mb-8 justify-center text-lucky-yellow">
          <span className="h-px w-8 bg-lucky-yellow" /> Ready when you are
        </span>
        <h2 className="display mx-auto max-w-5xl text-balance text-5xl md:text-8xl">
          <SplitWords text="Ready for a" />{" "}
          <SplitWords text="stress-free move?" wordClassName="text-lucky-yellow" delay={0.15} />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-lg text-white/60"
        >
          Book today and get a transparent, fixed quote in minutes. No call
          centres, no hidden fees — just a better way to move.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#top" variant="secondary">
            Book Your Move <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="tel:1300000000" variant="ghost" className="text-white">
            <PhoneCall className="h-4 w-4" /> 1300 000 000
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
