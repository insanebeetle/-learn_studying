type Age = number;
//전역 변수 선언

type Player = {
  name: string;
  age?: Age; //?를써서 선택인자 선언가
};

const nico: Player = {
  //:타입명으로 객체 생성
  name: "nico",
};

const yu: Player = {
  name: "yu",
  age: 30,
};

/*function playerMaker(name: string): Player {
  return {name}
}
// 리턴함수형 선언 포맷
const lyn: Player = {
  name: "lyn",
};*/

const playerMaker = (name: string): Player => ({ name: name });
//화살표형 함수 선언
const lyn = playerMaker("lyn");

lyn.age = 12;

console.log(lyn);

const number: readonly number[] = [1, 2, 3, 4];
//읽기전용 선언- 선언위치 기억하기
number.push(5); //readonly에 의해 푸시메소드 금지

const play: [string, number, boolean] = ["yu", 1, true];
//tuple 형태

let x: unknown;
//unknown은 현재는 어떤 타입인지 모르지만 나중에 타입정의 가능
//ex api를 받아올때 어떤 형태인지 모를때
if (typeof x === "number") {
  let b = x + 1;
}

/*never함수는 절대로 리턴이 존재하지 않을 경우사용
function hello(): never {
  throw new Error("xxx");
}*/

function hello(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}

/*const add (a:number, b:number) => a+b
function add(a:number, b:number){
  return a+b
} */
//콜시그니쳐 - 함수(타입선언)에 마우스 대면 생기는 함수(타입)의 포맷
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

//함수의 인자 반환 타입만 선언해주고 타입을 끌어와 평범한 함수처럼 이용
const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};
//위처럼　인자의 속성이 여러개일 경우
//그 인자타입에 맞게 적절한 실행이 행하는것을 오버로딩이라고함 #자바

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

type Minus = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
}; //그냥 C에 ?붙여도 문제없음
const minus: Minus = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
//인자수가 달라질 경우 ?로 한놈이 선택인걸 선언해줌
