import http from "../http-commons";
import ITask from "../types/Task";

const getAll = () => {
    return http.get<Array<ITask>>("/tasks");
};

const get = (id: any) => {
    return http.get<ITask>(`/tasks/${id}`);
};

const create = (data: ITask) => {
    return http.post<ITask>("/tasks", data);
};

const update = (id: any, data: ITask) => {
    return http.put<any>(`/tasks/${id}`, data);
};

const remove = (id: any) => {
    return http.delete<any>(`/tasks/${id}`);
};

const TaskService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default TaskService;