import React from 'react'
import profilePic from '../images/RR.jpg'

export default function Search() {
    return (
        <div className="search">
            <div className="search__bar">
                <input type="text" placeholder='Search' />
            </div>
            <div className="user__chat">
                <img src={profilePic} alt="" className='userPic' />
                <div className="user__chat--info">
                    <span>Ryan</span>
                </div>
            </div>
        </div>
    )
}
