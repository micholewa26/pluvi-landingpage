import { Link } from "react-router-dom";
import Module from "../components/Module";
import Value from "../components/Value";
import AppDemo from "../components/AppDemo";
export default function System() {
  return <div className="pt-16"><div className="system-intro"><p className="section-kicker">SYSTEM PLUVI</p><h1 className="page-heading">Od startu pompy<br />do pomiarów w sadzie.</h1><p className="page-intro !mx-auto">Sterownik PLUVI do pomp spalinowych i elektrycznych, z procedurą startu i pomiarem ciśnienia wody. Dla własnego urządzenia — indywidualna integracja.</p><Link to="/konfigurator" className="hero-primary mt-7">Skonfiguruj zestaw ↗</Link></div><Module /><Value /><div className="pt-10 text-center bg-[#f5f6f2]"><p className="section-kicker !mb-0">INTERAKTYWNA PREZENTACJA / DANE PRZYKŁADOWE</p></div><AppDemo /></div>;
}
