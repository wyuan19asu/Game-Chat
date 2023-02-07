import React from "react";
import avatar from "../images/avatar.svg";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const file = e.target[4].files[0];

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="logo">Game Chat</span>
        <span className="title">Register</span>
        <form action="" className="register__form" onSubmit={handleSubmit}>
          <label>
            Display name
            <input type="text" placeholder="Display name" id="" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Email" id="" />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Must be at least 8 characters"
              id="password"
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm__pass"
            />
          </label>
          <label htmlFor="file" id="avatar">
            <img src={avatar} alt="" id="avatar__img" />
            Add avatar
            <input type="file" id="file" />
          </label>
          <button className="signup__btn">Sign up</button>
        </form>
        <div className="alt__register--wrapper">
          <div className="left__line"></div>
          <p className="alt__register--text"> Or Register with </p>
          <div className="right__line"></div>
        </div>
        <p id="login__text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
