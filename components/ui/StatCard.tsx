import * as React from "react";
import { cn } from "../../lib/utils";
import { Card } from "./Card";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  isLarge?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, isLarge, className, ...props }) => {
  return (
    <Card className={cn("p-6 flex flex-col justify-between", className)} {...props}>
      <div
        className={cn("font-serif text-accent", {
          "text-[clamp(46px,5vw,88px)]": isLarge,
          "text-[clamp(46px,4vw,70px)]": !isLarge,
        })}
      >
        {value}
      </div>
      <div className="text-[13px] text-muted mt-4">
        {label}
      </div>
    </Card>
  );
};
