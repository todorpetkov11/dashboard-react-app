import './index.css'
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


function EmployeesListItem() {
    return (
        <li className="employees-list-item">
            <div className="employee-info">
                <h4 className="employee-name">Todor Petkov</h4>
                <p className="employee-salary">$500</p>
                <p className="employee-status"></p>
            </div>
            <div className="employee-actions">
                <NavLink to={`${1}/details`}><FontAwesomeIcon icon={faPen} /></NavLink>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </li>
    )
};

export default EmployeesListItem;