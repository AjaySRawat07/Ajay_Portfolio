import * as React from "react";
import { highlights } from "../../data/highlights";
import { mindset } from "../../data/mindset";
import { Eyebrow } from "../ui/Eyebrow";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../animations/Reveal";
import { Card } from "../ui/Card";
import { cn } from "../../lib/utils";

export const Highlights = () => {
  return (
    <section id="highlights" className="w-full pt-[88px] pb-[88px] max-md:py-[56px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px]">
        
        {/* Highlights Section */}
        <div className="mb-[120px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <Eyebrow>05 / Highlights</Eyebrow>
              <SectionHeading>{highlights.h2}</SectionHeading>
            </Reveal>
            <Reveal delay={0.1} className="md:max-w-[300px]">
              <p className="font-sans text-[13px] text-muted text-balance md:text-right pb-2">
                {highlights.note}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            {highlights.cards.map((card, i) => (
              <Reveal 
                key={i} 
                delay={0.2 + i * 0.1} 
                className={cn(card.isLarge && "sm:col-span-2 lg:col-span-2")}
              >
                <Card className="p-6 h-full flex flex-col justify-between">
                  <div 
                    className={cn(
                      "font-serif", 
                      card.isLarge ? "text-[clamp(60px,6vw,88px)] text-accent" : "text-[clamp(50px,5vw,70px)] text-text"
                    )}
                  >
                    {card.value}
                  </div>
                  <div className="font-sans text-[15px] text-muted leading-snug">
                    {card.description}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mindset Section */}
        <div>
          <Reveal>
            <Eyebrow>06 / Mindset</Eyebrow>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {mindset.map((item, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <Card className="p-[20px] h-full flex flex-col gap-3 border-border-outline/50 bg-card/50">
                  <span className="font-mono text-[12px] text-faint">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-[15px] text-text mb-1">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[13px] text-muted leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
