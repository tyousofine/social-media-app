import { useState } from 'react'

export default function CounterFunction() {
  const [counter, setCount] = useState(0);
  const [lastAction, setLastAction] = useState('none')

  const handleCountIncrease = () => {
    setCount(counter + 1)
    setLastAction('Increased')
  }

  const handleCountDecrease = () => {
    setCount(counter - 1)
    setLastAction("Decreased")
  }

  return (
    <div>
      Counter: {counter}
      <div>Last Action: {lastAction}</div>
      <button onClick={handleCountIncrease}>Increase count</button>
      <button onClick={handleCountDecrease}>Decrease Count</button>
    </div>)
}
