import React, { useState } from "react";

import './Signup.css';

import Input from "../../UI/Input/Input.js";
import Button from "../../UI/Button/Button.js";

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    return (
        <div className="signup">
            <Input 
                inputType="text" 
                className="input"
                inputPlaceholder="نام کاربری"
                inputValue={username} 
                onchange={(event) => {setUsername(event.target.value)}} 
            />

            <Input 
                inputType="text" 
                className="input"
                inputPlaceholder="نام و نام خانوادگی"
                inputValue={name} 
                onchange={(event) => {setName(event.target.value)}} 
            />

            <Input 
                inputType="password" 
                className="input" 
                inputPlaceholder="رمز عبور"
                inputValue={password1} 
                onchange={(event) => {setPassword1(event.target.value)}} 
            />

            <Input 
                inputType="password" 
                className="input" 
                inputPlaceholder="تکرار رمز عبور"
                inputValue={password2} 
                onchange={(event) => {setPassword2(event.target.value)}} 
            />

            <Button buttonType="button" className="btn" click={props.signupClick}>ثبت نام</Button>
        </div>
    );
};

export default Signup;
