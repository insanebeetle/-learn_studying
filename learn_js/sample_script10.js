const h1 = document.querySelector("h1");
const addbtn = document.querySelector("#add");
const removebtn = document.querySelector("#remove");
const togglebtn = document.querySelector("#toggle");
console.log(h1.classList);

addbtn.addEventListener("click", function () {
  h1.classList.add("text");
});

removebtn.addEventListener("click", function () {
  h1.classList.remove("text");
});

togglebtn.addEventListener("click", function () {
  h1.classList.toggle("text");
});
//toggle 있으면 제거하고 없으면 생성 ->끄고켜는 스위치 버튼으로 응용

/*배열 만들기
let arr = [1,2,3,5,6,8]
let arr = new Array(1,2,3,4,5,6)
*/

const goty = ["위쳐", "바이오쇼크", "갓오브워", "엘든링"];
let index = 3;
console.log(goty[index]);

const pet = ["강아지", "고양이", "앵무새", "고슴도치"];
console.log(pet.length); //length 배열의 길이 반환 #메소드가 아님

pet.push("이구나아", "거북이"); //push - 요소 추가
console.log(pet);

pet.pop(); //배열 마지막 요소 제거
console.log(pet);

let result = pet.indexOf("고양이");
//indexof -주어진 값과 일치하는 인덱스*순서 반환, 값이 없을시 -1반환
console.log(result + 1);

pet.splice(0, 2, "호랑이", "늑대"); //splice - 배열요소를 원하는 위치에서 원하는 수만큼 제거,추가
console.log(pet);

pet.forEach(function (ele) {
  console.log(ele); //배열요소 갯수 및 요소 반환
});
