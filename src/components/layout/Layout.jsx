import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header id="site-header" className="navbar navbar-expand fixed-top">
                <i className="fas fa-bars"></i>
                <a className="navbar-brand" href="#">網站名稱</a>
            </header>
            <div id="left-sidebar-wrapper">
                <nav id="left-sidebar" className="navbar navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 11111</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Link active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 33333</a>
                        </li>
                    </ul>
                </nav>
                <div id="left-sidebar-overlay"></div>
            </div>
            <div id="main-wrapper" className="container-lg">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">首頁</a></li>
                    <li className="breadcrumb-item"><a href="#">主功能A</a></li>
                    <li className="breadcrumb-item active">網頁標題</li>
                </ul>
                <main>
                    <h3 className="page-title">網頁標題</h3>
                    <div className="page-content">
                        <Outlet />
                    </div>
                </main>
                <footer id="site-footer">
                    網站頁腳網站頁腳網站頁腳網站頁腳網站頁腳網站頁腳
                </footer>
            </div>
        </>
    );
};

export default Layout;