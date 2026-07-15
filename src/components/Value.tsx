import { valueSection, valueCards } from "../data/content";

const Value = () => (
  <section id="value" className="py-20 md:py-28 bg-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          {valueSection.heading}
          <span className="text-gradient">{valueSection.headingGradient}</span>
        </h2>
        <p className="text-muted-foreground text-lg">{valueSection.sub}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {valueCards.map((card) => (
          <div
            key={card.title}
            className="group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <card.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Value;
