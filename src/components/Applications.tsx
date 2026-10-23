import { Link } from "react-router-dom";
import { pumpTypes } from "../data/configurator";
import pumpPhoto from "../assets/pompa-pluvi-w-sadzie.jpg";

export default function Applications() {
  return <section className="site-page container mx-auto px-4 lg:px-8">
    <p className="section-kicker">POMPY I URZĄDZENIA</p><h1 className="page-heading">Twoja pompa.<br />Pod kontrolą PLUVI.</h1>
    <p className="page-intro">Pompy spalinowe typu GX 160 i GX 270, pompy elektryczne lub własne urządzenie. Wybierz wariant, a następnie dopasuj zestaw pomiarowy.</p>
    <div className="pump-catalog">
      <figure><img src={pumpPhoto} alt="Pompa spalinowa ze sterownikiem PLUVI w sadzie — przykładowa instalacja" className="w-full aspect-[4/5] object-cover object-[43%_50%] rounded-xl" /><figcaption className="text-xs text-muted-foreground mt-3">Przykładowa instalacja PLUVI w sadzie.</figcaption></figure>
      <div className="grid sm:grid-cols-2 gap-4">{pumpTypes.map(p => <article key={p.id} className="device-teaser"><p.icon size={24} /><p className="section-kicker !mt-5 !mb-2">{p.kind}</p><h2 className="font-display text-2xl mb-3">{p.name}</h2><p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p><Link to={`/konfigurator?model=${p.id}`} className="incubation-link mt-6">Dobierz zestaw ↗</Link></article>)}</div>
    </div>
  </section>;
}
