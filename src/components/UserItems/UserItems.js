import React, { useContext } from "react"

import './UserItems.css'
import { UserContext } from "../../context/UserContext.js";
import UserItem from "../../components/UserItem/UserItem.js";


const UserItems = () => {
    const userContext = useContext(UserContext)

    return (
        <div className="user-list">
            <ul>
                {userContext.users.map((user) => {
                    return (
                        <UserItem data={user} />
                    )
                })}
            </ul>
        </div>
    );
};

export default UserItems;
