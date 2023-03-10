import React, { useState } from "react";
import avatar from "../images/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const passNoMatch = document.querySelector("#pass__noMatch");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const file = e.target[4].files[0];

    const validatePassword = () => {
      let isValid = true;
      if (password !== "" && confirmPassword !== "") {
        if (password !== confirmPassword) {
          isValid = false;
          passNoMatch.textContent = "Passwords does not match";
        }
      } else {
        console.log("MATCH");
      }
      return isValid;
    };

    if (validatePassword()) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const storageRef = await ref(storage, displayName);

        const uploadTask = await uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            // Handle unsuccessful uploads
            setErr(true);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/");
              }
            );
          }
        );
      } catch (err) {
        setErr(true);
      }
    }
  };
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="logo">Game Chat</span>
        <span className="title">Register</span>
        <form action="" className="register__form" onSubmit={handleSubmit}>
          <label>
            Display name
            <input type="text" placeholder="Display name" id="" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Email" id="" required />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Must be at least 8 characters"
              id="password"
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm__pass"
              required
            />
          </label>
          <label htmlFor="file" id="avatar">
            <img src={avatar} alt="" id="avatar__img" />
            Add avatar
            <input type="file" id="file" />
          </label>
          <button className="signup__btn">Sign up</button>
          <p id="pass__noMatch"></p>
          {err && <span id="somethingWrong">Something went wrong</span>}
        </form>
        <div className="alt__register--wrapper">
          <div className="left__line"></div>
          <p className="alt__register--text"> Or Register with </p>
          <div className="right__line"></div>
        </div>
        <p id="login__text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
