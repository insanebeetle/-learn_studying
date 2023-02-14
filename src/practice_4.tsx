interface User2 {
  firstname: string;
  lastname: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}

class Player4 implements User2, Human {
  constructor(
    public firstname: string,
    public lastname: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstname} ${this.lastname} `;
  }
  sayHi(name: string): string {
    return `hello ${name}. My name is ${this.fullName()} `;
  }
}

function makeUser(user: User2) {
  return "hi";
}

makeUser({
  firstname: "nico",
  lastname: "las",
  fullName: () => "xx",
  sayHi: (name) => "string",
});

type PlayerA = {
  name: string;
};
type PlayerAA = PlayerA & {
  lastname: string;
};
const playerA: PlayerAA = {
  name: "nico",
  lastname: "boom",
};

// 위는 타입 아래는 인터페이스
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastname: string;
}
interface PlayerBB {
  //type형의 경우 이처럼 property추가는 상속으로만 가능
  health: number; //인터페이스의 경우 언제든지 추가 가능
}
const playerB: PlayerBB = {
  name: "cino",
  lastname: "booer",
  health: 10,
};

/*abstract class User2 {
  constructor(protected firstname: string, protected lasttname: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
//abstract클래스는 표준화된 프로퍼티와 메소드를 갖는 청사진을 만듬
//그러나 js상에서 추상클래스는 단순한 클래스가 된다
class Player4 extends User2 {
  fullName(): string {
    return `${this.firstname} ${this.lasttname} `;
  }
  sayHi(name: string): string {
    return `hello ${name}. My name is ${this.fullName()} `;
  }
}*/
