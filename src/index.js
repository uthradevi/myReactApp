// import { render } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import Hello from "./Hello.js";
import store, { INCREAMENT, DECREAMENT } from "./store.js";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }
  increament = () => {
    store.dispatch({ type: INCREAMENT });
    console.log(store.getState().counter.count);
  };
  decreament = () => {
    store.dispatch({ type: DECREAMENT });
    console.log(store.getState().counter.count);
  };
  push = () => {
    store.dispatch({ type: "push", value: Math.random() });
    console.log(store.getState());
  };
  pop = () => {
    store.dispatch({ type: "pop" });
    console.log(store.getState().tester);
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <Hello name={this.state.name} />
          <p>Start editing :-)</p>
          <button onClick={this.increament}>Increment</button>
          <button onClick={this.decreament}>Decrement</button>
          <button onClick={this.push}>push</button>
          <button onClick={this.pop}>pop</button>
        </div>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
