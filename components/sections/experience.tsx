"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { STEPS } from "@/lib/content";
import { Reveal, SplitWords } from "@/components/ui/reveal";
import { useSectionProgress } from "@/lib/use-scroll-progress";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useSectionProgress(ref, [0, 0.65], [1, 0.6]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative bg-gray-light py-28 md:py-40">
      <div className="container-x">
        <div className="mb-20 max-w-3xl">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-8 bg-lucky-blue" /> The Experience
            </span>
          </Reveal>
          <h2 className="display text-4xl md:text-6xl">
            <SplitWords text="Four steps from" />{" "}
            <SplitWords
              text="chaos to calm."
              wordClassName="text-lucky-blue"
              delay={0.15}
            />
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* progress rail */}
          <div className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px bg-lucky-navy/10 md:left-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-px bg-lucky-blue"
            />
          </div>

          <div className="flex flex-col gap-14 md:gap-4">
            {STEPS.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={step.n}
                  className="relative grid grid-cols-[56px_1fr] items-start gap-6 md:grid-cols-2 md:gap-0"
                >
                  {/* node */}
                  <div className="relative z-10 flex justify-start md:absolute md:left-1/2 md:-translate-x-1/2">
                    <Reveal>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-lucky-navy/10 bg-white font-display text-lg font-semibold text-lucky-blue shadow-[0_10px_30px_-12px_rgba(7,27,54,0.3)]">
                        {step.n}
                      </div>
                    </Reveal>
                  </div>

                  {/* card */}
                  <div
                    className={`md:py-10 ${
                      left
                        ? "md:col-start-1 md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <Reveal delay={0.1}>
                      <div className="rounded-3xl border border-lucky-navy/10 bg-white p-8 transition-shadow duration-500 hover:shadow-[0_30px_80px_-40px_rgba(7,27,54,0.4)]">
                        <h3 className="mb-3 font-display text-3xl font-medium tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-lucky-navy/60">
                          {step.desc}
                        </p>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
