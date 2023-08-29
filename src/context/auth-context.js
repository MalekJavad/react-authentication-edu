import React, { useState } from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});


const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const doLogin = () => {
        setIsLoggedIn(true);
    }
    const doLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                login: doLogin,
                logout: doLogout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
