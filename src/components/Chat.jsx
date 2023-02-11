import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

export default function Chat() {
  const notImplemented = () => {
    alert("Not implemented yet!");
  };

  const { data } = useContext(ChatContext);
  return (
    <div className="chat__info">
      <div className="chat">
        <span>{data.user?.displayName}</span>
        <div className="chat__icons">
          <FontAwesomeIcon
            icon="fa-solid fa-video"
            className="chat__icon"
            onClick={notImplemented}
          />
          <FontAwesomeIcon
            icon="fa-solid fa-user-plus"
            className="chat__icon"
            onClick={notImplemented}
          />
          <FontAwesomeIcon
            icon="fa-solid fa-ellipsis"
            className="chat__icon"
            onClick={notImplemented}
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
