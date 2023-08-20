import React, { useState } from "react";

import './Login.css';

import Input from '../../UI/Input/Input.js';
import Button from '../../UI/Button/Button.js';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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

            <Button buttonType="button" className="btn" click={props.loginClick}>ورود</Button>
        </div>
    );
};

export default Login;
