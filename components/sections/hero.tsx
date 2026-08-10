"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useSectionProgress } from "@/lib/use-scroll-progress";

const LINES = ["Move Smarter.", "Move Safer.", "Move Lucky."];
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  // Pick source by viewport (media attr on <source> is unreliable in Chrome).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    v.src = desktop ? "/media/hero.mp4" : "/media/hero-mobile.mp4";
    v.load();
    v.play().catch(() => {});
  }, []);

  const scrollYProgress = useSectionProgress(ref, [0, 0], [1, 0]);

  // video scales down + rounds as you scroll; overlay copy fades away
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const overlayY = useTransform(scrollYProgress, [0, 0.6], [0, -120]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.42], [1, 0]);
  const darken = useTransform(scrollYProgress, [0, 1], [0.42, 0.72]);

  return (
    <section ref={ref} id="top" className="relative h-[130vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* video layer */}
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="absolute inset-0 overflow-hidden bg-lucky-navy"
        >
          {/* blur placeholder while video loads */}
          <div
            aria-hidden
            className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
            style={{ backgroundImage: "url(/media/hero-poster.jpg)" }}
          />
          <motion.video
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/media/hero-poster.jpg"
            onLoadedData={() => setReady(true)}
          />

          {/* readability overlays */}
          <motion.div
            aria-hidden
            style={{ opacity: darken }}
            className="absolute inset-0 bg-lucky-navy"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-lucky-navy via-lucky-navy/10 to-lucky-navy/40"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-lucky-navy/60 via-transparent to-transparent"
          />
        </motion.div>

        {/* copy */}
        <motion.div
          style={{ y: overlayY, opacity: overlayOpacity }}
          className="relative z-10 flex h-full items-center"
        >
          <div className="container-x">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.7, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lucky-yellow" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                Australia&apos;s Premium Removalist
              </span>
            </motion.div>

            <h1 className="display max-w-4xl text-white [font-size:clamp(2.75rem,8vw,7rem)]">
              {LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      delay: 1.75 + i * 0.12,
                      duration: 1,
                      ease: EASE,
                    }}
                  >
                    {i === 2 ? (
                      <span className="text-lucky-yellow">{line}</span>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.15, duration: 0.8, ease: EASE }}
              className="mt-8 max-w-xl text-lg text-white/75 md:text-xl"
            >
              Australia&apos;s premium removal experience — designed for families,
              professionals and businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.32, duration: 0.8, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#contact" variant="secondary">
                Get Free Quote <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#process" variant="ghost" className="text-white">
                <Play className="h-3.5 w-3.5 fill-current" /> See Our Process
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
              Scroll
            </span>
            <div className="flex h-10 w-6 justify-center rounded-full border border-white/25 pt-2">
              <motion.span
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-lucky-yellow"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
