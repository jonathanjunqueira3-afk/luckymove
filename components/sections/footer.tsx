"use client";

import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";

const FOOTER_HREFS: Record<string, string> = {
  About: "/about",
  Reviews: "/#reviews",
  Contact: "/#contact",
  Careers: "/#contact",
  Insurance: "/#faq",
};

const COLUMNS = [
  {
    title: "Services",
    links: ["Residential", "Commercial", "Interstate", "Packing", "Furniture"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Reviews", "Insurance", "Contact"],
  },
  {
    title: "Cities",
    links: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-24">
      <div className="container-x">
        {/* giant wordmark */}
        <div className="grid gap-12 border-t border-lucky-navy/10 pt-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <a
              href="/"
              className="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tightest"
            >
              <img
                src="/media/logo-icon.png"
                alt="LuckyMove"
                className="h-9 w-9 object-contain"
              />
              Lucky<span className="text-lucky-blue">Move</span>
            </a>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-lucky-navy/55">
              Australia&apos;s premium removal experience — fully insured,
              white-glove moving for families, professionals and businesses.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lucky-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-lucky-blue"
            >
              Get Free Quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-lucky-navy/40">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={FOOTER_HREFS[link] ?? "/#services"}
                        className="group inline-flex text-[15px] text-lucky-navy/70 transition-colors duration-300 hover:text-lucky-blue"
                      >
                        <span className="relative">
                          {link}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-lucky-blue transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* nav + legal */}
        <div className="mt-16 flex flex-col gap-6 border-t border-lucky-navy/10 py-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-lucky-navy/60 transition-colors hover:text-lucky-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-lucky-navy/40">
            © {new Date().getFullYear()} LuckyMove Removals. All rights reserved.
          </p>
        </div>
      </div>

      {/* oversized brand mark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <div className="whitespace-nowrap text-center font-display text-[19vw] font-bold leading-none tracking-tightest text-lucky-navy/[0.04]">
          LuckyMove
        </div>
      </div>
    </footer>
  );
}
