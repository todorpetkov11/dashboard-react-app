import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import "./index.css";


function Home() {
    return (
        <div className="home">
            <section className="home-content">
                <h1 className="site-name heading-big">Dashboard</h1>
                <h2 className="heading-mid">Taking the best out of time efficiency</h2>
                <h3 className="heading-small">Manage tasks the right way with Dashboard</h3>
                <div className="home-actions">
                    <NavLink to={"tasks"}><button type="button" className="btn transparent hire">Hand out some assignments here</button></NavLink>
                    <NavLink to={"employees"}><button type="button" className="btn transparent assign">Hire new employees</button></NavLink>
                    <NavLink to={"rankings"}><button type="button" className="btn transparent rankings">See the best performers <FontAwesomeIcon icon={faTrophy} /></button></NavLink>
                </div>

            </section>
        </div >
    );
};

export default Home;