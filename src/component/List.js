import React from "react";

function List({ todo, setTodo }) {
  const handleCompletedChange = (id) => {
    let newTodo = todo.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodo(newTodo);
  };

  const handleClick = (id) => {
    let newTodo = todo.filter((data) => data.id !== id);
    setTodo(newTodo);
  };

  return (
    <div>
      {todo.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                onChange={() => handleCompletedChange(data.id)}
                type="checkbox"
                defaultChecked={false}
              />
              <span className={data.completed ? "line-through" : undefined}>
                {data.title}
              </span>
            </div>
            <div className="items-center">
              <button
                className="float-right px-4 py-2"
                onClick={() => handleClick(data.id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
