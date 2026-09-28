import * as React from "react";
import { cn } from "../../lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "tech" | "skill";
  skillType?: "professional" | "learning";
  children: React.ReactNode;
}

export function Chip({ className, variant = "tech", skillType, children, ...props }: ChipProps) {
  if (variant === "skill") {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-full font-sans font-medium text-[14px] px-[14px] py-[9px] border border-border-strong bg-transparent text-body whitespace-nowrap",
          className
        )}
        {...props}
      >
        <span
          className={cn("mr-2 h-2 w-2 rounded-full", {
            "bg-accent": skillType === "professional",
            "bg-transparent border-[1.5px] border-faint": skillType === "learning",
          })}
        />
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[8px] font-mono text-[12px] px-[14px] py-[10px] border border-border-strong text-body whitespace-nowrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
