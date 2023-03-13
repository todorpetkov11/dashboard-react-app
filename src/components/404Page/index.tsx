import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../Loader";
import "./index.css";

function NotFound() {

    return (
        <div className="container">
            <h1 className="page-name">Not Found</h1>
            <section className="page-content">
                <div className="page-actions">
                </div>
                <h2>Oops! There seems to be no such page...</h2>
                <NavLink to={"/"} className="home-link">
                    <h3>Let's go home!</h3>
                </NavLink>
            </section>
        </div>
    );
};

export default NotFound;