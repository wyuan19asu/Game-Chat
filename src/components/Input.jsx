import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateDoc, arrayUnion, Timestamp, doc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Input() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const { currentUser } = useContext(AuthContext);
  //   other user
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (image) {
      console.log("nothing");
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
  };
  return (
    <div className="message__input">
      <input
        type="text"
        placeholder="Write a message..."
        className="message__inputBar"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="message__send">
        <FontAwesomeIcon
          icon="fa-regular fa-file"
          className="send__icons file__img"
        />
        <input
          type="file"
          id="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="file" id="image__icon">
          <FontAwesomeIcon
            icon="fa-regular fa-file-image"
            className="send__icons"
          />
        </label>
        <button className="send__messageBtn" onClick={handleSend}>
          <FontAwesomeIcon
            icon="fa-solid fa-paper-plane"
            className="send__icons"
          />
        </button>
      </div>
    </div>
  );
}
