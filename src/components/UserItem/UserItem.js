import React from "react";

import "./UserItem.css";

const UserItem = (props) => {
    return (
        <li>
            <p>{props.data.username}</p>
            <p>{props.data.name}</p>
        </li>
    );
};

export default UserItem;
