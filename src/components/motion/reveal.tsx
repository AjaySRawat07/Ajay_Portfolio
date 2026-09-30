"use client"

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import * as React from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 36 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: reducedMotion ? 0 : 0.8, delay, ease: [0.22, 1, 0.36, 1] as const }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function SectionHeader({ index, title }: { index: string; title: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex items-center gap-[18px] mb-[46px]">
        <m.span
          initial={{ y: reducedMotion ? 0 : 24, opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mono"
        >
          {index}
        </m.span>
        <m.h2
          initial={{ y: reducedMotion ? 0 : 24, opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-[clamp(2rem,4.5vw,3.2rem)] font-serif"
        >
          {title}
        </m.h2>
        <m.i
          initial={{ scaleX: reducedMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: reducedMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex-1 h-[1px] bg-border origin-left"
        />
      </div>
    </LazyMotion>
  );
}
