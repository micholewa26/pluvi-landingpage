import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { platform } from "../data/content";

export default function Platform() {
  return (
    <section id="platform" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(188_95%_43%_/_0.08)_0%,transparent_70%)]" />
      <div className="container relative">
        <Reveal>
          <SectionHeading eyebrow={platform.eyebrow} title={platform.heading} />
        </Reveal>

        <Reveal delay={0.1} className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {platform.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {platform.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
