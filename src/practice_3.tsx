type Words = {
  [key: string]: string;
  //변수의 이름은 모르지만 타입만은 정해줄경우 쓰는 문법
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {}; //초기화
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  static hello() {
    return "hello";
  } //전역으로 어디서든 쓰일수 있는 static
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {} //public일지라도 출력은 가능하지만, 변경은 불가능하게 함
}

const kimchi = new Word("kimchi", "koreanfood");

const dict = new Dict();
console.log(dict);
dict.add(kimchi);
console.log(dict);
dict.def("kimchi");

type Team = "red" | "blue" | "green";
type Health = 1 | 5 | 10;
//특정 타입이 일정 값만 가지도록 하는 것
interface Player3 {
  nickName: string;
  team: Team;
  health: Health;
}
//interface는 오직 오브젝트의 특정모양을 알려주기위한 목적
//위의 type Team과 같은 역할은 할 수 없음
// 같은 이름의 인터페이스를 여러개 선언할수있음-ts는 이를 알아서 모아줌
/*
type Player = User & {} 이 코드도 상속코드랑 같음
*/
const nicol: Player3 = {
  nickName: "nicol",
  team: "red",
  health: 5,
};
