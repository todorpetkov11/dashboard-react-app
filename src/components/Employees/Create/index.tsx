import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import EmployeeService from "../../../services/EmployeesService";
import IEmployee from "../../../types/Employee";
import "./index.css";


function CreateEmployee() {

    const initialEmployeeState = {
        id: null,
        name: "",
        email: "",
        phone: "",
        birthday: "",
        salary: 0.1,
        completedTasks: 0,
    };

    const [employee, setEmployee] = useState<IEmployee>(initialEmployeeState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const saveEmployee = () => {
        var data = {
            id: employee.id,
            name: employee.name,
            phone: employee.phone,
            birthday: employee.birthday,
            email: employee.email,
            salary: employee.salary,
            completedTasks: employee.completedTasks
        };

        EmployeeService.create(data)
            .then((response: any) => {
                setSubmitted(true);
            })
            .catch((e: Error) => {
                console.log("error:", e);
            });
    };

    const newEmployee = () => {
        setEmployee(initialEmployeeState);
        setSubmitted(false);
    };

    const navigate = useNavigate();

    return (
        <div className="popup-container">
            <div className="popup-wrapper">
                <h2 className="page-name">Add Employee</h2>
                <div className="page-content">
                    <form className="form" name="add">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={employee.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            required
                            value={employee.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                        <label htmlFor="phone">Phone number</label>
                        <input
                            type="text"
                            id="phone"
                            required
                            value={employee.phone}
                            onChange={handleInputChange}
                            name="phone"
                        />
                        <label htmlFor="birthday">Date of birth</label>
                        <input
                            type="date"
                            id="birthday"
                            required
                            value={employee.birthday}
                            onChange={handleInputChange}
                            name="birthday"
                        />
                        <label htmlFor="salary">Salary</label>
                        <input
                            type="number"
                            required
                            id="salary"
                            value={employee.salary}
                            onChange={handleInputChange}
                            name="salary"
                        />
                        <label htmlFor="tasks">Completed Tasks</label>
                        <input
                            type="number"
                            required
                            id="tasks"
                            value={employee.completedTasks}
                            onChange={handleInputChange}
                            name="tasks"
                        />
                    </form>
                </div>
                <div className="edit-actions">
                    {submitted ?
                        <button type="button" className="btn create" onSubmit={() => { newEmployee() }}>Add new</button>
                        : <button type="submit" form="add" className="btn create" onClick={() => { saveEmployee() }}>Create</button>}
                    <button type="button" className="btn cancel" onClick={() => { navigate(-1) }}>Cancel</button>
                </div>
            </div>

        </div>
    );
};


export default CreateEmployee;