// Counter: optimizations
import React from 'react'

function Counter({step = 1, initialCount = 0}) {
  const [count, setCount] = React.useState(() =>
    Number(window.localStorage.getItem('count') || initialCount),
  )
  const increment = () => setCount(c => c + step)
  React.useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])
  return <button onClick={increment}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: optimizations'

export default Usage
