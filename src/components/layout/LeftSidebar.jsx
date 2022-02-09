import React from 'react';
import { NavLink } from "react-router-dom";
import * as routes from '../../constants/routes';

const LeftSidebar = (props) => {
    const { showLeftSidebar } = props;

    return (
        <nav id="left-sidebar" className="navbar navbar-light"
            style={{ display: showLeftSidebar ? 'block' : 'none' }}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={routes.HOME.path}>{routes.HOME.name}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={routes.STATE_TODO.path}>{routes.STATE_TODO.name}</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default LeftSidebar;
