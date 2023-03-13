import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import TaskService from "../../../services/TasksService";
import ITask from "../../../types/Task";
import "./index.css";


function EditTask() {

    const initialTaskState = {
        id: null,
        name: "",
        assignee: "",
        assigneeId: null,
        description: "",
        duedate: "",
    };

    const id = useParams().taskId;
    const [task, setTask] = useState<ITask>(initialTaskState);

    useEffect(() => {
        if (id) {
            getTask(id);
        };
    }, [id]);

    const getTask = (id: string) => {
        TaskService.get(id)
            .then((response: any) => {
                setTask(response.data)
            })
            .catch((e: Error) => {
                console.log(e)
            });
    };

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setTask({ ...task, [name]: value });
    };

    const updateTask = () => {
        TaskService.update(task.id, task)
            .then((response: any) => {
                navigate(-1);
            })
            .catch((e: Error) => {
                console.log("error:", e);
            });
    };

    const navigate = useNavigate();

    return (
        <div className="popup-container">
            <div className="popup-wrapper">
                <h2 className="page-name">Edit Task</h2>
                <div className="page-content">
                    <form className="form" name="edit">
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
                    <button type="submit" form="edit" className="btn create" onSubmit={() => { updateTask() }}>Update</button>
                    <button type="button" className="btn cancel" onClick={() => { navigate(-1) }}>Cancel</button>
                </div>
            </div>

        </div>
    );
};


export default EditTask;