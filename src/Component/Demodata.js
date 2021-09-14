import React from "react";

function Demodata(props) {
  return (
    <div>
      <div className="cardg">
        <div className="card-body">
          <h5 className="card-body">Name:{props.name}</h5>
          <h5>Details</h5>
          <ul>

            <li className="cardf"> UserName:{props.username}</li>
          
            <li className="cardf"> Email:{props.email}</li>
            <li className="cardf">Website:{props.website}</li>
            <li className="cardf"> The Address is </li>
            <li className="cardf"> street: {props.address.street}</li>
            <li className="cardf"> suite: {props.address.suite}</li>
            <li className="cardf"> city: {props.address.city}</li>
            <li className="cardf"> zipcode: {props.address.zipcode}</li>
            <li className="cardf"> geo-lat: {props.address.geo.lat} lan:  {props.address.geo.lng}</li>
            <li className="cardf"> Phone:{props.phone}</li>
            <li className="cardf"> company-name:{props.company.name}</li>
            <li className="cardf"> company-catchPhrase: {props.company.catchPhrase}</li>
            <li className="cardf"> company-bs: {props.company.bs}</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Demodata;
