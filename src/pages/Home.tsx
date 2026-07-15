import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Value from "../components/Value";
import AppDemo from "../components/AppDemo";
import Applications from "../components/Applications";
import Module from "../components/Module";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Value />
    <AppDemo />
    <Applications />
    <Module />
    <Contact />
    <Footer />
  </div>
);

export default Home;
