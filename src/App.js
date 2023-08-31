import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Auth from "./containers/Auth/Auth.js";
import Users from "./containers/UserList/UserList.js";

import ContextWrapper from "./hoc/context-wrapper.js";


const App = () => {
    return (
        <Router>
            <main>
                <div className="container">
                    <ContextWrapper>
                        <Routes>
                            <Route path="/" element={<Auth />} exact />
                            <Route path="/users" element={<Users />} />
                        </Routes>
                    </ContextWrapper>
                </div>
            </main>
        </Router>
    );
};

export default App;
