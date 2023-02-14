import React from "react";
import { createRef } from "react"
import countPrimeNumbers from "../prime";

export default class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      lastAction: 'none',
      maxNumber: null,
      primeNumbers: null,
      isCalculating: true,
    }
    this.inputIncrease = createRef();
    this.inputDecrease = createRef();

    console.log('--- class component constructed --- ');
  }

  componentDidMount() {
    setTimeout(() => {

      const maxNumber = 200;
      const primeNumbers = countPrimeNumbers(maxNumber);
      this.setState({
        isCalculating: false,
        maxNumber: maxNumber,
        primeNumbers: primeNumbers,
      })
    }, 10);

    var count = 0
    this.timer = setInterval(() => {
      count++;
      console.log('Count: ', count)

    }, 1000);

    console.log('Class component mounted');
  }

  componentWillUnmount() {
    console.log('Class component destroyed')
    clearInterval(this.timer)
  }

  render() {

    // we could do this and use a short hand for the rest:
    // const { counter } = this.state.counter;

    const handleIncrementClick = () => {

      this.setState({
        counter: this.state.counter + 1, lastAction: 'Increased'
      });
      this.inputIncrease.current.focus();
    }
    const handleDecrementClick = () => {
      this.setState({ counter: this.state.counter - 1, lastAction: "Deacreased" })
      this.inputDecrease.current.focus();
    }




    console.log('Class componend rendered')

    return (
      <div>


        {this.state.isCalculating && (
          <div><strong>Calculating prime numbers, please wait....</strong></div>)
        }

        {this.state.maxNumber !== null &&
          <div>There are {this.state.primeNumbers} prime numbers
            between 2 and {this.state.maxNumber}.
          </div>
        }

        <div>Counter for {this.props.userName}: {this.state.counter}</div>
        <div>Last Action: {this.state.lastAction}</div>
        <input
          type="text"
          placeholder="Focus on increase"
          ref={this.inputIncrease}
        />
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Decrease</button>

        <input
          type="text"
          placeholder="Focus on decrease"
          ref={this.inputDecrease}
        />
      </div>
    )
  };


  componentDidUpdate(prevProps, prevState) {
    console.log("Calss component updated");
    if (this.state.lastAction !== prevState.lastAction) {
      console.log('TODO: Save Data...');
      this.setState({ displaySavedMessage: true });
    }

  }
}
