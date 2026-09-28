import {
  SunMoon,
  ArrowUpRight,
  Download,
  ArrowRight,
  LockKeyhole,
  Cloud,
  Share2,
  ShieldCheck,
  LayoutTemplate,
  Server,
  Database,
  CloudCog,
  Code,
  TestTubes,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import * as React from "react";

export const icons = {
  "sun-moon": SunMoon,
  "arrow-up-right": ArrowUpRight,
  "download": Download,
  "arrow-right": ArrowRight,
  "lock-keyhole": LockKeyhole,
  "cloud": Cloud,
  "share-2": Share2,
  "shield-check": ShieldCheck,
  "layout-template": LayoutTemplate,
  "server": Server,
  "database": Database,
  "cloud-cog": CloudCog,
  "code": Code,
  "test-tubes": TestTubes,
  "github": Github,
  "linkedin": Linkedin,
  "mail": Mail,
  "send": Send,
} as const;

export type IconName = keyof typeof icons | (string & {});

export function Icon({ name, className, ...props }: { name: IconName; className?: string } & React.SVGProps<SVGSVGElement>) {
  if (name in icons) {
    const Component = icons[name as keyof typeof icons];
    return <Component className={className} {...props} />;
  }

  if (process.env.NODE_ENV === "development") {
    console.warn(`Unknown icon requested: ${name}`);
  }

  return null;
}
