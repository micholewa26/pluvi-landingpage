// All site copy lives here — edit this file to change text anywhere on the page.

import slawomir from "../assets/team/slawomir-chodor.jpg";
import mikolaj from "../assets/team/mikolaj-fiedorczuk.jpg";
import stanislaw from "../assets/team/stanislaw-kolodziejczyk.jpg";
import michal from "../assets/team/michal-lejwoda.jpg";
import sebastian from "../assets/team/sebastian-kalitowski.jpg";
import kamil from "../assets/team/kamil-sadowski.jpg";

export const site = {
  email: "vb@vectorb.one",
};

export const hero = {
  badge: "Baltic maritime intelligence",
  headline: "See the",
  headlineHighlight: "unseen",
  description: "We detect hidden threats before they strike.",
  ctaPrimary: "See how it works",
  ctaSecondary: "Get in touch",
  capabilities: [
    "Open-source intelligence (OSINT)",
    "Anomaly & spoofing detection",
    "Threat scoring",
  ],
};

export const mission = {
  heading: "Threat intelligence at inhuman speed",
  body: "We turn raw Baltic traffic into a ranked threat picture — every vessel investigated, scored, and briefed in 30–90 seconds instead of hours. AIS tells you where a ship is; we tell you who it really is: owners, history, capabilities, sanctions.",
  sectors: ["Wind farms", "Ports", "Pipelines", "Subsea cables"],
};

export const solutions = {
  eyebrow: "Solutions",
  heading: "Track. Analyze. Decide.",
  subheading: "From raw traffic to a ranked threat picture — in one console.",
  items: [
    {
      title: "Track",
      description:
        "A live map of every vessel in your area — where most tools stop, and where we start. Each contact is one click from a full investigation.",
    },
    {
      title: "Analyze",
      description:
        "One click compiles a sourced vessel report: identity, ownership, history, capabilities, sanctions — and a 0–100 threat score.",
    },
    {
      title: "Decide",
      description:
        "A ranked threat board and a command brief that tell you what matters first — and what to do next.",
    },
  ],
};

// The flagship product showcase (kept name-neutral — the product name may change).
export const product = {
  eyebrow: "The Console",
  heading: "A tactical picture of the Baltic",
  tagline:
    "OSINT vessel analysis, anomaly detection and threat scoring — layered over live AIS tracking.",
  stats: [
    { value: "30–90 s", label: "from AIS blip to full vessel report" },
    { value: "0–100", label: "threat score on every analyzed vessel" },
    { value: "10", label: "sections of structured analysis" },
  ],
  features: [
    {
      title: "Sourced OSINT reports",
      description:
        "Who owns it, where it's been, what it can do, whether it's sanctioned — every field cited to its source.",
    },
    {
      title: "Anomaly & spoofing detection",
      description:
        "Catch identity games: when a ship's broadcast doesn't match its registry record, you see it immediately.",
    },
    {
      title: "Threat scoring",
      description:
        "Every analyzed vessel gets a 0–100 score and a HIGH / MEDIUM / LOW level — so the board ranks itself.",
    },
    {
      title: "Command brief",
      description:
        "One situation report for the whole area: the overall picture, key threats, patterns across vessels — exportable to PDF.",
    },
  ],
  trustLine:
    "Every finding is sourced, every brief can be audited, and the analyst always has the final word. Decision support — not a black box.",
  cta: "Book a walkthrough",
  screenshotAlt:
    "Operator console — live Baltic vessel map with threat centre and OSINT verdict panel",
  // Mirrors the vessel shown in the screenshot.
  verdict: {
    score: 22,
    level: "LOW",
    rows: ["AIS anomalies — none detected", "Sanctions — no indication"],
  },
};

export const platform = {
  eyebrow: "Platform",
  heading: "The AI engine",
  body: "Behind the console is our own analysis engine: a coordinated team of AI agents that search open sources, cross-check registries, and write the reports — working alongside AI models that flag anomalies in vessel identity and behaviour. It's built on the knowledge of people who spent their careers at sea and in intelligence, and designed to power more tools than one.",
  technologies: [
    "AI agent pipeline",
    "Anomaly detection models",
    "Open-web research",
    "Analyst in the loop",
  ],
};

export type RoleType = "founder" | "engineer" | "advisor";

export const team = {
  eyebrow: "Team",
  heading: "Our Team",
  subheading: "Meet the professionals behind our AI solutions",
  members: [
    {
      name: "Sławomir J. Chodor",
      role: "CoFounder / CSO",
      roleType: "founder" as RoleType,
      description: "Venture builder | entrepreneur | maritime & autonomy expert",
      image: slawomir,
    },
    {
      name: "Mikołaj Fiedorczuk",
      role: "CoFounder",
      roleType: "founder" as RoleType,
      description: "AI agent specialist | cybersecurity",
      image: mikolaj,
    },
    {
      name: "Stanisław Kołodziejczyk",
      role: "CoFounder",
      roleType: "founder" as RoleType,
      description: "AI agent specialist | robotics autonomy",
      image: stanislaw,
    },
    {
      name: "Michał Lejwoda",
      role: "CoFounder / CEO",
      roleType: "founder" as RoleType,
      description: "Robotics & embedded systems | autonomous drones",
      image: michal,
    },
    {
      name: "LT CDR Sebastian Kalitowski",
      role: "Advisor",
      roleType: "advisor" as RoleType,
      description: "Ex military intelligence officer | OSINT & HUMINT expert",
      image: sebastian,
    },
    {
      name: "CDR Kamil Sadowski",
      role: "Advisor",
      roleType: "advisor" as RoleType,
      description: "Experienced naval officer | from sonar systems operator to tactical officer",
      image: kamil,
    },
  ],
};

export const contact = {
  heading: "Let's dock together!",
  body: "Ready to see it on your waters? Get in touch for a walkthrough.",
  cta: "Book a walkthrough",
};
