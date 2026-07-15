import { moduleSection } from "../data/content";
import sterownikImg from "../assets/sterownik.png";

const Module = () => (
  <section id="modules" className="py-20 md:py-28 bg-hero relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Jeden <span className="text-gradient">moduł</span>
        </h2>
        <p className="text-[hsl(220,15%,75%)] text-lg">{moduleSection.sub}</p>
      </div>

      <div className="flex justify-center max-w-5xl mx-auto">
        <div className="w-full max-w-[600px] group relative bg-[hsl(220,30%,14%)] rounded-2xl border border-primary/30 p-6 md:p-8 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)] hover:border-primary/50 hover:shadow-[0_0_60px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300">
          <div className="aspect-square rounded-xl bg-[hsl(220,25%,18%)] border border-primary/20 mb-6 overflow-hidden flex items-center justify-center p-4">
            <img
              src={sterownikImg}
              alt="Sterownik PLUVI"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-semibold text-accent mb-3">
            {moduleSection.badge}
          </div>
          <h3 className="font-display text-2xl font-bold mb-3 text-[hsl(220,20%,95%)]">
            {moduleSection.title}
          </h3>
          <p className="text-sm leading-relaxed mb-6 text-[hsl(220,15%,70%)]">
            {moduleSection.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {moduleSection.chips.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-medium text-[hsl(220,15%,75%)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Module;
