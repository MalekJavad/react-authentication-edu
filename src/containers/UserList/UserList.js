import React, { useContext } from "react";
import { Link } from "react-router-dom";

import './UserList.css';

import UserItems from '../../components/UserItems/UserItems.js';

import { AuthContext } from '../../context/auth-context.js';

const Users = () => { 
    const authContext = useContext(AuthContext);
    
    return (
        <div className="list">
            <div className="list-head">
                <h1 className="title">لیست کاربران</h1>
                <Link className="home-link" to="/">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </Link>
            </div>
            {
                authContext.isLoggedIn ?
                <UserItems />
                :
                <span className="list-login-error">برای دیدن لیست کاربران، وارد حساب کاربری خود شوید.</span>
            }
        </div>
    );
};

export default Users;
