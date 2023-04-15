import "./App.css";
import Home from "./Router/Home";
import About from "./Router/About";
import Contact from "./Router/Contact";
import Menu from "./Router/Menu";
import Error from "./Router/Error";
import Profile from "./Router/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
