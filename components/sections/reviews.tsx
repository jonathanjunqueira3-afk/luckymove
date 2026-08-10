"use client";

import { Star } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/content";
import { Reveal, SplitWords, Stagger, StaggerItem } from "@/components/ui/reveal";

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-lucky-navy py-28 text-white md:py-40">
      {/* soft accent glow, same language as the CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-lucky-blue/20 blur-[120px]"
      />

      <div className="container-x relative">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow mb-5 text-lucky-yellow">
                <span className="h-px w-8 bg-lucky-yellow" /> Google Reviews
              </span>
            </Reveal>
            <h2 className="display text-4xl md:text-6xl">
              <SplitWords text="Straight from" />{" "}
              <SplitWords
                text="Google."
                wordClassName="text-lucky-yellow"
                delay={0.15}
              />
            </h2>
          </div>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-3 text-white/60">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-lucky-yellow text-lucky-yellow"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                5.0 rating · verified reviews
              </span>
            </div>
          </Reveal>
        </div>

        <Stagger className="grid gap-6 md:grid-cols-3 md:gap-8">
          {GOOGLE_REVIEWS.map((r) => (
            <StaggerItem key={r.name}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.08]">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-lucky-yellow text-lucky-yellow"
                    />
                  ))}
                </div>
                <p className="flex-1 text-[15px] leading-relaxed text-white/75">
                  “{r.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lucky-yellow font-display text-base font-semibold text-lucky-navy">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-white/45">
                      Google Review · {r.time}
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
