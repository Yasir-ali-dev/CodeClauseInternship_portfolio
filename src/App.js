import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Section from "./components/Section";
import Techs from "./components/Techs";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Skills />
      <About />
      <Services />
      <Projects />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
