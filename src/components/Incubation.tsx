import { ArrowUpRight, Trophy } from "lucide-react";
import { incubation } from "../data/content";

const Incubation = () => (
  <section id="incubation" aria-labelledby="incubation-title" className="incubation-section">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="incubation-grid">
        <div>
          <p className="incubation-eyebrow">PLUVI / UNICORN HUB</p>
          <h2 id="incubation-title" className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-5">{incubation.heading}</h2>
          <p className="incubation-description">{incubation.description}</p>
        </div>
        <div className="incubation-award">
          <Trophy size={28} aria-hidden="true" className="incubation-trophy" />
          <p className="incubation-event">{incubation.event}</p>
          <h3 className="font-display text-2xl font-medium mb-3">{incubation.award}</h3>
          <p className="text-sm leading-relaxed mb-5">{incubation.awardDescription}</p>
          <a href={incubation.reportUrl} target="_blank" rel="noopener noreferrer" className="incubation-link">
            Zobacz relację organizatora <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only"> (otwiera się w nowej karcie)</span>
          </a>
        </div>
      </div>
      <div className="incubation-funding">
        <img src={`${import.meta.env.BASE_URL}images/unicorn-hub-fundusze-europejskie.jpg`}
          alt="Fundusze Europejskie dla Polski Wschodniej, Rzeczpospolita Polska, Dofinansowane przez Unię Europejską, PARP – Grupa PFR"
          className="incubation-logos" loading="lazy" />
        <p>{incubation.funding}</p>
      </div>
    </div>
  </section>
);

export default Incubation;

