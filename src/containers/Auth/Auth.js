import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./Auth.css";

import Login from '../../components/Login/Login.js';
import Signup from '../../components/Signup/Signup.js';
import Button from "../../UI/Button/Button.js";
import Notification from "../../UI/Notification/Notification.js";
import { UserContext } from "../../context/user-context.js";
import UserContextProvider from "../../context/user-context.js";
import { AuthContext } from "../../context/auth-context.js"

const Auth = () => {
    const [authMethod, setAuthMethod] = useState('signup');
    const [notification, setNotification] = useState({status: false, type: '', message: ''});

    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);

    const toggleForm = (clicked) => {
        if (clicked !== authMethod) {
            setAuthMethod(clicked);
        }
    }

    const loginAction = (u, p) => {
        const users = [...userContext.users];
        const index = users.findIndex((user) => {return user.username===u});
        if (index === -1) {
            console.log('Username not found');
            return "Username not found";
        }

        const foundUser = users[index];

        if (foundUser.password1 !== p) {
            console.log('Incorrect Password');
            return "Incorrect Password";
        }

        authContext.login(true);

        console.log('logged in');
    };

    const signupAction = (u, n, p1, p2, noError) => {
        if (noError) {
            const newUser = {
                username: u,
                name: n,
                password1: p1,
                password2: p2,
            };
            userContext.setUsers(newUser);
            setNotification({status: true, type: 'successful', message: 'ثبت نام با موفقیت انجام شد'})
        }
        else {
            setNotification({status: true, type: 'error', message: 'خطا های فیلد ها را اصلاح کنید'});
        }
    };

    const formPage = (
        <div className="form-wrapper">
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
    )

    return (
        <div className="auth">
            {notification.status ? <Notification type={notification.type}>{notification.message}</Notification> : null}

            {authContext.isLoggedIn ? <span className="list-login-error">شما از قبل وارد حساب کاربری خود شده اید.</span> : formPage}
            
            <div className="user-tab">
                <UserContextProvider>
                    <Link className="list-link" to="/users">لیست کاربران</Link>
                </UserContextProvider>
            </div>
        </div>
    );
};

export default Auth;
