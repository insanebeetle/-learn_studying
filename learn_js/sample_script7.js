/*const textInput = document.getElementById("text");
const buttonInput = document.getElementById("button");

button.addEventListener("click", function () {
  console.log(textInput.value);
});

button.addEventListener("click", function () {
  textInput.value = "정해진 텍스트 뿅";
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //실행과 동시에 새로고침 되는 현상을 방지
  console.log(form.name.value);
  console.log(form.town.value);
});
//html의 form태그에서 정확한 url이 있다면 위와같은 설정 노필요
*/
let result = 3 > 2 ? "true" : "false";
console.log(result);

const select = document.querySelector("select");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(select.value);
  let result = select.value == "foot" ? "축구!" : "노 축구!";
  console.log(result);
});
