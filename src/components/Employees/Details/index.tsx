import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import EmployeeService from "../../../services/EmployeesService";
import IEmployee from "../../../types/Employee";
import "./index.css";


function EmployeeDetails() {

    const id = useParams().employeeId;
    const navigate = useNavigate();
    const [employee, setEmployee] = useState<IEmployee>();

    useEffect(() => {
        if (id) {
            getEmployee(id);
        };
    }, [id]);

    const getEmployee = (id: string) => {
        EmployeeService.get(id)
            .then((response: any) => {
                console.log(response)
                setEmployee(response.data)
            })
            .catch((e: Error) => {
                console.log(e)
            });
    };

    return (
        <div className="popup-container">
            {employee && <div className="popup-wrapper">
                <h2 className="page-name">{employee.name}</h2>
                <div className="page-content">
                    <p className="paragraph employee-birthdate"><span className="label">Birthday: </span>{employee.birthday}</p>
                    <p className="paragraph employee-email"><span className="label">Email: </span>{employee.email}</p>
                    <p className="paragraph employee-phone"><span className="label">Phone number: </span>{employee.phone}</p>
                    <p className="paragraph employee-salary"><span className="label">Salary: </span>${employee.salary}</p>
                    <p className="paragraph employee-completed-tasks"><span className="label">Completed tasks: </span>{employee.completedTasks}</p>
                </div>
                <div className="edit-actions">
                    <button type="button" className="btn cancel" onClick={() => { navigate(-1) }}>Close</button>
                </div>
            </div>}


        </div>
    );
};


export default EmployeeDetails;