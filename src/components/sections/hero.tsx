"use client"

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/../content/site";
import { Icon } from "@/lib/icons";
import { OrbitStage } from "./orbit";

export function Hero() {
  const reducedMotion = useReducedMotion();

  const getTransition = (duration: number, delay: number, staggerConfig?: any) => {
    if (reducedMotion) return { duration: 0, delay: 0 };
    return {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      ...staggerConfig
    };
  };

  return (
    <section id="top" className="min-h-screen grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[30px] items-center pt-[120px] max-w-[1120px] mx-auto px-[max(5vw,20px)] pb-[10px]">
      <div>
        <motion.span
          initial={{ y: reducedMotion ? 0 : 14, opacity: reducedMotion ? 1 : 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={getTransition(0.6, 0)}
          className="mono block"
        >
          {site.hero.eyebrow}
        </motion.span>
        
        <div className="italic text-[clamp(1.6rem,3vw,2.2rem)] font-serif text-muted-foreground mt-[18px]">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              initial={{ y: reducedMotion ? 0 : "110%" }}
              animate={{ y: 0 }}
              transition={getTransition(1, 0.1)}
              className="block"
            >
              {site.person.greeting}
            </motion.span>
          </span>
        </div>
        
        <h1 className="text-[clamp(3.2rem,8vw,6rem)] tracking-tight font-serif m-0 leading-[1.05]">
          {site.person.nameLines.map((line, idx) => (
            <span key={idx} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: reducedMotion ? 0 : "110%" }}
                animate={{ y: 0 }}
                transition={getTransition(1, 0.1 + (idx + 1) * 0.12)}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <svg className="block w-[min(300px,60%)] h-[14px] mt-[4px]" viewBox="0 0 300 14" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: reducedMotion ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 1.1, ease: "easeInOut", delay: 0.9 }}
            d="M2 10C60 2 140 14 298 4"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <motion.p
          initial={{ y: reducedMotion ? 0 : 24, opacity: reducedMotion ? 1 : 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={getTransition(0.8, 0.7)}
          className="text-muted-foreground max-w-[470px] my-[26px] mb-[30px]"
        >
          {site.hero.lead}
        </motion.p>

        <motion.div
          initial={{ y: reducedMotion ? 0 : 24, opacity: reducedMotion ? 1 : 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={getTransition(0.8, 0.7 + 0.12)}
          className="flex gap-[14px] flex-wrap items-center"
        >
          {site.person.resume.file && (
            <a
              href={site.person.resume.file}
              download
              className="inline-flex items-center gap-[8px] px-[20px] py-[10px] border border-foreground rounded-full no-underline text-[0.86rem] bg-foreground text-background transition-all duration-250 hover:bg-accent hover:border-accent hover:text-white"
            >
              <Icon name="download" className="w-4 h-4" /> {site.person.resume.label}
            </a>
          )}
          <a
            href={site.hero.secondaryCta.href}
            className="inline-flex items-center gap-[8px] no-underline text-muted-foreground text-[0.9rem] transition-all duration-200 hover:text-foreground hover:gap-[12px]"
          >
            {site.hero.secondaryCta.label} <Icon name="arrow-right" className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ y: reducedMotion ? 0 : 24, opacity: reducedMotion ? 1 : 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={getTransition(0.8, 0.7 + 0.24)}
          className="flex gap-[34px] mt-[44px] pt-[22px] border-t border-border flex-wrap"
        >
          {site.hero.meta.map((item, idx) => (
            <div key={idx} className="text-[0.86rem]">
              <span className="block text-muted-foreground mono !text-[0.68rem] tracking-[0.12em] mb-1">
                {item.label}
              </span>
              {item.value}
            </div>
          ))}
        </motion.div>
      </div>
      
      <OrbitStage />
    </section>
  );
}
