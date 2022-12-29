window.alert("hello!"); //window.을 없어도 실행가능
/*window.alert("hello!");
//window.alert("hello!");*/
console.log("섹스킹");
console.log("is");
console.clear();

//1-2
console.log(-21);

let messi = 10;
console.log(messi);
messi = "메시";
console.log(messi);

//const 상수명 = 데이터 const 사용시 선언과 초기화 동시실행 필수 beacuse 상수는 변경 X
prompt("다이얼 로그 박스에 이렇게 쓸거야");
const text = "입력하세요";
const data = prompt(text);
console.log(data);

const str = `이건 어뜨할까? ${prompt("헤헤")}`;
console.log(str);

const name = prompt("이름");
const age = prompt("나이");
console.log(`내 이름은 ${"name"} 이고 나이는 ${"age"}입니다.`);
//유노 코딩 js강의 1~9
//null 과 undefined는 조금 다름

let bool1 = true;
console.log(bool1);
console.log(typeof bool1); //typeof 객체명 사용시 어떤 type의 변수인지 확인 가능
