// Counter: useEffect
import React from 'react'

// React.useEffect is a built-in hook that allows you to run some custom code
// after React renders (and re-renders) your component to the DOM. It accepts
// a callback function which React will call after the DOM has been updated:
//
// React.useEffect(() => {
//   // your side-effect code here.
//   // this is where you can make HTTP requests or interact with browser APIs.
// })
//
// In this exercise, we're going to enhance our counter component to get it's
// initial state value from localStorage (if available) and keep localStorage
// updated as the count is incremented.

function Counter({step = 1, initialCount = 0}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 Number(window.localStorage.getItem('count') || initialCount)
  const [count, setCount] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `count` in localStorage.
  return <button onClick={increment}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useEffect'

export default Usage
