import * as React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[16px] border border-border bg-card text-text",
        interactive && "transition-all duration-200 hover:-translate-y-1 hover:border-border-outline",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
