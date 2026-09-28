import * as React from "react";
import { cn } from "../../lib/utils";

export const Eyebrow: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "font-mono font-medium text-[12px] uppercase tracking-[0.14em] text-accent block mb-4",
        className
      )}
      {...props}
    />
  );
};
