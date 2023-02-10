import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__div">
          <p className="logo">Game Chat</p>
        </div>
        <div className="user">
          <img src={currentUser.photoURL} alt="" />
          <span>{currentUser.displayName}</span>
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
