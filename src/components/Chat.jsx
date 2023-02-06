import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Messages from './Messages';
import Input from './Input';

export default function Chat() {
    return (
        <div className="chat__info">
            <div className="chat">
                <span>Ryan</span>
                <div className="chat__icons">
                    <FontAwesomeIcon icon="fa-solid fa-video" className='chat__icon' />
                    <FontAwesomeIcon icon="fa-solid fa-user-plus" className='chat__icon' />
                    <FontAwesomeIcon icon="fa-solid fa-ellipsis" className='chat__icon' />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}
