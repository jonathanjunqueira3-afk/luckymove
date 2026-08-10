"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Reveal, SplitWords } from "@/components/ui/reveal";

export function Services() {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();

    // Horizontal pinned scroll on desktop only
    mm.add("(min-width: 768px)", () => {
      if (reduce) return;
      gsap.registerPlugin(ScrollTrigger);
      const el = track.current!;
      const distance = el.scrollWidth - window.innerWidth;

      const tween = gsap.to(el, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.4}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={section}
      id="services"
      className="relative overflow-hidden bg-lucky-navy text-white"
    >
      <div className="flex h-auto flex-col md:h-screen md:justify-center">
        <div className="container-x pb-10 pt-24 md:py-0">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <Reveal>
                <span className="eyebrow mb-5 text-lucky-yellow">
                  <span className="h-px w-8 bg-lucky-yellow" /> Our Services
                </span>
              </Reveal>
              <h2 className="display text-4xl md:text-6xl">
                <SplitWords text="Everything you move," />
                <br />
                <SplitWords
                  text="handled with care."
                  wordClassName="text-lucky-yellow"
                  delay={0.15}
                />
              </h2>
            </div>
            <Reveal delay={0.2}>
              <p className="hidden max-w-xs text-white/50 md:block">
                Drag or scroll to explore the full range of the LuckyMove
                service line.
              </p>
            </Reveal>
          </div>
        </div>

        {/* horizontal track */}
        <div
          ref={track}
          className="flex flex-col gap-5 px-6 pb-24 md:flex-row md:gap-6 md:px-10 md:pb-0"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative flex min-h-[320px] w-full shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:bg-white/[0.06] md:w-[380px] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-lucky-yellow ring-1 ring-white/10 transition-all duration-500 group-hover:bg-lucky-yellow group-hover:text-lucky-navy">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <span className="font-display text-5xl font-medium text-white/10 transition-colors duration-500 group-hover:text-white/20">
                    {s.tag}
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 font-display text-3xl font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mb-6 text-[15px] leading-relaxed text-white/55">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-lucky-yellow">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-lucky-yellow transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
          {/* trailing spacer so last card clears the viewport */}
          <div className="hidden w-[10vw] shrink-0 md:block" />
        </div>
      </div>
    </section>
  );
}
