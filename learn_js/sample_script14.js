/*const myName = "yuno";

console.log(myName);
localStorage.setItem("myName", myName);
*/
const myName = localStorage.getItem("myName");

//alert(myName);

//localStorage.setItem("cat", "고양이");
//localStorage.setItem("dog", "강아지");
//localStorage.setItem("myName", "응애");

localStorage.removeItem("dog");
localStorage.clear();

/*배열 메소드
forEach 각각 배열의 전체호출
map 배열의 각 요소 콜백결과를 새로운 배열로 반환
filter 배열의 각 요소의 콜백결과 true만을 모아 배열 반환
*/

const twice = ["사나", "나연"];

twice.forEach(function (para, index) {
  const p = document.createElement("p");
  p.textContent = `${index + 1}번째 멤버 ${para}`;
  document.body.appendChild(p);
});

const result = twice.map(function (para, index) {
  return `아름다운 ${index + 1}번 ${para}`;
});
console.log(result);

const res = twice.filter(function (para, index) {
  //조건부 필터 true 반환
  return para === "사나";
});
console.log(res);
