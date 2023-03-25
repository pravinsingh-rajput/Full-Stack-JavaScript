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
    if (!data.length) {
      alert("Enter Task to Add");
    } else {
      setItems((prev) => {
        return [...prev, data];
      });

      setData("");
    }
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <div className="main_Container">
        <h1>Todo List</h1>
        <div className="user_action">
          <input type="text" value={data} onChange={changeHandler} required />

          <button className="add" onClick={add}>
            +
          </button>
        </div>

        <ol>
          {items.map((val, i) => {
            return <Todo text={val} click={deleteItem} key={i} id={i} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
