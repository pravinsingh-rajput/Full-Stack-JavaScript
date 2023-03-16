import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>
        Increase
      </button>
      <button onClick={() => (count === 0 ? "" : setCount(count - 1))}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
