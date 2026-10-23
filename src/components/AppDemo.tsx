import { useState, type CSSProperties, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { demoFeatures } from "../data/content";

/* Interactive mock of the PLUVI mobile app, rendered inside a phone frame.
   Deliberately inline-styled: it's a self-contained "screenshot come alive",
   independent from the page theme. */

const C = {
  bg: "#050d1a",
  surface: "#071020",
  card: "#0c1929",
  border: "#142038",
  border2: "#1a2d47",
  text: "#e8f4ff",
  sub: "#7aafc8",
  muted: "#3d6680",
  blue: "#0ea5e9",
  blueDeep: "#0369a1",
  blueGlow: "#0ea5e933",
  teal: "#06b6d4",
  green: "#22d3a0",
  amber: "#fbbf24",
  red: "#f87171",
  redGlow: "#f8717122",
  ice: "#bae6fd",
};

type Pump = {
  id: number;
  nazwa: string;
  strefa: string;
  typ: "spalinowa" | "elektryczna";
  status: "praca" | "stop" | "awaria";
  woda: boolean;
  tempZewn: number;
  tempWet: number;
  wilgGleby: number;
  paliwo: number | null;
  akumulator: number;
};

const pumps: Pump[] = [
  { id: 1, nazwa: "Sad #1", strefa: "Strefa A", typ: "spalinowa", status: "praca", woda: true, tempZewn: 7.4, tempWet: 5.9, wilgGleby: 61, paliwo: 68, akumulator: 87 },
  { id: 2, nazwa: "Sad #2", strefa: "Strefa A", typ: "spalinowa", status: "stop", woda: true, tempZewn: 7.2, tempWet: 5.5, wilgGleby: 58, paliwo: 85, akumulator: 94 },
  { id: 3, nazwa: "Winnica #2", strefa: "Strefa B", typ: "elektryczna", status: "awaria", woda: false, tempZewn: 6.9, tempWet: 5.6, wilgGleby: 43, paliwo: null, akumulator: 22 },
];

const alerts = [
  { id: 1, typ: "awaria", pompa: "Winnica #2", msg: "Niskie ciśnienie — sprawdź instalację", czas: "2 min temu" },
  { id: 2, typ: "ostrzez", pompa: "Winnica #2", msg: "Krytyczny stan akumulatora — 22%", czas: "4 min temu" },
  { id: 3, typ: "ostrzez", pompa: "Winnica #2", msg: "Niska wilgotność gleby — 43%", czas: "8 min temu" },
  { id: 4, typ: "info", pompa: "Sad #1", msg: "Pompa uruchomiona z aplikacji", czas: "14 min temu" },
  { id: 5, typ: "info", pompa: "Sad #2", msg: "Pompa zatrzymana z aplikacji", czas: "1 godz. temu" },
];

const months = ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"];
const hoursMonthly = [6.2, 7.1, 5.8, 8.3, 6, 9.1, 7.4, 8, 6.9, 8.5, 7.8, 8.9];
const fuelMonthly = [18, 22, 19, 25, 17, 28, 21, 24, 20, 26, 23, 27];

const pctColor = (v: number) => (v > 50 ? C.green : v > 25 ? C.amber : C.red);
const soilColor = (v: number) => (v < 30 ? C.red : v < 50 ? C.amber : C.green);

const StatusDot = ({ status, size = 9 }: { status: Pump["status"]; size?: number }) => {
  const color = { praca: C.green, stop: C.muted, awaria: C.red }[status];
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: size + 8, height: size + 8 }}>
      {(status === "praca" || status === "awaria") && (
        <span style={{ position: "absolute", width: size + 8, height: size + 8, borderRadius: "50%", background: color, opacity: 0.2, animation: "ripple 2s ease-out infinite" }} />
      )}
      <span style={{ width: size, height: size, borderRadius: "50%", background: color, display: "block", flexShrink: 0, boxShadow: status === "praca" ? `0 0 6px ${color}` : "" }} />
    </span>
  );
};

const StatusBadge = ({ status }: { status: Pump["status"] }) => {
  const cfg = {
    praca: { bg: "#22d3a018", color: C.green, label: "PRACA" },
    stop: { bg: "#3d668018", color: C.muted, label: "STOP" },
    awaria: { bg: "#f8717118", color: C.red, label: "AWARIA" },
  }[status];
  return (
    <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", padding: "3px 9px", borderRadius: 20, background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.color}33` }}>
      {cfg.label}
    </span>
  );
};

