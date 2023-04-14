import "./App.css";
import Component from "./Context/Component";
import React, { createContext } from "react";

const fName = createContext();
const lName = createContext();

function App() {
  return (
    <div className="App">
      <fName.Provider value={"Pravin"}>
        <lName.Provider value={"Singh"}>
          <Component />
        </lName.Provider>
      </fName.Provider>
    </div>
  );
}

export default App;
export { fName, lName };
