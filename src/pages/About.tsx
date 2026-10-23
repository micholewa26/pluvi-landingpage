import { ArrowUpRight, CircuitBoard, Radio, Smartphone, Sprout, Cpu, Cloud, Wrench, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Incubation from "../components/Incubation";
import pumpPhoto from "../assets/pompa-pluvi-w-sadzie.jpg";
import "../about.css";

const expertise = [
  { icon: CircuitBoard, title: "Elektronika i pomiary", background: "Doświadczenie w przemysłowych zespołach badawczo-rozwojowych, energoelektronice, projektowaniu układów i diagnostyce.", application: "W PLUVI przekładamy je na elektronikę sterownika, układy zasilania i pomiary parametrów pracy pompy." },
  { icon: Cpu, title: "Sterowanie i komunikacja", background: "Praktyka w programowaniu mikrokontrolerów, systemach wbudowanych oraz integracji urządzeń i czujników.", application: "W PLUVI łączymy procedurę startu, odczyty z instalacji i komunikację z aplikacją w jeden system obsługi pompy." },
  { icon: Cloud, title: "Aplikacja i chmura", background: "Komercyjne doświadczenie w Pythonie, usługach Azure, bazach danych i integracji systemów informatycznych.", application: "W PLUVI wykorzystujemy je do przekazywania komend, prezentowania pomiarów i dostarczania użytkownikowi informacji o zdarzeniach." },
  { icon: Wrench, title: "Konstrukcja i integracja", background: "Kompetencje z robotyki, automatyki, projektowania mechanicznego oraz uruchamiania i testowania urządzeń.", application: "W PLUVI odpowiadają za dopasowanie sterownika do sprzętu, połączenia elektryczne i mechaniczne oraz sprawdzenie działania w gospodarstwie." },
];

export default function About() {
  return <div className="about-page">
    <section className="about-hero" aria-labelledby="about-title">
      <div className="about-hero-copy">
        <p className="about-kicker">O NAS / PLUVI</p>
        <h1 id="about-title">Inżynieria,<br />która wychodzi<br /><span>w sad.</span></h1>
        <p>Zdalnie steruj pompą i sprawdzaj jej pracę z telefonu. Za PLUVI stoi zespół, który łączy doświadczenie w elektronice przemysłowej, automatyce i aplikacjach z praktyką w gospodarstwach sadowniczych.</p>
        <Link to="/konfigurator" className="hero-primary">Dobierz zestaw do swojej pompy <ArrowUpRight size={18} /></Link>
      </div>
      <figure className="about-hero-photo"><img src={pumpPhoto} alt="Pompa ze sterownikiem PLUVI w kwitnącym sadzie" fetchPriority="high" /><figcaption><span className="about-dot" />Technologia blisko Twojej uprawy.<span>PLUVI / W SADZIE</span></figcaption></figure>
    </section>

    <section className="about-story about-wrap" aria-labelledby="about-why">
      <div><p className="about-kicker">TWOJE GOSPODARSTWO. TWÓJ CZAS.</p><h2 id="about-why">Mniej nocnych dojazdów.<br />Więcej kontroli nad sadem.</h2></div>
      <div className="about-prose"><p>Uruchomienie pompy to dopiero początek. Trzeba jeszcze sprawdzić, czy pracuje prawidłowo, czy w instalacji jest ciśnienie i czy zmieniające się warunki wymagają reakcji. Przy rozproszonych działkach oznacza to kolejne dojazdy — także nocą, podczas przymrozków.</p><p>PLUVI łączy sterowanie, pomiary i powiadomienia. Dzięki temu możesz zdalnie uruchomić lub zatrzymać pompę oraz sprawdzić jej stan. Dobieramy zestaw do Twojego urządzenia i sposobu użytkowania instalacji.</p></div>
    </section>

    <section className="about-system" aria-labelledby="about-system-title"><div className="about-wrap">
      <div className="about-section-head"><div><p className="about-kicker">CO ZYSKUJESZ Z PLUVI</p><h2 id="about-system-title">Od urządzenia w terenie<br />do aplikacji w dłoni.</h2></div><Link className="about-text-link" to="/system">Poznaj system PLUVI <ArrowUpRight size={18} /></Link></div>
      <div className="about-pillars">
        <article><CircuitBoard size={30} strokeWidth={1.3} /><span>01 / STEROWANIE</span><h3>Pompa pod nadzorem</h3><p>Wybierz zestaw do pompy spalinowej typu GX 160 lub GX 270, sterownik między szafą a pompą elektryczną albo indywidualną integrację z własnym urządzeniem.</p></article>
        <article><Sprout size={30} strokeWidth={1.3} /><span>02 / POMIARY</span><h3>Informacje z instalacji i sadu</h3><p>Ciśnienie wody, stan pracy pompy oraz dobierane do instalacji pomiary wilgotności gleby i temperatury — termometrem suchym i mokrym.</p></article>
        <article><Smartphone size={30} strokeWidth={1.3} /><span>03 / APLIKACJA</span><h3>Kontrola bliżej użytkownika</h3><p>Zdalny start i stop, informacje o pracy pompy oraz alarmy w aplikacji. Sprawdzaj stan urządzenia bez dojazdu wyłącznie po to, żeby je skontrolować.</p></article>
      </div>
    </div></section>

    <section id="zespol" className="about-team about-wrap" aria-labelledby="about-team-title">
      <div className="about-section-head"><div><p className="about-kicker">DOŚWIADCZENIE ZESPOŁU</p><h2 id="about-team-title">Wiedza inżynierska.<br />Praktyczna korzyść w sadzie.</h2></div><p>Jesteśmy zespołem absolwentów Politechniki Warszawskiej. Łączymy elektrotechnikę, robotykę i automatykę z komercyjnym doświadczeniem w oprogramowaniu i systemach chmurowych.</p></div>
      <div className="about-expertise-grid">{expertise.map(area => <article key={area.title}><area.icon size={28} strokeWidth={1.3} aria-hidden="true" /><h3>{area.title}</h3><p>{area.background}</p><div><span>JAK WYKORZYSTUJEMY TO W PLUVI</span><p>{area.application}</p></div></article>)}</div>
      <div className="about-track-record"><Trophy size={28} aria-hidden="true" /><div><h3>Doświadczenie sprawdzone w wymagających projektach</h3><p>Członkowie naszego zespołu współtworzyli rozwiązanie Politechniki Warszawskiej nagrodzone Grand Prize w IEEE International Future Energy Challenge 2025. Praktykę w projektowaniu, integracji i testowaniu złożonych urządzeń wykorzystujemy przy pracy nad instalacjami PLUVI.</p></div></div>
    </section>

    <section className="about-progress about-wrap" aria-labelledby="about-progress-title">
      <div><p className="about-kicker">TWÓJ ZESTAW PLUVI</p><h2 id="about-progress-title">Zacznij od swojej pompy.<br />Dobierz resztę z nami.</h2><p className="about-progress-intro">Typ urządzenia, sposób podłączenia i potrzebne pomiary składają się na zestaw dla Twojego gospodarstwa.</p><Link className="about-text-link" to="/konfigurator">Przejdź do konfiguratora <ArrowUpRight size={18} /></Link></div>
      <ol className="about-timeline"><li><span>01</span><div><small>URZĄDZENIE</small><h3>Wybierz pompę lub własny sprzęt</h3><p>Dla GX 160 i GX 270 zestaw obejmuje zbiornik 25 l z pomiarem poziomu paliwa. Przy pompie elektrycznej sterownik PLUVI podłączamy między szafę sterującą a pompę.</p></div></li><li><span>02</span><div><small>POMIARY</small><h3>Dobierz informacje, których potrzebujesz</h3><p>Zestaw do pompy zawiera procedurę startu i czujnik ciśnienia wody. Opcjonalnie dodasz pomiar wilgotności gleby oraz termometr suchy i mokry. Własne urządzenia integrujemy indywidualnie.</p></div></li><li><span>03</span><div><small>OFERTA DLA GOSPODARSTWA</small><h3>Ustal szczegóły z naszym zespołem</h3><p>Prześlij konfigurację i opisz instalację. Potwierdzimy zgodność urządzenia, zakres podłączenia oraz warunki oferty.</p></div></li></ol>
    </section>
    <Incubation />
    <section className="about-cta"><Radio size={30} strokeWidth={1.3} /><h2>Porozmawiajmy<br />o Twoim gospodarstwie.</h2><p>Opowiedz nam o pompach, instalacji i warunkach w sadzie.</p><Link to="/kontakt" className="hero-primary">Skontaktuj się z zespołem <ArrowUpRight size={18} /></Link></section>
  </div>;
}
