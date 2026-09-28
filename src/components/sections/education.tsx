import { site } from "@/../content/site";
import { SectionHeader } from "@/components/motion/reveal";
import { TimelineRows } from "./timeline-rows";

export function Education() {
  if (!site.education || site.education.length === 0) return null;

  return (
    <section id="education" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
      <SectionHeader index="" title="Education" />
      <TimelineRows items={site.education} />
    </section>
  );
}
