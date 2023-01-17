import React from "react";

export default class CounterClass extends React.Component {
  render() {
    const { name } = this.props
    // we can do both on one line:
    // const { name, age } = this.props;
    const age = this.props.age
    return (
      <div>
        Class: {name}, {age}
      </div>
    )
  }
}
