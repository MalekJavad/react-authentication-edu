import React, { useState, useEffect, useContext } from "react";

import './Login.css';

import Input from '../../UI/Input/Input.js';
import Button from '../../UI/Button/Button.js';
import { NotificationContext } from "../../context/notification-context.js";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const notificationContext = useContext(NotificationContext);

    useEffect(() => {
        notificationContext.remover();
        console.log('login ue')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="login">
            <Input 
                inputType="text" 
                className="input"
                inputPlaceholder="نام کاربری"
                inputValue={username} 
                onchange={(event) => {setUsername(event.target.value)}} 
            />

            <Input 
                inputType="password" 
                className="input" 
                inputPlaceholder="رمز عبور"
                inputValue={password} 
                onchange={(event) => {setPassword(event.target.value)}} 
            />

            <Button buttonType="button" className="btn btn-login" click={() => props.loginClick(username, password)}>ورود</Button>
        </div>
    );
};

export default Login;