const WaterBanner = ({ ok }: { ok: boolean }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 12, background: ok ? `${C.green}0f` : `${C.red}0f`, border: `1px solid ${ok ? C.green + "33" : C.red + "33"}` }}>
    <span style={{ fontSize: 14 }}>{ok ? "💧" : "🚱"}</span>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: ok ? C.green : C.red }}>
        {ok ? "CIŚNIENIE OK" : "NISKIE CIŚNIENIE"}
      </div>
      <div style={{ fontSize: 9, color: C.sub, marginTop: 1 }}>
        {ok ? "Ciśnienie w zadanym zakresie" : "Sprawdź pompę i instalację wody"}
      </div>
    </div>
    <span style={{ width: 10, height: 10, borderRadius: "50%", background: ok ? C.green : C.red, boxShadow: `0 0 8px ${ok ? C.green : C.red}` }} />
  </div>
);

const MetricGrid = ({ p }: { p: Pump }) => {
  const items = [
    { l: "Termometr suchy", v: `${p.tempZewn}°C`, c: C.teal, icon: "🌡️" },
    { l: "Termometr mokry", v: `${p.tempWet}°C`, c: C.blue, icon: "🌡️" },
    { l: "Wilg. gleby", v: `${p.wilgGleby}%`, c: soilColor(p.wilgGleby), icon: "🌱" },
    { l: "Akumulator", v: `${p.akumulator}%`, c: pctColor(p.akumulator), icon: "🔋" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
      {items.map((i) => (
        <div key={i.l} style={{ background: C.surface, borderRadius: 12, padding: "8px 10px", border: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 9, color: C.muted, marginBottom: 3 }}>{i.icon} {i.l}</div>
          <div style={{ fontSize: 15, fontWeight: 900, color: i.c, fontFamily: "'Space Grotesk Variable', monospace" }}>{i.v}</div>
        </div>
      ))}
    </div>
  );
};

const FuelBar = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
      <span style={{ fontSize: 11, color: C.sub }}>⛽ {label}</span>
      <span style={{ fontSize: 11, fontWeight: 800, color: pctColor(value) }}>{value}%</span>
    </div>
    <div style={{ height: 6, borderRadius: 3, background: C.surface, overflow: "hidden" }}>
      <div style={{ width: `${value}%`, height: "100%", borderRadius: 3, background: pctColor(value), boxShadow: `0 0 8px ${pctColor(value)}66` }} />
    </div>
  </div>
);

const BarChart = ({ data, color, h = 52 }: { data: number[]; color: string; h?: number }) => {
  const max = Math.max(...data);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: h }}>
      {data.map((v, i) => (
        <div
          key={i}
          style={{ flex: 1, height: (v / max) * (h - 10), background: `linear-gradient(180deg,${color},${color}66)`, borderRadius: "2px 2px 0 0", minHeight: 3, boxShadow: i === data.length - 1 ? `0 0 8px ${color}55` : "" }}
        />
      ))}
    </div>
  );
};

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
    {children}
  </div>
);

