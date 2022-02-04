import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="site-header navbar navbar-expand fixed-top">
                <i className="fas fa-bars" title="主選單"></i>
                <a className="navbar-brand" href="#">React Simple App</a>
            </header>
            <div className="sidebar-wrapper">
                <nav className="sidebar navbar bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1111</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 9</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 99</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 999</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 9999</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 99999</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 999999</a>
                        </li>
                    </ul>
                </nav>
                <div className="sidebar-overlay"></div>
            </div>
            <div className="main-wrapper">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Photos</a></li>
                    <li className="breadcrumb-item"><a href="#">Summer 2017</a></li>
                    <li className="breadcrumb-item"><a href="#">Italy</a></li>
                    <li className="breadcrumb-item active">Rome</li>
                </ul>
                <main className="container-fluid">
                    <h2>h2</h2>
                    <Outlet />
                </main>
            </div>
            <footer>
                footer
            </footer>
        </>
    );
};

export default Layout;