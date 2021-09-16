// import { data } from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREAMENT, DECREAMENT } from "./store";
// let Hello = (props) => {
//   return (
//     <h1>
//       <button onClick={props.increament}>Increment</button>
//       <button onClick={props.decreament}>Decrement</button>
//       Hello {props.name}! {props.count}
//     </h1>
//   );
// };
class Hello extends Component {
  add = () => {
    const count = "count" + this.props.count;
    this.props.update(count);
    console.log("hello");
    console.log("hi");

  };
  render() {
    return (
      <h1>
        <button onClick={this.props.increament}>Increment</button>
        <button onClick={this.props.decreament}>Decrement</button>
        <button onClick={this.add}>push</button>
        Pushed data:{this.props.data}
        Hello {this.props.name}! {this.props.count}
      </h1>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.counter.count, data: state.tester }
};
const mapDispatchToProps = (dispatch) => {
  return {
    increament: () => {
      dispatch({ type: INCREAMENT });
    },
    decreament: () => {
      dispatch({ type: DECREAMENT });
    },
    update: (data) => {
      dispatch({ type: "push", value:data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
