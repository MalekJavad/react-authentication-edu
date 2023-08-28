import React from "react";

import UserContextProvider from "../context/user-context.js";
import AuthContextProvider from "../context/auth-context.js";
import NotificationContextProvider from "../context/notification-context.js";

const ContextWrapper = (props) => {
    return (
        <NotificationContextProvider>
            <UserContextProvider>
                <AuthContextProvider>
                    {props.children}
                </AuthContextProvider>
            </UserContextProvider>
        </NotificationContextProvider>
    );
};

export default ContextWrapper;
