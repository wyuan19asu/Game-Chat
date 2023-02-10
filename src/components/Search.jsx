import React, { useContext, useState } from "react";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export default function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

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

  const handleSelect = async () => {
    // check if groupchats exist, otherwise create new

    const combinedUID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedUID));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedUID), { messages: [] });

        // create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedUID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedUID + ".date"]: serverTimestamp(),
        });

        // create user chats
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedUID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedUID + ".date"]: serverTimestamp(),
        });
      }
    } catch {
      setErr(true);
    }
    setUser(null);
    setUserName("");
  };
  return (
    <div className="search">
      <div className="search__bar">
        <input
          type="text"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      {err && <span id="somethingWrong">Something went wrong</span>}
      {user && (
        <div className="user__chat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" className="userPic" />
          <div className="user__chat--info">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}
