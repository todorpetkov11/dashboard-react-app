import './index.css'
import { faCheck, faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import ITask from '../../../types/Task';
import TaskService from '../../../services/TasksService';


function TasksListItem(props: { task: ITask, refresh: () => void }) {

    const task = props.task;


    const deleteTask = (id: string) => {
        TaskService.remove(id)
            .then(() => { props.refresh() })
            .catch((e: Error) => { console.log(e) });
    };

    return (
        <li>
            <div className="tasks-list-item">
                <div className="task-info">
                    <h3 className="task-name">{task.name}</h3>
                    <div className='task-description'>
                        {task.description}
                    </div>
                    <p className="task-assignee"><span>Assignee: </span>{task.assignee}</p>
                    <p className="task-duedate"><span>Due date: </span>{task.duedate}</p>
                </div>

                <div className="task-actions">
                    <NavLink to={`${task.id}/edit`}><FontAwesomeIcon icon={faPen} /></NavLink>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                    <FontAwesomeIcon onClick={() => { deleteTask(task.id) }} icon={faXmark} />
                </div>

            </div>
        </li>

    )
};

export default TasksListItem;