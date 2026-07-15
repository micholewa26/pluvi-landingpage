import logo from "../assets/logo-white.png";
import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <img src={logo} alt="Vector Baltic" className="h-8 w-auto opacity-80" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vector Baltic. All rights reserved.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
