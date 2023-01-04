const todaydiv = document.getElementById("today");
const timediv = document.getElementById("time");

function getTime() {
  let date = new Date();
  let year = date.getFullYear(); //date의 정보를 뽑아야됨
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec; 
  //1의 자리수의 경우 0을 채워서 줄이 변하는걸 방지하기 위한 삼항연산 

  todaydiv.textContent = `${year}/${month}/${day}`;
  timediv.textContent = `${hour}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000);
/* 
getFullYear 연도 반환
getMonth 월 #0부터 시작
getDate 날짜 숫자
getDay 요일 숫자 #0부터시작
getHours 시간
getMinutes 분
getSeconds 초
toLocaleStriong 지역날짜 시간 문자열 모든시간
*/
