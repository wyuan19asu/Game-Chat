import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="form__container">
            <div className="form__wrapper">
                <span className="logo">Game Chat</span>
                <span className="title">Sign in</span>
                <form action="" className="register__form">
                    <label >
                        Email
                        <input type="email" placeholder='Email' id="" />
                    </label>
                    <label >
                        Password
                        <input type="password" placeholder='Must be at least 8 characters' id="password" />
                    </label>
                    <button className="login__btn">Login</button>
                </form>
                <div className="alt__register--wrapper">
                    <div className="left__line"></div>
                    <p className="alt__register--text"> Or Sign in with </p>
                    <div className="right__line"></div>
                </div>
                <p id="login__text">Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}
