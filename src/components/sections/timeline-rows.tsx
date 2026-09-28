import { Reveal } from "@/components/motion/reveal";

export interface TimelineItem {
  dates: string;
  title: string;
  org: string;
  bullets?: string[];
  note?: string;
}

export function TimelineRows({ items }: { items: TimelineItem[] }) {
  return (
    <>
      {items.map((item, i) => (
        <Reveal
          key={i}
          delay={i * 0.1}
          className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-[8px] sm:gap-[30px] py-[30px] border-t border-border ${
            i === items.length - 1 ? "border-b" : ""
          }`}
        >
          <div>
            <span className="mono">{item.dates}</span>
          </div>
          <div>
            <h3 className="font-serif text-[1.9rem] mb-1">{item.title}</h3>
            <span className="text-muted-foreground">{item.org}</span>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-2 text-muted-foreground list-disc pl-5">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="mb-1">{bullet}</li>
                ))}
              </ul>
            )}
            {item.note && <p className="mt-2 text-muted-foreground m-0">{item.note}</p>}
          </div>
        </Reveal>
      ))}
    </>
  );
}
