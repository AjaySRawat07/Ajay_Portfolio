import * as React from "react";
import Link from "next/link";
import { profile } from "../../data/profile";
import { socials } from "../../data/socials";
import { Button } from "../ui/Button";
import { Chip } from "../ui/Chip";
import { Eyebrow } from "../ui/Eyebrow";
import { WordReveal } from "../animations/WordReveal";
import { Reveal } from "../animations/Reveal";
import { Float } from "../animations/Float";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[780px] w-full pt-[88px] pb-[88px] max-md:py-[56px] flex items-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px] w-full grid grid-cols-1 lg:grid-cols-[minmax(0,760px)_1fr] gap-[48px] lg:gap-[64px] items-center relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col items-start max-w-full">
          <Reveal delay={0}>
            <Eyebrow>{profile.eyebrow}</Eyebrow>
          </Reveal>

          <h1 className="font-serif font-normal text-[clamp(44px,6vw,76px)] leading-[1.05] tracking-[-0.01em] text-text mb-6">
            <WordReveal text="Building scalable products with thoughtful engineering." delayStart={0.25} />
          </h1>

          <Reveal delay={1.0}>
            <p className="font-sans text-[19px] leading-[1.65] text-body max-w-[600px] mb-10 text-balance">
              I'm Ajay Singh Rawat, a Software Engineer with 3+ years of experience building modern web applications, creating seamless user experiences and solving complex engineering challenges.
            </p>
          </Reveal>

          <Reveal delay={1.15} className="flex flex-wrap items-center gap-4 mb-10">
            <Link href="#projects">
              <Button variant="primary" className="gap-2">
                View My Work
                <span aria-hidden="true">→</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="secondary">Let's Connect</Button>
            </Link>
          </Reveal>

          <Reveal delay={1.3} className="flex flex-wrap items-center gap-3 mb-8">
            <Chip variant="tech">React</Chip>
            <Chip variant="tech">Next.js</Chip>
            <Chip variant="tech">Node.js</Chip>
            <Chip variant="tech">TypeScript</Chip>
          </Reveal>

          <Reveal delay={1.4} className="flex flex-wrap items-center gap-6">
            <Link
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[14px] font-sans font-medium text-muted hover:text-text transition-colors"
            >
              GitHub <ArrowUpRight size={14} />
            </Link>
            <Link
              href={socials.linkedin !== "[PLACEHOLDER: LINKEDIN URL]" ? socials.linkedin : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[14px] font-sans font-medium text-muted hover:text-text transition-colors"
            >
              LinkedIn <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        {/* Right Column: Code Card */}
        <div className="relative w-full max-w-[464px] mx-auto lg:ml-auto lg:mr-0 z-10 mt-12 lg:mt-0">
          <Reveal delay={0.6}>
            <Float duration={7} yOffset={-10}>
              <div className="bg-card rounded-[16px] border border-border shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="px-6 py-4 border-b border-border flex items-center gap-2">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-border-outline" />
                    <div className="w-3 h-3 rounded-full bg-border-outline" />
                    <div className="w-3 h-3 rounded-full bg-border-outline" />
                  </div>
                  <div className="font-mono text-[13px] text-faint">engineer.ts</div>
                </div>
                
                <div className="p-6 font-mono text-[15px] leading-loose text-faint overflow-x-auto">
                  <Reveal delay={0.8}><div><span className="text-accent">const</span> <span className="text-text">engineer</span> = {"{"}</div></Reveal>
                  <Reveal delay={0.94}><div className="pl-6"><span className="text-text">name</span>: <span className="text-code-string">"Ajay Singh Rawat"</span>,</div></Reveal>
                  <Reveal delay={1.08}><div className="pl-6"><span className="text-text">role</span>: <span className="text-code-string">"Software Engineer"</span>,</div></Reveal>
                  <Reveal delay={1.22}><div className="pl-6"><span className="text-text">experience</span>: <span className="text-code-string">"3+ years"</span>,</div></Reveal>
                  <Reveal delay={1.36}><div className="pl-6"><span className="text-text">stack</span>: [<span className="text-code-string">"React"</span>, <span className="text-code-string">"Next.js"</span>, <span className="text-code-string">"Node.js"</span>],</div></Reveal>
                  <Reveal delay={1.5}><div className="pl-6"><span className="text-text">base</span>: <span className="text-code-string">"Pune, India"</span>,</div></Reveal>
                  <Reveal delay={1.64}><div>{"};"}</div></Reveal>
                  <Reveal delay={1.78}>
                    <div className="mt-2 text-accent animate-pulse font-bold">▍</div>
                  </Reveal>
                </div>

                <div className="px-6 py-4 border-t border-border bg-card-inset flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                  <span className="font-sans text-[13px] text-text">Open to opportunities</span>
                </div>
              </div>
            </Float>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
