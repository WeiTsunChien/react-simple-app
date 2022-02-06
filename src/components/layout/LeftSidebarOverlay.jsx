const LeftSidebarOverlay = (props) => {
    const { innerWidth } = window;
    const { showLeftSidebarWidth, showLeftSidebar, toggleLeftSidebar } = props;

    return (
        <div id="left-sidebar-overlay"
            style={{ display: showLeftSidebar && innerWidth < showLeftSidebarWidth ? 'block' : 'none' }}
            onClick={toggleLeftSidebar}></div>
    );
};

export default LeftSidebarOverlay;
