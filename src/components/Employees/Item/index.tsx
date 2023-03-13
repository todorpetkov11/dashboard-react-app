import './index.css'
import { faCheck, faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import IEmployee from '../../../types/Employee';
import EmployeeService from '../../../services/EmployeesService';


function EmployeesListItem(props: { employee: IEmployee, refresh: () => void }) {

    const employee = props.employee;

    const deleteEmployee = (id: string) => {
        EmployeeService.remove(id)
            .then(() => { props.refresh() })
            .catch((e: Error) => { console.log(e) });
    };

    return (
        <li>
            <div className="employees-list-item">
                <NavLink to={`${employee.id}/details`} className="employee-info">
                    <div>
                        <h4 className="employee-name">{employee.name}</h4>
                        <p className="employee-contacts"><span>Phone: </span>{employee.phone}</p>
                        <p className="employee-contacts"><span>Email: </span>{employee.email}</p>
                    </div>
                </NavLink>
                <div className="employee-actions">
                    <NavLink to={`${employee.id}/edit`}><FontAwesomeIcon icon={faPen} /></NavLink>
                    <FontAwesomeIcon onClick={() => { deleteEmployee(employee.id) }} icon={faXmark} />
                </div>
            </div>
        </li >

    )
};

export default EmployeesListItem;