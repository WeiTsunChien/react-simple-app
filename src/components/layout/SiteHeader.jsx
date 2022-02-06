import React from 'react';
import { Link } from "react-router-dom";
import { SITE_NAME } from '../../constants/appSettings';

const SiteHeader = () => {
    return (
        <header id="site-header" className="navbar navbar-expand fixed-top">
            <i className="fas fa-bars"></i>
            <Link className="navbar-brand" to="/">{SITE_NAME}</Link>
        </header>
    );
};

export default SiteHeader;