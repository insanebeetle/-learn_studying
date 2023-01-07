const url = "https://dog.ceo/api/breeds/image/random";

const request = new XMLHttpRequest();

request.addEventListener("load", function () {
  const obj = JSON.parse(request.responseText);
  const imageSrc = obj.message;

  const div = document.querySelector("div");
  div.style.backgroundImage = `url(${imageSrc})`;
}); //load 명령어 + open메소드로 보낼 데이터를 준비
//이때 받아오는 데이터는 json화 되어있으므로 parse메소드로 데이터화시켜야함
//플러스 받아온 데이터를 시각화,

//request.open("GET", url); //요청방식, 서버 url

request.addEventListener("error", function () {
  alert("뭔가 문제가 있는 듯 해여");
}); //에러에 대한 예외처리를 핸들러를 통해 해결

const button = document.querySelector("button");

button.addEventListener("click", function () {
  request.open("GET", url);
  request.send();
});
//화면상 상호작용? 클릭후 결과를 표시하게 위해 버튼에 핸들러 클릭 메소드로
//send()메소드 실행
