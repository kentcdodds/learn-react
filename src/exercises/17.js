// React.memo
import React from 'react'

// Typically you don't need to do much for your app to be fast with React. I've
// been writing React apps since 2015 and I've never once needed to use the
// optimizations that React exposes.
//
// However, sometimes, rendering and re-rendering certain components can be
// computationally expensive for one reason or another. When that's the case,
// you can use some of React's optimization APIs:
// https://reactjs.org/docs/optimizing-performance.html
//
// For function components you can use React.memo which is a function you call
// and pass your component function. It returns a special component which will
// only re-render when its props change. For example:
//
// function App() {
//   const [count, setCount] = React.useState(0)
//   const increment = () => setCount(c => c + 1)
//   return (
//     <div>
//       <button onClick={increment}>{count}</button>
//       <FavoriteNumber number={4} />
//     </div>
//   )
// }
// function FavoriteNumber({number}) {
//   return <div>My favorite number is {number}</div>
// }
// ReactDOM.render(<App />, document.getElementById('root'))
//
// With this setup, the FavoriteNumber component can only ever be re-rendered
// when App is re-rendered, and that will only happen when `setCount` is called.
// But rendering FavoriteNumber over and over again is unnecessary because
// the `number` prop never changes (it's hardcoded to 4), so there's really
// no reason to call that function.
//
// Let's pretend that FavoriteNumber was doing something computationally
// expensive and we wanted to only have it re-render when the `number` prop
// changed. React has this use-case built in via React.memo:
//
// const FavoriteNumber = React.memo(function FavoriteNumber({number}) {
//   return <div>My favorite number is {number}</div>
// })
//
// With that simple change, now the FavoriteNumber component will never be
// re-rendered (unless the props change).

// 🐨 Wrap the "Upper" component here in React.memo
function Upper({children}) {
  const [count, setCount] = React.useState(0)
  console.log('rendered', children) // don't change this line... (it's used in the tests)
  return (
    <div>
      Uppercase version: {children.toUpperCase()}{' '}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
function Usage() {
  const [first, setFirstName] = React.useState('')
  const [last, setLastName] = React.useState('')
  return (
    <div>
      <label htmlFor="first-name-input">First Name</label>
      <input
        id="first-name-input"
        onChange={e => setFirstName(e.target.value)}
      />
      <Upper>{first}</Upper>
      <hr />
      <label htmlFor="last-name-input">Last Name</label>
      <input id="last-name-input" onChange={e => setLastName(e.target.value)} />
      <Upper>{last}</Upper>
    </div>
  )
}
Usage.title = 'React.memo'

export default Usage
