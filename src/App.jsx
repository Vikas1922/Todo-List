import { useState } from "react";

import "./App.css";
import TodoList from "../components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const arr = [];

  const [list, setList] = useState(arr);

  // console.log(list);++
  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleAddClick() {
    const valOfInput = input;
    setList((arr) => [...arr, valOfInput]);
    setInput("");
  }

  function handleDelClick(id) {
    setList((prevList) => {
      return prevList.filter((listItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
        Todo List - Save your items here!
      </h1>
      <TodoList
        onChange={handleChange}
        valInput={input}
        btnclick={handleAddClick}
        valList={list}
        delClick={handleDelClick}
      />
    </>
  );
}

export default App;
