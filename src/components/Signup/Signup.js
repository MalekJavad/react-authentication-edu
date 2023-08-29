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

    const errors = [usernameError.status, nameError.status, password1Error.status, password2Error.status];
    const noError = errors.every(item => item===false);

    const userContext = useContext(UserContext);

    // use effect fot each load
    useEffect(() => {
        setUsername({value: '', used: false});
        setName({value: '', used: false});
        setPassword1({value: '', used: false});
        setPassword2({value: '', used: false});
        setUsernameError({status: true, message: ''});
        setNameError({status: true, message: ''});
        setPassword1Error({status: true, message: ''});
        setPassword2Error({status: true, message: ''}); 
    }, [props])

    // use effect for username
    useEffect(() => {
        if(username.used) {
            if (username.value.length === 0) {
                setUsernameError({status: true, message: 'ورود نام کاربری الزامی است'});
            }
            else if (username.value.indexOf(' ') >= 0) {
                setUsernameError({status: true, message: 'نام کاربری نمی تواند داری فاصله باشد'});
            }
            else {
                const users = [...userContext.users];
                const isExist = users.findIndex((user) => {return user.username === username.value}) !== -1;
                if (isExist) {
                    setUsernameError({status: true, message: 'نام کاربری از قبل وجود دارد'});
                }
                else {
                    setUsernameError({status: false, message: ''})
                }
            }
        }
    }
    , [username, userContext.users]);

    // use effect for name
    useEffect(() => {
        if (name.used) {   

            if (name.value.length === 0) {
                setNameError({status: true, message: 'ورود نام و نام خانوادگی الزامی است'});
            }
            else {
                setNameError({status: false, message: ''}); 
            }
        }
    }
    , [name]);

    // use effect for password1
    useEffect(() => {
        if (password1.used) {

            if (password1.value.length === 0) {
                setPassword1Error({status: true, message: 'ورود رمز عبور الزامی است'});
            }
            else if (password1.value.length < 4) {
                setPassword1Error({status: true, message: 'طول رمز عبور باید حداقل 4 کاراکتر باشد'});
            }
            else {
                setPassword1Error({status: false, message: ''});
            }
        }
    }
    , [password1]);

    // use effect for password2
    useEffect(() => {
        if (password2.used) {
            
            if (password2.value.length === 0) {
                setPassword2Error({status: true, message: 'ورود تکرار رمز عبور الزامی است'});
            }
            else if (password2.value !== password1.value) {
                setPassword2Error({status: true, message: 'تکرار رمز عبور وارد شده با رمز قبلی یکسان نیست'});
            }
            else {
                setPassword2Error({status: false, message: ''});
            }
        }
    }
    , [password2, password1]);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.signupClick(username.value, name.value, password1.value, password2.value, noError);
    }

    return (
        <form className="signup" onSubmit={(event) => formSubmitHandler(event)}>
            <Input 
                inputType="text" 
                className={`input ${usernameError.status && username.used ? "error" : ''}`}
                inputPlaceholder="نام کاربری"
                inputValue={username.value} 
                onchange={(event) => {setUsername({value: event.target.value, used: true})}} 
            />
            <ErrorText>{usernameError.status && username.used ? usernameError.message : ''}</ErrorText>

            <Input 
                inputType="text" 
                className={`input ${nameError.status && name.used ? "error" : ''}`}
                inputPlaceholder="نام و نام خانوادگی"
                inputValue={name.value} 
                onchange={(event) => {setName({value: event.target.value, used: true})}} 
            />
            <ErrorText>{nameError.message}</ErrorText>

            <Input 
                inputType="password1"
                className={`input ${password1Error.status && password1.used ? "error" : ''}`}
                inputPlaceholder="رمز عبور"
                inputValue={password1.value} 
                onchange={(event) => {setPassword1({value: event.target.value, used: true})}} 
            />
            <ErrorText>{password1Error.message}</ErrorText>

            <Input 
                inputType="password2"
                className={`input ${password2Error.status && password2.used ? "error" : ''}`}
                inputPlaceholder="تکرار رمز عبور"
                inputValue={password2.value} 
                onchange={(event) => {setPassword2({value: event.target.value, used: true})}} 
            />
            <ErrorText>{password2Error.message}</ErrorText>

            <Button disable={!noError} buttonType="submit" className="btn btn-signup">ثبت نام</Button>
        </form>
    );
};

export default Signup;
