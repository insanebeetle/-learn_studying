function sayHello() {
  console.log("hello");
  let hello = "헬로우";
  console.log(hello);
}
//함수 선언식 = 함수를 선언과 동시에 이름을 붙여줌,
//#함수 호출이 먼저 일어나더라도 뒤에서 함수를 찾아 씀 -호이스팅
sayHello(); //함수 호출식 = 함수명();
sayHello();

const sayBye = function () {
  console.log("bye");
};
sayBye();
//함수 표현식 - 함수내용을 생성하고 그에 대한 함수명을 붙여줌
//함수호출이 무조건 뒤에 와야됨

//console.log(hello);
// 스코프, 지역변수에 의해 함수내 변수는 외부에서 사용불가

function getThree() {
  return 3;
}
console.log(getThree());

function saySomething(smt, num) {
  for (i = 0; i < num; i++) {
    console.log(smt);
  }
}
saySomething("으아아악", 2);
saySomething("기모찌찌", 3);
