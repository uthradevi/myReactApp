import React from "react";

function Puppy(props) {

 
    return (
    <div>
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price}</p>
          <a href="https://dogsales.in/" className="btn btn-primary">
            check it out
          </a>
        </div>

        {/* <img src={props.img} className="rounded float-start" alt="..." /> */}
      </div>
    </div>
  );
}

export default Puppy;
