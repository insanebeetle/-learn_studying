import NavBar from "component/NavBar";
import Seo from "component/Seo";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`api/movies`)).json();
      setMovies(results);
      console.log(results);
    })();
  }, []);
  // 위 {result}는 객체구조 분해 할당
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb/org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

//<style jsx global> 은 동일 페이지 내의 스코프를 가짐
//완전한 전역 스타일을 구현시킨다면 _app.js를 이용
