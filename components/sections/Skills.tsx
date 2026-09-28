import * as React from "react";
import { skillsData } from "../../data/skills";
import { Eyebrow } from "../ui/Eyebrow";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../animations/Reveal";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";

export const Skills = () => {
  return (
    <section id="skills" className="w-full pt-[88px] pb-[88px] max-md:py-[56px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <Reveal>
            <div>
              <Eyebrow>04 / Skills</Eyebrow>
              <SectionHeading>Tools I reach for.</SectionHeading>
            </div>
          </Reveal>
          
          <Reveal delay={0.2} className="flex items-center gap-6 pb-2">
            <div className="flex items-center gap-2 font-sans text-[14px] text-body">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Used professionally
            </div>
            <div className="flex items-center gap-2 font-sans text-[14px] text-body">
              <span className="w-[8px] h-[8px] rounded-full border-[1.5px] border-faint bg-transparent" />
              Projects & learning
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {skillsData.map((category, i) => (
            <Reveal key={category.category} delay={0.2 + i * 0.1}>
              <Card className="p-[26px] h-full flex flex-col">
                <h3 className="font-sans font-semibold text-[17px] text-text mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-[10px] mt-auto">
                  {category.items.map((item) => (
                    <Chip 
                      key={item.name} 
                      variant="skill" 
                      skillType={item.professional ? "professional" : "learning"}
                    >
                      {item.name}
                    </Chip>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
