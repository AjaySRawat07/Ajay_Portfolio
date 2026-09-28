"use client";

import { site } from "@/../content/site";
import { SectionHeader } from "@/components/motion/reveal";
import { motion, useScroll, useSpring } from "motion/react";
import { Icon } from "@/lib/icons";
import { useRef } from "react";
import { useReducedMotion } from "motion/react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  if (!site.experience || site.experience.length === 0) return null;

  return (
    <section id="experience" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
      <SectionHeader index="03" title="Experience" />
      <div ref={containerRef} className="relative pl-8 md:pl-12">
        {/* Base line */}
        <div className="absolute top-0 bottom-0 left-[11px] md:left-[11px] w-[1px] bg-border origin-top" />
        {/* Progress line */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute top-0 bottom-0 left-[11px] md:left-[11px] w-[2px] -ml-[0.5px] bg-gradient-to-b from-primary to-accent-2"
        />

        <div className="flex flex-col gap-12">
          {site.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ y: reducedMotion ? 0 : 36, opacity: reducedMotion ? 1 : 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative"
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: reducedMotion ? 1 : 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute -left-[32px] md:-left-[44px] top-8 w-[14px] h-[14px] rounded-full border-2 border-primary bg-background z-10"
              />

              {/* Card */}
              <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-[20px] md:p-[32px] transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_var(--color-primary)]">
                
                {/* Meta row */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="mono border border-border rounded-full px-3 py-1">{exp.dates}</span>
                    {exp.current && (
                      <span className="flex items-center gap-2 text-[0.8rem] text-primary font-medium tracking-wide bg-primary/10 px-3 py-1 rounded-full uppercase">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-[0.85rem] text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Icon name="map-pin" className="w-4 h-4" />{exp.location}</span>
                    <span className="flex items-center gap-1.5"><Icon name="briefcase" className="w-4 h-4" />{exp.type}</span>
                  </div>
                </div>

                {/* Organization */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Icon name="building-2" className="w-6 h-6 text-foreground" />
                  <h3 className="font-medium text-[1.2rem] text-foreground">{exp.org}</h3>
                  {exp.duration && <span className="mono text-muted-foreground ml-2">{exp.duration}</span>}
                </div>

                {/* Roles */}
                <div className="flex flex-col gap-8">
                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx}>
                      <div className="mb-4">
                        <h4 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)]">{role.title}</h4>
                        {exp.roles.length > 1 && <span className="mono text-muted-foreground">{role.dates}</span>}
                      </div>
                      <ul className="m-0 p-0 list-none flex flex-col gap-3">
                        {role.bullets.map((bullet, bIdx) => (
                          <motion.li
                            key={bIdx}
                            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: reducedMotion ? 0 : bIdx * 0.06 }}
                            className="flex items-start gap-3 text-muted-foreground text-[0.95rem]"
                          >
                            <Icon name="check" className="w-[16px] h-[16px] text-primary shrink-0 mt-[3px]" />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-border">
                    {exp.metrics.slice(0, 3).map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="font-serif text-[1.8rem] text-primary">{metric.value}</span>
                        <span className="mono text-muted-foreground">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Company Projects */}
                {exp.companyProjects && exp.companyProjects.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="mono text-muted-foreground mb-4">COMPANY PROJECTS</div>
                    <div className="flex flex-col gap-4">
                      {exp.companyProjects.map((proj, pIdx) => (
                        <div key={pIdx} className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <Icon name="folder-lock" className="w-4 h-4 text-primary" />
                            <h5 className="font-medium text-foreground">{proj.title}</h5>
                          </div>
                          <p className="text-[0.9rem] text-muted-foreground">{proj.description}</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {proj.stack.map((s, sIdx) => (
                              <span key={sIdx} className="mono text-[0.7rem] bg-secondary/50 px-2 py-0.5 rounded border border-border text-muted-foreground">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stack */}
                {exp.stack && exp.stack.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-border">
                    {exp.stack.map((s, sIdx) => (
                      <span key={sIdx} className="mono text-[0.7rem] bg-secondary/50 px-3 py-1.5 rounded-full border border-border text-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
