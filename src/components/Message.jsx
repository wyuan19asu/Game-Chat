import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import stockProfile from "../images/messagestock.jpg";
import RR from "../images/RR.jpg";
export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  //   other user
  const { data } = useContext(ChatContext);

  return (
    <div className="message owner">
      {/* <div className="message__info">
        <img src={stockProfile} alt="" className="stockProfile__img" />
        <span>Just now</span>
      </div>
      <div className="message__content">
        <p>hello</p>
        <img src={RR} alt="" />
      </div> */}
    </div>
  );
}
