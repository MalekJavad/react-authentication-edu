import React from "react";

import './Button.css';

const Button = (props) => {
    return (
        <button type={props.buttonType} className={props.className} onClick={props.click}>
            {props.children}
        </button>
    );
};

export default Button;
