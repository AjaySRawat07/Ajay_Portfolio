"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";

interface WordRevealProps {
  text: string;
  className?: string;
  delayStart?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({ text, className, delayStart = 0.25 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => {
        const isAccent = word.includes("thoughtful") || word.includes("engineering.");
        return (
          <motion.span
            key={i}
            className={`inline-block mr-[0.25em] ${isAccent ? "text-accent italic" : ""}`}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{
              duration: 0.9,
              delay: delayStart + i * 0.08,
              ease: [0.2, 0.7, 0.2, 1],
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
