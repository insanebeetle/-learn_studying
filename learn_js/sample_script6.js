const button = document.getElementById("push");
const div = document.getElementById("area");

button.addEventListener("click", function () {
  console.log("div 생성");
  const newDiv = document.createElement("div"); //div를 생성, 구현X

  newDiv.style.backgroundColor = "red";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";

  div.appendChild(newDiv); //div를 html상 생성
  div.append("하하");

  console.log(div.appendChild(newDiv));
  console.log(div.append(newDiv));
});
