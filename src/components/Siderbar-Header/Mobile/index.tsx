import { NavLink } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMedal, faTasks, faUserGroup, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

interface MobileNavProps {
    visibility: boolean;
    onSelect: () => void;
};

function MobileNav(props: MobileNavProps) {
    const isVisible = props.visibility;
    const onSelect = props.onSelect;

    return (
        <ul className={`nav-mobile ${isVisible ? 'visible' : ''}`} >
            <li className="nav-list-item">
                <NavLink onClick={onSelect} to={"/"} className={({ isActive }) => {
                    if (isActive) return "nav-link active"
                    else return "nav-link"
                }}>
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </NavLink>
            </li>
            <li className="nav-list-item">
                <NavLink onClick={onSelect} to={"/tasks"} className={({ isActive }) => {
                    if (isActive) return "nav-link active"
                    else return "nav-link"
                }}>
                    <FontAwesomeIcon icon={faTasks} /> <span>Tasks</span>
                </NavLink>
            </li>
            <li className="nav-list-item">
                <NavLink onClick={onSelect} to={"/employees"} className={({ isActive }) => {
                    if (isActive) return "nav-link active"
                    else return "nav-link"
                }}>
                    <FontAwesomeIcon icon={faUserGroup} /> <span>Employees</span>
                </NavLink>
            </li>
            <li className="nav-list-item">
                <NavLink onClick={onSelect} to={"/rankings"} className={({ isActive }) => {
                    if (isActive) return "nav-link active"
                    else return "nav-link"
                }}>
                    <FontAwesomeIcon icon={faMedal} /> <span>Rankings</span>
                </NavLink>
            </li>
            {/* <li className="nav-list-item">
                <NavLink onClick={onSelect} to={"/help"} className={({ isActive }) => {
                    if (isActive) return "nav-link active"
                    else return "nav-link"
                }}><FontAwesomeIcon icon={faQuestionCircle} /> <span>Help</span>
                </NavLink>
            </li> */}
        </ul>
    );
};

export default MobileNav;