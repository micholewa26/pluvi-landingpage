import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import Incubation from "../components/Incubation";
import { pumpTypes } from "../data/configurator";
const Home = () => <>
  <Hero />
  <section id="overview" className="site-section container mx-auto px-4 lg:px-8">
    <p className="section-kicker">JEDEN STEROWNIK. TWÓJ ZESTAW.</p>
    <div className="flex flex-wrap items-end justify-between gap-6 mb-10"><h2 className="font-display text-3xl md:text-4xl max-w-xl">Dobierz PLUVI do swojego urządzenia.</h2><Link className="text-sm font-semibold underline underline-offset-4" to="/system">Poznaj system ↗</Link></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{pumpTypes.map(p => <Link key={p.id} to={`/konfigurator?model=${p.id}`} className="device-teaser"><p.icon size={25} /><span className="section-kicker !mt-6 !mb-2">{p.kind}</span><h3 className="font-display text-xl">{p.name}</h3><span className="text-sm mt-6 inline-flex gap-3 items-center">Skonfiguruj <ArrowUpRight size={16} /></span></Link>)}</div>
  </section>
  <Incubation />
</>;
export default Home;
