/*
setTimeout(실행할 함수, ms_단위의 시간)
setInterval(반복 실행할 함수 , ms 단위시간)
clearInterval 셋인터벌이 반복실행될때 이를 제어하기 위해, 멈추기 위한 메소드
*/

setTimeout(function () {
  console.log(1234);
}, 2000);

const button = document.querySelector("button");
let interId;
interId = setInterval(function () {
  console.log(4567);
}, 1000);
console.log(interId);

button.addEventListener("click", function () {
  clearInterval(interId);
});
// 버튼 눌러서 타이머 정지시키기
