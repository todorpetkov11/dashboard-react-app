import { useState } from "react";
import Loader from "../Loader";
import "./index.css";

function Help() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="container">
            <Loader visible={isLoading} />
            <h1 className="page-name">Help</h1>
            <section className="page-content">
                <div className="page-actions">
                </div>
                
            </section>
        </div>
    );
};

export default Help;