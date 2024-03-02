import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Skills />
    </div>
  );
}

export default App;
