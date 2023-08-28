import React, { useState, useEffect, useContext } from "react";

import './Signup.css';

import Input from "../../UI/Input/Input.js";
import Button from "../../UI/Button/Button.js";
import ErrorText from "../../UI/ErrorText/ErrorText";

import { UserContext } from "../../context/user-context.js";

const Signup = (props) => {
    const [username, setUsername] = useState({value: '', used: false});
    const [name, setName] = useState({value: '', used: false});
    const [password1, setPassword1] = useState({value: '', used: false});
    const [password2, setPassword2] = useState({value: '', used: false});

    const [usernameError, setUsernameError] = useState({status: true, message: ''});
    const [nameError, setNameError] = useState({status: true, message: ''});
    const [password1Error, setPassword1Error] = useState({status: true, message: ''});
    const [password2Error, setPassword2Error] = useState({status: true, message: ''});

    const errorAll = [usernameError.status, nameError.status, password1Error.status, password2Error.status];

    const userContext = useContext(UserContext);

    // use effect fot each load
    useEffect(() => {
        setUsername({value: '', used: false});
        setName({value: '', used: false});
        setPassword1({value: '', used: false});
        setPassword2({value: '', used: false});
    }, [props])

    // use effect for username
    useEffect(() => {
        setUsernameError({status: true, message: '', used: false});

        if(username.used) {
            if (username.value.length === 0) {
                setUsernameError({status: true, message: 'ورود نام کاربری الزامی است'});
            }
            else if (username.value.indexOf(' ') >= 0) {
                setUsernameError({status: true, message: 'نام کاربری نمی تواند داری فاصله باشد'});
            }
            else {
                const users = [...userContext.users];
                const isExist = users.findIndex((user)=>{return user.username.value === username.value}) !== -1;
                if (isExist) {
                    setUsernameError({status: true, message: 'نام کاربری از قبل وجود دارد'});
                }
            }
        }
    }
    , [username, userContext.users]);

    // use effect for name
    useEffect(() => {
        setNameError({status: true, message: ''}); 

        if (name.used) {
            if (name.value.length === 0) {
                setNameError({status: true, message: 'ورود نام و نام خانوادگی الزامی است'});
            }
        }
    }
    , [name]);

    // use effect for password1
    useEffect(() => {
        setPassword1Error({status: true, message: ''});

        if (password1.used) {
            if (password1.value.length === 0) {
                setPassword1Error({status: true, message: 'ورود رمز عبور الزامی است'});
            }
            else if (password1.value.length < 4) {
                setPassword1Error({status: true, message: 'طول رمز عبور باید حداقل 4 کاراکتر باشد'});
            }
        }
    }
    , [password1]);

    // use effect for password2
    useEffect(() => {
        setPassword2Error({status: true, message: ''});

        if (password2.used) {
            if (password2.value.length === 0) {
                setPassword2Error({status: true, message: 'ورود تکرار رمز عبور الزامی است'});
            }
            else if (password2.value !== password1.value) {
                setPassword2Error({status: true, message: 'تکرار رمز عبور وارد شده با رمز قبلی یکسان نیست'});
            }
        }
    }
    , [password2, password1]);

    return (
        <div className="signup">
            <Input 
                inputType="text" 
                className={`input ${usernameError.status && username.used ? "error" : null}`}
                inputPlaceholder="نام کاربری"
                inputValue={username.value} 
                onchange={(event) => {setUsername({value: event.target.value, used: true})}} 
            />
            <ErrorText>{usernameError.message}</ErrorText>

            <Input 
                inputType="text" 
                className={`input ${nameError.status && name.used ? "error" : null}`}
                inputPlaceholder="نام و نام خانوادگی"
                inputValue={name.value} 
                onchange={(event) => {setName({value: event.target.value, used: true})}} 
            />
            <ErrorText>{nameError.message}</ErrorText>

            <Input 
                inputType="password" 
                className={`input ${password1Error.status && password1.used ? "error" : null}`}
                inputPlaceholder="رمز عبور"
                inputValue={password1.value} 
                onchange={(event) => {setPassword1({value: event.target.value, used: true})}} 
            />
            <ErrorText>{password1Error.message}</ErrorText>

            <Input 
                inputType="password" 
                className={`input ${password2Error.status && password2.used ? "error" : null}`}
                inputPlaceholder="تکرار رمز عبور"
                inputValue={password2.value} 
                onchange={(event) => {setPassword2({value: event.target.value, used: true})}} 
            />
            <ErrorText>{password2Error.message}</ErrorText>

            <Button buttonType="button" className="btn btn-signup" click={() => props.signupClick(username.value, name.value, password1.value, password2.value, errorAll)}>ثبت نام</Button>
        </div>
    );
};

export default Signup;
