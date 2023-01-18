import React from "react";


export default class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      lastAction: 'none'
    }
  }

  render() {
    // we could do this and use a short hand for the rest:
    // const { counter } = this.state.counter;

    const handleIncrementClick = () => {
      // this.state.counter = 15;
      // correct way: use this.setState, and inside provide an object
      // const updatedCounter = this.state.counter + 1;
      this.setState({
        counter: this.state.counter + 1, lastAction: 'Increased'
      })
    }

    const handleDecrementClick = () => {
      this.setState({ counter: this.state.counter - 1, lastAction: "Deacreased" })
    }

    return (
      <div>
        Counter: {this.state.counter}
        <div>Last Action: {this.state.lastAction}</div>
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Decrease</button>
      </div>
    )
  };
}
