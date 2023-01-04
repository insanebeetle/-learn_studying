const rollButton = document.getElementById("roll");
const removeButton = document.getElementById("remove");
const numberDiv = document.querySelector(".number");
const number = [];
const colors = ["orange", "skyblue", "red", "purple", "green"];

function outNumber(num) {
  const eachNumDiv = document.createElement("div");
  eachNumDiv.classList.add("eachnum");
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = num;
  numberDiv.appendChild(eachNumDiv);
}

rollButton.addEventListener("click", function () {
  while (number.length < 6) {
    let rand = Math.floor(Math.random() * 45) + 1;
    if (number.indexOf(rand) === -1) {
      number.push(rand);
      outNumber(rand);
    }
  }
});

removeButton.addEventListener("click", function () {
  number.splice(0, 6);
  console.log(number);
  numberDiv.textContent = "";
});
