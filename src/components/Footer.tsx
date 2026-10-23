import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/content";
import brandLogo from "../assets/pluvi-brand.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={brandLogo} alt="PLUVI logo" className="h-[3.3rem] w-auto" />
          </div>
          <p className="text-sm text-secondary-foreground/60 leading-relaxed">
            {company.footerDesc}
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Kontakt</h4>
          <div className="space-y-3 text-sm text-secondary-foreground/70">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors">
                {company.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="hover:text-primary transition-colors"
              >
                {company.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} /> {company.address}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Informacje</h4>
          <div className="space-y-2 text-sm">
            <Link to="/o-nas" className="block text-secondary-foreground/70 hover:text-white">O nas</Link>
            <Link to="/system" className="block text-secondary-foreground/70 hover:text-white">System PLUVI</Link>
            <Link to="/pompy" className="block text-secondary-foreground/70 hover:text-white">Pompy i urządzenia</Link>
            <Link to="/konfigurator" className="block text-secondary-foreground/70 hover:text-white">Konfigurator zestawu</Link>
            <Link to="/kontakt" className="block text-secondary-foreground/70 hover:text-white">Zapytaj o zestaw</Link>
            <Link
              to="/polityka-prywatnosci"
              className="block text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              Polityka Prywatności
            </Link>
            <Link
              to="/regulamin"
              className="block text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 pt-6 text-center text-xs text-secondary-foreground/40">
        © {new Date().getFullYear()} {company.name} Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);

export default Footer;
