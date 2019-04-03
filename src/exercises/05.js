// Counter: custom hooks
import React from 'react'

// The cool thing about React hooks is that they're regular JavaScript function
// calls, so we can refactor all the logic for them into little functions.
// If we were to do this with our NameInput component example from the last
// exercise, then we could do this:
// function useInputValue({initialValue = ''} = {}) {
//   const [name, setName] = React.useState(initialValue)
//   const handleChange = event => setName(event.target.value)
//   return [name, handleChange]
// }

// function NameInput() {
//   const [name, handleChange] = useInputValue()
//   return (
//     <>
//       <label>
//         Name: <input defaultValue={name} onChange={handleChange} />
//       </label>
//       <div>You Typed: {name}</div>
//     </>
//   )
// }
//
// "useInputValue" is called a custom hook. Here are fun facts about custom hooks:
// - Custom hooks can technically be called whatever you want, but the
//   convention is to start them with "use"
// - Custom hooks aren't special functions. The only thing that makes them a
//   hook is that they use other hooks
// - Custom hooks can use other custom hooks. Turtles all the way down. 🐢
// - You can choose whatever you want for what the custom hook accepts as
//   arguments and returns. In our example above, we're accepting an object
//   and providing default values, but we can really do whatever we'd like here.
//   And we're also returning a pair of values like useState does. But that's
//   not required either. We can return whatever we want. This just felt like
//   a nice API for this example.
//
// Now any time we want a "name" input, we can reuse this code by simply calling
// the useInputValue custom hook.

// In this exercise, you'll be refactoring our Counter component to use a custom
// hook that we could use anywhere in our codebase.
//
// 🐨 Make a custom hook called useCounter that accepts the step and
// initialCount and returns the count and increment functions
//
// 🐨 Use your custom useCounter hook in the Counter.

function Counter({step = 1, initialCount = 0}) {
  const [count, setCount] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)
  return <button onClick={increment}>{count}</button>
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: custom hooks'

export default Usage
