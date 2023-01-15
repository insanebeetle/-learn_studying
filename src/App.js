import React, { useCallback } from "react";
import "./App.css";

import { useState } from "react";
import Lists from "./component/Lists.js";
import Form from "./component/Form.js";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((data) => id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    //새로운 할일 데이터 만들기
    let newTodo = {
      id: Date.now(), //유니크한 값으로 데이프 메소드이용
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleRemoveClick = () => {
    setTodoData([]);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-3 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할일 목록</h1>
          <button onClick={handleRemoveClick} className="px-4 py-2 float-right">
            all삭제
          </button>
        </div>

        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
