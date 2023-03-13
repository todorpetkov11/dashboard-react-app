import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import EmployeeService from "../../../services/EmployeesService";
import TaskService from "../../../services/TasksService";
import IEmployee from "../../../types/Employee";
import ITask from "../../../types/Task";
import "./index.css";


function CreateTask() {

    const initialTaskState = {
        id: null,
        name: "",
        assignee: "",
        assigneeId: null,
        description: "",
        duedate: "",
    };

    const [task, setTask] = useState<ITask>(initialTaskState);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [assignee, setAssignee] = useState<IEmployee>();

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setTask({ ...task, [name]: value });
    };

    const saveTask = () => {
        var data = {
            id: task.id,
            name: task.name,
            description: task.description,
            assignee: task.assignee,
            assigneeId: assignee ? assignee.id : null,
            duedate: task.duedate
        };

        TaskService.create(data)
            .then((response: any) => {
                console.log(response.data)
                setSubmitted(true);
            })
            .catch((e: Error) => {
                console.log("error:", e);
            });
    };

    const newTask = () => {
        setTask(initialTaskState);
        setSubmitted(false);
    };

    const navigate = useNavigate();

    return (
        <div className="popup-container">
            <div className="popup-wrapper">
                <h2 className="page-name">Add Task</h2>
                <div className="page-content">
                    <form className="form" name="add">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={task.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            required
                            value={task.description}
                            onChange={handleInputChange}
                            name="description"
                            rows={4}
                            cols={4}
                            maxLength={50}
                        />
                        <label htmlFor="assignee">Assignee</label>
                        <input
                            type="text"
                            id="assignee"
                            required
                            value={task.assignee}
                            onChange={handleInputChange}
                            name="assignee"
                        />
                        <label htmlFor="duedate">Due date</label>
                        <input
                            type="date"
                            id="duedate"
                            required
                            value={task.duedate}
                            onChange={handleInputChange}
                            name="duedate"
                        />
                    </form>
                </div>
                <div className="edit-actions">
                    {submitted ?
                        <button type="button" className="btn create" onClick={() => { newTask() }}>Add new</button>
                        : <button type="submit" form="add" className="btn create" onSubmit={() => { saveTask() }}>Create</button>}
                    <button type="button" className="btn cancel" onClick={() => { navigate(-1) }}>Cancel</button>
                </div>
            </div>

        </div>
    );
};


export default CreateTask;