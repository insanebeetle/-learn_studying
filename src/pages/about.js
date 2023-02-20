import NavBar from "component/NavBar";
import Seo from "component/Seo";
import Head from "next/head";

export default function potato() {
  return (
    <div>
      <Seo title="About" />
      <h1>Poato</h1>
    </div>
  );
}
//유저에게 보여주고 싶은 부분은 export default를 반드시 넣을것
//기본 혼페이지 화면은 index.js로 구현
