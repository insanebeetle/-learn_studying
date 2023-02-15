import NavBar from "component/NavBar";
//import "../styles/global.css";
export default function Home() {
  return (
    <div>
      <h1 className="active"> Hello</h1>
    </div>
  );
}

//<style jsx global> 은 동일 페이지 내의 스코프를 가짐
//완전한 전역 스타일을 구현시킨다면 _app.js를 이용
