import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create-dashboard">Create Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/create-folder">Create Folder</Link>
                    </li>
                    <li>
                        <Link to="/create-datasource">Create Datasource</Link>
                    </li>
                    <li>
                        <Link to="/get-dashboards">Get Dashboards</Link>
                    </li>
                    <li>
                        <Link to="/get-datasources">Get Datasources</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
