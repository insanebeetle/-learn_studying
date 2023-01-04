const messi = {
  name: "리오넬 메시",
  age: 34,
  team: "생제르망",
  nation: "아르헨티나",
  friends: ["수아레즈"],
  kick: function () {
    console.log("shoot");
  },
};

console.log(JSON.stringify(messi));
console.log(typeof JSON.stringify(messi));

/*json은 객체 리터럴의 형태를 띄고 있지만
모든 값과 밸류를 ""로 묶고 전체를 `백틱으로 묶는다
일일이 모든 값과 밸류에 "",백틱을 붙일수 없으니 내장객체 사용 stringfy, parse
json : 웹이 서버와 교류하기 위한 텍스트 형태화*/
