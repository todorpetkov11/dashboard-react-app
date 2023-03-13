import "./index.css";
import Loader from "../Loader";
import { NavLink, Outlet } from "react-router-dom";
import TasksListItem from "./Item";
import { faPlus, faRefresh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ITask from "../../types/Task";
import TaskService from "../../services/TasksService";

function Tasks() {

    const [tasks, setTasks] = useState<Array<ITask>>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        refreshTasks();
    }, []);

    const getTasks = () => {
        setIsLoading(true);
        TaskService.getAll()
            .then((response: any) => {
                setTasks(response.data);
                setIsLoading(false);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const refreshTasks = () => {
        getTasks();
    };

    return (
        <div className="container">
            <Loader visible={isLoading} />
            <h1 className="page-name">Tasks</h1>
            <div>
                <section className="page-content">
                    <div className="page-actions">
                        <NavLink to={"create"}>
                            <button className="btn create" type="button"><FontAwesomeIcon icon={faPlus} /> Add</button>
                        </NavLink>
                        <button className="btn transparent" type="button" onClick={() => { refreshTasks() }}><FontAwesomeIcon icon={faRefresh} /></button>
                    </div>
                    {tasks.length > 0 ?
                        <ul className="employees-list">
                            {tasks && tasks.map((task, index) => (
                                <TasksListItem task={task} refresh={refreshTasks} key={index} />))}
                        </ul>
                        :
                        <div className="no-content">
                            <h1>There are currently no tasks! Hurray!</h1>
                        </div>}
                </section>
                <Outlet />
            </div>
        </div >
    );
};

export default Tasks;