import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";
//아래처럼 파라미터로 티폴트,초기화 값 입력
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}; //if문에서 switch문으로 리팩트

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
//이벤트 리스너를 구현하는 두가지 방법
