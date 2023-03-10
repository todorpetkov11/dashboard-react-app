import "./index.css";
import Loader from "../Loader";
import { Outlet } from "react-router-dom";
import TasksListItem from "./Item";

function Tasks() {

    return (
        <div className="container">
            <Loader />
            <h1 className="page-name">Tasks</h1>
            <section className="page-content">
                <ul className="employees-list">
                    <TasksListItem />
                </ul>
            </section>
            <Outlet />
        </div >
    );
};

export default Tasks;