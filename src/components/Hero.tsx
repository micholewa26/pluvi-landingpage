import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { hero, heroStats } from "../data/content";

const Hero = () => {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  useEffect(() => {
    if (reduced) video.current?.pause();
    else video.current?.play().catch(() => setPlaying(false));
  }, [reduced]);
  return (
    <section ref={section} className="cinema-hero" aria-labelledby="hero-title">
      <motion.div className="cinema-media" style={{ scale: reduced ? 1 : scale }}>
        <video ref={video} src={`${import.meta.env.BASE_URL}videos/hero.mp4`} muted loop playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-hidden="true" />
      </motion.div>
      <div className="cinema-shade" />
      <div className="cinema-content">
        <div className="hero-eyebrow"><span /> PLUVI / {hero.badge}</div>
        <h1 id="hero-title">{hero.titleLines.map((line, i) => <span key={line} className={i === 2 ? "hero-soft" : ""}>{line}.</span>)}</h1>
        <p className="hero-intro">{hero.description2}</p>
        <div className="hero-actions">
          <Link to="/konfigurator" className="hero-primary">Dobierz swój zestaw<ArrowUpRight size={19} /></Link>
          <Link to="/system" className="hero-secondary">Poznaj system <ArrowUpRight size={17} /></Link>
        </div>
      </div>
      <div className="hero-caption"><span>TECHNOLOGIA BLISKO NATURY</span><span>Twój sad. Pod kontrolą.</span></div>
      <button type="button" className="hero-play" aria-label={playing ? "Wstrzymaj film w tle" : "Odtwórz film w tle"} onClick={() => { if (playing) video.current?.pause(); else video.current?.play().catch(() => setPlaying(false)); }}>
        {playing ? <Pause size={15} /> : <Play size={15} />}
      </button>
      <div className="hero-bottom">
        <a href="#overview" className="hero-scroll"><ArrowDown size={19} /><span>Spokojniej w sadzie.<br />Prościej na co dzień.</span></a>
        <div className="hero-facts">{heroStats.map(stat => <div className="hero-fact" key={stat.value}><stat.icon size={19} /><div><strong>{stat.value}</strong><span>{stat.label}</span></div></div>)}</div>
      </div>
    </section>
  );
};
export default Hero;

