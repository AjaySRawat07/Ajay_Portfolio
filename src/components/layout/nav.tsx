import Link from "next/link";
import { site } from "@/../content/site";
import { ThemeToggle } from "./theme-toggle";
import { Icon } from "@/lib/icons";

export function Nav() {
  return (
    <nav className="fixed top-[env(safe-area-inset-top,0px)] left-0 right-0 z-40 flex items-center justify-between gap-[14px] px-[max(5vw,20px)] py-[14px] backdrop-blur-[14px] border-b border-border flex-wrap max-[760px]:flex-wrap" style={{ background: "color-mix(in srgb, var(--color-background) 72%, transparent)" }}>
      <Link href="#top" className="flex items-center gap-[10px] no-underline font-medium text-[0.95rem]">
        <i className="w-[34px] h-[34px] border border-border rounded-[9px] grid place-items-center font-serif not-italic text-[1.1rem] text-accent">
          {site.person.logoLetter}
        </i>
        {site.person.name}
      </Link>
      
      <div className="flex gap-[28px] max-[760px]:order-3 max-[760px]:w-full max-[760px]:overflow-x-auto max-[760px]:gap-[20px]">
        <Link href="#about" className="text-muted-foreground no-underline text-[0.86rem] transition-colors duration-200 hover:text-foreground">About</Link>
        {site.skills.length > 0 && <Link href="#skills" className="text-muted-foreground no-underline text-[0.86rem] transition-colors duration-200 hover:text-foreground">Skills</Link>}
        <Link href="#experience" className="text-muted-foreground no-underline text-[0.86rem] transition-colors duration-200 hover:text-foreground">Experience</Link>
        <Link href="#projects" className="text-muted-foreground no-underline text-[0.86rem] transition-colors duration-200 hover:text-foreground">Projects</Link>
        <Link href="#contact" className="text-muted-foreground no-underline text-[0.86rem] transition-colors duration-200 hover:text-foreground">Contact</Link>
      </div>

      <div className="flex gap-[10px] items-center">
        <ThemeToggle />
        <Link 
          href={site.nav.cta.href} 
          className="inline-flex items-center gap-[8px] px-[20px] py-[10px] border border-foreground rounded-full no-underline text-[0.86rem] bg-foreground text-background transition-all duration-250 hover:bg-accent hover:border-accent hover:text-white"
        >
          {site.nav.cta.label} <Icon name="arrow-up-right" className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
