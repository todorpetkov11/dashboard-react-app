import { useNavigate } from "react-router";
import "./index.css";


function EmployeeDetails() {

    const navigate = useNavigate();

    return (
        <div className="popup-container">
            <div className="fog" onClick={() => { navigate(-1) }}></div>
            <div className="popup-wrapper">
                <h2 className="page-name">Employee details</h2>
                <div className="page-content">
                    <h4 className="employee-name">Todor Petkov</h4>
                    <p className="employee-salary">$500</p>
                    <p className="employee-birthdate">01.01.2001</p>
                    <p className="employee-status">Active</p>
                    <p className="employee-completed-tasks">24</p>
                    <p className="employee-email">todor@abv.bg</p>
                    <p className="employee-phone">0888674224</p>
                </div>

            </div>

        </div>
    );
};


export default EmployeeDetails;