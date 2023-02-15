import NavBar from "component/NavBar";
//import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;<span> Hello</span>
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </>
  );
}

//_app.js는 프레임워크 룰임
//nextjs가 실행될때 _app.js를 무조건 확인하며, 각 페이지(컴포넌트)를
//props로 받아서 내용대로 실행(랜더링)함
//어떤 페이지던간에 공통된 청사진이 있다면 _app.js을 이용해 밑그림 그림
