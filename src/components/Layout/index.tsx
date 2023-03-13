import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
import Loader from "../Loader";
import Sidebar from "../Siderbar-Header";
import "./index.css";


function Layout() {

    return (
        <div className="layout">

            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Layout;