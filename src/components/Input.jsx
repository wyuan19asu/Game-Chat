import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  updateDoc,
  arrayUnion,
  Timestamp,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function Input() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const { currentUser } = useContext(AuthContext);
  //   other user
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (image) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          //   setErr(true);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              });
            }
          );
        }
      );
    } else {
      if (text !== "") {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }
    }
    if (text !== "") {
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
    }

    setText("");
    setImage(null);
  };

  const handleKey = (e) => {
    if ((e.code === "Enter" && text !== "") || image) {
      handleSend();
      // setText("");
      // setImage(null);
    }
  };

  const notImplemented = () => {
    alert("Not implemented yet!");
  };

  return (
    <div className="message__input">
      <input
        type="text"
        placeholder="Write a message..."
        className="message__inputBar"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleKey}
      />
      <div className="message__send">
        <button type="button" onClick={notImplemented} id="file__iconBtn">
          <FontAwesomeIcon
            icon="fa-regular fa-file"
            className="send__icons file__img"
          />
        </button>

        {/* <input type="file" name="file" value="" />
        <label htmlFor="file" id="file__icon"></label> */}
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
