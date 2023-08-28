import React from "react";

import "./Notification.css";

const Notification = (props) => {
    return (
        <div className="main-notification-box">
            <div className={`notification-box notification-${props.type}`}>
                <span className="notification-text">{props.children}</span>
            </div>
        </div>
    );
};

export default Notification;
