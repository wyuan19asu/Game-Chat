import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <p id="inbox__header">Inbox</p>
      <Search />
      <Chats />
    </div>
  );
}
