import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import TaskService from "../../../services/TasksService";
import ITask from "../../../types/Task";
import "./index.css";


function TaskDetails() {

    const navigate = useNavigate();
    const id = useParams().taskId;
    const [task, setTask] = useState<ITask>();

    useEffect(() => {
        if (id) {
            getTask(id);
        };

    }, [id]);

    const getTask = (id: string) => {
        TaskService.get(id)
            .then((response: any) => {
                console.log(response)
                setTask(response.data)
            })
            .catch((e: Error) => {
                console.log(e)
            });
    };

    return (
        <div className="popup-container">
            <div className="fog" onClick={() => { navigate(-1) }}></div>
            {task && <div className="popup-wrapper">
                <h2 className="page-name">{task.name}</h2>
                <div className="page-content">
                    <p className="task-description">Very complex task</p>
                    <p className="task-asignee">Todor Petkov</p>
                    <p className="task-duedate">20.03.2023</p>
                </div>
                <div className="edit-actions">
                    <button type="button" className="btn submit">Submit</button>
                    <button type="button" className="btn cancel" onClick={() => { navigate(-1) }}>Cancel</button>
                </div>
            </div>}


        </div>
    );
};


export default TaskDetails;