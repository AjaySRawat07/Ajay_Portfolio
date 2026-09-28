import { site } from "@/../content/site";
import { SectionHeader } from "@/components/motion/reveal";
import { TimelineRows } from "./timeline-rows";

export function Experience() {
  if (site.experience.length === 0) return null;

  return (
    <section id="experience" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
      <SectionHeader index="03" title="Experience" />
      <TimelineRows items={site.experience} />
    </section>
  );
}
