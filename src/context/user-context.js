import React, { useState } from "react";

export const UserContext = React.createContext({
    users: [],
    setUsers: () => {}
})

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);

    const addUserHandler = (user) => {
        let prevUsers = [...users];
        prevUsers.push(user);
        setUsers(prevUsers);
    }

    return (
        <UserContext.Provider
            value={{
                users: users,
                setUsers: addUserHandler
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;
 