const HomeView = ({ onSelect }: { onSelect: (p: Pump) => void }) => {
  const running = pumps.filter((p) => p.status === "praca").length;
  const failures = pumps.filter((p) => p.status === "awaria").length;
  const dry = pumps.filter((p) => !p.woda).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, animation: "fadeIn .3s ease-out" }}>
      {/* greeting card */}
      <div style={{ background: `linear-gradient(135deg,${C.blueDeep}44,${C.card})`, border: `1px solid ${C.blue}33`, borderRadius: 18, padding: "16px 18px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: C.blueGlow, filter: "blur(20px)" }} />
        <div style={{ fontSize: 11, color: C.blue, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>
          Podgląd aplikacji · dane przykładowe
        </div>
        <div style={{ fontSize: 22, fontWeight: 900, color: C.text, lineHeight: 1.2 }}>
          Dzień dobry, <span style={{ color: C.blue }}>7.4°C</span>
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
          {[
            { v: `${running}/${pumps.length}`, l: "w pracy", c: C.green },
            { v: `${failures}`, l: "awarie", c: failures > 0 ? C.red : C.muted },
            { v: `${dry}`, l: "alarm ciśnienia", c: dry > 0 ? C.amber : C.muted },
          ].map((s) => (
            <div key={s.l} style={{ flex: 1, background: "#0a1524", borderRadius: 12, padding: "8px 10px", border: `1px solid ${s.c === C.muted ? C.border2 : s.c + "33"}` }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: s.c, fontFamily: "'Space Grotesk Variable', monospace" }}>{s.v}</div>
              <div style={{ fontSize: 10, color: C.sub, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* example pressure alert */}
      <div style={{ background: `${C.ice}0a`, border: `1px solid ${C.ice}33`, borderRadius: 16, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 26, filter: "drop-shadow(0 0 8px #bae6fd88)" }}>💧</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.ice }}>Alert: Niskie ciśnienie w instalacji</div>
          <div style={{ fontSize: 11, color: C.sub, marginTop: 2 }}>Winnica #2 · Sprawdź pompę i instalację</div>
        </div>
        <span style={{ padding: "6px 12px", borderRadius: 20, border: `1px solid ${C.ice}66`, background: `${C.ice}18`, color: C.ice, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>
          Podgląd
        </span>
      </div>

      {/* pumps */}
      <div>
        <SectionLabel>Twoje pompy</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {pumps.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelect(p)}
              style={{
                background: p.status === "awaria" ? `linear-gradient(135deg,#1a0808,${C.card})` : C.card,
                border: `1px solid ${p.status === "awaria" ? C.red + "44" : p.status === "praca" ? C.green + "33" : C.border}`,
                borderRadius: 16,
                padding: "13px 14px",
                textAlign: "left",
                cursor: "pointer",
                boxShadow: p.status === "awaria" ? `0 0 20px ${C.redGlow}` : "",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.text }}>{p.nazwa}</div>
                  <div style={{ fontSize: 11, color: C.sub, marginTop: 2 }}>
                    {p.strefa} · {p.typ === "spalinowa" ? "⛽ Spalinowa" : "⚡ Elektryczna"}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <StatusDot status={p.status} size={8} />
                  <StatusBadge status={p.status} />
                </div>
              </div>
              <WaterBanner ok={p.woda} />
              <MetricGrid p={p} />
              {p.typ === "spalinowa" && p.paliwo != null && (
                <div style={{ marginTop: 10 }}>
                  <FuelBar label="Paliwo" value={p.paliwo} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* alerts */}
      <div>
        <SectionLabel>Ostatnie zdarzenia</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {alerts.map((a) => {
            const cfg = {
              awaria: { ic: "🚨", c: C.red },
              ostrzez: { ic: "⚠️", c: C.amber },
              info: { ic: "ℹ️", c: C.blue },
              mroz: { ic: "❄️", c: C.ice },
            }[a.typ as "awaria" | "ostrzez" | "info" | "mroz"];
            return (
              <div key={a.id} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: C.card, border: `1px solid ${C.border}`, borderLeft: `3px solid ${cfg.c}`, borderRadius: 12, padding: "10px 12px" }}>
                <span style={{ fontSize: 14 }}>{cfg.ic}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{a.msg}</div>
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{a.pompa} · {a.czas}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const PumpView = ({ pump, onBack }: { pump: Pump; onBack: () => void }) => {
  const [on, setOn] = useState(pump.status === "praca");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, animation: "fadeIn .3s ease-out" }}>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: C.blue, fontSize: 12, fontWeight: 700, cursor: "pointer", padding: 0 }}>
        <ArrowLeft size={14} /> Wszystkie pompy
      </button>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 900, color: C.text }}>{pump.nazwa}</div>
          <div style={{ fontSize: 11, color: C.sub, marginTop: 2 }}>
            {pump.strefa} · {pump.typ === "spalinowa" ? "⛽ Spalinowa" : "⚡ Elektryczna"}
          </div>
        </div>
        <StatusBadge status={pump.status} />
      </div>

      <WaterBanner ok={pump.woda} />

      {/* control card */}
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: C.text }}>Sterowanie pompą</span>
          <button
            onClick={() => setOn(!on)}
            style={{ width: 54, height: 28, borderRadius: 14, border: `1px solid ${on ? C.green + "66" : C.border2}`, cursor: "pointer", background: on ? `${C.green}22` : C.surface, position: "relative", transition: "all .25s" }}
            aria-label={on ? "Wyłącz pompę" : "Włącz pompę"}
          >
            <span style={{ position: "absolute", top: 3, left: on ? 28 : 3, width: 20, height: 20, borderRadius: "50%", background: on ? C.green : C.muted, transition: "left .22s", boxShadow: on ? `0 0 8px ${C.green}77` : "none" }} />
          </button>
        </div>
        <p style={{ fontSize: 10, color: C.sub }}>Podgląd sterowania: {on ? "włączone" : "wyłączone"}. Przykładowe dane, bez połączenia z pompą.</p>
      </div>

      <MetricGrid p={pump} />
      {pump.typ === "spalinowa" && pump.paliwo != null && <FuelBar label="Paliwo" value={pump.paliwo} />}

      {/* analytics */}
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>Czas pracy</span>
          <span style={{ fontSize: 11, color: C.sub }}>Śr. 7,7h/miesiąc</span>
        </div>
        <BarChart data={hoursMonthly} color={C.blue} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          <span style={{ fontSize: 8, color: C.muted }}>{months[0]}</span>
          <span style={{ fontSize: 8, color: C.muted }}>{months[11]}</span>
        </div>
      </div>
      {pump.typ === "spalinowa" && <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>Przykładowe poziomy paliwa (%)</span>
          <span style={{ fontSize: 11, color: C.sub }}>Miesięczny podział</span>
        </div>
        <BarChart data={fuelMonthly} color={C.teal} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          <span style={{ fontSize: 8, color: C.muted }}>{months[0]}</span>
          <span style={{ fontSize: 8, color: C.muted }}>{months[11]}</span>
        </div>
      </div>}
    </div>
  );
};

const phoneFrame: CSSProperties = {
  width: 393,
  borderRadius: 50,
  background: "linear-gradient(160deg,#2a2a2a,#1a1a1a)",
  padding: 3,
  boxShadow: "0 60px 140px #000c, 0 0 0 1px #404040, inset 0 1px 0 #555",
  position: "relative",
  flexShrink: 0,
};

const AppDemo = () => {
  const [pump, setPump] = useState<Pump | null>(null);

  return (
    <section className="bg-hero py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Aplikacja w <span className="text-gradient">akcji</span>
          </h2>
          <p className="text-hero-foreground/70 text-lg">
            Zobacz przykładowe sterowanie i pomiary zestawu z dodatkowymi czujnikami.
            Kliknij pompę, żeby zobaczyć szczegóły. Prezentacja korzysta z danych przykładowych.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          {/* phone */}
          <div style={phoneFrame} className="scale-[0.85] sm:scale-100 origin-top">
            <div style={{ position: "absolute", left: -3, top: 118, width: 3, height: 32, background: "#333", borderRadius: "2px 0 0 2px" }} />
            <div style={{ position: "absolute", left: -3, top: 164, width: 3, height: 62, background: "#333", borderRadius: "2px 0 0 2px" }} />
            <div style={{ position: "absolute", right: -3, top: 158, width: 3, height: 84, background: "#333", borderRadius: "0 2px 2px 0" }} />

            <div style={{ borderRadius: 48, overflow: "hidden", height: 780, background: C.bg, display: "flex", flexDirection: "column", position: "relative" }}>
              {/* dynamic island */}
              <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 126, height: 34, background: "#000", borderRadius: 20, zIndex: 20 }} />
              {/* status bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 28px 4px", fontSize: 12, fontWeight: 700, color: C.text, zIndex: 10, marginTop: 6 }}>
                <span style={{ fontFamily: "'Space Grotesk Variable', monospace" }}>9:41</span>
                <span style={{ fontSize: 10, color: C.sub }}>📶 🔋</span>
              </div>
              {/* app content */}
              <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px 20px" }}>
                {pump ? (
                  <PumpView pump={pump} onBack={() => setPump(null)} />
                ) : (
                  <HomeView onSelect={setPump} />
                )}
              </div>
            </div>
          </div>

          {/* feature list */}
          <div className="flex flex-col gap-5 max-w-md lg:pt-10">
            {demoFeatures.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-display font-semibold text-hero-foreground mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-hero-foreground/60 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;

