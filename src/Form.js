import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      isEducate: false,
      gender: "",
      favcolor: "red",
      showw:null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  final(eve) {
    this.setState([this.state.showw]=eve.target)
    this.state.showw?<h2>{this.state.showw.value}</h2>:null

  }

  render() {
    return (
      <form>
        <center>
          <h1>Fill the given field..</h1>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <textarea
            type="text"
            value={this.state.area}
            name="address"
            placeholder="type your address here"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="checkbox"
            checked={this.state.isEducate}
            onChange={this.handleChange}
            name="isEducate"
          />
          isEducate?
          <br />
          <input
            type="radio"
            onChange={this.handleChange}
            name="gender"
            value="male"
          />
          Male
          <input
            type="radio"
            onChange={this.handleChange}
            name="gender"
            value="female"
          />
          Female
          <br />
          <select
            value={this.state.favcolor}
            onChange={this.handleChange}
            name="favcolor"
          >
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="purple">purple</option>
            <option value="red">red</option>
            <option value="white">white</option>
          </select>
          <button onClick={this.final}></button>
          <hr />
          <h2>see your details which you have filled above!</h2>
          <h4 name="showw">
            Your name is {this.state.firstName} {this.state.lastName}
          </h4>
          <h4 name="showw"> your address is {this.state.address}</h4>
          <h4 name="showw">
            you are a educate person ryt?{" "}
            {this.state.isEducate ? "true" : "false"}
          </h4>
          <h4 name="showw">your fav color is {this.state.favcolor}</h4>
          <h4 name="showw">your gender is {this.state.gender}</h4>
        </center>
      </form>
    );
  }
}

export default Form;
