"use client";

import * as React from "react";
import { motion } from "motion/react";

interface FloatProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export const Float: React.FC<FloatProps> = ({ children, className, duration = 7, yOffset = -10 }) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, yOffset, 0] }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};
