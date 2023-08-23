import React from "react";

import "./ErrorText.css"; 

const ErrorText = (props) => {
    return (
        <p className="error-text">
            {props.children}
        </p>
    );
};

export default ErrorText;
