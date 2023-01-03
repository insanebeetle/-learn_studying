const cat = {
  //직접 값을 받는 연습할것
  name: "tom",
  color: "gray",
  eat: function () {
    console.log("우마이!"); //인자를 전달하거나 반환값 펑션도 ㅇㅋ
  },
};
console.log(typeof cat);
console.log(cat.name);
console.log(cat["color"]);
cat.eat();

//spread연산자 - 객체리터럴, 배열의 요소 복사, 그대로 출력
//기존 배열에 새로운 배열을 집어넣을 수 있음
const pet = ["dog", "cat"];
console.log(...pet);
console.log(pet);
const animal = ["코뿔소", "맘모스", ...pet];
console.log(animal);

function printNames(para1, para2, para3, para4) {
  console.log(para1, para2, para3, para4);
}
printNames(...animal);
printNames(...pet);

const person = {
  name: "진호",
  job: "무직",
  eat: function () {
    console.log("우마이!");
  },
};
const a = { ...person };
//console.log(...person) 문법적으로 문제가 디ㅏㅁ
console.log(person);
console.log(a);

const teacher = {
  ...person,
  job: "선생", //기존 객체의 값에 접근해 밸류를 바꿀수 있음
  teach: function () {
    console.log("가르치기");
  },
};

console.log(teacher);
teacher.teach();
