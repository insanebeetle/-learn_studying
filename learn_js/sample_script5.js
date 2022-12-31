const inputType = document.querySelector("#typing");
const inputClick = document.querySelector("#push");
//typing, push 라고하는 "요소"에 접근하기 위해서
//(그 안의 여러이벤트 들을 동작시키기 위해) inputType,inputClick이라는
//상수를 만들어 집어넣어둠
const handleTyping = function () {
  console.log("타이핑중");
};
const handleClick = function () {
  console.log("클릭중");
};
//어떤 이벤트가 일어날때 리액션(확인용)을 작성
inputType.onkeydown = handleTyping;
inputClick.onclick = handleClick;
//요소가 즐어간 inputType으로 onclick등의 기능?에 접근

/*이벤트 구성의 전체적인 흐름
1. 액션을 할 요소를 querySelector를 이용해 상수에 집어넣음- 요소아래의 기능에 접근하기위해
2. 액션이 취해질 경우의 리액션을 만듦(함수 등 이용)
3. 요소의 기능과 리액션을 연결함
# 요소의 기능자체가 액션이됨, 2,3을 동시에 작성연결도 가능
*/

//target.addEventListener('click', function(){})
/*addEventListener함수 사용 이점 - 이전 추가한 이벤트를 제거 가능
하나의 타겟에 다수의 이벤트 추가 가능, 그외 추가기능
*/

const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");
//queryselector getelementbyid 차이- 결과는 같은 'id로만'접근하냐 간단히 한번에 한해서 접근하냐

btn2.addEventListener("click", handleClick);
btn2.addEventListener("click", function () {
  console.log("다른 핸들러 추가");
});

btn2.removeEventListener("click", handleClick);
//이전 핸들러 삭세

const handleevent = function (event) {
  console.log(event.target);
}; //이벤트가 발생한 타겟을 알려주는 함수(리액션)
btn3.addEventListener("click", handleevent);
