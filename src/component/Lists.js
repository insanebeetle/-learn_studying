import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";

const Lists = React.memo(({ todoData, setTodoData, handleClick }) => {
  const handleEnd = (result) => {
    if (!result.destination) return;
    const newTodoData = [...todoData];
    //변경시키는 아이템을 배열에서 지움
    //return값으로 지워진 아이템을 잡음
    const [reoderedItem] = newTodoData.splice(result.source.index, 1);

    //원하는 자리에 reorderedItem을 insert해줌
    newTodoData.splice(result.destination.index, 0, reoderedItem);
    setTodoData(newTodoData);
  };

  //드래그앤 드롭 구현 - api를 따와서 기본적인 틀만들고 //속성부여해야됨
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                      handleClick={handleClick}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});
export default Lists;
