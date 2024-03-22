import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Section from "./components/Section";
import Techs from "./components/Techs";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Skills />
      <Section />

      <About />

      <Services />
    </div>
  );
}

export default App;
