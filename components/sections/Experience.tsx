import * as React from "react";
import { experience } from "../../data/experience";
import { Eyebrow } from "../ui/Eyebrow";
import { SectionHeading } from "../ui/SectionHeading";
import { StatCard } from "../ui/StatCard";
import { Reveal } from "../animations/Reveal";

export const Experience = () => {
  return (
    <section id="experience" className="w-full pt-[88px] pb-[88px] max-md:py-[56px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px]">
        <div className="grid grid-cols-1 lg:grid-cols-[470px_1fr] gap-[48px] lg:gap-[80px]">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            <Reveal>
              <div>
                <Eyebrow>02 / Experience</Eyebrow>
                <SectionHeading>{experience.h2}</SectionHeading>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="font-sans font-bold text-[22px] text-text">
                    {experience.role}
                  </h3>
                  <div className="font-sans font-semibold text-[18px] text-accent">
                    {experience.company}
                  </div>
                </div>
                <div className="font-mono text-[12px] uppercase tracking-wider text-muted">
                  {experience.meta}
                </div>
                <p className="font-sans text-[15px] text-body mt-2">
                  {experience.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-3 gap-4">
                {experience.stats.map((stat, i) => (
                  <StatCard key={i} value={stat.value} label={stat.label} className="p-4" />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative pt-2 lg:pt-8">
            <div className="absolute left-[13px] top-4 bottom-0 w-[1px] bg-border-strong" />
            
            <div className="flex flex-col gap-8">
              {experience.timeline.map((item, i) => (
                <Reveal key={i} delay={0.3 + i * 0.1}>
                  <div className="relative pl-[44px]">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-[6px] w-[27px] h-[27px] bg-bg rounded-full flex items-center justify-center">
                      <div className="w-[11px] h-[11px] bg-accent rounded-full" />
                    </div>
                    <p className="font-sans text-[16px] leading-[1.6] text-body">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
