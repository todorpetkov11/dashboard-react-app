import './index.css'
import { faCheck, faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import IEmployee from '../../../types/Employee';
import EmployeeService from '../../../services/EmployeesService';


function RankingsListItem(props: { employee: IEmployee, refresh: () => void }) {

    const employee = props.employee;

    return (
        <li className="rankings-list-item">
            <div className="rankings-info">
                <h4 className="rankings-name">{employee.name}</h4>
            </div>
            <div className="rankings-actions">
                <span>Completed tasks: <span>{employee.completedTasks}</span></span>
                <FontAwesomeIcon icon={faTrophy} />
            </div>
        </li>
    )
};

export default RankingsListItem;