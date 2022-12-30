let num1 = 3;
let num2 = 1;

console.log(num1 >= num2);
console.log(num1 <= num2);

if (num1 == num2) {
  console.log("good!!");
} else {
  console.log("Not good");
}

while (num1 < 5) {
  console.log(num1);
  num1 += 1;
}
console.log("while out");

while (confirm("메새지")) {
  console.log(confirm("메새지"));
  //confirm 경고와 비슷하지만 확인true과 취소cancle 버튼이 생김
}
console.log("while out");

for (let i = 0; i <= 2; i += 1) {
  console.log("반복진행중" + i);
}

for (let i = 0; i <= 10; i += 1) {
  if (i % 2 == 0) {
    console.log("반복진행중" + i);
  }
}
/*while (num2 < 4) {
  alert(num2);
  num2 += 1;
}*/
