import { useState, useRef, useEffect } from 'react'
import countPrimeNumbers from '../prime';

export default function CounterFunction({ userName }) {
  const [counter, setCount] = useState(0);
  const [lastAction, setLastAction] = useState('none');
  const [maxNumber, setMaxNumber] = useState(null);
  const [primeNumbers, setPrimeNumbers] = useState(null)
  const [isCalculating, setIsCalculating] = useState(true)


  // execute on every render
  useEffect(() => {
    console.log('Function component mounted')

    setTimeout(() => {

      const maxNumber = 20000;
      const primeNumbers = countPrimeNumbers(maxNumber);
      setIsCalculating(false);
      setMaxNumber(maxNumber);
      setPrimeNumbers(primeNumbers)

    }, 10);
  }, []);

  useEffect(() => {
    console.log("Last action: " + lastAction)

    return () => {
      console.log("last action WAS :" + lastAction)
    }
  }, [lastAction])

  useEffect(() => {
    console.log('Function component mounted');
    let count = 0
    const timer = setInterval(() => {
      count++;
      console.log('Count: ', count)
    }, 1000)

    return (() => {
      console.log("Function component unmounted");
      clearInterval(timer)
    })
  })

  const inputIncrease = useRef();
  const inputDecrease = useRef();


  // console.log("Ref: ", inputIncrease)

  const handleCountIncrease = () => {
    setCount(counter + 1)
    setLastAction('Increased')

    inputIncrease.current.focus();

  }

  const handleCountDecrease = () => {
    setCount(counter - 1)
    setLastAction("Decreased")
    inputDecrease.current.focus()
  }

  console.log('Counter Function called')

  return (
    <div>

      {isCalculating && (
        <div><strong>Calculating prime numbers, please wait....</strong></div>)
      }

      {maxNumber !== null &&
        <div>There are {primeNumbers} prime numbers
          between 2 and {maxNumber}.
        </div>
      }
      Counter for {userName}: {counter}
      <div>Last Action: {lastAction}</div>
      <input type="text"
        placeholder='Focus on increase'
        ref={inputIncrease} />
      <button onClick={handleCountIncrease}>Increase count</button>
      <button onClick={handleCountDecrease}>Decrease Count</button>

      <input type="text"
        placeholder='Focus on decrease'
        ref={inputDecrease} />
    </div>)
}
