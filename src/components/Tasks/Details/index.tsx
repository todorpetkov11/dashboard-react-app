import { useNavigate } from "react-router";
import "./index.css";


function TaskDetails() {

    const navigate = useNavigate();

    return (
        <div className="popup-container">
            <div className="fog" onClick={() => { navigate(-1) }}></div>
            <div className="popup-wrapper">
                <h2 className="page-name">Task details</h2>
                <div className="page-content">
                    <h4 className="employee-name">Do the dishes</h4>
                    <p className="employee-salary">$500</p>
                    <p className="employee-status">Active</p>
                </div>

            </div>

        </div>
    );
};


export default TaskDetails;