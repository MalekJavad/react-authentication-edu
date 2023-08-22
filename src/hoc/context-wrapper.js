import React from "react";

import UserContextProvider from "../context/user-context.js";
import AuthContextProvider from "../context/auth-context.js";

const ContextWrapper = (props) => {
    return (
        <UserContextProvider>
            <AuthContextProvider>
                {props.children}
            </AuthContextProvider>
        </UserContextProvider>
    );
};

export default ContextWrapper;
