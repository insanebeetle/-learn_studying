import React, { useState } from "react";
import Form from "./component/Form";
import Lists from "./component/Lists";
import "./App.css";

const initTodo = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

function App() {
  const [todo, setTodo] = useState([initTodo]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodo((prev) => [...prev, newTodo]);
    localStorage.setItem("todo", JSON.stringify([...todo, newTodo]));
    setValue("");
  };

  const handleRemove = () => {
    setTodo([]);
    localStorage.setItem("todo", JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>To Do List</h1>
          <button className="border" onClick={handleRemove}>
            Delete All
          </button>
        </div>

        <Lists todo={todo} setTodo={setTodo} />
        <Form setValue={setValue} handleSubmit={handleSubmit} value={value} />
      </div>
    </div>
  );
}

export default App;
