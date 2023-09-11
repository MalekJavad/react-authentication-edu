import React, { useContext, useEffect, useState } from "react";

import './UserItems.css';
import { UserContext } from "../../context/user-context";
import UserItem from "../../components/UserItem/UserItem.js";


const UserItems = () => {
    // const userContext = useContext(UserContext);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/users') 
        .then((response) => {
            response.json()
            .then(responseData => {
                // responseData.map(user => userContext.setUsers(user))
                setUsers(responseData);
            })
        })
    }, [])

    return (
        <div className="user-list">
            <ul>
                {users.map((user) => {
                    return (
                        <UserItem key={user.username} data={user} />
                    )
                })}
            </ul>
        </div>
    );
};

export default UserItems;
