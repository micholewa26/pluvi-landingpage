import { Link } from "react-router-dom";
import { Activity, ArrowUpRight, Radio, Smartphone } from "lucide-react";
import controllerPhoto from "../assets/sterownik-pluvi-w-sadzie.jpg";

const steps = [
  { icon: Radio, title: "Sterownik przy pompie", text: "PLUVI łączy się z Twoim urządzeniem. Sposób podłączenia dobieramy do pompy i warunków instalacji." },
  { icon: Activity, title: "Pomiary z instalacji", text: "Kontroluj ciśnienie wody. Zestaw możesz rozbudować o pomiar wilgotności gleby oraz termometr suchy i mokry." },
  { icon: Smartphone, title: "Kontrola w aplikacji", text: "Zdalnie uruchamiaj i zatrzymuj pompę, sprawdzaj pomiary i odbieraj alerty. Wszystko w jednym miejscu." },
];

export default function HowItWorks() {
  return <section className="how-section site-section" aria-labelledby="how-title">
    <div className="container mx-auto px-4 lg:px-8">
      <p className="section-kicker">OD POMPY DO TELEFONU</p>
      <h2 id="how-title" className="font-display text-3xl md:text-4xl">Jak działa PLUVI</h2>
      <p className="how-intro">Twoja instalacja w sadzie. Informacje i sterowanie zawsze pod ręką.</p>
      <div className="how-layout">
        <figure className="how-photo">
          <img src={controllerPhoto} alt="Sterownik PLUVI zamontowany na pompie w sadzie" loading="lazy" decoding="async" />
          <figcaption>Sterownik PLUVI w sadzie</figcaption>
        </figure>
        <div>
          <ol className="how-steps">{steps.map((step, index) => <li key={step.title}>
            <span className="how-step-icon"><step.icon size={24} aria-hidden="true" /></span>
            <div><span className="how-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></div>
          </li>)}</ol>
          <Link to="/system" className="hero-primary how-link">Zobacz system i aplikację <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    </div>
  </section>;
}
