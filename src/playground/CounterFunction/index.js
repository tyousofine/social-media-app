import { useState, useRef } from 'react'

export default function CounterFunction() {
  const [counter, setCount] = useState(0);
  const [lastAction, setLastAction] = useState('none')

  const inputIncrease = useRef();
  const inputDecrease = useRef();


  console.log("Ref: ", inputIncrease)

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

  console.log('Render called')

  return (
    <div>
      Counter: {counter}
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
