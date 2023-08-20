import React from "react";

import './Input.css';

const Input = (props) => {
    return (
        <input 
            type={props.inputType} 
            className={props.className} 
            value={props.inputValue} 
            onChange={props.onchange} 
            placeholder={props.inputPlaceholder}
        />
    );
};

export default Input;
