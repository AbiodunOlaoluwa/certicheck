import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="layoutContainer">
            <div className="layoutContent">
                <NavBar />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout;