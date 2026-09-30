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
  Mail,
  Send,
  MapPin,
  Briefcase,
  Building2,
  Check,
  FolderLock,
  ExternalLink,
} from "lucide-react";
import * as React from "react";

const Github = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
  "map-pin": MapPin,
  "briefcase": Briefcase,
  "building-2": Building2,
  "check": Check,
  "folder-lock": FolderLock,
  "external-link": ExternalLink,
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
