"use client";

const ITEMS = [
  "Residential",
  "Commercial",
  "Interstate",
  "Packing",
  "Furniture",
  "Fully Insured",
  "White-Glove",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-lucky-navy/10 bg-lucky-yellow py-5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-8 font-display text-lg font-semibold tracking-tight text-lucky-navy md:text-xl">
                  {item}
                </span>
                <span className="text-lucky-blue">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
