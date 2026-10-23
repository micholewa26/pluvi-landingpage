import {
  Activity,
  BarChart3,
  CalendarCheck,
  Layers,
  MapPin,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";


export const navLinks = [
  { label: "Start", href: "/" },
  { label: "O nas", href: "/o-nas" },
  { label: "System", href: "/system" },
  { label: "Pompy", href: "/pompy" },
  { label: "Konfigurator", href: "/konfigurator" },
  { label: "Kontakt", href: "/kontakt" },
];

export const hero = {
  badge: "Nowa generacja systemów sterowania",
  titleLines: ["Chroń plony", "Nawadniaj mądrze", "Śpij spokojnie"],
  titleGradient: "Oszczędzaj czas i pieniądze",
  description1:
    "System ochrony antyprzymrozkowej i nawadniania w sadownictwie rozproszonym zawsze pod ręką!",
  description2:
    "Zdalny start i stop pompy, pomiary oraz alerty w aplikacji. Mniej dojazdów, więcej kontroli nad instalacją.",
  cta: "Dobierz swój zestaw",
};

export const heroStats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "START / STOP", label: "ZDALNE STEROWANIE POMPĄ", icon: Zap },
  { value: "POMIARY", label: "INFORMACJE O PRACY INSTALACJI", icon: Activity },
  { value: "ALERTY", label: "POWIADOMIENIA W APLIKACJI", icon: BarChart3 },
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
    desc: "Sprawdzaj status pracy pompy i ciśnienie wody. Pomiary temperatury oraz wilgotności gleby dobierz jako dodatkowe wyposażenie zestawu.",
  },
  {
    icon: Layers,
    title: "Spójny ekosystem",
    desc: "Jeden sterownik dla pomp spalinowych typu GX 160 i GX 270, pomp elektrycznych oraz indywidualnie integrowanych urządzeń.",
  },
  {
    icon: Smartphone,
    title: "Intuicyjna aplikacja",
    desc: "Uruchamiaj i zatrzymuj pompę, odczytuj pomiary i odbieraj alarmy z poziomu aplikacji połączonej ze sterownikiem PLUVI.",
  },
  {
    icon: ShieldCheck,
    title: "Dopasowanie do instalacji",
    desc: "Sposób podłączenia i zakres pomiarów dopasowujemy do urządzenia oraz warunków w gospodarstwie.",
  },
];

export const demoFeatures = [
  {
    icon: "💧",
    title: "Ciśnienie wody",
    desc: "Podgląd ciśnienia w instalacji i informacji o nieprawidłowej pracy pompy",
  },
  {
    icon: "🌡️",
    title: "Środowisko",
    desc: "Opcjonalne pomiary: termometr suchy i mokry oraz wilgotność gleby",
  },
  {
    icon: "⛽",
    title: "Poziom paliwa",
    desc: "W zestawach spalinowych: zbiornik 25 l z pomiarem poziomu paliwa",
  },
  {
    icon: "📊",
    title: "Stan urządzeń",
    desc: "Informacje o pracy pomp i zdarzeniach w jednym widoku aplikacji",
  },
];

export const moduleSection = {
  sub: "Pompy spalinowe typu GX 160 i GX 270, pompy elektryczne oraz własne urządzenia. Wybierz urządzenie i dobierz czujniki w konfiguratorze.",
  badge: "PLUVI",
  title: "Sterownik PLUVI",
  desc: "Sterownik PLUVI zapewnia procedurę startu i pomiar ciśnienia wody w instalacji pompy. W pompach elektrycznych podłącza się go pomiędzy szafę sterującą a pompę. Zestawy spalinowe GX 160 i GX 270 zawierają zbiornik paliwa 25 l z pomiarem poziomu paliwa. Opcjonalnie dobierzesz pomiar wilgotności gleby oraz termometr suchy i mokry. Dla własnego urządzenia przygotowujemy indywidualną integrację.",
  chips: [
    "Start / Stop",
    "Monitoring & nadzór",
    "GX 160 / GX 270",
    "Spalinowe: zbiornik 25 l + pomiar paliwa",
    "Ciśnienie wody",
    "Opcja: termometr suchy i mokry",
    "Opcja: wilgotność gleby",
  ],
};

export const contactSection = {
  sub: "Dobierz PLUVI do swojego gospodarstwa. Opisz pompę i instalację, a skontaktujemy się z Tobą, żeby ustalić zakres zestawu i indywidualną ofertę.",
  benefits: [
    { icon: CalendarCheck, text: "Omówienie potrzeb Twojej instalacji" },
    { icon: UserCheck, text: "Kontakt bezpośrednio z zespołem PLUVI" },
    { icon: MapPin, text: "Dobór zestawu do Twojego gospodarstwa" },
  ] as { icon: LucideIcon; text: string }[],
  responseNote: "Odpowiadamy na zapytania w terminie do 3 dni roboczych.",
};

export const company = {
  name: "PLUVI sp. z o.o.",
  email: "kontakt@pluvi.pl",
  phone: "+48 570 434 056",
  address: "Tomasza Zana 43, lok. 2.1, 20-601 Lublin",
  footerDesc:
    "PLUVI sp. z o.o. — Sterowanie pompami i pomiary dla sadownictwa. Dobieramy zestawy do urządzeń i potrzeb Twojego gospodarstwa.",
  nip: "9462763369",
  krs: "0001220603",
};

export const incubation = {
  heading: "PLUVI — absolwent Unicorn Hub 2.0",
  description: "Ukończyliśmy program inkubacji Platformy Startowej Unicorn Hub – Edycja II.",
  award: "Nagroda Publiczności",
  event: "Demo Day #5 · 19 czerwca 2026 · Warszawa",
  awardDescription: "Podczas finału V rundy inkubacji PLUVI otrzymało Nagrodę Publiczności.",
  reportUrl: "https://edycja2.unicornhub.pl/2026/06/21/zobacz-co-dzialo-sie-na-demo-day/",
  funding: "PLUVI uczestniczyło w projekcie „Platforma Startowa Unicorn Hub – Edycja II”, współfinansowanym ze środków Unii Europejskiej w ramach programu Fundusze Europejskie dla Polski Wschodniej 2021–2027, Priorytet FEPW.01 Przedsiębiorczość i Innowacje, Działanie FEPW.01.01 Platformy startowe dla nowych pomysłów, Komponent I: Inkubacja – rozwój nowego pomysłu biznesowego.",
};

