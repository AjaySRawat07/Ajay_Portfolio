"use client"

import { motion, useReducedMotion } from "motion/react";
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
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: reducedMotion ? 0 : 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ index, title }: { index: string; title: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-[18px] mb-[46px]">
      <motion.span
        initial={{ y: reducedMotion ? 0 : 24, opacity: reducedMotion ? 1 : 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mono"
      >
        {index}
      </motion.span>
      <motion.h2
        initial={{ y: reducedMotion ? 0 : 24, opacity: reducedMotion ? 1 : 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(2rem,4.5vw,3.2rem)] font-serif"
      >
        {title}
      </motion.h2>
      <motion.i
        initial={{ scaleX: reducedMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: reducedMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 h-[1px] bg-border origin-left"
      />
    </div>
  );
}
