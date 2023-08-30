import React from "react";

import "./ErrorText.css"; 

const ErrorText = (props) => {
    return (
        <p className={`text ${props.type}-text`}>
            {props.children}
        </p>
    );
};

export default ErrorText;
