import { FileSearch, Fingerprint, Gauge, FileText, ShieldCheck, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { product, site } from "../data/content";
// To update the product screenshot: overwrite this file (keep the same name)
// and update SCREENSHOT_SIZE below to the new image's pixel dimensions.
import consoleScreenshot from "../assets/screenshots/osint-agent.webp";

const SCREENSHOT_SIZE = { width: 1843, height: 924 };

// Order matches product.features in content.ts.
const featureIcons = [FileSearch, Fingerprint, Gauge, FileText];

/** Mock of the in-app OSINT Verdict card — mirrors the vessel visible in the
 *  screenshot and brings the product's threat-color language onto the page. */
function VerdictCard() {
  return (
    <div
      aria-hidden
      className="absolute -bottom-6 -left-3 hidden w-60 rounded-lg border border-border bg-card/95 p-4 shadow-strong backdrop-blur md:block lg:-left-8"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        OSINT Verdict
      </p>
      <div className="mt-2 flex items-baseline gap-3">
        <span className="font-display text-4xl font-bold text-emerald-400">
          {product.verdict.score}
        </span>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
          {product.verdict.level}
        </span>
      </div>
      <div className="mt-3 space-y-1.5">
        {product.verdict.rows.map((row) => (
          <p key={row} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            {row}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Console() {
  return (
    <section id="console" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="container relative">
        <Reveal>
          <SectionHeading eyebrow={product.eyebrow} title={product.heading} subtitle={product.tagline} />
        </Reveal>

        {/* Stats row */}
        <Reveal delay={0.1}>
          <dl className="mx-auto mb-14 grid max-w-3xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {product.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-4xl font-bold text-primary">{stat.value}</dd>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Screenshot with verdict overlay */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-lg border border-border bg-background shadow-strong">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                  Operator console · Baltic
                </span>
              </div>
              <img
                src={consoleScreenshot}
                alt={product.screenshotAlt}
                width={SCREENSHOT_SIZE.width}
                height={SCREENSHOT_SIZE.height}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <VerdictCard />
          </div>
        </Reveal>

        {/* Feature grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {product.features.map((feature, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <Reveal key={feature.title} delay={(i % 2) * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-6">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-base font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Trust line + CTA */}
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl text-center">
          <p className="mx-auto flex max-w-2xl items-start justify-center gap-3 text-left text-sm leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span>{product.trustLine}</span>
          </p>
          <a
            href={`mailto:${site.email}?subject=Walkthrough%20request`}
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 font-medium text-primary-foreground shadow-cyan transition-all hover:shadow-cyan-strong"
          >
            {product.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
