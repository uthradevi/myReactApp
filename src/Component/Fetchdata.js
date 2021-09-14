import React from "react";
import Demodata from "./Demodata.js";

class Fetchdata extends React.Component {
  state = {
    loading: true,
    person: [],
  };
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data });
  }
  render() {
    const MyData = this.state.person.map((pup) => (
      <Demodata
        key={pup.id}
        name={pup.name}
        username={pup.username}
        email={pup.email}
        address={pup.address}
        phone={pup.phone}
        website={pup.website}
        company={pup.company}
      />
    ));
    return <div>{MyData}</div>;
  }
}
export default Fetchdata;

//   constructor(props) {
//     super(props)
//     this.state = {
//       data: [],
//     };
//   }
//   componentDidMount(){
//       var url="https://jsonplaceholder.typicode.com/posts";
//       fetch(url)
//           .then(res=>{
//           return res.json();
//       }).then(d=>{let data=d.map((personsdata)=>{

//           return(
//               <div>{personsdata}</div>
//           )
//       })

//     })

//   }

//   render(){
//       return(
//           <div className="cardg">{
//               this.state.persons.map((per=><th key="">{per}</th>))
//           }

//           </div>
//       );
//   }
// }
