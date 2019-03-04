// Counter: optimizations
import React from 'react'

// There are two optimizations we're going to make in this exercise:
// 1. React.useState: Right now, every time our component function is run, our
//    function reads from localStorage. This is problematic because it could be
//    a performance bottleneck (reading from localStorage can be slow). And
//    what's more we only actually need to know the value from localStorage
//    the first time this component is rendered! So the additional reads are
//    wasted effort.
//
//    To avoid this problem, React's useState hook allows you to pass a function
//    instead of the actual value, and then it will only call that function to
//    get the state value when the component is rendered the first time.
//    So you can go from this:
//      React.useState(someExpensiveComputation())
//    To this:
//      React.useState(() => someExpensiveComputation())
//
//    And the "someExpensiveComputation" function will only be called when it's
//    needed!
//
//
// 2. React.useEffect: The callback we're passing to React.useEffect is called
//    after _every_ render of our component (including re-renders). This is
//    exactly what we want because we want to make sure that the count is saved
//    into localStorage whenever it changes, but there are various reasons a
//    component can be re-rendered (for example, when a parent component in the
//    application tree gets re-rendered).
//
//    Really, we _only_ want localStorage to get updated when the `count` state
//    actually changes. It doesn't need to re-run any other time.
//    Luckily for us, React.useEffect allows you to pass a second argument
//    called the "inputs array" which signals to React that your effect callback
//    function should be called when (and only when) those inputs change.
//    So we can use this to avoid doing unecessary work!

// NOTE: even though it's called the "inputs array," react does not actually
// pass those values as inputs to your effect callback. It's more conceptual.

function Counter({step = 1, initialCount = 0}) {
  // 🐨 👇 change this from React.useState(value) to React.useState(() => value)
  const [count, setCount] = React.useState(
    Number(window.localStorage.getItem('count') || initialCount),
  )
  const increment = () => setCount(c => c + step)
  React.useEffect(() => {
    window.localStorage.setItem('count', count)
  })
  // 🐨 👆 on the line above, add the "inputs array" to signal to React that
  // this effect depends on `count`
  return <button onClick={increment}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: optimizations'

export default Usage
