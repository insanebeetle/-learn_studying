import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const Navigate = useNavigate(); //검색어 메소드

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  const inputHandle = (e) => {
    setSearchValue(e.target.value);
    Navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="netflix logo"
        src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={() => window.location.reload} //이미지클릭시 초기화면 호출
      />
      <input
        value={searchValue}
        onChange={inputHandle}
        className="nav_input"
        placeholder="영화를 검색하세요"
      />

      <img
        alt="uset lofo"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        className="nav_avatar"
      />
    </nav>
  );
}

export default Nav;
