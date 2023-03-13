import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeesService";
import IEmployee from "../../types/Employee";
import Loader from "../Loader";
import "./index.css";
import RankingsListItem from "./Item";

function Rankings() {

    const [isLoading, setIsLoading] = useState(false);
    const [employees, setEmployees] = useState<Array<IEmployee>>([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = () => {
        setIsLoading(true);
        EmployeeService.getMostTasks()
            .then((response: any) => {
                setEmployees(response.data);
                console.log(response.data)
                setIsLoading(false);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div className="container">
            <Loader visible={isLoading} />
            <h1 className="page-name">Rankings</h1>
            <section className="page-content">
                <div className="page-actions">
                    <h2>Top 5 employees with most tasks completed</h2>
                </div>
                <ul className="employees-list">
                    {employees && employees.map((employee, index) => (
                        <RankingsListItem employee={employee} refresh={() => { getEmployees() }} key={index} />
                    ))}
                </ul>

            </section>
        </div>
    );
};

export default Rankings;