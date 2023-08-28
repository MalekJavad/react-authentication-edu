import React, { useContext } from "react";

import "./Notification.css";

import { NotificationContext } from "../../context/notification-context.js";
import Button from "../Button/Button.js";

const Notification = () => {
    const notificationContext = useContext(NotificationContext);

    return (
        <div className="main-notification-box">
            <div className={`notification-box notification-${notificationContext.notif.type}`}>
                <Button className="close" type="button" click={notificationContext.remover}><i class="fa fa-close" aria-hidden="true"></i></Button>
                <span className="notification-text">{notificationContext.notif.message}</span>
            </div>
        </div>
    );
};

export default Notification;
