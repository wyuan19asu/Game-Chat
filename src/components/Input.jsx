import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input() {
    return (
        <div className="message__input">
            <input type="text" placeholder='Write a message...' className='message__inputBar' />
            <div className="message__send">
                <FontAwesomeIcon icon="fa-regular fa-file" className='send__icons file__img' />
                <input type="file" id="file" />
                <label htmlFor="file" id='image__icon'>
                    <FontAwesomeIcon icon="fa-regular fa-file-image" className='send__icons' />
                </label>
                <button className="send__messageBtn">
                    <FontAwesomeIcon icon="fa-solid fa-paper-plane" className='send__icons' />
                </button>
            </div>
        </div>
    )
}
