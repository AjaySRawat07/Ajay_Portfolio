"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "h-[52px] px-[28px] rounded-full bg-accent text-accent-ink font-sans font-semibold text-[15px] hover:-translate-y-[1px] hover:brightness-105 active:scale-97 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-3 focus-visible:ring-offset-bg":
              variant === "primary",
            "h-[52px] px-[28px] rounded-full bg-transparent border border-border-outline text-text font-sans font-semibold text-[15px] hover:border-muted":
              variant === "secondary",
            "h-[44px] w-[44px] rounded-full bg-transparent border border-border-outline text-text hover:border-muted flex-shrink-0":
              variant === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
