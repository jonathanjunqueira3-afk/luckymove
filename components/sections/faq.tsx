"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";
import { Reveal, SplitWords } from "@/components/ui/reveal";

function Item({
  faq,
  open,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-lucky-navy/10">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-lucky-blue md:text-2xl">
          {faq.q}
        </span>
        <span
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
            open
              ? "rotate-45 border-lucky-blue bg-lucky-blue text-white"
              : "border-lucky-navy/15 text-lucky-navy"
          }`}
        >
          <Plus className="h-5 w-5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-8 text-[15px] leading-relaxed text-lucky-navy/60 md:text-base">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-gray-light py-28 md:py-40">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-8 bg-lucky-blue" /> FAQ
            </span>
          </Reveal>
          <h2 className="display text-4xl md:text-5xl">
            <SplitWords text="Questions," />
            <br />
            <SplitWords
              text="answered."
              wordClassName="text-lucky-blue"
              delay={0.15}
            />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lucky-navy/60">
              Everything you need to know before your move. Still curious?
              We&apos;re a message away.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <div>
              {FAQS.map((faq, i) => (
                <Item
                  key={faq.q}
                  faq={faq}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
