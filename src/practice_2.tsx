/*type SuperPrint = {
  (arr:number[]):void
  (arr:boolean[]):void
  (arr:string[]):void
} 이처럼 여러가지 타입들을 동시에 배열에서 쓰고 싶을 경우 제네릭을 사용*/

type SuperPrint = <T, M>(arr: T[], b?: M) => T;
//제네릭 명/배열에 제네릭/반환타입이 제네릭

//<제네릭명>으로 어떤 형태든 들어가게 할수 있음
//이를 polymorphism

const superprint: SuperPrint = (arr) => arr[0];

superprint([1, 2, 3, 4]);
superprint([true, false]);
superprint([1, 2, true, false]);
