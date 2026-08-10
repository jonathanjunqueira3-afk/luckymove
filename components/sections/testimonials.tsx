"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { Reveal, SplitWords } from "@/components/ui/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const t = TESTIMONIALS[index];

  const paginate = (d: number) => {
    setState([
      (index + d + TESTIMONIALS.length) % TESTIMONIALS.length,
      d,
    ]);
  };

  return (
    <section id="reviews" className="relative bg-white py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow mb-5">
                <span className="h-px w-8 bg-lucky-blue" /> Testimonials
              </span>
            </Reveal>
            <h2 className="display text-4xl md:text-6xl">
              <SplitWords text="Loved by movers" />
              <br />
              <SplitWords
                text="across Australia."
                wordClassName="text-lucky-blue"
                delay={0.15}
              />
            </h2>
          </div>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-lucky-navy/15 transition-all duration-300 hover:border-lucky-blue hover:bg-lucky-blue hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-lucky-navy/15 transition-all duration-300 hover:border-lucky-blue hover:bg-lucky-blue hover:text-white"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-lucky-navy px-8 py-14 text-white md:px-16 md:py-20">
            <Quote className="absolute right-8 top-8 h-24 w-24 text-white/5 md:right-16 md:h-40 md:w-40" />
            <div className="relative min-h-[280px] md:min-h-[240px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-lucky-yellow text-lucky-yellow"
                      />
                    ))}
                  </div>
                  <blockquote className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lucky-yellow font-display text-lg font-semibold text-lucky-navy">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-white/55">
                        {t.role} · {t.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* progress dots */}
            <div className="mt-10 flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-10 bg-lucky-yellow" : "w-4 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
