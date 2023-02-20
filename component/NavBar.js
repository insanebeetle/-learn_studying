import Link from "next/link";
import { useRouter } from "next/router";
//import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>about</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
// <a href="/"> 으로 홈화면을 연결할 경우 새로고침현상을 일으키므로
//<link>를 사용
//next13부터는 Link만 사용해서 쌉가능
/*<Link href="/about"
style={{ color: router.pathname === "/about" ? "red" : "blue" }}
>처럼 스타일 적용 가능하지만 모듈화를 사용하면 className이 중복되도 재사용가능
*/
//nextjs에서 각 묘듈화된 css를 적용할 경우 아래처럼 백틱을 이용해 여러모듈적용가능
/* 1.  <Link href="/" 
className={`${styles.link}${router.pathname === "/" ? styles.active : ""}`}>
2.  <Link href="/" 
className={[styles.link, router.pathname === "/" ? styles.active : ""].join()}>

3. <style jsx>{``}를 모듈파일에 적용도 할 수 있지만 동일 스크립트가 우선시
*/
