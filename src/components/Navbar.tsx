import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, hero } from "../data/content";
import logo from "../assets/pluvi-logo-blue.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          aria-label="PLUVI — początek strony"
        >
          <img src={logo} alt="PLUVI logo" className="h-10 w-auto" />
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("#contact")}
            className="rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            {hero.cta}
          </button>
        </div>

        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-secondary border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-secondary-foreground/80 hover:text-primary py-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="rounded-lg bg-accent text-accent-foreground text-sm font-semibold px-5 py-3 mt-2"
          >
            {hero.cta}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
