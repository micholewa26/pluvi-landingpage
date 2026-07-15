import {
  Activity,
  BarChart3,
  CalendarCheck,
  Cog,
  Droplets,
  Layers,
  MapPin,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

import motopompaImg from "../assets/motopompa.png";
import agregatImg from "../assets/agregat-elektryczny.png";
import inneImg from "../assets/inne-urzadzenia.png";

export const navLinks = [
  { label: "O systemie", href: "#value" },
  { label: "Zastosowanie", href: "#applications" },
  { label: "Komponenty", href: "#modules" },
  { label: "Kontakt", href: "#contact" },
];

export const hero = {
  badge: "Nowa generacja systemów sterowania",
  titleLines: ["Chroń plony", "Nawadniaj mądrze", "Śpij spokojnie"],
  titleGradient: "Oszczędzaj czas i pieniądze",
  description1:
    "System ochrony antyprzymrozkowej i nawadniania w sadownictwie rozproszonym zawsze pod ręką!",
  description2:
    "Automatyczne alerty, zdalna kontrola i bezpieczeństwo upraw bez wychodzenia z domu.",
  cta: "Zgłoś się do pilotażu",
};

export const heroStats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "OFF-GRID", label: "NIE WYMAGA PRĄDU ANI WI-FI", icon: Zap },
  { value: "24/7", label: "MONITORING W CZASIE RZECZYWISTYM", icon: Activity },
  { value: "-40%", label: "ZUŻYCIE PALIWA", icon: BarChart3 },
];

export const valueSection = {
  heading: "Dlaczego nasz ",
  headingGradient: "system?",
  sub: "Zaprojektowany od podstaw z myślą o elastyczności i niezawodności w wymagającym środowisku sadowniczym.",
};

export const valueCards: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Activity,
    title: "Nadzór pracy urządzenia",
    desc: "Stała informacja o statusie pracy, pomiary temperatury i wilgotności gleby oraz ochrona przed suchobiegiem.",
  },
  {
    icon: Layers,
    title: "Spójny ekosystem",
    desc: "Jedna aplikacja i jeden uniwersalny sterownik. Zyskaj pełen monitoring i możliwość sterowania motopompami spalinowymi oraz zestawami współpracującymi z agregatem prądotwórczym.",
  },
  {
    icon: Smartphone,
    title: "Intuicyjna aplikacja",
    desc: "Intuicyjna i prosta aplikacja połączona ze sterownikiem pozwala na pełne sterowanie nawadnianiem i systemem ochrony antyprzymrozkowej bez potrzeby kupowania osobnych urządzeń.",
  },
  {
    icon: ShieldCheck,
    title: "Niezawodność",
    desc: "Projektowane z myślą o pracy w terenie — odporne na kurz, wilgoć i zmienne warunki pogodowe typowe dla sadu i pola. Wspomaganie decyzji oraz automatyczne włączanie urządzeń przy wykryciu przymrozków.",
  },
];

export const demoFeatures = [
  {
    icon: "💧",
    title: "Wykrycie suchobiegu",
    desc: "Czujnik wykrywa pracę pompy bez wody — natychmiastowy alert i zatrzymanie",
  },
  {
    icon: "🌡️",
    title: "Środowisko",
    desc: "Temperatura zewnętrzna, wilgotność powietrza i gleby przy każdej pompie",
  },
  {
    icon: "⛽",
    title: "Paliwo i akumulator",
    desc: "Poziom paliwa w zbiorniku oraz stan naładowania akumulatora",
  },
  {
    icon: "📊",
    title: "Analityka",
    desc: "Czas pracy pomp i zużycie paliwa w ujęciu miesięcznym",
  },
];

export const applicationsSection = {
  sub: "Nasz system sterowania i monitoringu sprawdza się w rozproszonych i trudnych warunkach: w sadach, polach uprawnych i nie tylko...",
};

