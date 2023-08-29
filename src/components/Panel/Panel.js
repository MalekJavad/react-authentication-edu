import React from "react";

import "./Panel.css";

import Button from "../../UI/Button/Button.js";

const Panel = (props) => {
    return (
        <div className="panel">
            <span className="title">پنل کاربری</span>
            <Button buttonType="button" className="btn btn-logout" click={props.logoutClick}>خروج</Button>
        </div>
    );
};

export default Panel;
