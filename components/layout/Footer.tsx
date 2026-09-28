"use client";

import * as React from "react";
import Link from "next/link";
import { profile } from "../../data/profile";
import { navLinks } from "../../data/nav";
import { ArrowUp } from "lucide-react";
import { Float } from "../animations/Float";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const shortcuts = navLinks.filter(link => ["About", "Experience", "Projects", "Skills"].includes(link.label));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px] py-[56px] md:py-[88px] flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-1">
          <div className="font-sans font-bold text-[16px] text-text">
            {profile.name}
          </div>
          <div className="font-sans text-[14px] text-muted">
            {profile.eyebrow}
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-4">
          {shortcuts.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-medium text-[14px] text-muted hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="font-sans text-[14px] text-muted">
            © {currentYear} {profile.name}
          </div>
          <Float duration={4} yOffset={-6}>
            <button
              onClick={scrollToTop}
              className="h-[44px] w-[44px] rounded-full border border-border-outline flex items-center justify-center text-text hover:border-muted transition-colors flex-shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </Float>
        </div>
      </div>
    </footer>
  );
};
