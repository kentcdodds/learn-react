// Event handlers
import React from 'react'

// An application isn't all that interesting if you can't interact with it.
// We've got a button we can click on and an input we can type into.
// If you check out the Usage below, it's passing some functions to our
// component via props. Let's wire those up to the event handlers on our
// elements.
//
// If you want to apply a `click` handler to an element, you'll pass a function
// to the `onClick` prop of that element.
//
// If you want to apply a `change` handler to an element, you'll pass a function
// to the `onChange` prop of that element.
//
// 💰 the browser `change` event normally only fires after the input has been changed
// and the user "blurs" the input. In react it happens whenever the value of the input
// has changed.

// 🐨 Accept props to the `App` component
function App() {
  return (
    <div>
      {/* 🐨 apply the appropriate click handler here */}
      <button>Click me!</button>
      {/* 🐨 apply the appropriate change handler here */}
      <input />
    </div>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  const onButtonClick = () => console.log('you clicked the button!')
  const onInputChange = event =>
    console.log('the input value is: ', event.target.value)
  return <App onButtonClick={onButtonClick} onInputChange={onInputChange} />
}
Usage.title = 'Event handlers'

export default Usage
