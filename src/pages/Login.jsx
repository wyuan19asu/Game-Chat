import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export default function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="logo">Game Chat</span>
        <span className="title">Sign in</span>
        <form action="" className="register__form" onSubmit={handleSubmit}>
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
          <button className="login__btn">Login</button>
          {err && <span id="somethingWrong">Something went wrong</span>}
        </form>
        <div className="alt__register--wrapper">
          <div className="left__line"></div>
          <p className="alt__register--text"> Or Sign in with </p>
          <div className="right__line"></div>
        </div>
        <p id="login__text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
