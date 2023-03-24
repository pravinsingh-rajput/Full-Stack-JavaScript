import "./App.css";
import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [data, setData] = useState();
  const [items, setItems] = useState([]);

  const changeHandler = (e) => {
    setData(e.target.value);
  };

  const add = () => {
    setItems((prev) => {
      return [...prev, data];
    });

    setData("");
  };

  return (
    <div className="App">
      <div className="main_Container">
        <h1>Todo List</h1>
        <div className="user_action">
          <input type="text" value={data} onChange={changeHandler} />
          <button className="add" onClick={add}>
            +
          </button>
        </div>

        <ol>
          {items.map((val, i) => {
            return <Todo text={val} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
