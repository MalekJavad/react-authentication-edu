import React, { useState } from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    login: () => {},
});


const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                login: setIsLoggedIn
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
