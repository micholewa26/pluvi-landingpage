import { hero, heroStats } from "../data/content";

const heroVideo = `${import.meta.env.BASE_URL}videos/hero.mp4`;

const Hero = () => {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-hero relative overflow-hidden pt-16">
      {/* subtle dotted texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-3 opacity-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-hero-foreground">
                {hero.badge}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {hero.titleLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <span className="text-gradient">{hero.titleGradient}</span>
            </h1>

            <p className="text-lg md:text-xl text-hero-foreground/80 max-w-2xl leading-relaxed">
              {hero.description1}
              <br />
              {hero.description2}
            </p>

            <button
              onClick={scrollToContact}
              className="mt-8 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-3.5 transition-colors"
            >
              {hero.cta}
            </button>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {heroStats.map((stat, i) => (
              <div
                key={stat.value}
                className="opacity-0 animate-fade-up flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-bold text-hero-foreground">
                    {stat.value}
                  </span>
                  <p className="text-xs font-medium tracking-wide text-hero-foreground/60 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="opacity-0 animate-fade-up w-full max-w-5xl mx-auto"
          style={{ animationDelay: "400ms" }}
        >
          <div className="relative">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-primary/20">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg bg-accent/20 border border-accent/30 animate-float" />
            <div
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-primary/20 border border-primary/30 animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