export const applications: {
  id: string;
  label: string;
  icon: LucideIcon;
  image: string;
  title: string;
  desc: string;
  features: string[];
}[] = [
  {
    id: "motopompy",
    label: "Motopompy",
    icon: Droplets,
    image: motopompaImg,
    title: "Sterowanie motopompami",
    desc: "Pełna kontrola nad pracą motopompy — od zdalnego rozruchu i gaszenia silnika, przez realizację ustalonych harmonogramów, aż po zaawansowaną analizę warunków pogodowych. System dba o bezpieczeństwo upraw i optymalne działanie samego urządzenia.",
    features: [
      "Zdalny rozruch i wyłączenie",
      "Zarządzanie pracą za pomocą harmonogramów",
      "Zabezpieczenie przed suchobiegiem",
    ],
  },
  {
    id: "agregaty",
    label: "Agregaty elektryczne",
    icon: Zap,
    image: agregatImg,
    title: "Zarządzanie agregatami",
    desc: "Pełna kontrola nad pracą agregatu i pompy elektrycznej — od zdalnego rozruchu i gaszenia, przez realizację ustalonych harmonogramów, aż po zaawansowaną analizę warunków pogodowych. System dba o ciągłość zasilania, bezpieczeństwo upraw i optymalne działanie obu urządzeń.",
    features: [
      "Zdalny rozruch i wyłączenie",
      "Zarządzanie pracą za pomocą harmonogramów",
      "Monitorowanie stanu paliwa i wykrywanie anomalii",
    ],
  },
  {
    id: "inne",
    label: "Inne urządzenia",
    icon: Cog,
    image: inneImg,
    title: "Uniwersalne zastosowania",
    desc: "Masz nietypowe urządzenie lub specyficzne wymagania? Nie ma problemu — nasz system jest w pełni modułowy i otwarty na nowe wyzwania. Opisz swoje potrzeby w formularzu kontaktowym, a nasi inżynierowie zaproponują rozwiązanie szyte na miarę.",
    features: [
      "Obsługa silników spalinowych i elektrycznych",
      "Badanie parametrów pracy urządzenia i warunków otoczenia",
      "Indywidualne podejście do każdego projektu",
    ],
  },
];

export const moduleSection = {
  sub: "Jedna aplikacja i jeden uniwersalny sterownik. Zyskaj pełną kontrolę i monitoring nad motopompami, pompami elektrycznymi oraz współpracującymi z nimi agregatami prądotwórczymi.",
  badge: "All-in-One",
  title: "Sterownik Urządzenia",
  desc: "Jeden system pomagający w nawadnianiu oraz chroniący przed przymrozkami. Jeden sterownik umożliwiający monitoring, start/stop, rozruch oraz nadzór poprawności pracy — dla pomp spalinowych (z kontrolą stanu paliwa), pomp elektrycznych oraz pomp elektrycznych współpracujących w zestawie z agregatem. Pomiar temperatury na polu (suchy/mokry) z możliwością dołączenia wilgotnościomierza.",
  chips: [
    "Start / Stop",
    "Monitoring & nadzór",
    "Pompy spalinowe + stan paliwa",
    "Pompy elektryczne & agregat",
    "Pomiar temp. suchy & mokry",
    "Wilgotnościomierz",
  ],
};

export const contactSection = {
  sub: "Umów się na test systemu w swoim sadzie. Wypełnij formularz, a skontaktujemy się z Tobą i prześlemy dla Ciebie indywidualną ofertę.",
  benefits: [
    { icon: CalendarCheck, text: "Darmowa konsultacja techniczna" },
    { icon: UserCheck, text: "Dedykowany opiekun projektu" },
    { icon: MapPin, text: "Prezentacja działania w terenie" },
  ] as { icon: LucideIcon; text: string }[],
  responseNote: "⚡ Średni czas odpowiedzi: poniżej 4 godzin",
};

export const company = {
  name: "PLUVI sp. z o.o.",
  email: "kontakt@pluvi.pl",
  phone: "+48 570 434 056",
  address: "ul. Gospodarcza 26, 20-213 Lublin",
  footerDesc:
    "PLUVI sp. z o.o. — Nowoczesne systemy sterowania nawadnianiem i nie tylko! Projektujemy, produkujemy i wdrażamy.",
  nip: "9462763369",
  krs: "0001220603",
};
