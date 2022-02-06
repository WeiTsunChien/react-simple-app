import React from 'react';
import { NavLink } from "react-router-dom";

const LeftSidebar = (props) => {
    const { showLeftSidebar } = props;

    return (
        <nav id="left-sidebar" className="navbar navbar-light"
            style={{ display: showLeftSidebar ? 'block' : 'none' }}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">首頁</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/state-todo">State待辦事項</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default LeftSidebar;
