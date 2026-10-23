import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import SiteLayout from "./pages/SiteLayout";
import System from "./pages/System";
import About from "./pages/About";
import Applications from "./components/Applications";
import Configurator from "./pages/Configurator";
import Contact from "./components/Contact";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Regulamin from "./pages/Regulamin";

const basename = window.location.pathname.startsWith("/pluvi-landingpage") ? "/pluvi-landingpage" : "/";
const App = () => (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/system" element={<System />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/pompy" element={<Applications />} />
        <Route path="/konfigurator" element={<Configurator />} />
        <Route path="/kontakt" element={<div className="pt-16"><Contact /></div>} />
        <Route path="*" element={<div className="site-page text-center"><h1 className="page-heading">Nie znaleźliśmy tej strony.</h1><Link to="/" className="hero-primary mt-8">Wróć na początek</Link></div>} />
      </Route>
      <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
      <Route path="/regulamin" element={<Regulamin />} />
    </Routes>
  </BrowserRouter>
);
export default App;
