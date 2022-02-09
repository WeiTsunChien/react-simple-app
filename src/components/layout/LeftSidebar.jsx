import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import * as routes from '../../constants/routes';
import { SET_PAGE_TITLE } from '../../constants/actionTypes';

export const LeftSidebar = (props) => {
    const { showLeftSidebar, setPageTitle } = props;

    return (
        <nav id="left-sidebar" className="navbar navbar-light"
            style={{ display: showLeftSidebar ? 'block' : 'none' }}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to={routes.HOME.path}
                        onClick={() => { setPageTitle(routes.HOME.name) }}>
                        {routes.HOME.name}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to={routes.STATE_TODO.path}
                        onClick={() => { setPageTitle(routes.STATE_TODO.name) }}>
                        {routes.STATE_TODO.name}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setPageTitle: (pageTitle) => dispatch({ type: SET_PAGE_TITLE, payload: pageTitle })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar)