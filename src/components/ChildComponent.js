import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    const names = this.props.objects.map((object) => {
      return <h1>{object.name}</h1>;
    });

    return <div>{names}</div>;
  }
}
