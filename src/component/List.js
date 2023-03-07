import React, { memo, useState } from "react";

const List = memo(({ id, data, todo, setTodo, porvided, snapshot }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(data.title);

  const handleCompletedChange = (id) => {
    let newTodo = todo.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodo(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
  };

  const handleClick = (id) => {
    let newTodo = todo.filter((data) => data.id !== id);
    setTodo(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
  };

  const handleEditChange = (e) => {
    setEditTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = todo.map((data) => {
      if (data.id === id) {
        data.title = editTodo;
      }
      return data;
    });
    setTodo(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <div
        className={`flex items-center justify-between bg-gray-100 w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
      >
        <div className="items-center">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleEditChange}
              value={editTodo}
              className="w-full px-3 py-2 mr-4 text-fray-500 rounded"
            />
          </form>
        </div>
        <div className="items-center">
          <button
            className="float-right px-4 py-2"
            onClick={() => setIsEdit(false)}
          >
            X
          </button>
          <button
            onClick={handleSubmit}
            className="float-right px-4 py-2"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={id}
        {...porvided.draggableProps}
        ref={porvided.innerRef}
        {...porvided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
      >
        <div className="items-center">
          <input
            onChange={() => handleCompletedChange(id)}
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
          <button
            className="float-right px-4 py-2"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
});

export default List;
