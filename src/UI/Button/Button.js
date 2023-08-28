import React from "react";

import './Button.css';

const Button = (props) => {
    let button = null;

    if (props.disable) {
        button = (
            <button disabled type={props.buttonType} className={props.className}>
                {props.children}
            </button>
        );
    } else {
        button = (
            <button type={props.buttonType} className={props.className}>
                {props.children}
            </button>
        );
    }

    return button;
};

export default Button;
