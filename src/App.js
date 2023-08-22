import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Auth from "./containers/Auth/Auth.js";
import Users from "./containers/UserList/UserList.js";
import UserContextProvider from "./context/UserContext";

const App = () => {
    return (
        <Router>
            <main>
                <div className="container">
                    <UserContextProvider>
                        <Routes>
                            <Route path="/" element={<Auth />} exact />
                            <Route path="/users" element={<Users />} />
                        </Routes>
                    </UserContextProvider>
                </div>
            </main>
        </Router>
    );
};

export default App;
