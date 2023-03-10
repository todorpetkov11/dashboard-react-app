import { NavLink } from "react-router-dom"
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMedal, faNavicon, faTasks, faUserGroup, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import MobileNav from "./Mobile";
import { useState } from "react";

function Sidebar() {

    const [mobileMenuVisible, setMobileVisibility] = useState(false);

    function mobileMenuClick() {
        setMobileVisibility(!mobileMenuVisible)
    };

    return (
        <div>
            <nav>
                <ul className="nav-list desktop">
                    <h1 className="site-name">Dashboard</h1>
                    <li className="nav-list-item">
                        <NavLink to={"/"} className={({ isActive }) => {
                            if (isActive) return "nav-link active"
                            else return "nav-link"
                        }}>
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to={"/tasks"} className={({ isActive }) => {
                            if (isActive) return "nav-link active"
                            else return "nav-link"
                        }}>
                            <FontAwesomeIcon icon={faTasks} /> <span>Tasks</span>
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to={"/employees"} className={({ isActive }) => {
                            if (isActive) return "nav-link active"
                            else return "nav-link"
                        }}>
                            <FontAwesomeIcon icon={faUserGroup} /> <span>Employees</span>
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to={"/rankings"} className={({ isActive }) => {
                            if (isActive) return "nav-link active"
                            else return "nav-link"
                        }}>
                            <FontAwesomeIcon icon={faMedal} /> <span>Rankings</span>
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to={"/help"} className={({ isActive }) => {
                            if (isActive) return "nav-link active"
                            else return "nav-link"
                        }}><FontAwesomeIcon icon={faQuestionCircle} /> <span>Help</span>
                        </NavLink>
                    </li>

                </ul>
                <ul className="nav-list mobile">
                    <h1 className="site-name">Dashboard</h1>
                    <li className="nav-list-item">
                        <button type="button" className="btn nav" onClick={mobileMenuClick}><FontAwesomeIcon icon={faNavicon} /></button>
                    </li>
                </ul>
            </nav>
            {/* {mobileMenuVisible ? <MobileNav /> : ''} */}
            <MobileNav visibility={mobileMenuVisible} onSelect={mobileMenuClick} />
        </div>
    );
};

export default Sidebar;