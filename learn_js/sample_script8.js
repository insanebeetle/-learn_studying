function Dog(paramName, paramBreed) {
  this.name = paramName;
  this.breed = paramBreed;
}

const dog1 = new Dog("a", "b");
const dog2 = new Dog("c", "d");
const dog3 = new Dog("s", "d");
const dog4 = new Dog("q", "r");

console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(dog4);

const bool = dog1 == dog3 ? "true" : "false";
console.log(bool);

const h1 = document.querySelector("h1");
const now = new Date();

const hour = now.getHours();
const minu = now.getMinutes();
const seco = now.getSeconds();

const nowTime = `${hour}:${minu}:${seco}`; //백틱
h1.textContent = nowTime;

const then = new Date(2022, 12, 26);
console.log(then);

const h2 = document.querySelector("h2");
const time = new Date();
console.log(time.toLocaleString("en"));

/* 
getFullYear 연도 반환
getMonth 월 #0부터 시작
getDate 날짜 숫자
getDay 요일 숫자 #0부터시작
getHours 시간
getMinutes 분
getSecons 초
toLocaleStriong 지역날짜 시간 문자열 모든시간
*/
