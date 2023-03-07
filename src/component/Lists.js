import React, { memo } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";

const Lists = memo(({ todo, setTodo }) => {
  const handleEnd = (result) => {
    if (!result.destination) return;
    const newTodo = [...todo];
    const [reorderitem] = newTodo.splice(result.source.index, 1);
    //nowtodo에 삭제된 배열을 reorder에 잡아둠
    newTodo.splice(result.destination.index, 0, reorderitem);
    setTodo(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(porvided) => (
            <div {...porvided.droppableProps} ref={porvided.innerRef}>
              {todo.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={toString(data.id)}
                  index={index}
                >
                  {(porvided, snapshot) => (
                    <List
                      key={data.id}
                      id={data.id}
                      data={data}
                      todo={todo}
                      setTodo={setTodo}
                      porvided={porvided}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {porvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Lists;
