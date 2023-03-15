import "./App.css";
import HeroSection from "./Component/HeroSection/HeroSection";
import FeaturesSection from "./Component/FeaturesSection/FeaturesSection";
import FrequentQuetions from "./Component/Questions/F&Q";

function App() {
  return (
    <div className="App">
      <HeroSection className="hero_section" />
      <FeaturesSection className="feature_section" />
      <FrequentQuetions className="frequent_quetions" />
    </div>
  );
}

export default App;
