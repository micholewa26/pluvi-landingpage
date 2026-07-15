import { useState } from "react";
import { applications, applicationsSection } from "../data/content";

const Applications = () => {
  const [active, setActive] = useState(applications[0].id);
  const current = applications.find((a) => a.id === active)!;

  return (
    <section id="applications" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Gdzie to działa?</span>
          </h2>
          <p className="text-muted-foreground text-lg">{applicationsSection.sub}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="w-full grid grid-cols-3 h-auto bg-muted/60 p-1 rounded-xl"
            role="tablist"
          >
            {applications.map((app) => (
              <button
                key={app.id}
                role="tab"
                aria-selected={active === app.id}
                onClick={() => setActive(app.id)}
                className={`flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm transition-all ${
                  active === app.id
                    ? "bg-card shadow-md text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <app.icon size={18} />
                <span className="hidden sm:inline">{app.label}</span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 items-center">
            <div className="aspect-[4/3] rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden">
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">{current.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{current.desc}</p>
              <ul className="space-y-3">
                {current.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
