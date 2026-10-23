import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";
import logo from "../assets/pluvi-logo-blue.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" aria-label="PLUVI — strona główna"><img src={logo} alt="PLUVI" className="h-10 w-auto" /></Link>
        <nav aria-label="Menu główne" className="hidden md:flex items-center gap-6">
          {navLinks.map(link => <NavLink end={link.href === "/"} key={link.href} to={link.href} className={({ isActive }) => `text-sm transition-colors ${isActive ? "text-white border-b border-[#c3e5c7] pb-1" : "text-white/65 hover:text-white"}`}>{link.label}</NavLink>)}
        </nav>
        <Link to="/konfigurator" className="nav-config-cta hero-primary !py-2.5">Dobierz zestaw ↗</Link>
        <button type="button" className="md:hidden text-white p-2" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Zamknij menu" : "Otwórz menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-nav" aria-label="Menu mobilne" className="md:hidden bg-secondary px-6 py-5 flex flex-col gap-4" onKeyDown={e => { if (e.key === "Escape") setOpen(false); }}>
        {navLinks.map(link => <NavLink key={link.href} to={link.href} end={link.href === "/"} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "text-[#c3e5c7]" : "text-white/75"}>{link.label}</NavLink>)}
      </nav>}
    </header>
  );
};
export default Navbar;

