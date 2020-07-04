import React, { Component } from "react";
import ChildComponent from "./components/ChildComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [{ name: "Rashid" }, { name: "Sitt" }, { name: "Aaron" }],
      someBoolean: false,
    };
  }

  changeButtonState = () => {
    this.setState({
      someBoolean: !this.state.someBoolean,
    });
  };

  render() {
    const childComponent = this.state.someBoolean ? (
      <ChildComponent objects={this.state.objects} />
    ) : (
      <p></p>
    );
    return (
      <div>
        {childComponent}
        <button onClick={() => this.changeButtonState(true)}>
          Change State
        </button>
      </div>
    );
  }
}
