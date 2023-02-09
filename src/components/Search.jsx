import React, { useState } from "react";
import profilePic from "../images/RR.jpg";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className="search">
      <div className="search__bar">
        <input
          type="text"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {err && <span id="somethingWrong">Something went wrong</span>}
      {user && (
        <div className="user__chat">
          <img src={user.photoURL} alt="" className="userPic" />
          <div className="user__chat--info">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}
