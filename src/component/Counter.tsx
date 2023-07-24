import React, { useState } from 'react';
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
