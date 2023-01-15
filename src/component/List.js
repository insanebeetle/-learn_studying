import React, { useState } from "react";

//Lists 컴포넌트는 리스트의 이동 메소드만 구현하고
//리스트 생성함수는 다시한번 컴포넌트화 시켜서 렌더링

const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const handleCompleteChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (id === id) {
          completed = !completed;
        }
        return data;
      });
      setTodoData(newTodoData);
    };

    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded `}
      >
        <div className="items-center">
          <input
            type="checkbox"
            onChange={() => handleCompleteChange(id)}
            defaultChecked={completed}
          />
          <span className={completed ? "line-through" : null}>{title}</span>
        </div>
        <button
          className="px-4 py-2 float-right"
          onClick={() => setIsEditing(true)}
        >
          edit
        </button>

        <button
          className="px-4 py-2 float-right"
          onClick={() => handleClick(id)}
        >
          X
        </button>
      </div>
    );
  }
);
export default List;
