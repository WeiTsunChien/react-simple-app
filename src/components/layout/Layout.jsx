import { Outlet, Link } from "react-router-dom";
import SiteHeader from './SiteHeader';
import LeftSidebar from './LeftSidebar';
import LeftSidebarOverlay from './LeftSidebarOverlay';
import Breadcrumb from './Breadcrumb';
import SiteFooter from './SiteFooter';

const Layout = () => {
    return (
        <>
            <SiteHeader />
            <div id="left-sidebar-wrapper">
                <LeftSidebar />
                <LeftSidebarOverlay />
            </div>
            <div id="main-wrapper" className="container-lg">
                <Breadcrumb />
                <main>
                    <h3 className="page-title">網頁標題</h3>
                    <div className="page-content">
                        <Outlet />
                    </div>
                </main>
                <SiteFooter />
            </div>
        </>
    );
};

export default Layout;