import React from "react";
import PuppiesData from "../PuppiesData.json";
import Puppy from "./Puppy";

class Content extends React.Component {
  render() {
  

    
    const dog = PuppiesData.map((pup) => (
      <Puppy key={pup.id} name={pup.name} img={pup.imgUrl} price={pup.price} />
    ));

    return <div>{dog}</div>;
  }
}

export default Content;
