// Basic Forms
import React from 'react'

// In React, there actually aren't a ton of things you have to learn
// to interact with forms beyond what you can do with regular DOM
// APIs and JavaScript.
//
// You can attach a submit handler to a form element with the `onSubmit`
// prop. This will be called with the submit event which has a `target`.
// That `target` will reference the `<form>` which has a reference to
// the elements of the form which can be used to get the values out of
// the form.

class UsernameForm extends React.Component {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior
  // of form submit events (which refreshes the page).
  //
  // There are several ways to get the value of the name input:
  //
  // Via their index:
  // event.target.elements[0]
  //
  // Via the elements object by their name:
  // event.target.elements.username.value
  //
  // Or you could create a React ref and get the input that way.
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the above options), and call `this.props.onSubmitUsername`
  // with the value of the input.
  render() {
    // add the `onSubmit` handler prop to the form
    return (
      <form>
        <label htmlFor="name-input">Username:</label>
        <input id="name-input" type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage({
  onSubmitUsername = username => console.log('username', username),
}) {
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
Usage.title = 'Basic Forms'

export default Usage
