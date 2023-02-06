import React from 'react'
import profilePic from '../images/RR.jpg'

export default function Chats() {
  return (
    <div className="side__chats">
      <div className="user__chat">
        <img src={profilePic} alt="" className='userPic' />
        <div className="user__chat--info">
          <span>Ryan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user__chat">
        <img src={profilePic} alt="" className='userPic' />
        <div className="user__chat--info">
          <span>Ryan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user__chat">
        <img src={profilePic} alt="" className='userPic' />
        <div className="user__chat--info">
          <span>Ryan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user__chat">
        <img src={profilePic} alt="" className='userPic' />
        <div className="user__chat--info">
          <span>Ryan</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}
