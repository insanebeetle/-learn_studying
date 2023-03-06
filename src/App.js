import React, { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodo((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>To Do List</h1>
        </div>

        <List todo={todo} setTodo={setTodo} />
        <Form setValue={setValue} handleSubmit={handleSubmit} value={value} />
      </div>
    </div>
  );
}

export default App;
