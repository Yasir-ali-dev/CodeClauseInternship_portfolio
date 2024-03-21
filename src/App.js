import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Section from "./components/Section";
import Techs from "./components/Techs";
import About from "./components/About";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Skills />
      <Section />
      {/* <Techs /> */}
      <About />
    </div>
  );
}

export default App;
