"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { navLinks } from "../../data/nav";
import { profile } from "../../data/profile";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/Sheet";
import { Button } from "../ui/Button";
import { Menu, Sun, Moon } from "lucide-react";
import { cn } from "../../lib/utils";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 h-[72px] transition-all duration-300",
        scrolled && "bg-background/80 backdrop-blur-md border-b border-border"
      )}
    >
      <div className="h-full max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px] flex items-center justify-between">
        <Link href="#home" className="font-sans font-bold text-[20px] text-text z-50 relative">
          Ajay<span className="text-accent">.</span>Rawat
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[28px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative font-sans font-medium text-[14px] transition-colors",
                activeSection === link.href.slice(1) ? "text-text" : "text-muted hover:text-text"
              )}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-[4px] left-0 right-0 h-[2px] bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="h-[44px] w-[44px] rounded-full border border-border-outline flex items-center justify-center text-text hover:border-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <Link href={profile.resume} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Resume</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="h-[44px] w-[44px] rounded-full border border-border-outline flex items-center justify-center text-text hover:border-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="h-[44px] w-[44px] flex items-center justify-center text-text"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col pt-20">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[24px] font-sans font-medium",
                        activeSection === link.href.slice(1) ? "text-accent" : "text-text"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href={profile.resume} target="_blank" rel="noopener noreferrer" className="mt-4">
                    <Button variant="secondary" className="w-full">Resume</Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
