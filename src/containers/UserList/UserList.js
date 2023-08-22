import React from "react"
import { Link } from "react-router-dom";

import './UserList.css'
import UserItems from '../../components/UserItems/UserItems.js';

const Users = () => {

    return (
        <div className="list">
            <div className="list-head">
                <h1 className="title">لیست کاربران</h1>
                <Link className="home-link" to="/">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </Link>
            </div>
            <UserItems />
        </div>
    );
};

export default Users;
