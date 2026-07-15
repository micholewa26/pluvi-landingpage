import { Mail, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { contact, site } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(188_95%_43%_/_0.12)_0%,transparent_65%)]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            {contact.heading}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">{contact.body}</p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 rounded-md bg-primary px-10 py-4 text-lg font-medium text-primary-foreground shadow-cyan transition-all hover:shadow-cyan-strong"
            >
              <Mail className="h-5 w-5" />
              {contact.cta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
