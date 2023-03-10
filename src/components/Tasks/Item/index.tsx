import './index.css'
import { faCheck, faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


function TasksListItem() {
    return (
        <li className="employees-list-item">
            <div className="employee-info">
                <h4 className="employee-name">Do the dishes</h4>
                <p className="employee-salary">$500</p>
                <p className="employee-status"></p>
            </div>
            <div className="employee-actions">
                <NavLink to={`${1}/details`}><FontAwesomeIcon icon={faPen} /></NavLink>
                <FontAwesomeIcon icon={faCheck} />
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </li>
    )
};

export default TasksListItem;