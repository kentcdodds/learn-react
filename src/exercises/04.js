// Class Components and state
import React from 'react'

// normally an interactive application will need to hold state
// somewhere. In React, that's the `state` property of each
// component instance. Here's a simple example of a component
// that uses state and event handlers to update that state:
//
// class NameInput extends React.Component {
//   state = {nameInputValue: ''}
//   handleChange = event => {
//     const inputNode = event.target
//     this.setState({nameInputValue: inputNode.value})
//   }
//   render() {
//     return (
//       <div>
//         <input onChange={this.handleChange} />
//         {this.state.nameInputValue}
//       </div>
//     )
//   }
// }
//
// 🐨 Below, fill out the Counter component so that it
// manages the state of how many times the the button is clicked.
// The text of the button should be the number of times the
// button has been clicked.
//
// 💰 You'll need to know the current count to increment it by one.
// The `setState` API can accept a function which will be passed
// the current state:
// this.setState(currentState => {
//   return { /* the new state */ }
// })
// You'll probably want to use that :)
//
// 💰 make sure that your handleClick is an assignment to an arrow
// function like the handleChange is above. We'll talk about this more
// during the solution.

class Counter extends React.Component {
  render() {
    return <button />
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  return <Counter />
}
Usage.title = 'Class Components and state'

export default Usage
