import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
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

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="netflix logo"
        src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={() => window.location.reload} //이미지클릭시 초기화면 호출
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
