import "./index.css";
import Loader from "../Loader";
import { Outlet } from "react-router-dom";
import EmployeesListItem from "./Item";

function Employees() {

    return (
        <div className="container">
            <Loader />
            <h1 className="page-name">Employees</h1>
            <section className="page-content">
                <ul className="employees-list">
                    <EmployeesListItem />
                </ul>
            </section>
            <Outlet />
        </div >
    );
};

export default Employees;