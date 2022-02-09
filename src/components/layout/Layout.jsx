import { connect } from 'react-redux'
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import SiteHeader from './SiteHeader';
import LeftSidebar from './LeftSidebar';
import LeftSidebarOverlay from './LeftSidebarOverlay';
import Breadcrumb from './Breadcrumb';
import SiteFooter from './SiteFooter';

export const Layout = (props) => {
    const { pageTitle } = props;
    const { innerWidth } = window;
    const showLeftSidebarWidth = 991; //參考 CSS設定
    const leftSidebarWidth = '240px'; //參考 CSS設定
    const [showLeftSidebar, setShowLeftSidebar] = useState(innerWidth >= showLeftSidebarWidth);

    const toggleLeftSidebar = () => {
        setShowLeftSidebar(!showLeftSidebar);
    }

    return (
        <>
            <SiteHeader toggleLeftSidebar={toggleLeftSidebar} />
            <div id="left-sidebar-wrapper">
                <LeftSidebar showLeftSidebar={showLeftSidebar} />
                <LeftSidebarOverlay
                    showLeftSidebarWidth={showLeftSidebarWidth}
                    showLeftSidebar={showLeftSidebar}
                    toggleLeftSidebar={toggleLeftSidebar} />
            </div>
            <div id="main-wrapper" className="container-fluid"
                style={{ marginLeft: showLeftSidebar && innerWidth >= showLeftSidebarWidth ? leftSidebarWidth : 'auto' }}>
                <Breadcrumb />
                <main>
                    <h3 className="page-title">{pageTitle}</h3>
                    <div className="page-content">
                        <Outlet />
                    </div>
                </main>
                <SiteFooter />
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        pageTitle: state.layoutData.pageTitle
    };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)