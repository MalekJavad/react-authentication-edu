import React, { useState } from "react";

import "./Auth.css";

import Login from '../../components/Login/Login.js';
import Signup from '../../components/Signup/Signup.js';
import Button from "../../UI/Button/Button";

const Auth = () => {
    const [authMethod, setAuthMethod] = useState('login');

    const toggleForm = (clicked) => {
        if (clicked !== authMethod) {
            setAuthMethod(clicked);
        }
    }

    const loginAction = () => {};
    const signupAction = () => {};

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

        </div>
    );
};

export default Auth;
