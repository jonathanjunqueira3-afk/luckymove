"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 15, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.35);
    y.set(my * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    primary:
      "bg-lucky-blue text-white shadow-[0_10px_40px_-12px_rgba(0,87,255,0.6)] hover:shadow-[0_16px_50px_-10px_rgba(0,87,255,0.7)]",
    secondary:
      "bg-lucky-yellow text-lucky-navy shadow-[0_10px_40px_-12px_rgba(255,212,0,0.7)]",
    ghost:
      "bg-transparent text-current ring-1 ring-inset ring-current/25 hover:ring-current/50",
  }[variant];

  const Inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-flex"
    >
      <span
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold transition-shadow duration-500",
          styles,
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant !== "ghost" && (
          <span className="absolute inset-0 z-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-out-expo group-hover:translate-x-0" />
        )}
      </span>
    </motion.div>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        onClick={onClick}
        className="inline-flex"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {Inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="inline-flex">
      {Inner}
    </button>
  );
}
