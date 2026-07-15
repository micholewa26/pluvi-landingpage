import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Solutions from "./components/Solutions";
import Console from "./components/Console";
import Platform from "./components/Platform";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Solutions />
        <Console />
        <Platform />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
