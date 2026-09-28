import * as React from "react";
import { cn } from "../../lib/utils";

export const SectionHeading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => {
  return (
    <h2
      className={cn(
        "font-serif font-normal text-[clamp(38px,5vw,60px)] leading-[1.05] tracking-[-0.01em] text-text",
        className
      )}
      {...props}
    />
  );
};
