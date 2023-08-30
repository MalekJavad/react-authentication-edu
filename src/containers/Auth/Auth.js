import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./Auth.css";

import Login from '../../components/Login/Login.js';
import Signup from '../../components/Signup/Signup.js';
import Panel from "../../components/Panel/Panel";
import Button from "../../UI/Button/Button.js";
import Notification from "../../UI/Notification/Notification.js";
import { UserContext } from "../../context/user-context.js";
import { AuthContext } from "../../context/auth-context.js"
import { NotificationContext } from "../../context/notification-context";

const Auth = () => {
    const [authMethod, setAuthMethod] = useState('signup');
    
    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);
    const notificationContext = useContext(NotificationContext);
    console.log()
    const toggleForm = (clicked) => {
        if (clicked !== authMethod) {
            setAuthMethod(clicked);
        }
    }

    const loginAction = (u, p, noError) => {
        if (noError) {
            const users = [...userContext.users];
            const index = users.findIndex((user) => {return user.username===u});
            const foundUser = users[index];
            if (foundUser.password1 === p) {
                authContext.login();
                notificationContext.raiser({type: 'successful', message: 'با موفقیت وارد شدید'});
            } 
            else {
                notificationContext.raiser({type: 'error', message: 'رمز عبور وارد شده اشتباه است'});
            }
        } 
        else {
            notificationContext.raiser({type: 'error', message: 'لطفا خطا های فیلد ها را اصلاح کنید'});
        }
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
            notificationContext.raiser({type: 'successful', message: 'ثبت نام با موفقیت انجام شد'});
        }
        else {
            notificationContext.raiser({type: 'error', message: 'خطا های فیلد ها را اصلاح کنید'});
        }
    };

    const logoutAction = () => {
        authContext.logout();
        notificationContext.raiser({type: 'successful', message: 'با موفقیت از حساب خود خارج شدید'});
    }

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
            {notificationContext.notif.status && <Notification />}

            {authContext.isLoggedIn ? <Panel logoutClick={logoutAction} /> : formPage}
            
            <div className="user-tab">
                <Link className="list-link" to="/users">لیست کاربران</Link>
            </div>
        </div>
    );
};

export default Auth;
