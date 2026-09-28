import * as React from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../animations/Reveal";
import { Card } from "../ui/Card";

export const About = () => {
  return (
    <section id="about" className="w-full pt-[88px] pb-[88px] max-md:py-[56px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[64px] mb-16">
          <div className="lg:w-[460px] flex-shrink-0">
            <Reveal>
              <Eyebrow>01 / About</Eyebrow>
              <SectionHeading>Engineering with a product mindset.</SectionHeading>
            </Reveal>
          </div>
          <div className="flex-1 text-[16px] leading-[1.65] text-body flex flex-col gap-6">
            <Reveal delay={0.1}>
              <p>
                I'm a Software Engineer with 3+ years of experience building scalable, user-focused web applications. I work across the stack: <strong className="text-text font-semibold">React.js</strong>, <strong className="text-text font-semibold">Next.js</strong> and <strong className="text-text font-semibold">TypeScript</strong> on the front end, <strong className="text-text font-semibold">Node.js</strong> services and REST APIs behind them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                At Vaultize, a product-based company building enterprise file sharing and document collaboration, I build reusable components, implement <strong className="text-text font-semibold">authentication and access control</strong>, write automated tests and optimize performance in production.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                I care about maintainable code, thoughtful reviews and reliable delivery, and I enjoy working through real engineering problems in collaborative teams.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              num: "01",
              title: "Frontend & backend",
              desc: "Reusable UI, REST APIs and services.",
            },
            {
              num: "02",
              title: "Production mindset",
              desc: "Debugging and optimizing live systems.",
            },
            {
              num: "03",
              title: "Quality",
              desc: "Jest and Playwright tests, code reviews.",
            },
            {
              num: "04",
              title: "Collaboration",
              desc: "Pull-request reviews and shared standards.",
            },
          ].map((card, i) => (
            <Reveal key={card.num} delay={0.4 + i * 0.1}>
              <Card interactive className="p-6 h-full flex flex-col gap-3">
                <span className="font-mono text-accent text-[13px]">{card.num}</span>
                <div>
                  <h3 className="font-sans font-semibold text-text text-[16px] mb-1">{card.title}</h3>
                  <p className="font-sans text-[14px] text-muted">{card.desc}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
