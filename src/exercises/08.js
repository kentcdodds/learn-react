// Counter: advanced custom hooks
import React from 'react'

// Let's do some more custom react hooks work! If I squint, I can see one
// really useful custom hook here called "useLocalStorageState" which would
// return the state and a state updater just like "useState" but it allows you
// to specify a key, initialValue, and serialize/deserialize functions
// (Note: localStorage saves everything as a string).
//
// So for this one, we're going to practice making a custom hook that extracts
// the React.useState and React.useEffect calls.

// 🐨 refactor this to use a custom hook called useLocalStorageState which
// handles the React.useState and React.useEffect calls and manages interacting
// with localStorage properly. It should accept an object that takes the key
// (for localStorage), the initialValue (in case it's not in localStorage already),
// a function for serializing the value to localStorage, and a function for
// deserializing out of localStorage.
// 💰 The `serialize` and `deserialize` functions can default to
//    "identity functions" (functions which simply return what they are passed
//    like: `id => id`)
// 💰 The `deserialize` function will need to pass the returned value to the
//    Number constructor like we're already doing.
//
// 💰 The end result of your Counter should look like this:
// function Counter({step = 1, initialCount = 0}) {
//   const [count, setCount] = useLocalStorageState({
//     key: 'count',
//     initialValue: initialCount,
//     deserialize: v => Number(v),
//   })
//   const increment = () => setCount(c => c + step)
//   return <button onClick={increment}>{count}</button>
// }

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

// 💯 Create another custom hook called useLocalStorageCounter which uses the
// useLocalStorageState custom hook and creates the increment function.
// 💰 The end result of your Counter should look like this:
// function Counter({step, initialCount}) {
//   const [count, increment] = useLocalStorageCounter({
//     step,
//     initialCount,
//   })
//   return <button onClick={increment}>{count}</button>
// }
// NOTE: useLocalStorageCounter will need to provide default values for step and initialCount

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: advanced custom hooks'

export default Usage
