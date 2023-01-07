const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
let todoArr = [];

function displayTodos() {
  todoList.innerHTML = "";
  todoArr.forEach((aTodo) => {
    const todoItem = document.createElement("li");
    const todoDelbtn = document.createElement("span");
    todoDelbtn.innerHTML = "x";
    //todoDelbtn.title = "삭제"
    todoItem.innerText = aTodo.todotext;
    todoItem.classList.add(aTodo.todoDone ? "done" : "yet");
    todoItem.appendChild(todoDelbtn);
    todoDelbtn.addEventListener("clcik", function () {
      handleTodoDelClick();
    });
    todoItem.addEventListener("click", function () {
      handleTodoItemClcik();
    });
    todoList.appendChild(todoItem);
  });
}

function handleTodoDelClick(clickedId) {
  todoArr.filter(function (aTodo) {
    return aTodo.todoId !== clickedId;
  });
  displayTodos();
  loadTodos();
}

function handleTodoItemClcik(clickedId) {
  todoArr = todoArr.map(function (aTodo) {
    return aTodo.todoId !== clickedId
      ? aTodo
      : { ...aTodo, todoDone: !aTodo.todoDone };
  });
  displayTodos();
  loadTodos();
}

function saveTodos(dotoArr) {
  localStorage.setItem("myTodos", JSON.stringify(dotoArr));
}

function loadTodos() {
  const myTodos = JSON.parse(localStorage.getItem("myTodos"));

  displayTodos();
}

todoForm.addEventListener("summit", function (e) {
  e.preventDefault();
  const toBeAdd = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false,
  };
  todoArr.push(toBeAdd);
  displayTodos();
  saveTodos();
});

loadTodos();
