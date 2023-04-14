import "./App.css";
import Home from "./Router/Home";
import About from "./Router/About";
import Contact from "./Router/Contact";
import Menu from "./Router/Menu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;
