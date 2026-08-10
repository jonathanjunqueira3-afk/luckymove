"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { useSectionProgress } from "@/lib/use-scroll-progress";

const EASE = [0.16, 1, 0.3, 1] as const;

export function TrustBanner() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSectionProgress(ref, [1, 1], [0, 0]);
  const y = useTransform(progress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(progress, [0, 1], [1.15, 1.02]);

  return (
    <section ref={ref} className="relative bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, ease: EASE }}
        className="relative h-[70vh] overflow-hidden bg-lucky-navy md:h-[85vh]"
      >
        <motion.img
          src="/media/team.jpg"
          alt="LuckyMove truck parked on a leafy Sydney street"
          style={{ y, scale }}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-lucky-navy/85 via-lucky-navy/20 to-lucky-navy/30"
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="container-x pb-16 md:pb-24">
            <Reveal>
              <span className="eyebrow mb-5 text-lucky-yellow">
                <span className="h-px w-8 bg-lucky-yellow" /> Since day one
              </span>
            </Reveal>
            <h2 className="display max-w-3xl text-4xl text-white md:text-6xl">
              Trusted by families across Sydney.
            </h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
