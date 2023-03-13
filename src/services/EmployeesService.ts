import http from "../http-commons";
import IEmployee from "../types/Employee";

const getAll = () => {
    return http.get<Array<IEmployee>>("/employees");
};

const get = (id: any) => {
    return http.get<IEmployee>(`/employees/${id}`);
};

const create = (data: IEmployee) => {
    return http.post<IEmployee>("/employees", data);
};

const update = (id: any, data: IEmployee) => {
    return http.put<any>(`/employees/${id}`, data);
};

const remove = (id: any) => {
    return http.delete<any>(`/employees/${id}`);
};

const findByName = (name: string) => {
    return http.get<IEmployee>(`/employees?name=${name}`);
};

const getMostTasks = () => {
    return http.get<IEmployee>(`/employees?_sort=completedTasks&_order=desc&_page=0&_limit=${5}`)
}

const EmployeeService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByName,
    getMostTasks
};

export default EmployeeService;