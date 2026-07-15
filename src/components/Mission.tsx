import { Anchor, Cable, Fuel, Shield, Wind, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { mission } from "../data/content";

// Keyed by sector name so reordering or extending mission.sectors in
// content.ts can never mis-pair an icon; unknown sectors get the shield.
const sectorIcons: Record<string, LucideIcon> = {
  "Wind farms": Wind,
  Ports: Anchor,
  Pipelines: Fuel,
  "Subsea cables": Cable,
};

export default function Mission() {
  return (
    <section id="mission" className="relative py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {mission.heading}
          </h2>
          <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-primary" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {mission.body}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {mission.sectors.map((sector) => {
            const Icon = sectorIcons[sector] ?? Shield;
            return (
              <span
                key={sector}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                {sector}
              </span>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
