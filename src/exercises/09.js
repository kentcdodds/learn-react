// Stopwatch: Advanced State
import React from 'react'

// NOTES: Here are some things you'll need to know:
//
// 1. `setInterval` is a JavaScript timer API which works like this:
//
// const intervalId = setInterval(() => {
//   console.log('hello world')
// }, 100)
//
// This will cause the text "hello world" to be logged to the console every
// 100 milliseconds. The intervalId is a variable that can be used to stop
// the interval from running like so:
//
// clearInterval(intervalId)

// 🐨 you'll want these styles to make things look nice :)

// eslint-disable-next-line no-unused-vars
const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}
// eslint-disable-next-line no-unused-vars
const labelStyles = {
  fontSize: '5em',
  display: 'block',
}

function Stopwatch() {
  // 🐨 You'll need to initialize your state here.
  // You have three things you need to keep track of:
  // 1. `lapse` - the number of milliseconds since "Start" was clicked.
  // 2. `running` - whether the stopwatch is running (so you can display "Start"
  //     or "Stop" and so you know what to do when the user clicks that button)
  // 3. `intervalId` - the ID to the interval that's currently running (so you
  //    can stop the interval from running when the user clicks "Stop" or
  //    "Clear" or if this component is removed from the page.)
  //
  // 💰 you'll call useState three times, first for the `lapse` state (starts at
  // `0`), second for the `running` state (starts at `false`), and third for the
  // `intervalId` state (which can start with null).

  // 💰 there are several places where you need to call
  // `clearInterval(intervalId)` so you can create a small `stopStopwatch`
  // function here if you want.

  // What happens if this component is unmounted (removed from the page) when
  // the stopwatch is still running? We'll be calling `setLapse` on a component
  // that no longer exists! We need to make sure that when this component is
  // unmounted, we clear the interval. You can do this by providing a cleanup
  // function to a React.useEffect call that only runs once.
  //
  // 🐨 Create an effect callback that does nothing but returns a function that
  // clears the interval. Provide an empty inputs array to ensure that it's only
  // called once.

  // eslint-disable-next-line no-unused-vars
  function handleRunClick() {
    // if the stopwatch is running, then we just need to stop the stopwatch
    // otherwise, we need to start it up again:
    //   - get the start time via: Date.now() - lapse
    //   - start the interval (don't forget to store the intervalId!)
    //   - In the interval callback, update the lapse to: Date.now() - startTime
    //   - make the interval run ASAP by passing `0` as the time (second argument to setInterval)
    // make sure to toggle the running state
  }

  // eslint-disable-next-line no-unused-vars
  function handleClearClick() {
    // reset all the state
    // - stop the stopwatch
    // - set running to false
    // - set lapse to 0
  }

  // return (
  //   <div>
  //     <label>{/* Render the lapsed time with the suffix `ms` */}</label>
  //     <button>{/* Render start or stop depending on whether it's running */}</button>
  //     <button>Clear</button>
  //   </div>
  // )
  return 'todo'
}

function Usage() {
  return (
    <div style={{textAlign: 'center'}}>
      <Stopwatch />
    </div>
  )
}
Usage.title = 'Stopwatch: advanced state'

export default Usage
