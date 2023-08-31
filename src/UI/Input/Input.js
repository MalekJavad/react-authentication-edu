import React, { useState } from "react";

import './Input.css';

const Input = (props) => {
    const [passwordShow1, setPasswordShow1] = useState(false);
    const [passwordShow2, setPasswordShow2] = useState(false);

    const toggleShowPassword1 = () => {
        setPasswordShow1(!passwordShow1);
    };

    const toggleShowPassword2 = () => {
        setPasswordShow2(!passwordShow2);
    };

    let input = null;
    switch(props.inputType) {
        case 'password1': 
            input = (
                <div className="password-input-wrapper">
                    <input 
                        type={passwordShow1 ? 'text' : 'password'}
                        className={props.className}
                        value={props.inputValue}
                        onChange={props.onchange}
                        placeholder={props.inputPlaceholder}
                    />
                    <span className="show-password" onClick={toggleShowPassword1}><i className="fa fa-eye" aria-hidden="true"></i></span>
                </div>
            );
        break;

        case 'password2': 
        input = (
            <div className="password-input-wrapper">
                <input 
                    type={passwordShow2 ? 'text' : 'password'}
                    className={props.className}
                    value={props.inputValue}
                    onChange={props.onchange}
                    placeholder={props.inputPlaceholder}
                />
                <span className="show-password" onClick={toggleShowPassword2}><i className="fa fa-eye" aria-hidden="true"></i></span>
            </div>
        );
        break;

        case 'text': 
            input = (
                <input 
                    type={props.inputType} 
                    className={props.className} 
                    value={props.inputValue} 
                    onChange={props.onchange} 
                    placeholder={props.inputPlaceholder}
                />
            );
        break;

        default: 
            input = (
                <input 
                    type={props.inputType} 
                    className={props.className} 
                    value={props.inputValue} 
                    onChange={props.onchange} 
                    placeholder={props.inputPlaceholder}
                />
            );
        break;
    }

    return (
        <div>
            {input}
        </div>
    );
};

export default Input;
