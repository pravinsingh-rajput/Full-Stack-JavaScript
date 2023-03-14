import "./App.css";
import HeroSection from "./Component/HeroSection/HeroSection";
import FeaturesSection from "./Component/FeaturesSection/FeaturesSection";

function App() {
  return (
    <div className="App">
      <HeroSection className="hero_section" />
      <FeaturesSection className="Feature_section" />
    </div>
  );
}

export default App;
