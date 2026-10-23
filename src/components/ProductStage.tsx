import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Cog, Focus, Minus, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";
import controllerPhoto from "../assets/sterownik-pluvi-w-sadzie.jpg";
import { isCombustion } from "../data/configurator";

const asset = (name: string) => `${import.meta.env.BASE_URL}images/configurator/${name}.webp`;
type Props = { model: string; name: string; soil: boolean; temperature: boolean; toggle: (id: "soil" | "temperature") => void };

export default function ProductStage({ model, name, soil, temperature, toggle }: Props) {
  const reduced = useReducedMotion();
  const [zoom, setZoom] = useState(false);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-1, 1], [3, -3]), { stiffness: 85, damping: 24 });
  const ry = useSpring(useTransform(px, [-1, 1], [-5, 5]), { stiffness: 85, damping: 24 });
  const transition = { duration: reduced ? 0 : .65, ease: "easeOut" as const };
  return <div className="product-viewport">
    <div className="stage-toolbar"><span><span className="studio-led" /> WIDOK INTERAKTYWNY</span><div>
      <button type="button" onClick={() => setZoom(!zoom)} aria-label={zoom ? "Pomniejsz widok" : "Powiększ widok"} aria-pressed={zoom}>{zoom ? <Minus size={16} /> : <Plus size={16} />}</button>
      <button type="button" aria-label="Wycentruj widok" onClick={() => { setZoom(false); px.set(0); py.set(0); }}><Focus size={16} /></button>
    </div></div>
    <div className={`product-stage stage-${model}`} onPointerMove={e => { if (reduced || e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); px.set((e.clientX-r.left)/r.width*2-1); py.set((e.clientY-r.top)/r.height*2-1); }} onPointerLeave={() => { px.set(0); py.set(0); }}>
      <div className="stage-grid" /><div className="stage-orbit orbit-one" /><div className="stage-orbit orbit-two" /><div className="stage-glow" />
      <span className="stage-watermark" aria-hidden="true">PLUVI</span>
      <svg className="stage-connections" viewBox="0 0 1000 680" preserveAspectRatio="none" aria-hidden="true">
        <AnimatePresence>{temperature && <motion.path key="temp" d="M490 230 L340 230 L215 150" initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}} exit={{opacity:0}} transition={transition} />}{soil && <motion.path key="soil" d="M590 330 L710 330 L825 490" initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}} exit={{opacity:0}} transition={transition} />}</AnimatePresence>
      </svg>
      <div className="pump-placement">
        <motion.div className="pump-perspective" style={{rotateX: reduced ? 0 : rx, rotateY: reduced ? 0 : ry}}>
          <AnimatePresence mode="wait">
            <motion.div key={model} className="pump-asset" initial={{opacity:0, y:reduced ? 0 : 25, scale:.94}} animate={{opacity:1,y:0,scale:zoom ? 1.17 : 1}} exit={{opacity:0,scale:.94}} transition={transition}>
              {model === "custom" ? <div className="custom-integration"><figure><img src={controllerPhoto} alt="Nasz sterownik PLUVI z anteną — zdjęcie z sadu" draggable={false} /><figcaption>Sterownik PLUVI</figcaption></figure><div className="custom-link"><span /><ArrowRight size={22} /><span /></div><div className="custom-device"><Cog size={46} strokeWidth={1} /><strong>Twoje urządzenie</strong><span>Integracja dopasowana<br />do Twojego sprzętu</span></div></div> : <img src={asset(model === "electric" ? "electric-pluvi" : "pump")} alt={model === "electric" ? "Szafa sterująca, osobny sterownik PLUVI pośrodku i pompa elektryczna — poglądowy układ podłączenia" : `Poglądowa wizualizacja: ${name} ze sterownikiem PLUVI`} draggable={false} decoding="async" />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      {model !== "custom" && <><div className={`scene-addon addon-temperature ${temperature ? "installed" : ""}`}>
        <AnimatePresence>{temperature && <motion.img key="temperature" src={asset("temperature")} alt="Zestaw termometru suchego i mokrego dołączony do sterownika" draggable={false} initial={{opacity:0,x:reduced?0:-45,y:reduced?0:-25,scale:.7}} animate={{opacity:1,x:0,y:0,scale:1}} exit={{opacity:0,x:reduced?0:-30,scale:.8}} transition={transition} />}</AnimatePresence>
        <button type="button" className="scene-hotspot" onClick={() => toggle("temperature")} aria-pressed={temperature} aria-label={temperature ? "Usuń termometry ze sceny" : "Dodaj termometry do sceny"}><span>{temperature ? <CheckMark /> : <Plus size={16} />}</span><div><small>TERMOMETR</small><strong>Suchy + mokry</strong><em>{temperature ? "Dołączono · kliknij, aby usunąć" : "Dodaj pomiar temperatury"}</em></div></button>
      </div>
      <div className={`scene-addon addon-soil ${soil ? "installed" : ""}`}>
        <AnimatePresence>{soil && <motion.img key="soil" src={asset("soil")} alt="Czujnik wilgotności z sondą umieszczoną w przekroju gleby" draggable={false} initial={{opacity:0,y:reduced?0:65,scale:.7}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:reduced?0:40,scale:.8}} transition={transition} />}</AnimatePresence>
        <button type="button" className="scene-hotspot" onClick={() => toggle("soil")} aria-pressed={soil} aria-label={soil ? "Usuń sondę ze sceny" : "Dodaj sondę do gleby"}><span>{soil ? <CheckMark /> : <Plus size={16} />}</span><div><small>POMIAR WILGOTNOŚCI</small><strong>Sonda w glebie</strong><em>{soil ? "Dołączono · kliknij, aby usunąć" : "Dodaj pomiar wilgotności"}</em></div></button>
      </div></>}
      {model === "electric" && <div className="electric-topology"><span>Szafa sterująca</span><ArrowRight size={14} /><strong>Sterownik PLUVI</strong><ArrowRight size={14} /><span>Pompa elektryczna</span></div>}
      <div className="stage-base-tag"><span className="studio-led" /> {model === "custom" ? "WŁASNA INTEGRACJA DO WŁASNEGO URZĄDZENIA" : "STEROWNIK + PROCEDURA STARTU + CIŚNIENIE WODY"}{isCombustion(model) && <strong className="stage-fuel">W zestawie: zbiornik 25 l + pomiar poziomu paliwa</strong>}</div>
    </div>
    <div className="stage-footer"><span><RotateCcw size={12} /> Porusz kursorem, aby zmienić perspektywę</span><span>Wizualizacja poglądowa · wygląd zestawu może się różnić</span></div>
  </div>;
}
const CheckMark = () => <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="2" /></svg>;

