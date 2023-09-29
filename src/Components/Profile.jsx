import React, { useState } from "react";
import Map from "./Map";


const Profile = (props) => {
  const [showmap, setshowmap] = useState(false);

  const displaymap = () => {
    setshowmap(!showmap);
  };

  return (
    <div className="profile">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imgsrc} class="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h6>{props.age}</h6>
          <h6>{props.gender}</h6>
          <p className="card-text">
            {props.details}
          </p>
          <button onClick={displaymap} className="btn btn-primary">
            Summary
          </button>
        </div>
      </div>
      <div className="displaymap">
        {showmap ? <Map src={props.src} /> : null}
      </div>
    </div>
  );
};
export default Profile;
