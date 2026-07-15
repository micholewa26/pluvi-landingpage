import { Radar, ScanSearch, ListChecks } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { solutions } from "../data/content";

const icons = [Radar, ScanSearch, ListChecks];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="container relative">
        <Reveal>
          <SectionHeading
            eyebrow={solutions.eyebrow}
            title={solutions.heading}
            subtitle={solutions.subheading}
          />
        </Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.items.map((solution, i) => {
            // Modulo keeps a content.ts edit (4th item) from indexing past
            // the icon list and white-screening the page.
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={solution.title} delay={i * 0.1}>
                <div className="card-glow group relative h-full overflow-hidden p-8">
                  <span className="absolute right-6 top-6 font-mono text-sm text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mb-6 h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-3 font-display text-2xl font-semibold">{solution.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
