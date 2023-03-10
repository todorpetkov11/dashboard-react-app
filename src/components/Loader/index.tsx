import "./index.css"
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Loader() {
  const [isLoading, setIsLoading] = useState(false);

  function setLoading() {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 1500)
  };

  let location = useLocation();

  // useEffect(() => {
  //   setLoading();
  // }, [location]);
  return (

    <div className={`animation-wrapper ${isLoading ? 'visible' : ''}`}>
      <div className="fog">

      </div>
      <div className="spinner-wrapper">
        <FontAwesomeIcon className="gear" icon={faGear} />
        <FontAwesomeIcon className="gear small" icon={faGear} />
        <h1 className='loading-text centre'>Loading</h1>
      </div>
    </div>
  )
};

export default Loader