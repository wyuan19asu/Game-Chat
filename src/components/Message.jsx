import React from 'react'
import stockProfile from '../images/messagestock.jpg'
import RR from '../images/RR.jpg'
export default function Message() {
    return (
        <div className="message owner">
            <div className="message__info">
                <img src={stockProfile} alt="" className='stockProfile__img' />
                <span>Just now</span>
            </div>
            <div className="message__content">
                <p>hello</p>
                <img src={RR} alt="" />
            </div>
        </div>
    )
}
