import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const titles: Record<string, string> = { "/": "Sterowanie pompami", "/o-nas": "O nas", "/system": "System PLUVI", "/pompy": "Pompy i urządzenia", "/konfigurator": "Konfigurator zestawu", "/kontakt": "Kontakt" };
export default function SiteLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const route = pathname.replace(/\/+$/, "") || "/";
    document.title = `${titles[route] ?? "Strona nie istnieje"} — PLUVI`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://pluvi.pl${route}`);
  }, [pathname]);
  return <><Navbar /><main id="main-content"><Outlet /></main><Footer /></>;
}
