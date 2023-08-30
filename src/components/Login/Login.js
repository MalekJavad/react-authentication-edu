import React, { useState, useEffect, useContext } from "react";

import './Login.css';

import Input from '../../UI/Input/Input.js';
import Button from '../../UI/Button/Button.js';
import ErrorText from "../../UI/ErrorText/ErrorText";

// import { NotificationContext } from "../../context/notification-context.js";
import { UserContext } from "../../context/user-context";

const Login = (props) => {
    const [username, setUsername] = useState({value: '', used: false});
    const [password, setPassword] = useState({value: '', used: false});

    const [usernameError, setUsernameError] = useState({status: true, message: '', type: ''});
    const [passwordError, setPasswordError] = useState({status: true, message: '', type: ''});

    const errors = [usernameError.status, passwordError.status];
    const noError = errors.every(item => item===false);

    const userContext = useContext(UserContext);

    // use effect fot each load
    useEffect(() => {
        setUsername({value: '', used: false});
        setPassword({value: '', used: false});
        setUsernameError({status: true, message: 'نام کاربری خود را وارد کنید', type: 'hint'});
        setPasswordError({status: true, message: 'رمز عبور خود را وارد کنید', type: 'hint'});
    }, [props])

    // use effect for username
    useEffect(() => {
        if (username.used) {
            console.log('in username ue')
            if (username.value.length === 0) {
                setUsernameError({status: true, message: 'ورود نام کاربری الزامی است', type: 'error'});
            }
            else if (username.value.indexOf(' ') >= 0) {
                setUsernameError({status: true, message: 'نام کاربری نمی تواند دارای فاصله باشد', type: 'error'});
            }
            else {
                const users = [...userContext.users];
                const isExist = users.findIndex((user) => {return user.username === username.value}) !== -1;
                if (!isExist) {
                    setUsernameError({status: true, message: 'کاربری با این نام کاربری یافت نشد', type: 'error'});
                }
                else {
                    setUsernameError({status: false, message: 'نام کاربری یافت شد', type: 'ok'});
                }
            }
        }
    }, [username, userContext.users]);

    // use effect for password
    useEffect(() => {
        if (password.used) {
            if (password.value.length === 0) {
                setPasswordError({status: true, message: 'ورود رمز عبور الزامی است', type: 'error'});
            }
            else if (password.value.length < 4) {
                setPasswordError({status: true, message: 'رمز عبور باید حداقل 4 کاراکتر باشد', type: 'error'});
            }
            else {
                setPasswordError({status: false, message: 'رمز عبور قابل قبول است', type: 'ok'});
            }
        }
    }, [password]);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.loginClick(username.value, password.value, noError);
    }

    return (
        <form className="login" onSubmit={formSubmitHandler}>
            <Input 
                inputType="text" 
                className={`input ${usernameError.status && username.used ? 'error' : ''}`}
                inputPlaceholder="نام کاربری"
                inputValue={username.value} 
                onchange={(event) => {setUsername({value: event.target.value, used: true})}} 
            />
            <ErrorText type={usernameError.type}>{usernameError.message}</ErrorText>

            <Input 
                inputType="password1" 
                className={`input ${passwordError.status && password.used ? 'error' : ''}`} 
                inputPlaceholder="رمز عبور"
                inputValue={password.value} 
                onchange={(event) => {setPassword({value: event.target.value, used: true})}} 
            />
            <ErrorText type={passwordError.type}>{passwordError.message}</ErrorText>

            <Button disable={!noError} buttonType="submit" className="btn btn-login">ورود</Button>
        </form>
    );
};

export default Login;
