// import React from "react";
// import axios from "axios";
// class MyList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       persons: [],
//     };
//   }
//   componentDidMount() {
//     axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//       const users = response.data;
//       this.setState({ persons: users });
//     });
//   }
//   render() {
//     return <div>{this.state.persons.map((user) => user.name)}</div>;
//   }
// }
// export default MyList;








// import React from 'react';
// import axios from 'axios';
// export default class MyList extends React.Component {
//  state = {
//  userName: '',
//  }
//  handleChange = event => {
//  this.setState({ userName: event.target.value });
//  }
//  handleSubmit = event => {
//  event.preventDefault();
//  const user = {
//  userName: this.state.userName
//  };
//  axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//  .then(res => {
//  console.log(res);
//  console.log(res.data);
//  }) }
//  render() {
//  return (
//  <div>
//  <form onSubmit={this.handleSubmit}>
//  <label>
//  User Name:
//  <input type="text" name="name" onChange={this.handleChange}/>
//  </label>
//  <button type="submit">Add</button>
//  </form>
//  </div>
//  )
//  }
//  }

//  [Text Wrapping Break]


import React from "react";
import axios from "axios";
 class MyList extends React.Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
      const users = response.data;
      this.setState({ persons:users });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map((user) => 
            user.name
          )}
        </ul>
      </div>
    );
  }
}
export default MyList