import "./index.css";
import Loader from "../Loader";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import EmployeesListItem from "./Item";
import { faPlus, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import IEmployee from "../../types/Employee";
import EmployeeService from "../../services/EmployeesService";

function Employees() {

    const [employees, setemployees] = useState<Array<IEmployee>>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        refreshEmployees();
    }, [useNavigate()]);

    const getEmployees = () => {
        setIsLoading(true);
        EmployeeService.getAll()
            .then((response: any) => {
                setemployees(response.data);
                setIsLoading(false);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const refreshEmployees = () => {
        getEmployees();
    };

    return (
        <div className="container">
            <Loader visible={isLoading} />
            <h1 className="page-name">Employees</h1>
            <section className="page-content">
                <div className="page-actions">
                    <NavLink to={"create"}>
                        <button className="btn create" type="button"><FontAwesomeIcon icon={faPlus} /> Add</button>
                    </NavLink>
                    <button className="btn transparent" type="button"><FontAwesomeIcon icon={faRefresh} /></button>
                </div>
                {employees.length > 0 ?
                    <ul className="employees-list">
                        {employees && employees.map((employee, index) => (
                            <EmployeesListItem employee={employee} refresh={refreshEmployees} key={index} />))}
                    </ul>
                    :
                    <div className="no-content">
                        <h1>Nobody wants to work...</h1>
                    </div>}
            </section>
            <Outlet />
        </div >
    );
};

export default Employees;