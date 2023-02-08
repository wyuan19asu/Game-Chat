import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__div">
          <p className="logo">Game Chat</p>
        </div>
        <div className="user">
          <img src="" alt="" />
          <span>John</span>
          <button className="logout__btn" onClick={() => signOut(auth)}>
            <FontAwesomeIcon
              icon="fa-solid fa-right-from-bracket"
              className="logout__icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
