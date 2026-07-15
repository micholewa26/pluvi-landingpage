import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Regulamin from "./pages/Regulamin";

// The app is served from "/" on the custom domain but from
// "/pluvi-landingpage/" on GitHub Pages; detect the subpath at runtime so the
// same relative-base build works in both places.
const basename = window.location.pathname.startsWith("/pluvi-landingpage")
  ? "/pluvi-landingpage"
  : "/";

const App = () => (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
      <Route path="/regulamin" element={<Regulamin />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
