import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./Auth.css";

import Login from '../../components/Login/Login.js';
import Signup from '../../components/Signup/Signup.js';
import Button from "../../UI/Button/Button.js";
import { UserContext } from "../../context/UserContext.js";
import UserContextProvider from "../../context/UserContext.js";

const Auth = () => {
    const [authMethod, setAuthMethod] = useState('login');

    const userContext = useContext(UserContext);

    const toggleForm = (clicked) => {
        if (clicked !== authMethod) {
            setAuthMethod(clicked);
        }
    }

    const loginAction = () => {};

    const signupAction = (u, n, p1, p2) => {
        const newUser = {
            username: u,
            name: n,
            password1: p1,
            password2: p2,
        };
        userContext.setUsers(newUser);
        console.log('done')
    };

    return (
        <div className="auth">

            <div className="tab">
                <Button buttonType="button" className={`btn toggle-login ${authMethod==='login' ? 'tab-active' : null}`} click={() => {toggleForm('login')}}>ورود</Button>
                <Button buttonType="button" className={`btn toggle-signup ${authMethod==='signup' ? 'tab-active' : null}`} click={() => {toggleForm('signup')}}>ثبت نام</Button>
            </div>

            <div className="form">
                {
                    authMethod === 'login' ? 
                    <Login loginClick={loginAction} /> 
                    : 
                    <Signup signupClick={signupAction} />
                }
            </div>
            
            <div className="user-tab">
                <UserContextProvider>
                    <Link className="list-link" to="/users">لیست کاربران</Link>
                </UserContextProvider>
            </div>
        </div>
    );
};

export default Auth;
