const rollbtn = document.getElementById("roll");
const resetbtn = document.getElementById("reset");
const numberDiv = document.querySelector("number");
let arr = [0, 0, 0, 0, 0, 0];

function getNumber(number) {
  const eachNumDiv = document.createElement("div");
  eachNumDiv.classList.add("eachnum");
  eachNumDiv.textContent = number;
  numberDiv.appendChild(eachNumDiv);
}

rollbtn.addEventListener("clcik", function () {
  for (i = 0; i < arr.length; i++) {
    let result = Math.floor(Math.random() * 100);
    if (result < 46 && arr.indexOf(result) === -1) {
      arr[i] = result;
    } else {
      i--;
    }
    console.log(arr);
    getNumber(result);
  }
});

//rollbtn.addEventListener("clcik", roll());

resetbtn.addEventListener("click", function () {
  arr.splice(0, 6, 0, 0, 0, 0, 0, 0);
  console.log(arr);
  getNumber(arr);
});

/*구현할 기능 
버튼을 누르면 펑션 실행 ok
6길이 배열에 각각 랜덤한 숫자를 집어 넣는다 ok
숫자는 1~45까지의 범위ok

중복 되면 안됨 =

추출된 숫자를 span에 하나씩 들어가게 입력

+가능하면 인터벌 1초로 하나씩 나오게 돌리기
*/
