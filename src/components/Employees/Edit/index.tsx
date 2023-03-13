import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import EmployeeService from "../../../services/EmployeesService";
import IEmployee from "../../../types/Employee";
import "./index.css";


function EditEmployee() {

    const initialEmployeeState = {
        id: null,
        name: "",
        email: "",
        phone: "",
        birthday: "",
        salary: "",
        completedTasks: "",
    };

    const id = useParams().employeeId;
    const [employee, setEmployee] = useState<IEmployee>(initialEmployeeState);

    useEffect(() => {
        if (id) {
            getEmployee(id);
        };
    }, [id]);

    const getEmployee = (id: string) => {
        EmployeeService.get(id)
            .then((response: any) => {
                setEmployee(response.data)
            })
            .catch((e: Error) => {
                console.log(e)
            });
    };

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const updateEmployee = () => {

        var data = {
            id: employee.id,
            name: employee.name,
            phone: employee.phone,
            birthday: employee.birthday,
            email: employee.email,
            salary: employee.salary,
            completedTasks: employee.completedTasks
        };

        EmployeeService.update(employee.id, data)
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
                <h2 className="page-name">Edit Employee</h2>
                <div className="page-content">
                    <form className="form" name="edit">
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
                        <label htmlFor="completed">Completed Tasks</label>
                        <input
                            type="number"
                            required
                            id="completed"
                            value={employee.completedTasks}
                            onChange={handleInputChange}
                            name="completed"
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

                    </form>
                </div>
                <div className="edit-actions">
                    <button type="submit" form="edit" className="btn create" onSubmit={() => { updateEmployee() }}>Update</button>
                    <button type="button" className="btn cancel" onClick={() => { navigate(-1) }}>Cancel</button>
                </div>
            </div>

        </div>
    );
};


export default EditEmployee;