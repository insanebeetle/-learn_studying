const a = 2;
const b = 5;
let myName = "YU";

console.log(a - b);
console.log(a * b);
console.log(a + b);
console.log(myName);

myName = "YU JAEHO";
console.log(myName);

const dayofweek = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
console.log(dayofweek);
console.log(dayofweek[5]);

dayofweek.push("dead");
//array 항목 추가
console.log(dayofweek);

const player = {
  playerName: "nico",
  playerPoints: 1212,
  playeyfar: "little bit",
  sayHello: function (e) {
    console.log("hello my name is " + e);
  },
};

console.log(player);
player.lastName = "puishi";
player.playerPoints = 15;
console.log(player);

player.sayHello(myName);

const calculate = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
};

calculate.plus(2, 7);
calculate.minus(9, 7);
calculate.powerof(2, 7);
calculate.divide(2, 7);

function calculateAge(age) {
  return age + 2;
}

const krage = calculateAge(3);
console.log(krage);
//리턴 함수를 쓰는경우는 함수의 밖에서 변수를 이용할 필요가 있을때 사용

const age = parseInt(prompt("how old r u ?"));
//스트링변수를 정수로 변환
console.log(age);

if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log("confirm");
}

if (age != NaN && age > 20) {
  console.log("ok alchol");
} else {
  alert("no alchol");
}
