// Component hooks and simple state
import React from 'react'

function Counter({step = 1, initialCount = 0}) {
  const [count, setCount] = React.useState(initialCount)
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}
Usage.title = 'Component hooks and simple state'

export default Usage
