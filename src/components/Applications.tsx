import GxProduct from "./GxProduct";
import { Link } from "react-router-dom";
import { pumpTypes } from "../data/configurator";


export default function Applications() {
  return <section className="site-page container mx-auto px-4 lg:px-8">
    <p className="section-kicker">POMPY I URZĄDZENIA</p><h1 className="page-heading">Twoja pompa.<br />Pod kontrolą PLUVI.</h1>
    <p className="page-intro">Pompy spalinowe typu GX, pompy głębinowe lub własne urządzenie. Wybierz wariant, a następnie dopasuj zestaw pomiarowy.</p>
    <div className="pump-catalog">
      <figure><div className="aspect-[4/5] bg-white rounded-xl p-4"><GxProduct /></div><figcaption className="text-xs text-muted-foreground mt-3">Wizualizacja poglądowa pompy GX ze sterownikiem PLUVI.</figcaption></figure>
      <div className="grid sm:grid-cols-2 gap-4">{pumpTypes.map(p => <article key={p.id} className="device-teaser"><p.icon size={24} /><p className="section-kicker !mt-5 !mb-2">{p.kind}</p><h2 className="font-display text-2xl mb-3">{p.name}</h2><p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p><Link to={`/konfigurator?model=${p.id}`} className="incubation-link mt-6">Dobierz zestaw ↗</Link></article>)}</div>
    </div>
  </section>;
}
