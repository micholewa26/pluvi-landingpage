import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check, Plus, RotateCcw } from "lucide-react";
import { getBaseFeatures, optionalSensors, pumpTypes, readConfiguration } from "../data/configurator";
import ProductStage from "../components/ProductStage";
import "../configurator.css";

export default function Configurator() {
  const [params, setParams] = useSearchParams();
  const config = readConfiguration(params);
  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    next.set("model", config.pump.id);
    if (value) next.set(key, value); else next.delete(key);
    if (key === "model" && value !== "custom") next.delete("device");
    if (key === "model" && value === "custom") { next.delete("soil"); next.delete("temperature"); }
    setParams(next, { replace: true });
  };
  const contactParams = new URLSearchParams({ model: config.pump.id });
  if (config.soil) contactParams.set("soil", "1");
  if (config.temperature) contactParams.set("temperature", "1");
  if (config.pump.id === "custom" && config.device.trim()) contactParams.set("device", config.device.trim());
  const count = Number(config.soil) + Number(config.temperature);
  return <section className="config-studio">
    <div className="studio-header"><div><p className="studio-eyebrow">PLUVI / BUILD YOUR SYSTEM</p><h1>Twój sad.<br /><span>Twój ekosystem.</span></h1></div><p>Wybierz pompę. Dołącz czujniki.<br />Zobacz, jak powstaje Twój zestaw.</p><span className="studio-edition">KONFIGURATOR<br /><strong>01 — 04</strong></span></div>
    <div className="studio-workspace">
      <div className="studio-visual">
        <fieldset className="studio-models"><legend className="sr-only">Wybierz urządzenie</legend>{pumpTypes.map((p,i) => <label key={p.id} className={config.pump.id === p.id ? "selected" : ""}><input type="radio" name="device-model" value={p.id} checked={config.pump.id === p.id} onChange={() => update("model",p.id)} /><small>0{i+1}</small><strong>{p.name}</strong><p.icon size={17} aria-hidden="true" /></label>)}</fieldset>
        <ProductStage model={config.pump.id} name={config.pump.name} soil={config.soil} temperature={config.temperature} toggle={id => update(id, config[id] ? "" : "1")} />
      </div>
      <aside className="studio-controls" aria-label="Elementy Twojego zestawu">
        <div className="studio-control-title"><p className="studio-eyebrow">TWOJA KONFIGURACJA</p><h2>{config.pump.name}</h2><p>{config.pump.kind}</p></div>
        {config.pump.id === "custom" && <div className="studio-custom"><label htmlFor="custom-device">Model lub opis urządzenia (opcjonalnie)</label><input id="custom-device" maxLength={160} value={config.device} onChange={e => update("device",e.target.value)} placeholder="Co chcesz podłączyć?" /></div>}
        <div className="studio-base"><span className="studio-section-label">{config.pump.id === "custom" ? "TWOJA INTEGRACJA" : "BAZA / W ZESTAWIE"}</span>{getBaseFeatures(config.pump.id).map(f => <p key={f}><Check size={13} aria-hidden="true" />{f}</p>)}</div>
        {config.pump.id !== "custom" && <fieldset className="studio-sensors"><legend className="studio-section-label">ROZBUDUJ SWÓJ ZESTAW</legend>{optionalSensors.map(s => <label className={`studio-sensor ${config[s.id] ? "selected" : ""}`} key={s.id}>
          <input type="checkbox" checked={config[s.id]} onChange={e => update(s.id,e.target.checked ? "1" : "")} />
          <img src={`${import.meta.env.BASE_URL}images/configurator/${s.id}.webp`} alt="" loading="eager" />
          <span><strong>{s.title}</strong><small>{s.id === "soil" ? "Sonda w glebie" : "Termometr suchy + mokry"}</small><em>{config[s.id] ? "W Twoim zestawie" : "Kliknij, aby dołączyć"}</em></span><span className="sensor-toggle" aria-hidden="true">{config[s.id] ? <Check size={15} /> : <Plus size={15} />}</span>
        </label>)}</fieldset>}
        <div className="studio-total" aria-live="polite"><span>Twój zestaw</span><strong>{config.pump.id === "custom" ? "Indywidualna integracja" : `Baza + ${count} ${count === 1 ? "rozszerzenie" : "rozszerzenia"}`}</strong></div>
        <Link to={`/kontakt?${contactParams.toString()}`} className="studio-submit">{config.pump.id === "custom" ? "Zapytaj o integrację" : "Zapytaj o zestaw"} <ArrowUpRight size={19} /></Link>
        <button type="button" className="studio-reset" onClick={() => setParams({}, {replace:true})}><RotateCcw size={13} />Zacznij od nowa</button>
        <p className="studio-disclaimer">Dobór i podłączenie potwierdzimy dla Twojej instalacji. To wizualny dobór elementów, bez połączenia ze sprzętem.</p>
      </aside>
    </div>
  </section>;
}

