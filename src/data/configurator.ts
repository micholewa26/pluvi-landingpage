import { Cog, Droplets, Zap } from "lucide-react";

export const pumpTypes = [
  { id: "gx160", name: "Typ GX 160", kind: "Pompa spalinowa", icon: Droplets, description: "Sterowanie pompą spalinową typu GX 160. W zestawie zbiornik paliwa 25 l z pomiarem poziomu paliwa." },
  { id: "gx270", name: "Typ GX 270", kind: "Pompa spalinowa", icon: Droplets, description: "Sterowanie pompą spalinową typu GX 270. W zestawie zbiornik paliwa 25 l z pomiarem poziomu paliwa." },
  { id: "electric", name: "Pompa elektryczna", kind: "Sterownik między szafą a pompą", icon: Zap, description: "Sterownik PLUVI podłącza się pomiędzy szafę sterującą a pompę elektryczną. Jest osobnym elementem instalacji, z nadzorem ciśnienia wody." },
  { id: "custom", name: "Własne urządzenie", kind: "Własna integracja do własnego urządzenia", icon: Cog, description: "Własna integracja do własnego urządzenia. Opisz swój sprzęt i oczekiwany sposób działania — zakres integracji ze sterownikiem PLUVI ustalimy indywidualnie." },
] as const;

export function isCombustion(model: string) { return model === "gx160" || model === "gx270"; }
export function getBaseFeatures(model: string) {
  if (model === "custom") return ["Własna integracja do własnego urządzenia", "Sterownik PLUVI", "Zakres i sposób podłączenia ustalane indywidualnie"];
  const base = [model === "electric" ? "Sterownik PLUVI pomiędzy szafą sterującą a pompą" : "Sterownik PLUVI", "Procedura startu urządzenia", "Czujnik ciśnienia wody w instalacji"];
  return isCombustion(model) ? [...base, "Zbiornik paliwa 25 l w zestawie", "Pomiar poziomu paliwa"] : base;
}
export const optionalSensors = [
  { id: "soil", title: "Pomiar wilgotności", description: "Dodatkowy czujnik do pomiaru wilgotności gleby w miejscu uprawy." },
  { id: "temperature", title: "Termometr", description: "Zestaw pomiarowy z termometrem suchym i mokrym — oba pomiary w jednym rozszerzeniu." },
] as const;

export function readConfiguration(params: URLSearchParams) {
  const pump = pumpTypes.find(p => p.id === params.get("model")) ?? pumpTypes[0];
  return {
    pump,
    soil: pump.id !== "custom" && params.get("soil") === "1",
    temperature: pump.id !== "custom" && params.get("temperature") === "1",
    device: (params.get("device") ?? "").slice(0, 160),
  };
}

export function configurationMessage(params: URLSearchParams) {
  if (!pumpTypes.some(p => p.id === params.get("model"))) return "";
  const c = readConfiguration(params);
  if (c.pump.id === "custom") return ["Proszę o kontakt w sprawie własnej integracji sterownika PLUVI do własnego urządzenia.", `Urządzenie: ${c.device.trim() || "do ustalenia"}.`, "Zakres integracji i sposób podłączenia do ustalenia indywidualnie."].join("\n");
  return ["Proszę o kontakt w sprawie konfiguracji PLUVI:", `Urządzenie: ${c.pump.name}.`, `W zestawie: ${getBaseFeatures(c.pump.id).join(", ")}.`, `Opcje: ${[c.soil && "pomiar wilgotności gleby", c.temperature && "termometr suchy i mokry"].filter(Boolean).join(", ") || "bez dodatkowych czujników"}.`].join("\n");
}
